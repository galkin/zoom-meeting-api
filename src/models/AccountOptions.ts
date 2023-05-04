/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about the account's options.
 */
export type AccountOptions = {
  /**
   * Whether to enable automatic billing renewal.
   */
  billing_auto_renew?: boolean;
  /**
   * A comma-separated list of Meeting Connector IP addresses shared with the sub account. If you do not provide a value for this field, all the Master account's Meeting Connectors will be shared with the sub account.
   *
   * **Note:** You can only use this field if `share_mc` value is `true`.
   */
  meeting_connector_list?: Array<string>;
  /**
   * The account's payee:
   * * `master` — The Master account holder pays.
   * * `sub` - The sub account holder pays.
   *
   * This value defaults to `master`.
   */
  pay_mode?: AccountOptions.pay_mode;
  /**
   * A comma-separated list of VRC IP addresses shared with the sub account. If you do not provide a value for this field, all of the Master account's VRCs will be shared with the sub account.
   *
   * **Note:** You can only use this field if `share_rc` value is `true`.
   */
  room_connector_list?: Array<string>;
  /**
   * Whether to enable the option for a sub account to use the Master account's shared [Meeting Connectors](https://support.zoom.us/hc/en-us/articles/201363093). Meeting Connectors are only available for On-Premise accounts.
   *
   * This value defaults to `false`.
   */
  share_mc?: boolean;
  /**
   * Whether to enable the option for a sub account to use the Master account's shared [Virtual Room Connectors (VRC)](https://support.zoom.us/hc/en-us/articles/202134758-Deploying-the-Virtual-Room-Connector). VRCs are only available for On-premise accounts.
   *
   * This value defaults to `false`.
   */
  share_rc?: boolean;
};

export namespace AccountOptions {
  /**
   * The account's payee:
   * * `master` — The Master account holder pays.
   * * `sub` - The sub account holder pays.
   *
   * This value defaults to `master`.
   */
  export enum pay_mode {
    MASTER = 'master',
    SUB = 'sub',
  }
}
