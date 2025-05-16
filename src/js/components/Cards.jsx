export const Card = (props) => {
    return (

        <div className="card text-center" style={{ width: "19rem" }}>
            <div className="col">
                <div className="card h-100">
                    <img src={props.imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">{props.button}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.defaultProps = {
    imageUrl: "https://www.muycomputer.com/wp-content/uploads/2024/12/Firefox_como_navegador_por_defecto.jpg",
    title: "Card por defecto",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    button: "Find Out More!",
}