import { useState } from 'react';

import Header from '../header';
import ItemList from '../itemList';
import RandomPlanet from '../randomPlanet';
import PersonDetails from '../personDetails';

import './App.css';

const App = () => {
    const [selectedPerson, setSelectedPerson] = useState(0);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    return (
        <div>
            <Header />
            <RandomPlanet />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onPersonSelected={onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedPerson} />
                </div>
            </div>
        </div>
    );
};

export default App;
