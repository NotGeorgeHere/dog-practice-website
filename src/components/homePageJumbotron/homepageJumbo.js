import './homePageJumbotron.css';
import dogbackGround from '../../images/dogbackround.webp'

function HomepageJumbo(){
    return(
    <div>
        <div className="jumbotron jumbotron-fluid" style={{
            backgroundImage: `url(${dogbackGround})`,
            backgroundSize: 'auto',
            padding: '10vh',
        }}>
                <div className="container customContainerJumbotron">
                    <h1 className="display-4">Dog Dreams Adoption</h1>
                    <p className="lead">Find your dream dog with us and let your dog live a Pawsome life</p>
                </div>
            </div>
    </div>
    )
}

export default HomepageJumbo;