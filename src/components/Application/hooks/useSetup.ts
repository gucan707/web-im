import useApplyForFriend from './useApplyForFriend';

export default function useSetup({ pathname }: { pathname: string }) {
  const { applyForFriend, onConfirmApplyForFriend } = useApplyForFriend(
    pathname !== "/applyForFriend"
  );

  return { applyForFriend, onConfirmApplyForFriend };
}
