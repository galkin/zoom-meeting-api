/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The H.323/SIP device object.
 */
export type Device = {
  /**
   * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
   */
  encryption: Device.encryption;
  /**
   * Device IP.
   */
  ip: string;
  /**
   * Device name.
   */
  name: string;
  /**
   * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
   */
  protocol: Device.protocol;
};

export namespace Device {
  /**
   * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
   */
  export enum encryption {
    AUTO = 'auto',
    YES = 'yes',
    NO = 'no',
  }

  /**
   * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
   */
  export enum protocol {
    H_323 = 'H.323',
    SIP = 'SIP',
  }
}
