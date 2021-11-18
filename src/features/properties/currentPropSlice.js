import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentProp: {},
}

export const currentPropSlice = createSlice({
  name: 'currentProp',
  initialState,
  reducers: {
      addCurrProperty: (state, action) => {
          state.currentProp = action.payload;
    }
  },
})

export const { addCurrProperty } = currentPropSlice.actions

export default currentPropSlice.reducer