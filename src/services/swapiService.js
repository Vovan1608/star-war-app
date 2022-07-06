export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}/${url}`);
        const body = await res.json();

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
        }

        return body;
    }

    async getAllPeople() {
        const res = await this.getResource('people');

        return res.results.map(this._transformPerson);
    }

    async getPersone(id) {
        const person = await this.getResource(`/people/${id}`);

        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResource('planets');

        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);

        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResource('starships');

        return res.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}`);

        return this._transformStarship(starship);
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
        costInCredits
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
            costInCredits
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
