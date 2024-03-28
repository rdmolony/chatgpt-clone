import ballerina/http;

import ballerinax/openai.chat;

configurable string openAIToken = ?;

service /openai on new http:Listener(9999) {

    resource function post
                      chat/completions(chat:CreateChatCompletionRequest payload)
                      returns string | error? {

        chat:Client chatClient =
            check new ({auth: {token: openAIToken}});

        chat:CreateChatCompletionResponse response =
            check chatClient->/chat/completions.post(payload);

        chat:CreateChatCompletionResponse_choices[] choices =
            response.choices;

        return choices[0].message?.content;

    };

};
