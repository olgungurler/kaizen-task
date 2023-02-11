import * as React from "react";
import "./header.css";
import PersonIcon from '@mui/icons-material/Person';
import WalletIcon from '@mui/icons-material/Wallet';

function Header() {
  return (
    <>
      <header>
        <div className="header-container space-between">
          <div className="logo">
            <a href="">
              <img src="./img/logo.png" alt="" />
            </a>
          </div>
          <div className="header-buttons">
            <a href="" className="btn-wallet"><span><WalletIcon  sx={{ fontSize: 20 }}/></span> Daha Cüzdan</a>
            <a href="" className="btn-login">Giriş Yap</a>
            <a href="" className="btn-user"><PersonIcon /></a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
