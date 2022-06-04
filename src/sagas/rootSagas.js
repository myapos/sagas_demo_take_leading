// imports
import { takeLeading, takeEvery } from "redux-saga/effects";
import { handleCall } from "../callsSlice";
import watchHandleCall from "./watchHandleCall";

// sagas
function* rootSagas() {
  yield takeLeading(handleCall().type, watchHandleCall);
}

// export
export default rootSagas;
