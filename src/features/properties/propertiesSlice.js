import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  properties: [],
}

export const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
      loadProperties: (state, action) => {
          state.properties = action.payload;
    }
  },
})

export const { loadProperties } = propertiesSlice.actions

export default propertiesSlice.reducer