import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/11146673?s=460&u=de7091bf22c7fedd982e7157a6b3bab0cf96a619&v=4" alt="João Mozelli Neto"/>
                <div>
                    <strong>João Mozelli Neto</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                <br/><br/> 
                Atque, iusto incidunt itaque enim asperiores minus assumenda repellendus esse doloribus doloremque aspernatur rem, at ducimus porro, dicta nulla. Harum, quod minus.
            </p>
            <footer>
                <p>Preço/hora <strong>R$80,00</strong></p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;