import { defineStore } from "pinia";
import { MODES } from "../utils/Constants";

export const useModeStore = defineStore("mode", {
  state: () => ({
    currentMode: "READ_WRITE",
  }),

  getters: {
    mode(state) {
      return state.currentMode;
    },

    isReadOnly(state) {
      return state.currentMode === MODES.READ_ONLY;
    },

    isDemo(state) {
      return state.currentMode === MODES.DEMO;
    },

    isReadWrite(state) {
      return state.currentMode === MODES.READ_WRITE || state.currentMode === MODES.WASM || state.currentMode === MODES.DEMO;
    },

    isWasm(state) {
      return state.currentMode === MODES.WASM || state.currentMode === MODES.DEMO;
    }
  },

  actions: {
    setMode(mode) {
      this.currentMode = mode;
    },
  },
});
