import {Menu} from "./components/Menu";
import { Routes, Route } from 'react-router-dom' 
import { Home } from "./pages/Home";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Service } from "./pages/Service";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

const Footer = styled.footer`
  display: flex;
  justify-content: end;
  align-items: end;
  padding: 10px;
  margin-top: 2rem;
  background: #222;
  color: #fff;
  height: 17rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`    
  color: #007bff;
  font-size: 1.5rem;
  margin: 0 1rem;
`;

function App() {
  return (
    <>
    <Menu />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    <Footer>
      <div className="container">
        <p>Trusted Support</p>
        <h1>Our Advertising Partners</h1>
        <article>We have key partnerships with the top advertising partners required to drive growth. For any issues, support requests, new features, or general questions we are well connected and approved to support your growth.</article>
        <p className="text-primary">&copy; 2023 Digital Marketing</p>
        <SocialIcons>
        <SocialIcon href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></SocialIcon>
        <SocialIcon href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></SocialIcon>
        <SocialIcon href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></SocialIcon>
        </SocialIcons>
      </div>
    </Footer>
    </>
  );
}

export default App;
