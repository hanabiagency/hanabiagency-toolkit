import React from "react";
import { responsiveProp } from "../utils";
import * as styles from "./styles";
interface RowProps {
    gap: responsiveProp<styles.gap>;
    vGap?: responsiveProp<styles.gap>;
    align?: responsiveProp<styles.align>;
    wrap?: boolean;
    wrapBefore?: number;
    children: React.ReactNode;
}
export default function Row({ gap, vGap, align, wrap, wrapBefore, children, }: RowProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
