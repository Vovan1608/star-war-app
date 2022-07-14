import { useParams } from 'react-router-dom';
import { WithSwapiService } from '../hoc-helper';
import ItemDetails, { Record } from '../itemDetails';

const StarshipDetails = (props) => {
    const { id } = useParams();
    const { getData, getImageUrl, children } = props;

    return (
        <ItemDetails
            getData={getData}
            getImageUrl={getImageUrl}
            children={children}
            itemId={id}
        >
            <Record field="model" label="Model: " />
            <Record field="length" label="Length: " />
            <Record field="costInCredits" label="Cost: " />
        </ItemDetails>
    );
};

const mapMethodsToProps = ({ getStarship, getStarshipImage }) => {
    return {
        getData: getStarship,
        getImageUrl: getStarshipImage
    };
};

export default WithSwapiService(mapMethodsToProps)(StarshipDetails);
