import { RootState } from "./../redux/index";
import { createSelector } from "@reduxjs/toolkit";

export const isUserMenuOpenSelector = (state: RootState) =>
  state.userMenu.isUserMenuOpen;
