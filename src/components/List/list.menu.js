/* eslint-disable no-unused-expressions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from '../../elements/list';
import colors from '../../enums/colors.enums';

const ListMenu = ({ list }) => {
  return (
    <List>
      {list.map(li => {
        return (
          <NavLink
            to={li.link}
            exact
            style={{
              'text-decoration': 'none',
              color: colors.black,
              border: `1px solid ${colors.grey}`,
              padding: '8px'
            }}
            activeStyle={{
              background: colors.grey
            }}
          >
            {li.name}
          </NavLink>
        );
      })}
    </List>
  );
};

ListMenu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ListMenu;
