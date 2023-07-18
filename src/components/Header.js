import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="balance">
        <p>My balance</p>
        <h2>$921.48</h2>
      </div>

      <img src="./images/logo.svg" alt="logo" className="logo" />
    </header>
  );
};

export default Header;
