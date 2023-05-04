/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ReportsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get sign In / sign out activity report
   * Retrieve a list of sign in / sign out activity logs [report](https://support.zoom.us/hc/en-us/articles/201363213-Getting-Started-with-Reports) of users under a Zoom account.<br>
   * **Prerequisites**<br>
   * * Pro or higher plan.<br>
   * **Scopes:** `report:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns any **HTTP Status Code:** `200`<br>
   * Success
   * @throws ApiError
   */
  public reportSignInSignOutActivities({
    from,
    to,
    pageSize,
    nextPageToken,
  }: {
    /**
     * Start date for which you would like to view the activity logs report. Using the `from` and `to` parameters, specify a monthly date range for the report as the API only provides one month worth of data in one request. The specified date range should fall within the last six months.
     */
    from?: string;
    /**
     * End date up to which you would like to view the activity logs report.
     */
    to?: string;
    /**
     * The number of records to be returned within a single API call
     */
    pageSize?: number;
    /**
     * Next page token is used to paginate through large result sets
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    /**
     * Array of activity logs.
     */
    activity_logs?: Array<{
      /**
       * The client interface type using which the activity was performed.
       */
      client_type?: string;
      /**
       * Email address of the user used for the activity.
       */
      email?: string;
      /**
       * The IP address of the user's device.
       */
      ip_address?: string;
      /**
       * Time during which the activity occurred.
       */
      time?: string;
      /**
       * The type of activity:
       * * `Sign in` — Sign in activity by user.
       * * `Sign out` — Sign out activity by user.
       */
      type?: 'Sign in' | 'Sign out';
      /**
       * Zoom client version of the user.
       */
      version?: string;
    }>;
    /**
     * Start date from which you want the activity logs report to be generated.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of records returned with a single API call.
     */
    page_size?: number;
    /**
     * End date until which you want the activity logs report to be generated
     */
    to?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/activities',
      query: {
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
    });
  }

  /**
   * Get billing reports
   * Get department billing reports of a Zoom account.
   *
   * **Prerequisites:**<br>
   * * Pro or a higher account with Department Billing option enabled. Contact Zoom Support team for details.
   *
   * **Scopes:** `report:read:admin`, `report:master`
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Billing report returned.
   * @throws ApiError
   */
  public getBillingReport(): CancelablePromise<{
    billing_reports?: Array<{
      /**
       * End date of the billing period.
       */
      end_date?: string;
      /**
       * Unique Identifier of the report. Use this ID to retrieve billing invoice via the "Get Billing Invoices API".
       *
       * You can also use this ID to export a CSV file of the billing report from this URL: `https://zoom.us/account/report/billing/export?id={id}`.
       */
      id?: string;
      /**
       * Start date of the billing period.
       */
      start_date?: string;
      /**
       * Total tax amount for this billing period.
       */
      tax_amount?: string;
      /**
       * Total billing amount for this billing period.
       */
      total_amount?: string;
      /**
       * Type of the billing report. The value should be either of the following:<br>
       * `0` - Detailed Billing Reports
       * `1` - Custom Billing Reports
       */
      type?: 0 | 1;
    }>;
    /**
     * Currency of the billed amount.
     */
    currency?: string;
    /**
     * The billing report's download URL.
     * * **Endpoint:** `/api/download/billing/report/{id}`
     * * **Authentication:** An OAuth or JWT access token.
     */
    download_url?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/billing',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`200\`<br> No permission.

        `,
      },
    });
  }

  /**
   * Get billing invoice reports
   * Get department billing invoices reports for a specific billing period. Provide the `billing_id` of the billing period for which you would like to retrieve the invoices for. This ID can be retrieved from **Get Billing Reports** API.
   *
   * **Prerequisites:**<br>
   * * Pro or a higher account with Department Billing option enabled. Contact the Zoom Support team to enable this feature.
   *
   * **Scopes:** `report:read:admin`, `report:master`
   *
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Billing Invoice reports returned.
   * @throws ApiError
   */
  public getBillingInvoicesReports({
    billingId,
  }: {
    /**
     * Unique Identifier of the Billing Report. Retrieve this ID from the response of **Get Billing Reports** API request.
     *
     *
     */
    billingId?: string;
  }): CancelablePromise<{
    /**
     * Currency of the billed amount in the invoice.
     */
    currency?: string;
    invoices?: Array<{
      /**
       * End date of the invoice period.
       */
      end_date?: string;
      /**
       * Name of the invoice.
       */
      invoice_charge_name?: string;
      /**
       * Invoice number
       */
      invoice_number?: string;
      /**
       * Number of licenses bought.
       */
      quantity?: number;
      /**
       * Start date of the invoice period.
       */
      start_date?: string;
      /**
       * Tax amount in the invoice.
       */
      tax_amount?: string;
      /**
       * Total billed amount in the invoice.
       */
      total_amount?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/billing/invoices',
      query: {
        billing_id: billingId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`5010\`<br>
        Report does not exist.`,
      },
    });
  }

  /**
   * Get cloud recording usage report
   * Retrieve cloud recording usage report for a specified period. You can only get cloud recording reports that is one day earlier than the current date and for the most recent period of 6 months. The date gap between from and to dates should be smaller or equal to 30 days. <br>
   * **Prerequisites**<br>
   * * Pro or higher plan.<br>
   * **Scopes:** `report:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns any **HTTP Status Code:** `200`<br>
   * Cloud Recording Report Returned
   * @throws ApiError
   */
  public reportCloudRecording({
    from,
    to,
    groupId,
  }: {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: string;
    /**
     * End date.
     */
    to: string;
    /**
     * The group ID. To get a group ID, use the [**List groups**](/api-reference/zoom-api/methods#operation/groups) API.
     *
     * **Note:** The API response will only contain users who are members of the queried group ID.
     */
    groupId?: string;
  }): CancelablePromise<{
    /**
     * Start date for this report
     */
    from?: string;
    /**
     * End date for this report
     */
    to?: string;
    /**
     * Array of cloud usage objects
     */
    cloud_recording_storage?: Array<{
      /**
       * Date of the usage
       */
      date?: string;
      /**
       * Free storage
       */
      free_usage?: string;
      /**
       * Paid storage
       */
      plan_usage?: string;
      /**
       * Storage used on the date
       */
      usage?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/cloud_recording',
      query: {
        from: from,
        to: to,
        group_id: groupId,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>
        Only provide report in recent 6 months`,
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`200\`<br>
        No permission.<br>
        ’`,
      },
    });
  }

  /**
   * Get daily usage report
   * Retrieve daily report to access the account-wide usage of Zoom services for each day in a given month. It lists the number of new users, meetings, participants, and meeting minutes.<br>
   * **Prerequisites**<br>
   * * Pro or higher plan.<br>
   * **Scopes:** `report:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns any **HTTP Status Code:** `200`<br>
   * Daily report retrieved.<br>
   * This is only available for paid accounts:{accountId}.
   * @throws ApiError
   */
  public reportDaily({
    year,
    month,
    groupId,
  }: {
    /**
     * Year for this report
     */
    year?: number;
    /**
     * Month for this report
     */
    month?: number;
    /**
     * The group ID. To get a group ID, use the [**List groups**](/api-reference/zoom-api/methods#operation/groups) API.
     *
     * **Note:** The API response will only contain users who are members of the queried group ID.
     */
    groupId?: string;
  }): CancelablePromise<{
    /**
     * Array of date objects.
     */
    dates?: Array<{
      /**
       * Date for this object.
       */
      date?: string;
      /**
       * Number of meeting minutes on this date.
       */
      meeting_minutes?: number;
      /**
       * Number of meetings on this date.
       */
      meetings?: number;
      /**
       * Number of new users on this date.
       */
      new_users?: number;
      /**
       * Number of participants on this date.
       */
      participants?: number;
    }>;
    /**
     * Month for this report.
     */
    month?: number;
    /**
     * Year for this report.
     */
    year?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/daily',
      query: {
        year: year,
        month: month,
        group_id: groupId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`300\`<br>
        Daily report can only be provided for a month that falls within the recent 6 months.
         **Error Code:** \`200\`<br>
        No permission.<br>
        ’`,
      },
    });
  }

  /**
   * Get meeting detail reports
   * Get a detailed report for a past meeting. <br>
   * **Scopes:** `report:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:**<br>
   * * Pro or a higher plan.<br>
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting details returned.<br>
   * This is only available for paid account.
   * @throws ApiError
   */
  public reportMeetingDetails({
    meetingId,
  }: {
    /**
     * The meeting's ID or universally unique ID (UUID).
     * * If you provide a meeting ID, the API will return a response for the latest meeting instance.
     * * If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.
     */
    meetingId: number | string;
  }): CancelablePromise<{
    /**
     * Custom keys and values assigned to the meeting.
     */
    custom_keys?: Array<{
      /**
       * Custom key associated with the user.
       */
      key?: string;
      /**
       * Value of the custom key associated with the user.
       */
      value?: string;
    }>;
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * Meeting end time.
     */
    end_time?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Number of meeting participants.
     */
    participants_count?: number;
    /**
     * Meeting start time.
     */
    start_time?: string;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Number of meeting minutes. This represents the total amount of meeting minutes attended by each participant including the host, for meetings hosted by the user. For instance if there were one host(named A) and one participant(named B) in a meeting, the value of total_minutes would be calculated as below:
     *
     * **total_minutes** = Total Meeting Attendance Minutes of A + Total Meeting Attendance Minutes of B
     */
    total_minutes?: number;
    /**
     * Tracking fields.
     */
    tracking_fields?: Array<{
      /**
       * Tracking fields type.
       */
      field?: string;
      /**
       * Tracking fields value.
       */
      value?: string;
    }>;
    /**
     * Meeting type.
     */
    type?: number;
    /**
     * User email.
     */
    user_email?: string;
    /**
     * User display name.
     */
    user_name?: string;
    /**
     * Meeting UUID. Each meeting instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/meetings/{meetingId}',
      path: {
        meetingId: meetingId,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>
        Can not access meeting information:{meetingId}.`,
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>

         **Error Code:** \`12702\` <br>
        Can not access meeting a year ago.<br>
         **Error Code:** \`200\`<br>
        No permission.<br>
        `,
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting ID not found.<br>
         **Error Code:** \`3001\`<br>
        Meeting {meetingId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Get meeting participant reports
   * Use this API to return a report of a past meeting with two or more participants, including the host. To return a report for past meeting with only **one** participant, use the [**List meeting participants**](/docs/api-reference/zoom-api/ma#operation/dashboardMeetingParticipants) API.
   *
   * **Note:**
   *
   * This API may return empty values for participants' `user_name`, `ip_address`, `location`, and `email` responses when the account calling this API:
   * * Does **not** have a signed HIPAA business associate agreement (BAA).
   * * Is a [**legacy** HIPAA BAA account](https://marketplace.zoom.us/docs/api-reference/other-references/legacy-business-associate-agreements).
   *
   * **Scopes:** `report:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Pro or a higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting participants report returned.<br>
   * This is only available for paid account.
   * @throws ApiError
   */
  public reportMeetingParticipants({
    meetingId,
    pageSize = 30,
    nextPageToken,
    includeFields,
  }: {
    /**
     * The meeting's ID or universally unique ID (UUID).
     * * If you provide a meeting ID, the API will return a response for the latest meeting instance.
     * * If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.
     */
    meetingId: number | string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Provide `registrant_id` as the value for this field if you would like to see the registrant ID attribute in the response of this API call. A registrant ID is a unique identifier of a [meeting registrant](/docs/api-reference/zoom-api/methods#operation/meetingRegistrants).
     */
    includeFields?: 'registrant_id';
  }): CancelablePromise<{
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
    /**
     * Array of meeting participant objects.
     */
    participants?: Array<{
      /**
       * The participant's SDK identifier. This value can be alphanumeric, up to a maximum length of 15 characters.
       */
      customer_key?: string;
      /**
       * Participant duration.
       */
      duration?: number;
      /**
       * Indicates if failover happened during the meeting.
       */
      failover?: boolean;
      /**
       * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank..
       */
      id?: string;
      /**
       * Participant join time.
       */
      join_time?: string;
      /**
       * Participant leave time.
       */
      leave_time?: string;
      /**
       * Participant display name.
       *
       * This returns an empty string value if the account calling the API is a BAA account.
       */
      name?: string;
      /**
       * Unique identifier of the registrant. This field is only returned if you entered "registrant_id" as the value of `include_fields` query parameter.
       */
      registrant_id?: string;
      /**
       * Participant email.
       *
       * If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details. This returns an empty string value if the account calling the API is a BAA account.
       */
      user_email?: string;
      /**
       * Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only.
       */
      user_id?: string;
      /**
       * The participant's status:
       * * `in_meeting` — In a meeting.
       * * `in_waiting_room` — In a waiting room.
       */
      status?: 'in_meeting' | 'in_waiting_room';
      /**
       * The [breakout room](https://support.zoom.us/hc/en-us/articles/206476313-Managing-breakout-rooms) ID. Each breakout room is assigned a unique ID.
       */
      bo_mtg_id?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/meetings/{meetingId}/participants',
      path: {
        meetingId: meetingId,
      },
      query: {
        page_size: pageSize,
        next_page_token: nextPageToken,
        include_fields: includeFields,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>Cannot access meeting information:{meetingId}.<br>
        The next page token is either invalid or has expired.`,
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>

         **Error Code:** \`12702\` <br>
        Can not access meeting a year ago.<br>
         **Error Code:** \`200\`<br>
        No permission.<br>
        `,
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting ID not found.<br>
         **Error Code:** \`3001\`<br>
        Meeting  {MeetingId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Get meeting poll reports
   * Use this API to get a report of [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) results for a past meeting.
   *
   * **Scopes:** `report:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Pro or a higher plan.
   * @returns any **HTTP Status Code:** `200`
   * * Meeting polls report returned.
   * * This is only available for paid account: {accountId}
   * @throws ApiError
   */
  public reportMeetingPolls({
    meetingId,
  }: {
    /**
     * The meeting's ID or universally unique ID (UUID).
     * * If you provide a meeting ID, the API will return a response for the latest meeting instance.
     * * If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.
     */
    meetingId: number | string;
  }): CancelablePromise<{
    /**
     * The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID).
     */
    id?: number;
    /**
     * The meeting's universally unique identifier (UUID). Each meeting instance generates a meeting UUID.
     */
    uuid?: string;
    /**
     * The meeting's start time.
     */
    start_time?: string;
    /**
     * Information about the meeting questions.
     */
    questions?: Array<{
      /**
       * The participant's email address.
       */
      email?: string;
      /**
       * The participant's display name. If the **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant's polling information is kept anonymous and the `name` field will return the "Anonymous Attendee" value.
       */
      name?: string;
      /**
       * The participant's first name. If the **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant's polling information is kept anonymous and the `first_name` field will return the "Anonymous Attendee" value.
       */
      first_name?: string;
      /**
       * The participant's last name. If the **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant's polling information is kept anonymous and the `last_name` field will return the "Anonymous Attendee" value.
       */
      last_name?: string;
      /**
       * Information about the user's questions and answers.
       */
      question_details?: Array<{
        /**
         * The user's given answer.
         */
        answer?: string;
        /**
         * The date and time at which the user answered the poll question.
         */
        date_time?: string;
        /**
         * The poll's ID.
         */
        polling_id?: string;
        /**
         * The poll question.
         */
        question?: string;
      }>;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/meetings/{meetingId}/polls',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**Error Code:** \`12702\`<br>
        Can not access meeting a year ago.
         **Error Code:** \`200\`<br>
        No permission.<br>
        `,
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting ID not found.

         **Error Code:** \`3001\` <br>
        Meeting "{meetingId}" not found or has expired.`,
      },
    });
  }

  /**
   * Get operation logs report
   * The [Operations Logs](https://support.zoom.us/hc/en-us/articles/360032748331-Operation-Logs) report allows you to audit admin and user activity, such as adding a new user, changing account settings, and deleting recordings.<br>
   * Use this API to retrieve operation logs report for a specified period of time.<br>
   * **Scopes:** `report:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:**<br>
   * * Pro or higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Operation Logs Report Returned
   * @throws ApiError
   */
  public reportOperationLogs({
    from,
    to,
    pageSize = 30,
    nextPageToken,
    categoryType,
  }: {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: string;
    /**
     * End date.
     */
    to: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * **Optional**<br>
     * Filter your response by a category type to see reports for a specific category.
     * The value for this field can be one of the following:<br> `all`<br>`user`<br>`user_settings`<br>`account`<br>`billing`<br>`im`<br>`recording`<br>`phone_contacts`<br>`webinar`<br>`sub_account`<br>`role`<br>`zoom_rooms`
     */
    categoryType?:
      | 'all'
      | 'user'
      | 'user_settings'
      | 'account'
      | 'billing'
      | 'im'
      | 'recording'
      | 'phone_contacts'
      | 'webinar'
      | 'sub_account'
      | 'role'
      | 'zoom_rooms';
  }): CancelablePromise<{
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The amount of records returns within a single API call.
     */
    page_size?: number;
    /**
     * Array of operation log objects
     */
    operation_logs?: Array<{
      /**
       * Action
       */
      action?: string;
      /**
       * Category type
       */
      category_type?: string;
      /**
       * Operation detail
       */
      operation_detail?: string;
      /**
       * The user who performed the operation.
       */
      operator?: string;
      /**
       * The time at which the operation was performed.
       */
      time?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/operationlogs',
      query: {
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
        category_type: categoryType,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>Only provide report in recent 6 months`,
      },
    });
  }

  /**
   * Get telephone reports
   * The [telephone report](https://support.zoom.us/hc/en-us/articles/206514816-Telephone-reports) allows you to view who dialed into meetings via phone (Audio Conferencing or SIP Connected Audio) and which number they dialed into and other details. Use this API to get telephone report for a specified period of time.
   *
   * **Scopes:** `report:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>**Prerequisites:**<br>
   * * Pro or higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Telephone report returned.<br>
   * This is only available for paid account:{accountId}.<br>
   * The requested report cannot be generated for this account because this account has not subscribed to toll-free audio conference plan.<br>
   * Toll Report feature must be enabled to perform this action. Contact the Zoom Support team for help.
   * @throws ApiError
   */
  public reportTelephone({
    from,
    to,
    type = 1,
    queryDateType = 'start_time',
    pageSize = 30,
    pageNumber = 1,
    nextPageToken,
  }: {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: string;
    /**
     * End date.
     */
    to: string;
    /**
     * Audio types:<br>`1` - Toll-free Call-in & Call-out.<br>`2` - Toll <br>
     * `3` - SIP Connected Audio
     */
    type?: 1 | 3;
    /**
     * The type of date to query:
     * * `start_time` — Query by call start time.
     * * `end_time` — Query by call end time.
     * * `meeting_start_time` — Query by meeting start time.
     * * `meeting_end_time` — Query by meeting end time.
     *
     * This value defaults to `start_time`.
     */
    queryDateType?: 'start_time' | 'end_time' | 'meeting_start_time' | 'meeting_end_time';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The page number of the current page in the returned records. This field is **not** available if the `query_date_type` parameter is the `meeting_start_time` or `meeting_end_time` value.
     *
     * This field is deprecated. Use the `next_page_token` query parameter for pagination.
     * @deprecated
     */
    pageNumber?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    /**
     * Start date for this report.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of pages returned for the request made. This field does **not** return if the `query_date_type` parameter is the `meeting_start_time` or `meeting_end_time` value.
     */
    page_count?: number;
    /**
     * The number of records returned with a single API call.
     */
    page_size?: number;
    /**
     * End date for this report.
     */
    to?: string;
    /**
     * The total number of all the records available across pages. This field does **not** return if the `query_date_type` parameter is the `meeting_start_time` or `meeting_end_time` value.
     */
    total_records?: number;
    /**
     * Array of telephony objects.
     */
    telephony_usage?: Array<{
      /**
       * Caller's call-in number.
       */
      call_in_number?: string;
      /**
       * Country name.
       */
      country_name?: string;
      /**
       * User department.
       */
      dept?: string;
      /**
       * Call leg duration
       */
      duration?: number;
      /**
       * Call leg end time
       */
      end_time?: string;
      /**
       * User email.
       */
      host_email?: string;
      /**
       * The user ID of the meeting host.
       */
      host_id?: string;
      /**
       * User display name.
       */
      host_name?: string;
      /**
       * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
       */
      meeting_id?: number;
      /**
       * Meeting type.
       */
      meeting_type?: string;
      /**
       * Toll-free telephone number.
       */
      phone_number?: string;
      /**
       * Calling rate for the telephone call.
       */
      rate?: number;
      /**
       * The number that is signaled to Zoom.
       */
      signaled_number?: string;
      /**
       * Call leg start time
       */
      start_time?: string;
      /**
       * Total cost (USD) for Call Out. Calculated as plan rate by duration.
       */
      total?: number;
      /**
       * Call type.
       */
      type?: 'toll-free' | 'call-out' | 'call-in' | 'US toll-number' | 'global toll-number' | 'premium' | 'premium call-in';
      /**
       * Meeting UUID.
       */
      uuid?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/telephone',
      query: {
        type: type,
        query_date_type: queryDateType,
        from: from,
        to: to,
        page_size: pageSize,
        page_number: pageNumber,
        next_page_token: nextPageToken,
      },
    });
  }

  /**
   * Get upcoming events report
   * Use this API to list upcoming meeting and/or webinar events within a specified period of time. The report's time range is limited to one month and must also be within the past six months.
   *
   * **Scopes:** `report:read:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Pro or higher plan
   * @returns any **HTTP Status Code:** `200`<br>
   * Upcoming events report returned.<br>
   *
   * @throws ApiError
   */
  public reportUpcomingEvents({
    from,
    to,
    pageSize = 30,
    nextPageToken,
    type = 'all',
    groupId,
  }: {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: string;
    /**
     * End date.
     */
    to: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The type of event to query:
     * * `meeting` — A meeting event.
     * * `webinar` — A webinar event.
     * * `all` — Both meeting and webinar events.
     *
     * This value defaults to `all`.
     */
    type?: 'meeting' | 'webinar' | 'all';
    /**
     * The group ID. To get a group ID, use the [**List groups**](/api-reference/zoom-api/methods#operation/groups) API.
     *
     * **Note:** The API response will only contain meetings where the host is a member of the queried group ID.
     */
    groupId?: string;
  }): CancelablePromise<{
    /**
     * The report's start date. This value must be within the past six months.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token returns when the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of records returned in a single API call.
     */
    page_size?: number;
    /**
     * The report's end date. This value must be within the past six months and cannot exceed a month from the `from` value.
     */
    to?: string;
    /**
     * Information about the upcoming event.
     */
    upcoming_events?: Array<{
      /**
       * The event host's department.
       */
      dept?: string;
      /**
       * The event host's ID.
       */
      host_id?: string;
      /**
       * The event host's name.
       */
      host_name?: string;
      /**
       * The event's unique ID.
       */
      id?: string;
      /**
       * The event's start time.
       */
      start_time?: string;
      /**
       * The event's topic.
       */
      topic?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/upcoming_events',
      query: {
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
        type: type,
        group_id: groupId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br> Bad Request <br> **Error Code:** \`200\` <br> This is only available for the paid account: {accountId} <br> **Error Code:** \`300\`<br> The next page token is invalid or expired.

         **Error Code:** \`200\`<br>
        No permission.<br>
        `,
      },
    });
  }

  /**
   * Get active/inactive host reports
   * A user is considered to be an active host during the month specified in the "from" and "to" range, if the user has hosted at least one meeting during this period. If the user didn't host any meetings during this period, the user is considered to be inactive.<br>The Active Hosts report displays a list of meetings, participants, and meeting minutes for a specific time range, up to one month. The month should fall within the last six months.<br>The Inactive Hosts report pulls a list of users who were not active during a specific period of time.
   * Use this API to retrieve an active or inactive host report for a specified period of time. The time range for the report is limited to a month and the month should fall under the past six months. <br>You can specify the type of report and date range using the query parameters.<br>
   * **Scopes:** `report:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:**<br>
   * * Pro or higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Active or inactive hosts report returned.<br>
   * This is only available for paid account: {accountId}.
   * @throws ApiError
   */
  public reportUsers({
    from,
    to,
    type,
    pageSize = 30,
    pageNumber = 1,
    nextPageToken,
    groupId,
  }: {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: string;
    /**
     * End date.
     */
    to: string;
    /**
     * Active or inactive hosts.<br>`active` - Active hosts. <br>`inactive` - Inactive hosts.
     */
    type?: 'active' | 'inactive';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The page number of the current page in the returned records.
     */
    pageNumber?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The group ID. To get a group ID, use the [**List groups**](/api-reference/zoom-api/methods#operation/groups) API.
     *
     * **Note:** The API response will only contain users who are members of the queried group ID.
     */
    groupId?: string;
  }): CancelablePromise<{
    /**
     * Start date for this report.
     */
    from?: string;
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
     * The number of records returned with a single API call.
     */
    page_size?: number;
    /**
     * End date for this report.
     */
    to?: string;
    /**
     * The total number of all the records available across pages.
     */
    total_records?: number;
    /**
     * Number of meeting minutes for this range.
     */
    total_meeting_minutes?: number;
    /**
     * Number of meetings for this range.
     */
    total_meetings?: number;
    /**
     * Number of participants for this range.
     */
    total_participants?: number;
    /**
     * Array of user objects.
     */
    users?: Array<{
      /**
       * Custom attribute(s) that have been assigned to the user.
       */
      custom_attributes?: {
        /**
         * Identifier for the custom attribute.
         */
        key?: string;
        /**
         * Name of the custom attribute.
         */
        name?: string;
        /**
         * Value of the custom attribute.
         */
        value?: string;
      };
      /**
       * User department.
       */
      dept?: string;
      /**
       * User email.
       */
      email?: string;
      /**
       * User ID.
       */
      id?: string;
      /**
       * Number of meeting minutes for user.
       */
      meeting_minutes?: number;
      /**
       * Number of meetings for user.
       */
      meetings?: number;
      /**
       * Number of participants in meetings for user.
       */
      participants?: number;
      /**
       * User type.
       */
      type?: number;
      /**
       * User display name.
       */
      user_name?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/users',
      query: {
        type: type,
        from: from,
        to: to,
        page_size: pageSize,
        page_number: pageNumber,
        next_page_token: nextPageToken,
        group_id: groupId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>

         **Error Code:** \`200\`<br>
        No permission.<br>
        ’`,
      },
    });
  }

  /**
   * Get meeting reports
   * Retrieve [report](https://support.zoom.us/hc/en-us/articles/216378603-Meeting-Reporting) on past meetings and webinars for a specified time period. The time range for the report is limited to a month and the month must fall within the past six months.
   *
   * Meetings and webinars are returned only if they have two or more unique participants.  <br><br>
   * **Scopes:** `report:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:**<br>
   * * Pro or higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Active or inactive hosts report returned.<br>
   *
   * @throws ApiError
   */
  public reportMeetings({
    userId,
    from,
    to,
    pageSize = 30,
    nextPageToken,
    type = 'past',
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: string;
    /**
     * End date.
     */
    to: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The meeting type to query for:
     * * `past` — All past meetings.
     * * `pastOne` — A single past user meeting.
     * * `pastJoined` — All past meetings the account's users hosted or joined.
     */
    type?: 'past' | 'pastOne' | 'pastJoined';
  }): CancelablePromise<{
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
     * The report's start date.
     */
    from?: string;
    /**
     * Information about the meeting.
     */
    meetings?: Array<{
      /**
       * Information about the meeting's assigned custom keys and values. This returns a maximum of 10 items.
       */
      custom_keys?: Array<{
        /**
         * The custom key name.
         */
        key?: string;
        /**
         * The custom key's value.
         */
        value?: string;
      }>;
      /**
       * The meeting's duration.
       */
      duration?: number;
      /**
       * The meeting's end date and time.
       */
      end_time?: string;
      /**
       * The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID).
       */
      id?: number;
      /**
       * The number of meeting participants.
       */
      participants_count?: number;
      /**
       * The Video SDK custom session ID.
       */
      session_key?: string;
      /**
       * Whether the meeting was created directly through Zoom or via an API request:
       * * If the meeting was created via an OAuth app, this field returns the OAuth app's name.
       * * If the meeting was created via JWT or the Zoom Web Portal, this returns the `Zoom` value.
       */
      source?: string;
      /**
       * The meeting's start date and time.
       */
      start_time?: string;
      /**
       * The meeting's topic.
       */
      topic?: string;
      /**
       * The sum of meeting minutes from all meeting participants in the meeting.
       */
      total_minutes?: number;
      /**
       * The meeting type:
       * * `1` — An instant meeting.
       * * `2` — A scheduled meeting.
       * * `3` — A recurring meeting with no fixed time.
       * * `4` — A [personal meeting room](https://support.zoom.us/hc/en-us/articles/201362843).
       * * `8` — A recurring meeting with a fixed time.
       */
      type?: 1 | 2 | 4 | 8;
      /**
       * The user's email address.
       */
      user_email?: string;
      /**
       * The user's display name.
       */
      user_name?: string;
      /**
       * The meeting's universally unique identifier (UUID). Each meeting instance generates a meeting UUID.
       */
      uuid?: string;
      /**
       * The meeting's scheduled date and time.
       */
      schedule_time?: string;
      /**
       * The date and time at which the attendee joined the waiting room.
       */
      join_waiting_room_time?: string;
      /**
       * The date and time at which the attendee joined the meeting.
       */
      join_time?: string;
      /**
       * The date and time at which the attendee left the meeting.
       */
      leave_time?: string;
      /**
       * Host Account Name of Hosting Organization.
       */
      host_organization?: string;
      /**
       * Host's name.
       */
      host_name?: string;
      /**
       * Indicates whether or not the screenshare feature was used in the meeting.
       */
      has_screen_share?: boolean;
      /**
       * Indicates whether or not the recording feature was used in the meeting.
       */
      has_recording?: boolean;
      /**
       * Indicates whether or not the chat feature was used in the meeting.
       */
      has_chat?: boolean;
      /**
       * The meeting's encryption status.
       * * `1` — E2E encryption.
       * * `2` — Enhanced encryption.
       */
      meeting_encryption_status?: 1 | 2;
      /**
       * The number of meeting participants from my account.
       */
      participants_count_my_account?: number;
    }>;
    /**
     * The report's end date.
     */
    to?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/users/{userId}/meetings',
      path: {
        userId: userId,
      },
      query: {
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
        type: type,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>

         **Error Code:** \`200\`<br>
        This is only available for paid account:{accountId}.<br>

         **Error Code:** \`300\`<br>
        The next page token is invalid or expired.

         **Error Code:** \`200\`<br>
        No permission.<br>
        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**
        <br>**Error Code:** \`1001\`<br>
        User {userId} not exist or not belong to this account.`,
      },
    });
  }

  /**
   * Get webinar detail reports
   * Retrieve a [report](https://support.zoom.us/hc/en-us/articles/201393719-Webinar-Reporting) containing past webinar details.  <br><br>
   * **Scopes:** `report:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:**<br>
   * * Pro or higher plan with Webinar add-on.
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar details returned.<br>
   * This is only available for paid account:{accountId}.
   * @throws ApiError
   */
  public reportWebinarDetails({
    webinarId,
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     * * If you provide a webinar ID, the API will return a response for the latest webinar instance.
     * * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.
     */
    webinarId: string;
  }): CancelablePromise<{
    /**
     * Custom keys and values assigned to the meeting.
     */
    custom_keys?: Array<{
      /**
       * Custom key associated with the user.
       */
      key?: string;
      /**
       * Value of the custom key associated with the user.
       */
      value?: string;
    }>;
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * Meeting end time.
     */
    end_time?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Number of meeting participants.
     */
    participants_count?: number;
    /**
     * Meeting start time.
     */
    start_time?: string;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Number of Webinar minutes. This represents the total amount of Webinar minutes attended by each participant including the host, for a Webinar hosted by the user. For instance if there were one host(named A) and one participant(named B) in a Webinar, the value of total_minutes would be calculated as below:
     *
     * **total_minutes** = Total Webinar Attendance Minutes of A + Total Webinar Attendance Minutes of B
     */
    total_minutes?: number;
    /**
     * Tracking fields.
     */
    tracking_fields?: Array<{
      /**
       * Tracking fields type.
       */
      field?: string;
      /**
       * Tracking fields value.
       */
      value?: string;
    }>;
    /**
     * Meeting type.
     */
    type?: number;
    /**
     * User email.
     */
    user_email?: string;
    /**
     * User display name.
     */
    user_name?: string;
    /**
     * Webinar UUID. Each webinar instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated when the next instance of the webinar starts). Double encode the UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/webinars/{webinarId}',
      path: {
        webinarId: webinarId,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>
        Can not access webinar information:{webinarId}.`,
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>

         **Error Code:** \`12702\` <br>
        Can not access a webinar a year ago.<br>
         **Error Code:** \`200\`<br>
        No permission.<br>
        `,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar ID not found.<br>
         **Error Code:** \`3001\`<br>
        Meeting  {meetingId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Get webinar participant reports
   * Use this API to get a detailed report on each webinar attendee. You can get webinar participant reports for the last 6 months.
   *
   * **Scopes:** `report:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Pro or a higher plan with Webinar add-on enabled.
   * @returns any **HTTP Status Code:** `200`
   * * Meeting participants report returned.
   * * This is only available for paid account: {accountId}
   * @throws ApiError
   */
  public reportWebinarParticipants({
    webinarId,
    pageSize = 30,
    nextPageToken,
    includeFields,
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     * * If you provide a webinar ID, the API will return a response for the latest webinar instance.
     * * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.
     */
    webinarId: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The additional query parameters to include:
     * * `registrant_id` — Include the registrant's ID in the API response. The registrant ID is the webinar participant's unique ID.
     */
    includeFields?: 'registrant_id';
  }): CancelablePromise<{
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
    /**
     * Information about the webinar participant.
     */
    participants?: Array<{
      /**
       * The participant's SDK identifier. This value can be alphanumeric, up to a maximum length of 15 characters.
       */
      customer_key?: string;
      /**
       * The participant's attendance duration.
       */
      duration?: number;
      /**
       * Whether failover occurred during the webinar.
       */
      failover?: boolean;
      /**
       * The participant's universally unique ID:
       * * This values is the same as the participant's user ID if the participant joins the meeting by logging into Zoom.
       * * If the participant joins the meeting without logging in, the API returns an empty string value.
       */
      id?: string;
      /**
       * The participant's join time.
       */
      join_time?: string;
      /**
       * The participant's join time.
       */
      leave_time?: string;
      /**
       * The participant's display name. This returns an empty string value if the account calling the API is a BAA account.
       */
      name?: string;
      /**
       * The registrant's ID. This field only returns if you provide the `registrant_id` value for the `include_fields` query parameter.
       */
      registrant_id?: string;
      /**
       * The participant's status:
       * * `in_meeting` — In a meeting.
       * * `in_waiting_room` — In a waiting room.
       */
      status?: 'in_meeting' | 'in_waiting_room';
      /**
       * The participant's email address. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details. This returns an empty string value if the account calling the API is a BAA account.
       */
      user_email?: string;
      /**
       * The participant's ID. This ID is assigned to the participant upon joining the webinar and is only valid for that webinar.
       */
      user_id?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/webinars/{webinarId}/participants',
      path: {
        webinarId: webinarId,
      },
      query: {
        page_size: pageSize,
        next_page_token: nextPageToken,
        include_fields: includeFields,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\`
         * The next page token is invalid or has expired.
         * Cannot access the webinar information: {webinarId}`,
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}

         **Error Code:** \`12702\` <br>
        Can not access webinar a year ago.
         **Error Code:** \`200\`<br>
        No permission.<br>
        `,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar ID not found.

         **Error Code:** \`3001\` <br>
        Webinar "{webinarId}" not found or has expired`,
      },
    });
  }

  /**
   * Get webinar poll reports
   * Retrieve a report on past [webinar polls](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars).<br><br>
   * **Scopes:** `report:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:**<br>
   * * Pro or a higher plan with Webinar add-on enabled.
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar polls report returned.<br>
   * Missing webinar subscription plan.<br>
   * This is only available for paid account:{accountId}.
   * @throws ApiError
   */
  public reportWebinarPolls({
    webinarId,
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     * * If you provide a webinar ID, the API will return a response for the latest webinar instance.
     * * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.
     */
    webinarId: string;
  }): CancelablePromise<{
    /**
     * The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID).
     */
    id?: number;
    /**
     * Array of webinar question objects.
     */
    questions?: Array<{
      /**
       * Participant email. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      email?: string;
      /**
       * Participant display name.<br><br> If the poll was created as an anonymous poll, participant's information will remain anonymous and the value of the `name` field will be "Anonymous Attendee".
       */
      name?: string;
      /**
       * Array of questions from user.
       */
      question_details?: Array<{
        /**
         * Given answer.
         */
        answer?: string;
        /**
         * Date and time at which the answer to the poll was submitted.
         */
        date_time?: string;
        /**
         * Unique identifier of the poll.
         */
        polling_id?: string;
        /**
         * Asked question.
         */
        question?: string;
      }>;
    }>;
    /**
     * Webinar start time.
     */
    start_time?: string;
    /**
     * Webinar UUID. Each webinar instance will generate its own UUID(i.e., after a Webinar ends, a new UUID will be generated for the next instance of the Webinar). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/webinars/{webinarId}/polls',
      path: {
        webinarId: webinarId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>

         **Error Code:** \`12702\` <br>
        Can not access webinar a year ago.<br>
         **Error Code:** \`200\`<br>
        No permission.<br>
        `,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar ID not found.<br>
         **Error Code:** \`3001\`<br>
        Webinar  {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Get webinar Q&A report
   * The Question & Answer (Q&A) feature for webinars allows attendees to ask questions during the webinar and for the panelists, co-hosts and host to answer their questions.
   *
   * Use this API to retrieve a report on question and answers from past webinars. <br><br>
   * **Scopes:** `report:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:**<br>
   * * Pro or a higher plan with Webinar add-on enabled.
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar Q&A report returned.<br>
   * This is only available for paid account:{accountId}.<br>
   * A report cannot be generated for this account because this account has not subscribed to a webinar plan.
   * @throws ApiError
   */
  public reportWebinarQa({
    webinarId,
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     * * If you provide a webinar ID, the API will return a response for the latest webinar instance.
     * * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.
     */
    webinarId: string;
  }): CancelablePromise<{
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Array of webinar question objects.
     */
    questions?: Array<{
      /**
       * Participant email. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      email?: string;
      /**
       * Participant display name.<br>
       *
       * If anonymous [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Getting-Started-with-Question-Answer) option is enabled and if a participant submits the Q&A without providing their name, the value of the `name` field will be "Anonymous Attendee".
       */
      name?: string;
      /**
       * Array of questions from user.
       */
      question_details?: Array<{
        /**
         * Given answer. The value will be 'live answered' if this is a live answer.
         */
        answer?: string;
        /**
         * Asked question.
         */
        question?: string;
      }>;
    }>;
    /**
     * Webinar start time.
     */
    start_time?: string;
    /**
     * Webinar UUID. Each Webinar instance will generate its own UUID(i.e., after a Webinar ends, a new UUID will be generated for the next instance of the Webinar). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/report/webinars/{webinarId}/qa',
      path: {
        webinarId: webinarId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`200\`<br>
        No permission.<br>
        `,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar ID not found.<br>
         **Error Code:** \`1001\`<br>
        User does not exist: {userId}.<br>
         **Error Code:** \`3001\`<br>
        Webinar  {webinarId} not found or has expired.<br>
        `,
      },
    });
  }
}
