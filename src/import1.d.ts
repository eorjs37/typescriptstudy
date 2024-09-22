import { StringValidator } from "./export";
export declare const numberRegexp: RegExp;
export declare class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean;
}
