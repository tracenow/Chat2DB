package ai.chat2db.server.web.api.controller.ai.sse;

import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyEmitter;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.lang.reflect.Field;
import java.util.Objects;
import java.util.Set;

public class AiSseEmitter extends SseEmitter {

    public AiSseEmitter() {
        super();
    }

    public AiSseEmitter(Long timeout) {
        super(timeout);
    }

    public String toString() {
        try {
            Field field = ResponseBodyEmitter.class.getDeclaredField("earlySendAttempts");
            field.setAccessible(true);
            Set<DataWithMediaType> earlySendAttempts = (Set<DataWithMediaType>) field.get(this);
            StringBuilder sb = new StringBuilder();
            earlySendAttempts.stream()
                    .filter(earlySendAttempt -> !Objects.equals(earlySendAttempt.getData(), "data:"))
                    .filter(earlySendAttempt -> !Objects.equals(earlySendAttempt.getData(), "\n\n"))
                    .forEach(earlySendAttempt -> {
                        sb.append(earlySendAttempt.getData());
                    });
            return sb.toString();
        } catch (NoSuchFieldException e) {
            throw new RuntimeException(e);
        } catch (IllegalAccessException e) {
            throw new RuntimeException(e);
        }
    }
}
