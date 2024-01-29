(ns chatgpt.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [chatgpt.subs :as subs] 
   ["../gen/index.js" :as c]))

(defn main-panel []
  (let [message (reagent/atom "")
        input-id (random-uuid)
        input-field (-> input-id js/document.getElementById .-value)
        prior-messages (re-frame/subscribe [::subs/prior-messages])]
    [:div
     [:> c/Chat 
      { "id" input-id
       "priorMessages" @prior-messages
       "onInputHandler" (fn [e]
                          (reset! message (-> e .-target .-value)))
       "onSubmitHandler" (fn [e]
                           (.preventDefault e)
                           (re-frame/dispatch [:submit-message @message])
                           (set! input-field "")
                           )}]
     ]))

