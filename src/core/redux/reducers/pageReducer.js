import { FETCH_DATA_SUCCESS } from "../actions/pageAction";

const initialState = {
    content: [],
    pageSizeReturned: 20,
    title: '',
    totalCount: 0,
    currentPageNum: 0
}
const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                content: [...state.content, ...action.payload['content-items'].content],
                pageSizeReturned: action.payload['page-size-returned'],
                title: action.payload.title,
                totalCount: action.payload['total-content-items'],
                currentPageNum: action.payload['page-num-requested']
            }
        }
    }
    return state;
}

export default pageReducer;
