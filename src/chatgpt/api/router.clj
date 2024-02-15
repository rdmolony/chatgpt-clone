(ns chatgpt.api.router
  (:require [reitit.ring :as ring]
            [ring.util.http-response :as response]
            [chatgpt.api.routes :refer [routes]]))

(def router
  (ring/ring-handler
   (ring/router
    routes)
   (ring/create-default-handler
    {:not-found (constantly (response/not-found "404 - Page not found"))})))
