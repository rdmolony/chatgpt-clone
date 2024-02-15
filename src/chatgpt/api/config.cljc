(ns chatgpt.config)

(def api-port 3000)

(def api-location
  (str "http://localhost:" api-port))

(def shadow-cljs-port 8280)

(def shadow-cljs-location
  (str "http://localhost:" shadow-cljs-port))
