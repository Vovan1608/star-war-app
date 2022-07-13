import { WithSwapiService } from '../hoc-helper';
import ItemDetails, { Record } from '../itemDetails';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
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
