(ns chatgpt.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::prior-messages
 (fn [db]
   (:prior-messages db)))
