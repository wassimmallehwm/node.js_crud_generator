import { createSlice } from "@reduxjs/toolkit";
import { Entity } from "../types";

const initState = (): Entity[] => {
    const savedEntities = localStorage.getItem('entities');
    if (savedEntities && savedEntities != '') {
        return JSON.parse(savedEntities)
    } else {
        return []
    }
}

const updateEntities = (state: any, action: any) => {
    state.value = action.payload
    localStorage.setItem('entities', JSON.stringify(action.payload))
}

const reset = (state: any) => {
    state.value = initState()
    localStorage.setItem('entities', '[]')
}

export const entitiesSlice = createSlice({
    name: 'entities',
    initialState: {
        value: initState()
    },
    reducers: {
        setEntities: updateEntities,
        resetEntities: reset
    }
})

export const { setEntities, resetEntities } = entitiesSlice.actions

export default entitiesSlice.reducer