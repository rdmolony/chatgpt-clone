(ns chatgpt.api.server
  (:require [chatgpt.api.config :as config]
            [chatgpt.api.router :as router]
            [ring.adapter.jetty :as jetty]))

(defn app
  [env]
  (router/router env))

(defonce server (atom nil))

(defn start-server []
  (reset! server
          (jetty/run-jetty (fn [req] (app req))
                           {:port config/api-port
                            :join? false})))

(defn stop-server []
  (when-some [s @server]
    (.stop s)
    (reset! server nil)))

(defn -main
  "This is the main entry point for the REST API server."
  [& _args]
  (start-server))

(comment
  (start-server)
  @server 
  (stop-server)
  )
  