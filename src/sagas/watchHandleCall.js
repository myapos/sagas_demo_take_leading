import { call, put, select } from "redux-saga/effects";
import {
  getQueries,
  handleCall,
  saveData,
  handleFetching,
  resetQuery,
  getPreviousQuery,
  setPreviousQuery,
} from "../callsSlice";

export default function* watchHandleCall(action) {
  try {
    const previousQuery = yield select(getPreviousQuery);

    if (previousQuery.length > 0 && previousQuery !== action.payload.value) {
      //! reset attribute called for this query
      //! this will help to use button again for just one time
      yield put(resetQuery({ ...action.payload, called: false }));
    }

    const queries = yield select(getQueries);

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
      yield put(setPreviousQuery({ previousQuery: action.payload.value }));
    }

    yield put(handleFetching({ fetching: false }));
  } catch (error) {
    yield put(handleFetching({ fetching: false }));
  }
}
