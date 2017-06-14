import { shell } from "electron";
import { routerReducer, push } from "react-router-redux";

export const navigate = push;
export const openExternal = shell.openExternal;

export default routerReducer;
