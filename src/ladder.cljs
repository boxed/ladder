(ns ladder
  (:require [reagent.core :as reagent :refer [atom]]
            [historian.core :as hist]
            [elo :refer [*starting-score* update-scores to-result]]
            [alandipert.storage-atom :refer [local-storage]]))

(enable-console-print!)

; State ----
(def state (local-storage (atom {:scores {}
                                 :challengers []}) "ladder-state"))

(hist/replace-library! (local-storage (atom []) "library"))
(hist/replace-prophecy! (local-storage (atom []) "prophecy"))
(hist/record! state :state)

; Reset state:
;;(swap! state {:scores {} :challengers []})

(def show-add-player (atom false))

(defn players-in-rank-order []
  (map first (sort-by val > (:scores @state))))

(defn challenge! [x]
  (swap! state update-in [:challengers] conj x))

(defn add-player! [name]
  (swap! state update-in [:scores] #(assoc % name 1200))
  (reset! show-add-player false))

(defn update-score! [state playerA playerB outcome]
  (assoc
    (assoc state
      :scores
      (update-scores (:scores state)
                     {:playerA playerA
                      :playerB playerB
                      :outcome (to-result outcome)}))
    :challengers []))

(defn win! [p1 p2 outcome]
  (swap! state update-score! p1 p2 outcome))


; DOM ----

(defn choose-challengers [players]
  (let [players (players-in-rank-order)]
    [:div.choose-challengers
       (doall (for [x players]
         ^{:key x} [:div.challenger.clickable
          {:on-click #(challenge! x)}
          x
          [:span.rank (get (:scores @state) x)]]))]))

(defn choose-winner []
  (let [[p1 p2] (:challengers @state)
        state @state]
    (if (> (count (:challengers state)) 1)
      [:div.choose-winner.fullscreen
       [:span.clickable
        {:on-click #(win! p1 p2 :left)}
        p1]
       [:span.vs " vs "]
       [:span.clickable
        {:on-click #(win! p1 p2 :right)}
        p2]
       ]
       [:div.hidden])))

(defn add-player []
  [:div
    [:div.add-player-button.top.clickable
     {:on-click #(swap! show-add-player not)}
     "+"]

    (if @show-add-player
      (let [name (atom "")]
       [:div.add-player.fullscreen
         [:input {:on-change #(reset! name (-> % .-target .-value))}]
         [:button {:on-click #(add-player! @name)} "add"]
        ])
      [:div.hidden])
   ])

(defn history-controls []
  [:div.history-controls
   (if (hist/can-undo?)
     [:span.top.undo
      {:on-click #(hist/undo!)}
      [:i.fa.fa-undo]]
     [:span.hidden])
   (if (hist/can-redo?)
     [:span.top.redo
      {:on-click #(hist/redo!)}
      [:i.fa.fa-repeat]]
     [:span.hidden])
   ])

(defn simple-example []
  [:div.foo
   [choose-challengers]
   [choose-winner]
   [add-player]
   [history-controls]
   ])

(defn ^:export run []
  (reagent/render-component [simple-example]
                            (.-body js/document)))
