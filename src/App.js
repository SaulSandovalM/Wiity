import React, { Component } from 'react';
import './App.css';
import {Contact} from './components/contact/Contact';
import firebase from './Firebase';
import img1 from './assets/icon1.png';
import img2 from './assets/icon2.png';
import img3 from './assets/icon3.png';
import lamp1 from './assets/lamp1.png';
import lamp2 from './assets/lamp2.png';
import lamp3 from './assets/lamp3.png';
import lamp4 from './assets/lamp4.png';
import lamp5 from './assets/lamp5.png';
import lamp6 from './assets/lamp6.png';
import lamp8 from './assets/lamp7.png';
import lamp7 from './assets/lamp8.png';
import img4 from './assets/img4.png';

class App extends Component {
  constructor(){
    super();
    this.state = {
      errors: {},
      newMessage:{},
      messages: []
    };
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  componentDidMount () {
    window.scroll(0, 0)
  }
  onChangeMessage(e){
    let newMessage = this.state.newMessage;
    const field = e.target.name;
    const value = e.target.value;
    newMessage[field] = value;
    this.setState({newMessage});
  };
  validateForm () {
    let newMessage = this.state.newMessage;
    console.log(newMessage)
    let isOk = true;
    return isOk;
  };
  onSave(e) {
    e.preventDefault()
    if (this.validateForm()) {
      firebase.database().ref("mensajes")
        .push(this.state.newMessage)
        .then(r => {
          console.log(r.key)
          if(this.state.file){
            let updates = {};
            firebase.storage()
              .ref(r.key)
              .child(this.state.file.name)
              .put(this.state.file)
              .then(s=>{
                const link = s.downloadURL;
                let newMessage = this.state.newMessage;
                newMessage["photos"] =[link];
                updates[`/aplys/${r.key}`] = newMessage;
                firebase.database().ref().update((updates));
              });
          }
          alert("Mensaje enviado")
        })
      .catch(e=>{
        console.log("asi no:", e.message);
      });
    } else {
      alert("aun no");
    };
  };
  render() {
    const {errors, messages} = this.state;
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

        <div style={{backgroundColor: '#ffb218', height: '50px'}}>
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
                <img src={lamp3} alt=""/>
                <img src={lamp4} alt="" class="img-top"/>
              </div>
              <div class="prueba2">
                <div class="c-cont1t">
                  <div class="sept" style={{marginTop: '-8px'}}>
                    <p class="sep-t2" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>Coaching vocacional</p>
                  </div>
                  <div class="sept" style={{marginTop: '-18px'}}>
                    <p class="sep-t2" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>Organizando mis finazas personales y organizacionales</p>
                  </div>
                  <div class="sept" style={{marginTop: '-18px'}}>
                    <p class="sep-t2" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>¿No te entienden? o ¿No te das a entender?</p>
                  </div>
                  <div class="sept" style={{marginTop: '-18px'}}>
                    <p class="sep-t2" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>Aprende a leer a las personas y lograr relacones exitosas.</p>
                  </div>
                  <div class="sept" style={{marginTop: '-18px'}}>
                    <p class="sep-t2" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>Gestión inteligente de las emociones en la empresa</p>
                  </div>
                  <div class="sept" style={{marginTop: '-18px'}}>
                    <p class="sep-t2" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>Estrategias de endomarketing en las organizaciones</p>
                  </div>
                  <div class="sept" style={{marginTop: '-18px'}}>
                    <p class="sep-t2" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>Lo que estas creyendo... ¿Te destruye o te transforma?</p>
                  </div>
                  <div class="sept" style={{marginTop: '-18px'}}>
                    <p class="sep-t2" style={{background: '#234', marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>¿Por qué tu si y yo no?</p>
                  </div>
                </div>
                <div class="c-cont2t">
                  <div class="sept" style={{marginTop: '-5px'}}>
                    <p class="sep-t3" style={{background: '#ff8500', marginLeft: '10px', fontWeight: '800', marginRight: '10px', color: '#1c2b3f'}}>¿Quién soy?, ¿En dónde estoy? y exactamente... ¿A dónde voy?</p>
                  </div>
                  <div class="sept" style={{marginTop: '-18px'}}>
                    <p class="sep-t3" style={{lineHeight: '18px', background: '#ff8500', marginLeft: '10px', fontWeight: '800', marginRight: '10px', color: '#1c2b3f'}}>¿Cómo puedo administrar mis fianzas personales u organizacionales eficientemente ?</p>
                  </div>
                  <div class="sept" style={{marginTop: '-10px'}}>
                    <p class="sep-t3" style={{background: '#ff8500', marginLeft: '10px', fontWeight: '800', marginRight: '10px', color: '#1c2b3f'}}>Errores en el priceso de comunicación efectiva</p>
                  </div>
                  <div class="sept" style={{marginTop: '-13px'}}>
                    <p class="sep-t3" style={{background: '#ff8500', marginLeft: '10px', fontWeight: '800', marginRight: '10px', color: '#1c2b3f'}}>Aprende a leer a las personas para lograr relaciones exitosas</p>
                  </div>
                  <div class="sept" style={{marginTop: '-14px'}}>
                    <p class="sep-t3" style={{background: '#ff8500', marginLeft: '10px', fontWeight: '800', marginRight: '10px', color: '#1c2b3f'}}>¿Cómo gestionar inteligentemente las relaciones en mi empresa?</p>
                  </div>
                  <div class="sept" style={{marginTop: '-18px'}}>
                    <p class="sep-t3" style={{lineHeight: '18px', background: '#ff8500', marginLeft: '10px', fontWeight: '800', marginRight: '10px', color: '#1c2b3f'}}>¿Como mantrener a mis colaboradores enterados sobre lo que sucede en la organización y fortalecer la entidad organizacional?</p>
                  </div>
                  <div class="sept" style={{marginTop: '-10px'}}>
                    <p class="sep-t3" style={{background: '#ff8500', marginLeft: '10px', fontWeight: '800', marginRight: '10px', color: '#1c2b3f'}}>La influencia de las creencias limitantes en la vida</p>
                  </div>
                  <div class="sept" style={{marginTop: '-15px'}}>
                    <p class="sep-t3" style={{background: '#ff8500', marginLeft: '10px', fontWeight: '800', marginRight: '10px', color: '#1c2b3f'}}>las diferecias de género para el cumplimiento de metas</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="lamp">
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={lamp5} alt=""/>
                <img src={lamp6} alt="" class="img-top"/>
              </div>

              <div class="prueba3">
                <div style={{textAlign: 'left', width: '95%', margin: '5px'}}>
                  <div style={{width: '100%'}}>
                    <p class="sep-t2c" style={{marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>"Coaching vocacional"</p>
                    <p class="sep-t2c2" style={{marginLeft: '20px', fontWeight: '600', marginRight: '20px', color: '#FFF'}}>¿Quién soy?, ¿En dónde estoy? y exactamente... ¿A dónde voy?</p>
                  </div>
                  <div style={{width: '100%', marginTop: '60px', borderTop: '3px solid #ff8500'}}>
                    <p class="sep-t2c" style={{marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>"Aprende a leer a las personas y lograr relacones exitosas. Lenguaje corporal"</p>
                    <p class="sep-t2c2" style={{marginLeft: '20px', fontWeight: '600', marginRight: '20px', color: '#FFF'}}>¿Aprende a leer a las personas y lograr relacones exitosas?</p>
                  </div>
                  <div style={{width: '100%', marginTop: '60px', borderTop: '3px solid #ff8500'}}>
                    <p class="sep-t2c" style={{marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>"El miedo es malo o bueno"</p>
                    <p class="sep-t2c2" style={{marginLeft: '20px', fontWeight: '600', marginRight: '20px', color: '#FFF'}}>El papel del miedo en la vida</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="lamp">
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={lamp7} alt=""/>
                <img src={lamp8} alt="" class="img-top"/>
              </div>

              <div class="prueba4">
                <div style={{textAlign: 'left', width: '90%', margin: '10px'}}>
                  <div style={{width: '100%'}}>
                    <p class="sep-t2c" style={{marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>> Planeación finaciera personalizada</p>
                    <p class="sep-t2c3" style={{marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#FFF'}}>> Acompañamieto personalizado dirigido a PyMES mediante herramientas de Coaching Sitémico o Empresarial</p>
                    <p class="sep-t2c" style={{marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#ff8500'}}>> Asesorías en materia de "Diseño de programas de capacitación o profesionalización del capital humano" </p>
                    <p class="sep-t2c3" style={{marginLeft: '20px', fontWeight: '800', marginRight: '20px', color: '#FFF'}}>> Asesorías en materia de "Impartición de cursos de capacitación o profesionalización del capital humano"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor: '#162941', height: '450px'}}>
        </div>

        <img src={img4} alt="" class="imgt"/>

        <div>
          <Contact
            messages={messages}
            message={this.state.newMessage}
            onChangeMessage={this.onChangeMessage}
            errors={errors}
            onSave={this.onSave}/>
        </div>

        <div style={{backgroundColor: '#ffb218', height: '50px'}}>
        </div>

      </div>
    );
  }
}

export default App;
