import axios from "axios";
import { fetchDataSuccess } from "../redux/actions/pageAction";

const baseURL = "https://test.create.diagnal.com/data/page";

export const getContents = (pageCount) => {
    return (dispatch) => {
        axios.get(baseURL + pageCount + ".json").then((response) => {
            return dispatch(fetchDataSuccess(response.data.page));
        });
    }
}
