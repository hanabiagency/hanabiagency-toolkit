import React, { CSSProperties } from 'react';

export type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: number;
  style?: CSSProperties;
};

export const Stack: React.FC<StackProps> = ({ children, gap = 0, style = {}, ...props }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: gap,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}; 