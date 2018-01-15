import React, { Component } from 'react';
import './App.css';
import './Backend';
import { Input, Button, Form, TextArea, Modal } from 'semantic-ui-react'
import post from './Backend';
import CustomMenu from './menu/index';
import 'semantic-ui-css/semantic.min.css';

const goal = "goal ProofChecker: A"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proof: "",
      open: false,
      result: "",
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleCheckButton = () => {
    const wholeProof = goal + "\n proof \n" + this.state.proof + "\n end.";
    post(wholeProof)
    .then(res => this.setState({result: res.body}))
    .then(this.setState({ open: true }));
  };

  render() {
    const { open } = this.state;
    const handleProofBodyChange = (event) => {
      const proofBody = event.target.value;
      this.setState({ proof : proofBody });
    };
    return (
      <div className="App">
        <CustomMenu />
        <h2> Proof Checker </h2>
        <Form>
          <TextArea autoHeight placeholder='Type proof here' onChange={(e) => {handleProofBodyChange(e)}} />
        </Form>
        <Button disabled={this.state.proof===""} onClick={(e) => this.handleCheckButton(e)}>Check</Button>
        <Modal 
          open={open} 
          onClose={this.onCloseModal} 
          classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
          little>
        <Modal.Header>Result</Modal.Header>
            <Modal.Content image scrolling>
        <h3> {this.state.result === "" ? "Invalid syntax" : this.state.result} </h3>
        </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default App;
