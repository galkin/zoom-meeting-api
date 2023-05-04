/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Invite Links
 */
export type InviteLink = {
  /**
   * The attendees list.
   */
  attendees?: Array<{
    /**
     * User display name.
     */
    name: string;
  }>;
  /**
   * The invite link's expiration time, in seconds.
   *
   * This value defaults to `7200`.
   */
  ttl?: number;
};
