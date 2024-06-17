package com.ecommerce.serverr.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

@Service
public class AIService {

    private static final String API_KEY = "TROCAR_API_KEY";
    private static final String MODEL_NAME = "gemini-1.5-flash";
    private static final String ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/" + MODEL_NAME + ":generateContent?";

    public static String recomendacaoLivrosIa(String livrosComprados, String livrosDisponiveis) throws IOException {
        URL url = new URL(ENDPOINT + "key=" + API_KEY);

        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setDoOutput(true);


        String prompt = "You are a helpful assistant designed to output simple JSON objects for use in JAVA in the following format: { livros: [ nomelivro: { motivo: motivoDaRecomendacao}, nomelivro2:{... ]}" +
                "\n I have an online library and a user just logged in. Recommend me the best 5 books based on the already bought by this user. ONLY 5 PLEASE. " +
                "\n heres the bought books:" + livrosComprados + "and here are all the available books:" + livrosDisponiveis +
                "please just give me a simple json that i can use with JAVA easily with the book name and the reason of recommendation in portuguese BR.";

        String jsonString = "{\"contents\": [{ \"parts\": [{ \"text\": \"" + prompt + "\" }]}]}";

        try (OutputStream os = connection.getOutputStream()) {
            byte[] input = jsonString.getBytes(StandardCharsets.UTF_8);
            os.write(input, 0, input.length);
        }

        StringBuilder response = new StringBuilder();
        if (connection.getResponseCode() == HttpURLConnection.HTTP_OK) {
            try (BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8))) {
                String line;
                while ((line = br.readLine()) != null) {
                    response.append(line);
                }
            }
        }

        connection.disconnect();

        JSONObject jsonObject = new JSONObject(response.toString());

        JSONArray candidates = jsonObject.getJSONArray("candidates");

        JSONObject candidate = candidates.getJSONObject(0);

        JSONObject content = candidate.getJSONObject("content");

        JSONArray parts = content.getJSONArray("parts");
        JSONObject part = parts.getJSONObject(0);

        String text = part.getString("text");

        return text.replace("```json", "").replace("```", "").replaceAll("`\\n", "").trim();
    }
}
