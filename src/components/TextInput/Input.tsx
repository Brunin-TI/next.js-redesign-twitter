/* eslint-disable no-unused-vars */
import React from 'react';
import { classNameBuilder } from '../../helpers/ClassNameBuilder';

type InputType = 'text' | 'password' | 'email';
export interface InputProps {
  type?: InputType;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  className,
  onChange,
  disabled,
  ...props
}) => {
  return (
    <input
      className={classNameBuilder(
        className ??
          'form-input shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ',
        disabled ? 'text-gray-500' : 'text-gray-900'
      )}
      onChange={(event) => onChange?.(event.target.value, event)}
      disabled={disabled}
      {...props}
    />
  );
};
