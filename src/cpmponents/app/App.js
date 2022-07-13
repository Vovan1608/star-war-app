import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
            <BrowserRouter>
                <div className="stardb-app">
                    <Header />

                    <Routes>
                        <Route path='/' element={<RandomPlanet />} exact />
                        <Route path='/people' element={<PeoplePage />} />
                        <Route path='/planets' element={<PlanetPage />} />
                        <Route path='/starships' element={<StarshipPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </SwapiServiceProvider>
    );
};

export default App;
