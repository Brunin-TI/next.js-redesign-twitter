/* eslint-disable no-unused-vars */
import React from 'react';
import { classNameBuilder } from '../../helpers/ClassNameBuilder';
import { Text } from '../Text/Text';
import { Input } from './Input';

export type TextInputType = 'text' | 'password' | 'email';
export interface TextInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  id?: string;
  name?: string;
  label?: string;
  type?: TextInputType;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  error?: string;
  description?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  description,
  required,
  error,
  ...props
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className={classNameBuilder(
            required ? '' : 'after:hidden',
            'block text-sm text-gray-700',
            'after:ml-0.5 after:text-red-300 after:content-["*"]'
          )}
        >
          {label}
        </label>
        {description}
      </div>
      <div className="mt-1">
        <Input {...props} />
      </div>
      <div className="h-0 -mt-1">
        <Text className="text-2xs text-red-400">{error}</Text>
      </div>
    </div>
  );
};
