import React from "react";
import { BsFillLightningChargeFill, BsClipboard2CheckFill , BsEmojiFrownFill   } from 'react-icons/bs';
import './InfoTodo.css'
import infoPhoto from '../../assets/img/infoPhoto3.png'


function InfoTodo () {
    return(
        <div className="infoContainer">
            <section className="infoContainer-left">
                <h4>Ser productivo nunca había sido tan sencillo.</h4>
                <h2>¡Haz tu tarea Diarias en minutos, sin complicaciones!</h2>
                <p>Una App simple, rápida, intuitiva: tareas hechas sin esfuerzo</p>
                <div className="infoContainer-left__cardsContinaer">
                    <div className="card">
                        <p>Más Productividad</p>
                        <span className="icon-green">        
                            <BsFillLightningChargeFill />
                        </span>
                    </div>
                    <div className="card">
                        <p>Reduce el Estrés</p>
                        <span className="icon-red">
                            <BsEmojiFrownFill />
                        </span> 
                    </div>
                    <div className="card">
                        <p>Mayor Organización</p>
                        <span className="icon-green">
                            <BsClipboard2CheckFill  />
                        </span>
                    </div>
                </div>
                
            </section>
            <section className="infoContainer-img">
                <img src={infoPhoto} alt="fotografia de persona cumpkiendo todos" />
                <div className="infoContainer-img__halfCircle">
                    <div class="arrow-line"></div>
                    <div class="arrow-head"></div>
                </div>
            </section>
        </div>
        
    )
}

export { InfoTodo };