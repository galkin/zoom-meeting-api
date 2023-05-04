/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about the account's managed domains.
 */
export type DomainsList = {
  /**
   * Information about the managed domains.
   */
  domains?: Array<{
    /**
     * The domain's name.
     */
    domain?: string;
    /**
     * The domain's status.
     */
    status?: string;
  }>;
  /**
   * The total number of records returned.
   */
  total_records?: number;
};
