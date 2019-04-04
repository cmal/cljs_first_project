// Compiled by ClojureScript 1.9.230 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__5473){
var map__5498 = p__5473;
var map__5498__$1 = ((((!((map__5498 == null)))?((((map__5498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5498):map__5498);
var m = map__5498__$1;
var n = cljs.core.get.call(null,map__5498__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__5498__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5500_5522 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5501_5523 = null;
var count__5502_5524 = (0);
var i__5503_5525 = (0);
while(true){
if((i__5503_5525 < count__5502_5524)){
var f_5526 = cljs.core._nth.call(null,chunk__5501_5523,i__5503_5525);
cljs.core.println.call(null,"  ",f_5526);

var G__5527 = seq__5500_5522;
var G__5528 = chunk__5501_5523;
var G__5529 = count__5502_5524;
var G__5530 = (i__5503_5525 + (1));
seq__5500_5522 = G__5527;
chunk__5501_5523 = G__5528;
count__5502_5524 = G__5529;
i__5503_5525 = G__5530;
continue;
} else {
var temp__4657__auto___5531 = cljs.core.seq.call(null,seq__5500_5522);
if(temp__4657__auto___5531){
var seq__5500_5532__$1 = temp__4657__auto___5531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5500_5532__$1)){
var c__3496__auto___5533 = cljs.core.chunk_first.call(null,seq__5500_5532__$1);
var G__5534 = cljs.core.chunk_rest.call(null,seq__5500_5532__$1);
var G__5535 = c__3496__auto___5533;
var G__5536 = cljs.core.count.call(null,c__3496__auto___5533);
var G__5537 = (0);
seq__5500_5522 = G__5534;
chunk__5501_5523 = G__5535;
count__5502_5524 = G__5536;
i__5503_5525 = G__5537;
continue;
} else {
var f_5538 = cljs.core.first.call(null,seq__5500_5532__$1);
cljs.core.println.call(null,"  ",f_5538);

var G__5539 = cljs.core.next.call(null,seq__5500_5532__$1);
var G__5540 = null;
var G__5541 = (0);
var G__5542 = (0);
seq__5500_5522 = G__5539;
chunk__5501_5523 = G__5540;
count__5502_5524 = G__5541;
i__5503_5525 = G__5542;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_5543 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3113__auto__)){
return or__3113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_5543);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_5543)))?cljs.core.second.call(null,arglists_5543):arglists_5543));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5504_5544 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5505_5545 = null;
var count__5506_5546 = (0);
var i__5507_5547 = (0);
while(true){
if((i__5507_5547 < count__5506_5546)){
var vec__5508_5548 = cljs.core._nth.call(null,chunk__5505_5545,i__5507_5547);
var name_5549 = cljs.core.nth.call(null,vec__5508_5548,(0),null);
var map__5511_5550 = cljs.core.nth.call(null,vec__5508_5548,(1),null);
var map__5511_5551__$1 = ((((!((map__5511_5550 == null)))?((((map__5511_5550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5511_5550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5511_5550):map__5511_5550);
var doc_5552 = cljs.core.get.call(null,map__5511_5551__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_5553 = cljs.core.get.call(null,map__5511_5551__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_5549);

cljs.core.println.call(null," ",arglists_5553);

if(cljs.core.truth_(doc_5552)){
cljs.core.println.call(null," ",doc_5552);
} else {
}

var G__5554 = seq__5504_5544;
var G__5555 = chunk__5505_5545;
var G__5556 = count__5506_5546;
var G__5557 = (i__5507_5547 + (1));
seq__5504_5544 = G__5554;
chunk__5505_5545 = G__5555;
count__5506_5546 = G__5556;
i__5507_5547 = G__5557;
continue;
} else {
var temp__4657__auto___5558 = cljs.core.seq.call(null,seq__5504_5544);
if(temp__4657__auto___5558){
var seq__5504_5559__$1 = temp__4657__auto___5558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5504_5559__$1)){
var c__3496__auto___5560 = cljs.core.chunk_first.call(null,seq__5504_5559__$1);
var G__5561 = cljs.core.chunk_rest.call(null,seq__5504_5559__$1);
var G__5562 = c__3496__auto___5560;
var G__5563 = cljs.core.count.call(null,c__3496__auto___5560);
var G__5564 = (0);
seq__5504_5544 = G__5561;
chunk__5505_5545 = G__5562;
count__5506_5546 = G__5563;
i__5507_5547 = G__5564;
continue;
} else {
var vec__5513_5565 = cljs.core.first.call(null,seq__5504_5559__$1);
var name_5566 = cljs.core.nth.call(null,vec__5513_5565,(0),null);
var map__5516_5567 = cljs.core.nth.call(null,vec__5513_5565,(1),null);
var map__5516_5568__$1 = ((((!((map__5516_5567 == null)))?((((map__5516_5567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5516_5567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5516_5567):map__5516_5567);
var doc_5569 = cljs.core.get.call(null,map__5516_5568__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_5570 = cljs.core.get.call(null,map__5516_5568__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_5566);

cljs.core.println.call(null," ",arglists_5570);

if(cljs.core.truth_(doc_5569)){
cljs.core.println.call(null," ",doc_5569);
} else {
}

var G__5571 = cljs.core.next.call(null,seq__5504_5559__$1);
var G__5572 = null;
var G__5573 = (0);
var G__5574 = (0);
seq__5504_5544 = G__5571;
chunk__5505_5545 = G__5572;
count__5506_5546 = G__5573;
i__5507_5547 = G__5574;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__5518 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__5519 = null;
var count__5520 = (0);
var i__5521 = (0);
while(true){
if((i__5521 < count__5520)){
var role = cljs.core._nth.call(null,chunk__5519,i__5521);
var temp__4657__auto___5575__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___5575__$1)){
var spec_5576 = temp__4657__auto___5575__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_5576));
} else {
}

var G__5577 = seq__5518;
var G__5578 = chunk__5519;
var G__5579 = count__5520;
var G__5580 = (i__5521 + (1));
seq__5518 = G__5577;
chunk__5519 = G__5578;
count__5520 = G__5579;
i__5521 = G__5580;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__5518);
if(temp__4657__auto____$1){
var seq__5518__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5518__$1)){
var c__3496__auto__ = cljs.core.chunk_first.call(null,seq__5518__$1);
var G__5581 = cljs.core.chunk_rest.call(null,seq__5518__$1);
var G__5582 = c__3496__auto__;
var G__5583 = cljs.core.count.call(null,c__3496__auto__);
var G__5584 = (0);
seq__5518 = G__5581;
chunk__5519 = G__5582;
count__5520 = G__5583;
i__5521 = G__5584;
continue;
} else {
var role = cljs.core.first.call(null,seq__5518__$1);
var temp__4657__auto___5585__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___5585__$2)){
var spec_5586 = temp__4657__auto___5585__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_5586));
} else {
}

var G__5587 = cljs.core.next.call(null,seq__5518__$1);
var G__5588 = null;
var G__5589 = (0);
var G__5590 = (0);
seq__5518 = G__5587;
chunk__5519 = G__5588;
count__5520 = G__5589;
i__5521 = G__5590;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
