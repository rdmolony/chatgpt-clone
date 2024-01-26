(ns chatgpt.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::priorMessages
 (fn [db]
   (:priorMessages db)))
