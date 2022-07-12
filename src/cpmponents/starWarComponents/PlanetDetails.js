import { WithSwapiService } from '../hoc-helper';
import ItemDetails, { Record } from '../itemDetails';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population: " />
            <Record field="rotationPeriod" label="Rotation Period: " />
            <Record field="diameter" label="Diameter: " />
        </ItemDetails>
    );
};

const mapMethodsToProps = ({ getPlanet, getPlanetImage }) => {
    return {
        getData: getPlanet,
        getImageUrl: getPlanetImage
    };
};

export default WithSwapiService(PlanetDetails, mapMethodsToProps);
