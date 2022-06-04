import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { callsReducer } from "../callsSlice";

// sagas
import rootSagas from "../sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    calls: callsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);
