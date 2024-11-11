import {
  UsStateTask,
  UsAction,
  UsActionType,
  UsTask,
} from "../src/types/types";

const defaultState: UsStateTask = {
  tasks: [],
};

export const taskReducer = (
  state = defaultState,
  action: UsAction
): UsStateTask => {
  switch (action.type) {
    case UsActionType.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case UsActionType.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id != action.payload),
      };
    case UsActionType.CHANGE_TASK:
      return { ...state, tasks: [...state.tasks] };
    default:
      return state;
  }
};

export const addTaskActive = (payload: UsTask) => ({
  type: UsActionType.ADD_TASK,
  payload,
});
export const removeTaskActive = (payload: number) => ({
  type: UsActionType.REMOVE_TASK,
  payload,
});
export const changeTaskActive = (payload: any[]) => ({
  type: UsActionType.CHANGE_TASK,
  payload,
});
