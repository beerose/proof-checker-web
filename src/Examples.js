import React, { Component } from 'react';
import './App.css';
import { Menu, Modal, Button, Image, Header, Icon } from 'semantic-ui-react';

export default class Examples extends Component {
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
            <Modal.Header>Examples</Modal.Header>
            <Modal.Content image scrolling>
            <p> <b>goal example_1: p => ~~p <br />
               proof <br />
               [p: <br />
                  [~p: F]; <br />
              ~~p]; <br />
               p => ~~p; <br /> 
               end.</b>
             <br /> <br />
             In the above proof we have a frame with a premise p and then in the nested frame ~p is introduced. Since we have assumptions p and ~p the rule elimination of negation allows us to infer F and the rule introducing of negation leads us to conclusion ~~p. As the second element of the proof we have the frame's conclusion p => ~~p which is what we wanted to prove.
             <br /> <br /> <br />
            <b> goal example_2: p /\ q => q /\ p <br />
                proof <br />
                [p /\ q:<br />
                  q;<br />
                  p;<br />
                  q /\ p];<br />
                p /\ q => q /\ p<br />
                end.</b><br />
                <br /><br />
            In the above example we have a proof consisting two elements. The first one is the frame with premise p /&#92 q. Then we have q and p which are both inferred using the rule elimination of conjunction. They are now our local proven facts we can use further. In the next line there is applied rule introducing of conjunction, so that we have q /&#92 p. In the second element of the proof we just have the conclusion of the frame. 
            <br /> <br />
            <b>
            goal example_3: p \/ q => q \/ p<br />
            proof<br />
            [p \/ q:<br />
              [p: q \/ p];<br />
              p => q \/ p;<br />
              [q: q \/ p];<br />
              q => q \/ p;<br />
              q \/ p];<br />
            p \/ q => q \/ p<br />
            end.<br />
            </b><br /><br />
            Now we have a little bit more complex proof with some nested frames inside. As in previous example it also consists two elements and first we are going to focus on the frame. It infers the premise p \&#92 q and the first frames's formula is an another frame in which the fact q \&#92 p can be deduced using premise p and the rule introducing of disjunction. Then we have conclusion of the first nested frame. Next line look similar to the one that was just described with the same rule introducing of disjunction used to conclude q => q \&#92 p. Now we have three facts: p \&#92 q from premise, p => q \&#92 p and q => q \&#92 p. Due to the facts and the rule elimination of conjunction it is possible to infer q \&#92 p. Thus we evaluated correctness of the frame we have its conclusion p \&#92 q => q \&#92 p.
            </p>

            </Modal.Content>
          </Modal>  
        )
    }
}