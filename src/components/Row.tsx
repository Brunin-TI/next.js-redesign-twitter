import React from 'react';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const Row: React.FC<RowProps> = ({ children, ...props }) => {
  return (
    <div className="flex flex-row" {...props}>
      {children}
    </div>
  );
};

export default Row;
