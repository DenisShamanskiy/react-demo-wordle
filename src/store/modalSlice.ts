import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
    modalSlice: {
        open: boolean,
        window: string,
        title?: string
        description?: string[]
    };
}

const initialState: ModalState = {
    modalSlice: {
        open: false,
        window: "",
        title: "",
        description: []
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
                title: action.payload.title,
                description: action.payload.description
            }
        }
    }
});

export const { activeModal } = modalSlice.actions;

export default modalSlice.reducer;