// Compiled by ClojureScript 1.9.230 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__3343__auto__,writer__3344__auto__,opt__3345__auto__){
return cljs.core._write.call(null,writer__3344__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4393 = arguments.length;
var i__3645__auto___4394 = (0);
while(true){
if((i__3645__auto___4394 < len__3644__auto___4393)){
args__3647__auto__.push((arguments[i__3645__auto___4394]));

var G__4395 = (i__3645__auto___4394 + (1));
i__3645__auto___4394 = G__4395;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq4392){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4392));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4397 = arguments.length;
var i__3645__auto___4398 = (0);
while(true){
if((i__3645__auto___4398 < len__3644__auto___4397)){
args__3647__auto__.push((arguments[i__3645__auto___4398]));

var G__4399 = (i__3645__auto___4398 + (1));
i__3645__auto___4398 = G__4399;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq4396){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4396));
});

var g_QMARK__4400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_4401 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__4400){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__4400))
,null));
var mkg_4402 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__4400,g_4401){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__4400,g_4401))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__4400,g_4401,mkg_4402){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__4400).call(null,x);
});})(g_QMARK__4400,g_4401,mkg_4402))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__4400,g_4401,mkg_4402){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_4402).call(null,gfn);
});})(g_QMARK__4400,g_4401,mkg_4402))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__4400,g_4401,mkg_4402){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_4401).call(null,generator);
});})(g_QMARK__4400,g_4401,mkg_4402))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__5924__auto___4421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__5924__auto___4421){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4422 = arguments.length;
var i__3645__auto___4423 = (0);
while(true){
if((i__3645__auto___4423 < len__3644__auto___4422)){
args__3647__auto__.push((arguments[i__3645__auto___4423]));

var G__4424 = (i__3645__auto___4423 + (1));
i__3645__auto___4423 = G__4424;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4421))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4421),args);
});})(g__5924__auto___4421))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__5924__auto___4421){
return (function (seq4403){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4403));
});})(g__5924__auto___4421))
;


var g__5924__auto___4425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__5924__auto___4425){
return (function cljs$spec$impl$gen$list(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4426 = arguments.length;
var i__3645__auto___4427 = (0);
while(true){
if((i__3645__auto___4427 < len__3644__auto___4426)){
args__3647__auto__.push((arguments[i__3645__auto___4427]));

var G__4428 = (i__3645__auto___4427 + (1));
i__3645__auto___4427 = G__4428;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4425))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4425),args);
});})(g__5924__auto___4425))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__5924__auto___4425){
return (function (seq4404){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4404));
});})(g__5924__auto___4425))
;


var g__5924__auto___4429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__5924__auto___4429){
return (function cljs$spec$impl$gen$map(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4430 = arguments.length;
var i__3645__auto___4431 = (0);
while(true){
if((i__3645__auto___4431 < len__3644__auto___4430)){
args__3647__auto__.push((arguments[i__3645__auto___4431]));

var G__4432 = (i__3645__auto___4431 + (1));
i__3645__auto___4431 = G__4432;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4429))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4429),args);
});})(g__5924__auto___4429))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__5924__auto___4429){
return (function (seq4405){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4405));
});})(g__5924__auto___4429))
;


var g__5924__auto___4433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__5924__auto___4433){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4434 = arguments.length;
var i__3645__auto___4435 = (0);
while(true){
if((i__3645__auto___4435 < len__3644__auto___4434)){
args__3647__auto__.push((arguments[i__3645__auto___4435]));

var G__4436 = (i__3645__auto___4435 + (1));
i__3645__auto___4435 = G__4436;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4433))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4433),args);
});})(g__5924__auto___4433))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__5924__auto___4433){
return (function (seq4406){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4406));
});})(g__5924__auto___4433))
;


var g__5924__auto___4437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__5924__auto___4437){
return (function cljs$spec$impl$gen$set(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4438 = arguments.length;
var i__3645__auto___4439 = (0);
while(true){
if((i__3645__auto___4439 < len__3644__auto___4438)){
args__3647__auto__.push((arguments[i__3645__auto___4439]));

var G__4440 = (i__3645__auto___4439 + (1));
i__3645__auto___4439 = G__4440;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4437))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4437),args);
});})(g__5924__auto___4437))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__5924__auto___4437){
return (function (seq4407){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4407));
});})(g__5924__auto___4437))
;


