import Contact from '../Contact/Contact';
import profileImage from './GenosTwoFaceMeSmallVer.jpg';
import linkedin from './linkedin.png';
import github from './github.png';
import twitter from './twitter.png';

const Profile = ()=>{

    const contactAlert = (email)=>{
        alert(email + " your message has been submitted");
    }

    return(
        <div className="home">
            <div className="home-container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={profileImage} alt="Something's supposed to be here"/>
                    </div>
                    <div className="profile-content">
                        <p> Here, I have tried to put everything I do and I am interested in at one place. Feel free to look around.
                        <br/> Connect with me? I love to connect with new people and exchange ideas. Email me at <a href = "mailto: yashasvap@gmail.com">yashasvap@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="contact">
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