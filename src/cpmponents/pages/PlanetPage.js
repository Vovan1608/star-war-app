import { useState } from 'react';

import Row from '../row';
import { PlanetDetails, PlanetList } from '../starWarComponents';

const PlanetPage = () => {
    const [selectedItem, setSelectedItem] = useState(2);

    const onSelectedItem = (selectedItem) => {
        setSelectedItem(selectedItem);
    };

    return (
        <Row
            left={
                <PlanetList
                    onItemSelected={onSelectedItem}
                />
            }
            right={
                <PlanetDetails
                    itemId={selectedItem}
                />
            }
        />
    );
};

export default PlanetPage;
