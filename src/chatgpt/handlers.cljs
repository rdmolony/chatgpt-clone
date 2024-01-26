(ns chatgpt.handlers 
  (:require [re-frame.core :as re-frame] 
            [day8.re-frame.tracing :refer-macros [fn-traced]]))

(defn on-submit
  [_ event])

(comment
  (require '[re-frame.core :as re-frame])
  (re-frame/dispatch :submit)
  )