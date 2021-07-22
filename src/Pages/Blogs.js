import Blog from '../Components/Blog/Blog';

function Blogs(){

const title = "The-google-foobar-and-what-you-need-to-know-about-it";
const url = "https://yashasvaparas.medium.com/the-google-foobar-what-you-need-to-know-about-it-c1e9bc0f516c";
return(
    <div>
        <ul>
            <Blog title={title} url={url}/>
        </ul>
    </div>
);
}

export default Blogs;