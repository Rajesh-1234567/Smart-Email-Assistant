package com.email.writer.app;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor // Automatically injects the final field
public class EmailGeneratorController {

    private final EmailGeneratorService emailGeneratorService;

//    public EmailGeneratorController(EmailGeneratorService emailGeneratorService) {
//        this.emailGeneratorService = emailGeneratorService;
//    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        try {
            if (emailRequest.getEmailContent() == null || emailRequest.getEmailContent().trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Error: Email content cannot be empty.");
            }

            String response = emailGeneratorService.generateEmailReply(emailRequest);
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error generating email: " + e.getMessage());
        }
    }

}
