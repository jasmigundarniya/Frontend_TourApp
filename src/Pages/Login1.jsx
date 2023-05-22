import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { SuccessToast } from "../../src/helper/Toast";
import { loadGapiInsideDOM } from "gapi-script";

const clientId =
  "523444786728-o7ubtguet7hp7363d0bn50407mrj5gcp.apps.googleusercontent.com";

function Login1() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await loadGapiInsideDOM();
    })();
  });

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    let UserInfo = res.profileObj;
    localStorage.setItem("UserInfo", JSON.stringify(UserInfo));
    setShowloginButton(false);
    setShowlogoutButton(true);
    SuccessToast("Logged in Successfully!");
    navigate("/home");
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign In With Google"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
}
export default Login1;
