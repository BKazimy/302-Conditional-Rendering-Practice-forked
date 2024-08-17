import React from "react";
import Input from "./Input";

export default (props) => {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.login && <Input type="password" placeholder="Confirm Password" />}
      <button type="submit">{props.login ? "Login" : "Register"}</button>
    </form>
  );
};
