export const formatDate = (date: Date): string => {
  const now = new Date();
  if (date.getFullYear() === now.getFullYear()) {
    if (
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate()
    ) {
      return date.toLocaleTimeString();
    } else
      return (
        date.toLocaleDateString().slice(5) + " " + date.toLocaleTimeString()
      );
  }
  return date.toLocaleString();
};
