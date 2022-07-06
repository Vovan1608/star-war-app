import { useEffect, useState } from 'react';

import Spinner from '../spinner/Spinner';
import SwapiService from '../../services/swapiService';

import './ItemList.css';

const ItemList = () => {
    const swapiService = new SwapiService();

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [peopleList, setPeopleList] = useState([]);

    useEffect(() => {
        swapiService
            .getAllPeople()
            .then((peopleList) => {
                setPeopleList(peopleList);
            })
            .catch(onError);
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

    const onError = () => {
        setIsError(true);
    };

    const persons = renderItems(peopleList);

    return (
        <ul className="item-list list-group">
            {!peopleList ? <Spinner /> : null}
            {persons}
        </ul>
    );
}

export default ItemList;
