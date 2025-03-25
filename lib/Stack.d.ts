import React, { CSSProperties } from 'react';
export type StackProps = React.HTMLAttributes<HTMLDivElement> & {
    gap?: number;
    style?: CSSProperties;
};
export declare const Stack: React.FC<StackProps>;
