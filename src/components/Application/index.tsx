import './index.scss';

import ApplicationCard from './components/ApplicationCard';
import useSetup from './hooks/useSetup';

export default function Application({ pathname }: { pathname: string }) {
  const { applyForFriend, onConfirmApplyForFriend } = useSetup({ pathname });

  console.log({ applyForFriend });

  return (
    <div className="application">
      {applyForFriend.map((apply) => (
        <ApplicationCard
          key={apply._id}
          {...apply}
          onConfirmApplyForFriend={onConfirmApplyForFriend}
        />
      ))}
    </div>
  );
}
