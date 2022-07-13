import Header from '../header';
import RandomPlanet from '../randomPlanet';
import SwapiService from '../../services/swapiService';
import { SwapiServiceProvider } from '../swapiServiceContext';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

import './App.css';

const App = () => {
    const swapiService = new SwapiService();

    return (
        <SwapiServiceProvider value={swapiService}>
            <div className="stardb-app">
                <Header />
                <RandomPlanet />

                <PeoplePage />

                <PlanetPage />

                <StarshipPage />
            </div>
        </SwapiServiceProvider>
    );
};

export default App;
