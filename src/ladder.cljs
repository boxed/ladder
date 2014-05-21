(ns ladder
  (:require [reagent.core :as reagent :refer [atom]]
            [alandipert.storage-atom :refer [local-storage]]))

(enable-console-print!)

; --- ELO code stolen from https://github.com/ninjudd/elo/blob/master/src/elo/core.clj

(def *k-factor* 32)

(def *starting-score* 1200)

(defn expected-result [a b]
  (/ 1 (+ 1 (Math/pow 10 (/ (- a b) 400)))))

(defn score-change [a b result]
  (* *k-factor* (- result (expected-result a b))))

(defn update-scores [scores {:keys [playerA playerB outcome]}]
  (let [a     (or (scores playerA) *starting-score*)
        b     (or (scores playerB) *starting-score*)
        delta (Math/round (score-change a b outcome))]
    (-> scores
        (assoc playerA (- a delta))
        (assoc playerB (+ b delta)))))

(defn to-result [input]
  (case input
    :left 0.0
    :right 1.0
    :tie 0.5))

; ----
(def state (local-storage (atom {:scores {}
                                 :challengers []}) "ladder-state"))

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


;----

(defn choose-challengers [players]
  (let [players (players-in-rank-order)]
    [:div.choose-challengers
       (for [x players]
         ^{:key x} [:div.challenger.clickable
          {:on-click #(challenge! x)}
          x
          [:span.rank (get (:scores @state) x)]])]))

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
    [:div.add-player-button.clickable
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

(defn simple-example []
  [:div.foo
   [choose-challengers]
   [choose-winner]
   [add-player]
   ])

(defn ^:export run []
  (reagent/render-component [simple-example]
                            (.-body js/document)))
