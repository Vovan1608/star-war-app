import { useEffect, useState } from 'react';

import Spinner from '../spinner/Spinner';
import SwapiService from '../../services/swapiService';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';

import './RandomPlanet.css';

const RandomPlanet = () => {
    const id = Math.floor(Math.random() * 18) + 2;

    const swapiService = new SwapiService();

    const [planet, setPlanet] = useState({});
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const onPlanetLoaded = (planet) => {
        setPlanet({ ...planet });
        setIsLoading(false);
    };

    const onError = () => {
        setIsError(true);
        setIsLoading(false);
    };

    const updatePlanet = () => {
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
            {isError ? <ErrorIndicator /> : null}
            {isLoading ? <Spinner /> : null}
            {!(isLoading || isError) ? <PlanetView planet={planet} id={id} /> : null}
        </div>
    );
}

const PlanetView = ({ planet, id }) => {
    const { name, population, rotationPeriod, diameter } = planet;

    return (
        <>
            <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
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
