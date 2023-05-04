/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of webinars.
 */
export type WebinarList = {
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
   * List of webinar objects.
   */
  webinars?: Array<{
    /**
     * Webinar Description. The length of agenda gets truncated to 250 characters when you list all webinars for a user. To view the complete agenda, retrieve details for a single webinar, use the [**Get a webinar**](/docs/api-reference/zoom-api/methods#operation/webinar) API.
     */
    agenda?: string;
    /**
     * Time of webinar creation.
     */
    created_at?: string;
    /**
     * The webinar's duration, in minutes.
     */
    duration?: number;
    /**
     * The host's ID.
     */
    host_id?: string;
    /**
     * The webinar ID.
     */
    id?: number;
    /**
     * The URL to join the webinar.
     */
    join_url?: string;
    /**
     * The webinar's start time.
     */
    start_time?: string;
    /**
     * The webinar's [timezone](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones).
     */
    timezone?: string;
    /**
     * The webinar's topic.
     */
    topic?: string;
    /**
     * The webinar type:
     * * `5` — A webinar.
     * * `6` — A recurring webinar without a fixed time.
     * * `9` — A recurring webinar with a fixed time.
     */
    type?: 5 | 6 | 9;
    /**
     * The webinar's universally unique identifier (UUID). Each webinar instance generates a webinar UUID.
     */
    uuid?: string;
    /**
     * Whether the webinar is `simulive`.
     */
    is_simulive?: boolean;
  }>;
};
