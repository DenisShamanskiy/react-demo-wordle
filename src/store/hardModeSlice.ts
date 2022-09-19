import { createSlice } from "@reduxjs/toolkit";

type HardModeState = {
  hardModeSlice: {
    active: boolean;
    letters: string[]
  };
};

const initialState: HardModeState = {
  hardModeSlice: {
    active: false,
    letters: []
  },
};

const hardModeSlice = createSlice({
  name: "hardMode",
  initialState,
  reducers: {
    localHardMode(state) {
        state.hardModeSlice = JSON.parse(localStorage["hardMode"])
      },
    setHardMode(state, actions) {
        state.hardModeSlice = {...state.hardModeSlice,
            active: actions.payload.active,
            letters: [...new Set(state.hardModeSlice.letters.concat(actions.payload.letters))],
        }
        localStorage.setItem("hardMode", JSON.stringify(state.hardModeSlice))
    },
    resetHardMode(state) {
        state.hardModeSlice = {...state.hardModeSlice,
            active: state.hardModeSlice.active,
            letters: [],
        }
        localStorage.setItem("hardMode", JSON.stringify(state.hardModeSlice))
    },
  },
});

export const { localHardMode, setHardMode, resetHardMode } = hardModeSlice.actions;

export default hardModeSlice.reducer;
