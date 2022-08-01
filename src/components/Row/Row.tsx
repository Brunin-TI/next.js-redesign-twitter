import React from 'react';

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const Row: React.FC<RowProps> = ({ children, ...props }) => {
  return (
    <div className="flex flex-row" {...props}>
      {children}
    </div>
  );
};
