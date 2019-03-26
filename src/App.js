import React, { Component } from 'react';
import './App.css';
import img1 from './assets/icon1.png';
import img2 from './assets/icon2.png';
import img3 from './assets/icon3.png';
import lamp1 from './assets/lamp1.png';
import lamp2 from './assets/lamp2.png';
import lamp3 from './assets/lamp3.png';
import lamp4 from './assets/lamp3.png';

class App extends Component {
  render() {
    function myFunction() {
      document.getElementById("demo").innerHTML = "Hello World";
    }
    return (
      <div style={{backgroundColor: '#ffb218'}}>
        {/*orange*/}
        <div style={{backgroundColor: '#ffb218', height: '50px'}}>
        </div>
        {/*wiity*/}
        <div className="slide">
          <div class="perro">

          </div>
        </div>
        {/*nosotros*/}
        <div class="about-c">
          <div class="card">
            <h1 class="about-t">Nosotros</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <p class="about-p">Somos una empresa dedicada a desarrollar el potencial humano en las organizaciones, por medio de cursos, telleres, conferencias y asesorias multidiciplinarias.</p>
            </div>
          </div>
        </div>

        <div class="about-c">
          <h1 class="why">¿Por qué ser parte de Wiity?</h1>
        </div>

        <div class="thre">
          <div class="img">
            <img src={img1} alt=""/>
          </div>
          <div class="img">
            <img src={img2} alt=""/>
          </div>
          <div class="img">
            <img src={img3} alt=""/>
          </div>
        </div>

        <div class="thre">
          <div class="pt">
            <p class="pt">Aprende</p>
            <div class="ptt-container">
              <p class="ptt">Ya sea aplicando en alguno de los cursos que tenemos para ti, o aprender a diseñar cursos de capacitación y formación de manera preofesional.</p>
            </div>
          </div>
          <div class="pt">
            <p class="pt">Conoce</p>
            <div class="ptt-container">
              <p class="ptt">Inscribiendote a los cursos, podras conocer y conectarte con otros estudiantes e instructores que ya forman parte de la comunidad.</p>
            </div>
          </div>
          <div class="pt">
            <p class="pt">Destaca</p>
            <div class="ptt-container">
              <p class="ptt">Ademas de tu aprendezaje, obtendras reconocimiento con las constancias de valor curricular para que compartas con tus futuros empleadores.</p>
            </div>
          </div>
        </div>

        <div style={{backgroundColor: '#162941', display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '100%', display: 'flex'}}>






            <div class="lamp">
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={lamp1} alt=""/>
                <img src={lamp2} alt="" class="img-top"/>
              </div>

              <div class="prueba">
                <div class="c-cont1">
                  <div class="sep2">
                    <p class="sep-t" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>DE UNA IDEA AL EMPRENDIMIENTO</p>
                  </div>
                  <div class="sep2" style={{marginTop: '50px'}}>
                    <p class="sep-t" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>Curso CONOCER ECo217</p>
                  </div>
                  <div class="sep2" style={{marginTop: '45px'}}>
                    <p class="sep-t" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>Trabajo COLABORATIVO VS <br></br>Trabajo COOPERATIVO</p>
                  </div>
                  <div class="sep2" style={{marginTop: '48px'}}>
                    <p class="sep-t" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>Sindrome de BURN OUT. El contaminante silencioso <br></br>de las organizaciones</p>
                  </div>
                </div>
                <div class="c-cont2">
                  <div class="sep">
                    <p class="sep-t">DE UNA IDEA AL EMPRENDIMIENTO</p>
                    <p class="sep-tt">¿Tienes alguna idea de negocio y no sabe por donde empezar?</p>
                  </div>
                  <div class="sep">
                    <p class="sep-t">Curso CONOCER ECo301</p>
                    <p class="sep-tt">"Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso"</p>
                  </div>
                  <div class="sep">
                    <p class="sep-t">Curso CONOCER ECo217</p>
                    <p class="sep-tt">"Impartición de cursos de formación de capital humano"</p>
                  </div>
                  <div class="sep">
                    <p class="sep-t">Contabilidad para no financieros</p>
                    <p class="sep-tt">¿Como controlar mis ingresos y gastos? Mis finanzas</p>
                  </div>
                  <div class="sep">
                    <p class="sep-t">Trabajo colaborativo VS Trabajo cooperativo</p>
                    <p class="sep-tt">¿Tienes alguna idea de negocio y no sabe por donde empezar?</p>
                  </div>
                  <div class="sep">
                    <p class="sep-t">Instrumentos de Evalución</p>
                    <p class="sep-tt">¿Tienes alguna idea de negocio y no sabe por donde empezar?</p>
                  </div>
                  <div class="sep">
                    <p class="sep-t">Sindrome de Burn out. El contaminante silencioso de las organizaciones</p>
                    <p class="sep-tt">¿Comó conbatir el sindromede burn out en las organizaciones?</p>
                  </div>
                  <div class="sep">
                    <p class="sep-t">La tecnologia como un medio y no como un fin para el aprendizaje</p>
                    <p class="sep-tt">¿Necesitas nuevas herramientas para innovar en tu labor de enseñanza?</p>
                  </div>
                </div>
                <div class="c-cont3">
                  <div class="sep2" style={{marginTop: '70px'}}>
                    <p class="sep-t" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>Curso CONOCER ECo301</p>
                  </div>
                  <div class="sep2" style={{marginTop: '45px'}}>
                    <p class="sep-t" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>CONTABILIDAD PARA <br></br> NO FINANCIEROS</p>
                  </div>
                  <div class="sep2" style={{marginTop: '65px'}}>
                    <p class="sep-t" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>INSTRUMENTOS DE EVALUACIÓN</p>
                  </div>
                  <div class="sep2" style={{marginTop: '45px'}}>
                    <p class="sep-t" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>La TECNOLOGIA como un medio y no como un fin para el aprendizaje</p>
                  </div>
                </div>
              </div>
            </div>


















            <div class="lamp">
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={lamp1} alt=""/>
                <img src={lamp2} alt="" class="img-top"/>
              </div>
            </div>
            <div class="lamp">
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={lamp1} alt=""/>
                <img src={lamp2} alt="" class="img-top"/>
              </div>
            </div>
            <div class="lamp">
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={lamp1} alt=""/>
                <img src={lamp2} alt="" class="img-top"/>
              </div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor: '#162941', height: '450px'}}>
        </div>

        <div style={{backgroundColor: '#ffb218', height: '50px'}}>
        </div>

        <div style={{backgroundColor: '#ffb218', height: '50px'}}>
        </div>

      </div>
    );
  }
}

export default App;
