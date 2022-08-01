import React from 'react';
interface TextProps extends React.SVGProps<SVGTextElement> {
  className: string;
  children?: React.ReactNode;
}
export const Text: React.FC<TextProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <text className={className} {...props}>
      {children}
    </text>
  );
};
