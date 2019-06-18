import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import AdditionForm from './Forms';
import { Header, Title3 } from '../../elements';
import { Card, Content } from '../../elements/content';
import { TableRow, TableCell, CloseIcon } from './elements/table.elements';

const AdditionView = ({ data, total, load, t }) => {
  useEffect(() => {
    load();
  }, false);

  const renderAddition = (addition, index) => {
    return (
      <TableRow key={addition.name} mgHeight2>
        <TableCell color="#f4f2f1" xs2>
          {index + 1}
        </TableCell>
        <TableCell xs4>{addition.name}</TableCell>
        <TableCell xs4>{addition.price}</TableCell>
        <TableCell xs2 mg4 color="#bd5932">
          <CloseIcon />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card padding="50px">
      <Card border padding="0  0 20px 0">
        <AdditionForm />
      </Card>
      <Content relative>
        <Header>
          <Title3>
            {t('labels.total')} : {total}
          </Title3>
        </Header>
        <section>{data.map(renderAddition)}</section>
      </Content>
    </Card>
  );
};

AdditionView.propTypes = {
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

export default withTranslation('Addition')(AdditionView);
