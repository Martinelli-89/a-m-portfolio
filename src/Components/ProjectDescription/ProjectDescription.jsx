import "./ProjectsDescription.scss";

const ProjectDescription = ({active, data}) => {

    let render;

    if(active == undefined) {
        render=<p>"This are all the projects I have worked on during the last three months in the _nology consultancy programme."</p>;
    } else {

        render = <>
                    <h3>{data[active].projName}</h3>
                    <p>{data[active].description}</p>
                    <p>{data[active].code.join(" ")}</p>
                    <div className="links">
                        <a href={data[active].link} target="_blank">Link</a>
                        <a href={data[active].repo} target="_blank">Repo</a>
                    </div>
                </>;

    }

    return (

        <section className="project__description">
            {render}
        </section>

    );

}

export default ProjectDescription;