(ns chatgpt.api.routes
  (:require [chatgpt.api.handlers :as handlers]))

(defn routes
  [env]
  [["/llm" {:get {:handler handlers/llm}}]
   ["/echo" {:get handlers/echo}]])

(comment
  (routes [])
  )