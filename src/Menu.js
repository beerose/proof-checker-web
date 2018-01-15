import React, { Component } from 'react';
import './App.css';
import { Menu } from 'semantic-ui-react';
import ModalRules from './ModalRules';
import Examples from './Examples';
import Syntax from './Syntax';

export default class CustomMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  onCloseModal = () => {
    this.setState({ activeItem: '' });
  };
  openGithub = () => {
    window.open('https://github.com/blackdahila/proof-checker-web');
  };
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu compasct>
          <Menu.Item name="Rules" active={activeItem === 'Natural deduction rules'} onClick={this.handleItemClick} />
          <Menu.Item name="Syntax" active={activeItem === 'Syntax'} onClick={this.handleItemClick} />
          <Menu.Item name="Examples" active={activeItem === 'Examples'} onClick={this.handleItemClick} />
          <Menu.Item name="Source code" active={activeItem === 'Source code'} onClick={this.openGithub} />
        </Menu>
        <ModalRules active={this.state.activeItem === 'Rules'} onClose={this.onCloseModal} />
        <Examples active={this.state.activeItem === 'Examples'} onClose={this.onCloseModal} />
        <Syntax active={this.state.activeItem === 'Syntax'} onClose={this.onCloseModal} />
      </div>
    );
  }
}
