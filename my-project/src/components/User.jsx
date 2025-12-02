import React from "react";

const User = (props) => {
  return (
    <div
      className="text-center
  "
      style={{ color: "red" }}
    >
      {props.name}
    </div>
  );
};

export default User;
