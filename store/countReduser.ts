import { UsState, UsAction, UsActionType } from "../src/types/types";

const defaultState: UsState = {
  count: 0,
};

export const countReducer = (
  state = defaultState,
  action: UsAction
): UsState => {
  switch (action.type) {
    case UsActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export const incrementActive = (payload: number) => ({
  type: UsActionType.INCREMENT,
  payload,
});
