import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import skillsReducer from "../redusers/skillsReducer";
import servicesReducer from "../redusers/servicesReducer"
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { serviceDetailsEpic, servicesEpic } from "../epics/servicesEpics";
import { changeSearchEpic, searchSkillsEpic } from "../epics/skillsEpics";

const reducer = combineReducers({
    skills: skillsReducer,
    services: servicesReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const epic = combineEpics(
    changeSearchEpic,
    searchSkillsEpic,
    servicesEpic,
    serviceDetailsEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic)

export default store;