var g__5924__auto___4441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__5924__auto___4441){
return (function cljs$spec$impl$gen$vector(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4442 = arguments.length;
var i__3645__auto___4443 = (0);
while(true){
if((i__3645__auto___4443 < len__3644__auto___4442)){
args__3647__auto__.push((arguments[i__3645__auto___4443]));

var G__4444 = (i__3645__auto___4443 + (1));
i__3645__auto___4443 = G__4444;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4441))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4441),args);
});})(g__5924__auto___4441))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__5924__auto___4441){
return (function (seq4408){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4408));
});})(g__5924__auto___4441))
;


var g__5924__auto___4445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__5924__auto___4445){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4446 = arguments.length;
var i__3645__auto___4447 = (0);
while(true){
if((i__3645__auto___4447 < len__3644__auto___4446)){
args__3647__auto__.push((arguments[i__3645__auto___4447]));

var G__4448 = (i__3645__auto___4447 + (1));
i__3645__auto___4447 = G__4448;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4445))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4445),args);
});})(g__5924__auto___4445))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__5924__auto___4445){
return (function (seq4409){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4409));
});})(g__5924__auto___4445))
;


var g__5924__auto___4449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__5924__auto___4449){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4450 = arguments.length;
var i__3645__auto___4451 = (0);
while(true){
if((i__3645__auto___4451 < len__3644__auto___4450)){
args__3647__auto__.push((arguments[i__3645__auto___4451]));

var G__4452 = (i__3645__auto___4451 + (1));
i__3645__auto___4451 = G__4452;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4449))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4449){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4449),args);
});})(g__5924__auto___4449))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__5924__auto___4449){
return (function (seq4410){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4410));
});})(g__5924__auto___4449))
;


var g__5924__auto___4453 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__5924__auto___4453){
return (function cljs$spec$impl$gen$elements(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4454 = arguments.length;
var i__3645__auto___4455 = (0);
while(true){
if((i__3645__auto___4455 < len__3644__auto___4454)){
args__3647__auto__.push((arguments[i__3645__auto___4455]));

var G__4456 = (i__3645__auto___4455 + (1));
i__3645__auto___4455 = G__4456;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4453))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4453){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4453),args);
});})(g__5924__auto___4453))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__5924__auto___4453){
return (function (seq4411){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4411));
});})(g__5924__auto___4453))
;


var g__5924__auto___4457 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__5924__auto___4457){
return (function cljs$spec$impl$gen$bind(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4458 = arguments.length;
var i__3645__auto___4459 = (0);
while(true){
if((i__3645__auto___4459 < len__3644__auto___4458)){
args__3647__auto__.push((arguments[i__3645__auto___4459]));

var G__4460 = (i__3645__auto___4459 + (1));
i__3645__auto___4459 = G__4460;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4457))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4457){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4457),args);
});})(g__5924__auto___4457))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__5924__auto___4457){
return (function (seq4412){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4412));
});})(g__5924__auto___4457))
;


var g__5924__auto___4461 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__5924__auto___4461){
return (function cljs$spec$impl$gen$choose(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4462 = arguments.length;
var i__3645__auto___4463 = (0);
while(true){
if((i__3645__auto___4463 < len__3644__auto___4462)){
args__3647__auto__.push((arguments[i__3645__auto___4463]));

var G__4464 = (i__3645__auto___4463 + (1));
i__3645__auto___4463 = G__4464;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4461))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4461){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4461),args);
});})(g__5924__auto___4461))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__5924__auto___4461){
return (function (seq4413){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4413));
});})(g__5924__auto___4461))
;


