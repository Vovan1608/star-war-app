import { useState } from 'react';

import Row from '../row';
import Header from '../header';
import ItemList from '../itemList';
import RandomPlanet from '../randomPlanet';
import ItemDetails, { Record } from '../itemDetails';
import SwapiService from '../../services/swapiService';

import './App.css';

const App = () => {
    const {
        getPersone,
        getStarship,
        getAllPeople,
        getPersonImage,
        getStarshipImage
    } = new SwapiService();

    const [selectedPerson, setSelectedPerson] = useState(1);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    const itemList = (
        <ItemList
            onPersonSelected={onPersonSelected}
            getData={getAllPeople}
        >
            {
                ({
                    name,
                    gender,
                    birthYear
                }) => `${name} (${gender} ${birthYear})`
            }
        </ItemList>
    );

    const personDetails = (
        <ItemDetails
            itemId={selectedPerson}
            getData={getPersone}
            getImageUrl={getPersonImage}
        />
    );

    const elevenPerson = (
        <ItemDetails
            itemId={11}
            getData={getPersone}
            getImageUrl={getPersonImage}
        >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    );
    const starshipDetails = (
        <ItemDetails
            itemId={5}
            getData={getStarship}
            getImageUrl={getStarshipImage}
        >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    );

    return (
        <div>
            <Header />
            <RandomPlanet />

            <Row left={itemList} right={personDetails} />

            <Row left={elevenPerson} right={starshipDetails} />
        </div>
    );
};

export default App;
