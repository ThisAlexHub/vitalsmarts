import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state(): State {
    return {
      fullName: "John Smith",
      course: "",
      reason: "",
      agree: false,
    };
  },
  mutations: {
    setState(state: State, stateOptions: Partial<State>) {
      Object.assign(state, stateOptions);
    },
  },
  actions: {},
  modules: {},
});

export interface State {
  fullName: string;
  course: string;
  reason: string;
  agree: boolean;
}
