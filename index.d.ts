import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Line Login
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { LineLogin } from '@ionic-native/line-login';
 *
 *
 * constructor(private lineLogin: LineLogin) { }
 *
 * ...
 *
 *
 * this.lineLogin.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class LineLogin extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    login(): Promise<any>;
    logout(): Promise<any>;
    getProfile(): Promise<any>;
}
