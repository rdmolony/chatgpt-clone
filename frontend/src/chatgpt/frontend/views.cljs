(ns chatgpt.frontend.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [chatgpt.frontend.events :as events] 
   [chatgpt.frontend.subs :as subs] 
   ["./gen/index.js" :as c]))

(defn main-panel []
  (let [messages (re-frame/subscribe [::subs/messages])
        waiting-for-llm? (re-frame/subscribe [::subs/waiting-for-llm?])]
    [:<>
     [:> c/Chat 
      {"messages" @messages
       "onInputHandler" (fn [e]
                          (re-frame/dispatch [::events/update-prompt (-> e .-target .-value)]))
       "onSubmitHandler" (fn [e]
                           (.preventDefault e) 
                           (re-frame/dispatch [::events/submit-prompt]))}]
     ]))
