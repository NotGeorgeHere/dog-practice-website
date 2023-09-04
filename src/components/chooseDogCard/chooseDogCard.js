import "./chooseDogCard.css"

function ChooseDogCard(object){
    return(
        <div>
            <div className="card" style={{ width: "20rem", height: "30rem" }}>
                <div className="d-flex align-items-center justify-content-center viewDogImage">
                    <img src={object.image} className="card-img-top align-self-center" alt="dog" />
                </div>
                <div className="card-body" style={{ height: "250px" }}>
                    <h5 className="card-title">{object.dogName}</h5>
                    <p className="card-text">{object.dogTemperament}</p>
                </div>
                <div className="swipers">
                    <button type="button" className="btn btn-success customBtn" onClick={object.handleLike}>LIKE</button>
                    <button type="button" className="btn btn-danger customBtn" onClick={object.handleDislike}>DISLIKE</button>
                </div>  
            </div>    
        </div>
    )
}

export default ChooseDogCard