/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of H.323/SIP Devices.
 */
export type DeviceList = {
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
   * List of H.323/SIP Device objects.
   */
  devices?: Array<{
    /**
     * Device ID.
     */
    id?: string;
    /**
     * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
     */
    encryption: 'auto' | 'yes' | 'no';
    /**
     * Device IP.
     */
    ip: string;
    /**
     * Device name.
     */
    name: string;
    /**
     * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
     */
    protocol: 'H.323' | 'SIP';
  }>;
};
