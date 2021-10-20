import { useAppSelector } from '../../../hooks/useAppSelector';
import useShowDialog from './useShowDialog';

export default function useSetup() {
  const userInfo = useAppSelector((state) => state.userInfoReducer);
  const { dialog, setDialog, hideDialog } = useShowDialog();

  return { userInfo, dialog, setDialog, hideDialog };
}
