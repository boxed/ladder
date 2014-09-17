// Compiled by ClojureScript 0.0-2173
goog.provide('historian.core');
goog.require('cljs.core');
/**
* The great library... store your stuff here.
*/
historian.core.alexandria = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* What will happen in the future...
*/
historian.core.nostradamus = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* Who should we record?
*/
historian.core.overseer = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
historian.core.register_atom_BANG_ = (function register_atom_BANG_(atom,k){return cljs.core.swap_BANG_.call(null,historian.core.overseer,cljs.core.assoc,k,atom);
});
historian.core.de_register_atom_BANG_ = (function de_register_atom_BANG_(k){return cljs.core.swap_BANG_.call(null,historian.core.overseer,cljs.core.dissoc,k);
});
historian.core.snapshot = (function snapshot(k){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"atom","atom",1016908995),cljs.core.deref.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,historian.core.overseer),k)),new cljs.core.Keyword(null,"key","key",1014010321),k,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536),goog.now()], null);
});
historian.core.take_snapshots = (function take_snapshots(){return cljs.core.mapv.call(null,historian.core.snapshot,cljs.core.keys.call(null,cljs.core.deref.call(null,historian.core.overseer)));
});
historian.core.different_from_last_QMARK_ = (function different_from_last_QMARK_(new$){var remove_ts_fn = (function (p1__6994_SHARP_){return cljs.core.dissoc.call(null,p1__6994_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536));
});var old = cljs.core.peek.call(null,cljs.core.deref.call(null,historian.core.alexandria));return cljs.core.not_EQ_.call(null,cljs.core.map.call(null,remove_ts_fn,old),cljs.core.map.call(null,remove_ts_fn,new$));
});
historian.core.save_snapshots_BANG_ = (function save_snapshots_BANG_(snaps){return cljs.core.swap_BANG_.call(null,historian.core.alexandria,cljs.core.conj,snaps);
});
historian.core.save_if_different_BANG_ = (function save_if_different_BANG_(snaps){if(historian.core.different_from_last_QMARK_.call(null,snaps))
{historian.core.save_snapshots_BANG_.call(null,snaps);
return cljs.core.reset_BANG_.call(null,historian.core.nostradamus,cljs.core.PersistentVector.EMPTY);
} else
{return null;
}
});
historian.core.save_prophecies_BANG_ = (function save_prophecies_BANG_(snaps){return cljs.core.swap_BANG_.call(null,historian.core.nostradamus,cljs.core.conj,snaps);
});
historian.core._STAR_record_active_STAR_ = true;
/**
* Restore all the atoms being watched to a previous/different state.
*/
historian.core.restore_BANG_ = (function restore_BANG_(snaps){var _STAR_record_active_STAR_7000 = historian.core._STAR_record_active_STAR_;try{historian.core._STAR_record_active_STAR_ = false;
var seq__7001 = cljs.core.seq.call(null,snaps);var chunk__7002 = null;var count__7003 = 0;var i__7004 = 0;while(true){
if((i__7004 < count__7003))
{var s = cljs.core._nth.call(null,chunk__7002,i__7004);cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"atom","atom",1016908995).cljs$core$IFn$_invoke$arity$1(s));
{
var G__7005 = seq__7001;
var G__7006 = chunk__7002;
var G__7007 = count__7003;
var G__7008 = (i__7004 + 1);
seq__7001 = G__7005;
chunk__7002 = G__7006;
count__7003 = G__7007;
i__7004 = G__7008;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7001);if(temp__4092__auto__)
{var seq__7001__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7001__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__7001__$1);{
var G__7009 = cljs.core.chunk_rest.call(null,seq__7001__$1);
var G__7010 = c__4191__auto__;
var G__7011 = cljs.core.count.call(null,c__4191__auto__);
var G__7012 = 0;
seq__7001 = G__7009;
chunk__7002 = G__7010;
count__7003 = G__7011;
i__7004 = G__7012;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__7001__$1);cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"atom","atom",1016908995).cljs$core$IFn$_invoke$arity$1(s));
{
var G__7013 = cljs.core.next.call(null,seq__7001__$1);
var G__7014 = null;
var G__7015 = 0;
var G__7016 = 0;
seq__7001 = G__7013;
chunk__7002 = G__7014;
count__7003 = G__7015;
i__7004 = G__7016;
continue;
}
}
} else
{return null;
}
}
break;
}
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_7000;
}});
historian.core.watch_BANG_ = (function watch_BANG_(atm){return cljs.core.add_watch.call(null,atm,new cljs.core.Keyword("historian.core","historian-watch","historian.core/historian-watch",725616032),(function (_,___$1,___$2,___$3){if(cljs.core.truth_(historian.core._STAR_record_active_STAR_))
{return historian.core.save_if_different_BANG_.call(null,historian.core.take_snapshots.call(null));
} else
{return null;
}
}));
});
historian.core.remove_watch_BANG_ = (function remove_watch_BANG_(a){return cljs.core.remove_watch.call(null,a,new cljs.core.Keyword("historian.core","historian-watch","historian.core/historian-watch",725616032));
});
historian.core.can_undo_QMARK__STAR_ = (function can_undo_QMARK__STAR_(records){if(cljs.core.next.call(null,records))
{return true;
} else
{return null;
}
});
historian.core.can_redo_QMARK__STAR_ = (function can_redo_QMARK__STAR_(records){if(cljs.core.truth_(cljs.core.first.call(null,records)))
{return true;
} else
{return null;
}
});
/**
* Trigger a record to history. The current state of at least one atom
* must be different from the previous one for the record to be
* included into history.
*/
historian.core.trigger_record_BANG_ = (function trigger_record_BANG_(){if(cljs.core.truth_(historian.core._STAR_record_active_STAR_))
{return historian.core.save_if_different_BANG_.call(null,historian.core.take_snapshots.call(null));
} else
{return null;
}
});
/**
* The library atom (where all records are kept to enable 'undo') will
* be replaced by the new-atom. Useful if you've already done some
* modifications to the new-atom (like added some watchers). Depending
* on where you use this function, you might want to fire a
* `trigger-record!' just after.
* 
* Usually, one would also want to use `replace-prophecy!' in order to
* replace the 'redo' atom.
*/
historian.core.replace_library_BANG_ = (function replace_library_BANG_(new_atom){return historian.core.alexandria = new_atom;
});
/**
* The prophecy atom (where all records are kept to enable 'redo')
* will be replaced by the new-atom. Useful if you've already done some
* modifications to the new-atom (like added some watchers).
* 
* Usually used with `replace-library'.
*/
historian.core.replace_prophecy_BANG_ = (function replace_prophecy_BANG_(new_atom){return historian.core.nostradamus = new_atom;
});
/**
* Add the atom to the overseer watch. When any of the atom under its
* watch is modified, it triggers a save of every atom to history (if
* any of the atom is different form the last historic state. Return
* the atom.
*/
historian.core.record_BANG_ = (function record_BANG_(atm,k){historian.core.register_atom_BANG_.call(null,atm,k);
historian.core.watch_BANG_.call(null,atm);
historian.core.trigger_record_BANG_.call(null);
return atm;
});
/**
* Remove the atom associated to this key from the overseer watch.
* This atom will no longer be watched, nor its state saved to
* history.
*/
historian.core.stop_record_BANG_ = (function stop_record_BANG_(k){historian.core.remove_watch_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,historian.core.overseer),k));
return historian.core.de_register_atom_BANG_.call(null,k);
});
/**
* Do we have enough history to undo?
*/
historian.core.can_undo_QMARK_ = (function can_undo_QMARK_(){return historian.core.can_undo_QMARK__STAR_.call(null,cljs.core.deref.call(null,historian.core.alexandria));
});
/**
* Can we redo?
*/
historian.core.can_redo_QMARK_ = (function can_redo_QMARK_(){return historian.core.can_redo_QMARK__STAR_.call(null,cljs.core.deref.call(null,historian.core.nostradamus));
});
historian.core.undo_BANG_ = (function undo_BANG_(){var alex = cljs.core.deref.call(null,historian.core.alexandria);if(cljs.core.truth_(historian.core.can_undo_QMARK__STAR_.call(null,alex)))
{historian.core.save_prophecies_BANG_.call(null,cljs.core.peek.call(null,alex));
return historian.core.restore_BANG_.call(null,cljs.core.peek.call(null,cljs.core.reset_BANG_.call(null,historian.core.alexandria,cljs.core.pop.call(null,alex))));
} else
{return null;
}
});
historian.core.redo_BANG_ = (function redo_BANG_(){var nos = cljs.core.deref.call(null,historian.core.nostradamus);if(cljs.core.truth_(historian.core.can_redo_QMARK__STAR_.call(null,nos)))
{historian.core.save_snapshots_BANG_.call(null,cljs.core.peek.call(null,nos));
cljs.core.reset_BANG_.call(null,historian.core.nostradamus,cljs.core.pop.call(null,nos));
return historian.core.restore_BANG_.call(null,cljs.core.peek.call(null,nos));
} else
{return null;
}
});
historian.core.clear_history_BANG_ = (function clear_history_BANG_(){cljs.core.reset_BANG_.call(null,historian.core.alexandria,cljs.core.PersistentVector.EMPTY);
return cljs.core.reset_BANG_.call(null,historian.core.nostradamus,cljs.core.PersistentVector.EMPTY);
});
