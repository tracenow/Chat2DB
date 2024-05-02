package ai.chat2db.server.web.api.controller.rdb.vo;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class SimpleExecuteResultVO implements Serializable {

    /**
     * List of display headers
     */
    private List<String> fieldList;

    /**
     * list of data
     */
    private List<List<String>> dataList;
}
