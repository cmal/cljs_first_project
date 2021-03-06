;; 4Clojure Question 157
;;
;; Transform a sequence into a sequence of pairs containing the original elements along with their index.
;;
;; Use M-x 4clojure-check-answers when you're done!

(= (__ [:a :b :c]) [[:a 0] [:b 1] [:c 2]])

(= (__ [0 1 3]) '((0 0) (1 1) (3 2)))

(= (__ [[:foo] {:bar :baz}]) [[[:foo] 0] [{:bar :baz} 1]])


((fn [v]
   (let [index (atom -1)]
     (map (fn [a] [a (swap! index inc)]) v))
   ) [:a :b :c])