var g__5924__auto___4465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__5924__auto___4465){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4466 = arguments.length;
var i__3645__auto___4467 = (0);
while(true){
if((i__3645__auto___4467 < len__3644__auto___4466)){
args__3647__auto__.push((arguments[i__3645__auto___4467]));

var G__4468 = (i__3645__auto___4467 + (1));
i__3645__auto___4467 = G__4468;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4465))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4465),args);
});})(g__5924__auto___4465))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__5924__auto___4465){
return (function (seq4414){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4414));
});})(g__5924__auto___4465))
;


var g__5924__auto___4469 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__5924__auto___4469){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4470 = arguments.length;
var i__3645__auto___4471 = (0);
while(true){
if((i__3645__auto___4471 < len__3644__auto___4470)){
args__3647__auto__.push((arguments[i__3645__auto___4471]));

var G__4472 = (i__3645__auto___4471 + (1));
i__3645__auto___4471 = G__4472;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4469))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4469){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4469),args);
});})(g__5924__auto___4469))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__5924__auto___4469){
return (function (seq4415){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4415));
});})(g__5924__auto___4469))
;


var g__5924__auto___4473 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__5924__auto___4473){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4474 = arguments.length;
var i__3645__auto___4475 = (0);
while(true){
if((i__3645__auto___4475 < len__3644__auto___4474)){
args__3647__auto__.push((arguments[i__3645__auto___4475]));

var G__4476 = (i__3645__auto___4475 + (1));
i__3645__auto___4475 = G__4476;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4473))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4473){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4473),args);
});})(g__5924__auto___4473))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__5924__auto___4473){
return (function (seq4416){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4416));
});})(g__5924__auto___4473))
;


var g__5924__auto___4477 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__5924__auto___4477){
return (function cljs$spec$impl$gen$sample(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4478 = arguments.length;
var i__3645__auto___4479 = (0);
while(true){
if((i__3645__auto___4479 < len__3644__auto___4478)){
args__3647__auto__.push((arguments[i__3645__auto___4479]));

var G__4480 = (i__3645__auto___4479 + (1));
i__3645__auto___4479 = G__4480;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4477))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4477){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4477),args);
});})(g__5924__auto___4477))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__5924__auto___4477){
return (function (seq4417){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4417));
});})(g__5924__auto___4477))
;


var g__5924__auto___4481 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__5924__auto___4481){
return (function cljs$spec$impl$gen$return(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4482 = arguments.length;
var i__3645__auto___4483 = (0);
while(true){
if((i__3645__auto___4483 < len__3644__auto___4482)){
args__3647__auto__.push((arguments[i__3645__auto___4483]));

var G__4484 = (i__3645__auto___4483 + (1));
i__3645__auto___4483 = G__4484;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4481))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4481){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4481),args);
});})(g__5924__auto___4481))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__5924__auto___4481){
return (function (seq4418){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4418));
});})(g__5924__auto___4481))
;


var g__5924__auto___4485 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__5924__auto___4485){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4486 = arguments.length;
var i__3645__auto___4487 = (0);
while(true){
if((i__3645__auto___4487 < len__3644__auto___4486)){
args__3647__auto__.push((arguments[i__3645__auto___4487]));

var G__4488 = (i__3645__auto___4487 + (1));
i__3645__auto___4487 = G__4488;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4485))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4485){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4485),args);
});})(g__5924__auto___4485))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__5924__auto___4485){
return (function (seq4419){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4419));
});})(g__5924__auto___4485))
;


var g__5924__auto___4489 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__5924__auto___4489){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4490 = arguments.length;
var i__3645__auto___4491 = (0);
while(true){
if((i__3645__auto___4491 < len__3644__auto___4490)){
args__3647__auto__.push((arguments[i__3645__auto___4491]));

var G__4492 = (i__3645__auto___4491 + (1));
i__3645__auto___4491 = G__4492;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___4489))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___4489){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___4489),args);
});})(g__5924__auto___4489))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__5924__auto___4489){
return (function (seq4420){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4420));
});})(g__5924__auto___4489))
;

