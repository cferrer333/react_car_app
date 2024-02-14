import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "make",
        model: "model",
        year: "year",
        trim: "trim",
    },
    reducers: {
        // actiona is submitted elsewhere - written to state.name
        chooseMake: (state, action) => { state.make = action.payload}, // All we're doing is setting the input to the state.name
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseTrim: (state, action) => { state.trim = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseTrim } = rootSlice.actions