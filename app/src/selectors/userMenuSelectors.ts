import { RootState } from "../store/index";

export const isUserMenuOpenSelector = (state: RootState) =>
  state.userMenu.isUserMenuOpen;
