/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DashboardsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get chat metrics
   * Get [metrics](https://support.zoom.us/hc/en-us/articles/204654719-Dashboard#h_cc7e9749-1c70-4afb-a9a2-9680654821e4) for how users are utilizing Zoom Chat to send messages.
   *
   * Use the `from` and `to` query parameters to specify a monthly date range for the dashboard data. The monthly date range must be within the last six months.
   *
   * > **Note:** To query chat metrics from July 1, 2021 and later, use this endpoint instead of the [**Get IM metrics**](/docs/api-reference/zoom-api/methods#operation/dashboardIM) API.
   *
   * **Scope:** `dashboard_im:read:admin`</br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`
   *
   * **Prerequisites:**
   *
   * * Business or a higher plan
   * @returns any **HTTP Status Code:** `200`<br>
   * Chat details returned.<br>
   * Only available for paid accounts that have enabled the dashboard feature.
   * @throws ApiError
   */
  public dashboardChat({
    from,
    to,
    pageSize = 30,
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
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    /**
     * The report's start date.
     */
    from?: string;
    /**
     * The report's [`next_page_token` value](https://marketplace.zoom.us/docs/api-reference/pagination#next-page-token). The API returns this value when the set of available results exceeds the current page size. This token expires after 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of records to return within a single API call.
     */
    page_size?: number;
    /**
     * The report's end date.
     */
    to?: string;
    users?: Array<{
      /**
       * The user's total number of audio files sent.
       */
      audio_sent?: number;
      /**
       * The user's total number of code snippets sent.
       */
      code_sippet_sent?: number;
      /**
       * The user's email address.
       */
      email?: string;
      /**
       * The user's total number of files sent.
       */
      files_sent?: number;
      /**
       * The user's total number of [GIPHY](https://giphy.com/) images sent.
       */
      giphys_sent?: number;
      /**
       * The user's total number of messages sent in Zoom Chat channels.
       */
      group_sent?: number;
      /**
       * The user's total number of images sent.
       */
      images_sent?: number;
      /**
       * The user's total number of peer-to-peer (P2P) chat messages sent.
       */
      p2p_sent?: number;
      /**
       * The user's total number of text messages sent.
       */
      text_sent?: number;
      /**
       * The user's total number of messages sent.
       */
      total_sent?: number;
      /**
       * The user's ID.
       */
      user_id?: string;
      /**
       * The user's display name.
       */
      user_name?: string;
      /**
       * The user's total number of video files sent.
       */
      video_sent?: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/chat',
      query: {
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
    });
  }

  /**
   * List Zoom meetings client feedback
   * Use this API to return [Zoom meetings client feedback](https://support.zoom.us/hc/en-us/articles/115005855266-End-of-Meeting-Feedback-Survey#h_e30d552b-6d8e-4e0a-a588-9ca8180c4dbf) survey results. You can specify a monthly date range for the Dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
   *
   * **Scopes:** `dashboard_home:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Business or higher account.
   * * The "[**Feedback to Zoom**](https://support.zoom.us/hc/en-us/articles/115005838023)" option enabled.
   * @returns any **HTTP Status Code:** `200`<br>
   * Client Feedback details returned.
   * @throws ApiError
   */
  public dashboardClientFeedback({
    from,
    to,
  }: {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: string;
    /**
     * End date.
     */
    to: string;
  }): CancelablePromise<{
    client_feedbacks?: Array<{
      /**
       * Feedback Id
       */
      feedback_id?: string;
      /**
       * Feedback Name
       */
      feedback_name?: string;
      /**
       * The number of participants that upvoted the feedback.
       */
      participants_count?: number;
    }>;
    /**
     * Start date for this report
     */
    from?: string;
    /**
     * End date for this report
     */
    to?: string;
    /**
     * The number of all records available across pages
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/client/feedback',
      query: {
        from: from,
        to: to,
      },
    });
  }

  /**
   * Get zoom meetings client feedback
   * Retrieve detailed information on a [Zoom meetings client feedback](https://support.zoom.us/hc/en-us/articles/115005855266-End-of-Meeting-Feedback-Survey#h_e30d552b-6d8e-4e0a-a588-9ca8180c4dbf). <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
   *
   * **Prerequisites:**
   * * Business or higher account
   * * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) enabled.
   *
   * **Scope:** `dashboard_home:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * `
   * @returns any **HTTP Status Code:** `200`<br>
   * Client Feedback details returned
   * @throws ApiError
   */
  public dashboardClientFeedbackDetail({
    feedbackId,
    from,
    to,
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * Feedback Detail Id
     */
    feedbackId: string;
    from?: string;
    to?: string;
    pageSize?: number;
    nextPageToken?: string;
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
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The amount of records returns within a single API call.
     */
    page_size?: number;
    client_feedback_details?: Array<{
      /**
       * Email address of the participant. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      email?: string;
      /**
       * Meeting ID
       */
      meeting_id?: string;
      /**
       * Participant Name
       */
      participant_name?: string;
      /**
       * Time at which the feedback was submitted by the participant.
       */
      time?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/client/feedback/{feedbackId}',
      path: {
        feedbackId: feedbackId,
      },
      query: {
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
    });
  }

  /**
   * List client meeting satisfaction
   * If the [End of Meeting Feedback Survey](https://support.zoom.us/hc/en-us/articles/115005855266) option is enabled, attendees will be prompted with a survey window where they can tap either the **Thumbs Up** or **Thumbs Down** button that indicates their Zoom meeting experience. With this API, you can get information on the attendees' meeting satisfaction. Specify a monthly date range for the query using the from and to query parameters. The month should fall within the last six months.
   *
   * To get information on the survey results with negative experiences (indicated by **Thumbs Down**), use the [**Get Zoom meetings client feedback**](/docs/api-reference/zoom-api/methods#operation/dashboardClientFeedbackDetail) API.<br>
   * **Scopes:** `dashboard:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns any **HTTP Status Code:** `200`<br>
   * Client satisfaction data returned.
   * @throws ApiError
   */
  public listMeetingSatisfaction({
    from,
    to,
  }: {
    /**
     * The start date for the query in “yyyy-mm-dd” format.
     */
    from?: string;
    /**
     * The end date for the query in “yyyy-mm-dd” format.
     */
    to?: string;
  }): CancelablePromise<{
    client_satisfaction?: Array<{
      /**
       * Date of the report.
       */
      date?: string;
      /**
       * The total number of "thumbs up" received for this meeting.
       */
      good_count?: number;
      /**
       * The total number of attendees who didn't submit any response (neither thumbs up nor thumbs down).
       */
      none_count?: number;
      /**
       * The total number of "thumbs down" received for this meeting.
       */
      not_good_count?: number;
      /**
       * Satisfaction Percentage.
       * The satisfaction percentage is calculated as `(good_count + none_count)` / `total_count`.
       */
      satisfaction_percent?: number;
    }>;
    /**
     * Start date for this report in 'yyyy-mm-dd' format.
     */
    from?: string;
    /**
     * End date for this report in 'yyyy-mm-dd' format.
     */
    to?: string;
    /**
     * The total number of records available across all pages.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/client/satisfaction',
      query: {
        from: from,
        to: to,
      },
    });
  }

  /**
   * Get CRC port usage
   * A Cloud Room Connector allows H.323/SIP endpoints to connect to a Zoom meeting.
   *
   * Use this API to get the hour by hour CRC Port usage for a specified period of time. <aside class='notice'>We will provide the report for a maximum of one month. For example, if "from" is set to "2017-08-05" and "to" is set to "2017-10-10", we will adjust "from" to "2017-09-10".</aside><br><br>
   * **Prerequisites:**<br>
   * * Business, Education or API Plan.
   * * Room Connector must be enabled on the account.<br><br>
   * **Scopes:** `dashboard_crc:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns any **HTTP Status Code:** `200`<br>
   * CRC usage returned.<br>
   * Only available for paid accounts that have enabled the Dashboard feature.
   * @throws ApiError
   */
  public dashboardCrc({
    from,
    to,
  }: {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: string;
    /**
     * End date.
     */
    to: string;
  }): CancelablePromise<{
    /**
     * Start date for this report.
     */
    from?: string;
    /**
     * End date for this report.
     */
    to?: string;
    crc_ports_usage?: Array<{
      crc_ports_hour_usage?: Array<{
        /**
         * Hour in the day, during which the CRC was used. For example if the CRC was used at 11 pm, the value of this field will be 23.
         */
        hour?: string;
        /**
         * The maximum number of concurrent ports that are being used in that hour.
         */
        max_usage?: number;
        /**
         * The total number of H.323/SIP connections in that hour.
         */
        total_usage?: number;
      }>;
      /**
       * The date and time of the port usage.
       */
      date_time?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/crc',
      query: {
        from: from,
        to: to,
      },
    });
  }

  /**
   * @deprecated
   * Get IM metrics
   * Get [metrics](https://support.zoom.us/hc/en-us/articles/204654719-Dashboard#h_cc7e9749-1c70-4afb-a9a2-9680654821e4) on how users are utilizing the Zoom Chat client.
   *
   * You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.<p style="background-color:#e1f5fe; color:#000000; padding:8px"><b>Deprecated:</b> We will completely deprecate this endpoint in a future release. You can continue using this endpoint to query data for messages sent <b>before</b> July 1, 2021.</br></br>To get metrics on chat messages sent <b>on and after</b> July 1, 2021, use the [**Get chat metrics**](/docs/api-reference/zoom-api/methods#operation/dashboardChat) API.</p>
   *
   * **Scopes:** `dashboard_im:read:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`
   *
   * **Prerequisites:**
   *
   * * Business or a higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * IM details returned.<br>
   * Only available for paid accounts that have enabled the dashboard feature.
   * @throws ApiError
   */
  public dashboardIm({
    from,
    to,
    pageSize = 30,
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
     * The number of records returned within a single API call.
     */
    pageSize?: number;
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
     * End date for this report.
     */
    to?: string;
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
    users?: Array<{
      /**
       * Total number of instant meeting calls received by the user.
       */
      calls_receive?: number;
      /**
       * Total number of instant meeting calls made by the user.
       */
      calls_send?: number;
      /**
       * User email.
       */
      email?: string;
      /**
       * Total number of emojis received by the user.
       */
      emoji_receive?: number;
      /**
       * Total number of emojis sent by the user.
       */
      emoji_send?: number;
      /**
       * Total number of files received by the user.
       */
      files_receive?: number;
      /**
       * Total number of files sent by the user.
       */
      files_send?: number;
      /**
       * Total number of messages received by the user in channels.
       */
      group_receive?: number;
      /**
       * Total number of messages sent by the user in channels.
       */
      group_send?: number;
      /**
       * Total number of images received by the user.
       */
      images_receive?: number;
      /**
       * Total number of images sent by the user.
       */
      images_send?: number;
      /**
       * Total number of messages received by the user.
       */
      total_receive?: number;
      /**
       * Total number of messages sent by the user.
       */
      total_send?: number;
      /**
       * User ID.
       */
      user_id?: string;
      /**
       * User display name.
       */
      user_name?: string;
      /**
       * Total number of video files received by the user.
       */
      videos_receive?: number;
      /**
       * Total number of video files sent by the user.
       */
      videos_send?: number;
      /**
       * Total number of voice files received by the user.
       */
      voice_receive?: number;
      /**
       * Total number of voice files sent by the user.
       */
      voice_send?: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/im',
      query: {
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
    });
  }

  /**
   * Get top 25 Zoom Rooms with issues
   * Get information on top 25 Zoom Rooms with issues in a month. The month specified with the "from" and "to" range should fall within the last six months.<br>
   * **Scope:** `dashboard_home:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:**<br>
   * * Business or a higher plan.
   * * Zoom Room must be enabled in the account.
   * @returns any **HTTP Status Code:** `200`<br>
   * Zoom Room with issue details returned
   * @throws ApiError
   */
  public dashboardIssueZoomRoom({
    from,
    to,
  }: {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: string;
    /**
     * End date.
     */
    to: string;
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
     * The number of all records available across pages
     */
    total_records?: number;
    zoom_rooms?: Array<{
      /**
       * Zoom Room ID
       */
      id?: string;
      /**
       * Issue Count of Zoom Room
       */
      issues_count?: number;
      /**
       * Zoom Room Name
       */
      room_name?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/issues/zoomrooms',
      query: {
        from: from,
        to: to,
      },
    });
  }

  /**
   * Get issues of Zoom Rooms
   * Use this API to return information about the Zoom Rooms in an account with issues, such as disconnected hardware or bandwidth issues. You can specify a monthly date range for the Dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
   *
   * **Scopes:** `dashboard_home:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Business or a higher plan.
   * * A Zoom Room must be enabled in the account.
   * @returns any **HTTP Status Code:** `200`<br>
   * Zoom Room with issue details returned
   * @throws ApiError
   */
  public dashboardIssueDetailZoomRoom({
    zoomroomId,
    from,
    to,
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * The Zoom room ID.
     */
    zoomroomId: string;
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
    issue_details?: Array<{
      /**
       * Zoom Room Issue Detail.<br> The value of the this field could be one of the following:<br>
       * * `Room Controller disconnected`<br>
       * * `Room Controller connected`
       * * `Selected camera has disconnected`
       * * `Selected camera is reconnected`
       * * `Selected microphone has disconnected`
       * * `Selected microphone is reconnected`
       * * `Selected speaker has disconnected`
       * * `Selected speaker is reconnected`
       * * `Zoom room is offline`
       * * `Zoom room is online`
       * * `High CPU usage is detected`
       * * `Low bandwidth network is detected`
       * * `{name} battery is low`
       * * `{name} battery is normal`
       * * `{name} disconnected`
       * * `{name} connected`
       * * `{name} is not charging`
       *
       * Possible values for {name}: <br>
       * * Zoom Rooms Computer
       * * Controller
       * * Scheduling Display
       */
      issue?: string;
      /**
       * Time at which the issue was encountered.
       */
      time?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/issues/zoomrooms/{zoomroomId}',
      path: {
        zoomroomId: zoomroomId,
      },
      query: {
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
    });
  }

  /**
   * List meetings
   * List total live or past meetings that occurred during a specified period of time. This overview will show if features such as audio, video, screen sharing, and recording were being used in the meeting. You can also see the license types of each user on your account.<br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.<br>
   * **Scopes:** `dashboard_meetings:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br><br>
   * **Prerequisites:** <br>
   * * Business or a higher plan.<br><br>
   * @returns any **HTTP Status Code:** `200`<br>
   * Meetings returned.<br>
   * Only available for paid accounts that have dashboard feature enabled.
   * @throws ApiError
   */
  public dashboardMeetings({
    from,
    to,
    type = 'live',
    pageSize = 30,
    nextPageToken,
    groupId,
    includeFields,
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
     * Specify a value to get the response for the corresponding meeting type. The value of this field can be one of the following:<br> <br>`past` - Meeting that already occurred in the specified date range.<br>`pastOne` - Past meetings that were attended by only one user. <br>`live` - Live meetings.<br><br>
     *
     * If you do not provide this field, the default value will be `live` and thus, the API will only query responses for live meetings.
     */
    type?: 'past' | 'pastOne' | 'live';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The group ID. To get a group ID, use the [**List groups**](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups) API.
     *
     * **Note:** The API response will only contain meetings where the host is a member of the queried group ID.
     */
    groupId?: string;
    /**
     * Set the value of this field to "tracking_fields" if you would like to include tracking fields of each meeting in the response.
     */
    includeFields?: 'tracking_fields';
  }): CancelablePromise<{
    /**
     * Start date for this report in 'yyyy-mm-dd' format.
     */
    from?: string;
    /**
     * End date for this report in 'yyyy-mm-dd' format.
     */
    to?: string;
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
     * Array of meeting objects.
     */
    meetings?: Array<{
      /**
       * Host display name.
       */
      host?: string;
      /**
       * Custom keys and values assigned to the meeting.
       */
      custom_keys?: Array<{
        /**
         * Custom key associated with the meeting.
         */
        key?: string;
        /**
         * Value of the custom key associated with the meeting.
         */
        value?: string;
      }>;
      /**
       * Department of the host.
       */
      dept?: string;
      /**
       * Meeting duration. Formatted as hh:mm:ss, for example: `16:08` for 16 minutes and 8 seconds.
       */
      duration?: string;
      /**
       * Email address of the host.
       */
      email?: string;
      /**
       * Meeting end time.
       */
      end_time?: string;
      /**
       * Indicates whether or not [third party audio](https://support.zoom.us/hc/en-us/articles/202470795-3rd-Party-Audio-Conference) was used in the meeting.
       */
      has_3rd_party_audio?: boolean;
      /**
       * Whether the archiving feature was used in the meeting.
       */
      has_archiving?: boolean;
      /**
       * Indicates whether or not the PSTN was used in the meeting.
       */
      has_pstn?: boolean;
      /**
       * Indicates whether or not the recording feature was used in the meeting.
       */
      has_recording?: boolean;
      /**
       * Indicates whether or not screenshare feature was used in the meeting.
       */
      has_screen_share?: boolean;
      /**
       * Indicates whether or not someone joined the meeting using SIP.
       */
      has_sip?: boolean;
      /**
       * Indicates whether or not video was used in the meeting.
       */
      has_video?: boolean;
      /**
       * Indicates whether or not VoIP was used in the meeting.
       */
      has_voip?: boolean;
      /**
       * Indicates whether a manual caption was enabled in the meeting.
       */
      has_manual_captions?: boolean;
      /**
       * Indicates whether an automated caption was enabled in the meeting.
       */
      has_automated_captions?: boolean;
      /**
       * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
       */
      id?: number;
      /**
       * The number of Zoom Room participants in the meeting.
       */
      in_room_participants?: number;
      /**
       * Meeting participant count.
       */
      participants?: number;
      /**
       * Meeting start time.
       */
      start_time?: string;
      /**
       * Meeting topic.
       */
      topic?: string;
      /**
       * Tracking fields and values assigned to the meeting.
       */
      tracking_fields?: Array<{
        /**
         * Label of the tracking field.
         */
        field?: string;
        /**
         * Value of the tracking field.
         */
        value?: string;
      }>;
      /**
       * License type of the user.
       */
      user_type?: string;
      /**
       * Meeting UUID. Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
       */
      uuid?: string;
      /**
       * The meeting's [audio quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
       * * `good` — The audio is almost flawless and the quality is excellent.
       * * `fair` — The audio occasionally has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
       * * `poor` — The audio often has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
       * * `bad` — The sound quality is extremely poor and the audio content is almost inaudible.
       */
      audio_quality?: 'good' | 'fair' | 'poor' | 'bad';
      /**
       * The meeting's [video quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
       * * `good` — The video is almost flawless and the quality is excellent.
       * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
       * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
       * * `bad` — The picture is very blurred and often gets stuck.
       */
      video_quality?: 'good' | 'fair' | 'poor' | 'bad';
      /**
       * The meeting's [screen share quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
       * * `good` — The video is almost flawless and the quality is excellent.
       * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
       * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
       * * `bad` — The picture is very blurred and often gets stuck.
       */
      screen_share_quality?: 'good' | 'fair' | 'poor' | 'bad';
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/meetings',
      query: {
        type: type,
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
        group_id: groupId,
        include_fields: includeFields,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        The next page token is invalid or expired.`,
      },
    });
  }

  /**
   * Get meeting details
   * Get details on live or past meetings. This overview will show if features such as audio, video, screen sharing, and recording were being used in the meeting. You can also see the license types of each user on your account.<br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.  <br>
   * **Scopes:** `dashboard_meetings:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:** <br>
   * * Business or a higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting returned.<br>
   * Only available for paid accounts that have enabled the dashboard feature.
   * @throws ApiError
   */
  public dashboardMeetingDetail({
    meetingId,
    type = 'live',
  }: {
    /**
     * The meeting's ID or universally unique ID (UUID).
     * * If you provide a meeting ID, the API will return a response for the latest meeting instance.
     * * If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.
     */
    meetingId: number | string;
    /**
     * The type of meeting to query:
     * * `past` — All past meetings.
     * * `pastOne` — All past one-user meetings.
     * * `live` - All live meetings.
     *
     * This value defaults to `live`.
     */
    type?: 'past' | 'pastOne' | 'live';
  }): CancelablePromise<{
    /**
     * Host display name.
     */
    host?: string;
    /**
     * Custom keys and values assigned to the meeting.
     */
    custom_keys?: Array<{
      /**
       * Custom key associated with the meeting.
       */
      key?: string;
      /**
       * Value of the custom key associated with the meeting.
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
    duration?: string;
    /**
     * Email address of the host.
     */
    email?: string;
    /**
     * Meeting end time.
     */
    end_time?: string;
    /**
     * Indicates whether or not [third party audio](https://support.zoom.us/hc/en-us/articles/202470795-3rd-Party-Audio-Conference) was used in the meeting.
     */
    has_3rd_party_audio?: boolean;
    /**
     * Whether the archiving feature was used in the meeting.
     */
    has_archiving?: boolean;
    /**
     * Indicates whether or not the PSTN was used in the meeting.
     */
    has_pstn?: boolean;
    /**
     * Indicates whether or not the recording feature was used in the meeting.
     */
    has_recording?: boolean;
    /**
     * Indicates whether or not screenshare feature was used in the meeting.
     */
    has_screen_share?: boolean;
    /**
     * Indicates whether or not someone joined the meeting using SIP.
     */
    has_sip?: boolean;
    /**
     * Indicates whether or not video was used in the meeting.
     */
    has_video?: boolean;
    /**
     * Indicates whether or not VoIP was used in the meeting.
     */
    has_voip?: boolean;
    /**
     * Indicates whether a manual caption was enabled in the meeting.
     */
    has_manual_captions?: boolean;
    /**
     * Indicates whether an automated caption was enabled in the meeting.
     */
    has_automated_captions?: boolean;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * The number of Zoom Room participants in the meeting.
     */
    in_room_participants?: number;
    /**
     * Meeting participant count.
     */
    participants?: number;
    /**
     * Meeting start time.
     */
    start_time?: string;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * License type of the user.
     */
    user_type?: string;
    /**
     * Meeting UUID. Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
     */
    uuid?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/meetings/{meetingId}',
      path: {
        meetingId: meetingId,
      },
      query: {
        type: type,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Can not access webinar info, {meetingId}.`,
        400: `**Error Code:** \`12702\`<br>
        Can not access a meeting a year ago.`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        Meeting ID is invalid or the meeting has not ended yet.<br>
        This meeting's details are not available.
        `,
      },
    });
  }

  /**
   * List meeting participants
   * Use this API to return a list of participants from live or past meetings.
   *
   * If you do not provide the `type` query parameter, the default value will be set to the `live` value. This API will only return metrics for participants in a live meeting, if any exist. You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
   *
   * **Note:**
   *
   * This API may return empty values for participants' `user_name`, `ip_address`, `location`, and `email` responses when the account calling this API:
   * * Does **not** have a signed HIPAA business associate agreement (BAA).
   * * Is a [**legacy** HIPAA BAA account](https://marketplace.zoom.us/docs/api-reference/other-references/legacy-business-associate-agreements).
   * * Displays data for any users who are **not** part of the host's account (external users) unless they meet certain conditions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
   *
   * **Scopes:** `dashboard_meetings:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Business or higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting participants returned.<br>
   * Only available for paid accounts that have enabled the dashboard feature.
   * @throws ApiError
   */
  public dashboardMeetingParticipants({
    meetingId,
    type = 'live',
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
     * The type of meeting to query:
     * * `past` — All past meetings.
     * * `pastOne` — All past one-user meetings.
     * * `live` - All live meetings.
     *
     * This value defaults to `live`.
     */
    type?: 'past' | 'pastOne' | 'live';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Provide `registrant_id` as the value for this field if you would like to see the registrant ID attribute in the response of this API call. A registrant ID is a unique identifier of a [meeting registrant](/docs/api-reference/zoom-api/methods#operation/meetingRegistrants). This is not supported for `live` meeting types.
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
     * Information about the meeting participants. If a participant left a meeting and rejoined the same meeting, their information will appear as many times as they joined the meeting.
     */
    participants?: Array<{
      /**
       * The participant's [audio quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts). The API only returns this value when the **Meeting quality scores and network alerts on Dashboard** setting is enabled in the Zoom Web Portal and the **Show meeting quality score and network alerts on Dashboard** option is selected in [**Account Settings**](https://zoom.us/account/setting):
       * * `good` — The audio is almost flawless and the quality is excellent.
       * * `fair` — The audio occasionally has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
       * * `poor` — The audio often has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
       * * `bad` — The sound quality is extremely poor and the audio content is almost inaudible.
       */
      audio_quality?: '' | 'good' | 'fair' | 'poor' | 'bad';
      /**
       * The type of camera that the participant used during the meeting.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      camera?: string;
      /**
       * The participant's connection type.
       */
      connection_type?: string;
      /**
       * The participant's SDK identifier. This value can be alphanumeric, up to a maximum length of 15 characters.
       */
      customer_key?: string;
      /**
       * The data center that the participant is leveraging to join the meeting.
       */
      data_center?: string;
      /**
       * The type of device the participant used to join the meeting:
       * * `Phone` — The participant joined via PSTN.
       * * `H.323/SIP` — The participant joined via an H.323 or SIP device.
       * * `Windows` — The participant joined via VoIP using a Windows device.
       * * `Mac` — The participant joined via VoIP using a Mac device.
       * * `iOS` — The participant joined via VoIP using an iOS device.
       * * `Android` — The participant joined via VoIP using an Android device.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      device?: 'Phone' | 'H.323/SIP' | 'Windows' | 'Mac' | 'iOS' | 'Android';
      /**
       * The participant's PC domain.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      domain?: string;
      /**
       * The participant's email address. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      email?: string;
      /**
       * The meeting participant's SIP From header URI. The API only returns this response when the participant joins a meeting via SIP.
       */
      from_sip_uri?: string;
      /**
       * The data center where participant's meeting data is stored. This field includes a semicolon-separated list of HTTP Tunnel (HT), Cloud Room Connector (CRC), and Real-Time Web Gateway (RWG) location information.
       */
      full_data_center?: string;
      /**
       * The participant's hard disk ID.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      harddisk_id?: string;
      /**
       * The participant's universally unique ID. This value is the same as the participant's user ID if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging into Zoom, this returns an empty value.
       */
      id?: string;
      /**
       * The number of participants that joined via Zoom Room.
       */
      in_room_participants?: number;
      /**
       * The participant's IP address.
       */
      ip_address?: string;
      /**
       * The time at which participant joined the meeting.
       */
      join_time?: string;
      /**
       * The reason why the participant left the meeting, where `$name` is the participant's username:
       * * `$name left the meeting.`
       * * `$name got disconnected from the meeting.`
       * * `Host ended the meeting.`
       * * `Host closed the meeting.`
       * * `Host started a new meeting.`
       * * `Network connection error.`
       * * `Host did not join.`
       * * `Exceeded free meeting minutes limit.`
       * * `Removed by host.`
       * * `Unknown reason.`
       * * `Leave waiting room.`
       * * `Removed by host from waiting room.`
       */
      leave_reason?:
        | '$name left the meeting.'
        | '$name got disconnected from the meeting.'
        | 'Host ended the meeting.'
        | 'Host closed the meeting.'
        | 'Host started a new meeting.'
        | 'Network connection error.'
        | 'Host did not join.'
        | 'Exceeded free meeting minutes limit.'
        | 'Removed by host.'
        | 'Unknown reason.'
        | 'Leave waiting room.'
        | 'Removed by host from waiting room.';
      /**
       * The time at which a participant left the meeting. For live meetings, this field will only return if a participant has left the ongoing meeting.
       */
      leave_time?: string;
      /**
       * The participant's location.
       */
      location?: string;
      /**
       * The participant's MAC address.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      mac_addr?: string;
      /**
       * The type of microphone that the participant used during the meeting.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      microphone?: string;
      /**
       * The participant's network type:
       *
       * * `Wired`
       * * `Wifi`
       * * `PPP` — Point-to-Point.
       * * `Cellular` — 3G, 4G, and 5G cellular.
       * * `Others` — An unknown device.
       */
      network_type?: 'Wired' | 'Wifi' | 'PPP' | 'Cellular' | 'Others';
      /**
       * The participant's universally unique ID (UUID):
       * * If the participant joins the meeting by logging into Zoom, this value is the `id` value in the [**Get a user**](/docs/api-reference/zoom-api/methods#operation/user) API response.
       * * If the participant joins the meeting **without** logging into Zoom, this returns an empty string value.
       */
      participant_user_id?: string;
      /**
       * The participant's PC name.
       */
      pc_name?: string;
      /**
       * Whether the recording feature was used during the meeting.
       */
      recording?: boolean;
      /**
       * The participant's unique registrant ID. This field only returns if you pass the `registrant_id` value for the `include_fields` query parameter.
       *
       * This field does not return if the `type` query parameter is the `live` value.
       */
      registrant_id?: string;
      /**
       * The participant's role:
       * * `host` — Host.
       * * `attendee` — Attendee.
       */
      role?: 'host' | 'attendee';
      /**
       * The participant's [screen share quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts). The API only returns this value when the **Meeting quality scores and network alerts on Dashboard** setting is enabled in the Zoom Web Portal and the **Show meeting quality score and network alerts on Dashboard** option is selected in [**Account Settings**](https://zoom.us/account/setting):
       * * `good` — The video is almost flawless and the quality is excellent.
       * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
       * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
       * * `bad` — The picture is very blurred and often gets stuck.
       */
      screen_share_quality?: '' | 'good' | 'fair' | 'poor' | 'bad';
      /**
       * Whether the participant chose to share an iPhone/iPad app during the screenshare.
       */
      share_application?: boolean;
      /**
       * Whether the participant chose to share their desktop during the screenshare.
       */
      share_desktop?: boolean;
      /**
       * Whether the participant chose to share their whiteboard during the screenshare.
       */
      share_whiteboard?: boolean;
      /**
       * The meeting participant's SIP (Session Initiation Protocol) Contact header URI. The API only returns this response when the participant joins a meeting via SIP.
       */
      sip_uri?: string;
      /**
       * The type of speaker that the participant used during the meeting.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      speaker?: string;
      /**
       * The participant's status:
       * * `in_meeting` — In a meeting.
       * * `in_waiting_room` — In a waiting room.
       */
      status?: 'in_meeting' | 'in_waiting_room';
      /**
       * The participant's ID. This value assigned to a participant upon joining a meeting and is only valid for the meeting's duration.
       */
      user_id?: string;
      /**
       * The participant's display name.
       */
      user_name?: string;
      /**
       * The participant's Zoom client version.
       */
      version?: string;
      /**
       * The participant's [video quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts). The API only returns this value when the **Meeting quality scores and network alerts on Dashboard** setting is enabled in the Zoom Web Portal and the **Show meeting quality score and network alerts on Dashboard** option is selected in [**Account Settings**](https://zoom.us/account/setting):
       * * `good` — The video is almost flawless and the quality is excellent.
       * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
       * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
       * * `bad` — The picture is very blurred and often gets stuck.
       */
      video_quality?: '' | 'good' | 'fair' | 'poor' | 'bad';
      /**
       * The [breakout room](https://support.zoom.us/hc/en-us/articles/206476313-Managing-breakout-rooms) ID. Each breakout room is assigned a unique ID.
       */
      bo_mtg_id?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/meetings/{meetingId}/participants',
      path: {
        meetingId: meetingId,
      },
      query: {
        type: type,
        page_size: pageSize,
        next_page_token: nextPageToken,
        include_fields: includeFields,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Can not access webinar info.<br>
        {meetingId} or the next page token is either invalid or expired.`,
        400: `**Error Code:** \`12702\`<br>
        Can not access a meeting a year ago.`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        Meeting ID is invalid or has not ended.`,
      },
    });
  }

  /**
   * List meeting participants QoS
   * Use this API to return a list of meeting participants from live or past meetings and their quality of service received during the meeting. The data returned indicates the connection quality for sending/receiving video, audio, and shared content.
   *
   * **Note:**
   *
   * This API may return empty values for participants' `user_name`, `ip_address`, `location`, and `email` responses when the account calling this API:
   * * Does **not** have a signed HIPAA business associate agreement (BAA).
   * * Is a [**legacy** HIPAA BAA account](https://marketplace.zoom.us/docs/api-reference/other-references/legacy-business-associate-agreements).
   * * Displays data for any users who are **not** part of the host's account (external users) unless they meet certain conditions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
   *
   * **Scopes:** `dashboard_meetings:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Business or a higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting participants returned.<br>
   * Only available for paid accounts that have enabled the dashboard feature.
   * @throws ApiError
   */
  public dashboardMeetingParticipantsQos({
    meetingId,
    type = 'live',
    pageSize = 1,
    nextPageToken,
  }: {
    /**
     * The meeting's ID or universally unique ID (UUID).
     * * If you provide a meeting ID, the API will return a response for the latest meeting instance.
     * * If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.
     */
    meetingId: number | string;
    /**
     * The type of meeting to query:
     * * `past` — All past meetings.
     * * `live` - All live meetings.
     *
     * This value defaults to `live`.
     */
    type?: 'past' | 'live';
    /**
     * The number of items returned per page.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of pages returned for the request made.
     */
    page_count?: number;
    /**
     * The number of items per page.
     */
    page_size?: number;
    /**
     * The number of all records available across pages.
     */
    total_records?: number;
    /**
     * Information about the participant.
     */
    participants?: Array<{
      /**
       * The participant's universally unique ID. This value is the same as the participant's user ID if the participant joins the webinar by logging into Zoom. If the participant joins the webinar without logging into Zoom, this returns an empty value.
       */
      id?: string;
      /**
       * The type of device the participant used to join the meeting:
       * * `Phone` — The participant joined via PSTN.
       * * `H.323/SIP` — The participant joined via an H.323 or SIP device.
       * * `Windows` — The participant joined via VoIP using a Windows device.
       * * `Mac` — The participant joined via VoIP using a Mac device.
       * * `iOS` — The participant joined via VoIP using an iOS device.
       * * `Android` — The participant joined via VoIP using an Android device.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      device?: 'Phone' | 'H.323/SIP' | 'Windows' | 'Mac' | 'iOS' | 'Android';
      /**
       * The participant's PC domain.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      domain?: string;
      /**
       * The participant's hard disk ID.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      harddisk_id?: string;
      /**
       * The participant's IP address.
       */
      ip_address?: string;
      /**
       * The time at which the participant joined the meeting.
       */
      join_time?: string;
      /**
       * The time at which the participant left the meeting.
       */
      leave_time?: string;
      /**
       * The participant's location.
       */
      location?: string;
      /**
       * The participant's MAC address.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      mac_addr?: string;
      /**
       * The participant's PC name.
       */
      pc_name?: string;
      /**
       * The participant's ID. This value is assigned to a participant upon joining a meeting and is only valid for the meeting's duration.
       */
      user_id?: string;
      /**
       * The participant's display name.
       */
      user_name?: string;
      /**
       * The participant's quality of service information.
       */
      user_qos?: Array<{
        /**
         * The QoS metrics for screen sharing by a participant who joined the meeting via CRC.
         */
        as_device_from_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        /**
         * The QoS metrics for screen sharing output received by a participant who joined the meeting via CRC.
         */
        as_device_to_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        as_input?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
          /**
           * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
           */
          frame_rate?: string;
          /**
           * The number of pixels in each dimension that the video camera can display.
           */
          resolution?: string;
        };
        as_output?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
          /**
           * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
           */
          frame_rate?: string;
          /**
           * The number of pixels in each dimension that the video camera can display.
           */
          resolution?: string;
        };
        /**
         * The QoS metrics for audio sent by a participant who joined the meeting via a Cloud Room Connector (CRC).
         */
        audio_device_from_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        /**
         * The QoS metrics for audio received by a participant who joined the meeting via CRC.
         */
        audio_device_to_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        audio_input?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        audio_output?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        cpu_usage?: {
          /**
           * The system's maximum CPU usage.
           */
          system_max_cpu_usage?: string;
          /**
           * Zoom's average CPU usage.
           */
          zoom_avg_cpu_usage?: string;
          /**
           * Zoom's maximum CPU usage.
           */
          zoom_max_cpu_usage?: string;
          /**
           * Zoom's minimum CPU usage.
           */
          zoom_min_cpu_usage?: string;
        };
        /**
         * The QoS date and time.
         */
        date_time?: string;
        /**
         * The QoS metrics for video input being sent by a participant who joined the meeting via CRC.
         */
        video_device_from_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        /**
         * The QoS metrics for video output being sent by a participant who joined the meeting via CRC.
         */
        video_device_to_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        video_input?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
          /**
           * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
           */
          frame_rate?: string;
          /**
           * The number of pixels in each dimension that the video camera can display.
           */
          resolution?: string;
        };
        video_output?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
          /**
           * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
           */
          frame_rate?: string;
          /**
           * The number of pixels in each dimension that the video camera can display.
           */
          resolution?: string;
        };
      }>;
      /**
       * The participant's Zoom client version.
       */
      version?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/meetings/{meetingId}/participants/qos',
      path: {
        meetingId: meetingId,
      },
      query: {
        type: type,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Can not access webinar info, {meetingId}.<br>
        The next page token is either invalid or expired.`,
        400: `**Error Code:** \`12702\`<br>
        Can not access a meeting a year ago.`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        This meeting's detail info is not available.<br>
        The Meeting ID is not valid or the meeting has not ended yet.
        `,
      },
    });
  }

  /**
   * Get post meeting feedback
   * When a meeting ends, each attendee will be prompted to share their meeting experience by clicking either thumbs up or thumbs down. Use this API to retrieve the feedback submitted for a specific meeting. Note that this API only works for meetings scheduled after December 20, 2020.
   *
   * **Prerequisites:**
   * * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) setting must be enabled by the participant prior to the meeting.
   * * The user making the API request must be enrolled in a Business or a higher plan.
   *
   * <br> **Scope:** `dashboard_meetings:read:admin`
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * @returns any **HTTP Status Code:** `200`<br>
   *
   *
   * @throws ApiError
   */
  public participantFeedback({
    meetingId,
    type = 'live',
    nextPageToken,
    pageSize = 30,
  }: {
    /**
     * The meeting's ID or universally unique ID (UUID).
     * * If you provide a meeting ID, the API will return a response for the latest meeting instance.
     * * If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.
     */
    meetingId: number | string;
    /**
     * Specify a value to get the response for the corresponding meeting type. The value of this field can be one of the following:<br> <br>`past` - Meeting that already occurred in the specified date range.<br>`pastOne` - Past meetings that were attended by only one user. <br>`live` - Live meetings.<br><br>
     *
     * If you do not provide this field, the default value will be `live` and thus, the API will only query responses for live meetings.
     */
    type?: 'past' | 'pastOne' | 'live';
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
  }): CancelablePromise<{
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of records returned within a single API call.
     */
    page_size?: number;
    participants?: Array<{
      /**
       * Date and time at which the feedback was submitted.
       */
      date_time?: string;
      /**
       * Email address of the participant. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      email?: string;
      /**
       * Feedback submitted by the participant.
       *
       * * `GOOD`: Thumbs up.
       * * `NOT GOOD`: Thumbs down.
       */
      quality?: 'GOOD' | 'NOT GOOD';
      /**
       * User ID of the participant.
       */
      user_id?: string;
      /**
       * Post meeting comment of the participant.
       */
      comment?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/meetings/{meetingId}/participants/satisfaction',
      path: {
        meetingId: meetingId,
      },
      query: {
        type: type,
        next_page_token: nextPageToken,
        page_size: pageSize,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`200\`<br>
        Only available for paid accounts that have dashboard feature enabled.
        `,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        Meeting ID is invalid or not end.`,
      },
    });
  }

  /**
   * Get sharing/recording details
   * Retrieve the sharing and recording details of participants from live or past meetings.<br>
   * **Scopes:** `dashboard_meetings:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:** <br>
   * * Business or a higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting participants returned.
   * @throws ApiError
   */
  public dashboardMeetingParticipantShare({
    meetingId,
    type = 'live',
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * The meeting's ID or universally unique ID (UUID).
     * * If you provide a meeting ID, the API will return a response for the latest meeting instance.
     * * If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.
     */
    meetingId: number | string;
    /**
     * The type of meeting to query:
     * * `past` — All past meetings.
     * * `live` - All live meetings.
     *
     * This value defaults to `live`.
     */
    type?: 'past' | 'live';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
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
     * Array of participants.
     */
    participants?: Array<{
      /**
       * Array of sharing and recording details.
       */
      details?: Array<{
        /**
         * Type of content shared.
         */
        content?: string;
        /**
         * End time of sharing.
         */
        end_time?: string;
        /**
         * Start time of sharing.
         */
        start_time?: string;
      }>;
      /**
       * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
       */
      id?: string;
      /**
       * Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only.
       */
      user_id?: string;
      /**
       * Participant display name.
       */
      user_name?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/meetings/{meetingId}/participants/sharing',
      path: {
        meetingId: meetingId,
      },
      query: {
        type: type,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Can not access webinar info, {meetingId}.`,
        400: `**Error Code:** \`12702\`<br>
        Can not access a meeting a year ago.`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        This meeting's detail info is not available or ID is not valid.`,
      },
    });
  }

  /**
   * Get meeting participant QoS
   * Use this API to return the quality of service (QoS) report for participants from live or past meetings. The data returned indicates the connection quality for sending/receiving video, audio, and shared content. The API returns this data for either the API request or when the API request was last received.
   *
   * When the sender sends data, a timestamp is attached to the sender's data packet. The receiver then returns this timestamp to the sender. This helps determine the upstream and downstream latency, which includes the application processing time. The latency data returned is the five second average and five second maximum.
   *
   * This API will **not** return data if there is no data being sent or received at the time of request.
   *
   * **Note:**
   *
   * This API may return empty values for participants' `user_name`, `ip_address`, `location`, and `email` responses when the account calling this API:
   * * Does **not** have a signed HIPAA business associate agreement (BAA).
   * * Is a [**legacy** HIPAA BAA account](https://marketplace.zoom.us/docs/api-reference/other-references/legacy-business-associate-agreements).
   * * Displays data for any users who are **not** part of the host's account (external users) unless they meet certain conditions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
   *
   * **Scopes:** `dashboard_meetings:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting participant QOS returned.<br>
   * Only available for paid account that have enabled the dashboard feature.
   * @throws ApiError
   */
  public dashboardMeetingParticipantQos({
    meetingId,
    participantId,
    type = 'live',
  }: {
    /**
     * The meeting's ID or universally unique ID (UUID).
     * * If you provide a meeting ID, the API will return a response for the latest meeting instance.
     * * If you provide a meeting UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the meeting UUID before making an API request.
     */
    meetingId: number | string;
    /**
     * The participant's ID.
     */
    participantId: string;
    /**
     * The type of meeting to query:
     * * `past` — All past meetings.
     * * `live` - All live meetings.
     *
     * This value defaults to `live`.
     */
    type?: 'past' | 'live';
  }): CancelablePromise<{
    /**
     * The participant's universally unique ID. This value is the same as the participant's user ID if the participant joins the webinar by logging into Zoom. If the participant joins the webinar without logging into Zoom, this returns an empty value.
     */
    id?: string;
    /**
     * The type of device the participant used to join the meeting:
     * * `Phone` — The participant joined via PSTN.
     * * `H.323/SIP` — The participant joined via an H.323 or SIP device.
     * * `Windows` — The participant joined via VoIP using a Windows device.
     * * `Mac` — The participant joined via VoIP using a Mac device.
     * * `iOS` — The participant joined via VoIP using an iOS device.
     * * `Android` — The participant joined via VoIP using an Android device.
     *
     * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
     */
    device?: 'Phone' | 'H.323/SIP' | 'Windows' | 'Mac' | 'iOS' | 'Android';
    /**
     * The participant's PC domain.
     *
     * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
     */
    domain?: string;
    /**
     * The participant's hard disk ID.
     *
     * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
     */
    harddisk_id?: string;
    /**
     * The participant's IP address.
     */
    ip_address?: string;
    /**
     * The time at which the participant joined the meeting.
     */
    join_time?: string;
    /**
     * The time at which the participant left the meeting.
     */
    leave_time?: string;
    /**
     * The participant's location.
     */
    location?: string;
    /**
     * The participant's MAC address.
     *
     * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
     */
    mac_addr?: string;
    /**
     * The participant's PC name.
     */
    pc_name?: string;
    /**
     * The participant's ID. This value is assigned to a participant upon joining a meeting and is only valid for the meeting's duration.
     */
    user_id?: string;
    /**
     * The participant's display name.
     */
    user_name?: string;
    /**
     * The participant's quality of service information.
     */
    user_qos?: Array<{
      /**
       * The QoS metrics for screen sharing by a participant who joined the meeting via CRC.
       */
      as_device_from_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      /**
       * The QoS metrics for screen sharing output received by a participant who joined the meeting via CRC.
       */
      as_device_to_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      as_input?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
        /**
         * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
         */
        frame_rate?: string;
        /**
         * The number of pixels in each dimension that the video camera can display.
         */
        resolution?: string;
      };
      as_output?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
        /**
         * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
         */
        frame_rate?: string;
        /**
         * The number of pixels in each dimension that the video camera can display.
         */
        resolution?: string;
      };
      /**
       * The QoS metrics for audio sent by a participant who joined the meeting via a Cloud Room Connector (CRC).
       */
      audio_device_from_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      /**
       * The QoS metrics for audio received by a participant who joined the meeting via CRC.
       */
      audio_device_to_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      audio_input?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      audio_output?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      cpu_usage?: {
        /**
         * The system's maximum CPU usage.
         */
        system_max_cpu_usage?: string;
        /**
         * Zoom's average CPU usage.
         */
        zoom_avg_cpu_usage?: string;
        /**
         * Zoom's maximum CPU usage.
         */
        zoom_max_cpu_usage?: string;
        /**
         * Zoom's minimum CPU usage.
         */
        zoom_min_cpu_usage?: string;
      };
      /**
       * The QoS date and time.
       */
      date_time?: string;
      /**
       * The QoS metrics for video input being sent by a participant who joined the meeting via CRC.
       */
      video_device_from_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      /**
       * The QoS metrics for video output being sent by a participant who joined the meeting via CRC.
       */
      video_device_to_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      video_input?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
        /**
         * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
         */
        frame_rate?: string;
        /**
         * The number of pixels in each dimension that the video camera can display.
         */
        resolution?: string;
      };
      video_output?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
        /**
         * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
         */
        frame_rate?: string;
        /**
         * The number of pixels in each dimension that the video camera can display.
         */
        resolution?: string;
      };
    }>;
    /**
     * The participant's Zoom client version.
     */
    version?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/meetings/{meetingId}/participants/{participantId}/qos',
      path: {
        meetingId: meetingId,
        participantId: participantId,
      },
      query: {
        type: type,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Can not access webinar info, {meetingId}.`,
        400: `**Error Code:** \`12702\`<br>
        Can not access a meeting a year ago.`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        This meeting's detail info is not available.<br>
        This meeting has not ended yet or the Meeting ID is invalid.`,
      },
    });
  }

  /**
   * Get meeting quality scores
   * Use this API to return [meeting quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Meeting-quality-scores-and-network-alerts-on-Dashboard) information. Meeting quality scores are based on the mean opinion score (MOS). The MOS measures a meeting's quality on a scale of "Good" (5-4), "Fair" (4-3), "Poor" (3-2), or "Bad" (2-1).
   *
   * **Scopes:** `dashboard_home:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Business or a higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting quality returned
   * @throws ApiError
   */
  public dashboardQuality({
    from,
    to,
    type = 'meeting',
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
     * The type of meeting quality score to query:
     * * `meeting` — Query by meetings.
     * * `participants` — Query by meeting participants.
     */
    type?: 'meeting' | 'participants';
  }): CancelablePromise<{
    /**
     * The report's start date. This value must be within the past six months.
     */
    from?: string;
    /**
     * Information about the meeting quality scores.
     */
    quality?: {
      audio?: {
        /**
         * The total number of "Bad" quality scores.
         */
        bad?: number;
        /**
         * The total number of "Fair" quality scores.
         */
        fair?: number;
        /**
         * The total number of "Good" quality scores.
         */
        good?: number;
        /**
         * The total number of "Poor" quality scores.
         */
        poor?: number;
      };
      screen_share?: {
        /**
         * The total number of "Bad" quality scores.
         */
        bad?: number;
        /**
         * The total number of "Fair" quality scores.
         */
        fair?: number;
        /**
         * The total number of "Good" quality scores.
         */
        good?: number;
        /**
         * The total number of "Poor" quality scores.
         */
        poor?: number;
      };
      video?: {
        /**
         * The total number of "Bad" quality scores.
         */
        bad?: number;
        /**
         * The total number of "Fair" quality scores.
         */
        fair?: number;
        /**
         * The total number of "Good" quality scores.
         */
        good?: number;
        /**
         * The total number of "Poor" quality scores.
         */
        poor?: number;
      };
    };
    /**
     * The report's end date. This value must be within the past six months and cannot exceed a month from the `from` value.
     */
    to?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/quality',
      query: {
        from: from,
        to: to,
        type: type,
      },
    });
  }

  /**
   * List webinars
   * List all the live or past webinars from a specified period of time. <br><br>
   * **Scopes:** `dashboard_webinars:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br>
   * **Prerequisites:**<br>
   * * Business, Education or API Plan with Webinar add-on.
   *
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Meetings returned.<br>
   * Only available for paid accounts that have enabled the Dashboard feature.
   * @throws ApiError
   */
  public dashboardWebinars({
    from,
    to,
    type = 'live',
    pageSize = 30,
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
     * The type of webinar to query:
     * * `past` — All past webinars.
     * * `live` - All live webinars.
     *
     * This value defaults to `live`.
     */
    type?: 'past' | 'live';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The group ID. To get a group ID, use the [**List groups**](https://marketplace.zoom.us/docs/api-reference/zoom-api/groups/groups) API.
     *
     * **Note:** The API response will only contain meetings where the host is a member of the queried group ID.
     */
    groupId?: string;
  }): CancelablePromise<{
    /**
     * Start date for this report in 'yyyy-mm-dd' format.
     */
    from?: string;
    /**
     * End date for this report in 'yyyy-mm-dd' format.
     */
    to?: string;
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
     * Array of webinar objects.
     */
    webinars?: Array<{
      /**
       * User display name.
       */
      host?: string;
      /**
       * Custom keys and values assigned to the Webinar.
       */
      custom_keys?: Array<{
        /**
         * Custom key associated with the Webinar.
         */
        key?: string;
        /**
         * Value of the custom key associated with the Webinar.
         */
        value?: string;
      }>;
      /**
       * Department of the host.
       */
      dept?: string;
      /**
       * Webinar duration, formatted as hh:mm:ss, for example: `10:00` for ten minutes.
       */
      duration?: string;
      /**
       * User email.
       */
      email?: string;
      /**
       * Webinar end time.
       */
      end_time?: string;
      /**
       * Use TSP for the Webinar.
       */
      has_3rd_party_audio?: boolean;
      /**
       * Whether the archiving feature was used in the webinar.
       */
      has_archiving?: boolean;
      /**
       * Indicates whether or not PSTN was used for the Webinar.
       */
      has_pstn?: boolean;
      /**
       * Indicates whether or not recording was used for the Webinar.
       */
      has_recording?: boolean;
      /**
       * Indicates whether or not screen sharing was used for the Webinar.
       */
      has_screen_share?: boolean;
      /**
       * Indicates whether or not SIP was used for the Webinar.
       */
      has_sip?: boolean;
      /**
       * Indicates whether or not video was used for the Webinar.
       */
      has_video?: boolean;
      /**
       * Indicates whether or not VoIP was used for the Webinar.
       */
      has_voip?: boolean;
      /**
       * Indicates whether a manual caption was enabled in the meeting.
       */
      has_manual_captions?: boolean;
      /**
       * Indicates whether an automated caption was enabled in the meeting.
       */
      has_automated_captions?: boolean;
      /**
       * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
       */
      id?: number;
      /**
       * Webinar participant count.
       */
      participants?: number;
      /**
       * Webinar start time.
       */
      start_time?: string;
      /**
       * Webinar topic.
       */
      topic?: string;
      /**
       * User type.
       */
      user_type?: string;
      /**
       * Webinar UUID.
       */
      uuid?: string;
      /**
       * The webinar's [audio quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
       * * `good` — The audio is almost flawless and the quality is excellent.
       * * `fair` — The audio occasionally has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
       * * `poor` — The audio often has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
       * * `bad` — The sound quality is extremely poor and the audio content is almost inaudible.
       */
      audio_quality?: 'good' | 'fair' | 'poor' | 'bad';
      /**
       * The webinar's [video quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
       * * `good` — The video is almost flawless and the quality is excellent.
       * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
       * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
       * * `bad` — The picture is very blurred and often gets stuck.
       */
      video_quality?: 'good' | 'fair' | 'poor' | 'bad';
      /**
       * The webinar's [screen share quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
       * * `good` — The video is almost flawless and the quality is excellent.
       * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
       * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
       * * `bad` — The picture is very blurred and often gets stuck.
       */
      screen_share_quality?: 'good' | 'fair' | 'poor' | 'bad';
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/webinars',
      query: {
        type: type,
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
        group_id: groupId,
      },
      errors: {
        300: `**Error Code:** \`200\`<br>
        The next page token is invalid or has expired.`,
      },
    });
  }

  /**
   * Get webinar details
   * Retrieve details from live or past webinars.<br><br>
   * **Scopes:** `dashboard_webinars:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:**<br>
   * * Business, Education or API Plan with Webinar add-on.
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar details returned.<br>
   * Only available for paid accounts that have enabled the Dashboard feature.
   * @throws ApiError
   */
  public dashboardWebinarDetail({
    webinarId,
    type = 'live',
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     * * If you provide a webinar ID, the API will return a response for the latest webinar instance.
     * * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.
     */
    webinarId: string;
    /**
     * The type of webinar to query:
     * * `past` — All past webinars.
     * * `live` - All live webinars.
     *
     * This value defaults to `live`.
     */
    type?: 'past' | 'live';
  }): CancelablePromise<{
    /**
     * User display name.
     */
    host?: string;
    /**
     * Custom keys and values assigned to the Webinar.
     */
    custom_keys?: Array<{
      /**
       * Custom key associated with the Webinar.
       */
      key?: string;
      /**
       * Value of the custom key associated with the Webinar.
       */
      value?: string;
    }>;
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Webinar duration, formatted as hh:mm:ss, for example: `10:00` for ten minutes.
     */
    duration?: string;
    /**
     * User email.
     */
    email?: string;
    /**
     * Webinar end time.
     */
    end_time?: string;
    /**
     * Use TSP for the Webinar.
     */
    has_3rd_party_audio?: boolean;
    /**
     * Whether the archiving feature was used in the webinar.
     */
    has_archiving?: boolean;
    /**
     * Indicates whether or not PSTN was used for the Webinar.
     */
    has_pstn?: boolean;
    /**
     * Indicates whether or not recording was used for the Webinar.
     */
    has_recording?: boolean;
    /**
     * Indicates whether or not screen sharing was used for the Webinar.
     */
    has_screen_share?: boolean;
    /**
     * Indicates whether or not SIP was used for the Webinar.
     */
    has_sip?: boolean;
    /**
     * Indicates whether or not video was used for the Webinar.
     */
    has_video?: boolean;
    /**
     * Indicates whether or not VoIP was used for the Webinar.
     */
    has_voip?: boolean;
    /**
     * Indicates whether a manual caption was enabled in the meeting.
     */
    has_manual_captions?: boolean;
    /**
     * Indicates whether an automated caption was enabled in the meeting.
     */
    has_automated_captions?: boolean;
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Webinar participant count.
     */
    participants?: number;
    /**
     * Webinar start time.
     */
    start_time?: string;
    /**
     * Webinar topic.
     */
    topic?: string;
    /**
     * User type.
     */
    user_type?: string;
    /**
     * Webinar UUID.
     */
    uuid?: string;
    /**
     * The webinar's [audio quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
     * * `good` — The audio is almost flawless and the quality is excellent.
     * * `fair` — The audio occasionally has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
     * * `poor` — The audio often has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
     * * `bad` — The sound quality is extremely poor and the audio content is almost inaudible.
     */
    audio_quality?: 'good' | 'fair' | 'poor' | 'bad';
    /**
     * The webinar's [video quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
     * * `good` — The video is almost flawless and the quality is excellent.
     * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
     * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
     * * `bad` — The picture is very blurred and often gets stuck.
     */
    video_quality?: 'good' | 'fair' | 'poor' | 'bad';
    /**
     * The webinar's [screen share quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
     * * `good` — The video is almost flawless and the quality is excellent.
     * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
     * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
     * * `bad` — The picture is very blurred and often gets stuck.
     */
    screen_share_quality?: 'good' | 'fair' | 'poor' | 'bad';
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/webinars/{webinarId}',
      path: {
        webinarId: webinarId,
      },
      query: {
        type: type,
      },
      errors: {
        300: `**Error Code:** \`200\`<br>
        Can not access webinar info, {webinarId}.`,
        400: `**Error Code:** \`12702\`<br>
        Can not access a webinar a year ago.`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        The webinar has not ended yet or the Webinar ID is not valid.<br>
        This webinar's detail is not available.`,
      },
    });
  }

  /**
   * Get webinar participants
   * Use this API to return information about participants from live or past webinars.
   *
   * **Note:**
   *
   * This API may return empty values for participants' `user_name`, `ip_address`, `location`, and `email` responses when the account calling this API:
   * * Does **not** have a signed HIPAA business associate agreement (BAA).
   * * Is a [**legacy** HIPAA BAA account](https://marketplace.zoom.us/docs/api-reference/other-references/legacy-business-associate-agreements).
   * * Displays data for any users who are **not** part of the host's account (external users) unless they meet certain conditions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
   *
   * **Scopes:** `dashboard_webinars:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Business, Education, or API Plan with Webinar add-on.
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar participants returned.
   * @throws ApiError
   */
  public dashboardWebinarParticipants({
    webinarId,
    type = 'live',
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
     * The type of webinar to query:
     * * `past` — All past webinars.
     * * `live` - All live webinars.
     *
     * This value defaults to `live`.
     */
    type?: 'past' | 'live';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Additional fields to include in the query:
     * * `registrant_id` — Include the webinar registrant's ID. The registrant ID is the [webinar registrant's unique ID](/docs/api-reference/zoom-api/methods#operation/webinarRegistrants).
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
     * Information about the webinar participants.
     */
    participants?: Array<{
      /**
       * The participant's [audio quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
       * * `good` — The audio is almost flawless and the quality is excellent.
       * * `fair` — The audio occasionally has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
       * * `poor` — The audio often has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
       * * `bad` — The sound quality is extremely poor and the audio content is almost inaudible.
       */
      audio_quality?: '' | 'good' | 'fair' | 'poor' | 'bad';
      /**
       * The participant's connection type.
       */
      connection_type?: string;
      /**
       * The participant's SDK identifier. This value can be alphanumeric, up to a maximum length of 15 characters.
       */
      customer_key?: string;
      /**
       * The data center that the participant is leveraging to join the webinar.
       */
      data_center?: string;
      /**
       * The type of device the participant used to join the webinar:
       * * `Phone` — The participant joined via PSTN.
       * * `H.323/SIP` — The participant joined via an H.323 or SIP device.
       * * `Windows` — The participant joined via VoIP using a Windows device.
       * * `Mac` — The participant joined via VoIP using a Mac device.
       * * `iOS` — The participant joined via VoIP using an iOS device.
       * * `Android` — The participant joined via VoIP using an Android device.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      device?: 'Phone' | 'H.323/SIP' | 'Windows' | 'Mac' | 'iOS' | 'Android';
      /**
       * The participant's PC domain.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      domain?: string;
      /**
       * The participant's email address. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      email?: string;
      /**
       * The meeting participant's SIP From header URI. The API only returns this response when the participant joins a meeting via SIP.
       */
      from_sip_uri?: string;
      /**
       * The data center where participant's meeting data is stored. This field includes a semicolon-separated list of HTTP Tunnel (HT), Cloud Room Connector (CRC), and Real-Time Web Gateway (RWG) location information.
       */
      full_data_center?: string;
      /**
       * The participant's hard disk ID.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      harddisk_id?: string;
      /**
       * The participant's universally unique ID. This value is the same as the participant's user ID if the participant joins the webinar by logging into Zoom. If the participant joins the webinar without logging into Zoom, this returns an empty value.
       */
      id?: string;
      /**
       * The participant's IP address.
       */
      ip_address?: string;
      /**
       * The time at which participant joined the webinar.
       */
      join_time?: string;
      /**
       * The reason why the participant left the webinar, where `$name` is the participant's username:
       * * `$name left the meeting.`
       * * `$name got disconnected from the meeting.`
       * * `Host ended the meeting.`
       * * `Host closed the meeting.`
       * * `Host started a new meeting.`
       * * `Network connection error.`
       * * `Host did not join.`
       * * `Exceeded free meeting minutes limit.`
       * * `Removed by host.`
       * * `Unknown reason.`
       * * `Leave waiting room.`
       * * `Removed by host from waiting room.`
       */
      leave_reason?:
        | '$name left the webinar.'
        | '$name got disconnected from the webinar.'
        | 'Host ended the webinar.'
        | 'Host closed the webinar.'
        | 'Host started a new webinar.'
        | 'Network connection error.'
        | 'Host did not join.'
        | 'Exceeded free webinar minutes limit.'
        | 'Removed by host.'
        | 'Unknown reason.'
        | 'Leave waiting room.'
        | 'Removed by host from waiting room.';
      /**
       * The time at which a participant left the webinar. For live webinars, this field will only return if a participant has left the ongoing webinar.
       */
      leave_time?: string;
      /**
       * The participant's location.
       */
      location?: string;
      /**
       * The participant's MAC address.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      mac_addr?: string;
      /**
       * The type of microphone that the participant used during the webinar.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      microphone?: string;
      /**
       * The participant's network type:
       *
       * * `Wired`
       * * `Wifi`
       * * `PPP` — Point-to-Point.
       * * `Cellular` — 3G, 4G, and 5G cellular.
       * * `Others` — An unknown device.
       */
      network_type?: 'Wired' | 'Wifi' | 'PPP' | 'Cellular' | 'Others';
      /**
       * The participant's PC name.
       */
      pc_name?: string;
      /**
       * Whether the recording feature was used during the webinar.
       */
      recording?: boolean;
      /**
       * The participant's unique registrant ID. This field only returns if you pass the `registrant_id` value for the `include_fields` query parameter.
       *
       * This field does not return if the `type` query parameter is the `live` value.
       */
      registrant_id?: string;
      /**
       * The participant's role:
       * * `host` — Host.
       * * `attendee` — Attendee.
       * * `panelist` — Panelist.
       */
      role?: 'host' | 'attendee' | 'panelist';
      /**
       * The participant's [screen share quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
       * * `good` — The video is almost flawless and the quality is excellent.
       * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
       * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
       * * `bad` — The picture is very blurred and often gets stuck.
       */
      screen_share_quality?: '' | 'good' | 'fair' | 'poor' | 'bad';
      /**
       * Whether the participant chose to share an iPhone/iPad app during the screenshare.
       */
      share_application?: boolean;
      /**
       * Whether the participant chose to share their desktop during the screenshare.
       */
      share_desktop?: boolean;
      /**
       * Whether the participant chose to share their whiteboard during the screenshare.
       */
      share_whiteboard?: boolean;
      /**
       * The meeting participant's SIP (Session Initiation Protocol) Contact header URI. The API only returns this response when the participant joins a meeting via SIP.
       */
      sip_uri?: string;
      /**
       * The type of speaker that the participant used during the webinar.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      speaker?: string;
      /**
       * The participant's ID. This value assigned to a participant upon joining a webinar and is only valid for the webinar's duration.
       */
      user_id?: string;
      /**
       * The participant's display name.
       */
      user_name?: string;
      /**
       * The participant's Zoom client version.
       */
      version?: string;
      /**
       * The participant's [video quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
       * * `good` — The video is almost flawless and the quality is excellent.
       * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
       * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
       * * `bad` — The picture is very blurred and often gets stuck.
       */
      video_quality?: '' | 'good' | 'fair' | 'poor' | 'bad';
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/webinars/{webinarId}/participants',
      path: {
        webinarId: webinarId,
      },
      query: {
        type: type,
        page_size: pageSize,
        next_page_token: nextPageToken,
        include_fields: includeFields,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Can not access webinar info, {webinarId}.`,
        400: `**Error Code:** \`12702\`<br>
        Can not access a webinar a year ago.`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        This webinar's detail info is not available or ID is not valid.`,
      },
    });
  }

  /**
   * List webinar participant QoS
   * Use this API to return a list of webinar participants from live or past webinars and the quality of service they received during the webinar. The data returned indicates the connection quality for sending/receiving video, audio, and shared content.
   *
   * **Note:**
   *
   * This API may return empty values for participants' `user_name`, `ip_address`, `location`, and `email` responses when the account calling this API:
   * * Does **not** have a signed HIPAA business associate agreement (BAA).
   * * Is a [**legacy** HIPAA BAA account](https://marketplace.zoom.us/docs/api-reference/other-references/legacy-business-associate-agreements).
   * * Displays data for any users who are **not** part of the host's account (external users) unless they meet certain conditions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
   *
   * **Scopes:** `dashboard_webinars:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Business, Education, or API Plan with Webinar add-on.
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar participants returned.<br>
   * Only available for paid accounts that have enabled the Dashboard feature.
   * @throws ApiError
   */
  public dashboardWebinarParticipantsQos({
    webinarId,
    type = 'live',
    pageSize = 1,
    nextPageToken,
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     * * If you provide a webinar ID, the API will return a response for the latest webinar instance.
     * * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.
     */
    webinarId: string;
    /**
     * The type of webinar to query:
     * * `past` — All past webinars.
     * * `live` - All live webinars.
     *
     * This value defaults to `live`.
     */
    type?: 'past' | 'live';
    /**
     * The number of items returned per page.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of pages returned for the request made.
     */
    page_count?: number;
    /**
     * The number of items per page.
     */
    page_size?: number;
    /**
     * The number of all records available across pages.
     */
    total_records?: number;
    /**
     * Information about the participant.
     */
    participants?: Array<{
      /**
       * The participant's universally unique ID. This value is the same as the participant's user ID if the participant joins the webinar by logging into Zoom. If the participant joins the webinar without logging into Zoom, this returns an empty value.
       */
      id?: string;
      /**
       * The type of device the participant used to join the meeting:
       * * `Phone` — The participant joined via PSTN.
       * * `H.323/SIP` — The participant joined via an H.323 or SIP device.
       * * `Windows` — The participant joined via VoIP using a Windows device.
       * * `Mac` — The participant joined via VoIP using a Mac device.
       * * `iOS` — The participant joined via VoIP using an iOS device.
       * * `Android` — The participant joined via VoIP using an Android device.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      device?: 'Phone' | 'H.323/SIP' | 'Windows' | 'Mac' | 'iOS' | 'Android';
      /**
       * The participant's PC domain.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      domain?: string;
      /**
       * The participant's hard disk ID.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      harddisk_id?: string;
      /**
       * The participant's IP address.
       */
      ip_address?: string;
      /**
       * The time at which the participant joined the meeting.
       */
      join_time?: string;
      /**
       * The time at which the participant left the meeting.
       */
      leave_time?: string;
      /**
       * The participant's location.
       */
      location?: string;
      /**
       * The participant's MAC address.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      mac_addr?: string;
      /**
       * The participant's PC name.
       */
      pc_name?: string;
      /**
       * The participant's ID. This value is assigned to a participant upon joining a meeting and is only valid for the meeting's duration.
       */
      user_id?: string;
      /**
       * The participant's display name.
       */
      user_name?: string;
      /**
       * The participant's quality of service information.
       */
      user_qos?: Array<{
        /**
         * The QoS metrics for screen sharing by a participant who joined the meeting via CRC.
         */
        as_device_from_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        /**
         * The QoS metrics for screen sharing output received by a participant who joined the meeting via CRC.
         */
        as_device_to_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        as_input?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
          /**
           * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
           */
          frame_rate?: string;
          /**
           * The number of pixels in each dimension that the video camera can display.
           */
          resolution?: string;
        };
        as_output?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
          /**
           * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
           */
          frame_rate?: string;
          /**
           * The number of pixels in each dimension that the video camera can display.
           */
          resolution?: string;
        };
        /**
         * The QoS metrics for audio sent by a participant who joined the meeting via a Cloud Room Connector (CRC).
         */
        audio_device_from_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        /**
         * The QoS metrics for audio received by a participant who joined the meeting via CRC.
         */
        audio_device_to_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        audio_input?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        audio_output?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        cpu_usage?: {
          /**
           * The system's maximum CPU usage.
           */
          system_max_cpu_usage?: string;
          /**
           * Zoom's average CPU usage.
           */
          zoom_avg_cpu_usage?: string;
          /**
           * Zoom's maximum CPU usage.
           */
          zoom_max_cpu_usage?: string;
          /**
           * Zoom's minimum CPU usage.
           */
          zoom_min_cpu_usage?: string;
        };
        /**
         * The QoS date and time.
         */
        date_time?: string;
        /**
         * The QoS metrics for video input being sent by a participant who joined the meeting via CRC.
         */
        video_device_from_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        /**
         * The QoS metrics for video output being sent by a participant who joined the meeting via CRC.
         */
        video_device_to_crc?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
        };
        video_input?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
          /**
           * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
           */
          frame_rate?: string;
          /**
           * The number of pixels in each dimension that the video camera can display.
           */
          resolution?: string;
        };
        video_output?: {
          /**
           * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
           */
          avg_loss?: string;
          /**
           * The bits per second transmitted along a digital network, in kbps.
           */
          bitrate?: string;
          /**
           * The variation in the delay of received packets, in milliseconds.
           */
          jitter?: string;
          /**
           * The time it took a packet to travel from one point to another, in milliseconds.
           */
          latency?: string;
          /**
           * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
           */
          max_loss?: string;
          /**
           * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
           */
          frame_rate?: string;
          /**
           * The number of pixels in each dimension that the video camera can display.
           */
          resolution?: string;
        };
      }>;
      /**
       * The participant's Zoom client version.
       */
      version?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/webinars/{webinarId}/participants/qos',
      path: {
        webinarId: webinarId,
      },
      query: {
        type: type,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        400: `**Error Code:** \`12702\`<br>
        Can not access a webinar a year ago.`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        This webinar's detail is not available or the Webinar ID is not valid.<br>
        This webinar has not ended yet.`,
      },
    });
  }

  /**
   * Get post webinar feedback
   * When a Webinar ends, each attendee will be prompted to share their Webinar experience by clicking either thumbs up or thumbs down. Use this API to retrieve the feedback submitted for a specific webinar. Note that this API only works for meetings scheduled after December 20, 2020.
   *
   * **Prerequisites:**
   * * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) setting must be enabled by the participant prior to the meeting.
   * * The user making the API request must be enrolled in a Business or a higher plan.
   *
   *
   * <br> **Scope:** `dashboard_webinars:read:admin`
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * @returns any **HTTP Status Code:** `200`<br>
   *
   *
   * @throws ApiError
   */
  public participantWebinarFeedback({
    webinarId,
    type = 'live',
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     * * If you provide a webinar ID, the API will return a response for the latest webinar instance.
     * * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.
     */
    webinarId: string;
    /**
     * Specify a value to get the response for the corresponding meeting type. The value of this field can be one of the following:<br> <br>`past` - Meeting that already occurred in the specified date range.<br>`pastOne` - Past meetings that were attended by only one user. <br>`live` - Live meetings.<br><br>
     *
     * If you do not provide this field, the default value will be `live` and thus, the API will only query responses for live meetings.
     */
    type?: 'past' | 'pastOne' | 'live';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of records returned within a single API call.
     */
    page_size?: number;
    participants?: Array<{
      /**
       * Date and time at which the feedback was submitted.
       */
      date_time?: string;
      /**
       * Email address of the participant. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      email?: string;
      /**
       * Feedback submitted by the participant.
       *
       * * `GOOD`: Thumbs up.
       * * `NOT GOOD`: Thumbs down.
       */
      quality?: 'GOOD' | 'NOT GOOD';
      /**
       * User ID of the participant.
       */
      user_id?: string;
      /**
       * Post webinar comment of the participant.
       */
      comment?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/webinars/{webinarId}/participants/satisfaction',
      path: {
        webinarId: webinarId,
      },
      query: {
        type: type,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`200\`<br>
        Only available for paid accounts that have dashboard feature enabled.
        `,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        Webinar ID is invalid or not end.`,
      },
    });
  }

  /**
   * Get sharing/recording details
   * Retrieve the sharing and recording details of participants from live or past webinars. <br><br>
   * **Scopes:** `dashboard_webinars:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy` <br>
   * **Prerequisites:**<br>
   * * Business, Education or API Plan with Webinar add-on.
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar participants returned.<br>
   * Only available for paid accounts that have enabled the Dashboard feature.
   * @throws ApiError
   */
  public dashboardWebinarParticipantShare({
    webinarId,
    type = 'live',
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     * * If you provide a webinar ID, the API will return a response for the latest webinar instance.
     * * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.
     */
    webinarId: string;
    /**
     * The type of webinar to query:
     * * `past` — All past webinars.
     * * `live` - All live webinars.
     *
     * This value defaults to `live`.
     */
    type?: 'past' | 'live';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
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
     * Array of participants.
     */
    participants?: Array<{
      /**
       * Array of sharing and recording details.
       */
      details?: Array<{
        /**
         * Type of content shared.
         */
        content?: string;
        /**
         * End time of sharing.
         */
        end_time?: string;
        /**
         * Start time of sharing.
         */
        start_time?: string;
      }>;
      /**
       * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
       */
      id?: string;
      /**
       * Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only.
       */
      user_id?: string;
      /**
       * Participant display name.
       */
      user_name?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/webinars/{webinarId}/participants/sharing',
      path: {
        webinarId: webinarId,
      },
      query: {
        type: type,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Can not access webinar info, {webinarId}.`,
        400: `**Error Code:** \`12702\`<br>
        Can not access a webinar a year ago.`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        This webinar's detail info is not available or ID is not valid.<br>
        This webinar has not ended yet.`,
      },
    });
  }

  /**
   * Get webinar participant QoS
   * Use this API to return the quality of service (QoS) for participants during live or past webinars. This data returned indicates the connection quality for sending/receiving video, audio, and shared content. The API returns this data for either the API request or when the API request was last received.
   *
   * When the sender sends its data, a timestamp is attached to the sender's data packet. The receiver then returns this timestamp to the sender. This helps determine the upstream and downstream latency, which includes the application processing time. The latency data returned is the five second average and five second maximum.
   *
   * This API will **not** return data if there is no data being sent or received at the time of request.
   *
   * **Note:**
   *
   * This API may return empty values for participants' `user_name`, `ip_address`, `location`, and `email` responses when the account calling this API:
   * * Does **not** have a signed HIPAA business associate agreement (BAA).
   * * Is a [**legacy** HIPAA BAA account](https://marketplace.zoom.us/docs/api-reference/other-references/legacy-business-associate-agreements).
   * * Displays data for any users who are **not** part of the host's account (external users) unless they meet certain conditions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
   *
   * **Scopes:** `dashboard_webinars:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Business, Education, or API Plan with Zoom Rooms set up.
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar participant QOS returned.
   * @throws ApiError
   */
  public dashboardWebinarParticipantQos({
    webinarId,
    participantId,
    type = 'live',
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     * * If you provide a webinar ID, the API will return a response for the latest webinar instance.
     * * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.
     */
    webinarId: string;
    /**
     * The participant's ID.
     */
    participantId: string;
    /**
     * The type of webinar to query:
     * * `past` — All past webinars.
     * * `live` - All live webinars.
     *
     * This value defaults to `live`.
     */
    type?: 'past' | 'live';
  }): CancelablePromise<{
    /**
     * The participant's universally unique ID. This value is the same as the participant's user ID if the participant joins the webinar by logging into Zoom. If the participant joins the webinar without logging into Zoom, this returns an empty value.
     */
    id?: string;
    /**
     * The type of device the participant used to join the meeting:
     * * `Phone` — The participant joined via PSTN.
     * * `H.323/SIP` — The participant joined via an H.323 or SIP device.
     * * `Windows` — The participant joined via VoIP using a Windows device.
     * * `Mac` — The participant joined via VoIP using a Mac device.
     * * `iOS` — The participant joined via VoIP using an iOS device.
     * * `Android` — The participant joined via VoIP using an Android device.
     *
     * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
     */
    device?: 'Phone' | 'H.323/SIP' | 'Windows' | 'Mac' | 'iOS' | 'Android';
    /**
     * The participant's PC domain.
     *
     * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
     */
    domain?: string;
    /**
     * The participant's hard disk ID.
     *
     * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
     */
    harddisk_id?: string;
    /**
     * The participant's IP address.
     */
    ip_address?: string;
    /**
     * The time at which the participant joined the meeting.
     */
    join_time?: string;
    /**
     * The time at which the participant left the meeting.
     */
    leave_time?: string;
    /**
     * The participant's location.
     */
    location?: string;
    /**
     * The participant's MAC address.
     *
     * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
     */
    mac_addr?: string;
    /**
     * The participant's PC name.
     */
    pc_name?: string;
    /**
     * The participant's ID. This value is assigned to a participant upon joining a meeting and is only valid for the meeting's duration.
     */
    user_id?: string;
    /**
     * The participant's display name.
     */
    user_name?: string;
    /**
     * The participant's quality of service information.
     */
    user_qos?: Array<{
      /**
       * The QoS metrics for screen sharing by a participant who joined the meeting via CRC.
       */
      as_device_from_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      /**
       * The QoS metrics for screen sharing output received by a participant who joined the meeting via CRC.
       */
      as_device_to_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      as_input?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
        /**
         * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
         */
        frame_rate?: string;
        /**
         * The number of pixels in each dimension that the video camera can display.
         */
        resolution?: string;
      };
      as_output?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
        /**
         * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
         */
        frame_rate?: string;
        /**
         * The number of pixels in each dimension that the video camera can display.
         */
        resolution?: string;
      };
      /**
       * The QoS metrics for audio sent by a participant who joined the meeting via a Cloud Room Connector (CRC).
       */
      audio_device_from_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      /**
       * The QoS metrics for audio received by a participant who joined the meeting via CRC.
       */
      audio_device_to_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      audio_input?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      audio_output?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      cpu_usage?: {
        /**
         * The system's maximum CPU usage.
         */
        system_max_cpu_usage?: string;
        /**
         * Zoom's average CPU usage.
         */
        zoom_avg_cpu_usage?: string;
        /**
         * Zoom's maximum CPU usage.
         */
        zoom_max_cpu_usage?: string;
        /**
         * Zoom's minimum CPU usage.
         */
        zoom_min_cpu_usage?: string;
      };
      /**
       * The QoS date and time.
       */
      date_time?: string;
      /**
       * The QoS metrics for video input being sent by a participant who joined the meeting via CRC.
       */
      video_device_from_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      /**
       * The QoS metrics for video output being sent by a participant who joined the meeting via CRC.
       */
      video_device_to_crc?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
      };
      video_input?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
        /**
         * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
         */
        frame_rate?: string;
        /**
         * The number of pixels in each dimension that the video camera can display.
         */
        resolution?: string;
      };
      video_output?: {
        /**
         * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
         */
        avg_loss?: string;
        /**
         * The bits per second transmitted along a digital network, in kbps.
         */
        bitrate?: string;
        /**
         * The variation in the delay of received packets, in milliseconds.
         */
        jitter?: string;
        /**
         * The time it took a packet to travel from one point to another, in milliseconds.
         */
        latency?: string;
        /**
         * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
         */
        max_loss?: string;
        /**
         * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
         */
        frame_rate?: string;
        /**
         * The number of pixels in each dimension that the video camera can display.
         */
        resolution?: string;
      };
    }>;
    /**
     * The participant's Zoom client version.
     */
    version?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/webinars/{webinarId}/participants/{participantId}/qos',
      path: {
        webinarId: webinarId,
        participantId: participantId,
      },
      query: {
        type: type,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Can not access webinar info, {webinarId}.`,
        400: `**Error Code:** \`12702\`<br>
        Can not access a webinar a year ago.`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\`<br>
        This webinar's detail info is not available or ID is not valid.`,
      },
    });
  }

  /**
   * List Zoom Rooms
   * List information on all Zoom Rooms in an account.<br><br>
   * **Scopes:** `dashboard_zr:read:admin`
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br>
   * **Prerequisites:**<br>
   * * Business, Education or API Plan with Zoom Rooms set up.
   *
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * List of Zoom rooms returned.<br>
   * Only available for paid accounts that have enabled the Dashboard feature.
   * @throws ApiError
   */
  public dashboardZoomRooms({
    pageSize = 30,
    pageNumber = 1,
    nextPageToken,
  }: {
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
  }): CancelablePromise<{
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
     * The total number of all the records available across pages.
     */
    total_records?: number;
    /**
     * Array of Zoom Rooms
     */
    zoom_rooms?: Array<{
      /**
       * Zoom room email type.
       */
      account_type?: string;
      /**
       * Zoom calendar name.
       */
      calender_name?: string;
      /**
       * Zoom Room camera.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      camera?: string;
      /**
       * Zoom room device IP.
       */
      device_ip?: string;
      /**
       * Zoom room email.
       */
      email?: string;
      health?: string;
      /**
       * Zoom room ID.
       */
      id?: string;
      /**
       * Zoom Room issues.
       */
      issues?: Array<string>;
      /**
       * Zoom room last start time.
       */
      last_start_time?: string;
      /**
       * Zoom room location.
       */
      location?: string;
      /**
       * The Zoom Room's location ID.
       */
      location_id?: string;
      /**
       * Zoom Room microphone.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      microphone?: string;
      /**
       * Zoom room name.
       */
      room_name?: string;
      /**
       * Zoom Room speaker.
       *
       * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
       */
      speaker?: string;
      /**
       * Zoom room status.
       */
      status?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/zoomrooms',
      query: {
        page_size: pageSize,
        page_number: pageNumber,
        next_page_token: nextPageToken,
      },
    });
  }

  /**
   * Get top 25 issues of Zoom Rooms
   * Get top 25 issues of Zoom Rooms.<br>
   * **Scopes:** `dashboard_zr:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   * **Prerequisites:**<br>
   * * Business, Education or API Plan with Zoom Rooms set up.
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Zoom Room Issue details returned
   * @throws ApiError
   */
  public dashboardZoomRoomIssue({
    from,
    to,
  }: {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: string;
    /**
     * End date.
     */
    to: string;
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
     * The number of all records available across pages
     */
    total_records?: number;
    issues?: Array<{
      /**
       * Issue Name.<br> The value of the this field could be one of the following:<br>
       * * `Room Controller disconnected`<br>
       * * `Room Controller connected`
       * * `Selected camera has disconnected`
       * * `Selected camera is reconnected`
       * * `Selected microphone has disconnected`
       * * `Selected microphone is reconnected`
       * * `Selected speaker has disconnected`
       * * `Selected speaker is reconnected`
       * * `Zoom room is offline`
       * * `Zoom room is online`
       * * `High CPU usage is detected`
       * * `Low bandwidth network is detected`
       * * `{name} battery is low`
       * * `{name} battery is normal`
       * * `{name} disconnected`
       * * `{name} connected`
       * * `{name} is not charging`
       *
       * Possible values for {name}: <br>
       * * Zoom Rooms Computer
       * * Controller
       * * Scheduling Display
       */
      issue_name?: string;
      /**
       * Zoom Room Count of Issue
       */
      zoom_rooms_count?: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/zoomrooms/issues',
      query: {
        from: from,
        to: to,
      },
    });
  }

  /**
   * Get Zoom Rooms details
   * The Zoom Rooms dashboard metrics lets you know the type of configuration a Zoom room has and details on the meetings held in that room.
   *
   * Use this API to retrieve information on a specific room.<br><br>
   * **Scopes:** `dashboard_zr:read:admin`<br> <br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`**Prerequisites:**<br>
   * * Business, Education or API Plan with Zoom Rooms set up.
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Zoom room returned.<br>
   * Only available for paid accounts that have enabled the Dashboard feature.
   * @throws ApiError
   */
  public dashboardZoomRoom({
    zoomroomId,
    from,
    to,
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * The Zoom room ID.
     */
    zoomroomId: string;
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
  }): CancelablePromise<{
    /**
     * Zoom room email type.
     */
    account_type?: string;
    /**
     * Zoom calendar name.
     */
    calender_name?: string;
    /**
     * Zoom Room camera.
     *
     * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
     */
    camera?: string;
    /**
     * Zoom room device IP.
     */
    device_ip?: string;
    /**
     * Zoom room email.
     */
    email?: string;
    /**
     * Health of the Zoom Room.
     */
    health?: string;
    /**
     * Zoom room ID.
     */
    id?: string;
    /**
     * Issues encountered by the Zoom Room.
     */
    issues?: Array<string>;
    /**
     * Zoom room last start time.
     */
    last_start_time?: string;
    /**
     * Zoom room location.
     */
    location?: string;
    /**
     * Zoom Room microphone.
     *
     * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
     */
    microphone?: string;
    /**
     * Zoom room name.
     */
    room_name?: string;
    /**
     * Zoom Room speaker.
     *
     * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
     */
    speaker?: string;
    /**
     * Zoom room status.
     */
    status?: string;
    /**
     * Meeting metric details.
     */
    live_meeting?: {
      /**
       * Host display name.
       */
      host?: string;
      /**
       * Custom keys and values assigned to the meeting.
       */
      custom_keys?: Array<{
        /**
         * Custom key associated with the meeting.
         */
        key?: string;
        /**
         * Value of the custom key associated with the meeting.
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
      duration?: string;
      /**
       * Email address of the host.
       */
      email?: string;
      /**
       * Meeting end time.
       */
      end_time?: string;
      /**
       * Indicates whether or not [third party audio](https://support.zoom.us/hc/en-us/articles/202470795-3rd-Party-Audio-Conference) was used in the meeting.
       */
      has_3rd_party_audio?: boolean;
      /**
       * Whether the archiving feature was used in the meeting.
       */
      has_archiving?: boolean;
      /**
       * Indicates whether or not the PSTN was used in the meeting.
       */
      has_pstn?: boolean;
      /**
       * Indicates whether or not the recording feature was used in the meeting.
       */
      has_recording?: boolean;
      /**
       * Indicates whether or not screenshare feature was used in the meeting.
       */
      has_screen_share?: boolean;
      /**
       * Indicates whether or not someone joined the meeting using SIP.
       */
      has_sip?: boolean;
      /**
       * Indicates whether or not video was used in the meeting.
       */
      has_video?: boolean;
      /**
       * Indicates whether or not VoIP was used in the meeting.
       */
      has_voip?: boolean;
      /**
       * Indicates whether a manual caption was enabled in the meeting.
       */
      has_manual_captions?: boolean;
      /**
       * Indicates whether an automated caption was enabled in the meeting.
       */
      has_automated_captions?: boolean;
      /**
       * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
       */
      id?: number;
      /**
       * The number of Zoom Room participants in the meeting.
       */
      in_room_participants?: number;
      /**
       * Meeting participant count.
       */
      participants?: number;
      /**
       * Meeting start time.
       */
      start_time?: string;
      /**
       * Meeting topic.
       */
      topic?: string;
      /**
       * License type of the user.
       */
      user_type?: string;
      /**
       * Meeting UUID. Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
       */
      uuid?: string;
    };
    /**
     * Pagination object.
     */
    past_meetings?: {
      /**
       * Start date for this report in 'yyyy-mm-dd' format.
       */
      from?: string;
      /**
       * End date for this report in 'yyyy-mm-dd' format.
       */
      to?: string;
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
       * Array of meeting objects.
       */
      meetings?: Array<{
        /**
         * Host display name.
         */
        host?: string;
        /**
         * Custom keys and values assigned to the meeting.
         */
        custom_keys?: Array<{
          /**
           * Custom key associated with the meeting.
           */
          key?: string;
          /**
           * Value of the custom key associated with the meeting.
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
        duration?: string;
        /**
         * Email address of the host.
         */
        email?: string;
        /**
         * Meeting end time.
         */
        end_time?: string;
        /**
         * Indicates whether or not [third party audio](https://support.zoom.us/hc/en-us/articles/202470795-3rd-Party-Audio-Conference) was used in the meeting.
         */
        has_3rd_party_audio?: boolean;
        /**
         * Whether the archiving feature was used in the meeting.
         */
        has_archiving?: boolean;
        /**
         * Indicates whether or not the PSTN was used in the meeting.
         */
        has_pstn?: boolean;
        /**
         * Indicates whether or not the recording feature was used in the meeting.
         */
        has_recording?: boolean;
        /**
         * Indicates whether or not screenshare feature was used in the meeting.
         */
        has_screen_share?: boolean;
        /**
         * Indicates whether or not someone joined the meeting using SIP.
         */
        has_sip?: boolean;
        /**
         * Indicates whether or not video was used in the meeting.
         */
        has_video?: boolean;
        /**
         * Indicates whether or not VoIP was used in the meeting.
         */
        has_voip?: boolean;
        /**
         * Indicates whether a manual caption was enabled in the meeting.
         */
        has_manual_captions?: boolean;
        /**
         * Indicates whether an automated caption was enabled in the meeting.
         */
        has_automated_captions?: boolean;
        /**
         * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
         */
        id?: number;
        /**
         * The number of Zoom Room participants in the meeting.
         */
        in_room_participants?: number;
        /**
         * Meeting participant count.
         */
        participants?: number;
        /**
         * Meeting start time.
         */
        start_time?: string;
        /**
         * Meeting topic.
         */
        topic?: string;
        /**
         * License type of the user.
         */
        user_type?: string;
        /**
         * Meeting UUID. Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
         */
        uuid?: string;
      }>;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/zoomrooms/{zoomroomId}',
      path: {
        zoomroomId: zoomroomId,
      },
      query: {
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        The next page token is either invalid or has expired.`,
      },
    });
  }

  /**
   * List the client versions
   * Use this API to list all the client versions and its count.
   *
   * **Scopes:** `dashboard:read:admin,dashboard_home:read:admin,zms:dashboard:read` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   *
   * **Prerequisites:**
   * * A Business or a higher plan.
   * @returns any **HTTP Status Code:** `200` <br>
   * The client versions returned successfully.<br>
   * Only available for paid accounts that have enabled the Dashboard feature.
   * @throws ApiError
   */
  public getClientVersions(): CancelablePromise<{
    /**
     * List of the client versions.
     */
    client_versions?: Array<{
      /**
       * The client version
       */
      client_version?: string;
      /**
       * The total count of the client version
       */
      total_count?: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/metrics/client_versions',
    });
  }
}
