import React from "react";
import { responsiveProp } from "../utils";
import * as styles from "./styles";
declare type StackProps = {
    gap: responsiveProp<number>;
    align?: responsiveProp<styles.align>;
    children: React.ReactNode;
};
export default function Stack({ gap, align, children }: StackProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
