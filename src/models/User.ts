/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The user object represents a specific user on Zoom.
 */
export type User = {
  /**
   * User create time.
   */
  created_at?: string;
  /**
   * Department.
   */
  dept?: string;
  /**
   * User's email address.
   */
  email: string;
  /**
   * User's first name.
   */
  first_name?: string;
  /**
   * User last login client version.
   */
  last_client_version?: string;
  /**
   * User last login time.
   */
  last_login_time?: string;
  /**
   * User's last name.
   */
  last_name?: string;
  /**
   * [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi).
   */
  pmi?: number;
  /**
   * User's [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) name.
   */
  role_name?: string;
  /**
   * The time zone of the user.
   */
  timezone?: string;
  /**
   * User's plan type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
   */
  type: User.type;
  /**
   * Use [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi) for instant meetings.
   */
  use_pmi?: boolean;
};

export namespace User {
  /**
   * User's plan type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
   */
  export enum type {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_99' = 99,
  }
}
