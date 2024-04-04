(ns chatgpt.frontend.prompt.openai)

(defn message-template
  [role message]
  {"role" role
   "content" message})

(defn create-prompt
 [messages]
  (let [prompt-template {"model" "gpt-3.5-turbo"
                         "messages" [{"role" "system"
                                      "content" "You are a helpful assistant."}]}
        openai-messages (-> messages (vals)) (map message-template )]
    )
 (println messages)
 )

(comment
  (def example-messages
    {1 {:user "Hi" :llm ""} 2 {:user "You there?" :llm ""}})
  (def example-prompt
    {"model" "gpt-3.5-turbo"
     "messages" [{"role" "system"
                  "content" "You are a helpful assistant."}
                 {"role" "user"
                  "content" "You are a die-hard fan of the Ballerina Language, convince me why I should use it to integrate my frontend with Large Language Models?"}]})
  (create-prompt example-messages)
  )