import React from "react";
import "./globals.css";

import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <main>
      <div className="title">
        Royal labs portal <br></br> Login to access Dashboard
      </div>
      <div className="button-box">
        <Button
          variant="light"
          style={{ width: "140px", display: "flex", justifyContent: "center" }}
        >
          Connect Wallet
        </Button>{" "}
      </div>
      <div className="button"></div>
    </main>
  );
}
