/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Group member object.
 */
export type GroupMember = {
  /**
   * User email.
   */
  email?: string;
  /**
   * User first name.
   */
  first_name?: string;
  /**
   * User ID.
   */
  id?: string;
  /**
   * User last name.
   */
  last_name?: string;
  /**
   * User type.<br>
   * `1` - Basic<br> `2` - Licensed<br>
   * `3` - On-prem
   */
  type?: number;
};
