import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from '../features/properties/propertiesSlice';
import leasesReducer from '../features/leases/leasesSlice';
import currentPropReducer from '../features/properties/currentPropSlice';

export const store = configureStore({
    reducer: {
        properties: propertiesReducer,
        leases: leasesReducer,
        currentProp: currentPropReducer,
  },
})