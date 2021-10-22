import './index.scss';

import { MouseEventHandler, useState } from 'react';

import { Avatar, Badge } from '@material-ui/core';

export interface AvatarContainerProps {
  imgSrc: string; // 照片路径
  badgeInvisible: boolean; // 是否显示徽章
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  anchorOrigin?: {
    // 徽章位置
    vertical: "top" | "bottom";
    horizontal: "left" | "right";
  };
  avartarSx?: {
    // 头像大小
    width: number;
    height: number;
  };
  onAvatarClick?: MouseEventHandler<HTMLDivElement>;
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
    onAvatarClick,
  } = props;
  return (
    <Badge
      color={color}
      variant="dot"
      anchorOrigin={anchorOrigin}
      invisible={badgeInvisible}
    >
      <Avatar
        alt="err"
        src={imgSrc}
        sx={avartarSx}
        className="avatar"
        onClick={onAvatarClick}
      />
    </Badge>
  );
}
