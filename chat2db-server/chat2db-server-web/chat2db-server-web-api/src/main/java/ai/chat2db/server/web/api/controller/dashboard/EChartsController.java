package ai.chat2db.server.web.api.controller.dashboard;

import ai.chat2db.server.domain.api.model.ImageResult;
import ai.chat2db.server.domain.api.service.EChartsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/echarts")
@RestController
public class EChartsController {

    @Autowired
    private EChartsService eChartsService;

    @PostMapping("/generateImage")
    public ImageResult generateImage(@RequestBody String option) {
        return eChartsService.generateImage(option);
    }
}
