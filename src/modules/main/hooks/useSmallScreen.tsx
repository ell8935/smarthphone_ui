import { useMediaQuery } from "@mui/material";
import { theme } from "../../shared/theme/theme";

export function useSmallScreen() {
  return useMediaQuery(theme.breakpoints.down("md"));
}
