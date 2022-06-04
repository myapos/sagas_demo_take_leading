import { call, put, select } from "redux-saga/effects";
import { updateCall, getQueries } from "../callsSlice";

export default function* watchHandleCall(par1, par2, action) {
  try {
    const queries = yield select(getQueries);
    console.log("par1", par1, " par2", par2, " action", action);

    const queryInfo = queries[action.payload.value];

    if (!queryInfo.called) {
      const res = yield call(fetch, "https://swapi.dev/api/people/1");
      const data = yield res.json();
      console.log("data", data);
      yield put(updateCall({ ...action.payload, called: true }));
    }
  } catch (error) {}
}
