package com.ecommerce.serverr.service;

import com.ecommerce.serverr.form.ChatForm;
import com.ecommerce.serverr.repository.LivroRepository;
import com.ecommerce.serverr.validator.ClienteValidator;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.StringJoiner;

@Service
public class AIService {
    private static final String API_KEY = "API_KEY_AQUI";
    private static final String MODEL_NAME = "gemini-1.5-flash";
    private static final String ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/" + MODEL_NAME + ":generateContent?";

    private final LivroRepository repository;

    public AIService(LivroRepository repository) { this.repository = repository; }

    public String chat(ChatForm form) throws Exception {
        StringJoiner livrosComprados = new StringJoiner(", ");
        StringJoiner livrosDisponiveis = new StringJoiner(", ");

        repository.buscarLivrosCompradosPorCliente(form.getClienteId()).forEach(livrosComprados::add);
        repository.buscarLivrosDisponiveis().forEach(livrosDisponiveis::add);

        HttpURLConnection connection = realizarConexao(form.getMensagem(), livrosComprados.toString(), livrosDisponiveis.toString());

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

    private static HttpURLConnection realizarConexao(String mensagem, String livrosComprados, String livrosDisponiveis) throws IOException {
        URL url = new URL(ENDPOINT + "key=" + API_KEY);

        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setDoOutput(true);

        String prompt = "Dados enviados nesta requisição: \n" +
                "- MENSAGEM DIGITADA PELO USUÁRIO:" + mensagem + "\n" +
                "- LIVROS JÁ ADQUIRIDOS PELO USUÁRIO:" + livrosComprados + "\n" +
                "- LIVROS DISPONÍVEIS:" + livrosDisponiveis + "\n" +
                "\n" +
                "  Você é um assistente virtual para um e-commerce de livros chamado Mundo dos livros. " +
                "Sua função é ajudar os usuários a encontrar livros com base nas mensagens fornecidas pelo cliente. " +
                "Você pode recomendar os livros disponiveis na loja ou não, caso não tenha disponibilidade na loja favor avisar. " +
                "Os livros disponíveis serão enviados acima. " +
                "Caso o cliente peça para recomendar algo baseado em suas compras anteriores acima segue os seus livros comprados. " +
                "\n" +
                "Preciso que todas as suas respostas sejam JSON válidos e nada mais e possam ser interpretadas corretamente pelo JSONObject do java facilmente.\n" +
                "\n" +
                "Se o usuário fizer uma pergunta que não tenha a ver com livros, fale que entende o que o usuario está dizendo " +
                "e apesar de não poder ajudar diretamente, recomende um livro a ver com o assunto com o nome do livro entre aspas, mesmo que não disponível.\n" +
                "Se a mensagem do usuário não fizer nenhum sentido, responda com uma mensagem genérica. \n" +
                "Siga este padrão de resposta:\n" +
                "{ mensagem: mensagem incluindo recomendações caso necessário, isSender: false } \n" +
                " O isSender indica que não foi o usuário que escreveu aquela mensagem, então será sempre false";

        String jsonRequest = "{\"contents\": [{ \"parts\": [{ \"text\": \"" + prompt + "\" }]}]}";

        try (OutputStream os = connection.getOutputStream()) {
            byte[] input = jsonRequest.getBytes(StandardCharsets.UTF_8);
            os.write(input, 0, input.length);
        }
        return connection;
    }
}
