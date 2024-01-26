(ns chatgpt.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [chatgpt.subs :as subs] 
   ["../gen/index.js" :as c]))

(defn main-panel []
  (let [responses (re-frame/subscribe [::subs/responses])]
    [:div
     [:> c/Chat 
      { "responses" @responses
        "onSubmitHandler" (fn [e]
                            (.preventDefault e)
                            (re-frame/dispatch [:submit e])
                            )}]
     ]))

(comment
  (js/alert "Hi!")
  (println "Hi!")
  (reagent/adapt-react-class c/Chat)
  )
