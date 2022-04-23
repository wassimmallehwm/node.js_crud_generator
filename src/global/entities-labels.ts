import { createSlice } from "@reduxjs/toolkit";

const initState = (): string[] => {
    const savedEntities = localStorage.getItem('entities');
    if (savedEntities && savedEntities != '') {
        let res: string[] = [];
        for (let entity of JSON.parse(savedEntities)) {
          if(entity && entity.entity_name){
            res.push(entity.entity_name)
          }
        }
        return res
    } else {
        return []
    }
}

const updateEntitiesLabels = (state: any, action: any) => {
    state.value = action.payload
}

const reset = (state: any) => {
    state.value = initState()
}

export const entitiesLabelsSlice = createSlice({
    name: 'entitiesLabels',
    initialState: {
        value: initState()
    },
    reducers: {
        setEntitiesLabels: updateEntitiesLabels,
        resetEntitiesLabels: reset
    }
})

export const { setEntitiesLabels, resetEntitiesLabels } = entitiesLabelsSlice.actions

export default entitiesLabelsSlice.reducer