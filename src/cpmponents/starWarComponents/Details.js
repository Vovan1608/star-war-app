import ItemDetails, { Record } from '../itemDetails';
import { SwapiServiceConsumer } from '../swapiServiceContext';

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPersone, getPersonImage }) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetImage }) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};

