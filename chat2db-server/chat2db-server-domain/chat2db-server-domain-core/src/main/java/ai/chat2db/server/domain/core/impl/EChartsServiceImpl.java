package ai.chat2db.server.domain.core.impl;

import ai.chat2db.server.domain.api.model.ImageResult;
import ai.chat2db.server.domain.api.service.EChartsService;
import com.alibaba.fastjson2.JSON;
import com.aliyun.oss.OSS;
import com.aliyun.oss.model.ObjectMetadata;
import com.aliyun.oss.model.PutObjectRequest;
import com.aliyun.oss.model.PutObjectResult;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class EChartsServiceImpl implements EChartsService {

    @Value("${oss.endpoint-name}")
    private String ossEndpointName;

    @Value("${oss.bucket-name}")
    private String ossBucketName;

    @Value("${echarts.phantom-js-path}")
    private String phantomjsPath;

    @Value("${echarts.convert-js-path}")
    private String convertJsPath;

    @Value("${echarts.generate-image-path}")
    private String generateImagePath;

    @Resource
    private OSS ossClient;

    @Override
    public ImageResult generateImage(String option) {
        // 基于phantomjs加载渲染echarts图表，并生成本地文件
        String randomFileName = UUID.randomUUID() + "-" + System.currentTimeMillis();
        String shellFileName = generateImagePath + "/" + randomFileName + ".sh";
        String imageFileName = generateImagePath + "/" + randomFileName + ".png";
        String ossObjectName = "image/" + randomFileName + ".png";
        generateImageAndUploadToOSS(option, shellFileName, imageFileName, ossObjectName);
        ImageResult imageResult = new ImageResult();
        imageResult.setUrl(String.format("%s.%s/%s", ossBucketName, ossEndpointName, ossObjectName));
        return imageResult;
    }

    private void generateImageAndUploadToOSS(String option, String shellFileName, String imageFileName, String ossObjectName) {
        Path shelFilePath = Paths.get(shellFileName);
        try {
            final String cmd = String.format("%s %s -options %s -outfile %s", phantomjsPath, convertJsPath, JSON.toJSONString(option), imageFileName);
            // 生成用于生成图片的shell脚本
            Files.write(shelFilePath, cmd.getBytes(StandardCharsets.UTF_8));
            // 执行本地命令生成图片文件
            Process process = Runtime.getRuntime().exec("sh " + shellFileName);
            process.waitFor();
            File imageFile = new File(imageFileName);
            // 上传图片文件至OSS
            putImageFileToOSS(imageFile, ossObjectName);
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            try {
                // 清理临时生成的shell以及png图像文件
                Files.delete(shelFilePath);
                Files.delete(Paths.get(imageFileName));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }

    private PutObjectResult putImageFileToOSS(File file, String objectName) {
        PutObjectRequest putObjectRequest = new PutObjectRequest(ossBucketName, objectName, file);
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType("image/png");
        putObjectRequest.setMetadata(metadata);
        return ossClient.putObject(putObjectRequest);
    }
}
