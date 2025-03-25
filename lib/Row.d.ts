import React, { CSSProperties } from 'react';
export type RowProps = React.HTMLAttributes<HTMLDivElement> & {
    gap?: number;
    style?: CSSProperties;
};
export declare const Row: React.FC<RowProps>;
