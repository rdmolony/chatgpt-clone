(ns chatgpt.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::responses
 (fn [db]
   (:responses db)))
