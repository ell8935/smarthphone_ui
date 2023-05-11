import createCache from "@emotion/cache";
import { common, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { prefixer } from "stylis";

// Create rtl cache
export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer],
});

export const COLOR_APP_PRIMARY_DARK = "#314F61";
export const COLOR_APP_PRIMARY = "#416A82";
export const COLOR_APP_PRIMARY_MEDIUM = "#79A2B9";
export const COLOR_APP_PRIMARY_LIGHT = "#C0D1DB";
export const COLOR_APP_PRIMARY_LIGHT_2 = "#C9D7E0";
export const COLOR_APP_BACKGROUND = "linear-gradient(180deg, #FFFFFF, #F5F5F5)";
export const COLOR_APP_PRIMARY_LIGHT_3 = "#D7EFF7";
export const COLOR_APP_PRIMARY_LIGHT_3_OPAQUE = "#D7EFF74D";
export const COLOR_DIVIDER = "#C5D4DE85";
export const BUTTON_BOX_SHADOW =
  "0px 1px 2px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.1)";
export const CARD_DRAWER_BOX_SHADOW = "0px -6px 30px rgba(65, 106, 130, 0.1)";

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    huge: true;
  }
  interface ButtonPropsColorOverrides {
    secondary2: true;
    light: true;
  }
}
declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    light: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    secondary2: Palette["primary"];
    light: Palette["primary"];
  }
  interface PaletteOptions {
    secondary2: PaletteOptions["primary"];
    light: PaletteOptions["primary"];
  }
}

export const boldStyles = {
  fontWeight: 600,
  letterSpacing: "-0.019rem",
};

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: ["Noto Sans Hebrew", "sans-serif"].join(","),
    h1: {
      fontSize: "28px",
      lineHeight: "38px",
      letterSpacing: "0.019rem",
    },
    h2: {
      fontSize: "24px",
      lineHeight: "26px",
      letterSpacing: "0.019rem",
    },
    h3: {
      fontSize: "18px",
      lineHeight: "20px",
      letterSpacing: "0.019rem",
    },
    h4: {
      fontSize: "16px",
      lineHeight: "22px",
      letterSpacing: "0.019rem",
    },
    subtitle1: {
      fontSize: "16px",
      lineHeight: "22px",
      letterSpacing: "0.019rem",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "19px",
      letterSpacing: "0.019rem",
    },
    button: {
      fontSize: "18px",
      lineHeight: "20px",
      letterSpacing: "0.019rem",
    },
  },
  palette: {
    text: {
      primary: COLOR_APP_PRIMARY,
      // secondary: COLOR_APP_PRIMARY_MEDIUM,
    },
    primary: {
      main: COLOR_APP_PRIMARY,
      light: COLOR_APP_PRIMARY_LIGHT,
    },
    light: {
      main: COLOR_APP_PRIMARY_LIGHT,
      contrastText: COLOR_APP_PRIMARY_DARK,
    },
    secondary: {
      main: common.white,
      contrastText: COLOR_APP_PRIMARY,
    },
    secondary2: {
      main: COLOR_APP_PRIMARY,
      light: COLOR_APP_PRIMARY_LIGHT,
    },
    divider: COLOR_DIVIDER,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        outlinedPrimary: {
          background: common.white,
        },
        containedSecondary: {
          "&:hover": {
            background: grey["200"],
          },
        },
      },
      variants: [
        {
          props: { size: "huge" },
          style: {
            padding: "12px 20px",
          },
        },
        {
          props: { size: "huge", color: "primary" },
          style: {
            borderRadius: 15,
          },
        },
        {
          props: { size: "huge", color: "primary", className: "label" },
          style: {
            borderRadius: 8,
          },
        },
        {
          props: { size: "small" },
          style: {
            fontSize: "14px",
            lineHeight: "15px",
          },
        },
        {
          props: { size: "medium" },
          style: {
            fontSize: "14px",
            lineHeight: "15px",
          },
        },
        {
          props: { color: "secondary2" },
          style: {
            boxShadow: BUTTON_BOX_SHADOW,
            background: common.white,
          },
        },
        {
          props: { color: "light" },
          style: {
            "&:hover": {
              backgroundColor: COLOR_APP_PRIMARY_MEDIUM,
            },
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: common.white,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          background: common.white,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          maxHeight: "50%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          whiteSpace: "pre-wrap",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "body[dir=rtl] & .MuiButton-endIcon": {
            marginRight: 8,
            marginLeft: -4,
          },
          "body[dir=rtl] & .MuiButton-startIcon": {
            marginRight: -4,
            marginLeft: 8,
          },
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          // flip for RTL
          transform: "scaleX(-1)",
          background: "transparent",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          // allow for 5 items in the bot nav
          minWidth: 320 / 5,
        },
      },
    },
  },
});
