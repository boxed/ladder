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
historian.core.different_from_last_QMARK_ = (function different_from_last_QMARK_(new$){var remove_ts_fn = (function (p1__4852_SHARP_){return cljs.core.dissoc.call(null,p1__4852_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536));
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
historian.core.restore_BANG_ = (function restore_BANG_(snaps){var _STAR_record_active_STAR_4858 = historian.core._STAR_record_active_STAR_;try{historian.core._STAR_record_active_STAR_ = false;
var seq__4859 = cljs.core.seq.call(null,snaps);var chunk__4860 = null;var count__4861 = 0;var i__4862 = 0;while(true){
if((i__4862 < count__4861))
{var s = cljs.core._nth.call(null,chunk__4860,i__4862);cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"atom","atom",1016908995).cljs$core$IFn$_invoke$arity$1(s));
{
var G__4863 = seq__4859;
var G__4864 = chunk__4860;
var G__4865 = count__4861;
var G__4866 = (i__4862 + 1);
seq__4859 = G__4863;
chunk__4860 = G__4864;
count__4861 = G__4865;
i__4862 = G__4866;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4859);if(temp__4092__auto__)
{var seq__4859__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4859__$1))
{var c__4245__auto__ = cljs.core.chunk_first.call(null,seq__4859__$1);{
var G__4867 = cljs.core.chunk_rest.call(null,seq__4859__$1);
var G__4868 = c__4245__auto__;
var G__4869 = cljs.core.count.call(null,c__4245__auto__);
var G__4870 = 0;
seq__4859 = G__4867;
chunk__4860 = G__4868;
count__4861 = G__4869;
i__4862 = G__4870;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__4859__$1);cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"atom","atom",1016908995).cljs$core$IFn$_invoke$arity$1(s));
{
var G__4871 = cljs.core.next.call(null,seq__4859__$1);
var G__4872 = null;
var G__4873 = 0;
var G__4874 = 0;
seq__4859 = G__4871;
chunk__4860 = G__4872;
count__4861 = G__4873;
i__4862 = G__4874;
continue;
}
}
} else
{return null;
}
}
break;
}
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_4858;
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
historian.core.can_undo_QMARK__STAR_ = (function can_undo_QMARK__STAR_(records){return (cljs.core.count.call(null,records) >= 2);
});
historian.core.can_redo_QMARK__STAR_ = (function can_redo_QMARK__STAR_(records){return (cljs.core.count.call(null,records) >= 1);
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
historian.core.undo_BANG_ = (function undo_BANG_(){var alex = cljs.core.deref.call(null,historian.core.alexandria);if(historian.core.can_undo_QMARK__STAR_.call(null,alex))
{historian.core.save_prophecies_BANG_.call(null,cljs.core.peek.call(null,alex));
return historian.core.restore_BANG_.call(null,cljs.core.peek.call(null,cljs.core.reset_BANG_.call(null,historian.core.alexandria,cljs.core.pop.call(null,alex))));
} else
{return null;
}
});
historian.core.redo_BANG_ = (function redo_BANG_(){var nos = cljs.core.deref.call(null,historian.core.nostradamus);if(historian.core.can_redo_QMARK__STAR_.call(null,nos))
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
