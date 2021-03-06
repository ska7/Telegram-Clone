import { useCallback } from "react";
import { toggleUserMenuAction } from "../store/actionCreators/userMenu";
import { isUserMenuOpenSelector } from "../selectors/userMenuSelectors";
import { throttle } from "../utils/throttle";
import { useAppDispatch, useAppSelector } from "./typedReduxHooks";

export const useToggleUserMenu = () => {
  const isUserMenuOpen = useAppSelector(isUserMenuOpenSelector);
  const dispatch = useAppDispatch();

  const toggleUserMenu = useCallback(() => {
    throttle(() => {
      dispatch(toggleUserMenuAction());
    }, 20);
  }, [dispatch]);

  return { isUserMenuOpen, toggleUserMenu };
};
