import { useState, useEffect } from 'react';

import Spinner from '../spinner/Spinner';
import SwapiService from '../../services/swapiService';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';

import './PersonDetails.css';

const PersonDetails = ({ personId }) => {
    const swapiService = new SwapiService();

    const [person, setPerson] = useState({});
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const onError = () => {
        setIsError(true);
        setIsLoading(false);
    };

    const onPersonLoaded = (person) => {
        setPerson(person);
        setIsLoading(false);
    };

    const updatePerson = () => {
        if (!personId) {
            return;
        }

        swapiService
            .getPersone(personId)
            .then(onPersonLoaded)
            .catch(onError);
    };

    useEffect(() => {
        updatePerson();
    }, [personId]);

    return (
        <div className="person-details card">
            {isLoading ? <Spinner /> : null}
            {isError ? <ErrorIndicator /> : null}
            {!(isLoading || isError) ? <PersonView person={person} id={personId} /> : null}
        </div>
    );
}

const PersonView = ({ person, id }) => {
    const { gender, birthYear, eyeColor, name } = person;

    return (
        <>
            <img
                className="person-image"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default PersonDetails;
