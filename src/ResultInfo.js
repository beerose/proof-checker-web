import React, { Component } from 'react';
import { Menu, Modal, Button, Image, Header, Icon } from 'semantic-ui-react';

export default class Syntax extends Component {
    onCloseModal = () => {
      this.setState({ open: false });
    };
    render() {
       let open = this.props.active;
        return (
          <Modal 
            open={open} 
            onClose={this.props.onClose} 
            classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
            closeIcon>
            <Modal.Header>Result</Modal.Header>
            <Modal.Content image scrolling>
            <h3>aaa</h3>
            </Modal.Content>
          </Modal>
        )
    }
}