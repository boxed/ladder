// Compiled by ClojureScript 0.0-2173
goog.provide('ladder');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('alandipert.storage_atom');
goog.require('elo');
goog.require('alandipert.storage_atom');
goog.require('elo');
goog.require('historian.core');
goog.require('historian.core');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
ladder.state = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scores","scores",4401104787),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"challengers","challengers",4619759958),cljs.core.PersistentVector.EMPTY], null)),"ladder-state");
historian.core.replace_library_BANG_.call(null,alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY),"library"));
historian.core.replace_prophecy_BANG_.call(null,alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY),"prophecy"));
historian.core.record_BANG_.call(null,ladder.state,new cljs.core.Keyword(null,"state","state",1123661827));
ladder.show_add_player = reagent.core.atom.call(null,false);
ladder.players_in_rank_order = (function players_in_rank_order(){return cljs.core.map.call(null,cljs.core.first,cljs.core.sort_by.call(null,cljs.core.val,cljs.core._GT_,new cljs.core.Keyword(null,"scores","scores",4401104787).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ladder.state))));
});
ladder.challenge_BANG_ = (function challenge_BANG_(x){return cljs.core.swap_BANG_.call(null,ladder.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"challengers","challengers",4619759958)], null),cljs.core.conj,x);
});
ladder.add_player_BANG_ = (function add_player_BANG_(name){cljs.core.swap_BANG_.call(null,ladder.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scores","scores",4401104787)], null),(function (p1__5691_SHARP_){return cljs.core.assoc.call(null,p1__5691_SHARP_,name,1200);
}));
return cljs.core.reset_BANG_.call(null,ladder.show_add_player,false);
});
ladder.update_score_BANG_ = (function update_score_BANG_(state,playerA,playerB,outcome){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"scores","scores",4401104787),elo.update_scores.call(null,new cljs.core.Keyword(null,"scores","scores",4401104787).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"playerA","playerA",520336626),playerA,new cljs.core.Keyword(null,"playerB","playerB",520336627),playerB,new cljs.core.Keyword(null,"outcome","outcome",4202363588),elo.to_result.call(null,outcome)], null))),new cljs.core.Keyword(null,"challengers","challengers",4619759958),cljs.core.PersistentVector.EMPTY);
});
ladder.win_BANG_ = (function win_BANG_(p1,p2,outcome){return cljs.core.swap_BANG_.call(null,ladder.state,ladder.update_score_BANG_,p1,p2,outcome);
});
ladder.choose_challengers = (function choose_challengers(players){var players__$1 = ladder.players_in_rank_order.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-challengers","div.choose-challengers",4226287389),(function (){var iter__4214__auto__ = (function iter__5696(s__5697){return (new cljs.core.LazySeq(null,(function (){var s__5697__$1 = s__5697;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5697__$1);if(temp__4092__auto__)
{var s__5697__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5697__$2))
{var c__4212__auto__ = cljs.core.chunk_first.call(null,s__5697__$2);var size__4213__auto__ = cljs.core.count.call(null,c__4212__auto__);var b__5699 = cljs.core.chunk_buffer.call(null,size__4213__auto__);if((function (){var i__5698 = 0;while(true){
if((i__5698 < size__4213__auto__))
{var x = cljs.core._nth.call(null,c__4212__auto__,i__5698);cljs.core.chunk_append.call(null,b__5699,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.challenger.clickable","div.challenger.clickable",1818557650),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (i__5698,x,c__4212__auto__,size__4213__auto__,b__5699,s__5697__$2,temp__4092__auto__){
return (function (){return ladder.challenge_BANG_.call(null,x);
});})(i__5698,x,c__4212__auto__,size__4213__auto__,b__5699,s__5697__$2,temp__4092__auto__))
], null),x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.rank","span.rank",4619993026),cljs.core.get.call(null,new cljs.core.Keyword(null,"scores","scores",4401104787).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ladder.state)),x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),x], null)));
{
var G__5700 = (i__5698 + 1);
i__5698 = G__5700;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5699),iter__5696.call(null,cljs.core.chunk_rest.call(null,s__5697__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5699),null);
}
} else
{var x = cljs.core.first.call(null,s__5697__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.challenger.clickable","div.challenger.clickable",1818557650),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (x,s__5697__$2,temp__4092__auto__){
return (function (){return ladder.challenge_BANG_.call(null,x);
});})(x,s__5697__$2,temp__4092__auto__))
], null),x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.rank","span.rank",4619993026),cljs.core.get.call(null,new cljs.core.Keyword(null,"scores","scores",4401104787).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ladder.state)),x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),x], null)),iter__5696.call(null,cljs.core.rest.call(null,s__5697__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4214__auto__.call(null,players__$1);
})()], null);
});
ladder.choose_winner = (function choose_winner(){var vec__5702 = new cljs.core.Keyword(null,"challengers","challengers",4619759958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ladder.state));var p1 = cljs.core.nth.call(null,vec__5702,0,null);var p2 = cljs.core.nth.call(null,vec__5702,1,null);var state = cljs.core.deref.call(null,ladder.state);if((cljs.core.count.call(null,new cljs.core.Keyword(null,"challengers","challengers",4619759958).cljs$core$IFn$_invoke$arity$1(state)) > 1))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-winner.fullscreen","div.choose-winner.fullscreen",2309137603),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.clickable","span.clickable",1628405936),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return ladder.win_BANG_.call(null,p1,p2,new cljs.core.Keyword(null,"left","left",1017222009));
})], null),p1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.vs","span.vs",3296983891)," vs "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.clickable","span.clickable",1628405936),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return ladder.win_BANG_.call(null,p1,p2,new cljs.core.Keyword(null,"right","right",1122416014));
})], null),p2], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden","div.hidden",2479398169)], null);
}
});
ladder.add_player = (function add_player(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.add-player-button.top.clickable","div.add-player-button.top.clickable",1457267234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.swap_BANG_.call(null,ladder.show_add_player,cljs.core.not);
})], null),"+"], null),(cljs.core.truth_(cljs.core.deref.call(null,ladder.show_add_player))?(function (){var name = reagent.core.atom.call(null,"");return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.add-player.fullscreen","div.add-player.fullscreen",1350277265),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__5703_SHARP_){return cljs.core.reset_BANG_.call(null,name,p1__5703_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return ladder.add_player_BANG_.call(null,cljs.core.deref.call(null,name));
})], null),"add"], null)], null);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden","div.hidden",2479398169)], null))], null);
});
ladder.history_controls = (function history_controls(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-controls","div.history-controls",1029681918),((historian.core.can_undo_QMARK_.call(null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.top.undo","span.top.undo",2302631795),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return historian.core.undo_BANG_.call(null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-undo","i.fa.fa-undo",4546478746)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hidden","span.hidden",4442380352)], null)),((historian.core.can_redo_QMARK_.call(null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.top.redo","span.top.redo",2302533773),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return historian.core.redo_BANG_.call(null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-repeat","i.fa.fa-repeat",2699990609)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hidden","span.hidden",4442380352)], null))], null);
});
ladder.simple_example = (function simple_example(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.foo","div.foo",2686467419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ladder.choose_challengers], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ladder.choose_winner], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ladder.add_player], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ladder.history_controls], null)], null);
});
ladder.run = (function run(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ladder.simple_example], null),document.body);
});
goog.exportSymbol('ladder.run', ladder.run);
