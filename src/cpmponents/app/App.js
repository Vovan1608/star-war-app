import { useState } from 'react';

import Row from '../row';
import Header from '../header';
import ItemList from '../itemList';
import RandomPlanet from '../randomPlanet';
import ErrorBoundary from '../errorBoundary';
import ItemDetails, { Record } from '../itemDetails';
import SwapiService from '../../services/swapiService';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../starWarComponents';

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
    const [isError, setIsErro] = useState(false);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    const itemList = (
        <PersonList
            onItemSelected={onPersonSelected}
        />
    );

    const personDetails = (
        <ItemDetails
            itemId={selectedPerson}
            getData={getPersone}
            getImageUrl={getPersonImage}
        >
            <Record field="gender" label="Gender: " />
            <Record field="eyeColor" label="Eye Color: " />
            <Record field="birthYear" label="Birth Year: " />
        </ItemDetails>
    );

    return (
        <ErrorBoundary error={isError}>
            <div className="stardb-app">
                <Header />
                <RandomPlanet />

                <Row left={itemList} right={personDetails} />

                <PersonDetails itemId={11} />
                <PlanetDetails itemId={5} />
                <StarshipDetails itemId={5} />

                <PersonList
                    onItemSelected={() => { }}
                />
                <PlanetList
                    onItemSelected={() => { }}
                />

                <StarshipList
                    onItemSelected={() => { }}
                />


            </div>
        </ErrorBoundary>
    );
};

export default App;
