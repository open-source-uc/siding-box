import { shell } from "electron";
import { routerReducer, push, replace } from "react-router-redux";
// push, replace, go, goBack, goForward

export const navigatePush = push;
export const navigateReplace = replace;
export const openExternal = shell.openExternal;

export default routerReducer;
