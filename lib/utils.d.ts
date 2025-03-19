import { SerializedStyles } from "@emotion/react";
export declare type deviceProp<T> = {
    [device: number]: T;
};
export declare type mediaProp<T> = [T, deviceProp<T>];
export declare type responsiveProp<T> = T | mediaProp<T>;
export declare type atomicFunction = (prop: any) => SerializedStyles | null;
export declare function applyResponsiveCss(atomicFunction: atomicFunction): (responsiveProp: any) => SerializedStyles | (SerializedStyles | SerializedStyles[] | null)[] | null;
