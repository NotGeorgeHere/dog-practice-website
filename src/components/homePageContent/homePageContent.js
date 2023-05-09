import './homePageContent.css';
import dogImageOne from '../../images/dogimage1.png'

function HomepageContent(){
    return(
    <div>
        <div className="container customContainerHomePage">
            <div className="row customRowHomePage">
                <div className="col-8 customColumnWidthStyling">
                    <div className='homePageCustomStyling'>
                        <h2>Who are we?</h2>
                        <p>We are the one place you need to adopt a dog!</p>
                        <p>Whether you're looking for a small dog, large dog or medium job we've got one for you!</p>
                        <p>Feel free to view our dogs or use our choose a dog page to find the right dog for you!</p>
                    </div>
                </div>

                <div className="col-4 customColumnWidthStyling dogImages">
                    <img className="dogImageSize" src={dogImageOne} alt="pug"/>
                </div>
            </div>

            <div className="row customRowHomePage">
                <div className="col-4 customColumnWidthStyling dogImages">
                    <img className="dogImageSize" src={dogImageOne} alt="pug"/>
                </div>

                <div className="col-8 customColumnWidthStyling">
                    <div className='homePageCustomStyling'>
                        <h2>What we do?</h2>
                        <p>We are the one place you need to adopt a dog!</p>
                        <p>Whether you're looking for a small dog, large dog or medium job we've got one for you!</p>
                        <p>Feel free to view our dogs or use our choose a dog page to find the right dog for you!</p>
                    </div>
                </div>
            </div>

            <div className="row customRowHomePage">
                <div className="col-8 customColumnWidthStyling">
                    <div className='homePageCustomStyling'>
                        <h2>How we can help you?</h2>
                        <p>We are the one place you need to adopt a dog!</p>
                        <p>Whether you're looking for a small dog, large dog or medium job we've got one for you!</p>
                        <p>Feel free to view our dogs or use our choose a dog page to find the right dog for you!</p>
                    </div>
                </div>

                <div className="col-4 customColumnWidthStyling dogImages">
                    <img className="dogImageSize" src={dogImageOne} alt="pug"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomepageContent;