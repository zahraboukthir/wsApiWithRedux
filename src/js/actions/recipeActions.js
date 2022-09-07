import {
    GETONERECIEPFAILED,
    GETONERECIEPSUCCESS,
  GETRECIEPFAILED,
  GETRECIEPSUCCESS,
  USERLOAD,
} from "../consts/reciepeConsts";
import  axios from "axios";

export const getallrecieps = (searchedvalue) => async (dispatch) => {
  try {
    dispatch({
      type: USERLOAD,
    });
    const {
      data
    } = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchedvalue}&app_id=01903511&app_key=586dab1ccb1f25cc9e26ddc82ac993d5%09
    `);
    console.log(data);
    dispatch({ type: GETRECIEPSUCCESS, payload: data.hits });
  } catch (error) {
    dispatch({ type: GETRECIEPFAILED, payload: error });
  }
};

export const getonereciep = (id) => async (dispatch) => {
    try {
      dispatch({
        type: USERLOAD,
      });
      const {
        data
      } = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=01903511&app_key=586dab1ccb1f25cc9e26ddc82ac993d5%09
      `);
      console.log(data);
      dispatch({ type: GETONERECIEPSUCCESS, payload: data.recipe });
    } catch (error) {
      dispatch({ type: GETONERECIEPFAILED, payload: error });
    }
  };