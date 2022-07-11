import WithData from '../hoc-helper/WithData';
import SwapiService from '../../services/swapiService';

import './ItemList.css';

const ItemList = ({ onItemSelected, data, children: renderLabel }) => {
    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

const { getAllPeople } = new SwapiService();

export default WithData(ItemList, getAllPeople);
