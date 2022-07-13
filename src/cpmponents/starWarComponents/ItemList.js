import ItemList from '../itemList';
import {
    compose,
    WithData,
    WithSwapiService,
    WithChildFunction
} from '../hoc-helper';

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

const PersonList = compose(
    WithSwapiService(mapPersonMethodsToProps),
    WithData,
    WithChildFunction(renderNameEyeColorBirthDay)
)(ItemList);

const mapPlanetMethodsToProps = ({ getAllPlanets }) => {
    return {
        getData: getAllPlanets,
    };
};

const PlanetList = compose(
    WithSwapiService(mapPlanetMethodsToProps),
    WithData,
    WithChildFunction(renderName)
)(ItemList);

const mapStarshipMethodsToProps = ({ getAllStarships }) => {
    return {
        getData: getAllStarships,
    };
};

const StarshipList = compose(
    WithSwapiService(mapStarshipMethodsToProps),
    WithData,
    WithChildFunction(renderName)


)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};
