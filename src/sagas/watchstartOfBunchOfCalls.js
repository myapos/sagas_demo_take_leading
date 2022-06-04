import { put } from "redux-saga/effects";
import { aSingleAction } from "../counterSlice";
import { NUM_OF_CALLS } from "../constants";

// sagas
export default function* watchstartOfBunchOfCalls() {
  try {
    // call 100 times an action
    for (let i = 1; i <= NUM_OF_CALLS; i++) {
      yield put(aSingleAction({ numOfCall: i }));
    }
  } catch (error) {
    // yield put(loginFail(error));
  }
}
