import * as React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function SimpleBadge() {
  return (
    <>
      <Badge badgeContent={4} color="error">
        <NotificationsIcon color="action" />
      </Badge>
    </>
  );
}
