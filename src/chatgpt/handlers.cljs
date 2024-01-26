(ns chatgpt.handlers 
  (:require [re-frame.core :as re-frame] 
            [day8.re-frame.tracing :refer-macros [fn-traced]]))

(defn on-submit
  [_ event]
  (let [form (.-target event)
        formData (js/FormData. form)
        formJson (js/JSON.stringify formData)] 
    (.alert js/window (str "You asked: \n"
                           "event=" event "\n"
                           "form=" form "\n"
                           "formJson=" formJson))))

(comment
  (require '[re-frame.core :as re-frame])
  (re-frame/dispatch :submit)
  )