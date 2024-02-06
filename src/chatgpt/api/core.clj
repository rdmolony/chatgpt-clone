(ns chatgpt.api.core
  (:require [chatgpt.api.config :as config]
            [ring.adapter.jetty :as jetty]
            [reitit.ring :as ring]
            [clojure.pprint :as pprint]))

(defonce server (atom nil))

(defn handler [_]
  {:status 200
   :body "ok"
   :headers {"Content-Type" "application/json"
             "Access-Control-Allow-Origin" config/shadow-cljs-location}})

(def ^:private api-routes
  [["/" {:get handler}]])


;; ----------------------------------------------------------------------------


(def app
  (ring/ring-handler
   (ring/router
    api-routes)))

(comment
  (nth api-routes 0)
  app
  (app {:request-method :get :uri "/"})
  )

(defn start-server []
  (reset! server
          (jetty/run-jetty (app)  ;; a really basic handler
                           {:port config/api-port       ;; listen on port 3001
                            :join? false}))) ;; don't block the main thread

(defn stop-server []
  (when-some [s @server]
    (.stop s)
    (reset! server nil)))

(defn -main
  "This is the main entry point for the REST API server."
  [& _args]
  ()
  )

(comment
  (start-server)
  @server
  (stop-server)
  (app {}))
  