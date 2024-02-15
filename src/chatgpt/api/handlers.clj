(ns chatgpt.api.handlers)

(defn llm [req]
  {:status 200
   :body {"llm" "Chitter chatter..."}
   :headers {"Content-Type" "application/json"
             "Access-Control-Allow-Origin" config/shadow-cljs-location}})

(defn echo [req]
  {:status 200
   :body (with-out-str (pprint/pprint req))})