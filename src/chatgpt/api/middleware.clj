(ns chatgpt.api.middleware
  (:require [muuntaja.middleware :as muuntaja]))

(defn wrap-formats [handler]
  (-> handler
      println
      (muuntaja/wrap-format)))
