package ai.chat2db.server.web.api.controller.dashboard;

import ai.chat2db.server.domain.api.model.ImageResult;
import ai.chat2db.server.domain.api.service.EChartsService;
import ai.chat2db.server.web.api.controller.dashboard.request.EChartsOptionRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/echarts")
@RestController
public class EChartsController {

    @Autowired
    private EChartsService eChartsService;

    @PostMapping("/generateImage")
    public ImageResult generateImage(@RequestBody EChartsOptionRequest eChartsOptionRequest) {
        String newOption = eChartsOptionRequest.getOption()
                .replaceAll("```json", "")
                .replaceAll("```", "")
                .replaceAll("\n", "");
        log.info(newOption);
        return eChartsService.generateImage(newOption);
    }
}
