

function Project(props){
    return(
        <div className="project">
            <div className="image"><img src={props.url} alt="project"/></div>
            <div className="desc">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>

                <div className="btns">
                    <a href={props.demo} target="_blank" rel="noopener noreferrer"><button className="btn">Live Demo</button></a>
                    <a href={props.github} target="_blank" rel="noopener noreferrer"><button className="btn">Github</button></a>
                </div>
            </div>
        </div>
    );
}

export default Project;