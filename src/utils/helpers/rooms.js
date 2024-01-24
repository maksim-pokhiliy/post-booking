export const prepareParams = (
  searchParams,
  rooms,
  currentRoomNumber,
  isNextRoom,
) => {
  const { fare, grade, guestsNumber, marketType } = rooms[currentRoomNumber];
  const outputParams = searchParams;

  searchParams.forEach((value, key) => {
    if (key === "room" && isNextRoom) {
      outputParams.set(key, `${currentRoomNumber + 1}`);
    }

    if (key === "room" && !isNextRoom) {
      outputParams.set(key, "1");
    }

    if (key !== "room") {
      outputParams.set(key, value);
    }
  });

  outputParams.set(`fare_${currentRoomNumber}`, fare?.rate_code ?? "");
  outputParams.set(`grade_${currentRoomNumber}`, grade?.code ?? "");
  outputParams.set(`guests_${currentRoomNumber}`, `${guestsNumber}`);
  outputParams.set(`market_${currentRoomNumber}`, marketType ?? "");

  return outputParams.toString();
};
