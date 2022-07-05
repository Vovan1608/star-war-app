import { useEffect, useState } from 'react';

import SwapiService from '../../services/swapiService';

import './RandomPlanet.css';

const RandomPlanet = () => {
    const id = Math.floor(Math.random() * 23) + 2;

    const swapiService = new SwapiService();

    const [planet, setPlanet] = useState({});

    const onPlanetLoaded = (planet) => {
        setPlanet({ planet });
    };

    const updatePlanet = () => {
        swapiService
            .getPlanet(id)
            .then(onPlanetLoaded);
    };

    useEffect(() => {
        updatePlanet();
    }, []);

    const { name, population, rotationPeriod, diameter } = planet;

    return (
        <div className="random-planet jumbotron rounded">
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
        </div>

    );
}

export default RandomPlanet;
