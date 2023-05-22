import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { SuccessToast } from "../../src/helper/Toast";
const clientId =
  "523444786728-o7ubtguet7hp7363d0bn50407mrj5gcp.apps.googleusercontent.com";

function Logout1() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onSignoutSuccess = () => {
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    SuccessToast("Logged Out Successfully!");
  };

  return (
    <>
      <GoogleLogout
        clientId={clientId}
        buttonText="Sign Out"
        onLogoutSuccess={onSignoutSuccess}
      ></GoogleLogout>
    </>
  );
}
export default Logout1;
