import React, { useEffect, useRef, RefObject } from "react";
// @ts-ignore
import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import config from "./config";

const OktaSignInWidget = ({ onSuccess, onError }: any) => {
  const widgetRef = useRef() as RefObject<HTMLDivElement>;
  useEffect(() => {
    if (!widgetRef.current) return;

    const widget = new OktaSignIn(config.widget);
    widget
      .showSignInToGetTokens({
        el: widgetRef.current,
      })
      .then(onSuccess)
      .catch(onError);

    return () => widget.remove();
  }, [onSuccess, onError]);

  return <div ref={widgetRef} />;
};

export default OktaSignInWidget;
