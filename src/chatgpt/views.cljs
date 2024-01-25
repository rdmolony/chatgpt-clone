(ns chatgpt.views
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [chatgpt.subs :as subs] 
   ["../gen/index.js" :as c]))

(defn on-submit-handler [event]
  (.preventDefault event)
  (let [form (.-target event)
        formData (js/FormData. form)
        formJson (js/JSON.stringify formData)]
    (.alert js/window (str "You asked: " formJson))))

(defn main-panel []
  (let [responses (re-frame/subscribe [::subs/responses])]
    [:div
     [:> c/Chat { "onSubmitHandler" on-submit-handler }]
     ]))

(comment
  (js/alert "Hi!")
  (println "Hi!")
  (reagent/adapt-react-class c/Chat)
  )
