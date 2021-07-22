import './Blog.css';

function Blog(props){

return(
    <li className="blog">
        <a href={props.url} target="_blank"><h2>{props.title}</h2></a>
    </li>
);

}

export default Blog;