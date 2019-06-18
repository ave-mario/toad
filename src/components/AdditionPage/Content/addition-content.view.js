/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Header, Title3 } from '../../../elements';
import { TableRow, TableCell, CloseIcon } from '../elements/table.elements';

class AdditionTable extends Component {
  componentDidMount() {
    const { load } = this.props;
    load();

    this.handleClick = this.handleClick.bind(this);
    this.renderAddition = this.renderAddition.bind(this);
  }

  handleClick(id) {
    const { change } = this.props;
    change(id, { name: 'dsrtf', price: 1.0 });
  }

  renderAddition(addition, index) {
    return (
      <TableRow key={addition.name} mgHeight2>
        <TableCell color="#f4f2f1" xs2>
          {index + 1}
        </TableCell>
        <TableCell xs4>{addition.name}</TableCell>
        <TableCell xs4>{addition.price}</TableCell>
        <TableCell
          xs2
          mg4
          color="#bd5932"
          onClick={() => this.handleClick(addition._id)}
        >
          <CloseIcon />
        </TableCell>
      </TableRow>
    );
  }

  render() {
    const { t, data, total } = this.props;
    return (
      <>
        <Header>
          <Title3>
            {t('labels.total')} : {total}
          </Title3>
        </Header>
        <section>
          <TableRow mgHeight2>
            <TableCell color="#f4f2f1" xs2>
              №
            </TableCell>
            <TableCell xs4 color="#f4f2f1">
              {t('labels.Name')}
            </TableCell>
            <TableCell xs4 color="#f4f2f1">
              {t('labels.Price')}
            </TableCell>
          </TableRow>
          {data.map(this.renderAddition)}
        </section>
      </>
    );
  }
}

AdditionTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired
    })
  ).isRequired,
  //   page: PropTypes.number.isRequired,
  //   limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  load: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired
};

export default withTranslation('Addition')(AdditionTable);
