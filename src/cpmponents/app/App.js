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

    const personDetails = <PersonDetails personId={selectedPerson} />;

    return (
        <div>
            <Header />
            <RandomPlanet />

            <Row left={itemList} right={personDetails} />
        </div>
    );
};

export default App;
