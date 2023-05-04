/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Pagination object.
 */
export type PaginationToken4IMChat = {
  /**
   * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
   */
  next_page_token?: string;
  /**
   * The amount of records returns within a single API call.
   */
  page_size?: number;
};
