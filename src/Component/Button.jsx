import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const getButtonClasses = () => {
    let classes = `custom-btn btn-${variant} btn-${size}`;
    
    if (disabled) classes += ' disabled';
    if (className) classes += ` ${className}`;
    
    return classes;
  };

  return (
    <button
      type={type}
      className={getButtonClasses()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;