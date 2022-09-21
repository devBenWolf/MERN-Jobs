
import main from "../assets/images/main-image.svg"
import LandingPageWrapper from "../assets/wrappers/LandingPage"

const Landing = () => {
  return (
    <LandingPageWrapper>
        <div className = "container page">
            <div className="info">
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean volutpat consectetur aliquet. Pellentesque a gravida massa. 
                Curabitur id purus arcu. Cras in condimentum ex. 
                Curabitur gravida mollis ullamcorper. 
                Fusce dictum lorem quis massa euismod dignissim. 
                </p>
                <button 
                    href="/register"
                    className="btn btn-hero"
                >Login/Register</button>
            </div>
            <img 
                    src={main} 
                    alt="girl looking at mountains" 
                    className="img main-img"    
            />
        </div>
    </LandingPageWrapper>
  )
}

export default Landing