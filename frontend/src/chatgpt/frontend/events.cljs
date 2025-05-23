(ns chatgpt.frontend.events
  (:require 
   [ajax.core :as ajax]
   [re-frame.core :as re-frame] 
   [day8.re-frame.http-fx]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [chatgpt.frontend.db :as db]
   [chatgpt.frontend.prompt.openai :as openai]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::update-prompt
 (fn-traced [db [_ prompt]]
            (assoc db :prompt prompt)))

(re-frame/reg-event-fx
 ::submit-prompt
 (fn-traced [{:keys [db]} event]
            {:db (let [counter (inc (:prompt-counter db)) 
                       message (conj {counter {:user (:prompt db) :llm ""}})] 
                   (-> db 
                       (update :messages conj message)
                       (assoc :prompt-counter counter)
                       (assoc :waiting-for-llm? true)))
            :http-xhrio {:method          :post
                         :uri             "http://localhost:9999"
                         :timeout         8000                                          
                         :response-format (ajax/json-response-format {:keywords? true})
                         :on-success      [::fetch-users-success]
                         :on-failure      [::fetch-users-failure]}}))

(re-frame/reg-event-db
 ::fetch-users-success
 (fn-traced [db [_ response]]
            (assoc db :llm-success response)))

(re-frame/reg-event-db
 ::fetch-users-failure
 (fn-traced [db [_ response]]
            (assoc db :llm-failure response)))
