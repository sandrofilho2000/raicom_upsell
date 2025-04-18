import { iButton } from '@/interfaces';
import React from 'react';

const Button: React.FC<iButton> = (props) => {
  const { text, icon, classes, callback } = props;
  return (
    <button
      onClick={callback}
      id="menu-toggle"
      type="button"
      style={{borderRadius: '30px'}}
      className={`btn-primary rounded-3xl p-2 px-4 flex items-center gap-2 font-bold text-white  ${classes}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
