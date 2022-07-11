import ItemDetails, { Record } from '../itemDetails';
import SwapiService from '../../services/swapiService';

const {
    getPlanet,
    getPersone,
    getStarship,
    getPlanetImage,
    getPersonImage,
    getStarshipImage
} = new SwapiService();

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPersone}
            getImageUrl={getPersonImage}
        >
            <Record field="gender" label="Gender: " />
            <Record field="eyeColor" label="Eye Color: " />
            <Record field="birthYear" label="Birth Year: " />
        </ItemDetails>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
        >
            <Record field="population" label="Population: " />
            <Record field="rotationPeriod" label="Rotation Period: " />
            <Record field="diameter" label="Diameter: " />
        </ItemDetails>
    );
};

const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}
        >
            <Record field="model" label="Model: " />
            <Record field="length" label="Length: " />
            <Record field="costInCredits" label="Cost: " />
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};

