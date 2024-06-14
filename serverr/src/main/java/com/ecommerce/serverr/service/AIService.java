package com.ecommerce.serverr.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class AIService {

    @Value("${openai.api.key}")
    private static String apiKey;
    public static List<Object[]> recomendacaoLivrosIa(String livrosComprados) throws IOException {
        String url = "https://api.openai.com/v1/completions";

        String requestBody =
                "{\n" +
                "    \"model\": \"text-davinci-003\",\n" +
                "    \"prompt\": \"You are a helpful assistant designed to output JSON. " +
                "    \"max_tokens\": 150\n" +
                "}";

        HttpURLConnection connection = (HttpURLConnection) new URL(url).openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestProperty("Authorization", "Bearer " + apiKey);

        connection.setDoOutput(true);

        try (OutputStream outputStream = connection.getOutputStream()) {
            byte[] input = requestBody.getBytes(StandardCharsets.UTF_8);
            outputStream.write(input, 0, input.length);
        }

        int statusCode = connection.getResponseCode();

        StringBuilder response = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(
                statusCode < 400 ? connection.getInputStream() : connection.getErrorStream()))) {
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
        }

        System.out.println("Response Status Code: " + statusCode);
        System.out.println("Response Body: " + response.toString());

        return null;
    }
}
