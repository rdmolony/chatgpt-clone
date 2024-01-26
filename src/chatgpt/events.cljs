(ns chatgpt.events
  (:require
   [re-frame.core :as re-frame] 
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [chatgpt.db :as db]
   [chatgpt.handlers :as handler]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-db
 :submit
 handler/on-submit)
