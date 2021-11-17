import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from '../features/properties/propertiesSlice';
import leasesReducer from '../features/leases/leasesSlice';

export const store = configureStore({
    reducer: {
        properties: propertiesReducer,
        leases: leasesReducer,
  },
})