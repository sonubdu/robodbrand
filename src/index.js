import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Client from "shopify-buy";
import "../shared/app.css";
import "../shared/custom.css";
import "bootstrap/dist/css/bootstrap.css";

const client = Client.buildClient({
  storefrontAccessToken: "5b599bfacd46adb8818f5aa98ce09697",
  domain: "robop.myshopify.com"
});

ReactDOM.render(<App client={client} />, document.getElementById("root"));
