import { createSlice } from "@reduxjs/toolkit";
import initSettings from '../initial_settings.json';
import { Settings } from "../types";

const initState = (): Settings => {
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings && savedSettings != '') {
        return JSON.parse(savedSettings)
    } else {
        return initSettings.init_settings
    }
}

const updateSettings = (state: any, action: any) => {
    state.value = action.payload
    localStorage.setItem('settings', JSON.stringify(action.payload))
}

const reset = (state: any) => {
    state.value = initState()
    localStorage.setItem('settings', JSON.stringify(initSettings.init_settings))
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        value: initState()
    },
    reducers: {
        setSettings: updateSettings,
        resetSettings: reset
    }
})

export const { setSettings, resetSettings } = settingsSlice.actions

export default settingsSlice.reducer