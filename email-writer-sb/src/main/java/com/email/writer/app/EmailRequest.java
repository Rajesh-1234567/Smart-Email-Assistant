package com.email.writer.app;

import lombok.*;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class EmailRequest {
    private String emailContent;
    private String tone;

}