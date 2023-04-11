import React from 'react';
import './button.css';

const Button = ({ type = 'button', onClick, label, disabled, variant="primary", size="default" }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`button button-${variant} button-size-${size}`}>
      {label}
    </button>
  );
};

export default Button;
