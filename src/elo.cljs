(ns elo)

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
