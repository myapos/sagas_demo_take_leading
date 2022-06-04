import { delay } from "redux-saga/effects";

export default function* watchASingleAction(action) {
  try {
    console.log("is called", action.payload.numOfCall);
    yield delay(1000);
  } catch (error) {}
}
