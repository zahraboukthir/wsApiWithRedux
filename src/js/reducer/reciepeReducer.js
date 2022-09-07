import {
    GETONERECIEPFAILED,
    GETONERECIEPSUCCESS,
  GETRECIEPFAILED,
  GETRECIEPSUCCESS,
  USERLOAD,
} from "../consts/reciepeConsts";

const initstate = {
  listrecieps: [],
  loading: true,
  error: null,
  oneRescip:{}
};
const receipReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case USERLOAD:
      return { ...state, loading: true };
    case GETRECIEPSUCCESS:
      return {
        ...state,
        listrecieps: payload,
        loading: false,
      };
    case GETRECIEPFAILED:
        case GETONERECIEPFAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
      case GETONERECIEPSUCCESS:
        return {
          ...state,
          oneRescip: payload,
          loading: false,
        };

    default:
      return state;
  }
};

export default receipReducer;
