import { useEffect, useState } from 'react';

export enum PopoverType {
  none = "",
  avatar = "avatar",
  add = "add",
}

export default function useShowPopover() {
  const [popover, setPopover] = useState<PopoverType>(PopoverType.none);

  return { popover, setPopover };
}
