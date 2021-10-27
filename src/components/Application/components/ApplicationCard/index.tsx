import './index.scss';

import { LoadingButton } from '@mui/lab';

import photo from '../../../../assets/img/photo.jpeg';

export default function ApplicationCard() {
  return (
    <div className="application_card">
      <div className="application_card-content">
        <img src={photo} alt="" className="application_card-content-avatar" />
        <span>昵称</span>
        <span className="application_card-content-username">用户名</span>
        <span>申请添加你为好友</span>
      </div>
      <div className="application_card-opts">
        <LoadingButton
          variant="outlined"
          className="form_login-btn"
          loading={false}
        >
          同意
        </LoadingButton>
        <LoadingButton
          variant="outlined"
          className="form_login-btn"
          loading={false}
        >
          拒绝
        </LoadingButton>
      </div>
    </div>
  );
}
