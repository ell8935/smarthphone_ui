import { ArrowForward } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets/images";

export default function TopNav({
  hideBack = false,
  showLogo = false,
  title = null,
  onBack = undefined,
  actionIcon = null,
}: {
  hideBack?: boolean;
  showLogo?: boolean;
  title?: React.ReactNode;
  onBack?: () => void;
  actionIcon?: React.ReactNode;
}) {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    onBack ? onBack() : navigate(-1);
  }, [onBack, navigate]);
  return (
    <Container sx={{ textAlign: "start" }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        height={40}
      >
        {!hideBack ? (
          <IconButton onClick={goBack} edge="start" color="inherit">
            <ArrowForward />
          </IconButton>
        ) : (
          <Box width={28} />
        )}
        {showLogo ? (
          <img src={Logo} alt="Zigmond" style={{ height: 24 }} />
        ) : title ? (
          <Typography variant="h3">{title}</Typography>
        ) : (
          <div />
        )}
        {actionIcon || <Box width={28} />}
      </Stack>
    </Container>
  );
}
