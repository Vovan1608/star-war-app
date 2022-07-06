import { useEffect, useState } from 'react';

import Spinner from '../spinner/Spinner';
import SwapiService from '../../services/swapiService';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';

import './RandomPlanet.css';

const RandomPlanet = () => {
    const swapiService = new SwapiService();

    const [planet, setPlanet] = useState({});
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const onError = () => {
        setIsError(true);
        setIsLoading(false);
    };

    const onPlanetLoaded = (planet) => {
        setPlanet({ ...planet });
        setIsLoading(false);
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
        <div className="random-planet jumbotron rounded">
            {isLoading ? <Spinner /> : null}
            {isError ? <ErrorIndicator /> : null}
            {
                !(isLoading || isError) ?
                    <PlanetView
                        planet={planet}
                        id={planet.id}
                        updatePlanet={updatePlanet}
                    /> :
                    null
            }
        </div>
    );
}

const PlanetView = ({ planet, id, updatePlanet }) => {
    const { name, population, rotationPeriod, diameter } = planet;

    return (
        <>
            <img
                className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
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
