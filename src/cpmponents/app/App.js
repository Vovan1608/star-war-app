import React from 'react';

import Header from '../header';
import ItemList from '../itemList';
import RandomPlanet from '../randomPlanet';
import PersonDetails from '../personDetails';

import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <RandomPlanet />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;
