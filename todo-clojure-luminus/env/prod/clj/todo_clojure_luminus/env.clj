(ns todo-clojure-luminus.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[todo-clojure-luminus started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[todo-clojure-luminus has shut down successfully]=-"))
   :middleware identity})
