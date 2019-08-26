import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import { CUSTOM_TYPES_BUTTONS, STYLE, DEFAULT_TYPES } from '../constants/constants';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { extraClass: STYLE.BUTTON.standard };
  }

  onButtonHover = () => this.setState({ extraClass: STYLE.BUTTON.hover });

  onButtonLeave = () => this.setState({ extraClass: STYLE.BUTTON.standard });

  render() {
    const { customType, onClickAction, isDisabled } = this.props;
    const { extraClass } = this.state;
    return (
      // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      <button
        className={`circular black ui icon button ${!isDisabled && extraClass} no-margin`}
        type="button"
        onMouseOver={this.onButtonHover}
        onMouseLeave={this.onButtonLeave}
        onClick={onClickAction}
        disabled={isDisabled}
      >
        <i className={CUSTOM_TYPES_BUTTONS[customType]} />
      </button>
    );
  }
}

Button.defaultProps = {
  customType: DEFAULT_TYPES.standard,
  onClickAction: null,
  isDisabled: false
};

Button.propTypes = {
  customType: PropTypes.string,
  onClickAction: PropTypes.func,
  isDisabled: PropTypes.bool
};

export default Button;
