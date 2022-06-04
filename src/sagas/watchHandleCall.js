import { call, put, select } from "redux-saga/effects";
import {
  getQueries,
  handleCall,
  saveData,
  handleFetching,
} from "../callsSlice";

export default function* watchHandleCall(par1, par2, action) {
  try {
    const queries = yield select(getQueries);
    console.log("par1", par1, " par2", par2, " action", action);

    const queryInfo = queries[action.payload.value];

    if (!queryInfo.called) {
      yield put(handleFetching({ fetching: true }));

      const res = yield call(
        fetch,
        `https://swapi.dev/api/people/${action.payload.value}`
      );
      const data = yield res.json();
      yield put(saveData(data));
      yield put(handleCall({ ...action.payload, called: true }));
    }

    yield put(handleFetching({ fetching: false }));
  } catch (error) {}
}
