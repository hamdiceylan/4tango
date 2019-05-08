import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import asyncReducers from '../common/async/asyncReducer'

const rootReducers = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    async : asyncReducers
});

export default rootReducers;