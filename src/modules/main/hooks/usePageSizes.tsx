import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import { useMemo } from "react";

import { useSmallScreen } from "./useSmallScreen";
import { COLOR_APP_PRIMARY } from "../../shared/theme/theme";

export const APP_WIDTH = 460;
export const APP_HEIGHT = 800;

export function usePageSizes() {
  const isSmallScreen = useSmallScreen();

  return {
    containerSx: useMemo(() => {
      const containerSx: SxProps<Theme> = isSmallScreen
        ? {}
        : {
            width: "100%",
            maxWidth: APP_WIDTH,
            height: "100%",
            maxHeight: APP_HEIGHT,
            margin: "auto",
          };
      return { color: COLOR_APP_PRIMARY, ...containerSx };
    }, [isSmallScreen]),
    contentSx: useMemo(() => {
      const contentSx: SxProps<Theme> = isSmallScreen
        ? {
            maxWidth: APP_WIDTH,
          }
        : {};
      return {
        height: "100%",
        width: "100%",
        margin: "auto",
        ...contentSx,
      };
    }, [isSmallScreen]),
  };
}
