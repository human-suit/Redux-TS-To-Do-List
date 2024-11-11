// new tyeps redux
export enum UsActionType {
  INCREMENT = "INCREMENT",
  CHANGE_TASK = "CHANGE_TASK",
  REMOVE_TASK = "REMOVE_TASK",
  ADD_TASK = "ADD_TASK",
}
export interface UsTask {
  id: number;
  name: string;
}
export interface UsState {
  count: number;
}
export interface UsStateTask {
  tasks: any[];
}
interface UsAction_INCREMENT {
  type: string;
  payload: number;
}
interface UsAction_CHANGE_TASK {
  type: string;
  payload: any[];
}
interface UsAction_REMOVE_TASK {
  type: string;
  payload: string;
}
interface UsAction_ADD_TASK {
  type: string;
  payload: number;
}
export type UsAction =
  | UsAction_INCREMENT
  | UsAction_ADD_TASK
  | UsAction_REMOVE_TASK
  | UsAction_CHANGE_TASK;

// popup

export type Ar = {
  beanId: number;
  flavorName: string;
  dopInfo: string;
  isWork: boolean;
  isLike: boolean;
}[];
export type TextModal = {
  item: {
    name: string;
    info: string;
  };
};
export type Array = {
  items: {
    beanId: number;
    flavorName: string;
    dopInfo: string;
    isWork: boolean;
    isLike: boolean;
  }[];
};
