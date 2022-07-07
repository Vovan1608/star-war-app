import { useState } from 'react';

import Row from '../row';
import Header from '../header';
import ItemList from '../itemList';
import RandomPlanet from '../randomPlanet';
import PersonDetails from '../personDetails';
import SwapiService from '../../services/swapiService';

import './App.css';

const App = () => {
    const swapiService = new SwapiService();

    const [selectedPerson, setSelectedPerson] = useState(1);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    const itemList = (
        <ItemList
            onPersonSelected={onPersonSelected}
            getData={swapiService.getAllPeople}
            renderItem={
                ({
                    name,
                    gender,
                    birthYear
                }) => `${name} (${gender} ${birthYear})`
            }
        />
    );

    const personDetails = <PersonDetails personId={selectedPerson} />;

    return (
        <div>
            <Header />
            <RandomPlanet />

            <Row left={itemList} right={personDetails} />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onPersonSelected={onPersonSelected}
                        getData={swapiService.getAllPlanets}
                        renderItem={({ name }) => name}
                    />
                </div>
            </div>

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onPersonSelected={onPersonSelected}
                        getData={swapiService.getAllStarships}
                        renderItem={({ name }) => name}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
