(ns chatgpt.api.server
  (:require [chatgpt.api.config :as config]
            [chatgpt.api.router :refer [router]]
            [ring.adapter.jetty :as jetty])

(defonce server (atom nil))

(defn start-server []
  (reset! server
          (jetty/run-jetty (fn [req] (router req))
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
  (app)
  )
  