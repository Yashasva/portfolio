import Project from '../Components/Project/Project';
import gipher from '../Components/Project/gipherapp.JPG';
import todo from '../Components/Project/todo.JPG';
import bookingticket from '../Components/Project/booking-ticket.JPG'

const gipherText = "This application uses 3rd party API provided by giphy.com to search for Gifs according to the users need. The application also allows users to save their favorite gifs and show them all at one place. Front end has been built on Angular and back-end uses two microservices built on Spring Boot.";
const todoText = "This application uses vanilla JS to implement a to-do list tracker. Users can add, edit, delete and mark them as completed/not completed.";
const bookingText = "This application is build using React JS and Nodejs. User can book tickets in a given compartment. A user can book only seven tickets at a time however the number of bookings is not limited";

const gipherdemo = "https://gipher-app.herokuapp.com/home";
const giphergit = "https://github.com/Yashasva/GipherApp";

const tododemo = "https://yashasva.github.io/Todo-List/";
const todogit = "https://github.com/Yashasva/Todo-List";

const bookingdemo = "https://brave-mcnulty-944ce7.netlify.app/";
const bookinggit = "https://github.com/Yashasva/booking-system-frontend";

function Projects(){
return(
    <div>
        <Project title='Gipher App' url={gipher} desc={gipherText} demo={gipherdemo} github={giphergit}/>
        <Project title='Booking System' url={bookingticket} desc={bookingText} demo={bookingdemo} github={bookinggit}/>
        <Project title='To Do App' url={todo} desc={todoText} demo={tododemo} github={todogit}/>
    </div>
);
}

export default Projects; 