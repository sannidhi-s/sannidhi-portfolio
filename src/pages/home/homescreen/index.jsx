import HeroSection from "../AboutMe";
import MyExperience from "../Experience"
// import Resume from "../Resume"
// import ContactInfo from "../Contact"; 
import Footer from "../Footer";
import Acknowledgements from "../../Acknowledgements";







export default function Home () {
    return (
        <>
        
        {/* <WelcomeMessage/> */}
    


        <div id="heroSection" className="scrollspy-section">
        <HeroSection/>
        </div>

        <div id="experience" className="scrollspy-section">
        <MyExperience/>
        </div>

        {/* <div id="resume" className="scrollspy-section">
        <Resume/>
        </div> */}
        <div id="acknowledgements" className="scrollspy-section">
        <Acknowledgements/>
        </div>

        {/* <div id="contact" className="scrollspy-section">
        <ContactInfo/>
        </div> */}

        <Footer/>
        
        
        
        




 

        </>
    );
}