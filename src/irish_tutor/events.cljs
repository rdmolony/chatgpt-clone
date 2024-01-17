(ns irish-tutor.events
  (:require
   [re-frame.core :as re-frame]
   [irish-tutor.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
