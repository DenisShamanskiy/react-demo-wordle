import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
    modalSlice: {
        open: boolean,
    };
}

const initialState: ModalState = {
    modalSlice: {
        open: false,
    },
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        activeModal(state, action) {
            state.modalSlice = {...state.modalSlice,
                open: action.payload
            }
        }
    }
});

export const { activeModal } = modalSlice.actions;

export default modalSlice.reducer;