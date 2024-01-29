(ns chatgpt.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [chatgpt.subs :as subs] 
   ["../gen/index.js" :as c]))

(defn main-panel []
  (let [messages (re-frame/subscribe [::subs/messages])]
    [:div
     [:> c/Chat 
      {"messages" @messages
       "onInputHandler" (fn [e]
                          (re-frame/dispatch [:update-prompt (-> e .-target .-value)]))
       "onSubmitHandler" (fn [e]
                           (.preventDefault e) 
                           (re-frame/dispatch [:submit-prompt]) 
                           )}]
     ]))

(comment
  (def counter (reagent/atom 0)) 
  (swap! counter inc))