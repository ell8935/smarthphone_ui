import { Container, Stack, Card } from "@mui/material";
import { Box } from "@mui/system";
import { usePageSizes } from "../hooks/usePageSizes";
import { useSmallScreen } from "../hooks/useSmallScreen";
import { SxProps, Theme } from "@mui/material/styles";
import {
  COLOR_APP_BACKGROUND,
  COLOR_APP_PRIMARY_LIGHT_3_OPAQUE,
} from "../../shared/theme/theme";
import { useEffect, useState } from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

export default function PageContainer({
  children,
  pageTitle,
  pagePath,
  pageReady = true,
  TopNavComponent,
  BotNavComponent,
  hideBack = false,
  hideTopNav = false,
  hideBotNav = false,
  showLogo = false,
  sx = {},
  title,
  backgrounded = false,
  onBack = undefined,
  actionIcon = null,
  disableGutters = false,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  pageTitleParams?: {};
  pagePath?: string;
  pageReady?: boolean;
  TopNavComponent?: React.ReactElement;
  BotNavComponent?: React.ReactNode;
  hideBack?: boolean;
  onBack?: () => void;
  hideTopNav?: boolean;
  hideBotNav?: boolean;
  showLogo?: boolean;
  title?: React.ReactNode;
  backgrounded?: boolean | string;
  sx?: SxProps<Theme>;
  actionIcon?: React.ReactNode;
  disableGutters?: boolean;
}) {
  const isSmallScreen = useSmallScreen();
  const { containerSx, contentSx } = usePageSizes();
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    if (!isSmallScreen) {
      return;
    }
    function listener() {
      const isInputFocused =
        !!document.activeElement &&
        ((document.activeElement instanceof HTMLInputElement &&
          ["email", "number", "password", "search", "tel", "text"].includes(
            document.activeElement.type
          )) ||
          document.activeElement instanceof HTMLTextAreaElement);
      setInputFocused(isInputFocused);
    }

    document.addEventListener("focusin", listener);
    document.addEventListener("focusout", listener);

    return () => {
      document.removeEventListener("focusin", listener);
      document.removeEventListener("focusout", listener);
    };
  }, [isSmallScreen]);

  useEffect(() => {
    if (pageReady && pageTitle) {
      document.title = pageTitle;
    }
  }, [pageTitle, pageReady]);

  const hideHeader = isSmallScreen && inputFocused;

  const mixedSx: SxProps<Theme> = {
    ...containerSx,
    ...(isSmallScreen
      ? { height: "100%" }
      : {
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }),
    ...{
      background: backgrounded
        ? typeof backgrounded === "string"
          ? backgrounded
          : COLOR_APP_BACKGROUND
        : "",
    },
    ...sx,
  };
  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        backgroundColor: isSmallScreen ? "" : COLOR_APP_PRIMARY_LIGHT_3_OPAQUE,
      }}
    >
      <Stack
        justifyContent="space-between"
        sx={mixedSx}
        component={isSmallScreen ? Box : Card}
      >
        {!hideHeader &&
          (TopNavComponent ||
            (hideTopNav ? (
              <div />
            ) : (
              <TopNav
                hideBack={hideBack}
                onBack={onBack}
                showLogo={showLogo}
                title={title}
                actionIcon={actionIcon}
              />
            )))}
        <Container
          disableGutters={disableGutters}
          sx={{
            height: "100%",
            WebkitOverflowScrolling: "touch",
            overflow: "auto",
            pt: disableGutters ? 0 : 1,
          }}
        >
          <Box sx={{ ...contentSx, "& > *:last-child": { pb: 2 } }}>
            {children}
          </Box>
        </Container>
        {BotNavComponent || (hideBotNav ? <div /> : <BottomNav />)}
      </Stack>
    </Box>
  );
}
