package com.ecommerce.serverr.service;

import org.springframework.stereotype.Service;

@Service
public class AIService {

    public static String recomendacaoLivrosIa(String livrosComprados, String livrosDisponiveis) {
//        var openAI = SimpleOpenAI.builder()
//                .apiKey("")
//                .build();
//        var chatRequest = ChatRequest.builder()
//                .model("gpt-3.5-turbo-instruct")
//                .message(ChatMessage.SystemMessage.of("You are a helpful assistant designed to output JSON."))
//                .message(ChatMessage.UserMessage.of("I have an online library and a user just logged in, " +
//                        "recommend me the best 5 books based on the already bought by this user, " +
//                        "heres the bought books:" + livrosComprados + "and here are all the available books:" + livrosDisponiveis))
//                .responseFormat(ResponseFormat.JSON_OBJECT)
//                .temperature(0.0)
//                .maxTokens(500)
//                .build();
//        var futureChat = openAI.chatCompletions().create(chatRequest);
//        var chatResponse = futureChat.join();
//        System.out.println(chatResponse.firstContent());

        return null;
    }
}
