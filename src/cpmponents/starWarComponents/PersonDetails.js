import { useParams } from 'react-router-dom';

import { WithSwapiService } from '../hoc-helper';
import ItemDetails, { Record } from '../itemDetails';

const PersonDetails = (props) => {
    const { id } = useParams();
    const { getData, getImageUrl, children } = props;

    return (
        <ItemDetails
            getData={getData}
            getImageUrl={getImageUrl}
            children={children}
            itemId={id}
        >
            <Record field="gender" label="Gender: " />
            <Record field="eyeColor" label="Eye Color: " />
            <Record field="birthYear" label="Birth Year: " />
        </ItemDetails>
    );
};

const mapMethodsToProps = ({ getPersone, getPersonImage }) => {
    return {
        getData: getPersone,
        getImageUrl: getPersonImage
    };
};

export default WithSwapiService(mapMethodsToProps)(PersonDetails);
