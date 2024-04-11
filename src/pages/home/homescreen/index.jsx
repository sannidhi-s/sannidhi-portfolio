import HeroSection from "../AboutMe";
import MyExperience from "../Experience"
import Resume from "../Resume"
import ContactInfo from "../Contact"; 





export default function Home () {
    return (
        <>
        <div id="heroSection" className="scrollspy-section">
        <HeroSection/>
        </div>

        <div id="experience" className="scrollspy-section">
        <MyExperience/>
        </div>

        <div id="resume" className="scrollspy-section">
        <Resume/>
        </div>

        <div id="contact" className="scrollspy-section">
        <ContactInfo/>
        </div>
        
        
        
        




 

        </>
    );
}