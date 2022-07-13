import { useState } from 'react';

import Row from '../row';
import { PersonDetails, PersonList } from '../starWarComponents';

const PeoplePage = () => {
    const [selectedItem, setSelectedItem] = useState(1);

    const onSelectedItem = (selectedItem) => {
        setSelectedItem(selectedItem);
    };

    return (
        <Row
            left={
                <PersonList
                    onItemSelected={onSelectedItem}
                />
            }
            right={
                <PersonDetails
                    itemId={selectedItem}
                />
            }
        />
    );
};

export default PeoplePage;
