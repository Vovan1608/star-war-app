import { useEffect, useState } from 'react';

import Spinner from '../spinner';
import ErrorBoundary from '../errorBoundary';

import './ItemList.css';

const ItemList = ({ onPersonSelected, getData, children }) => {
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

    const renderItems = (arr) => {
        return arr.map(({ id, ...item }) => {
            const label = children(item);

            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => onPersonSelected(id)}
                >
                    {label}
                </li>
            );
        });
    };

    const persons = renderItems(itemList);

    return (
        <ErrorBoundary error={isError}>
            <ul className="item-list list-group">
                {isLoading ? <Spinner /> : persons}
            </ul>
        </ErrorBoundary>
    );
}

export default ItemList;