var g__5929__auto___4514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__5929__auto___4514){
return (function cljs$spec$impl$gen$any(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4515 = arguments.length;
var i__3645__auto___4516 = (0);
while(true){
if((i__3645__auto___4516 < len__3644__auto___4515)){
args__3647__auto__.push((arguments[i__3645__auto___4516]));

var G__4517 = (i__3645__auto___4516 + (1));
i__3645__auto___4516 = G__4517;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4514))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4514){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4514);
});})(g__5929__auto___4514))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__5929__auto___4514){
return (function (seq4493){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4493));
});})(g__5929__auto___4514))
;


var g__5929__auto___4518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__5929__auto___4518){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4519 = arguments.length;
var i__3645__auto___4520 = (0);
while(true){
if((i__3645__auto___4520 < len__3644__auto___4519)){
args__3647__auto__.push((arguments[i__3645__auto___4520]));

var G__4521 = (i__3645__auto___4520 + (1));
i__3645__auto___4520 = G__4521;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4518))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4518){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4518);
});})(g__5929__auto___4518))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__5929__auto___4518){
return (function (seq4494){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4494));
});})(g__5929__auto___4518))
;


var g__5929__auto___4522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__5929__auto___4522){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4523 = arguments.length;
var i__3645__auto___4524 = (0);
while(true){
if((i__3645__auto___4524 < len__3644__auto___4523)){
args__3647__auto__.push((arguments[i__3645__auto___4524]));

var G__4525 = (i__3645__auto___4524 + (1));
i__3645__auto___4524 = G__4525;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4522))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4522){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4522);
});})(g__5929__auto___4522))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__5929__auto___4522){
return (function (seq4495){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4495));
});})(g__5929__auto___4522))
;


var g__5929__auto___4526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__5929__auto___4526){
return (function cljs$spec$impl$gen$char(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4527 = arguments.length;
var i__3645__auto___4528 = (0);
while(true){
if((i__3645__auto___4528 < len__3644__auto___4527)){
args__3647__auto__.push((arguments[i__3645__auto___4528]));

var G__4529 = (i__3645__auto___4528 + (1));
i__3645__auto___4528 = G__4529;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4526))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4526){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4526);
});})(g__5929__auto___4526))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__5929__auto___4526){
return (function (seq4496){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4496));
});})(g__5929__auto___4526))
;


var g__5929__auto___4530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__5929__auto___4530){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4531 = arguments.length;
var i__3645__auto___4532 = (0);
while(true){
if((i__3645__auto___4532 < len__3644__auto___4531)){
args__3647__auto__.push((arguments[i__3645__auto___4532]));

var G__4533 = (i__3645__auto___4532 + (1));
i__3645__auto___4532 = G__4533;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4530))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4530){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4530);
});})(g__5929__auto___4530))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__5929__auto___4530){
return (function (seq4497){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4497));
});})(g__5929__auto___4530))
;


var g__5929__auto___4534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__5929__auto___4534){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4535 = arguments.length;
var i__3645__auto___4536 = (0);
while(true){
if((i__3645__auto___4536 < len__3644__auto___4535)){
args__3647__auto__.push((arguments[i__3645__auto___4536]));

var G__4537 = (i__3645__auto___4536 + (1));
i__3645__auto___4536 = G__4537;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4534))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4534){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4534);
});})(g__5929__auto___4534))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__5929__auto___4534){
return (function (seq4498){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4498));
});})(g__5929__auto___4534))
;


var g__5929__auto___4538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__5929__auto___4538){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4539 = arguments.length;
var i__3645__auto___4540 = (0);
while(true){
if((i__3645__auto___4540 < len__3644__auto___4539)){
args__3647__auto__.push((arguments[i__3645__auto___4540]));

var G__4541 = (i__3645__auto___4540 + (1));
i__3645__auto___4540 = G__4541;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4538))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4538){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4538);
});})(g__5929__auto___4538))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__5929__auto___4538){
return (function (seq4499){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4499));
});})(g__5929__auto___4538))
;


var g__5929__auto___4542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__5929__auto___4542){
return (function cljs$spec$impl$gen$double(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4543 = arguments.length;
var i__3645__auto___4544 = (0);
while(true){
if((i__3645__auto___4544 < len__3644__auto___4543)){
args__3647__auto__.push((arguments[i__3645__auto___4544]));

var G__4545 = (i__3645__auto___4544 + (1));
i__3645__auto___4544 = G__4545;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4542))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4542){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4542);
});})(g__5929__auto___4542))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__5929__auto___4542){
return (function (seq4500){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4500));
});})(g__5929__auto___4542))
;


