import basics from "../data/cheats/basics.json";
import effects from "../data/cheats/effects.json";
import hooks from "../data/cheats/hooks.json";
import jsx from "../data/cheats/jsx.json";
import next from "../data/cheats/next.json";
import props from "../data/cheats/props.json";
import query from "../data/cheats/query.json";
import reducer from "../data/cheats/reducer.json";
import redux from "../data/cheats/redux.json";
import router from "../data/cheats/router.json";
import state from "../data/cheats/state.json";

const cheatGroups = [
  basics,
  jsx,
  props,
  state,
  effects,
  hooks,
  router,
  reducer,
  redux,
  query,
  next,
];

export function loadCheats() {
  return cheatGroups.flat();
}

export const cheats = loadCheats();

export default loadCheats;

