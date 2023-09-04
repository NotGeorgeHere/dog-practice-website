import React, { useState, useEffect } from 'react';
import ChooseDogCard from '../../components/chooseDogCard/chooseDogCard';

function ChooseDog(){

    //Gets the api url and the api key
    const initialUrl = `https://api.thedogapi.com/v1/images/search?limit=10`;
    const api_key = "live_2SzaqjBYZGlhZn0NF0w1Gg6TsK3z7BYFBXscjriryy82aXfMzwBWRoeT2ZeRTrP8";
    
    //State to store the data
    const [dogData, setDogData] = useState([]);
    //Gets the current index, liked dogs and disliked dogs functions for the 'swiping' element of the app
    //Current card index is set as 0 to act as a counter for the dog data array
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [likedDogs, setLikedDogs] = useState([]);
    const [dislikedDogs, setDislikedDogs] = useState([]);
    const [displayLikedDogs, setDisplayLikedDogs] = useState(false);
    
    //Used to make the api call
    useEffect(() => {
        //Runs asynchronously
        const fetchData = async () => {
            //To store the api request data
            let data = [];
            //Performs the api call until there is 10 pieces of data in the array, can increase this in the future
            //Will also only include api call requests that include the array item 'breeds' as this is needed for the rest of the page to function as intended
            while (data.filter((item) => item.breeds && item.breeds.length > 0).length < 10) {
                //Api call
                const response = await fetch(initialUrl, {
                    headers: {
                        'x-api-key': api_key
                    }
                });
                //the results are then concatenated into the data array
                const result = await response.json();
                data = data.concat(result);
            }
            //creates a new array based off of the data array above and double checks that all items filtered include the breeds keyword, is possibly not neccesary but better safe than sorry + it works
            const filteredData = data.filter((item) => item.breeds && item.breeds.length > 0).slice(0, 10);
            //Updates the state of DogData to be this new array
            setDogData(filteredData);
        };
        //Runs the fetchData function, responsible for initiating the API data retrieval and filtering process and updating the dogData state with the filtered data
        fetchData();
    }, [initialUrl]);
    
    console.log(dogData)

    const handleLike = () => {
        //Sets current dog as the array value of dog data according to the card index counter which is updated in handle next card
        const currentDog = dogData[currentCardIndex];
        //Adds the current dog to the array of liked dog, ...likeddogs spreads all the elements into a new array including current dog
        setLikedDogs([...likedDogs, currentDog]);
        handleNextCard();
    }

    const handleDislike = () =>{
        const currentDog = dogData[currentCardIndex];
        setDislikedDogs([...dislikedDogs, currentDog]);
        handleNextCard();
    }

    const handleNextCard = () =>{
        //Once called it will check the current index vs the dog length - 1 (array starts at 0) and then if its less it will update the card index and add 1
        if (currentCardIndex < dogData.length - 1){
            setCurrentCardIndex(currentCardIndex + 1)
        }
        //else then it means the array is finished so can now display the liked dogs
        else{
            //Sets operator so that list of liked dogs can be displayed
            setDisplayLikedDogs(true);
        }
    }
    
    if (dogData.length === 0) {
        return <div>Loading...</div>;
    }

    return(
    <div>
        <h2>Choose a dog</h2>
        {/* Checks to see if displayLikeDogs is = true, ie: is the array been looped through completely, if it does it will render the liked dogs list, soon to be card */}
        {displayLikedDogs ? (
        <div>
          <h2>Liked Dogs</h2>
          {likedDogs.map((dog, index) => (
            <div key={index}>{dog.breeds[0].name}</div>
          ))}
        </div>
        /* Ternary operator ie: if the above isn't true then render the cards for the dogs */
      ) : (
        <div className="card-container">
        
          {currentCardIndex < dogData.length && (
            //Renders the dog card and the handle like and dislikes and will only render if current card index is less then dog data array length
            <ChooseDogCard
              image={dogData[currentCardIndex].url}
              dogName={dogData[currentCardIndex].breeds[0].name}
              dogTemperament={dogData[currentCardIndex].breeds[0].temperament}
              handleLike={handleLike}
              handleDislike={handleDislike}
            />
          )}
        </div>
      )}
    </div>
    )
}

export default ChooseDog;