import React from "react";
import Request from "./Request";
import Location from "./Location";

const ServiceRequestAndLocation = () => {
  return (
    <>
      <div className="flex gap-10">
        <Request />
        <Location />
      </div>
    </>
  );
};

export default ServiceRequestAndLocation;
