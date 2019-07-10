/* eslint-disable class-methods-use-this */
import React from 'react';
import { Title, Title3 } from 'elements';
import { goBackOrReplace } from 'config/browser.history';
import { NotFound, NotFoundButton } from './elements';

class NotFoundPage extends React.PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    goBackOrReplace('/');
  }

  render() {
    return (
      <>
        <NotFound>
          <Title3>OOPS! PAGE NOT FOUND</Title3>
          <Title fontSize="5em">404</Title>
          <Title3>
            WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
          </Title3>
          <NotFoundButton onClick={this.handleClick} className="goBackButton">
            GO BACK
          </NotFoundButton>
        </NotFound>
      </>
    );
  }
}

export default NotFoundPage;
