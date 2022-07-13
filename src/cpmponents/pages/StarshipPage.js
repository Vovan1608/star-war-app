import { useState } from 'react';

import Row from '../row';
import { StarshipDetails, StarshipList } from '../starWarComponents';

const StarshipPage = () => {
    const [selectedItem, setSelectedItem] = useState(2);

    const onSelectedItem = (selectedItem) => {
        setSelectedItem(selectedItem);
    };

    return (
        <Row
            left={
                <StarshipList
                    onItemSelected={onSelectedItem}
                />
            }
            right={
                <StarshipDetails
                    itemId={selectedItem}
                />
            }
        />
    );
};

export default StarshipPage;
