import React from "react";
import Loading from "react-fullscreen-loading";

const Spinner = ({ show }) => {
  return <Loading loading={show} loaderColor="red" />;
};

export default Spinner;
