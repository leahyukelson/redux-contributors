import axios from "axios";
export const FETCH_CONTRIBUTORS = "FETCH_CONTRIBUTORS";
export const SET_FILTER = "SET_FILTER";

export const fetchReduxContributors = page => {
  const res = axios.get(
    `https://api.github.com/repos/reactjs/redux/contributors?page=${page}&per_page=100`
  );

  return {
    type: FETCH_CONTRIBUTORS,
    payload: res
  };
};

export const setFilter = term => {
  return {
    type: SET_FILTER,
    term
  };
};
