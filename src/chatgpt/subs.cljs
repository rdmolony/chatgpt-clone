(ns chatgpt.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::messages
 (fn [db]
   (:messages db)))

(re-frame/reg-sub
 ::waiting-for-llm?
 (fn [db]
   (:waiting-for-llm? db)))
