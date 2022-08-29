import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
    modalSlice: {
        open: boolean,
        window: string,
        title?: string
    };
}

const initialState: ModalState = {
    modalSlice: {
        open: false,
        window: "",
        title: ""
    },
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        activeModal(state, action) {
            state.modalSlice = {...state.modalSlice,
                open: action.payload.open,
                window: action.payload.window,
                title: action.payload.title
            }
        }
    }
});

export const { activeModal } = modalSlice.actions;

export default modalSlice.reducer;