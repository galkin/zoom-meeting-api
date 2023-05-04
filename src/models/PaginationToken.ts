/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Pagination object.
 */
export type PaginationToken = {
  /**
   * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
   */
  next_page_token?: string;
  /**
   * The number of pages returned for the request made.
   */
  page_count?: number;
  /**
   * The number of records returned within a single API call.
   */
  page_size?: number;
  /**
   * The number of all records available across pages.
   */
  total_records?: number;
};
