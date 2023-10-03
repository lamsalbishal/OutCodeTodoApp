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
        createNoteStore: (state, action: PayloadAction<any[]>) => {
            state.notestore = [...state.notestore, action.payload]
        },

    },
})

// Action creators are generated for each case reducer function
export const { createNoteStore } = userSlice.actions

export default userSlice.reducer