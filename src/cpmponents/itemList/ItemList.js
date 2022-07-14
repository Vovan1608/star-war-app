import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ItemList.css';

const ItemList = ({ onItemSelected = () => { }, data, children: renderLabel }) => {
    const items = data.map((item) => {
        const { id, category } = item;
        const label = renderLabel(item);

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}
            >
                <Link to={`/${category}/${id}`} >
                    {label}
                </Link>
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;
