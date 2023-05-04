/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of Accounts.
 */
export type AccountList = {
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
   * List of Account objects.
   */
  accounts?: Array<{
    /**
     * Account name.
     */
    account_name?: string;
    /**
     * Account Number of the account.
     */
    account_number?: string;
    /**
     * Account type.
     */
    account_type?: string;
    /**
     * Account creation date and time.
     */
    created_at?: string;
    /**
     * Account ID.
     */
    id?: string;
    /**
     * Account owner email.
     */
    owner_email?: string;
    /**
     * Account seats.
     */
    seats?: number;
    /**
     * Account subscription end date and time.
     */
    subscription_end_time?: string;
    /**
     * Account subscription start date and time.
     */
    subscription_start_time?: string;
  }>;
};
