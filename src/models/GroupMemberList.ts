/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of Group Members.
 */
export type GroupMemberList = {
  /**
   * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
   */
  next_page_token?: string;
  /**
   * The number of pages returned for the request made.
   */
  page_count?: number;
  /**
   * **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.
   * @deprecated
   */
  page_number?: number;
  /**
   * The number of records returned with a single API call.
   */
  page_size?: number;
  /**
   * The total number of all the records available across pages.
   */
  total_records?: number;
  /**
   * List of Group member objects.
   */
  members?: Array<{
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
  }>;
};
