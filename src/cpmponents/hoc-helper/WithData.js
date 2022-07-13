import { useEffect, useState } from 'react';

import Spinner from '../spinner';
import ErrorBoundary from '../errorBoundary';

const WithData = (Component) => {
    return function Wrapp(props) {
        const [data, setData] = useState([]);
        const [isError, setIsError] = useState(false);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            props.getData()
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsError(true);
                });
        }, []);

        if (isLoading) {
            return <Spinner />;
        }

        return (
            <ErrorBoundary error={isError}>
                <Component {...props} data={data} />
            </ErrorBoundary>

        );
    };
};

export default WithData;
