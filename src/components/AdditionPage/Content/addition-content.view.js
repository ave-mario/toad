/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Header, Text } from '../../../elements';
import {
  TableRow,
  TableCell,
  TableButton,
  Content
} from '../elements/table.elements';
import EditModal from '../EditModal';

class AdditionTable extends Component {
  constructor() {
    super();

    this.state = {
      isShowModal: false,
      addition: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderAddition = this.renderAddition.bind(this);
  }

  componentDidMount() {
    const { load } = this.props;
    load();
  }

  handleClick(addition = null) {
    this.setState(prevState => ({
      isShowModal: !prevState.isShowModal,
      addition
    }));
  }

  renderAddition(addition, index) {
    return (
      <TableRow key={addition.name}>
        <TableCell xs1>{index + 1}</TableCell>
        <TableCell xs4 padding>
          {addition.name}
        </TableCell>
        <TableCell xs2 padding>
          {addition.price}
        </TableCell>
        <TableCell xs4>
          <TableButton onClick={() => this.handleClick(addition)}>
            Edit
          </TableButton>
          <TableButton red>Delete</TableButton>
        </TableCell>
      </TableRow>
    );
  }

  render() {
    const { t, data, total } = this.props;
    const { isShowModal, addition } = this.state;
    return (
      <Content>
        <Header>
          <Text>
            {t('labels.total')} : {total}
          </Text>
        </Header>
        <div>
          {isShowModal && (
            <EditModal close={this.handleClick} addition={addition} />
          )}
          <TableRow mgHeight2>
            <TableCell yellow>№</TableCell>
            <TableCell xs4 yellow padding>
              {t('labels.Name')}
            </TableCell>
            <TableCell xs2 yellow padding>
              {t('labels.Price')}
            </TableCell>
            <TableCell xs4 yellow>
              {t('labels.Controls')}
            </TableCell>
          </TableRow>
          {data.map(this.renderAddition)}
        </div>
      </Content>
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
  t: PropTypes.func.isRequired
};

export default withTranslation('Addition')(AdditionTable);
