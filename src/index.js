import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Client from "shopify-buy";
import "../shared/app.css";
import "../shared/custom.css";
import "bootstrap/dist/css/bootstrap.css";
import "../shared/hm.css";

const client = Client.buildClient({
  storefrontAccessToken: "d3fe5ae31ced5fc395e03ee4325ead4c",
  domain: "flaunnt.com"
});

ReactDOM.render(<App client={client} />, document.getElementById("root"));