var g__5929__auto___4546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__5929__auto___4546){
return (function cljs$spec$impl$gen$int(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4547 = arguments.length;
var i__3645__auto___4548 = (0);
while(true){
if((i__3645__auto___4548 < len__3644__auto___4547)){
args__3647__auto__.push((arguments[i__3645__auto___4548]));

var G__4549 = (i__3645__auto___4548 + (1));
i__3645__auto___4548 = G__4549;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4546))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4546){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4546);
});})(g__5929__auto___4546))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__5929__auto___4546){
return (function (seq4501){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4501));
});})(g__5929__auto___4546))
;


var g__5929__auto___4550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__5929__auto___4550){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4551 = arguments.length;
var i__3645__auto___4552 = (0);
while(true){
if((i__3645__auto___4552 < len__3644__auto___4551)){
args__3647__auto__.push((arguments[i__3645__auto___4552]));

var G__4553 = (i__3645__auto___4552 + (1));
i__3645__auto___4552 = G__4553;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4550))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4550){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4550);
});})(g__5929__auto___4550))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__5929__auto___4550){
return (function (seq4502){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4502));
});})(g__5929__auto___4550))
;


var g__5929__auto___4554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__5929__auto___4554){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4555 = arguments.length;
var i__3645__auto___4556 = (0);
while(true){
if((i__3645__auto___4556 < len__3644__auto___4555)){
args__3647__auto__.push((arguments[i__3645__auto___4556]));

var G__4557 = (i__3645__auto___4556 + (1));
i__3645__auto___4556 = G__4557;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4554))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4554){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4554);
});})(g__5929__auto___4554))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__5929__auto___4554){
return (function (seq4503){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4503));
});})(g__5929__auto___4554))
;


var g__5929__auto___4558 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__5929__auto___4558){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4559 = arguments.length;
var i__3645__auto___4560 = (0);
while(true){
if((i__3645__auto___4560 < len__3644__auto___4559)){
args__3647__auto__.push((arguments[i__3645__auto___4560]));

var G__4561 = (i__3645__auto___4560 + (1));
i__3645__auto___4560 = G__4561;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4558))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4558){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4558);
});})(g__5929__auto___4558))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__5929__auto___4558){
return (function (seq4504){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4504));
});})(g__5929__auto___4558))
;


var g__5929__auto___4562 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__5929__auto___4562){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4563 = arguments.length;
var i__3645__auto___4564 = (0);
while(true){
if((i__3645__auto___4564 < len__3644__auto___4563)){
args__3647__auto__.push((arguments[i__3645__auto___4564]));

var G__4565 = (i__3645__auto___4564 + (1));
i__3645__auto___4564 = G__4565;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4562))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4562){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4562);
});})(g__5929__auto___4562))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__5929__auto___4562){
return (function (seq4505){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4505));
});})(g__5929__auto___4562))
;


var g__5929__auto___4566 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__5929__auto___4566){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4567 = arguments.length;
var i__3645__auto___4568 = (0);
while(true){
if((i__3645__auto___4568 < len__3644__auto___4567)){
args__3647__auto__.push((arguments[i__3645__auto___4568]));

var G__4569 = (i__3645__auto___4568 + (1));
i__3645__auto___4568 = G__4569;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4566))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4566){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4566);
});})(g__5929__auto___4566))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__5929__auto___4566){
return (function (seq4506){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4506));
});})(g__5929__auto___4566))
;


var g__5929__auto___4570 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__5929__auto___4570){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4571 = arguments.length;
var i__3645__auto___4572 = (0);
while(true){
if((i__3645__auto___4572 < len__3644__auto___4571)){
args__3647__auto__.push((arguments[i__3645__auto___4572]));

var G__4573 = (i__3645__auto___4572 + (1));
i__3645__auto___4572 = G__4573;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4570))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4570){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4570);
});})(g__5929__auto___4570))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__5929__auto___4570){
return (function (seq4507){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4507));
});})(g__5929__auto___4570))
;


