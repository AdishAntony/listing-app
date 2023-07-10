export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const fetchDataSuccess = (response) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: response
    }
}
