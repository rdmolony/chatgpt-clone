(ns chatgpt.api.routes
  (:require [chatgpt.api.handlers :as handlers]))

(def routes
  [["/llm" {:get {:handler handlers/llm}}]
   ["/echo" {:get handlers/echo}]])
