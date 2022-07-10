import { useCallback } from "react";
import { toggleUserMenuAction } from "../redux/actionCreators/userMenu";
import { isUserMenuOpenSelector } from "../selectors/userMenuSelectors";
import { useAppDispatch, useAppSelector } from "./typedReduxHooks";

export const useToggleUserMenu = () => {
  const isUserMenuOpen = useAppSelector(isUserMenuOpenSelector);
  const dispatch = useAppDispatch();

  const toggleUserMenu = useCallback(() => {
    dispatch(toggleUserMenuAction());
  }, [dispatch]);

  return { isUserMenuOpen, toggleUserMenu };
};
