import React, { useState, useEffect } from 'react';
import ViewDogCard from '../../components/viewDogCard/viewDogCard';

function ViewDogs() {

    //Gets the api url and the api key
    const initialUrl = `https://api.thedogapi.com/v1/images/search?limit=10`;
    const api_key = "live_2SzaqjBYZGlhZn0NF0w1Gg6TsK3z7BYFBXscjriryy82aXfMzwBWRoeT2ZeRTrP8";

    //State to store the data
    const [dogData, setDogData] = useState([]);

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

    if (dogData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            
            <div className='container'>
                <div className="row justify-content-center">
                    {dogData.map((object) => {
                    return(
                        <ViewDogCard 
                            id = {object.id}
                            image = {object.url}
                            dogName = {object.breeds[0].name}
                            dogTemperament = {object.breeds[0].temperament}
                        />
                    )
                    })}
                </div>
            </div>

        </div>
    );
}

export default ViewDogs;