import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Header, Text } from 'elements';
import {
  TableRow,
  TableCell,
  TableButton,
  Content
} from '../elements/table.elements';
import EditModal from '../EditModal';
import DeleteModal from '../DeleteModal';

class AdditionTable extends Component {
  constructor() {
    super();

    this.state = {
      isShowModalEdit: false,
      isShowModalRemove: false,
      addition: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderAddition = this.renderAddition.bind(this);
  }

  componentDidMount() {
    const { load } = this.props;
    load();
  }

  handleClick(name, addition = null) {
    this.setState(prevState => ({
      [name]: !prevState[name],
      addition
    }));
  }

  renderAddition(addition, index) {
    const { _id, price, name } = addition;
    return (
      <TableRow key={_id}>
        <TableCell xs1>{index + 1}</TableCell>
        <TableCell xs4 padding>
          {name}
        </TableCell>
        <TableCell xs2 padding>
          {price}
        </TableCell>
        <TableCell xs4>
          <TableButton
            id={`${_id}edit`}
            onClick={() => this.handleClick('isShowModalEdit', addition)}
          >
            Edit
          </TableButton>
          <TableButton
            red
            id={`${_id}delete`}
            onClick={() => this.handleClick('isShowModalRemove', addition)}
          >
            Delete
          </TableButton>
        </TableCell>
      </TableRow>
    );
  }

  render() {
    const { t, docs, total } = this.props;
    const { isShowModalEdit, isShowModalRemove, addition } = this.state;
    return (
      <Content id="addition-table">
        <Header>
          <Text>
            {t('labels.total')} : {total}
          </Text>
        </Header>
        <div>
          {isShowModalEdit && (
            <EditModal
              close={() => this.handleClick('isShowModalEdit')}
              addition={addition}
            />
          )}
          {isShowModalRemove && (
            <DeleteModal
              close={() => this.handleClick('isShowModalRemove')}
              addition={addition}
            />
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
          {docs.map(this.renderAddition)}
        </div>
      </Content>
    );
  }
}

AdditionTable.propTypes = {
  docs: PropTypes.arrayOf(
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