var g__5929__auto___4574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__5929__auto___4574){
return (function cljs$spec$impl$gen$string(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4575 = arguments.length;
var i__3645__auto___4576 = (0);
while(true){
if((i__3645__auto___4576 < len__3644__auto___4575)){
args__3647__auto__.push((arguments[i__3645__auto___4576]));

var G__4577 = (i__3645__auto___4576 + (1));
i__3645__auto___4576 = G__4577;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4574))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4574){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4574);
});})(g__5929__auto___4574))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__5929__auto___4574){
return (function (seq4508){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4508));
});})(g__5929__auto___4574))
;


var g__5929__auto___4578 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__5929__auto___4578){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4579 = arguments.length;
var i__3645__auto___4580 = (0);
while(true){
if((i__3645__auto___4580 < len__3644__auto___4579)){
args__3647__auto__.push((arguments[i__3645__auto___4580]));

var G__4581 = (i__3645__auto___4580 + (1));
i__3645__auto___4580 = G__4581;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4578))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4578){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4578);
});})(g__5929__auto___4578))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__5929__auto___4578){
return (function (seq4509){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4509));
});})(g__5929__auto___4578))
;


var g__5929__auto___4582 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__5929__auto___4582){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4583 = arguments.length;
var i__3645__auto___4584 = (0);
while(true){
if((i__3645__auto___4584 < len__3644__auto___4583)){
args__3647__auto__.push((arguments[i__3645__auto___4584]));

var G__4585 = (i__3645__auto___4584 + (1));
i__3645__auto___4584 = G__4585;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4582))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4582){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4582);
});})(g__5929__auto___4582))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__5929__auto___4582){
return (function (seq4510){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4510));
});})(g__5929__auto___4582))
;


var g__5929__auto___4586 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__5929__auto___4586){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4587 = arguments.length;
var i__3645__auto___4588 = (0);
while(true){
if((i__3645__auto___4588 < len__3644__auto___4587)){
args__3647__auto__.push((arguments[i__3645__auto___4588]));

var G__4589 = (i__3645__auto___4588 + (1));
i__3645__auto___4588 = G__4589;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4586))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4586){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4586);
});})(g__5929__auto___4586))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__5929__auto___4586){
return (function (seq4511){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4511));
});})(g__5929__auto___4586))
;


var g__5929__auto___4590 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__5929__auto___4590){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4591 = arguments.length;
var i__3645__auto___4592 = (0);
while(true){
if((i__3645__auto___4592 < len__3644__auto___4591)){
args__3647__auto__.push((arguments[i__3645__auto___4592]));

var G__4593 = (i__3645__auto___4592 + (1));
i__3645__auto___4592 = G__4593;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4590))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4590){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4590);
});})(g__5929__auto___4590))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__5929__auto___4590){
return (function (seq4512){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4512));
});})(g__5929__auto___4590))
;


var g__5929__auto___4594 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__5929__auto___4594){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4595 = arguments.length;
var i__3645__auto___4596 = (0);
while(true){
if((i__3645__auto___4596 < len__3644__auto___4595)){
args__3647__auto__.push((arguments[i__3645__auto___4596]));

var G__4597 = (i__3645__auto___4596 + (1));
i__3645__auto___4596 = G__4597;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___4594))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___4594){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___4594);
});})(g__5929__auto___4594))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__5929__auto___4594){
return (function (seq4513){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4513));
});})(g__5929__auto___4594))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__3647__auto__ = [];
var len__3644__auto___4600 = arguments.length;
var i__3645__auto___4601 = (0);
while(true){
if((i__3645__auto___4601 < len__3644__auto___4600)){
args__3647__auto__.push((arguments[i__3645__auto___4601]));

var G__4602 = (i__3645__auto___4601 + (1));
i__3645__auto___4601 = G__4602;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__4598_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__4598_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq4599){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4599));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__4603_SHARP_){
return (new Date(p1__4603_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});
