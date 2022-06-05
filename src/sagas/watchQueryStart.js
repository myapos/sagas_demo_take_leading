import { call, put, select } from "redux-saga/effects";
import {
  getQueries,
  saveData,
  handleFetching,
  resetQuery,
  getPreviousQuery,
  setPreviousQuery,
  updateQuery,
} from "../callsSlice";

export default function* watchQueryStart(action) {
  try {
    const previousQuery = yield select(getPreviousQuery);

    const shouldResetQury =
      previousQuery.length > 0 &&
      previousQuery !== action.payload.value &&
      action.payload.called;

    if (shouldResetQury) {
      //! reset attribute called for this query
      //! this will help to use button again for just one time
      yield put(resetQuery({ ...action.payload, called: false }));
    }

    const queries = yield select(getQueries);

    const queryInfo = queries[action.payload.value];

    if (!queryInfo.called) {
      yield put(handleFetching({ fetching: true }));

      //! API call --> get some data from star wars api. The param of button is
      //! used here
      const res = yield call(
        fetch,
        `https://swapi.dev/api/people/${action.payload.value}`
      );

      const data = yield res.json();

      yield put(saveData(data));

      yield put(updateQuery({ ...action.payload, called: true }));
      yield put(setPreviousQuery({ previousQuery: action.payload.value }));
    }

    yield put(handleFetching({ fetching: false }));
  } catch (error) {
    yield put(handleFetching({ fetching: false }));
  }
}
