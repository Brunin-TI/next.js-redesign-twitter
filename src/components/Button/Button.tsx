import React from 'react';
import { classNameBuilder } from '../../helpers/ClassNameBuilder';
export interface ButtonProps {
  isDisabled?: boolean;
  onClick?: () => void;
  pending?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    isDisabled,
    onClick,
    pending,
    className = '',
    type,
    children,
  } = props;
  return (
    <button
      className={classNameBuilder(
        'flex items-center justify-center h-14 focus:outline-none bg-[#1D9BF0] rounded-md px-3 py-1 text-white cursor-pointer text-base font-normal',
        'disabled:bg-indigo-50 disabled:text-indigo-100 disabled:cursor-not-allowed disabled:shadow-none',
        className
      )}
      onClick={isDisabled || pending ? undefined : onClick}
      type={type}
      disabled={isDisabled}
    >
      {pending ? <span className="animate-spin">Carregando...</span> : children}
    </button>
  );
};
