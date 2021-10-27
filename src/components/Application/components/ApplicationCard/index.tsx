import './index.scss';

import { LoadingButton } from '@mui/lab';

import photo from '../../../../assets/img/photo.jpeg';
import { BaseInfo } from '../../../../models/user';
import { ApplyState } from '../../../../network/http/userType';
import { onConfirmApplyForFriendParams } from '../../hooks/useApplyForFriend';

type ApplicationCardProps = {
  _id: string;
  user: BaseInfo;
  state: ApplyState;
  onConfirmApplyForFriend: (reply: onConfirmApplyForFriendParams) => void;
};

export default function ApplicationCard(props: ApplicationCardProps) {
  const { _id, user, state, onConfirmApplyForFriend } = props;

  return (
    <div className="application_card">
      <div className="application_card-content">
        <img src={photo} alt="" className="application_card-content-avatar" />
        <span>{user.nickname}</span>
        <span className="application_card-content-username">
          {user.username}
        </span>
        <span>申请添加你为好友</span>
      </div>
      <div className="application_card-opts">
        {state === ApplyState.pending ? (
          <>
            <LoadingButton
              variant="outlined"
              onClick={() => onConfirmApplyForFriend({ _id, confirm: true })}
            >
              同意 :)
            </LoadingButton>
            <LoadingButton
              variant="outlined"
              onClick={() => onConfirmApplyForFriend({ _id, confirm: false })}
            >
              拒绝 :(
            </LoadingButton>
          </>
        ) : (
          <div
            className={`${
              state === ApplyState.resolve
                ? "application_card-opts-result resolve"
                : "application_card-opts-result reject"
            }`}
          >
            {state}
          </div>
        )}
      </div>
    </div>
  );
}
