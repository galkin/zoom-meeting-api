/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of TSP accounts.
 */
export type TSP = {
  /**
   * Conference code: numeric value, length is less than 16.
   */
  conference_code: string;
  /**
   * List of dial in numbers.
   */
  dial_in_numbers?: Array<{
    /**
     * Country code.
     */
    code?: string;
    /**
     * Country Label, if passed, will display in place of code.
     */
    country_label?: string;
    /**
     * Dial-in number: length is less than 16.
     */
    number?: string;
    /**
     * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>
     * `media_link` - Media link.
     */
    type?: 'toll' | 'tollfree' | 'media_link';
  }>;
  /**
   * Leader PIN: numeric value, length is less than 16.
   */
  leader_pin: string;
  /**
   * Telephony bridge
   */
  tsp_bridge?: TSP.tsp_bridge;
};

export namespace TSP {
  /**
   * Telephony bridge
   */
  export enum tsp_bridge {
    US_TSP_TB = 'US_TSP_TB',
    EU_TSP_TB = 'EU_TSP_TB',
  }
}
