/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of Meetings
 */
export type MeetingInstances = {
  /**
   * List of ended meeting instances.
   */
  meetings?: Array<{
    /**
     * Start time
     */
    start_time?: string;
    /**
     * Meeting UUID. Unique meeting ID. Each meeting instance will generate its own Meeting UUID (i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
     *
     *
     */
    uuid?: string;
  }>;
};
