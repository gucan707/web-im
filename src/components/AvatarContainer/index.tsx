import { useState } from "react";
import { Badge, Avatar } from "@material-ui/core";

import "./index.scss";

export interface AvatarContainerProps {
  imgSrc: string;
  badgeInvisible: boolean;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  anchorOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "right";
  };
  avartarSx?: {
    width: number;
    height: number;
  };
}

export default function AvatarContainer(props: AvatarContainerProps) {
  const {
    imgSrc,
    badgeInvisible,
    color = "error",
    anchorOrigin = {
      vertical: "bottom",
      horizontal: "right",
    },
    avartarSx = { width: 33, height: 33 },
  } = props;
  return (
    <Badge
      color={color}
      variant="dot"
      anchorOrigin={anchorOrigin}
      invisible={badgeInvisible}
    >
      <Avatar alt="err" src={imgSrc} sx={avartarSx} />
    </Badge>
  );
}
