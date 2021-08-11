

function Project(props){
    return(
        <div className="project">
            <div className="image"><img src={props.url} alt="project"/></div>
            <div className="desc">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>

                <div className="btns">
                    <div className="btn"><a href={props.demo} target="_blank" rel="noopener noreferrer">Live Demo</a></div>
                    <div className="btn"><a href={props.github} target="_blank" rel="noopener noreferrer">Github</a></div>
                </div>
            </div>
        </div>
    );
}

export default Project;