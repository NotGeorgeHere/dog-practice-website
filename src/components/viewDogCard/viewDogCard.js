import "./viewDogCard.css"

function ViewDogCard(object){
    return(
        <div className=" col-12 col-sm-6 col-md-6 col-lg-4 mb-5">
            <div className="card h-100" style={{ width: "18rem" }}>
                <div className="d-flex align-items-center justify-content-center viewDogImage">
                    <img src={object.image} className="card-img-top align-self-center" />
                </div>
                <div className="card-body" style={{ height: "250px" }}>
                    <h5 className="card-title">{object.dogName}</h5>
                    <p className="card-text">{object.dogTemperament}</p>
                </div>  
            </div>    
        </div>
    )
}

export default ViewDogCard