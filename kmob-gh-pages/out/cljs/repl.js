// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35497){
var map__35498 = p__35497;
var map__35498__$1 = (((((!((map__35498 == null))))?(((((map__35498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35498):map__35498);
var m = map__35498__$1;
var n = cljs.core.get.call(null,map__35498__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35498__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35500_35532 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35501_35533 = null;
var count__35502_35534 = (0);
var i__35503_35535 = (0);
while(true){
if((i__35503_35535 < count__35502_35534)){
var f_35536 = cljs.core._nth.call(null,chunk__35501_35533,i__35503_35535);
cljs.core.println.call(null,"  ",f_35536);


var G__35537 = seq__35500_35532;
var G__35538 = chunk__35501_35533;
var G__35539 = count__35502_35534;
var G__35540 = (i__35503_35535 + (1));
seq__35500_35532 = G__35537;
chunk__35501_35533 = G__35538;
count__35502_35534 = G__35539;
i__35503_35535 = G__35540;
continue;
} else {
var temp__5735__auto___35541 = cljs.core.seq.call(null,seq__35500_35532);
if(temp__5735__auto___35541){
var seq__35500_35542__$1 = temp__5735__auto___35541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35500_35542__$1)){
var c__4609__auto___35543 = cljs.core.chunk_first.call(null,seq__35500_35542__$1);
var G__35544 = cljs.core.chunk_rest.call(null,seq__35500_35542__$1);
var G__35545 = c__4609__auto___35543;
var G__35546 = cljs.core.count.call(null,c__4609__auto___35543);
var G__35547 = (0);
seq__35500_35532 = G__35544;
chunk__35501_35533 = G__35545;
count__35502_35534 = G__35546;
i__35503_35535 = G__35547;
continue;
} else {
var f_35548 = cljs.core.first.call(null,seq__35500_35542__$1);
cljs.core.println.call(null,"  ",f_35548);


var G__35549 = cljs.core.next.call(null,seq__35500_35542__$1);
var G__35550 = null;
var G__35551 = (0);
var G__35552 = (0);
seq__35500_35532 = G__35549;
chunk__35501_35533 = G__35550;
count__35502_35534 = G__35551;
i__35503_35535 = G__35552;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35553 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35553);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35553)))?cljs.core.second.call(null,arglists_35553):arglists_35553));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35504_35554 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35505_35555 = null;
var count__35506_35556 = (0);
var i__35507_35557 = (0);
while(true){
if((i__35507_35557 < count__35506_35556)){
var vec__35518_35558 = cljs.core._nth.call(null,chunk__35505_35555,i__35507_35557);
var name_35559 = cljs.core.nth.call(null,vec__35518_35558,(0),null);
var map__35521_35560 = cljs.core.nth.call(null,vec__35518_35558,(1),null);
var map__35521_35561__$1 = (((((!((map__35521_35560 == null))))?(((((map__35521_35560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35521_35560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35521_35560):map__35521_35560);
var doc_35562 = cljs.core.get.call(null,map__35521_35561__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35563 = cljs.core.get.call(null,map__35521_35561__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35559);

cljs.core.println.call(null," ",arglists_35563);

if(cljs.core.truth_(doc_35562)){
cljs.core.println.call(null," ",doc_35562);
} else {
}


var G__35564 = seq__35504_35554;
var G__35565 = chunk__35505_35555;
var G__35566 = count__35506_35556;
var G__35567 = (i__35507_35557 + (1));
seq__35504_35554 = G__35564;
chunk__35505_35555 = G__35565;
count__35506_35556 = G__35566;
i__35507_35557 = G__35567;
continue;
} else {
var temp__5735__auto___35568 = cljs.core.seq.call(null,seq__35504_35554);
if(temp__5735__auto___35568){
var seq__35504_35569__$1 = temp__5735__auto___35568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35504_35569__$1)){
var c__4609__auto___35570 = cljs.core.chunk_first.call(null,seq__35504_35569__$1);
var G__35571 = cljs.core.chunk_rest.call(null,seq__35504_35569__$1);
var G__35572 = c__4609__auto___35570;
var G__35573 = cljs.core.count.call(null,c__4609__auto___35570);
var G__35574 = (0);
seq__35504_35554 = G__35571;
chunk__35505_35555 = G__35572;
count__35506_35556 = G__35573;
i__35507_35557 = G__35574;
continue;
} else {
var vec__35523_35575 = cljs.core.first.call(null,seq__35504_35569__$1);
var name_35576 = cljs.core.nth.call(null,vec__35523_35575,(0),null);
var map__35526_35577 = cljs.core.nth.call(null,vec__35523_35575,(1),null);
var map__35526_35578__$1 = (((((!((map__35526_35577 == null))))?(((((map__35526_35577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35526_35577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35526_35577):map__35526_35577);
var doc_35579 = cljs.core.get.call(null,map__35526_35578__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35580 = cljs.core.get.call(null,map__35526_35578__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35576);

cljs.core.println.call(null," ",arglists_35580);

if(cljs.core.truth_(doc_35579)){
cljs.core.println.call(null," ",doc_35579);
} else {
}


var G__35581 = cljs.core.next.call(null,seq__35504_35569__$1);
var G__35582 = null;
var G__35583 = (0);
var G__35584 = (0);
seq__35504_35554 = G__35581;
chunk__35505_35555 = G__35582;
count__35506_35556 = G__35583;
i__35507_35557 = G__35584;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__35528 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35529 = null;
var count__35530 = (0);
var i__35531 = (0);
while(true){
if((i__35531 < count__35530)){
var role = cljs.core._nth.call(null,chunk__35529,i__35531);
var temp__5735__auto___35585__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35585__$1)){
var spec_35586 = temp__5735__auto___35585__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35586));
} else {
}


var G__35587 = seq__35528;
var G__35588 = chunk__35529;
var G__35589 = count__35530;
var G__35590 = (i__35531 + (1));
seq__35528 = G__35587;
chunk__35529 = G__35588;
count__35530 = G__35589;
i__35531 = G__35590;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__35528);
if(temp__5735__auto____$1){
var seq__35528__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35528__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__35528__$1);
var G__35591 = cljs.core.chunk_rest.call(null,seq__35528__$1);
var G__35592 = c__4609__auto__;
var G__35593 = cljs.core.count.call(null,c__4609__auto__);
var G__35594 = (0);
seq__35528 = G__35591;
chunk__35529 = G__35592;
count__35530 = G__35593;
i__35531 = G__35594;
continue;
} else {
var role = cljs.core.first.call(null,seq__35528__$1);
var temp__5735__auto___35595__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35595__$2)){
var spec_35596 = temp__5735__auto___35595__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35596));
} else {
}


var G__35597 = cljs.core.next.call(null,seq__35528__$1);
var G__35598 = null;
var G__35599 = (0);
var G__35600 = (0);
seq__35528 = G__35597;
chunk__35529 = G__35598;
count__35530 = G__35599;
i__35531 = G__35600;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35601 = cljs.core.conj.call(null,via,t);
var G__35602 = cljs.core.ex_cause.call(null,t);
via = G__35601;
t = G__35602;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35605 = datafied_throwable;
var map__35605__$1 = (((((!((map__35605 == null))))?(((((map__35605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35605):map__35605);
var via = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35606 = cljs.core.last.call(null,via);
var map__35606__$1 = (((((!((map__35606 == null))))?(((((map__35606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35606):map__35606);
var type = cljs.core.get.call(null,map__35606__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35606__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35606__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35607 = data;
var map__35607__$1 = (((((!((map__35607 == null))))?(((((map__35607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35607):map__35607);
var problems = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35608 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35608__$1 = (((((!((map__35608 == null))))?(((((map__35608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35608):map__35608);
var top_data = map__35608__$1;
var source = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35613 = phase;
var G__35613__$1 = (((G__35613 instanceof cljs.core.Keyword))?G__35613.fqn:null);
switch (G__35613__$1) {
case "read-source":
var map__35614 = data;
var map__35614__$1 = (((((!((map__35614 == null))))?(((((map__35614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35614):map__35614);
var line = cljs.core.get.call(null,map__35614__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35614__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35616 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35616__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35616,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35616);
var G__35616__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35616__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35616__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35616__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35616__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35617 = top_data;
var G__35617__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35617,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35617);
var G__35617__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35617__$1);
var G__35617__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35617__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35617__$2);
var G__35617__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35617__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35617__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35617__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35617__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35618 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35618,(0),null);
var method = cljs.core.nth.call(null,vec__35618,(1),null);
var file = cljs.core.nth.call(null,vec__35618,(2),null);
var line = cljs.core.nth.call(null,vec__35618,(3),null);
var G__35621 = top_data;
var G__35621__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35621,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35621);
var G__35621__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35621__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35621__$1);
var G__35621__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__35621__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35621__$2);
var G__35621__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35621__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35621__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35621__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35621__$4;
}

break;
case "execution":
var vec__35622 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35622,(0),null);
var method = cljs.core.nth.call(null,vec__35622,(1),null);
var file = cljs.core.nth.call(null,vec__35622,(2),null);
var line = cljs.core.nth.call(null,vec__35622,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__35604_SHARP_){
var or__4185__auto__ = (p1__35604_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35604_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__35625 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35625__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35625,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35625);
var G__35625__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35625__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35625__$1);
var G__35625__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__35625__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35625__$2);
var G__35625__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35625__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35625__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35625__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35625__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35613__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35629){
var map__35630 = p__35629;
var map__35630__$1 = (((((!((map__35630 == null))))?(((((map__35630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35630):map__35630);
var triage_data = map__35630__$1;
var phase = cljs.core.get.call(null,map__35630__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35630__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35630__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35630__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35630__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35630__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35630__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35630__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35632 = phase;
var G__35632__$1 = (((G__35632 instanceof cljs.core.Keyword))?G__35632.fqn:null);
switch (G__35632__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35633_35642 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35634_35643 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35635_35644 = true;
var _STAR_print_fn_STAR__temp_val__35636_35645 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35635_35644);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35636_35645);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__35627_SHARP_){
return cljs.core.dissoc.call(null,p1__35627_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35634_35643);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35633_35642);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35637_35646 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35638_35647 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35639_35648 = true;
var _STAR_print_fn_STAR__temp_val__35640_35649 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35639_35648);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35640_35649);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__35628_SHARP_){
return cljs.core.dissoc.call(null,p1__35628_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35638_35647);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35637_35646);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35632__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1585168649094
