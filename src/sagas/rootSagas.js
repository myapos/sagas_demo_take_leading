// imports
import { takeEvery, takeLeading } from "redux-saga/effects";
import { startBunchOfCalls, aSingleAction } from "../counterSlice";
import watchstartOfBunchOfCalls from "./watchstartOfBunchOfCalls";
import watchASingleAction from "./watchASingleAction";

// sagas
function* rootSagas() {
  yield takeEvery(startBunchOfCalls().type, watchstartOfBunchOfCalls);
  yield takeLeading(aSingleAction().type, watchASingleAction);
}

// export
export default rootSagas;
