(ns user
  (:require [mount.core :as mount]
            todo-clojure-luminus.core))

(defn start []
  (mount/start-without #'todo-clojure-luminus.core/repl-server))

(defn stop []
  (mount/stop-except #'todo-clojure-luminus.core/repl-server))

(defn restart []
  (stop)
  (start))


