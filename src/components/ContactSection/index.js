import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import Colors from '../../constants/Colors'
import { BoxShadow } from '../../misc/styles'
import FormValidator from '../Form/FormValidator'
import Input from '../Form/Input'
import v from '../Form/Validate'

const Content = styled.div`
  background-color: ${Colors.WHITE};
  padding: 30px;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  min-height: 300px;
  margin-left: 30px;
  margin-right: 30px;
`;

const Side = styled.div`
  width: 25%;
  background-color: red;
  position: relative;
  left: -30px;
  background-color: ${Colors.TURQUOISE_2};
  opacity: 0.2;
  ${BoxShadow}
  
  &:last-child {
    left: 30px;
  }
`;

const Form = styled.form`
  display: block;
  flex-grow: 1;
  background-color: blue;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      message: ''
    };
  }

  updateForm = ({ name, value }) => {
    this.setState({
      [name]: value
    });
  }

  render () {
    const {
      email,
      message
    } = this.state;

    return (
      <Section
        title='Contact me'
        anchor='contact'
        position='right'
        >
        <Content>
          <Side />
          <Form onSubmit={e => e.preventDefault()}>
            <FormValidator>
              {({ isFormValid, validator }) => (
                <div>
                  <Input
                    name='email'
                    validate={v.email}
                    value={email}
                    onChange={this.updateForm}
                    validator={validator}
                    />
                  <button disabled={!isFormValid}>send</button>
                </div>
              )}
            </FormValidator>
          </Form>
          <Side />
        </Content>
      </Section>
    );
  }
};
