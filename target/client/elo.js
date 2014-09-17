// Compiled by ClojureScript 0.0-2173
goog.provide('elo');
goog.require('cljs.core');
elo._STAR_k_factor_STAR_ = 32;
elo._STAR_starting_score_STAR_ = 1200;
elo.expected_result = (function expected_result(a,b){return (1 / (1 + Math.pow.call(null,10,((a - b) / 400))));
});
elo.score_change = (function score_change(a,b,result){return (elo._STAR_k_factor_STAR_ * (result - elo.expected_result.call(null,a,b)));
});
elo.update_scores = (function update_scores(scores,p__4793){var map__4795 = p__4793;var map__4795__$1 = ((cljs.core.seq_QMARK_.call(null,map__4795))?cljs.core.apply.call(null,cljs.core.hash_map,map__4795):map__4795);var outcome = cljs.core.get.call(null,map__4795__$1,new cljs.core.Keyword(null,"outcome","outcome",4202363588));var playerB = cljs.core.get.call(null,map__4795__$1,new cljs.core.Keyword(null,"playerB","playerB",520336627));var playerA = cljs.core.get.call(null,map__4795__$1,new cljs.core.Keyword(null,"playerA","playerA",520336626));var a = (function (){var or__3443__auto__ = scores.call(null,playerA);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return elo._STAR_starting_score_STAR_;
}
})();var b = (function (){var or__3443__auto__ = scores.call(null,playerB);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return elo._STAR_starting_score_STAR_;
}
})();var delta = Math.round.call(null,elo.score_change.call(null,a,b,outcome));return cljs.core.assoc.call(null,cljs.core.assoc.call(null,scores,playerA,(a - delta)),playerB,(b + delta));
});
elo.to_result = (function to_result(input){var G__4797 = input;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tie","tie",1014019074),G__4797))
{return 0.5;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__4797))
{return 1.0;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__4797))
{return 0.0;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(input)].join('')));
} else
{return null;
}
}
}
}
});
