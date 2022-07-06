import { useEffect, useState } from 'react';

import Spinner from '../spinner/Spinner';
import SwapiService from '../../services/swapiService';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';

import './ItemList.css';

const ItemList = () => {
    const swapiService = new SwapiService();

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [peopleList, setPeopleList] = useState([]);

    const onError = () => {
        setIsError(true);
        setIsLoading(false);
    };

    const onPeopleLoaded = (peopleList) => {
        setPeopleList(peopleList);
        setIsLoading(false);
    };

    const updatePeople = () => {
        swapiService
            .getAllPeople()
            .then(onPeopleLoaded)
            .catch(onError);
    };

    useEffect(() => {
        updatePeople();
    }, []);

    const renderItems = (persons) => {
        return persons.map(({ name, id }) => {
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => console.log(id)}
                >
                    {name}
                </li>
            );
        });
    };

    const persons = renderItems(peopleList);

    return (
        <ul className="item-list list-group">
            {isLoading ? <Spinner /> : null}
            {isError ? <ErrorIndicator /> : null}
            {!(isLoading || isError) ? persons : null}
        </ul>
    );
}

export default ItemList;
