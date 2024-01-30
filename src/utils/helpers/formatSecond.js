function secondsToDhms(seconds) {
  if (seconds < 0) {
    seconds = 0;
  }

  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return {
    days: days >= 0 ? days : 0,
    hours: hours >= 0 ? hours : 0,
    minutes: minutes >= 0 ? minutes : 0,
    seconds: remainingSeconds >= 0 ? remainingSeconds : 0,
  };
}

export default secondsToDhms;
