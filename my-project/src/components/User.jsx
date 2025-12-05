import React from "react";

const User = (props) => {
  return (
    <div
      className="text-center"
      style={{
        color: "red",
        backgroundColor: "black",
        textBoxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      {props.name}
    </div>
  );
};

export default User;
