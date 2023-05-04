/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of webinars.
 */
export type WebinarInstances = {
  /**
   * List of ended webinar instances.
   */
  webinars?: Array<{
    /**
     * Start time.
     */
    start_time?: string;
    /**
     * Webinar UUID.
     */
    uuid?: string;
  }>;
};
