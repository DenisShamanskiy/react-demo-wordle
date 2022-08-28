import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
    modalSlice: {
        open: boolean,
        window: string
    };
}

const initialState: ModalState = {
    modalSlice: {
        open: false,
        window: ""
    },
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        activeModal(state, action) {
            state.modalSlice = {...state.modalSlice,
                open: action.payload.open,
                window: action.payload.window
            }
        }
    }
});

export const { activeModal } = modalSlice.actions;

export default modalSlice.reducer;