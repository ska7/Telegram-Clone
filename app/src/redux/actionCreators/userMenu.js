import { TOGGLE_USER_MENU } from "../actionTypes/userMenu";
import { makeActionCreator } from "./makeActionCreator";

export const toggleUserMenuAction = makeActionCreator(TOGGLE_USER_MENU);
