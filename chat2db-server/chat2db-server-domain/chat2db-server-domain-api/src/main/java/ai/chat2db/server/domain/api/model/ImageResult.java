package ai.chat2db.server.domain.api.model;

import lombok.Data;

/**
 * ai图片生成返回结果
 */
@Data
public class ImageResult {

    /**
     * 图片地址
     */
    private String url;
}
