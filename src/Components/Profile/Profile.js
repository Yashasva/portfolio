import Contact from '../Contact/Contact';
import profileImage from './GenosTwoFaceMeSmallVer.jpg';
import linkedin from '../../Content/icons/linkedin.png';
import github from '../../Content/icons/github.png';
import twitter from '../../Content/icons/twitter.png';
import hi from '../../Content/icons/hi.png';
import rocket from '../../Content/icons/rocket.png';
import downarrow from '../../Content/icons/downarrow.png';

const Profile = ()=>{

    const contactAlert = (email)=>{
        alert(email + ": Thank you for reaching out to me. I will get back to you soon!");
    }

    return(
        <div className="home">
            <div className="home-container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={profileImage} alt="Something's supposed to be here"/>
                    </div>
                    <div className="profile-content">
                        <p> Hi, Nice to meet you. <img src={hi} alt="hi"/> I am a Full Stack Developer with a quirky mind. <img src={rocket} alt="hi"/>
                            I am keenly interested <span>Web Development, art and music</span>. Please feel free to look around!
                        <br/> Also, I love meeting new people so feel free to drop a message if you'd like to connect or mail me @
                            <a href = "mailto: yashasvap@gmail.com"> yashasvap@gmail.com</a>
                        </p>
                    </div>
                    <div>
                        <button className="btn">Read More</button>
                    </div>
                </div>
                {/* <div className="nav-contact">
                <a href="#contact">
                    <button className="btn">Contact</button>
                       
                </a>
                </div> */}
                <div className="contact" id="contact">
                    <Contact onSubmitForm={contactAlert}/>
                </div>
            </div>
            <div className="social">
                <div className="icon"><a href="https://www.linkedin.com/in/yashasva-paras-ab8833144/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Linkedin"/></a></div>
                <div className="icon"><a href="https://github.com/Yashasva" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a></div>
                <div className="icon"><a href="https://twitter.com/YashasvaP" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter"/></a></div>
            </div>
        </div>
    )
}  

export default Profile;