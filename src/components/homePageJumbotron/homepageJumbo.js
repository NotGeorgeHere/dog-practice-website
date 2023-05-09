import './homePageJumbotron.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import dogbackGround from '../../images/dogbackround.webp'

function HomepageJumbo(){
    return(
    <div>
        <Parallax pages={2} className='parallax-remove-scrollbar'>
            <ParallaxLayer 
            offset={0}
            speed={1}
            style={{
                backgroundImage: `url(${dogbackGround})`,
                backgroundSize: 'auto',
                backgroundRepeat: 'repeat',
                height: "auto"
            }}>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.5} sticky={{start: 0, end: 1}} >
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Dog Dreams Adoption</h1>
                        <p className="lead">Find your dream dog with us and let your dog live a Pawsome life</p>
                    </div>
                </div>    
            </ParallaxLayer>
        </Parallax>
    </div>
    )
}

export default HomepageJumbo;