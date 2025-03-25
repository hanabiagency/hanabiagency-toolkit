import React, { CSSProperties } from 'react';

export type RowProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: number;
  style?: CSSProperties;
};

export const Row: React.FC<RowProps> = ({ children, gap = 0, style = {}, ...props }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: gap,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}; 