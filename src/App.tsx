import { useState } from 'react'
import styles from "./App.module.css"

import modelHero from "./assets/clients/client1.png";
import client2 from "./assets/clients/client2.png";
import client3 from "./assets/clients/client3.png";
import client4 from "./assets/clients/client4.png";
import client5 from "./assets/clients/client5.png";
import client6 from "./assets/clients/client6.png";
import client7 from "./assets/clients/client7.png";
import client8 from "./assets/clients/client8.png";
import client9 from "./assets/clients/client9.png";


import formandos from "./assets/clients/formandos.png";

import defaultLogo from "./assets/logo/default-logo.png";
import fisicoLogo from "./assets/logo/logo-fisica.png";

import course1 from "./assets/courses/course1.png";
import course2 from "./assets/courses/course2.png";
import course3 from "./assets/courses/course3.png";

import iconLantern from "./assets/icons/lantern.png";
import iconCertificate from "./assets/icons/certificate.png";
import iconPencil from "./assets/icons/pencil.png";
import iconWhatsapp from "./assets/icons/whatsapp.png";

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={defaultLogo} alt="Instituto Margaret Costa" className={styles.logo} />
        <nav className={styles.nav}>
          <a href="#home">HOME</a>
          <a href="#cursos">CURSOS</a>
          <a href="#contato">CONTATO</a>
          <a href="#feedbacks">FEEDBACKS</a>
        </nav>
      </header>

      <div className={styles.announcement}>
        <div className={styles.announcementContent}>
          <p>VAGAS LIMITADAS</p>
          <p>SE INSCREVA</p>
          <p>VAGAS LIMITADAS</p>
          <p>SE INSCREVA</p>
          <p>VAGAS LIMITADAS</p>
          <p>SE INSCREVA</p>
        </div>
      </div>


      <section className={styles.hero} id='home'>
        <div className={styles.heroContent}>
          <h2>Cursos de Beleza em Serra Talhada</h2>
          <h1>SEU TALENTO <br />MERECE <mark>DESTAQUE</mark></h1>
          <a href="#cursos">Ver Cursos</a>
        </div>
        <img src={modelHero} alt="Modelo do Instituto Margaret Costa" />
      </section>

      <section id='cursos' className={styles.courses}>
        <a href='#cursos'>
          <div className={styles.courseImage} style={{ backgroundImage: `url(${course1})` }}></div>
          <div className={styles.courseContent}>
            <h3 className={styles.courseTitle}>Curso</h3>
            <h3 className={styles.courseName}>Número Um</h3>
            <p>Descrição do curso número 1: um curso desenvolvido para proporcionar aprendizado prático e estratégico.</p>
            <p className={styles.seInscrever}>SE INSCREVER</p>
          </div>
        </a>
        <a href='#cursos'>
          <div className={styles.courseContent}>
            <h3 className={styles.courseTitle}>Curso</h3>
            <h3 className={styles.courseName}>Número Dois</h3>
            <p>Descrição do curso número 2: um curso desenvolvido para proporcionar aprendizado prático e estratégico.</p>
            <p className={styles.seInscrever}>SE INSCREVER</p>
          </div>
          <div className={styles.courseImage} style={{ backgroundImage: `url(${course2})` }}></div>
        </a>
        <a href='#cursos'>
          <div className={styles.courseImage} style={{ backgroundImage: `url(${course3})` }}></div>
          <div className={styles.courseContent}>
            <h3 className={styles.courseTitle}>Curso</h3>
            <h3 className={styles.courseName}>Número Três</h3>
            <p>Descrição do curso número 3: um curso desenvolvido para proporcionar aprendizado prático e estratégico.</p>
            <p className={styles.seInscrever}>SE INSCREVER</p>
          </div>
        </a>
      </section>

      <div className={styles.diferenciais} style={{ backgroundImage: `url(${formandos})` }}>
        <article>
          <img src={iconLantern} alt="Icone Lampada" className={styles.diferencialIcon} />
          <h5 className={styles.diferencialText}>Teoria</h5>
        </article>
        <article>
          <img src={iconCertificate} alt="Icone Certificado" className={styles.diferencialIcon} />
          <h5 className={styles.diferencialText}>Emitimos Certificado</h5>
        </article>
        <article>
          <img src={iconPencil} alt="Icone Lápis" className={styles.diferencialIcon} />
          <h5 className={styles.diferencialText}>Prática</h5>
        </article>
      </div>

      <section id='contato' className={styles.contato}>
        <div className={`${styles.contatoArticle} && ${styles.imageContato}`} style={{ backgroundImage: `url(${fisicoLogo})` }}></div>
        <a className={`${styles.contatoArticle} && ${styles.contatoWhatsapp}`} href="https://wa.me/558799997395" target="_blank">
          <img src={iconWhatsapp} className={styles.whatsappIcon} alt="Icone Whatsapp" />
          <p>+55 87 9999-7395</p>
        </a>
        <a className={`${styles.contatoArticle} && ${styles.contatoInstagram}`} href="https://www.instagram.com/institutomargaret/" target="_blank">
          <h4>Nos siga no Instagram!</h4>
          <p>@institutomargaret</p>
        </a>
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.1253575295245!2d-38.283648624614!3d-7.9859882796369766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a717a428f7917b%3A0x3907090d4d7d6e9a!2sInstituto%20Margaret%20Costa!5e0!3m2!1spt-BR!2sbr!4v1779819117171!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <section id='feedbacks' className={styles.feedbacks}>
        <h1>FEEDBACKS</h1>
        <div className={styles.feedbacksContent}>
          <article className={styles.feedbackArticle}>
            <img src={client2} className={styles.feedbackImage} alt="Foto de Cliente" />
            <div className={styles.feedbackText}>
              <h3>EXEMPLO DE CLIENTE</h3>
              <p>Feedback do Cliente</p>
            </div>
          </article>
          <article className={styles.feedbackArticle}>
            <img src={client3} className={styles.feedbackImage} alt="Foto de Cliente" />
            <div className={styles.feedbackText}>
              <h3>EXEMPLO DE CLIENTE</h3>
              <p>Feedback do Cliente</p>
            </div>
          </article>
        </div>
      </section>

      <div className={styles.clients}>
        <img src={client4} alt="Foto de Cliente" className={styles.clientImage} />
        <img src={client5} alt="Foto de Cliente" className={styles.clientImage} />
        <img src={client6} alt="Foto de Cliente" className={styles.clientImage} />
        <img src={client7} alt="Foto de Cliente" className={styles.clientImage} />
        <img src={client8} alt="Foto de Cliente" className={styles.clientImage} />
        <img src={client9} alt="Foto de Cliente" className={styles.clientImage} />
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <nav className={styles.footerNav}>
            <a href='#home'>HOME</a>
            <a href='#cursos'>CURSOS</a>
          </nav>
          <img src={defaultLogo} alt="Instituto Margaret Costa" className={styles.footerLogo} />
          <nav className={styles.footerNav}>
            <a href='#contato'>CONTATO</a>
            <a href='#feedbacks'>FEEDBACKS</a>
          </nav>
        </div>
        <p>© 2026 Instituto Margaret Costa. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App
