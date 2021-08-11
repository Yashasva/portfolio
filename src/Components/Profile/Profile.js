
import profileImage from './GenosTwoFaceMeSmallVer.jpg';
const Profile = ()=>{
    return(
        <div className="home">
            <div className="home-image">
                <img src={profileImage} alt="Something's supposed to be here"/>
            </div>
            <div className="home-content">
                <p> Here, I have tried to put everything I do and I am interested in at one place. Feel free to look around.
                  <br/> Connect with me? I love to connect with new people and exchange ideas. Email me at <a href = "mailto: yashasvap@gmail.com">yashasvap@gmail.com</a>
                </p>
            </div>
        </div>
    )
}  

export default Profile;