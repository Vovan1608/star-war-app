import { useEffect, useState } from 'react';

import Spinner from '../spinner';
import ErrorBoundary from '../errorBoundary';
import SwapiService from '../../services/swapiService';

import './RandomPlanet.css';

const RandomPlanet = () => {
    const swapiService = new SwapiService();

    const [planet, setPlanet] = useState({});
    const [image, setImage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const onError = () => {
        setIsError(true);
        setIsLoading(false);
    };

    const onPlanetLoaded = (planet) => {
        setPlanet({ ...planet });
        setIsLoading(false);
        setImage(swapiService.getPlanetImage(planet));
    };

    const getRandom = () => {
        return Math.floor(Math.random() * 20);
    };

    const updatePlanet = () => {
        const id = getRandom();

        swapiService
            .getPlanet(id)
            .then(onPlanetLoaded)
            .catch(onError);
    };

    useEffect(() => {
        updatePlanet();
    }, []);

    return (
        <ErrorBoundary error={isError}>
            <div className="random-planet jumbotron rounded">
                {
                    isLoading ?
                        <Spinner /> :
                        <PlanetView
                            image={image}
                            planet={planet}
                            updatePlanet={updatePlanet}
                        />
                }
            </div>
        </ErrorBoundary>
    );
}

const PlanetView = ({ planet, updatePlanet, image }) => {
    const { name, population, rotationPeriod, diameter } = planet;

    return (
        <>
            <img
                src={image}
                className="planet-image"
                onClick={updatePlanet}
            />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default RandomPlanet;
