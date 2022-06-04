// imports
import { takeEvery } from "redux-saga/effects";
import { handleCall } from "../callsSlice";
import watchHandleCall from "./watchHandleCall";

// sagas
function* rootSagas() {
  yield takeEvery(handleCall().type, watchHandleCall, "par1", "par2");
}

// export
export default rootSagas;
