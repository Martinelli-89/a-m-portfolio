import "./ProjectsDescription.scss";

const ProjectDescription = ({active, data}) => {

    let render;

    if(active == undefined) {
        render=<p>"This are all the projects I have worked on during the last three months in the _nology consultancy programme."</p>;
    } else {

        render = <>
                    <p>{data[active].projName}</p>
                    <p>{data[active].description}</p>
                    <p>{data[active].code.join(" ")}</p>
                    <a href={data[active].link} target="_blank">Link</a>
                </>;

    }

    return (

        <section className="project__description">
            {render}
        </section>

    );

}

export default ProjectDescription;