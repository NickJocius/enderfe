import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  leases: [],
}

export const leasesSlice = createSlice({
  name: 'leases',
  initialState,
  reducers: {
      loadLeases: (state, action) => {
          state.leases = action.payload;
    }
  },
})

export const { loadLeases } = leasesSlice.actions

export default leasesSlice.reducer