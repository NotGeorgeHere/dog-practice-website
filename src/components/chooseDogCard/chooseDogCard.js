function ChooseDogCard(object){
    return(
        <div>
            <div className="card" style={{ width: "24rem" }}>
                <div className="d-flex align-items-center justify-content-center viewDogImage">
                    <img src={object.image} className="card-img-top align-self-center" alt="dog" />
                </div>
                <div className="card-body" style={{ height: "250px" }}>
                    <h5 className="card-title">{object.dogName}</h5>
                    <p className="card-text">{object.dogTemperament}</p>
                </div>
                <div className="swipers">
                    <button onClick={object.handleLike}>LIKE</button>
                    <button onClick={object.handleDislike}>DISLIKE</button>
                </div>  
            </div>    
        </div>
    )
}

export default ChooseDogCard