import React from 'react';
import styled from 'styled-components';
import Section from '../Section'
import FontSizes from '../../constants/FontSizes'
import Colors from '../../constants/Colors'
import { BoxShadow, NoSelect } from '../../misc/styles'

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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0;
`;

const Input = styled.input`
  border: 2px solid ${p => p.valid ? Colors.TURQUOISE_2 : Colors.RED};
  color: ${Colors.GREY};
  font-size: ${FontSizes.MEDIUM};
  padding: 10px;
  
  &:active,
  &:focus {
    box-shadow: 0 0 0 5px ${Colors.LIGHT_TURQUOISE};
    outline: 0;
  }
  
  &:disabled {
    filter: grayscale(100%);
  }
`;

const Textarea = styled(Input).attrs({
  as: 'textarea'
})`
  margin-bottom: 0;
  resize: none;
  flex-grow: 1;
  min-height: 200px;
`;

const Error = styled.label`
  color: ${Colors.RED};
  font-size: ${FontSizes.SMALL};
  opacity: ${p => p.show ? 1 : 0};
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Button = styled.button`
  border-radius: 2px;
  border: 0;
  font-size: ${FontSizes.MEDIUM};
  padding: 10px;
  flex-grow: 1;
  cursor: pointer;
  text-align: center;
  transition: all 0.15s ease-in-out;
  color: white;
  background-color: ${Colors.TURQUOISE_2};
  text-shadow: 0 -2px rgba(0, 0, 0, 0.1);
  ${NoSelect}
  
  &:hover,
  &:focus {
    &:not(:disabled) {
      background-color: ${Colors.TURQUOISE};
      color: white;
      ${BoxShadow}
    }
  }
  
  &:active:not(:disabled) {
    opacity: 0.8;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Hidden = styled.div`
  display: none;
`;

export default class extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      message: '',
      hasSent: false,
      isSending: false
    };
  }

  updateForm = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isSending: true
    });

    const data = {
      email: this.state.email,
      message: this.state.message
    };

    const params = Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`);
    params.unshift('form-name=contact');


    fetch('/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      credentials: 'same-origin',
      body: params.join('&')
    })
    .then(() => {
      this.setState({
        hasSent: true,
        isSending: false
      });
    });
  }

  render () {
    const {
      email,
      message,
      hasSent,
      isSending
    } = this.state;

    const isEmailValid = !email.length || (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email));
    const isMessageValid = !message.length || (message.trim().length >= 10 && message.trim().length <= 500);
    const isButtonDisabled = !email.length || !message.length || !isEmailValid || !isMessageValid || hasSent || isSending;

    return (
      <Section
        title='Contact me'
        anchor='contact'
        position='right'
        >
        <Content>
          <Side />
          <Form
            disabled={true || hasSent || isSending}
            onSubmit={this.handleSubmit}
            >
            {/* EMAIL */}
            <Input
              value={email}
              disabled={hasSent || isSending}
              placeholder='Your email'
              name='email'
              onChange={this.updateForm}
              valid={isEmailValid}
              />
            <Error show={!isEmailValid}>
              This is not a valid email
            </Error>

            {/* MESSAGE */}
            <Textarea
              value={message}
              disabled={hasSent || isSending}
              placeholder='Your message'
              name='message'
              onChange={this.updateForm}
              valid={isMessageValid}
              />
            <Error show={!isMessageValid}>
              Your message must be between 10 and 500 characters
            </Error>
            <Button disabled={isButtonDisabled}>
              {hasSent
                ? 'Message sent !'
                : (isSending ? 'Sending...' : 'Send')
              }
            </Button>
          </Form>
          <Side />

          {/* NETLIFY FORM */}
          <Hidden dangerouslySetInnerHTML={{__html: `
            <form name='contact' netlify netlify-honeypot='bot-field' hidden>
              <input type='text' name='email' />
              <textarea name="message"></textarea>
            </form>
            `}}>
          </Hidden>
        </Content>
      </Section>
    );
  }
};
