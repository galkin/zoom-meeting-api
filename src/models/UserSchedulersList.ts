/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of user's schedulers.
 */
export type UserSchedulersList = {
  /**
   * List of users for whom the current user can schedule meetings.
   */
  schedulers?: Array<{
    /**
     * Email address of the scheduler.
     */
    email?: string;
    /**
     * Unique Identifier (User ID) of the Scheduler.
     */
    id?: string;
    /**
     * PMI of the meeting host in long (int64) format.
     */
    pmi?: number;
  }>;
};
