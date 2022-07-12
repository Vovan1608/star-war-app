import { useEffect, useState } from 'react';

import Spinner from '../spinner';

const WithData = (Component) => {
    return function Wrapp(props) {
        const [data, setData] = useState([]);

        useEffect(() => {
            props.getData()
                .then((data) => {
                    setData(data);
                });
        }, []);

        if (!data) {
            return <Spinner />;
        }

        return <Component {...props} data={data} />;
    };
};

export default WithData;
