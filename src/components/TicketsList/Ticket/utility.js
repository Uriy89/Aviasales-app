export const convertToMinutes = (timeString) => {
  const timeArray = timeString.match(/(\d+)[Hh]? ?(\d+)?[Mm]?/);

  const hours = parseInt(timeArray[1]) || 0;
  const minutes = parseInt(timeArray[2]) || 0;

  return hours * 60 + minutes;
};

export const convertMinutesToHoursAndMinutes = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}Ч ${remainingMinutes}М`;
};

export const dateStart = (date) => {
  const timeRegex = /(\d{2}:\d{2})/;
  const match = date.match(timeRegex);
  return match;
};

export const addTime = (time1, time2) => {
  const time1Minutes = convertToMinutes(time1);
  const time2Minutes = convertToMinutes(time2);
  const totalMinutes = time1Minutes + time2Minutes;

  const hours = Math.floor(totalMinutes / 60) % 24;
  const minutes = totalMinutes / 60;

  const result = padZero(hours) + ':' + padZero(minutes);
  return result;
};

const padZero = (number) => {
  return (number < 10 ? '0' : '') + number;
};
