import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import SwapiService from '../../services/swapiService';
import { SwapiServiceProvider } from '../swapiServiceContext';
import { StarshipDetails, PersonDetails, PlanetDetails } from '../starWarComponents';
import { PeoplePage, PlanetPage, StarshipPage, LoginPage, SecretPage } from '../pages';

import './App.css';

const App = () => {
    const swapiService = new SwapiService();

    const [isLogginedIn, setIsLogginedIn] = useState(false);

    const onLogIn = () => {
        setIsLogginedIn(true);
    }

    return (
        <SwapiServiceProvider value={swapiService}>
            <BrowserRouter>
                <div className="stardb-app">
                    <Header />

                    <Routes>
                        <Route path='/' element={<RandomPlanet />} exact />
                        <Route path='/people' element={<PeoplePage />} exact />
                        <Route
                            path='/people/:id'
                            element={<PersonDetails />}
                        />
                        <Route path='/planets' element={<PlanetPage />} exact />
                        <Route
                            path='/planets/:id'
                            element={<PlanetDetails />}
                        />
                        <Route path='/starships' element={<StarshipPage exact />} />
                        <Route
                            path='/starships/:id'
                            element={<StarshipDetails />}
                        />
                        <Route
                            path='/login'
                            element={
                                <LoginPage
                                    isLogginedIn={isLogginedIn}
                                    onLogIn={onLogIn}
                                />
                            }
                        />
                        <Route
                            path='/secret'
                            element={
                                <SecretPage
                                    isLogginedIn={isLogginedIn}
                                />
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </SwapiServiceProvider>
    );
};

export default App;
