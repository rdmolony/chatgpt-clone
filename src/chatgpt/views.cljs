(ns chatgpt.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [chatgpt.subs :as subs] 
   ["../gen/index.js" :as c]))

(defn main-panel []
  (let [input-text (reagent/atom "")
        message (reagent/atom "")
        prior-messages (re-frame/subscribe [::subs/prior-messages])]
    [:div
     [:> c/Chat 
      { "message" ""
        "priorMessages" @prior-messages
        "onInputHandler" (fn [e]
                          (reset! message (-> e .-target .-value)))
        "onSubmitHandler" (fn [e]
                            (.preventDefault e)
                            (re-frame/dispatch [:submit-message @message]) 
                            (reset! input-text "") 
                            )}]
     ]))

