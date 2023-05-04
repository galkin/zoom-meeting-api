/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Account object in the account list.
 */
export type AccountListItem = {
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
