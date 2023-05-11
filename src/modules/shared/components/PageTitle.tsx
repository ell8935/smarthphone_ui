import { Stack, SxProps, Theme, Typography } from "@mui/material";
import { ReactNode } from "react";
import { boldStyles } from "../theme/theme";

export default function PageTitle({
  children,
  gap = 0,
  subtitle,
  hasTopNav = false,
  sx = [],
}: {
  children: any;
  gap?: number;
  subtitle?: ReactNode;
  hasTopNav?: boolean;
  sx?: SxProps<Theme>;
}) {
  return (
    <Stack mt={hasTopNav ? 2 : 5} mb={4 - gap} gap={1} sx={sx}>
      <Typography variant="h2" sx={{ ...boldStyles }}>
        {children}
      </Typography>
      {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
    </Stack>
  );
}
