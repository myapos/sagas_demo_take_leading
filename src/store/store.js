import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { counterReducer } from "../counterSlice";

// sagas
import rootSagas from "../sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);
