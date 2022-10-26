import React from "react";
import { Link } from "react-router-dom";

const LeftNav = (props) => {
  // console.log(props);
  const { id, name } = props.data;
  //console.log(id, name);
  return (
    <div>
      <Link>{name}</Link>
    </div>
  );
};

export default LeftNav;
