import './Project.css';

function Project(props){
    return(
        <div className="card">
            <div className="image"><img src={props.url}/></div>
            <div className="desc">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>

                <div className="btns">
                    <div className="btn"><a href={props.demo} target="_blank">Live Demo</a></div>
                    <div className="btn"><a href={props.github} target="_blank">Github</a></div>
                </div>
            </div>
        </div>
    );
}

export default Project;