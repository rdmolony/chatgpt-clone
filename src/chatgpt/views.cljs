(ns chatgpt.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [chatgpt.subs :as subs] 
   ["../gen/index.js" :as c]))

(defn main-panel []
  (let [message (reagent/atom "")
        priorMessages (re-frame/subscribe [::subs/priorMessages])]
    [:div
     [:> c/Chat 
      { "priorMessages" @priorMessages
        "onInputHandler" (fn [e]
                            (reset! message (-> e .-target .-value)))
        "onSubmitHandler" (fn [e]
                            (.preventDefault e)
                            (re-frame/dispatch [:submit @message])
                            )}]
     ]))

(comment
  (js/alert "Hi!")
  (println "Hi!")
  (reagent/adapt-react-class c/Chat)
  )
