import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import skillsReducer from "../redusers/skillsReducer";
import servicesReducer from "../redusers/servicesReducer";
import newsFeedReducer from "../redusers/newsFeedReducer";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { serviceDetailsEpic, servicesEpic } from "../epics/servicesEpics";
import { changeSearchEpic, searchSkillsEpic } from "../epics/skillsEpics";
import { newsEpic, previousNewsEpic } from "../epics/newsFeedEpics";

const reducer = combineReducers({
    skills: skillsReducer,
    services: servicesReducer,
    news: newsFeedReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const epic = combineEpics(
    changeSearchEpic,
    searchSkillsEpic,
    servicesEpic,
    serviceDetailsEpic,
    newsEpic,
    previousNewsEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic)

export default store;