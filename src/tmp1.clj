;; 4Clojure Question 97
;;
;; <a href="http://en.wikipedia.org/wiki/Pascal%27s_triangle">Pascal's triangle</a> is a triangle of numbers computed using the following rules:<br/></br>- The first row is 1.</br>- Each successive row is computed by adding together adjacent numbers in the row above, and adding a 1 to the beginning and end of the row.<br/><br/>Write a function which returns the nth row of Pascal's Triangle.
;;
;; 
;;
;; 
;;
;; 
;;
;; Use M-x 4clojure-check-answers when you're done!

(= (__ 1) [1])

(= (map __ (range 1 6))
   [     [1]
        [1 1]
       [1 2 1]
      [1 3 3 1]
     [1 4 6 4 1]])

(= (__ 11)
   [1 10 45 120 210 252 210 120 45 10 1])



((fn f [n]
   (nth (iterate #(map + `(0 ~@%) `(~@% 0)) [1]) (dec n)))
 11)
(doc map)


(->> ((fn fn-map [f s]
        (when s
          (cons (f (first s)) (fn-map f (next s)))))
      inc (range))
     (drop (dec 1000000))
     (take 2)
     )

(->>
 ((fn mmm [f coll]
     (lazy-seq
      (when-let [s (seq coll)]
        (if (chunked-seq? s)
          (let [c (chunk-first s)
                size (int (count c))
                b (chunk-buffer size)]
            (dotimes [i size]
              (chunk-append b (f (.nth c i))))
            (chunk-cons (chunk b) (mmm f (chunk-rest s))))
          (cons (f (first s)) (mmm f (rest s)))))))
  inc (range))
 (drop (dec 1000000))
 (take 2))

((fn tree? [x]
  (if (nil? x)
    true
    (and (= 2 (count (rest x))) (tree? (get x 1)) (tree? (get x 2)))))
 [1 [2 nil nil] [3 nil nil] [4 nil nil]])


((fn tree? [x]
   (prn x)
    (if (nil? x)
      true
      (if-not (coll? x) false
              (and (= 2 (count (rest x))) (tree? (get x 1)) (tree? (get x 2))))))
 [1 [2 nil nil] [3 nil nil] [4 nil nil]]
 )

(defn tree? [x]
  (prn x)
  (or (nil? x)
      (and (sequential? x)
           (= 3 (count x))
           (every? tree? (rest x)))))



(= (tree? '(:a (:b nil nil) nil))
   true)

(= (tree? '(:a (:b nil nil)))
   false)

(= (tree? [1 nil [2 [3 nil nil] [4 nil nil]]])
   true)

(= (tree? [1 [2 nil nil] [3 nil nil] [4 nil nil]])
   false)

(= (tree? [1 [2 [3 [4 nil nil] nil] nil] nil])
   true)

(= (tree? [1 [2 [3 [4 false nil] nil] nil] nil])
   false)

(= (tree? '(:a nil ()))
   false)


((fn outer [v]
   (prn v)
    (count
     (filter
      (fn mid [x]
        (prn x)
        (let [sq #(* % %)]
          (< x (apply + (map
                         (fn inner [c]
                           (prn c)
                           (-> c int (- 48) sq))
                         (str x)
                         ))))) v)))
  (range 10)
  )

((fn [s]
    (assoc {}
           :suit (get {\D :diamond \H :heart \C :club \S :s} (first s))
           :rank (case (second s)
                   \T 8 
                   \A 12
                   \J 9
                   \Q 10
                   \K 11
                   (- (int (second s)) 50))
           ))
 "H2")

(defn lcm [a b & [c]]
  (if (nil? c)
	  (#(if (= 0 %2) (/ (* a b) %) (recur %2 (mod % %2))) a b)
    (lcm (lcm a b) c)
    )
  )

(lcm 7 5/7 2 3/5)


(defn deep [v]
  (if (nil? v)
    0
    (inc (max (deep (get v 1)) (deep (get v 2))))))
(deep [:a nil nil])
(deep [:a [:b nil nil] nil])

(defn bal-tree? [[root left right]]
  (let [deep
        (fn deep [v]
          (if (nil? v)
            0
            (inc (max (deep (nth v 1)) (deep (nth v 2))))))
        _ (prn (deep left))
        _ (prn (deep right))
        _ (prn (and (= (deep left) (deep right)) (bal-tree? left) (bal-tree? right)))]
    (if (= left right)
      true
      (and (= (deep left) (deep right)) (bal-tree? left) (bal-tree? right)))))

(bal-tree? [:a nil nil])
(bal-tree? '(:a (:b nil nil) nil))
(bal-tree? [1 [2 nil [3 [4 [5 nil nil] [               6 nil nil]] nil]]
            [2 [3 nil [4 [6 nil nil] [5 nil nil]]] nil]])

(defn symm? [[root left right]]
  (prn "root left right" root left right)
  (let [symm (fn sym [nd]
               (if (nil? nd)
                 nil
                 (let [[rot lt rit] nd]
                   [rot (sym rit) (sym lt)])))]
    (prn (symm right))
    (= left (symm right)))
  )

(symm? [:a nil nil])
(symm? '(:a (:b nil nil) nil))
(symm? [1 [2 nil [3 [4 [5 nil nil] [6 nil nil]] nil]]
            [2 [3 nil [4 [6 nil nil] [5 nil nil]]] nil]])
