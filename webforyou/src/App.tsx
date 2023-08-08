import "./App.css";
import image from "./photo.png";
import zuheb from "./zuheb.jpeg";
import sajan from "./sajan.jpeg";
import furkan from "./furkan.jpeg";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [openCloseMenu, setOpenCloseMenu] = useState(false);
  const [val, setVal] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleDrawerToggle = () => {
    if (openCloseMenu) {
      setOpenCloseMenu(false);
    } else {
      setOpenCloseMenu(true);
    }
  };

  const handlePhoneNumber = (e: any) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setVal(e.target.value);
    }
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    // Get the form data
    const formData = new FormData(e.target);

    // Change the heading or subject of the email
    formData.set("heading", "Melding fra"); // Replace "heading" with the appropriate field name in your template

    emailjs
      .sendForm(
        "service_05233fi",
        "template_nvmw1kp",
        e.target,
        "AR6588XIA61jbgNY6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="w3-top">
          <div className="w3-bar w3-white w3-card" id="myNavbar">
            {/*Right-sided navbar links */}
            <div className="w3-right w3-hide-small">
              <a href="#about" className="w3-bar-item w3-button">
                Om oss
              </a>
              <a href="#team" className="w3-bar-item w3-button">
                <i className="fa fa-user"></i> Teamet
              </a>
              <a href="#work" className="w3-bar-item w3-button">
                <i className="fa fa-th"></i> Våre ferdigheter
              </a>
              <a href="#contact" className="w3-bar-item w3-button">
                <i className="fa fa-envelope"></i> Kontakt
              </a>
            </div>

            {/*Hide right-floated links on small screens and replace them with a menu icon */}
            <a
              className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
              onClick={handleDrawerToggle}
            >
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>

        {/* Sidebar on small screens when clicking the menu icon */}
        {openCloseMenu && (
          <nav
            className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
            onClick={handleDrawerToggle}
          >
            <a
              onClick={handleDrawerToggle}
              className="w3-bar-item w3-button w3-large w3-padding-16"
            >
              ×
            </a>
            <a
              href="#about"
              onClick={handleDrawerToggle}
              className="w3-bar-item w3-button"
            >
              Om oss
            </a>
            <a
              href="#team"
              onClick={handleDrawerToggle}
              className="w3-bar-item w3-button"
            >
              Teamet
            </a>
            <a
              href="#work"
              onClick={handleDrawerToggle}
              className="w3-bar-item w3-button"
            >
              Våre ferdigheter
            </a>
            <a
              href="#contact"
              onClick={handleDrawerToggle}
              className="w3-bar-item w3-button"
            >
              Kontakt
            </a>
          </nav>
        )}

        {/*About Section  */}
        <div className="w3-container aboutWrap" id="about">
          <div className="title">
            <h1 className="w3-center ">WebForYou</h1>
          </div>
          <h2 className="w3-center OmOssTittel">Om oss</h2>
          <p className="w3-center w3-large nokkel">Nøkkelegenskapene</p>
          <div
            className="w3-row-padding w3-center"
            style={{ marginTop: "64px" }}
          >
            <div className="w3-quarter">
              <i className="fa fa-heart w3-margin-bottom w3-jumbo"></i>
              <p className="w3-large">Lidenskap</p>
              <p>
                Drivkraften som inspirerer og motiverer oss til å forfølge våre
                lidenskaper og oppnå store mål
              </p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
              <p className="w3-large">Responsiv</p>
              <p>
                Responsiv nettside tilpasser seg sømløst til ulike
                skjermstørrelser, noe som gir en optimal brukeropplevelse
                uavhengig av enhet.
              </p>
            </div>

            <div className="w3-quarter">
              <i className="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
              <p className="w3-large">Design</p>
              <p>
                Design for oss handler om å skape estetisk tiltalende og
                funksjonelle løsninger som beriker brukeropplevelsen.
              </p>
            </div>
            <div className="w3-quarter">
              <i className="fa fa-cog w3-margin-bottom w3-jumbo"></i>
              <p className="w3-large">Support</p>
              <p>
                Vår support er nøkkelen til å ivareta kundenes behov, løse
                problemer og bygge langsiktige relasjoner basert på tillit.
              </p>
            </div>
          </div>
        </div>

        {/*Team Section*/}
        <div className="w3-container teamWrap" id="team">
          <h2 className="w3-center">Teamet</h2>
          <p className="w3-center w3-large">De som driver dette selskapet</p>
          <div className="w3-row-padding w3-grayscale teamContainer">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={sajan} style={{ width: "100%" }} />
                <div className="w3-container">
                  <h3>Sajan Pakeetharan</h3>
                  <p className="w3-opacity">Fullstack utvikler</p>
                  <p>
                    Sajan er en engasjert og ansvarlig utvikler som utfører
                    oppgavene sine på en svært produktiv måte. Han holder
                    arbeidet sitt ryddig og er alltid pålitelig når det kommer
                    til oppgaver som er tildelt ham. Han har raskt tilegnet seg
                    kunnskap om flere teknologier og har god forståelse av hele
                    teknologistakken.
                  </p>

                  <div className="w3-button w3-light-grey w3-block">
                    <a href="tel:+4747644567">
                      <i className="fa fa-phone"></i>
                      <span style={{ marginLeft: "0.5em" }}>476 44 567</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={zuheb} style={{ width: "100%" }} />
                <div className="w3-container">
                  <h3>Zuheb Nadeem</h3>
                  <p className="w3-opacity">Frontend utvikler og Designer</p>
                  <p>
                    Zuheb er en allsidig og dyktig frontendutvikler med erfaring
                    innen ulike frontendrammeverk fra kunder i både privat og
                    offentlig sektor. Brukervennlighet er noe Zuheb setter svært
                    høyt, og at den opplevde kvalitet for sluttbrukeren er så
                    god som mulig. Løsningene han utvikler skal være
                    oversiktlige, intuitive og lettfattelige.
                  </p>
                  <div className="w3-button w3-light-grey w3-block">
                    <a href="tel:+4746711239">
                      <i className="fa fa-phone"></i>
                      <span style={{ marginLeft: "0.5em" }}>467 11 239</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={furkan} style={{ width: "100%" }} />
                <div className="w3-container">
                  <h3>Furkan Ergin</h3>
                  <p className="w3-opacity">Fullstack utvikler</p>
                  <p>
                    Furkan brenner for tekniske utfordringer, ivaretar høy
                    kvalitet og imøtekommer kundens behov. Han er opptatt av
                    helhetlig forståelse, noe som sørger for at han mestrer og
                    trives med det han gjør. Han har erfaring med håndtering av
                    store datamengder, utforming av løsningsforslag, og
                    optimalisere komplekse systemer.
                  </p>
                  <div className="w3-button w3-light-grey w3-block">
                    <a href="tel:+4797699758">
                      <i className="fa fa-phone"></i>
                      <span style={{ marginLeft: "0.5em" }}>976 99 758</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Skills Section*/}
        <div className="w3-container w3-light-grey w3-padding-64" id="work">
          <div className="w3-row-padding">
            <div className="w3-col m6">
              <h2> Våre ferdigheter</h2>
              <p style={{ fontSize: "1.2rem" }}>
                Vi er spesialisert innen design og utvikling av nettsider, apper
                og webapplikasjoner som er skreddersydd for å møte våre kunders
                unike behov.
              </p>
              <p style={{ fontSize: "1.2rem" }}>
                Vårt team av erfarne webutviklere og designere er dedikert til å
                skape fantastiske brukeropplevelser. Vi tar stolthet i å omsette
                våre kunders visjoner til virkelighet gjennom innovative
                løsninger og nøye planlagt utviklingsprosess. Uansett om det er
                en enkel nettside eller en kompleks webapplikasjon, er vi klare
                til å takle prosjektet med faglig dyktighet og kreativitet.
              </p>
              <p style={{ fontSize: "1.2rem" }}>
                Velg WebForYou som din digitale partner, og la oss ta din
                virksomhet til nye høyder!
              </p>
            </div>
            <div className="w3-col m6">
              <img src={image} alt="Background" className="bgimg-1 " />
            </div>
          </div>
        </div>

        {/*Contact Section*/}
        {emailSent ? (
          <>
            <div
              className="w3-container w3-light-grey contactWrapper"
              id="contact"
            >
              <h2 className="w3-center">Takk</h2>
              <p className="w3-center w3-large">Vi tar kontakt</p>
            </div>
          </>
        ) : (
          <div
            className="w3-container w3-light-grey contactWrapper"
            id="contact"
          >
            <h2 className="w3-center">Kontakt</h2>
            <p className="w3-center w3-large">
              La oss ta kontakt. Send oss ​​en melding:
            </p>
            <div style={{ marginTop: "48px" }}></div>
            <p>
              <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>
              Oslo, Norge
            </p>
            <p>
              <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i>
              <a href="tel:+4746711239">Phone: +47 467 11 239</a>
            </p>
            <p>
              <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right">
                {" "}
              </i>
              <a href="mailto:web.for.you@hotmail.com">
                Email: web.for.you@hotmail.com
              </a>
            </p>
            <br />
            <form onSubmit={sendEmail}>
              <p>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Navn"
                  required
                  name="name_from"
                />
              </p>
              <p>
                <input
                  className="w3-input w3-border"
                  type="tel"
                  placeholder="Telefon nummer"
                  required
                  value={val}
                  name="phoneNumber_from"
                  onChange={handlePhoneNumber}
                />
              </p>
              <p>
                <input
                  className="w3-input w3-border"
                  type="email"
                  placeholder="E-post"
                  required
                  name="email_from"
                />
              </p>
              <p>
                <textarea
                  className="w3-input w3-border"
                  placeholder="Melding"
                  required
                  name="message_from"
                />
              </p>
              <p>
                <button className="w3-button w3-black" type="submit">
                  <i className="fa fa-paper-plane"></i> SEND MELDING
                </button>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
