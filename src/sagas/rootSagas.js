// imports
import { takeLeading } from "redux-saga/effects";
import { qyeryStart } from "../callsSlice";
import watchQueryStart from "./watchQueryStart";

// sagas
function* rootSagas() {
  yield takeLeading(qyeryStart().type, watchQueryStart);
}

// export
export default rootSagas;
