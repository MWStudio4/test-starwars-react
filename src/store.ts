import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { CounterReducer } from './features/counter'
import { PeopleReducer } from './features/people'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
  people: PeopleReducer,
})

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

export default store
