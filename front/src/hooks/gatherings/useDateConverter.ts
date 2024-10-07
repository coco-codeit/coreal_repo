export const useDateConverter = (dateText: string, type: string) => {
  const date = new Date(dateText);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();

  if (type === "day") {
    return `${month}월 ${day}일`;
  } else if (type === "time") {
    return `${hour}:${minute}`;
  } else if (type === "date") {
    return `${year}.${month}.${day}`;
  }
};
