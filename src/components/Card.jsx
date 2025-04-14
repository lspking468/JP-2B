import React from "react";
import JpIcon from "../imgs/jp-icon.webp";
import FacebookIcon from "../imgs/facebook-icon.webp";
import InstagramIcon from "../imgs/instagram-icon.webp";
import XIcon from "../imgs/x-icon.webp";
import "./Card.css";

function Card() {
  return (
    <>
      <section id="card">
        <div id="profile">
          <img src={JpIcon} alt="Jotapê Mc de batalha" id="jp" />
          <h2 className="txt">Jotapê MC</h2>
          <h3 className="txt">Mc de Batalha</h3>
        </div>
        <div id="social-medias">
          <img src={FacebookIcon} alt="Facebook" />
          <img src={InstagramIcon} alt="Instagram" />
          <img src={XIcon} alt="twitter-x" />
        </div>
        <p className="txt">Desenvolvido por João Victor</p>
      </section>
    </>
  );
}

export default Card;
