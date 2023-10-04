import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface NoteState {
    notestore: any,

}

const initialState: NoteState = {
    notestore: [],

}

export const userSlice = createSlice({
    name: 'noteslice',
    initialState,
    reducers: {
        createNoteStore: (state, action: PayloadAction<any>) => {
            state.notestore = [...state.notestore, action.payload]
        },
        statusChangeNote: (state, action: PayloadAction<any>) => {
            let selcetedStore = state.notestore.filter((item: any) => item.id == action.payload);
            let array = selcetedStore[0];
            if (array.status) {
                array.status = false;
                state.notestore = Object.assign([], state.notestore);
            } else {
                array.status = true;
                state.notestore = Object.assign([], state.notestore);
            }
        },

        updateNoteStore: (state, action: PayloadAction<any>) => {
            let indexValue = state.notestore.findIndex((item: any) => item.id == action.payload.id);
            state.notestore[indexValue] = action.payload
        },

        deleteNoteStore: (state, action: PayloadAction<any>) => {
            let deleteFileterItem = state.notestore.filter((item: any) => item.id != action.payload);
            state.notestore = deleteFileterItem
        },

    },
})

// Action creators are generated for each case reducer function
export const { createNoteStore, statusChangeNote, updateNoteStore, deleteNoteStore } = userSlice.actions

export default userSlice.reducer