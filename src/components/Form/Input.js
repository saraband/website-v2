/*
 *	BaseInput.js
 *	------------
 *	Custom input that accepts validation rules and can be
 *	connected to a validator.
 *
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { validateValue } from './Validate';
import FontSizes from '../../constants/FontSizes'
import Colors from '../../constants/Colors'

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledInput = styled.input`
  border-radius: 2px;
  padding: 8px 12px 8px 12px;
  font-size: ${FontSizes.MEDIUM};
  transition: all 0.15s ease-in-out;
  width: 100%;

  &:focus,
  &:active,
  &:hover {
    background-color: red;
  }
  
  /* VALID INPUT ? */
  ${p => {
    if (p.showBorder) {
      return p.validBorder
        ? `border-color: ${Colors.BLUE} !important;`
        : `border-color: ${Colors.RED} !important;`;
    }
  }}
  /* ICON */
  ${p => p.icon
    ? `
        background-image: url(${p.icon});
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: right center;
      `
    : ''
  }
  
  /* CUSTOM INPUT STYLE */
  ${p => p.inputStyle}
`;

const Label = styled.label`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 10px;
  font-size: ${FontSizes.SMALL};
  color: ${Colors.WHITE};
`;

export default class Input extends React.Component {
  // TODO: troubleshoot this
  // TODO maybe it has side effects
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return this.props.value !== nextProps.value ||
      this.props.icon !== nextProps.icon;
  }

  constructor (props) {
    super(props);

    // Validate the start value
    const isValid = validateValue(props.validate, props.value);
    this.state = {
      isValid: isValid,

      // TODO: this state should not belong to the state ?
      hasTypedAnythingYet: !!props.value
    };

    // If a validator is connected, we notify it
    // of the validity of the start value
    if (props.validator) {
      props.validator.onSubscribe({
        name: props.name,
        validity: isValid
      });
    }
  }

  componentWillUnmount () {
    const {
      name,
      validator
    } = this.props;

    if (validator) {
      validator.onUnsubscribe(name);
    }
  }

  // This is called whenever the input value changes
  // (i.e. when native onChange event is called)
  handleChange = (event) => {
    const newValue = event.target.value;
    const name = event.target.name;

    const {
      validate,
      validator,
      onChange
    } = this.props;

    // Check validity of the new value
    const isValid = validateValue(validate, newValue);

    const changeEvent = {
      name,
      value: newValue,
      validity: isValid
    };

    // We trigger the onChange prop
    onChange && onChange(changeEvent);

    // We update the internal validity state of the input
    this.setState({
      isValid,
      hasTypedAnythingYet: true
    });

    // If the input is connected to a validator,
    // we notify the change so it can update the global
    // validity of the form
    validator && validator.onChange(changeEvent);
  };

  render () {
    const {
      // These props are not used but should
      // not be passed down, so we extract them here
      onChange,
      validator,

      className,
      validate,
      errorLabel,
      ...rest
    } = this.props;

    const {
      isValid,
      hasTypedAnythingYet
    } = this.state;

    return (
      <Container className={className}>
        <StyledInput
          onChange={this.handleChange}
          {...rest}

          // styled-component props
          showBorder={hasTypedAnythingYet && validate}
          validBorder={isValid}
          />
        {!isValid && hasTypedAnythingYet &&
          <Label>{errorLabel}</Label>
        }
      </Container>
    );
  }
};

Input.propTypes = {
  icon: PropTypes.string,
  autoComplete: PropTypes.string,
  errorLabel: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  validate: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.PropTypes.arrayOf([PropTypes.func])
  ]),
  validator: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onSubscribe: PropTypes.func.isRequired,
    onUnsubscribe: PropTypes.func.isRequired
  })
};

Input.defaultProps = {
  autoComplete: 'off',
  errorLabel: 'This input is not valid',
  type: 'text'
};