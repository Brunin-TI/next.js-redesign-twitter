import React from 'react';

export interface ColumnProps {
  className?: string;
  children: React.ReactNode;
}
export const Column: React.FC<ColumnProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={`${className} flex flex-col`} {...props}>
      {children}
    </div>
  );
};
