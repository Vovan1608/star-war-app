import ItemList from '../itemList';
import { WithData } from '../hoc-helper';
import SwapiService from '../../services/swapiService';

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = new SwapiService();

const WithChildFunction = (Component, fn) => {
    return (props) => {
        return (
            <Component {...props}>
                {fn}
            </Component>
        );
    };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderNameEyeColorBirthDay = ({ name, eyeColor, birthYear }) => {
    return (
        <span>{name} ({eyeColor} {birthYear})</span>
    );
};

const PersonList = WithData(
    WithChildFunction(ItemList, renderNameEyeColorBirthDay),
    getAllPeople
);

const PlanetList = WithData(
    WithChildFunction(ItemList, renderName),
    getAllPlanets
);

const StarshipList = WithData(
    WithChildFunction(ItemList, renderName),
    getAllStarships
);

export {
    PersonList,
    PlanetList,
    StarshipList
};
