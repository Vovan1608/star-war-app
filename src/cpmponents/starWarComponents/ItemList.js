import ItemList from '../itemList';
// import SwapiService from '../../services/swapiService';
import { WithData, WithSwapiService } from '../hoc-helper';

// const {
//     getAllPeople,
//     getAllPlanets,
//     getAllStarships
// } = new SwapiService();

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

const mapPersonMethodsToProps = ({ getAllPeople }) => {
    return {
        getData: getAllPeople,
    };
};

const PersonList = WithSwapiService(
    WithData(WithChildFunction(ItemList, renderNameEyeColorBirthDay)),
    mapPersonMethodsToProps
);

const mapPlanetMethodsToProps = ({ getAllPlanets }) => {
    return {
        getData: getAllPlanets,
    };
};

const PlanetList = WithSwapiService(
    WithData(WithChildFunction(ItemList, renderName)),
    mapPlanetMethodsToProps
);

const mapStarshipMethodsToProps = ({ getAllStarships }) => {
    return {
        getData: getAllStarships,
    };
};

const StarshipList = WithSwapiService(
    WithData(WithChildFunction(ItemList, renderName)),
    mapStarshipMethodsToProps
);

export {
    PersonList,
    PlanetList,
    StarshipList
};
