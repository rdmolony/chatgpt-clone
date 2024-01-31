(ns chatgpt.events
  (:require
   [ajax.core :as ajax]
   [re-frame.core :as re-frame] 
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [chatgpt.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-db
 :update-prompt
 (fn-traced [db [_ prompt]]
            (assoc db :prompt prompt)))

(re-frame/reg-event-db
 :update-llm-response
 (fn-traced [db [_ message]]
            (let [counter (:prompt-counter db)
                  message (conj {counter {:llm message}})]
               (assoc db :messages message))))

(re-frame/reg-event-db
 :report-llm-failure
 (fn-traced [db [_ result]]
            (assoc db :llm-failure result)))

(re-frame/reg-event-fx
 :submit-prompt
 (fn-traced [{:keys [db]} event]
            {:http-xhrio
             {:method :get
              :url    "https://api.github.com/orgs/day8"
              :timeout         8000
              :response-format (ajax/json-response-format {:keywords? true}) 
              :on-success  [:update-llm-response]
              :on-fail     [:report-llm-failure]}
             :db
             (let [counter (inc (:prompt-counter db))
                  message (conj {counter {:user (:prompt db) :llm ""}})]
              (-> db
                  (update :messages conj message)
                  (assoc :prompt-counter counter)))}))
