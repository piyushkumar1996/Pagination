import { GET_DATA, GET_PAGER, GET_PAGE_ITEMS } from "../actions/Types";

const initState = {
    dataList: [],
    selectedDataList:[],
    pager:{},
    initialPage: 1,
    pageSize: 5,
    pageOfItems:[]
};
export default function (state = initState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                dataList: action.payload,
            };
            case GET_PAGER:
            return {
                ...state,
                pager: action.payload,
            };
            case GET_PAGE_ITEMS:
            return {
                ...state,
                pageOfItems: action.payload,
            };
        default:
            return state;
    }
}