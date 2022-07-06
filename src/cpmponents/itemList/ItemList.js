import { useEffect, useState } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';

import './ItemList.css';

const ItemList = ({ onPersonSelected, getData }) => {
    const [isError, setIsError] = useState(false);
    const [itemList, setPeopleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const onError = () => {
        setIsError(true);
        setIsLoading(false);
    };

    const onPeopleLoaded = (itemList) => {
        setPeopleList(itemList);
        setIsLoading(false);
    };

    const updatePeople = () => {
        getData()
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
                    onClick={() => onPersonSelected(id)}
                >
                    {name}
                </li>
            );
        });
    };

    const persons = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {isLoading ? <Spinner /> : null}
            {isError ? <ErrorIndicator /> : null}
            {!(isLoading || isError) ? persons : null}
        </ul>
    );
}

export default ItemList;
