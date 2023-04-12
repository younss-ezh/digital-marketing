import home from "./images/home.png"
import "./css/home.css"
import { Link } from 'react-router-dom';

export function Home() {

    return (
        <>
        <div className="cont">
          <img src={home} alt="example" className="image" />
          <div className="text">
            <h1>Digital Marketing Agency</h1>
            <p>creativity time est une Agence de communication, branding & marketing digital basée à Casablanca. Créée en 
              2023 , l’agence compte à son actif une équipe jeune et dynamique, orchestrée par le savoir faire et la finesse d’un duo 
              d’experts (directeur artistique et la responsable communication et marketing digitale) qui vous propose des solutions 
              optimales conjuguant la qualité, la créativité et la maîtrise des dernières technologies..</p>
              <Link className='btn btn-warning' to="services">Learn More</Link>
          </div>
        </div>
          
        </>
    )
}