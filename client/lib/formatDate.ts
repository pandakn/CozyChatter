export const formatDate = (time: Date) => {
  const timeString = time.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });

  return timeString;
};
