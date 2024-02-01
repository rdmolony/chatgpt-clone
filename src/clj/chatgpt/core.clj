(ns web-dev.core
  (:require [ring.adapter.jetty :as jetty]
            [clojure.pprint :as pprint]))

(defonce server (atom nil))

(defn app [req]
  (case (:uri req)
    {:status 200
     :body (with-out-str (pprint/pprint req))
     :headers {"Content-Type" "text/plain"}}))

(defn start-server []
  (reset! server
          (jetty/run-jetty (fn [req] (app req))  ;; a really basic handler
                           {:port 3001       ;; listen on port 3001
                            :join? false}))) ;; don't block the main thread

(defn stop-server []
  (when-some [s @server]
    (.stop s)
    (reset! server nil)))

(comment
  (start-server)
  @server
  (stop-server)
  (app {}))
  