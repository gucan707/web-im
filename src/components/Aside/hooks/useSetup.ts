import { useAppSelector } from '../../../hooks/useAppSelector';
import useShowDialog from './useShowDialog';
import useShowPopover from './useShowPopover';

export default function useSetup() {
  const userInfo = useAppSelector((state) => state.userInfoReducer);
  const { dialog, setDialog, hideDialog } = useShowDialog();
  const { popover, setPopover } = useShowPopover();

  return { userInfo, dialog, setDialog, hideDialog, popover, setPopover };
}
