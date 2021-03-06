import Styled from 'styled-components'

export default Styled.div`
.button {
    background-color: #bb1333;
    color: white;
    border-radius: 20px;
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-style: solid;
    border-width: 1px;
    border-color: #bb1333;
  }
  * {
    font-family: 'Lato', sans-serif;
  }
  .container {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 50px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  html {
    scroll-behavior: smooth;
  }
  header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
  }
  .header-bar {
    position: relative;
    max-width: 1200px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header-bar .logo {
    font-family: 'Roboto Slab', serif;
    font-size: 2rem;
    color: #bb1333;
  }
  .header-bar .logo-grey {
    color: #55596d;
  }
  .header-bar nav {
    display: flex;
    justify-content: space-around;
    width: 1200px;
    max-width: 80%;
    margin-left: 40px;
  }
  @media (max-width: 800px) {
    .header-bar nav {
      display: none;
      flex-direction: column;
      position: absolute;
      right: 10px;
      top: 50px;
      max-width: 100%;
    }
  }
  .header-bar nav a:hover {
    color: #bb1333;
  }
  @media (max-width: 800px) {
    .header-bar nav a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60px;
      background-color: white;
    }
  }
  .header-bar .mobile-nav {
    display: none;
    position: absolute;
    right: 10px;
  }
  @media (max-width: 800px) {
    .header-bar .mobile-nav {
      display: inline-block;
      cursor: pointer;
    }
  }
  .header-bar .mobile-nav div {
    width: 35px;
    height: 5px;
    background-color: #55596d;
    margin: 6px 0;
    transition: 0.4s;
  }
  .header-bar .mobile-nav .bar1.change {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }
  .header-bar .mobile-nav .bar2.change {
    opacity: 0;
  }
  .header-bar .mobile-nav .bar3.change {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
  .header-bar .header-buttons {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 800px) {
    .header-bar .header-buttons {
      display: none;
    }
  }
  .header-bar .header-buttons .get-started-btn {
    background-color: #bb1333;
    color: white;
    border-radius: 20px;
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-style: solid;
    border-width: 1px;
    border-color: #bb1333;
    border-radius: 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .header-bar .header-buttons .get-started-btn:hover {
    background-color: #002070;
    color: white;
    border-color: #002070;
  }
  .header-bar .header-buttons .log-in-btn {
    background-color: #bb1333;
    color: white;
    border-radius: 20px;
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-style: solid;
    border-width: 1px;
    border-color: #bb1333;
    background-color: white;
    color: #bb1333;
    border-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .header-bar .header-buttons .log-in-btn:hover {
    background-color: #002070;
    color: white;
    border-color: #002070;
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #55596d;
  }
  footer .footer-bar {
    max-width: 1200px;
    margin: 0 auto;
  }
  footer .references {
    text-align: center;
  }
  .hero {
    background-image: url("/img/landing/opaque-hero-home.png");
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding-top: 150px;
    padding-bottom: 10px;
    min-height: 300px;
  }
  .hero h1 {
    font-size: 3rem;
    text-align: center;
  }
  @media (max-width: 800px) {
    .hero h1 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 500px) {
    .hero h1 {
      font-size: 2rem;
    }
  }
  .hero p {
    font-size: 1.5rem;
    text-align: center;
  }
  @media (max-width: 800px) {
    .hero p {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 500px) {
    .hero p {
      font-size: 1rem;
    }
  }
  .hero a {
    text-decoration: none;
  }
  .hero .get-started-btn {
    background-color: #bb1333;
    color: white;
    border-radius: 20px;
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-width: 1px;
    border-color: #bb1333;
    margin-top: 35px;
    width: 150px;
    font-size: 1rem;
  }
  .hero .get-started-btn:hover {
    background-color: white;
    color: #bb1333;
  }
  .hero .why-link {
    margin-top: 65px;
    font-size: 1rem;
    margin-block-end: 5px;
    font-weight: bold;
  }
  .hero .down-arrow {
    width: 20px;
  }
  .why-teambuilder {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    h2 {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 1.25rem;
    }
  }
  .content-block {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 50px;
  }
  .content-block .content-block-small {
    width: 35%;
  }
  .content-block .content-block-small img {
    width: 100%;
  }
  .content-block .content-block-large {
    width: 65%;
    padding-left: 50px;
  }
  .content-block .content-block-large h3 {
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    .content-block .content-block-large h3 {
      font-size: 1rem;
    }
  }
  @media (max-width: 500px) {
    .content-block .content-block-large h3 {
      font-size: 0.8rem;
    }
  }
  .content-block .content-block-large p {
    font-size: 1.25rem;
  }
  @media (max-width: 800px) {
    .content-block .content-block-large p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 500px) {
    .content-block .content-block-large p {
      font-size: 0.8rem;
    }
  }
  .container.features .hero {
    background-image: url("/img/landing/features-icon.svg");
  }
  .container.features .feature-list {
    padding-top: 20px;
    width: 65%;
    margin: 0 auto;
  }
  .container.features .feature-list .feature-tab {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #002070;
    color: white;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border-style: solid;
    border-width: 2px;
    border-color: #002070;
    margin-bottom: 20px;
  }
  .container.features .feature-list .feature-tab:hover {
    background-color: white;
    color: #002070;
  }
  .container.features .feature-list .feature-tab h2 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .container.features .feature-list .feature-details {
    display: none;
    width: 100%;
  }
  .container.about-us .hero {
    background-image: url("/img/landing/team-icon.svg");
    padding-top: 0px;
    height: 300px;
  }
  .container.about-us .hero h1 {
    color: white;
  }
  .container.resources .hero {
    padding-top: 0;
  }
  .container.resources .resource-categories {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .container.resources .resource-categories .resource-tab {
    display: inline;
    color: white;
    background-color: #bb1333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
  }
  .container.resources .resource-categories .resource-tab:hover {
    text-decoration: underline;
  }
  .container.resources .resource-categories .active-tab {
    background-color: white;
    color: #bb1333;
    border: 2px solid #bb1333;
  }
  .container.resources .resource-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
  }
  .container.resources .resource-list .resource-card {
    display: inline;
    width: 30%;
    height: 250px;
    margin-bottom: 20px;
    border-style: solid;
    border-width: 2px;
    border-color: #002070;
    flex-direction: column;
  }
  .container.resources .resource-list .resource-card h2 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .button {
    background-color: #bb1333;
    color: white;
    border-radius: 20px;
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-style: solid;
    border-width: 1px;
    border-color: #bb1333;
  }
  * {
    font-family: 'Lato', sans-serif;
  }
  .container {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 50px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  html {
    scroll-behavior: smooth;
  }
  header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
  }
  .header-bar {
    position: relative;
    max-width: 1200px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header-bar .logo {
    font-family: 'Roboto Slab', serif;
    font-size: 2rem;
    color: #bb1333;
  }
  .header-bar .logo-grey {
    color: #55596d;
  }
  .header-bar nav {
    display: flex;
    justify-content: space-around;
    width: 1200px;
    max-width: 80%;
    margin-left: 40px;
  }
  @media (max-width: 800px) {
    .header-bar nav {
      display: none;
      flex-direction: column;
      position: absolute;
      right: 10px;
      top: 50px;
      max-width: 100%;
    }
  }
  .header-bar nav a:hover {
    color: #bb1333;
  }
  @media (max-width: 800px) {
    .header-bar nav a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60px;
      background-color: white;
    }
  }
  .header-bar .mobile-nav {
    display: none;
    position: absolute;
    right: 10px;
  }
  @media (max-width: 800px) {
    .header-bar .mobile-nav {
      display: inline-block;
      cursor: pointer;
    }
  }
  .header-bar .mobile-nav div {
    width: 35px;
    height: 5px;
    background-color: #55596d;
    margin: 6px 0;
    transition: 0.4s;
  }
  .header-bar .mobile-nav .bar1.change {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }
  .header-bar .mobile-nav .bar2.change {
    opacity: 0;
  }
  .header-bar .mobile-nav .bar3.change {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
  .header-bar .header-buttons {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 800px) {
    .header-bar .header-buttons {
      display: none;
    }
  }
  .header-bar .header-buttons .get-started-btn {
    background-color: #bb1333;
    color: white;
    border-radius: 20px;
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-style: solid;
    border-width: 1px;
    border-color: #bb1333;
    border-radius: 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .header-bar .header-buttons .get-started-btn:hover {
    background-color: #002070;
    color: white;
    border-color: #002070;
  }
  .header-bar .header-buttons .log-in-btn {
    background-color: #bb1333;
    color: white;
    border-radius: 20px;
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-style: solid;
    border-width: 1px;
    border-color: #bb1333;
    background-color: white;
    color: #bb1333;
    border-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .header-bar .header-buttons .log-in-btn:hover {
    background-color: #002070;
    color: white;
    border-color: #002070;
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #55596d;
  }
  footer .footer-bar {
    max-width: 1200px;
    margin: 0 auto;
  }
  footer .references {
    text-align: center;
  }
  .hero {
    background-image: url("/img/landing/opaque-hero-home.png");
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding-top: 150px;
    padding-bottom: 10px;
    min-height: 300px;
  }
  .hero h1 {
    font-size: 3rem;
    text-align: center;
  }
  @media (max-width: 800px) {
    .hero h1 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 500px) {
    .hero h1 {
      font-size: 2rem;
    }
  }
  .hero p {
    font-size: 1.5rem;
    text-align: center;
  }
  @media (max-width: 800px) {
    .hero p {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 500px) {
    .hero p {
      font-size: 1rem;
    }
  }
  .hero a {
    text-decoration: none;
  }
  .hero .get-started-btn {
    background-color: #bb1333;
    color: white;
    border-radius: 20px;
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-width: 1px;
    border-color: #bb1333;
    margin-top: 35px;
    width: 150px;
    font-size: 1rem;
  }
  .hero .get-started-btn:hover {
    background-color: white;
    color: #bb1333;
  }
  .hero .why-link {
    margin-top: 65px;
    font-size: 1rem;
    margin-block-end: 5px;
    font-weight: bold;
  }
  .hero .down-arrow {
    width: 20px;
  }
  .why-teambuilder {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    h2 {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 1.25rem;
    }
  }
  .content-block {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin-top: 50px;
  }
  .content-block .content-block-small {
    width: 35%;
  }
  .content-block .content-block-small img {
    width: 100%;
  }
  .content-block .content-block-large {
    width: 65%;
    padding-left: 50px;
  }
  .content-block .content-block-large h3 {
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    .content-block .content-block-large h3 {
      font-size: 1rem;
    }
  }
  @media (max-width: 500px) {
    .content-block .content-block-large h3 {
      font-size: 0.8rem;
    }
  }
  .content-block .content-block-large p {
    font-size: 1.25rem;
  }
  @media (max-width: 800px) {
    .content-block .content-block-large p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 500px) {
    .content-block .content-block-large p {
      font-size: 0.8rem;
    }
  }
  .container.features .hero {
    background-image: url("/img/landing/features-icon.svg");
  }
  .container.features .feature-list {
    padding-top: 20px;
    width: 65%;
    margin: 0 auto;
  }
  .container.features .feature-list .feature-tab {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #002070;
    color: white;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border-style: solid;
    border-width: 2px;
    border-color: #002070;
    margin-bottom: 20px;
  }
  .container.features .feature-list .feature-tab:hover {
    background-color: white;
    color: #002070;
  }
  .container.features .feature-list .feature-tab h2 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  .container.features .feature-list .feature-details {
    display: none;
    width: 100%;
  }
  .container.about-us .hero {
    background-image: url("/img/landing/team-icon.svg");
    padding-top: 0px;
    height: 300px;
  }
  .container.about-us .hero h1 {
    color: white;
  }
  .container.resources .hero {
    padding-top: 0;
  }
  .container.resources .resource-categories {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .container.resources .resource-categories .resource-tab {
    display: inline;
    color: white;
    background-color: #bb1333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
  }
  .container.resources .resource-categories .resource-tab:hover {
    text-decoration: underline;
  }
  .container.resources .resource-categories .active-tab {
    background-color: white;
    color: #bb1333;
    border: 2px solid #bb1333;
  }
  .container.resources .resource-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
  }
  .container.resources .resource-list .resource-card {
    display: inline;
    width: 30%;
    height: 250px;
    margin-bottom: 20px;
    border-style: solid;
    border-width: 2px;
    border-color: #002070;
    flex-direction: column;
  }
  .container.resources .resource-list .resource-card h2 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`