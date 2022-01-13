import { init } from 'immersed-react';
export type MyState = {
  clickCount: number,
}
const initialState: MyState = {
  clickCount: 0,
}
const { useSelector, update, addListener, removeListener, enableDevTool } = init<MyState>(initialState);

enableDevTool();
export { useSelector, update, addListener, removeListener };