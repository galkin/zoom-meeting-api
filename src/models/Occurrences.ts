/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Array of occurrence objects.
 */
export type Occurrences = Array<{
  /**
   * Duration.
   */
  duration?: number;
  /**
   * Occurrence ID: Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences.
   */
  occurrence_id?: string;
  /**
   * Start time.
   */
  start_time?: string;
  /**
   * Occurrence status.
   */
  status?: string;
}>;
