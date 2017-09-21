(ns todo-clojure-luminus.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [todo-clojure-luminus.layout :refer [error-page]]
            [todo-clojure-luminus.routes.home :refer [home-routes]]
            [compojure.route :as route]
            [todo-clojure-luminus.env :refer [defaults]]
            [mount.core :as mount]
            [todo-clojure-luminus.middleware :as middleware]))

(mount/defstate init-app
                :start ((or (:init defaults) identity))
                :stop  ((or (:stop defaults) identity)))

(def app-routes
  (routes
    (-> #'home-routes
        (wrap-routes middleware/wrap-csrf)
        (wrap-routes middleware/wrap-formats))
    (route/not-found
      (:body
        (error-page {:status 404
                     :title "page not found"})))))


(defn app [] (middleware/wrap-base #'app-routes))
