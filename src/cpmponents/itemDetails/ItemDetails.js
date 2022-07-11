import React, { useState, useEffect } from 'react';

import Spinner from '../spinner';
import ErrorBoundary from '../errorBoundary';

import './ItemDetails.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {
    const [item, setItem] = useState({});
    const [image, setImage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const onError = () => {
        setIsError(true);
        setIsLoading(false);
    };

    const onItemLoaded = (item) => {
        setItem(item);
        setIsLoading(false);
        setImage(getImageUrl(item));
    };

    const updateItem = () => {
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then(onItemLoaded)
            .catch(onError);
    };

    useEffect(() => {
        updateItem();
    }, [itemId]);

    return (
        <ErrorBoundary error={isError}>
            <div className="person-details card">
                {
                    isLoading ?
                        <Spinner /> :
                        <ItemView item={item} image={image} children={children} />
                }
            </div>
        </ErrorBoundary>
    );
}

const ItemView = ({ item, image, children }) => {
    const { gender, birthYear, eyeColor, name } = item;

    return (
        <>
            <img
                className="person-image"
                src={image}
            />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {/* <li className="list-group-item">
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
                    </li> */}
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default ItemDetails;
