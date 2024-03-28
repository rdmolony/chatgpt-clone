import ballerina/http;
import ballerina/io;

import ballerinax/openai.chat;

configurable string openAIToken = ?;

service /openai on new http:Listener(9999) {
    resource function get chat/completions(chat:ChatCompletionRequestMessage[] messages) returns string | error? {
        chat:Client chatClient = check new ({auth: {token: openAIToken}});
        chat:CreateChatCompletionResponse response = check chatClient->/chat/completions.post(
            {
                model: "gpt-3.5-turbo",
                messages: messages
            }
        );
        chat:CreateChatCompletionResponse_choices[] choices = response.choices;
        return choices[0].message?.content;
    };

    resource function get scratchpad(chat:CreateChatCompletionRequest payload) returns error? {
        io:print(payload);
    };
};
