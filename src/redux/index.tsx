import { AnyAction, combineReducers, Reducer } from "redux";
import { firstReducer } from "./reducer";

type TCombineReducersProps = {
  firstReducer: Reducer<{}, AnyAction>;
};

export default combineReducers<TCombineReducersProps>({
  firstReducer,
});
