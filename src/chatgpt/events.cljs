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
 :submit-message
 (fn-traced [db [_ message]]
            (update db :prior-messages conj {:user message :llm message})))
