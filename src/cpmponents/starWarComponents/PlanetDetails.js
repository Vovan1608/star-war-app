import { useParams } from 'react-router-dom';

import { WithSwapiService } from '../hoc-helper';
import ItemDetails, { Record } from '../itemDetails';

const PlanetDetails = (props) => {
    const { id } = useParams();
    const { getData, getImageUrl, children } = props;

    return (
        <ItemDetails
            getData={getData}
            getImageUrl={getImageUrl}
            children={children}
            itemId={id}
        >
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

export default WithSwapiService(mapMethodsToProps)(PlanetDetails);
