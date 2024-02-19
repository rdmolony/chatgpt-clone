import ballerina/http;

import ballerinax/openai.chat;

configurable string openAIToken = ?;

service /llm on new http:Listener(9999) {
    resource function get chat(string prompt) returns string | error? {
        chat:Client chatClient = check new ({auth: {token: openAIToken}});
        chat:CreateChatCompletionResponse response = check chatClient->/chat/completions.post(
            {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        "role": "system",
                        "content": "You are a helpful assistant."
                    },
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "text",
                                "text": prompt
                            }
                        ]

                    }
                ]
            }
        );
        chat:CreateChatCompletionResponse_choices[] choices = response.choices;
        return choices[0].message?.content;
    };
};
