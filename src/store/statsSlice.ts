import { createSlice } from "@reduxjs/toolkit";

type BarRow = {
    name: number,
    percent: string,
    count: number
}

type StatsState = {
    stats: {
        win: number;
        loss: number;
        surrender: number
        bar: BarRow[];
    }
}

const initialState: StatsState = {
    stats: {
        win: 0,
        loss: 0,
        surrender: 0,
        bar: [
            {
                name: 1,
                percent: "0%",
                count:0
            },
            {
                name: 2,
                percent: "0%",
                count: 0
            },
            {
                name: 3,
                percent: "0%",
                count:0
            },
            {
                name: 4,
                percent: "0%",
                count: 0
            },
            {
                name: 5,
                percent: "0%",
                count: 0
            },
            {
                name: 6,
                percent: "0%",
                count: 0
            },
        ]
    }
}

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    localStats(state) {
        state.stats = JSON.parse(localStorage["stats"])
    },
    resetStats(state) {
        state.stats = {...state.stats,
            win: 0,
            loss: 0,
            surrender: 0,
            bar: [
                {
                    name: 1,
                    percent: "0%",
                    count:0
                },
                {
                    name: 2,
                    percent: "0%",
                    count: 0
                },
                {
                    name: 3,
                    percent: "0%",
                    count:0
                },
                {
                    name: 4,
                    percent: "0%",
                    count: 0
                },
                {
                    name: 5,
                    percent: "0%",
                    count: 0
                },
                {
                    name: 6,
                    percent: "0%",
                    count: 0
                },
            ]
        }
        // localStorage.setItem("stats", JSON.stringify(state.stats))

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
    barCalculation(state, actions) {
        state.stats.bar = state.stats.bar.map(function(item, index) {
            return {
                name: item.name,
                count: index === actions.payload ? item.count + 1 : item.count,
                percent: index === actions.payload ? `${Math.round(100 / state.stats.win * (item.count + 1))}%` : `${Math.round(100 / state.stats.win * item.count)}%`,
            }
        });
        localStorage.setItem("stats", JSON.stringify(state.stats))
    },
  },
});

export const { localStats, resetStats,  winStats, lossStats, surrenderStats, barCalculation } = statsSlice.actions;

export default statsSlice.reducer;