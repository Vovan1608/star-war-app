import { WithSwapiService } from '../hoc-helper';
import ItemDetails, { Record } from '../itemDetails';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
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

export default WithSwapiService(PersonDetails, mapMethodsToProps);
