/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Invite links response.
 */
export type InviteLinkResponse = {
  /**
   * The attendee list.
   */
  attendees?: Array<{
    /**
     * The URL to join the meeting.
     */
    join_url?: string;
    /**
     * The user's display name.
     */
    name?: string;
  }>;
};
