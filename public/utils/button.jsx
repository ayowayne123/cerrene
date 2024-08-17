'use client'
import PropTypes from 'prop-types';

const Button = ({ className = '', type = 'primary', onClick, children }) => {
  // Determine the base classes based on button type (primary or secondary)
  const baseClasses = type === 'primary' 
    ? 'bg-[#F07127] text-white border-[#F07127]' 
    : 'bg-transparent text-[#F07127] border-[#F07127]';

  // Hover effects based on button type
  const hoverClasses = type === 'primary'
    ? 'hover:bg-white hover:text-[#F07127] hover:border-[#F07127] transition duration-300 ease-in-out'
    : 'hover:bg-[#F07127] hover:text-white hover:border-transparent transition duration-300 ease-in-out';

  return (
    <button 
      className={`px-6 py-2 capitalize border-2 ${baseClasses} ${hoverClasses} ${className}`} 
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
