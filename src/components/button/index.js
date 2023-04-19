import React from 'react';
import './button.css';

const Button = ({
  type = 'button',
  onClick,
  label,
  disabled,
  variant = 'primary',
  size = 'default',
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button button-${variant} button-size-${size} ${
        fullWidth && 'w-full'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
