(ns chatgpt.events
  (:require
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
 :submit-prompt
 (fn-traced [db _]
            (let [counter (inc (:prompt-counter db))
                  message (conj {counter {:user (:prompt db) :llm (:prompt db)}})]
              (-> db
                  (update :messages conj message)
                  (assoc :prompt-counter counter)))))
