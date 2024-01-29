(ns chatgpt.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [chatgpt.subs :as subs] 
   ["../gen/index.js" :as c]))

(defn main-panel []
  (let [message (reagent/atom "")
        message-counter (reagent/atom 0)
        input-id (random-uuid)
        messages (re-frame/subscribe [::subs/messages])]
    [:div
     [:> c/Chat 
      { "inputId" input-id
       "messages" @messages
       "onInputHandler" (fn [e]
                          (reset! message (-> e .-target .-value)))
       "onSubmitHandler" (fn [e]
                           (.preventDefault e) 
                           (re-frame/dispatch [:submit-message @message-counter @message])
                           (set! (-> input-id js/document.getElementById .-value) "") 
                           (swap! message-counter inc)
                           )}]
     ]))

(comment
  (def counter (reagent/atom 0)) 
  (swap! counter inc))