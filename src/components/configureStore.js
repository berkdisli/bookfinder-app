import { legacy_createStore as createStore } from 'redux'
import createRootReducer from './reducers'
// Define on your own as per requirement
const preloadedState = {};
// Create store
const store = createStore(createRootReducer(), // root reducer with router state  
    preloadedState)
export default store;