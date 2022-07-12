export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}/${url}`);
        const body = await res.json();

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
        }

        return body;
    }

    getAllPeople = async () => {
        const res = await this.getResource('people');

        return res.results.map(this._transformPerson);
    }

    getPersone = async (id) => {
        const person = await this.getResource(`/people/${id}`);

        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const res = await this.getResource('planets');

        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);

        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const res = await this.getResource('starships');

        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);

        return this._transformStarship(starship);
    }

    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    }

    getPersonImage = ({ id }) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    }

    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;

        return item.match(idRegExp)[1];
    }

    _transformPlanet = ({
        url,
        name,
        diameter,
        population,
        rotation_period
    }) => {
        const id = this._extractId(url);

        return {
            id,
            name,
            diameter,
            population,
            rotationPeriod: rotation_period,
        }
    }

    _transformStarship = ({
        url,
        name,
        crew,
        model,
        length,
        passengers,
        manufacturer,
        cargoCapacity,
        cost_in_credits
    }) => {
        const id = this._extractId(url);

        return {
            id,
            name,
            crew,
            model,
            length,
            passengers,
            manufacturer,
            cargoCapacity,
            costInCredits: cost_in_credits
        };
    }

    _transformPerson = ({
        url,
        name,
        gender,
        eye_color,
        birth_year
    }) => {
        const id = this._extractId(url);

        return {
            id,
            name,
            gender,
            eyeColor: eye_color,
            birthYear: birth_year
        };
    }
}
