/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of users.
 */
export type MeetingRegistrantList = {
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
   * List of registrant objects.
   */
  registrants?: Array<{
    /**
     * Registrant ID.
     */
    id?: string;
    /**
     * The registrant's address.
     */
    address?: string;
    /**
     * The registrant's city.
     */
    city?: string;
    /**
     * The registrant's questions and comments.
     */
    comments?: string;
    /**
     * The registrant's two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
     */
    country?: string;
    /**
     * Information about custom questions.
     */
    custom_questions?: Array<{
      /**
       * The title of the custom question.
       */
      title?: string;
      /**
       * The custom question's response value. This has a limit of 128 characters.
       */
      value?: string;
    }>;
    /**
     * The registrant's email address. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for return value details.
     */
    email: string;
    /**
     * The registrant's first name.
     */
    first_name: string;
    /**
     * The registrant's industry.
     */
    industry?: string;
    /**
     * The registrant's job title.
     */
    job_title?: string;
    /**
     * The registrant's last name.
     */
    last_name?: string;
    /**
     * The registrant's number of employees:
     * * `1-20`
     * * `21-50`
     * * `51-100`
     * * `101-250`
     * * `251-500`
     * * `501-1,000`
     * * `1,001-5,000`
     * * `5,001-10,000`
     * * `More than 10,000`
     */
    no_of_employees?: '' | '1-20' | '21-50' | '51-100' | '101-250' | '251-500' | '501-1,000' | '1,001-5,000' | '5,001-10,000' | 'More than 10,000';
    /**
     * The registrant's organization.
     */
    org?: string;
    /**
     * The registrant's phone number.
     */
    phone?: string;
    /**
     * The registrant's purchasing time frame:
     * * `Within a month`
     * * `1-3 months`
     * * `4-6 months`
     * * `More than 6 months`
     * * `No timeframe`
     */
    purchasing_time_frame?: '' | 'Within a month' | '1-3 months' | '4-6 months' | 'More than 6 months' | 'No timeframe';
    /**
     * The registrant's role in the purchase process:
     * * `Decision Maker`
     * * `Evaluator/Recommender`
     * * `Influencer`
     * * `Not involved`
     */
    role_in_purchase_process?: '' | 'Decision Maker' | 'Evaluator/Recommender' | 'Influencer' | 'Not involved';
    /**
     * The registrant's state or province.
     */
    state?: string;
    /**
     * The status of the registrant's registration. <br> `approved`: User has been successfully approved for the webinar.<br> `pending`:  The registration is still pending.<br> `denied`: User has been denied from joining the webinar.
     */
    status?: 'approved' | 'denied' | 'pending';
    /**
     * The registrant's ZIP or postal code.
     */
    zip?: string;
    /**
     * The time at which the registrant registered.
     */
    create_time?: string;
    /**
     * The URL using which an approved registrant can join the meeting or webinar.
     */
    join_url?: string;
  }>;
};
