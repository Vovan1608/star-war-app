import { useEffect, useState } from 'react';

const WithData = (Component, getData) => {
    return (props) => {
        const [data, setData] = useState();

        useEffect(() => {
            getData()
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
