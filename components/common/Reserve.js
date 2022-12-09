import React from "react";
import ReserveForm from "./ReserveForm";

import ReserveFooter from "./ReserveFooter";

export default function ReserveFormCondensed({
  roomData,
  checkInDay,
  setCheckInDay,
  checkOutDay,
  setCheckOutDay,
  daysToReserve,
  setDaysToReserve,
  guestCounter,
  setGuestCounter,
}) {
  return (
    <div className="w-full fixed left-0 bottom-0 right-0 md:sticky md:top-8 z-50">
      <div className="md:hidden z-50">
        <ReserveFooter
          roomData={roomData}
          checkInDay={checkInDay}
          checkOutDay={checkOutDay}
        />
      </div>
      <div className="hidden md:block md:sticky md:top-16">
        <ReserveForm
          roomData={roomData}
          checkInDay={checkInDay}
          setCheckInDay={setCheckInDay}
          checkOutDay={checkOutDay}
          setCheckOutDay={setCheckOutDay}
          minNightsRequired={roomData.minimum_nights}
          daysToReserve={daysToReserve}
          setDaysToReserve={setDaysToReserve}
        />
      </div>
    </div>
  );
}
