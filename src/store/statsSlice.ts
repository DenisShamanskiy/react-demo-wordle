import { createSlice } from "@reduxjs/toolkit";

type StatsState = {
    stats: {
        win: number;
        loss: number;
        surrender: number
    }
}

const initialState: StatsState = {
    stats: {
        win: 0,
        loss: 0,
        surrender: 0
    }
}

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    localStats(state) {
        state.stats = JSON.parse(localStorage["stats"])
    },
    winStats(state) {
        state.stats = {...state.stats,
            win: state.stats.win + 1,
            loss: state.stats.loss,
            surrender: state.stats.surrender
        }
        localStorage.setItem("stats", JSON.stringify(state.stats))
    },
    lossStats(state) {
        state.stats = {...state.stats,
            win: state.stats.win,
            loss: state.stats.loss + 1,
            surrender: state.stats.surrender
        }
        localStorage.setItem("stats", JSON.stringify(state.stats))
    },
    surrenderStats(state) {
        state.stats = {...state.stats,
            win: state.stats.win,
            loss: state.stats.loss,
            surrender: state.stats.surrender + 1
        }
        localStorage.setItem("stats", JSON.stringify(state.stats))
    },
  },
});

export const { localStats, winStats, lossStats, surrenderStats } = statsSlice.actions;

export default statsSlice.reducer;