import { useState } from 'react';

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

    return (
        <div>
            <Header />
            <RandomPlanet />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onPersonSelected={onPersonSelected}
                        getData={swapiService.getAllPeople}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedPerson} />
                </div>
            </div>

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onPersonSelected={onPersonSelected}
                        getData={swapiService.getAllPlanets}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
