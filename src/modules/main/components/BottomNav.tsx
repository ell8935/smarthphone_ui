import {
  ChatBubbleOutlineOutlined,
  HomeOutlined,
  ManageAccountsOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import { SetStateAction, useCallback, useState } from "react";
import { ROUTES } from "../navigation/Router";

export default function BottomNav() {
  const [navValue, setNavValue] = useState(window.location.pathname);

  const onChange = useCallback(
    (event: any, newValue: SetStateAction<string>) => {
      setNavValue(newValue);
    },
    []
  );

  return (
    <Paper elevation={3} square>
      <BottomNavigation
        value={navValue}
        onChange={onChange}
        sx={{ maxWidth: "100%" }}
      >
        <BottomNavigationAction
          href={ROUTES.PROFILE}
          value={ROUTES.PROFILE}
          label={"footer profile"}
          icon={<ManageAccountsOutlined />}
        />
        <BottomNavigationAction
          href={ROUTES.CHAT}
          value={ROUTES.CHAT}
          label={"footer chat"}
          icon={
            <Badge color="primary">
              <ChatBubbleOutlineOutlined />
            </Badge>
          }
        />
        <BottomNavigationAction
          href={ROUTES.SEARCH}
          value={ROUTES.SEARCH}
          label={"footer search"}
          icon={<SearchOutlined />}
        />
        <BottomNavigationAction
          href={ROUTES.HOME}
          value={ROUTES.HOME}
          label={"footer home"}
          icon={
            <Badge color="primary">
              <HomeOutlined />
            </Badge>
          }
        />
      </BottomNavigation>
    </Paper>
  );
}
