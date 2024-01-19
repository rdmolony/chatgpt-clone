(ns irish-tutor.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [irish-tutor.subs :as subs] 
   ["../gen/index.js" :as c]))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div
     [:> c/Chat {:name @name}]
     ]))

(comment
  (js/alert "Hi!")
  (println "Hi!")
  (reagent/adapt-react-class c/Chat)
  )
