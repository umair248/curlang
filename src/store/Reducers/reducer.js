import { combineReducers } from '@reduxjs/toolkit';

import AuthReducer from './AuthReducer/AuthReducer';
import AppReducer from './AppReducer/AppReducer';
import ModlizeReducer from './ModlizeReducers/ModlizeReducer';

const Reducer = combineReducers({ AuthReducer, AppReducer, ModlizeReducer });

export default Reducer;