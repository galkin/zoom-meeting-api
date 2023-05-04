/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of a Role Members
 */
export type RoleMembersList = {
  /**
   * List of a Role Members
   */
  members?: Array<{
    /**
     * Member Department
     */
    department?: string;
    /**
     * Member Email
     */
    email?: string;
    /**
     * Member First Name
     */
    first_name?: string;
    /**
     * Member ID
     */
    id?: string;
    /**
     * Member Last Name
     */
    last_name?: string;
    /**
     * Member Type
     */
    type?: number;
  }>;
  /**
   * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
   */
  next_page_token?: string;
  /**
   * The number of pages returned for the request made.
   */
  page_count?: number;
  /**
   * The page number of the current results.
   */
  page_number?: number;
  /**
   * The number of records returned within a single API call.
   */
  page_size?: number;
  /**
   * The total number of all the records available across pages.
   */
  total_records?: number;
};
