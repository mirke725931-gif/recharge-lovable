package com.recharge.backend.users.email;

public interface EmailService {
    void sendEmail(String to, String subject, String content);
}
