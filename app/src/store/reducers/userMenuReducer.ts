import { TOGGLE_USER_MENU } from "../actionTypes/userMenu";

type userMenuActionTypes = { type: typeof TOGGLE_USER_MENU };

interface userMenuState {
  isUserMenuOpen: boolean;
}

export interface IUserMenuReducer {
  state: userMenuState;
  action: userMenuActionTypes;
}

const initialState = {
  isUserMenuOpen: false,
};

export const userMenuReducer = (
  state: userMenuState = initialState,
  action: userMenuActionTypes
) => {
  switch (action.type) {
    case TOGGLE_USER_MENU:
      return { ...state, isUserMenuOpen: !state.isUserMenuOpen };
    default:
      return state;
  }
};
