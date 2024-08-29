import greenDot from '@/public/icons/greenDot.svg'
import Image from 'next/image';
import React from 'react';

const Dots = ({className}) => {
  

  return (
    <div className={`absolute  ${className}`}>
      <Image src={greenDot} alt='' width={253}  height={85}/>
    </div>
  );
};



export default Dots;
