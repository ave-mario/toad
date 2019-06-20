import React from 'react';
import PropTypes from 'prop-types';
import { List, NavLink } from '../../../elements/list';

const ListMenu = ({ list }) => {
  const renderLink = li => (
    <NavLink to={li.link} exact key={li.link}>
      {li.name}
    </NavLink>
  );

  return <List relative>{list.map(renderLink)}</List>;
};

ListMenu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListMenu;
