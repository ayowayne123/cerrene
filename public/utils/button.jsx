'use client'
import PropTypes from 'prop-types';

const Button = ({ className = '', type = 'primary', onClick, children }) => {
  // Determine the base classes based on button type (primary or secondary)
  const baseClasses = type === 'primary' 
    ? ' text-white  bg-cerreneOrange flex items-center justify-center pry-animated-button' 
    : 'bg-transparent text-cerreneOrange border-cerreneOrange flex items-center justify-center border animated-button';



  return (
    <button 
      className={` capitalize ${baseClasses}  ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// PropTypes for type safety
Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
