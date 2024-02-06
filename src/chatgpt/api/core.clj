(ns chatgpt.api.core
  (:require [chatgpt.api.config :as config]
            [chatgpt.api.middleware :as middleware]
            [ring.adapter.jetty :as jetty]
            [reitit.ring :as ring]
            [ring.util.http-response :as response]
            [clojure.pprint :as pprint]))

(defonce server (atom nil))

(defn llm [req]
  {:status 200
   :body {"llm" "Chitter chatter..."}
   :headers {"Content-Type" "application/json"
             "Access-Control-Allow-Origin" config/shadow-cljs-location}})

(defn echo [req]
  {:status 200
   :body (with-out-str (pprint/pprint req))})

(def ^:private api-routes
  [["/llm" {:get {:handler llm}}]
   ["/echo" {:get echo}]])


;; ----------------------------------------------------------------------------


(def app
  (ring/ring-handler
   (ring/router
    api-routes)
   (ring/create-default-handler
    {:not-found (constantly (response/not-found "404 - Page not found"))})))

(comment
  (nth api-routes 0)
  app
  (-> {:request-method :get :uri "/llm"} app)
  (-> {:request-method :get :uri "/echo"} app)
  )

(defn start-server []
  (reset! server
          (jetty/run-jetty (fn [req] (-> req app))
                           {:port config/api-port
                            :join? false})))

(defn stop-server []
  (when-some [s @server]
    (.stop s)
    (reset! server nil)))

(defn -main
  "This is the main entry point for the REST API server."
  [& _args]
  (start-server)
  )

(comment
  (start-server)
  @server 
  (stop-server)
  (app)
  )
  