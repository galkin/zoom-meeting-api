/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MeetingsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List meetings
   * Use this API to list a user's (meeting host) scheduled meetings. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Note:**
   * * This API **only** supports scheduled meetings. This API does not return information about instant meetings.
   * * This API only returns a user's [unexpired meetings](https://support.zoom.us/hc/en-us/articles/201362373-Meeting-ID#h_c73f9b08-c1c0-4a1a-b538-e01ebb98e844).
   *
   * **Scopes:** `meeting:read:admin`, `meeting:read` </br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200`<br>
   * List of meeting objects returned.
   * @throws ApiError
   */
  public meetings({
    userId,
    type = 'scheduled',
    pageSize = 30,
    nextPageToken,
    pageNumber,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * The type of meeting:
     * * `scheduled` — All valid previous (unexpired) meetings, live meetings, and upcoming scheduled meetings.
     * * `live` — All the ongoing meetings.
     * * `upcoming` — All upcoming meetings, including live meetings.
     * * `upcoming_meetings` — All upcoming meetings, including live meetings.
     * * `previous_meetings` — All the previous meetings.
     */
    type?: 'scheduled' | 'live' | 'upcoming' | 'upcoming_meetings' | 'previous_meetings';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The page number of the current page in the returned records.
     */
    pageNumber?: number;
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
     * List of Meeting objects.
     */
    meetings?: Array<{
      /**
       * Meeting description. The length of agenda gets truncated to 250 characters when you list all meetings for a user. To view the complete agenda of a meeting, retrieve details for a single meeting, use the [**Get a meeting**](/docs/api-reference/zoom-api/methods#operation/meeting) API.
       */
      agenda?: string;
      /**
       * Time of creation.
       */
      created_at?: string;
      /**
       * Meeting duration.
       */
      duration?: number;
      /**
       * ID of the user who is set as the host of the meeting.
       */
      host_id?: string;
      /**
       * Meeting ID - also known as the meeting number in long (int64) format.
       */
      id?: number;
      /**
       * URL using which participants can join a meeting.
       */
      join_url?: string;
      /**
       * [Personal meeting ID](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#understanding-personal-meeting-id-pmi). This field is only returned if PMI was used to schedule the meeting.
       */
      pmi?: string;
      /**
       * Meeting start time.
       */
      start_time?: string;
      /**
       * Timezone to format the meeting start time.
       */
      timezone?: string;
      /**
       * Meeting topic.
       */
      topic?: string;
      /**
       * Meeting Types:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`8` - Recurring meeting with fixed time.
       */
      type?: 1 | 2 | 3 | 8;
      /**
       * Unique Meeting ID. Each meeting instance will generate its own Meeting UUID.
       */
      uuid?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/meetings',
      path: {
        userId: userId,
      },
      query: {
        type: type,
        page_size: pageSize,
        next_page_token: nextPageToken,
        page_number: pageNumber,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\`<br>
        User ID not found.<br>
         **Error Code:** \`1001\`<br>
        User {userId} not exist or not belong to this account.<br>`,
      },
    });
  }

  /**
   * Create a meeting
   * Use this API to [create a meeting](https://support.zoom.us/hc/en-us/articles/201362413-Scheduling-meetings) for a user. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * * A meeting's `start_url` value is the URL a host or an alternative host can use to start a meeting. The expiration time for the `start_url` value is **two hours** for all regular users.
   * * For `custCreate` meeting hosts (users created with the `custCreate` parameter via the [**Create users**](/docs/api-reference/zoom-api/methods#operation/userCreate) API), the expiration time of the `start_url` parameter is **90 days** from the generation of the `start_url`.
   *
   * **Note:**
   *
   * For security reasons, the recommended way to programmatically (after expiry) get the updated `start_url` value is to call the [**Get a meeting**](/docs/api-reference/zoom-api/methods#operation/meeting) API. Refer to the `start_url` value in the response.
   *
   * **Scopes:** `meeting:write:admin`, `meeting:write`
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium` <br>
   * * This API has a daily rate limit of **100 requests per day**. The rate limit is applied against the `userId` of the **meeting host** used to make the request.
   * @returns any **HTTP Status Code:** `201`<br>
   * Meeting created.
   * @throws ApiError
   */
  public meetingCreate({
    userId,
    requestBody,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * Meeting object.
     */
    requestBody: {
      /**
       * The meeting's agenda. This value has a maximum length of 2,000 characters.
       */
      agenda?: string;
      /**
       * Whether to generate a default password using the user's settings. This value defaults to `false`.
       *
       * If this value is `true` and the user has the PMI setting enabled with a password, then the user's meetings will use the PMI password. It will **not** use a default password.
       */
      default_password?: boolean;
      /**
       * The meeting's scheduled duration, in minutes. This field is only used for scheduled meetings (`2`).
       */
      duration?: number;
      /**
       * The password required to join the meeting. By default, a password can **only** have a maximum length of 10 characters and only contain alphanumeric characters and the `@`, `-`, `_`, and `*` characters.
       * * If the account owner or administrator has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the password **must** meet those requirements.
       * * If password requirements are enabled, use the [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](/docs/api-reference/zoom-api/ma#operation/accountSettings) API to get the requirements.
       */
      password?: string;
      /**
       * Whether to create a prescheduled meeting via the [GSuite app](https://support.zoom.us/hc/en-us/articles/360020187492-Zoom-for-GSuite-add-on). This **only** supports the meeting `type` value of `2` (scheduled meetings) and `3` (recurring meetings with no fixed time):
       * * `true` — Create a prescheduled meeting.
       * * `false` — Create a regular meeting.
       */
      pre_schedule?: boolean;
      /**
       * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
       */
      recurrence?: {
        /**
         * Select the final date on which the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
         */
        end_date_time?: string;
        /**
         * Select how many times the meeting should recur before it is canceled. (Cannot be used with "end_date_time".)
         */
        end_times?: number;
        /**
         * Use this field **only if you're scheduling a recurring meeting of type** `3` to state which day in a month, the meeting should recur. The value range is from 1 to 31.
         *
         * For instance, if you would like the meeting to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the meeting to recur every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
         */
        monthly_day?: number;
        /**
         * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
         */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /**
         * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
         *
         * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
         */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /**
         * Define the interval at which the meeting should recur. For instance, if you would like to schedule a meeting that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
         *
         * For a daily meeting, the maximum interval you can set is `90` days. For a weekly meeting the maximum interval that you can set is  of `12` weeks. For a monthly meeting, there is a maximum of `3` months.
         *
         *
         */
        repeat_interval?: number;
        /**
         * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
         */
        type: 1 | 2 | 3;
        /**
         * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
         *
         * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
         */
        weekly_days?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
      };
      /**
       * The email address or user ID of the user to schedule a meeting for.
       */
      schedule_for?: string;
      /**
       * Information about the meeting's settings.
       */
      settings?: {
        /**
         * Add additional meeting [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars). Provide this value as an array of [country codes](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) for the countries available as data center regions in the [**Account Profile**](https://zoom.us/account/setting) interface but have been opted out of in the [user settings](https://zoom.us/profile).
         *
         * For example, the data center regions selected in your [**Account Profile**](https://zoom.us/account) are "Europe", "Hong Kong SAR", "Australia", "India", "Japan", "China", "United States", and "Canada". However, in the [**My Profile**](https://zoom.us/profile) settings, you did **not** select "India" and "Japan" for meeting and webinar traffic routing.
         *
         * To include "India" and "Japan" as additional data centers, use the `["IN", "TY"]` value for this field.
         */
        additional_data_center_regions?: Array<string>;
        /**
         * Whether to allow attendees to join a meeting from multiple devices. This setting is only applied to meetings with registration enabled.
         */
        allow_multiple_devices?: boolean;
        /**
         * A semicolon-separated list of the meeting's alternative hosts' email addresses or IDs.
         */
        alternative_hosts?: string;
        /**
         * Whether to send email notifications to alternative hosts. This value defaults to `true`.
         */
        alternative_hosts_email_notification?: boolean;
        /**
         * Enable meeting registration approval:
         * * `0` — Automatically approve registration.
         * * `1` — Manually approve registration.
         * * `2` — No registration required.
         *
         * This value defaults to `2`.
         */
        approval_type?: 0 | 1 | 2;
        /**
         * The list of approved or blocked users from specific countries or regions who can join the meeting.
         */
        approved_or_denied_countries_or_regions?: {
          /**
           * The list of approved countries or regions.
           */
          approved_list?: Array<string>;
          /**
           * The list of blocked countries or regions.
           */
          denied_list?: Array<string>;
          /**
           * Whether to enable the [**Approve or block entry for users from specific countries/regions**](https://support.zoom.us/hc/en-us/articles/360060086231-Approve-or-block-entry-for-users-from-specific-countries-regions) setting.
           */
          enable?: boolean;
          /**
           * Whether to allow or block users from specific countries or regions:
           * * `approve` — Allow users from specific countries or regions to join the meeting. If you select this setting, you must include the approved countries or regions in the `approved_list` field.
           * * `deny` — Block users from specific countries or regions from joining the meeting. If you select this setting, you must include the blocked countries or regions in the `denied_list` field.
           */
          method?: 'approve' | 'deny';
        };
        /**
         * How participants join the audio portion of the meeting:
         * * `both` — Both telephony and VoIP.
         * * `telephony` — Telephony only.
         * * `voip` — VoIP only.
         *
         * This value defaults to `both`.
         */
        audio?: 'both' | 'telephony' | 'voip';
        /**
         * The meeting's authenticated domains. Only Zoom users whose email address contains an authenticated domain can join the meeting. Comma-separate multiple domains or use a wildcard for listing domains.
         */
        authentication_domains?: string;
        /**
         * A list of participants that can bypass meeting authentication. These participants will receive a unique meeting invite.
         */
        authentication_exception?: Array<{
          /**
           * The participant's email address.
           */
          email?: string;
          /**
           * The participant's name.
           */
          name?: string;
        }>;
        /**
         * If the `meeting_authentication` value is `true`, the type of authentication required for users to join a meeting.
         *
         * To get this value, use the `authentication_options` array's `id` value in the [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API response.
         */
        authentication_option?: string;
        /**
         * The automatic recording settings:
         * * `local` — Record the meeting locally.
         * * `cloud` — Record the meeting to the cloud.
         * * `none` — Auto-recording disabled.
         *
         * This value defaults to `none`.
         */
        auto_recording?: 'local' | 'cloud' | 'none';
        /**
         * The [pre-assigned breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms) settings.
         */
        breakout_room?: {
          /**
           * Whether to enable the [**Breakout Room pre-assign**](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms) option.
           */
          enable?: boolean;
          /**
           * Information about the breakout rooms.
           */
          rooms?: Array<{
            /**
             * The breakout room's name.
             */
            name?: string;
            /**
             * The email addresses of the participants to assign to the breakout room.
             */
            participants?: Array<string>;
          }>;
        };
        /**
         * Indicates the type of calendar integration used to schedule the meeting:
         * * `1` — [Zoom Outlook add-in](https://support.zoom.us/hc/en-us/articles/360031592971-Getting-started-with-Outlook-plugin-and-add-in)
         * * `2` — [Zoom for Google Workspace add-on](https://support.zoom.us/hc/en-us/articles/360020187492-Using-the-Zoom-for-Google-Workspace-add-on)
         *
         * Works with the `private_meeting` field to determine whether to share details of meetings or not.
         */
        calendar_type?: 1 | 2;
        /**
         * Whether to close registration after the event date. This value defaults to `false`.
         */
        close_registration?: boolean;
        /**
         * Whether to host the meeting in China (CN). This value defaults to `false`.
         * @deprecated
         */
        cn_meeting?: boolean;
        /**
         * The contact email address for meeting registration.
         */
        contact_email?: string;
        /**
         * The contact name for meeting registration.
         */
        contact_name?: string;
        /**
         * Whether to send email notifications to [alternative hosts](https://support.zoom.us/hc/en-us/articles/208220166) and [users with scheduling privileges](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege). This value defaults to `true`.
         */
        email_notification?: boolean;
        /**
         * The type of [end-to-end (E2EE) encryption](https://support.zoom.us/hc/en-us/articles/360048660871) to use for the meeting:
         * * `enhanced_encryption` — Enhanced encryption. Encryption is stored in the cloud when you enable this option.
         * * `e2ee` — End-to-end encryption. The encryption key is stored on your local device and **cannot** be obtained by anyone else. When you use E2EE encryption, [certain features](https://support.zoom.us/hc/en-us/articles/360048660871), such as cloud recording or phone and SIP/H.323 dial-in, are **disabled**.
         */
        encryption_type?: 'enhanced_encryption' | 'e2ee';
        /**
         * Whether to enable the [**Focus Mode** feature](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) when the meeting starts.
         */
        focus_mode?: boolean;
        /**
         * A list of available global dial-in countries.
         */
        global_dial_in_countries?: Array<string>;
        /**
         * Whether to start meetings with the host video on.
         */
        host_video?: boolean;
        /**
         * Whether to host the meeting in India (IN). This value defaults to `false`.
         * @deprecated
         */
        in_meeting?: boolean;
        /**
         * If the value of the `join_before_host` field is `true`, this field indicates the time limits within which a participant can join a meeting before the meeting's host:
         *
         * * `0` — Allow the participant to join the meeting at anytime.
         * * `5` — Allow the participant to join 5 minutes before the meeting's start time.
         * * `10` — Allow the participant to join 10 minutes before the meeting's start time.
         */
        jbh_time?: 0 | 5 | 10;
        /**
         * Whether participants can join the meeting before its host. This field is only used for scheduled meetings (`2`) or recurring meetings (`3` and `8`). This value defaults to `false`.
         *
         * If the [**Waiting Room** feature](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) is enabled, this setting is **disabled**.
         */
        join_before_host?: boolean;
        /**
         * The meeting's [language interpretation settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars). Make sure to add the language in the web portal in order to use it in the API. See link for details.
         *
         * **Note:** This feature is only available for certain Meeting add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting.
         */
        language_interpretation?: {
          /**
           * Whether to enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars) for the meeting.
           */
          enable?: boolean;
          /**
           * Information about the meeting's language interpreters.
           */
          interpreters?: Array<{
            /**
             * The interpreter's email address.
             */
            email?: string;
            /**
             * A comma-separated list of the interpreter's languages. The string must contain two [country IDs](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
             *
             * For example, if the interpreter will translate from English to Chinese, then this value will be `US,CN`.
             */
            languages?: string;
          }>;
        };
        /**
         * If true, only [authenticated](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) users can join the meeting.
         */
        meeting_authentication?: boolean;
        /**
         * A list of the meeting's invitees.
         */
        meeting_invitees?: Array<{
          /**
           * The invitee's email address.
           */
          email?: string;
        }>;
        /**
         * Whether to mute participants upon entry.
         */
        mute_upon_entry?: boolean;
        /**
         * Whether to start meetings with the participant video on.
         */
        participant_video?: boolean;
        /**
         * Whether to set the meeting as private.
         */
        private_meeting?: boolean;
        /**
         * Whether to send registrants an email confirmation:
         * * `true` — Send a confirmation email.
         * * `false` — Do not send a confirmation email.
         */
        registrants_confirmation_email?: boolean;
        /**
         * Whether to send registrants email notifications about their registration approval, cancellation, or rejection:
         *
         * * `true` — Send an email notification.
         * * `false` — Do not send an email notification.
         *
         * Set this value to `true` to also use the `registrants_confirmation_email` parameter.
         */
        registrants_email_notification?: boolean;
        /**
         * The meeting's registration type:
         * * `1` — Attendees register once and can attend any meeting occurrence.
         * * `2` — Attendees must register for each meeting occurrence.
         * * `3` — Attendees register once and can select one or more meeting occurrences to attend.
         *
         * This field is only for recurring meetings with fixed times (`8`). This value defaults to `1`.
         */
        registration_type?: 1 | 2 | 3;
        /**
         * Whether to include social media sharing buttons on the meeting's registration page. This setting is only applied to meetings with registration enabled.
         */
        show_share_button?: boolean;
        /**
         * Whether to use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi) instead of a generated meeting ID. This field is only used for scheduled meetings (`2`), instant meetings (`1`), or recurring meetings with no fixed time (`3`). This value defaults to `false`.
         */
        use_pmi?: boolean;
        /**
         * Whether to enable the [**Waiting Room** feature](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room). If this value is `true`, this **disables** the `join_before_host` setting.
         */
        waiting_room?: boolean;
        /**
         * Whether to add a watermark when viewing a shared screen.
         */
        watermark?: boolean;
        /**
         * Whether the **Allow host to save video order** feature is enabled.
         */
        host_save_video_order?: boolean;
        /**
         * Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
         */
        alternative_host_update_polls?: boolean;
      };
      /**
       * The meeting's start time. This field is only used for scheduled and/or recurring meetings with a fixed time. This supports local time and GMT formats.
       * * To set a meeting's start time in GMT, use the `yyyy-MM-ddTHH:mm:ssZ` date-time format. For example, `2020-03-31T12:02:00Z`.
       * * To set a meeting's start time using a specific timezone, use the `yyyy-MM-ddTHH:mm:ss` date-time format and specify the [timezone ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones) in the `timezone` field. If you do not specify a timezone, the `timezone` value defaults to your Zoom account's timezone. You can also use `UTC` for the `timezone` value.
       */
      start_time?: string;
      /**
       * The **account admin meeting template** ID with which to schedule a meeting using a [meeting template](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates). For a list of account admin-provided meeting templates, use the [**List meeting templates**](/docs/api-reference/zoom-api/methods#operation/listMeetingTemplates) API.
       * * At this time, this field **only** accepts account admin meeting template IDs.
       * * To enable the account admin meeting templates feature, [contact Zoom support](https://support.zoom.us/hc/en-us).
       */
      template_id?: string;
      /**
       * The timezone to assign to the `start_time` value. This field is only used for scheduled meetings (`2`).
       *
       * For a list of supported timezones and their format, refer to our [timezone list documentation](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones).
       */
      timezone?: string;
      /**
       * The meeting's topic.
       */
      topic?: string;
      /**
       * Information about the meeting's tracking fields.
       */
      tracking_fields?: Array<{
        /**
         * The tracking field's label.
         */
        field: string;
        /**
         * The tracking field's value.
         */
        value?: string;
      }>;
      /**
       * The type of meeting:
       * * `1` — An instant meeting.
       * * `2` — A scheduled meeting.
       * * `3` — A recurring meeting with no fixed time.
       * * `8` — A recurring meeting with fixed time.
       */
      type?: 1 | 2 | 3 | 8;
    };
  }): CancelablePromise<{
    /**
     * The ID of the user who scheduled this meeting on behalf of the host.
     */
    assistant_id?: string;
    /**
     * Email address of the meeting host.
     */
    host_email?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * URL using which registrants can register for a meeting. This field is only returned for meetings that have enabled registration.
     */
    registration_url?: string;
    /**
     * Agenda
     */
    agenda?: string;
    /**
     * The date and time at which this meeting was created.
     */
    created_at?: string;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * H.323/SIP room system password
     */
    h323_password?: string;
    /**
     * URL for participants to join the meeting. This URL should only be shared with users that you would like to invite for the meeting.
     */
    join_url?: string;
    /**
     * Array of occurrence objects.
     */
    occurrences?: Array<{
      /**
       * Duration.
       */
      duration?: number;
      /**
       * Occurrence ID: Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences.
       */
      occurrence_id?: string;
      /**
       * Start time.
       */
      start_time?: string;
      /**
       * Occurrence status.
       */
      status?: string;
    }>;
    /**
     * Meeting password. Password may only contain the following characters: `[a-z A-Z 0-9 @ - _ * !]`
     *
     * If "Require a password when scheduling new meetings" setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the password field will be autogenerated in the response even if it is not provided in the API request.
     *
     *
     *
     */
    password?: string;
    /**
     * [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi). Only used for scheduled meetings and recurring meetings with no fixed time.
     */
    pmi?: number;
    /**
     * Whether the prescheduled meeting was created via the [GSuite app](https://support.zoom.us/hc/en-us/articles/360020187492-Zoom-for-GSuite-add-on). This **only** supports the meeting `type` value of `2` (scheduled meetings) and `3` (recurring meetings with no fixed time):
     * * `true` — A GSuite prescheduled meeting.
     * * `false` — A regular meeting.
     */
    pre_schedule?: boolean;
    /**
     * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
     */
    recurrence?: {
      /**
       * Select the final date on which the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
       */
      end_date_time?: string;
      /**
       * Select how many times the meeting should recur before it is canceled. (Cannot be used with "end_date_time".)
       */
      end_times?: number;
      /**
       * Use this field **only if you're scheduling a recurring meeting of type** `3` to state which day in a month, the meeting should recur. The value range is from 1 to 31.
       *
       * For instance, if you would like the meeting to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the meeting to recur every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
       */
      monthly_day?: number;
      /**
       * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
       */
      monthly_week?: -1 | 1 | 2 | 3 | 4;
      /**
       * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
       *
       * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
       */
      monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
      /**
       * Define the interval at which the meeting should recur. For instance, if you would like to schedule a meeting that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
       *
       * For a daily meeting, the maximum interval you can set is `90` days. For a weekly meeting the maximum interval that you can set is  of `12` weeks. For a monthly meeting, there is a maximum of `3` months.
       *
       *
       */
      repeat_interval?: number;
      /**
       * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
       */
      type: 1 | 2 | 3;
      /**
       * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
       *
       * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
       */
      weekly_days?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
    };
    /**
     * Meeting settings.
     */
    settings?: {
      /**
       * Allow attendees to join the meeting from multiple devices. This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
       */
      allow_multiple_devices?: boolean;
      /**
       * A semicolon-separated list of the meeting's alternative hosts' email addresses or IDs.
       */
      alternative_hosts?: string;
      /**
       * Flag to determine whether to send email notifications to alternative hosts, default value is true.
       */
      alternative_hosts_email_notification?: boolean;
      /**
       * Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
       */
      alternative_host_update_polls?: boolean;
      /**
       * Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.** <br><br>
       *
       * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
       */
      approval_type?: 0 | 1 | 2;
      /**
       * Approve or block users from specific regions/countries from joining this meeting.
       *
       */
      approved_or_denied_countries_or_regions?: {
        /**
         * List of countries/regions from where participants can join this meeting.
         */
        approved_list?: Array<string>;
        /**
         * List of countries/regions from where participants can not join this meeting.
         */
        denied_list?: Array<string>;
        /**
         * `true`: Setting enabled to either allow users or block users from specific regions to join your meetings. <br>
         *
         * `false`: Setting disabled.
         */
        enable?: boolean;
        /**
         * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
         * `approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.<br><br>
         * `deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list`
         */
        method?: 'approve' | 'deny';
      };
      /**
       * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
       */
      audio?: 'both' | 'telephony' | 'voip';
      /**
       * If user has configured ["Sign Into Zoom with Specified Domains"](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
       */
      authentication_domains?: string;
      /**
       * The participants added here will receive unique meeting invite links and bypass authentication.
       */
      authentication_exception?: Array<{
        /**
         * Email address of the participant.
         */
        email?: string;
        /**
         * Name of the participant.
         */
        name?: string;
        /**
         * URL for participants to join the meeting
         */
        join_url?: string;
      }>;
      /**
       * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
       */
      authentication_name?: string;
      /**
       * Meeting authentication option id.
       */
      authentication_option?: string;
      /**
       * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
       */
      auto_recording?: 'local' | 'cloud' | 'none';
      /**
       * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
       */
      breakout_room?: {
        /**
         * Set the value of this field to `true` if you would like to enable the [breakout room pre-assign](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4) option.
         */
        enable?: boolean;
        /**
         * Create room(s).
         */
        rooms?: Array<{
          /**
           * Name of the breakout room.
           */
          name?: string;
          /**
           * Email addresses of the participants who are to be assigned to the breakout room.
           */
          participants?: Array<string>;
        }>;
      };
      /**
       * Indicates the type of calendar integration used to schedule the meeting:
       * * `1` — [Zoom Outlook add-in](https://support.zoom.us/hc/en-us/articles/360031592971-Getting-started-with-Outlook-plugin-and-add-in)
       * * `2` — [Zoom for Google Workspace add-on](https://support.zoom.us/hc/en-us/articles/360020187492-Using-the-Zoom-for-Google-Workspace-add-on)
       *
       * Works with the `private_meeting` field to determine whether to share details of meetings or not.
       */
      calendar_type?: 1 | 2;
      /**
       * Close registration after event date
       */
      close_registration?: boolean;
      /**
       * Host meeting in China.
       * @deprecated
       */
      cn_meeting?: boolean;
      /**
       * Contact email for registration
       */
      contact_email?: string;
      /**
       * Contact name for registration
       */
      contact_name?: string;
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
       * Whether to send email notifications to [alternative hosts](https://support.zoom.us/hc/en-us/articles/208220166) and [users with scheduling privileges](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege). This value defaults to `true`.
       */
      email_notification?: boolean;
      /**
       * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
       * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
       *
       * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
       */
      encryption_type?: 'enhanced_encryption' | 'e2ee';
      /**
       * Only signed in users can join this meeting.
       *
       * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
       * @deprecated
       */
      enforce_login?: boolean;
      /**
       * Only signed in users with specified domains can join meetings.
       *
       * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
       * @deprecated
       */
      enforce_login_domains?: string;
      /**
       * Whether the [**Focus Mode** feature](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) is enabled when the meeting starts.
       */
      focus_mode?: boolean;
      /**
       * List of global dial-in countries
       */
      global_dial_in_countries?: Array<string>;
      /**
       * Global Dial-in Countries/Regions
       */
      global_dial_in_numbers?: Array<{
        /**
         * City of the number, if any. For example, Chicago.
         */
        city?: string;
        /**
         * Country code. For example, BR.
         */
        country?: string;
        /**
         * Full name of country. For example, Brazil.
         */
        country_name?: string;
        /**
         * Phone number. For example, +1 2332357613.
         */
        number?: string;
        /**
         * Type of number.
         */
        type?: 'toll' | 'tollfree';
      }>;
      /**
       * Start video when the host joins the meeting.
       */
      host_video?: boolean;
      /**
       * Host meeting in India.
       * @deprecated
       */
      in_meeting?: boolean;
      /**
       * If the value of "join_before_host" field is set to true, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
       *
       * *  `0`: Allow participant to join anytime.
       * *  `5`: Allow participant to join 5 minutes before meeting start time.
       * * `10`: Allow participant to join 10 minutes before meeting start time.
       */
      jbh_time?: 0 | 5 | 10;
      /**
       * Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings.
       */
      join_before_host?: boolean;
      /**
       * The meeting's [language interpretation settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars). Make sure to add the language in the web portal in order to use it in the API. See link for details.
       *
       * **Note:** This feature is only available for certain Meeting add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting.
       */
      language_interpretation?: {
        /**
         * Whether to enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars) for the meeting.
         */
        enable?: boolean;
        /**
         * Information about the meeting's language interpreters.
         */
        interpreters?: Array<{
          /**
           * The interpreter's email address.
           */
          email?: string;
          /**
           * A comma-separated list of the interpreter's languages. The string must contain two [country IDs](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
           *
           * For example, if the interpreter will translate from English to Chinese, then this value will be `US,CN`.
           */
          languages?: string;
        }>;
      };
      /**
       * `true`- Only authenticated users can join meetings.
       */
      meeting_authentication?: boolean;
      /**
       * Mute participants upon entry.
       */
      mute_upon_entry?: boolean;
      /**
       * Start video when participants join the meeting.
       */
      participant_video?: boolean;
      /**
       * Whether the meeting is set as private.
       */
      private_meeting?: boolean;
      /**
       * Whether to send registrants an email confirmation:
       * * `true` — Send a confirmation email.
       * * `false` — Do not send a confirmation email.
       */
      registrants_confirmation_email?: boolean;
      /**
       * Whether to send registrants email notifications about their registration approval, cancellation, or rejection:
       *
       * * `true` — Send an email notification.
       * * `false` — Do not send an email notification.
       *
       * Set this value to `true` to also use the `registrants_confirmation_email` parameter.
       */
      registrants_email_notification?: boolean;
      /**
       * Registration type. Used for recurring meeting with fixed time only. <br>`1` Attendees register once and can attend any of the occurrences.<br>`2` Attendees need to register for each occurrence to attend.<br>`3` Attendees register once and can choose one or more occurrences to attend.
       */
      registration_type?: 1 | 2 | 3;
      /**
       * Show social share buttons on the meeting registration page.
       * This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
       */
      show_share_button?: boolean;
      /**
       * Use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi). Only used for scheduled meetings and recurring meetings with no fixed time.
       */
      use_pmi?: boolean;
      /**
       * Enable waiting room
       */
      waiting_room?: boolean;
      /**
       * Add watermark when viewing a shared screen.
       */
      watermark?: boolean;
      /**
       * Whether the **Allow host to save video order** feature is enabled.
       */
      host_save_video_order?: boolean;
    };
    /**
     * Meeting start date-time in UTC/GMT. Example: "2020-03-31T12:02:00Z"
     */
    start_time?: string;
    /**
     * URL to start the meeting. This URL should only be used by the host of the meeting and **should not be shared with anyone other than the host** of the meeting as anyone with this URL will be able to login to the Zoom Client as the host of the meeting.
     */
    start_url?: string;
    /**
     * Timezone to format start_time
     */
    timezone?: string;
    /**
     * Meeting topic
     */
    topic?: string;
    /**
     * Tracking fields
     */
    tracking_fields?: Array<{
      /**
       * Label of the tracking field.
       */
      field?: string;
      /**
       * Value for the field.
       */
      value?: string;
      /**
       * Indicates whether the [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) is visible in the meeting scheduling options in the Zoom Web Portal or not.
       *
       * `true`: Tracking field is visible. <br>
       *
       * `false`: Tracking field is not visible to the users in the meeting options in the Zoom Web Portal but the field was used while scheduling this meeting via API. An invisible tracking field can be used by users while scheduling meetings via API only.
       */
      visible?: boolean;
    }>;
    /**
     * Meeting Type
     */
    type?: 1 | 2 | 3 | 8;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users/{userId}/meetings',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>
        Invalid enforce_login_domains, separate multiple domains by semicolon.<br>
        A maximum of {rateLimitNumber} meetings can be created/updated for a single user in one day.
        `,
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`3000\`<br>
         * Instant meetings do not support the schedule_for parameter; you cannot schedule an instant meeting for another user.<br>
         * Users in '{0}' have been blocked from joining meetings and webinars. To unblock them, go to the Settings page in the Zoom web portal and update 'Block users in specific domains from joining meetings and webinars'.<br>
         * You cannot schedule a meeting for {0}.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.

         **Error Code:** \`300\` <br>
        The value that you entered for the schedule_for field is invalid. Enter a valid value and try again.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
        User not found.<br>

         **Error Code:** \`1001\`<br> User {userId} not exist or not belong to this account.
        `,
      },
    });
  }

  /**
   * Delete a meeting
   * Delete a meeting.<br><br>
   * **Scopes:** `meeting:write:admin` `meeting:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   * @returns void
   * @throws ApiError
   */
  public meetingDelete({
    meetingId,
    occurrenceId,
    scheduleForReminder,
    cancelMeetingReminder,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * The meeting or webinar occurrence ID.
     */
    occurrenceId?: string;
    /**
     * `true`: Notify host and alternative host about the meeting cancellation via email.
     * `false`: Do not send any email notification.
     */
    scheduleForReminder?: boolean;
    /**
     * `true`: Notify registrants about the meeting cancellation via email.
     *
     * `false`: Do not send any email notification to meeting registrants.
     *
     * The default value of this field is `false`.
     */
    cancelMeetingReminder?: boolean;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/meetings/{meetingId}',
      path: {
        meetingId: meetingId,
      },
      query: {
        occurrence_id: occurrenceId,
        schedule_for_reminder: scheduleForReminder,
        cancel_meeting_reminder: cancelMeetingReminder,
      },
      errors: {
        400: `**HTTP Status Code**: \`400\` <br>
         **Error Code**: \`1010\` <br>
        User does not belong to this account: {accountId}.<br>
         **Error Code**: \`3000\` <br>Cannot access meeting information.<br>Invalid occurrence_id.<br>
         **Error Code**: \`3002\` <br>
        Sorry, you cannot delete this meeting since it is in progress.<br>**Error Code**: \`3003\` <br>You are not the meeting host.<br>
         **Error Code**: \`3007\` <br>Sorry, you cannot delete this meeting since it has ended.<br>**Error Code**: \`3018\` <br>
        Not allowed to delete PMI.<br>**Error Code**: \`3037\` <br>Not allowed to delete PAC.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code**: \`404\` <br>
        Meeting not found.
         **Error Code**: \`1001\` <br>
        User does not exist: {userId}.<br>
         **Error Code**: \`3001\` <br>
        Meeting with this {meetingId} is not found or has expired.`,
      },
    });
  }

  /**
   * Get a meeting
   * Retrieve the details of a meeting.<br><br>
   * **Scopes:** `meeting:read:admin` `meeting:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting object returned.
   * @throws ApiError
   */
  public meeting({
    meetingId,
    occurrenceId,
    showPreviousOccurrences,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * Meeting Occurrence ID. Provide this field to view meeting details of a particular occurrence of the [recurring meeting](https://support.zoom.us/hc/en-us/articles/214973206-Scheduling-Recurring-Meetings).
     */
    occurrenceId?: string;
    /**
     * Set the value of this field to `true` if you would like to view meeting details of all previous occurrences of a [recurring meeting](https://support.zoom.us/hc/en-us/articles/214973206-Scheduling-Recurring-Meetings).
     */
    showPreviousOccurrences?: boolean;
  }): CancelablePromise<{
    /**
     * The ID of the user who scheduled this meeting on behalf of the host.
     */
    assistant_id?: string;
    /**
     * Email address of the meeting host.
     */
    host_email?: string;
    /**
     * ID of the user who is set as host of meeting.
     */
    host_id?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Unique meeting ID. Each meeting instance will generate its own Meeting UUID (i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). You can retrieve a list of UUIDs from past meeting instances using the [**List past meeting instances**](/docs/api-reference/zoom-api/methods#operation/pastMeetings) API. Please double encode your UUID when using it for API calls if the UUID begins with a `/` or contains `//` in it.
     *
     */
    uuid?: string;
    /**
     * Meeting description
     */
    agenda?: string;
    /**
     * Time of creation.
     */
    created_at?: string;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * Encrypted passcode for third party endpoints (H323/SIP).
     */
    encrypted_password?: string;
    /**
     * H.323/SIP room system passcode.
     */
    h323_password?: string;
    /**
     * URL for participants to join the meeting. This URL should only be shared with users that you would like to invite for the meeting.
     */
    join_url?: string;
    /**
     * Array of occurrence objects.
     */
    occurrences?: Array<{
      /**
       * Duration.
       */
      duration?: number;
      /**
       * Occurrence ID: Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences.
       */
      occurrence_id?: string;
      /**
       * Start time.
       */
      start_time?: string;
      /**
       * Occurrence status.
       */
      status?: string;
    }>;
    /**
     * Meeting passcode.
     */
    password?: string;
    /**
     * [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi). Only used for scheduled meetings and recurring meetings with no fixed time.
     */
    pmi?: string;
    /**
     * Whether the prescheduled meeting was created via the [GSuite app](https://support.zoom.us/hc/en-us/articles/360020187492-Zoom-for-GSuite-add-on). This **only** supports the meeting `type` value of `2` (scheduled meetings) and `3` (recurring meetings with no fixed time):
     * * `true` — A GSuite prescheduled meeting.
     * * `false` — A regular meeting.
     */
    pre_schedule?: boolean;
    /**
     * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
     */
    recurrence?: {
      /**
       * Select the final date on which the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
       */
      end_date_time?: string;
      /**
       * Select how many times the meeting should recur before it is canceled. (Cannot be used with "end_date_time".)
       */
      end_times?: number;
      /**
       * Use this field **only if you're scheduling a recurring meeting of type** `3` to state which day in a month, the meeting should recur. The value range is from 1 to 31.
       *
       * For instance, if you would like the meeting to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the meeting to recur every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
       */
      monthly_day?: number;
      /**
       * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
       */
      monthly_week?: -1 | 1 | 2 | 3 | 4;
      /**
       * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
       *
       * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
       */
      monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
      /**
       * Define the interval at which the meeting should recur. For instance, if you would like to schedule a meeting that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
       *
       * For a daily meeting, the maximum interval you can set is `90` days. For a weekly meeting the maximum interval that you can set is  of `12` weeks. For a monthly meeting, there is a maximum of `3` months.
       *
       *
       */
      repeat_interval?: number;
      /**
       * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
       */
      type: 1 | 2 | 3;
      /**
       * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
       *
       * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
       */
      weekly_days?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
    };
    /**
     * Meeting settings.
     */
    settings?: {
      /**
       * Allow attendees to join the meeting from multiple devices. This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
       */
      allow_multiple_devices?: boolean;
      /**
       * A semicolon-separated list of the meeting's alternative hosts' email addresses or IDs.
       */
      alternative_hosts?: string;
      /**
       * Flag to determine whether to send email notifications to alternative hosts, default value is true.
       */
      alternative_hosts_email_notification?: boolean;
      /**
       * Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
       */
      alternative_host_update_polls?: boolean;
      /**
       * Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.** <br><br>
       *
       * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
       */
      approval_type?: 0 | 1 | 2;
      /**
       * Approve or block users from specific regions/countries from joining this meeting.
       *
       */
      approved_or_denied_countries_or_regions?: {
        /**
         * List of countries/regions from where participants can join this meeting.
         */
        approved_list?: Array<string>;
        /**
         * List of countries/regions from where participants can not join this meeting.
         */
        denied_list?: Array<string>;
        /**
         * `true`: Setting enabled to either allow users or block users from specific regions to join your meetings. <br>
         *
         * `false`: Setting disabled.
         */
        enable?: boolean;
        /**
         * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
         * `approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.<br><br>
         * `deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list`
         */
        method?: 'approve' | 'deny';
      };
      /**
       * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
       */
      audio?: 'both' | 'telephony' | 'voip';
      /**
       * If user has configured ["Sign Into Zoom with Specified Domains"](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
       */
      authentication_domains?: string;
      /**
       * The participants added here will receive unique meeting invite links and bypass authentication.
       */
      authentication_exception?: Array<{
        /**
         * Email address of the participant.
         */
        email?: string;
        /**
         * Name of the participant.
         */
        name?: string;
        /**
         * URL for participants to join the meeting
         */
        join_url?: string;
      }>;
      /**
       * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
       */
      authentication_name?: string;
      /**
       * Meeting authentication option id.
       */
      authentication_option?: string;
      /**
       * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
       */
      auto_recording?: 'local' | 'cloud' | 'none';
      /**
       * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
       */
      breakout_room?: {
        /**
         * Set the value of this field to `true` if you would like to enable the [breakout room pre-assign](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4) option.
         */
        enable?: boolean;
        /**
         * Create room(s).
         */
        rooms?: Array<{
          /**
           * Name of the breakout room.
           */
          name?: string;
          /**
           * Email addresses of the participants who are to be assigned to the breakout room.
           */
          participants?: Array<string>;
        }>;
      };
      /**
       * Indicates the type of calendar integration used to schedule the meeting:
       * * `1` — [Zoom Outlook add-in](https://support.zoom.us/hc/en-us/articles/360031592971-Getting-started-with-Outlook-plugin-and-add-in)
       * * `2` — [Zoom for Google Workspace add-on](https://support.zoom.us/hc/en-us/articles/360020187492-Using-the-Zoom-for-Google-Workspace-add-on)
       *
       * Works with the `private_meeting` field to determine whether to share details of meetings or not.
       */
      calendar_type?: 1 | 2;
      /**
       * Close registration after event date
       */
      close_registration?: boolean;
      /**
       * Host meeting in China.
       * @deprecated
       */
      cn_meeting?: boolean;
      /**
       * Contact email for registration
       */
      contact_email?: string;
      /**
       * Contact name for registration
       */
      contact_name?: string;
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
       * Whether to send email notifications to [alternative hosts](https://support.zoom.us/hc/en-us/articles/208220166) and [users with scheduling privileges](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege). This value defaults to `true`.
       */
      email_notification?: boolean;
      /**
       * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
       * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
       *
       * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
       */
      encryption_type?: 'enhanced_encryption' | 'e2ee';
      /**
       * Only signed in users can join this meeting.
       *
       * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
       * @deprecated
       */
      enforce_login?: boolean;
      /**
       * Only signed in users with specified domains can join meetings.
       *
       * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
       * @deprecated
       */
      enforce_login_domains?: string;
      /**
       * Whether the [**Focus Mode** feature](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) is enabled when the meeting starts.
       */
      focus_mode?: boolean;
      /**
       * List of global dial-in countries
       */
      global_dial_in_countries?: Array<string>;
      /**
       * Global Dial-in Countries/Regions
       */
      global_dial_in_numbers?: Array<{
        /**
         * City of the number, if any. For example, Chicago.
         */
        city?: string;
        /**
         * Country code. For example, BR.
         */
        country?: string;
        /**
         * Full name of country. For example, Brazil.
         */
        country_name?: string;
        /**
         * Phone number. For example, +1 2332357613.
         */
        number?: string;
        /**
         * Type of number.
         */
        type?: 'toll' | 'tollfree';
      }>;
      /**
       * Start video when the host joins the meeting.
       */
      host_video?: boolean;
      /**
       * Host meeting in India.
       * @deprecated
       */
      in_meeting?: boolean;
      /**
       * If the value of "join_before_host" field is set to true, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
       *
       * *  `0`: Allow participant to join anytime.
       * *  `5`: Allow participant to join 5 minutes before meeting start time.
       * * `10`: Allow participant to join 10 minutes before meeting start time.
       */
      jbh_time?: 0 | 5 | 10;
      /**
       * Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings.
       */
      join_before_host?: boolean;
      /**
       * The meeting's [language interpretation settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars). Make sure to add the language in the web portal in order to use it in the API. See link for details.
       *
       * **Note:** This feature is only available for certain Meeting add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting.
       */
      language_interpretation?: {
        /**
         * Whether to enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars) for the meeting.
         */
        enable?: boolean;
        /**
         * Information about the meeting's language interpreters.
         */
        interpreters?: Array<{
          /**
           * The interpreter's email address.
           */
          email?: string;
          /**
           * A comma-separated list of the interpreter's languages. The string must contain two [country IDs](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
           *
           * For example, if the interpreter will translate from English to Chinese, then this value will be `US,CN`.
           */
          languages?: string;
        }>;
      };
      /**
       * `true`- Only authenticated users can join meetings.
       */
      meeting_authentication?: boolean;
      /**
       * Mute participants upon entry.
       */
      mute_upon_entry?: boolean;
      /**
       * Start video when participants join the meeting.
       */
      participant_video?: boolean;
      /**
       * Whether the meeting is set as private.
       */
      private_meeting?: boolean;
      /**
       * Whether to send registrants an email confirmation:
       * * `true` — Send a confirmation email.
       * * `false` — Do not send a confirmation email.
       */
      registrants_confirmation_email?: boolean;
      /**
       * Whether to send registrants email notifications about their registration approval, cancellation, or rejection:
       *
       * * `true` — Send an email notification.
       * * `false` — Do not send an email notification.
       *
       * Set this value to `true` to also use the `registrants_confirmation_email` parameter.
       */
      registrants_email_notification?: boolean;
      /**
       * Registration type. Used for recurring meeting with fixed time only. <br>`1` Attendees register once and can attend any of the occurrences.<br>`2` Attendees need to register for each occurrence to attend.<br>`3` Attendees register once and can choose one or more occurrences to attend.
       */
      registration_type?: 1 | 2 | 3;
      /**
       * Show social share buttons on the meeting registration page.
       * This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
       */
      show_share_button?: boolean;
      /**
       * Use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi). Only used for scheduled meetings and recurring meetings with no fixed time.
       */
      use_pmi?: boolean;
      /**
       * Enable waiting room
       */
      waiting_room?: boolean;
      /**
       * Add watermark when viewing a shared screen.
       */
      watermark?: boolean;
      /**
       * Whether the **Allow host to save video order** feature is enabled.
       */
      host_save_video_order?: boolean;
    };
    /**
     * Meeting start time in GMT/UTC. Start time will not be returned if the meeting is an **instant** meeting.
     *
     */
    start_time?: string;
    /**
     * <br><aside>The <code>start_url</code> of a Meeting is a URL using which a host or an alternative host can start the Meeting.
     *
     * The expiration time for the <code>start_url</code> field listed in the response of the [**Create a meeting**](/docs/api-reference/zoom-api/methods#operation/meetingCreate) API is two hours for all regular users.
     *
     * For users created using the <code>custCreate</code> option via the [**Create users**](/docs/api-reference/zoom-api/methods#operation/userCreate) API, the expiration time of the <code>start_url</code> field is 90 days.
     *
     * For security reasons, to retrieve the updated value for the <code>start_url</code> field programmatically (after the expiry time), you must call the [**Get a meeting](/docs/api-reference/zoom-api/methods#operation/meeting) API and refer to the value of the <code>start_url</code> field in the response.</aside><br>This URL should only be used by the host of the meeting and **should not be shared with anyone other than the host** of the meeting as anyone with this URL will be able to login to the Zoom Client as the host of the meeting.
     */
    start_url?: string;
    /**
     * Meeting status
     */
    status?: 'waiting' | 'started';
    /**
     * Timezone to format the meeting start time on the .
     */
    timezone?: string;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Tracking fields
     */
    tracking_fields?: Array<{
      /**
       * Label of the tracking field.
       */
      field?: string;
      /**
       * Value for the field.
       */
      value?: string;
      /**
       * Indicates whether the [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) is visible in the meeting scheduling options in the Zoom Web Portal or not.
       *
       * `true`: Tracking field is visible. <br>
       *
       * `false`: Tracking field is not visible to the users when they look at the meeting details in the Zoom Web Portal but the field was used while scheduling this meeting via API. An invisible tracking field can be used by users while scheduling meetings via API only.
       */
      visible?: boolean;
    }>;
    /**
     * Meeting Types:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`4` - PMI Meeting<br>
     * `8` - Recurring meeting with a fixed time.
     */
    type?: 1 | 2 | 3 | 8;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}',
      path: {
        meetingId: meetingId,
      },
      query: {
        occurrence_id: occurrenceId,
        show_previous_occurrences: showPreviousOccurrences,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`1010\`<br>
        User not found on this account: {accountId}.<br>**Error Code:** \`3000\`<br>
        Cannot access webinar info.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting not found.<br>
         **Error Code:** \`1001\`<br>
        User not exist: {userId}.<br>**Error Code:** \`3001\`<br>
        Meeting {meetingId} is not found or has expired.`,
      },
    });
  }

  /**
   * Update a meeting
   * Use this API to update a meeting's details.
   *
   * **Note:**
   * * This API has a rate limit of **100 requests per day**. Because of this, a meeting can only be updated for a maximum of **100 times within a 24-hour period**.
   * * The `start_time` value **must** be a future date. If the value is omitted or a date in the past, the API ignores this value and will **not** update any recurring meetings.
   * * If the `start_time` value is a future date, the `recurrence` object is **required**.
   *
   * **Scopes:** `meeting:write:admin`, `meeting:write`</br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public meetingUpdate({
    meetingId,
    requestBody,
    occurrenceId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * Meeting
     */
    requestBody: {
      /**
       * The email address or `userId` of the user to schedule a meeting for.
       */
      schedule_for?: string;
      /**
       * Meeting description.
       */
      agenda?: string;
      /**
       * Meeting duration (minutes). Used for scheduled meetings only.
       */
      duration?: number;
      /**
       * Meeting passcode. Passcode may only contain the following characters: [a-z A-Z 0-9 @ - _ *] and can have a maximum of 10 characters.
       *
       * **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](/docs/api-reference/zoom-api/ma#operation/accountSettings) API.
       */
      password?: string;
      /**
       * Whether to create a prescheduled meeting via the [GSuite app](https://support.zoom.us/hc/en-us/articles/360020187492-Zoom-for-GSuite-add-on). This **only** supports the meeting `type` value of `2` (scheduled meetings) and `3` (recurring meetings with no fixed time):
       * * `true` — Create a prescheduled meeting.
       * * `false` — Create a regular meeting.
       */
      pre_schedule?: boolean;
      /**
       * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
       */
      recurrence?: {
        /**
         * Select the final date on which the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
         */
        end_date_time?: string;
        /**
         * Select how many times the meeting should recur before it is canceled. (Cannot be used with "end_date_time".)
         */
        end_times?: number;
        /**
         * Use this field **only if you're scheduling a recurring meeting of type** `3` to state which day in a month, the meeting should recur. The value range is from 1 to 31.
         *
         * For instance, if you would like the meeting to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the meeting to recur every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
         */
        monthly_day?: number;
        /**
         * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
         */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /**
         * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
         *
         * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
         */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /**
         * Define the interval at which the meeting should recur. For instance, if you would like to schedule a meeting that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
         *
         * For a daily meeting, the maximum interval you can set is `90` days. For a weekly meeting the maximum interval that you can set is  of `12` weeks. For a monthly meeting, there is a maximum of `3` months.
         *
         *
         */
        repeat_interval?: number;
        /**
         * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
         */
        type: 1 | 2 | 3;
        /**
         * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
         *
         * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
         */
        weekly_days?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
      };
      /**
       * Meeting settings.
       */
      settings?: {
        /**
         * Allow attendees to join the meeting from multiple devices. This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
         */
        allow_multiple_devices?: boolean;
        /**
         * A semicolon-separated list of the meeting's alternative hosts' email addresses or IDs.
         */
        alternative_hosts?: string;
        /**
         * Flag to determine whether to send email notifications to alternative hosts, default value is true.
         */
        alternative_hosts_email_notification?: boolean;
        /**
         * Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
         */
        alternative_host_update_polls?: boolean;
        /**
         * Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.** <br><br>
         *
         * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
         */
        approval_type?: 0 | 1 | 2;
        /**
         * Approve or block users from specific regions/countries from joining this meeting.
         *
         */
        approved_or_denied_countries_or_regions?: {
          /**
           * List of countries/regions from where participants can join this meeting.
           */
          approved_list?: Array<string>;
          /**
           * List of countries/regions from where participants can not join this meeting.
           */
          denied_list?: Array<string>;
          /**
           * `true`: Setting enabled to either allow users or block users from specific regions to join your meetings. <br>
           *
           * `false`: Setting disabled.
           */
          enable?: boolean;
          /**
           * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
           * `approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.<br><br>
           * `deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list`
           */
          method?: 'approve' | 'deny';
        };
        /**
         * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
         */
        audio?: 'both' | 'telephony' | 'voip';
        /**
         * If user has configured ["Sign Into Zoom with Specified Domains"](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
         */
        authentication_domains?: string;
        /**
         * The participants added here will receive unique meeting invite links and bypass authentication.
         */
        authentication_exception?: Array<{
          /**
           * Email address of the participant.
           */
          email?: string;
          /**
           * Name of the participant.
           */
          name?: string;
          /**
           * URL for participants to join the meeting
           */
          join_url?: string;
        }>;
        /**
         * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
         */
        authentication_name?: string;
        /**
         * Meeting authentication option id.
         */
        authentication_option?: string;
        /**
         * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
         */
        auto_recording?: 'local' | 'cloud' | 'none';
        /**
         * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
         */
        breakout_room?: {
          /**
           * Set the value of this field to `true` if you would like to enable the [breakout room pre-assign](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4) option.
           */
          enable?: boolean;
          /**
           * Create room(s).
           */
          rooms?: Array<{
            /**
             * Name of the breakout room.
             */
            name?: string;
            /**
             * Email addresses of the participants who are to be assigned to the breakout room.
             */
            participants?: Array<string>;
          }>;
        };
        /**
         * Indicates the type of calendar integration used to schedule the meeting:
         * * `1` — [Zoom Outlook add-in](https://support.zoom.us/hc/en-us/articles/360031592971-Getting-started-with-Outlook-plugin-and-add-in)
         * * `2` — [Zoom for Google Workspace add-on](https://support.zoom.us/hc/en-us/articles/360020187492-Using-the-Zoom-for-Google-Workspace-add-on)
         *
         * Works with the `private_meeting` field to determine whether to share details of meetings or not.
         */
        calendar_type?: 1 | 2;
        /**
         * Close registration after event date
         */
        close_registration?: boolean;
        /**
         * Host meeting in China.
         * @deprecated
         */
        cn_meeting?: boolean;
        /**
         * Contact email for registration
         */
        contact_email?: string;
        /**
         * Contact name for registration
         */
        contact_name?: string;
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
         * Whether to send email notifications to [alternative hosts](https://support.zoom.us/hc/en-us/articles/208220166) and [users with scheduling privileges](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege). This value defaults to `true`.
         */
        email_notification?: boolean;
        /**
         * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
         * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
         *
         * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
         */
        encryption_type?: 'enhanced_encryption' | 'e2ee';
        /**
         * Only signed in users can join this meeting.
         *
         * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
         * @deprecated
         */
        enforce_login?: boolean;
        /**
         * Only signed in users with specified domains can join meetings.
         *
         * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
         * @deprecated
         */
        enforce_login_domains?: string;
        /**
         * Whether the [**Focus Mode** feature](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) is enabled when the meeting starts.
         */
        focus_mode?: boolean;
        /**
         * List of global dial-in countries
         */
        global_dial_in_countries?: Array<string>;
        /**
         * Global Dial-in Countries/Regions
         */
        global_dial_in_numbers?: Array<{
          /**
           * City of the number, if any. For example, Chicago.
           */
          city?: string;
          /**
           * Country code. For example, BR.
           */
          country?: string;
          /**
           * Full name of country. For example, Brazil.
           */
          country_name?: string;
          /**
           * Phone number. For example, +1 2332357613.
           */
          number?: string;
          /**
           * Type of number.
           */
          type?: 'toll' | 'tollfree';
        }>;
        /**
         * Start video when the host joins the meeting.
         */
        host_video?: boolean;
        /**
         * Host meeting in India.
         * @deprecated
         */
        in_meeting?: boolean;
        /**
         * If the value of "join_before_host" field is set to true, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
         *
         * *  `0`: Allow participant to join anytime.
         * *  `5`: Allow participant to join 5 minutes before meeting start time.
         * * `10`: Allow participant to join 10 minutes before meeting start time.
         */
        jbh_time?: 0 | 5 | 10;
        /**
         * Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings.
         */
        join_before_host?: boolean;
        /**
         * The meeting's [language interpretation settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars). Make sure to add the language in the web portal in order to use it in the API. See link for details.
         *
         * **Note:** This feature is only available for certain Meeting add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting.
         */
        language_interpretation?: {
          /**
           * Whether to enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars) for the meeting.
           */
          enable?: boolean;
          /**
           * Information about the meeting's language interpreters.
           */
          interpreters?: Array<{
            /**
             * The interpreter's email address.
             */
            email?: string;
            /**
             * A comma-separated list of the interpreter's languages. The string must contain two [country IDs](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
             *
             * For example, if the interpreter will translate from English to Chinese, then this value will be `US,CN`.
             */
            languages?: string;
          }>;
        };
        /**
         * `true`- Only authenticated users can join meetings.
         */
        meeting_authentication?: boolean;
        /**
         * Mute participants upon entry.
         */
        mute_upon_entry?: boolean;
        /**
         * Start video when participants join the meeting.
         */
        participant_video?: boolean;
        /**
         * Whether the meeting is set as private.
         */
        private_meeting?: boolean;
        /**
         * Send confirmation Email to Registrants
         */
        registrants_confirmation_email?: boolean;
        /**
         * Whether to send registrants email notifications about their registration approval, cancellation, or rejection:
         *
         * * `true` — Send an email notification.
         * * `false` — Do not send an email notification.
         *
         * Set this value to `true` to also use the `registrants_confirmation_email` parameter.
         */
        registrants_email_notification?: boolean;
        /**
         * Registration type. Used for recurring meeting with fixed time only. <br>`1` Attendees register once and can attend any of the occurrences.<br>`2` Attendees need to register for each occurrence to attend.<br>`3` Attendees register once and can choose one or more occurrences to attend.
         */
        registration_type?: 1 | 2 | 3;
        /**
         * Show social share buttons on the meeting registration page.
         * This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
         */
        show_share_button?: boolean;
        /**
         * Use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi). Only used for scheduled meetings and recurring meetings with no fixed time.
         */
        use_pmi?: boolean;
        /**
         * Enable waiting room
         */
        waiting_room?: boolean;
        /**
         * Add watermark when viewing a shared screen.
         */
        watermark?: boolean;
        /**
         * Whether the **Allow host to save video order** feature is enabled.
         */
        host_save_video_order?: boolean;
        /**
         * A list of the meeting's invitees.
         */
        meeting_invitees?: Array<{
          /**
           * The invitee's email address.
           */
          email?: string;
        }>;
      };
      /**
       * Meeting start time. When using a format like "yyyy-MM-dd'T'HH:mm:ss'Z'", always use GMT time. When using a format like "yyyy-MM-dd'T'HH:mm:ss", you should use local time and  specify the time zone. Only used for scheduled meetings and recurring meetings with a fixed time.
       */
      start_time?: string;
      /**
       * Unique identifier of the meeting template.
       *
       * Use this field if you would like to [schedule the meeting from a meeting template](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates#h_86f06cff-0852-4998-81c5-c83663c176fb). You can retrieve the value of this field by calling the [List meeting templates](https://marketplace.zoom.us/docs/api-reference/zoom-api/methods#operation/listMeetingTemplates) API.
       */
      template_id?: string;
      /**
       * Time zone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [time zone](#timezones) list for supported time zones and their formats.
       */
      timezone?: string;
      /**
       * Meeting topic.
       */
      topic?: string;
      /**
       * Tracking fields
       */
      tracking_fields?: Array<{
        /**
         * Tracking fields type
         */
        field?: string;
        /**
         * Tracking fields value
         */
        value?: string;
      }>;
      /**
       * Meeting Types:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`8` - Recurring meeting with a fixed time.
       */
      type?: 1 | 2 | 3 | 8;
    };
    /**
     * Meeting occurrence id. Support change of agenda, start_time, duration, settings: {host_video, participant_video, join_before_host, mute_upon_entry, waiting_room, watermark, auto_recording}
     */
    occurrenceId?: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/meetings/{meetingId}',
      path: {
        meetingId: meetingId,
      },
      query: {
        occurrence_id: occurrenceId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\`<br>
        Invalid enforce_login_domains, separate multiple domains by semicolon.<br>
        A maximum of {rateLimitNumber} meetings can be created/updated for a single user in one day.
        `,
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User not found on this account: {accountId}

         **Error Code:** \`3000\` <br>
        Cannot access meeting information.

         **Error Code:** \`3003\` <br>
        You are not the meeting host.

         **Error Code:** \`3000\` <br>
         * Instant meetings do not support the "schedule_for" parameter. You cannot schedule an instant meeting for another user.
         * Users in "{0}" have been blocked from joining meetings and webinars. To unblock them, go to the "Settings" page in the Zoom web portal and update the "Block users in specific domains from joining meetings and webinars" setting.
         * Prescheduling is only available for scheduled meetings (type 2) and recurring meetings with no fixed time (type 3).
         * You cannot schedule a meeting for "{0}".
         * You cannot update or delete meetings that have started using this method.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.

         **Error Code:** \`300\` <br>
        The value that you entered for the schedule_for field is invalid. Enter a valid value and try again.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting not found.<br>
         **Error Code:** \`1001\`<br>
        User does not exist: {userId}.<br>
         **Error Code:** \`3001\`<br>
        A meeting with this {meetingId} is not found or has expired.`,
      },
    });
  }

  /**
   * Update meeting status
   * Update the status of a meeting.<br><br>
   * **Scopes:** `meeting:write:admin` `meeting:write`
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public meetingStatus({
    meetingId,
    requestBody,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    requestBody: {
      /**
       * `end` - End a meeting.<br>
       * `recover` - [Recover](https://support.zoom.us/hc/en-us/articles/360038297111-Recover-a-deleted-meeting) a deleted meeting.
       *
       */
      action?: 'end' | 'recover';
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/meetings/{meetingId}/status',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account: {accountId}.
         **Error Code:** \`3000\`<br>
        Cannot access meeting info.
         **Error Code:** \`3003\`<br>
        You're not the meeting host.
         **Error Code:** \`3063\`<br>
        Can not end on-premise user's meeting: {meetingId}.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting not found.<br>
         **Error Code:** \`1001\`<br>
        Meeting host does not exist: {userId}.

        `,
      },
    });
  }

  /**
   * Create meeting's invite links
   * Use this API to create a batch of invitation links for a meeting.
   *
   * **Scopes**: `meeting:write:admin`, `meeting:write`</br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `201` <br>
   * Meeting invitation links created.
   * @throws ApiError
   */
  public meetingInviteLinksCreate({
    meetingId,
    requestBody,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    requestBody: {
      /**
       * The attendees list.
       */
      attendees?: Array<{
        /**
         * User display name.
         */
        name: string;
      }>;
      /**
       * The invite link's expiration time, in seconds.
       *
       * This value defaults to `7200`.
       */
      ttl?: number;
    };
  }): CancelablePromise<{
    /**
     * The attendee list.
     */
    attendees?: Array<{
      /**
       * The URL to join the meeting.
       */
      join_url?: string;
      /**
       * The user's display name.
       */
      name?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/meetings/{meetingId}/invite_links',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`300\` <br>
         * Meeting ID does not exist.
         * Invalid meeting ID.

         **Error Code:** \`3000\` <br>
        Cannot access webinar information.

         **Error Code:** \`3001\` <br>
        Meeting does not exist: {meetingId}

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
      },
    });
  }

  /**
   * Get meeting invitation
   * Retrieve the meeting invite note that was sent for a specific meeting.<br><br>
   * **Scopes:** `meeting:read:admin` `meeting:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting invitation returned.
   * @throws ApiError
   */
  public meetingInvitation({
    meetingId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
  }): CancelablePromise<{
    /**
     * Meeting invitation.
     */
    invitation?: string;
    /**
     * A list of SIP phone addresses.
     */
    sip_links?: Array<string>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/invitation',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
      },
    });
  }

  /**
   * List meeting registrants
   * A host or a user with admin permission can require [registration for a Zoom meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings). Use this API to list users that have registered for a meeting.<br><br>
   * **Scopes**: `meeting:read:admin` `meeting:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200`<br>
   * Successfully listed meeting registrants.
   * @throws ApiError
   */
  public meetingRegistrants({
    meetingId,
    occurrenceId,
    status = 'approved',
    pageSize = 30,
    pageNumber = 1,
    nextPageToken,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * The meeting or webinar occurrence ID.
     */
    occurrenceId?: string;
    /**
     * Query by the registrant's status:
     * * `pending` — The registration is pending.
     * * `approved` — The registrant is approved.
     * * `denied` — The registration is denied.
     */
    status?: 'pending' | 'approved' | 'denied';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.
     * @deprecated
     */
    pageNumber?: number;
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
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/registrants',
      path: {
        meetingId: meetingId,
      },
      query: {
        occurrence_id: occurrenceId,
        status: status,
        page_size: pageSize,
        page_number: pageNumber,
        next_page_token: nextPageToken,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Meeting {meetingId} is not found or has expired.<br>
        This meeting has not set registration as required: {meetingId}.
        `,
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account: {accountId}.<br>
         **Error Code:** \`3003\`<br>
        You are not the meeting host.<br>
         **Error Code:** \`3000\`<br>
        Cannot access meeting info.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting not found.<br>
         **Error Code:** \`1001\`<br>
        Meeting host does not exist: {userId}.`,
      },
    });
  }

  /**
   * Add a meeting registrant
   * Use this API to create and submit a user's registration to a meeting. See [Customizing webinar registration](https://support.zoom.us/hc/en-us/articles/202835649-Customizing-webinar-registration) for details on how to set the requirements for these fields. Note that there is a maximum limit of 4,999 registrants per meeting and users will see an error if the meeting's capacity is reached.
   *
   * **Scopes:** `meeting:write:admin`, `meeting:write` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The host must be a **Licensed** user type.
   * @returns any **HTTP Status Code:** `201` <br>
   * Meeting registration created.
   * @throws ApiError
   */
  public meetingRegistrantCreate({
    meetingId,
    requestBody,
    occurrenceIds,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    requestBody: {
      /**
       * The registrant's first name.
       */
      first_name: string;
      /**
       * The registrant's last name.
       */
      last_name?: string;
      /**
       * The registrant's email address.
       */
      email: string;
      /**
       * The registrant's address.
       */
      address?: string;
      /**
       * The registrant's city.
       */
      city?: string;
      /**
       * The registrant's state or province.
       */
      state?: string;
      /**
       * The registrant's ZIP or postal code.
       */
      zip?: string;
      /**
       * The registrant's two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
       */
      country?: string;
      /**
       * The registrant's phone number.
       */
      phone?: string;
      /**
       * The registrant's questions and comments.
       */
      comments?: string;
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
       * The registrant's industry.
       */
      industry?: string;
      /**
       * The registrant's job title.
       */
      job_title?: string;
      /**
       * The registrant's number of employees:
       * * `1-20`
       * * `21-50`
       * * `51-100`
       * * `101-500`
       * * `500-1,000`
       * * `1,001-5,000`
       * * `5,001-10,000`
       * * `More than 10,000`
       */
      no_of_employees?: '' | '1-20' | '21-50' | '51-100' | '101-500' | '500-1,000' | '1,001-5,000' | '5,001-10,000' | 'More than 10,000';
      /**
       * The registrant's organization.
       */
      org?: string;
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
       * The registrant's language preference for confirmation emails:
       * * `en-US` — English (US)
       * * `de-DE` — German (Germany)
       * * `es-ES` — Spanish (Spain)
       * * `fr-FR` — French (France)
       * * `jp-JP` — Japanese
       * * `pt-PT` — Portuguese (Portugal)
       * * `ru-RU` — Russian
       * * `zh-CN` — Chinese (PRC)
       * * `zh-TW` — Chinese (Taiwan)
       * * `ko-KO` — Korean
       * * `it-IT` — Italian (Italy)
       * * `vi-VN` — Vietnamese
       * * `pl-PL` — Polish
       * * `Tr-TR` — Turkish
       */
      language?: 'en-US' | 'de-DE' | 'es-ES' | 'fr-FR' | 'jp-JP' | 'pt-PT' | 'ru-RU' | 'zh-CN' | 'zh-TW' | 'ko-KO' | 'it-IT' | 'vi-VN' | 'pl-PL' | 'Tr-TR';
      /**
       * If a meeting was scheduled with the `approval_type` field value of `1` (manual approval) but you want to automatically approve meeting registrants, set the value of this field to `true`.
       *
       * **Note:** You cannot use this field to change approval setting for a meeting originally scheduled with the `approval_type` field value of `0` (automatic approval).
       */
      auto_approve?: boolean;
    };
    /**
     * A comma-separated list of meeting occurrence IDs. You can get this value with the [Get a meeting](/docs/api-reference/zoom-api/methods#operation/meeting) API.
     */
    occurrenceIds?: string;
  }): CancelablePromise<{
    /**
     * The meeting ID.
     */
    id?: number;
    /**
     * The URL the registrant can use to join the meeting.
     *
     * The API will not return this field if the meeting was [created](/docs/api-reference/zoom-api/methods#operation/meetingCreate) with the `approval_type` field value of `1` (manual approval).
     */
    join_url?: string;
    /**
     * The registrant's ID.
     */
    registrant_id?: string;
    /**
     * The meeting's start time.
     */
    start_time?: string;
    /**
     * The meeting's topic.
     */
    topic?: string;
    /**
     * Array of occurrence objects.
     */
    occurrences?: Array<{
      /**
       * Duration.
       */
      duration?: number;
      /**
       * Occurrence ID: Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences.
       */
      occurrence_id?: string;
      /**
       * Start time.
       */
      start_time?: string;
      /**
       * Occurrence status.
       */
      status?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/meetings/{meetingId}/registrants',
      path: {
        meetingId: meetingId,
      },
      query: {
        occurrence_ids: occurrenceIds,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\` <br>
        Meeting "{meetingId}" not found or has expired.`,
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}

         **Error Code:** \`3003\` <br>
        You are not the meeting host.

         **Error Code:** \`3043\` <br>
        Meeting has reached maximum attendee capacity.

         **Error Code:** \`3000\` <br>
        Cannot access meeting info.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\`
         * Meeting not found.
         *Registration has not been enabled for this meeting: {meetingId}

         **Error Code:** \`1001\` <br>
        Meeting host does not exist: {userId}`,
        429: `**HTTP Status Code:** \`429\` <br>
        You have exceeded the daily rate limit of "{0}" for **Add meeting registrant** API requests for the registrant "{1}". You can resume these API requests at GMT 00:00:00.`,
      },
    });
  }

  /**
   * Perform batch registration
   * Register up to 30 registrants at once for a meeting that requires [registration](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings). <br>
   *
   * **Prerequisites:**<br>
   * * The meeting host must be a Licensed user.
   * * The meeting must require registration and should be of type `2`, i.e., they should be scheduled meetings. Instant meetings and Recurring meetings are not supported by this API.<br><br>
   * **Scope:** `meeting:write`, `meeting:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   *
   *
   *
   *
   *
   *
   *
   *
   * @returns any **HTTP Status Code:** `200` **OK** <br>
   * Registrants added.
   * @throws ApiError
   */
  public addBatchRegistrants({
    meetingId,
    requestBody,
  }: {
    /**
     * Unique identifier of the meeting (Meeting Number).
     */
    meetingId: string;
    requestBody?: {
      /**
       * If a meeting was scheduled with approval_type `1` (manual approval), but you would like to automatically approve the registrants that are added via this API, you can set the value of this field to `true`.
       *
       * You **cannot** use this field to change approval setting for a meeting  that was originally scheduled with approval_type `0` (automatic approval).
       */
      auto_approve?: boolean;
      /**
       * Send confirmation Email to Registrants
       */
      registrants_confirmation_email?: boolean;
      registrants?: Array<{
        /**
         * Email address of the registrant.
         */
        email: string;
        /**
         * First name of the registrant.
         */
        first_name: string;
        /**
         * Last name of the registrant.
         */
        last_name?: string;
      }>;
    };
  }): CancelablePromise<{
    registrants?: Array<{
      /**
       * Email address of the registrant.
       */
      email?: string;
      /**
       * Unique URL using which registrant can join the meeting.
       */
      join_url?: string;
      /**
       * Unique identifier of the registrant.
       */
      registrant_id?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/meetings/{meetingId}/batch_registrants',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`3038\`<br>
        Meeting is over, you can not register now. If you have any questions, please contact the Meeting host.<br><br>
         **Error Code:** \`303\`<br>
        This API can only be used for scheduled meeting(meeting type: 2). Batch registration is not supported for other meeting types.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` **Not Found** <br>
         **Error Code:** \`3001\`<br>
        Meeting does not exist: {meetingId}.<br>
         **Error Code:** \`3043\`<br>
        Meeting has reached maximum attendee capacity.<br>
         **Error Code:** \`404\`<br>
        Registration has not been enabled for this meeting: {meetingId}.



        `,
        429: `**HTTP Status Code:** \`429\`<br>
        You have exceeded the daily rate limit of "{0}" for meeting **Perform batch registration** API requests for the registrant "{1}". You can resume these API requests at GMT 00:00:00.`,
      },
    });
  }

  /**
   * Get a meeting registrant
   * Use this API to get details on a specific user who has registered for the meeting. A host or a user with administrative permissions can require [registration for Zoom meetings](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings).
   *
   * **Scopes:** `meeting:read:admin`, `meeting:read`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The account must have a Meeting plan
   * @returns any Success.
   * @throws ApiError
   */
  public meetingRegistrantGet({
    meetingId,
    registrantId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * The registrant ID.
     */
    registrantId: string;
  }): CancelablePromise<{
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
     * The registrant's registration status:
     * * `approved` — The registrant is approved to join the meeting.
     * * `pending` — The registrant's registration is pending.
     * * `denied` — The registrant was declined to join the meeting.
     */
    status?: 'approved' | 'denied' | 'pending';
    /**
     * The registrant's ZIP or postal code.
     */
    zip?: string;
    /**
     * The registrant's registration date and time.
     */
    create_time?: string;
    /**
     * The URL with which the approved registrant can join the meeting.
     */
    join_url?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/registrants/{registrantId}',
      path: {
        meetingId: meetingId,
        registrantId: registrantId,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>Meeting "{meetingId}" is not valid or has expired.
        This meeting has not set required registration: "{meetingId}"`,
        400: `**HTTP Status Code:** \`400\`<br>**Error Code:** \`1010\`
        User does not belong to this account: "{accountId}"<br>**Error Code:** \`3003\`
        You are not the meeting host.<br>**Error Code:** \`3000\`>
        Cannot access meeting info.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\`
        Meeting not found.<br>**Error Code:** \`1001\`<br>
        Meeting host does not exist: "{userId}"`,
      },
    });
  }

  /**
   * Delete a meeting registrant
   * Delete a meeting registrant.<br><br>
   * **Scopes**: `meeting:write:admin` `meeting:write`<br>
   * <br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public meetingregistrantdelete({
    meetingId,
    registrantId,
    occurrenceId,
  }: {
    /**
     * The meeting ID.
     */
    meetingId: number;
    /**
     * The meeting registrant ID.
     */
    registrantId: string;
    /**
     * The meeting occurrence ID.
     */
    occurrenceId?: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/meetings/{meetingId}/registrants/{registrantId}',
      path: {
        meetingId: meetingId,
        registrantId: registrantId,
      },
      query: {
        occurrence_id: occurrenceId,
      },
      errors: {
        400: `**HTTP status code:** \`400\` <br>
        Bad Request<br>

         **Error code:** \`200\`<br>
        Only available for paid users: {0}.<br>

         **Error code:** \`300\`<br>
        The value that you entered for the Registrant ID field is invalid. Enter a valid value and try again.<br>

         **Error code:** \`404\` <br>
        Registration has not been enabled for this meeting: {0}.<br>

         **Error code:** \`1001\` <br>
        User {userId} does not exist or does not belong to this account.<br>

         **Error code:** \`3000\` <br>
        Cannot access webinar info. ***Note:** Zoom throws this error when the meetingId is a webinarId.*<br>
        Registrant {0} was not found.

         **Error code:** \`3001\` <br>
        Meeting does not exist: {0}.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
      },
    });
  }

  /**
   * Update registrant's status
   * Update a meeting registrant's status by either approving, cancelling or denying a registrant from joining the meeting.<br><br>
   * **Scopes:** `meeting:write:admin` `meeting:write`
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public meetingRegistrantStatus({
    meetingId,
    requestBody,
    occurrenceId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    requestBody: {
      /**
       * Registrant Status:<br>`approve` - Approve registrant.<br>`cancel` - Cancel previously approved registrant's registration.<br>`deny` - Deny registrant.
       */
      action: 'approve' | 'cancel' | 'deny';
      /**
       * List of registrants.
       */
      registrants?: Array<{
        email?: string;
        id?: string;
      }>;
    };
    /**
     * The meeting or webinar occurrence ID.
     */
    occurrenceId?: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/meetings/{meetingId}/registrants/status',
      path: {
        meetingId: meetingId,
      },
      query: {
        occurrence_id: occurrenceId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\`<br>
        This meeting has not set registration as required:{meetingId}.`,
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account: {accountId}.<br>
         **Error Code:** \`3000\`<br>
        Cannot access meeting information.<br>
         **Error Code:** \`3003\`<br>
        You're not the meeting host.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting or registrant not found.
         **Error Code:** \`1001\`<br>
        User does not exist: {userId}.<br>
        `,
        429: `**HTTP Status Code:** \`429\`<br>
        You have exceeded the daily rate limit of "{0}" for meeting **Update registrant's status** API requests for the registrant "{1}". You can resume these API requests at GMT 00:00:00.`,
      },
    });
  }

  /**
   * List registration questions
   * List registration questions that will be displayed to users while [registering for a meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings).<br>
   *
   * **Scopes:** `meeting:read`, `meeting:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting Registrant Question object returned
   * @throws ApiError
   */
  public meetingRegistrantsQuestionsGet({
    meetingId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
  }): CancelablePromise<{
    /**
     * Array of Registrant Custom Questions
     */
    custom_questions?: Array<{
      /**
       * Answer choices for the question. Can not be used for `short` question type as this type of question requires registrants to type out the answer.
       */
      answers?: Array<string>;
      /**
       * Indicates whether or not the custom question is required to be answered by participants or not.
       */
      required?: boolean;
      /**
       * Title of the custom question.
       */
      title?: string;
      /**
       * Type of the question being asked.
       */
      type?: 'short' | 'single';
    }>;
    /**
     * Array of Registrant Questions
     */
    questions?: Array<{
      /**
       * Field name of the question.
       */
      field_name?:
        | 'last_name'
        | 'address'
        | 'city'
        | 'country'
        | 'zip'
        | 'state'
        | 'phone'
        | 'industry'
        | 'org'
        | 'job_title'
        | 'purchasing_time_frame'
        | 'role_in_purchase_process'
        | 'no_of_employees'
        | 'comments';
      /**
       * Indicates whether or not the displayed fields are required to be filled out by registrants.
       */
      required?: boolean;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/registrants/questions',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting not found`,
      },
    });
  }

  /**
   * Update registration questions
   * Update registration questions that will be displayed to users while [registering for a meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings).<br><br>
   * **Scopes:** `meeting:write`, `meeting:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   *
   * @returns void
   * @throws ApiError
   */
  public meetingRegistrantQuestionUpdate({
    meetingId,
    requestBody,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * Meeting Registrant Questions
     */
    requestBody: {
      /**
       * Array of Registrant Custom Questions
       */
      custom_questions?: Array<{
        /**
         * Answer choices for the question. Can not be used for `short` question type as this type of question requires registrants to type out the answer.
         */
        answers?: Array<string>;
        /**
         * Indicates whether or not the custom question is required to be answered by participants or not.
         */
        required?: boolean;
        /**
         * Title of the custom question.
         */
        title?: string;
        /**
         * Type of the question being asked.
         */
        type?: 'short' | 'single';
      }>;
      /**
       * Array of Registrant Questions
       */
      questions?: Array<{
        /**
         * Field name of the question.
         */
        field_name?:
          | 'last_name'
          | 'address'
          | 'city'
          | 'country'
          | 'zip'
          | 'state'
          | 'phone'
          | 'industry'
          | 'org'
          | 'job_title'
          | 'purchasing_time_frame'
          | 'role_in_purchase_process'
          | 'no_of_employees'
          | 'comments';
        /**
         * Indicates whether or not the displayed fields are required to be filled out by registrants.
         */
        required?: boolean;
      }>;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/meetings/{meetingId}/registrants/questions',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting not found.`,
      },
    });
  }

  /**
   * List meeting polls
   * Polls allow the meeting host to survey attendees. Use this API to list [polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) of a meeting.<br><br>
   *
   * **Scopes**: `meeting:read:admin` `meeting:read`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   * **Prerequisites**:<br>
   * * Host user type must be **Pro** or higher plan.
   * * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
   * @returns any **HTTP Status Code:** <br>
   * List polls of a Meeting  returned
   * @throws ApiError
   */
  public meetingPolls({
    meetingId,
    anonymous,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * Whether to query for polls with the **Anonymous** option enabled:
     * * `true` — Query for polls with the **Anonymous** option enabled.
     * * `false` — Do not query for polls with the **Anonymous** option enabled.
     */
    anonymous?: boolean;
  }): CancelablePromise<{
    /**
     * Array of Polls
     */
    polls?: Array<{
      /**
       * ID of Poll
       */
      id?: string;
      /**
       * Status of Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
       */
      status?: 'notstart' | 'started' | 'ended' | 'sharing';
      /**
       * Allow meeting participants to answer poll questions anonymously.
       *
       * This value defaults to `false`.
       */
      anonymous?: boolean;
      /**
       * The type of poll:
       * * `1` — Poll.
       * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
       * * `3` — Quiz. This feature must be enabled in your Zoom account.
       *
       * This value defaults to `1`.
       */
      poll_type?: 1 | 2 | 3;
      /**
       * Information about the poll's questions.
       */
      questions?: Array<{
        /**
         * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * * For `short_answer` polls, a maximum of 500 characters.
         * * For `long_answer` polls, a maximum of 2,000 characters.
         */
        answer_max_character?: number;
        /**
         * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
         */
        answer_min_character?: number;
        /**
         * Whether participants must answer the question:
         * * `true` — The participant must answer the question.
         * * `false` — The participant does not need to answer the question.
         *
         * **Note:**
         * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
         * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
         */
        answer_required?: boolean;
        /**
         * The poll question's available answers. This field requires a **minimum** of two answers.
         *
         * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
         * * For `matching` polls, you can only provide a maximum of 16 answers.
         * * For `rank_order` polls, you can only provide a maximum of seven answers.
         */
        answers?: Array<string>;
        /**
         * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
         * * `true` — The answer is case-sensitive.
         * * `false` — The answer is not case-sensitive.
         *
         * This value defaults to `false`.
         */
        case_sensitive?: boolean;
        /**
         * The poll question, up to 255 characters.
         *
         * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
         */
        name?: string;
        /**
         * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
         */
        prompts?: Array<{
          /**
           * The question prompt's title.
           */
          prompt_question?: string;
          /**
           * The question prompt's correct answers:
           * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
           * * For `rank_order` polls, you can only provide one correct answer.
           */
          prompt_right_answers?: Array<string>;
        }>;
        /**
         * The high score label used for the `rating_max_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_label?: string;
        /**
         * The rating scale's maximum value, up to a maximum value of 10.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_value?: number;
        /**
         * The low score label used for the `rating_min_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_label?: string;
        /**
         * The rating scale's minimum value. This value cannot be less than zero.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_value?: number;
        /**
         * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
         *
         * For `single` and `matching` polls, this field only accepts one answer.
         */
        right_answers?: Array<string>;
        /**
         * Whether to display the radio selection as a drop-down box:
         * * `true` — Show as a drop-down box.
         * * `false` — Do not show as a drop-down box.
         *
         * This value defaults to `false`.
         */
        show_as_dropdown?: boolean;
        /**
         * The poll's question and answer type:
         * * `single` — Single choice.
         * * `multiple` — Multiple choice.
         * * `matching` — Matching.
         * * `rank_order` — Rank order.
         * * `short_answer` — Short answer.
         * * `long_answer` — Long answer.
         * * `fill_in_the_blank` — Fill in the blank.
         * * `rating_scale` — Rating scale.
         */
        type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
      }>;
      /**
       * The poll's title, up to 64 characters.
       */
      title?: string;
    }>;
    /**
     * The number of all records available across pages
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/polls',
      path: {
        meetingId: meetingId,
      },
      query: {
        anonymous: anonymous,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`4400\` <br> Meeting polls disabled. To enable this feature, enable the "Meeting Polls/Quizzes" setting in the Zoom web portal's "Settings" interface.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**Error Code:** \`404\`
        Meeting Poll not found`,
      },
    });
  }

  /**
   * Create a meeting poll
   * Polls allow the meeting host to survey attendees. Use this API to create a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) for a meeting.<br><br>
   *
   * **Scopes**: `meeting:write:admin` `meeting:write`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   * **Prerequisites**:<br>
   * * Host user type must be **Pro** or higher plan.
   * * Polling feature must be enabled in the host's account.
   * * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
   * @returns any **HTTP Status Code:** `201` <br>
   * Meeting Poll Created
   * @throws ApiError
   */
  public meetingPollCreate({
    meetingId,
    requestBody,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * Meeting poll object
     */
    requestBody: {
      /**
       * Allow meeting participants to answer poll questions anonymously.
       *
       * This value defaults to `false`.
       */
      anonymous?: boolean;
      /**
       * The type of poll:
       * * `1` — Poll.
       * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
       * * `3` — Quiz. This feature must be enabled in your Zoom account.
       *
       * This value defaults to `1`.
       */
      poll_type?: 1 | 2 | 3;
      /**
       * Information about the poll's questions.
       */
      questions?: Array<{
        /**
         * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * * For `short_answer` polls, a maximum of 500 characters.
         * * For `long_answer` polls, a maximum of 2,000 characters.
         */
        answer_max_character?: number;
        /**
         * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
         */
        answer_min_character?: number;
        /**
         * Whether participants must answer the question:
         * * `true` — The participant must answer the question.
         * * `false` — The participant does not need to answer the question.
         *
         * **Note:**
         * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
         * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
         */
        answer_required?: boolean;
        /**
         * The poll question's available answers. This field requires a **minimum** of two answers.
         *
         * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
         * * For `matching` polls, you can only provide a maximum of 16 answers.
         * * For `rank_order` polls, you can only provide a maximum of seven answers.
         */
        answers?: Array<string>;
        /**
         * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
         * * `true` — The answer is case-sensitive.
         * * `false` — The answer is not case-sensitive.
         *
         * This value defaults to `false`.
         */
        case_sensitive?: boolean;
        /**
         * The poll question, up to 255 characters.
         *
         * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
         */
        name?: string;
        /**
         * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
         */
        prompts?: Array<{
          /**
           * The question prompt's title.
           */
          prompt_question?: string;
          /**
           * The question prompt's correct answers:
           * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
           * * For `rank_order` polls, you can only provide one correct answer.
           */
          prompt_right_answers?: Array<string>;
        }>;
        /**
         * The high score label used for the `rating_max_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_label?: string;
        /**
         * The rating scale's maximum value, up to a maximum value of 10.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_value?: number;
        /**
         * The low score label used for the `rating_min_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_label?: string;
        /**
         * The rating scale's minimum value. This value cannot be less than zero.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_value?: number;
        /**
         * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
         *
         * For `single` and `matching` polls, this field only accepts one answer.
         */
        right_answers?: Array<string>;
        /**
         * Whether to display the radio selection as a drop-down box:
         * * `true` — Show as a drop-down box.
         * * `false` — Do not show as a drop-down box.
         *
         * This value defaults to `false`.
         */
        show_as_dropdown?: boolean;
        /**
         * The poll's question and answer type:
         * * `single` — Single choice.
         * * `multiple` — Multiple choice.
         * * `matching` — Matching.
         * * `rank_order` — Rank order.
         * * `short_answer` — Short answer.
         * * `long_answer` — Long answer.
         * * `fill_in_the_blank` — Fill in the blank.
         * * `rating_scale` — Rating scale.
         */
        type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
      }>;
      /**
       * The poll's title, up to 64 characters.
       */
      title?: string;
    };
  }): CancelablePromise<{
    /**
     * Meeting Poll ID
     */
    id?: string;
    /**
     * Status of the Meeting Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: 'notstart' | 'started' | 'ended' | 'sharing';
    /**
     * Allow meeting participants to answer poll questions anonymously.
     *
     * This value defaults to `false`.
     */
    anonymous?: boolean;
    /**
     * The type of poll:
     * * `1` — Poll.
     * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
     * * `3` — Quiz. This feature must be enabled in your Zoom account.
     *
     * This value defaults to `1`.
     */
    poll_type?: 1 | 2 | 3;
    /**
     * Information about the poll's questions.
     */
    questions?: Array<{
      /**
       * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
       * * For `short_answer` polls, a maximum of 500 characters.
       * * For `long_answer` polls, a maximum of 2,000 characters.
       */
      answer_max_character?: number;
      /**
       * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
       */
      answer_min_character?: number;
      /**
       * Whether participants must answer the question:
       * * `true` — The participant must answer the question.
       * * `false` — The participant does not need to answer the question.
       *
       * **Note:**
       * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
       * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
       */
      answer_required?: boolean;
      /**
       * The poll question's available answers. This field requires a **minimum** of two answers.
       *
       * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
       * * For `matching` polls, you can only provide a maximum of 16 answers.
       * * For `rank_order` polls, you can only provide a maximum of seven answers.
       */
      answers?: Array<string>;
      /**
       * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
       * * `true` — The answer is case-sensitive.
       * * `false` — The answer is not case-sensitive.
       *
       * This value defaults to `false`.
       */
      case_sensitive?: boolean;
      /**
       * The poll question, up to 255 characters.
       *
       * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
       */
      name?: string;
      /**
       * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
       */
      prompts?: Array<{
        /**
         * The question prompt's title.
         */
        prompt_question?: string;
        /**
         * The question prompt's correct answers:
         * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
         * * For `rank_order` polls, you can only provide one correct answer.
         */
        prompt_right_answers?: Array<string>;
      }>;
      /**
       * The high score label used for the `rating_max_value` field.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_max_label?: string;
      /**
       * The rating scale's maximum value, up to a maximum value of 10.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_max_value?: number;
      /**
       * The low score label used for the `rating_min_value` field.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_min_label?: string;
      /**
       * The rating scale's minimum value. This value cannot be less than zero.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_min_value?: number;
      /**
       * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
       *
       * For `single` and `matching` polls, this field only accepts one answer.
       */
      right_answers?: Array<string>;
      /**
       * Whether to display the radio selection as a drop-down box:
       * * `true` — Show as a drop-down box.
       * * `false` — Do not show as a drop-down box.
       *
       * This value defaults to `false`.
       */
      show_as_dropdown?: boolean;
      /**
       * The poll's question and answer type:
       * * `single` — Single choice.
       * * `multiple` — Multiple choice.
       * * `matching` — Matching.
       * * `rank_order` — Rank order.
       * * `short_answer` — Short answer.
       * * `long_answer` — Long answer.
       * * `fill_in_the_blank` — Fill in the blank.
       * * `rating_scale` — Rating scale.
       */
      type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
    }>;
    /**
     * The poll's title, up to 64 characters.
     */
    title?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/meetings/{meetingId}/polls',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`4400\` <br>
         * Meeting polls disabled. To enable this feature, enable the "Meeting Polls/Quizzes" setting in the Zoom web portal's "Settings" interface.
         * Advanced meeting polls disabled. To enable this feature, enable the "Allow host to create advanced polls and quizzes" setting in the Zoom web portal's "Settings" interface.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**Error Code:** \`404\` <br>
        Meeting not found`,
      },
    });
  }

  /**
   * Perform batch poll creation
   * Polls allow the meeting host to survey attendees. Use this API to create batch [polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) for a meeting.<br><br>
   *
   * **Scopes**: `meeting:write:admin` `meeting:write`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   * **Prerequisites**:<br>
   * * Host user type must be **Pro** or higher plan.
   * * Polling feature must be enabled in the host's account.
   * * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
   * @returns any **HTTP Status Code:** `201` <br>
   * Meeting Poll Created
   * @throws ApiError
   */
  public createBatchPolls({
    meetingId,
    requestBody,
  }: {
    meetingId: string;
    /**
     * Batch Meeting poll object
     */
    requestBody?: {
      /**
       * Information about the meeting's polls.
       */
      polls?: Array<{
        /**
         * Whether to allow meeting participants to answer poll questions anonymously:
         * * `true` — Anonymous polls enabled.
         * * `false` — Participants cannot answer poll questions anonymously.
         *
         * This value defaults to `false`.
         */
        anonymous?: boolean;
        /**
         * The type of poll:
         * * `1` — Poll.
         * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
         * * `3` — Quiz. This feature must be enabled in your Zoom account.
         *
         * This value defaults to `1`.
         */
        poll_type?: 1 | 2 | 3;
        /**
         * Information about the poll's questions.
         */
        questions?: Array<{
          /**
           * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
           * * For `short_answer` polls, a maximum of 500 characters.
           * * For `long_answer` polls, a maximum of 2,000 characters.
           */
          answer_max_character?: number;
          /**
           * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
           */
          answer_min_character?: number;
          /**
           * Whether participants must answer the question:
           * * `true` — The participant must answer the question.
           * * `false` — The participant does not need to answer the question.
           *
           * **Note:**
           * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
           * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
           */
          answer_required?: boolean;
          /**
           * The poll question's available answers. This field requires a **minimum** of two answers.
           *
           * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
           * * For `matching` polls, you can only provide a maximum of 16 answers.
           * * For `rank_order` polls, you can only provide a maximum of seven answers.
           */
          answers?: Array<string>;
          /**
           * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
           * * `true` — The answer is case-sensitive.
           * * `false` — The answer is not case-sensitive.
           *
           * This value defaults to `false`.
           */
          case_sensitive?: boolean;
          /**
           * The poll question's title, up to 255 characters.
           *
           * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
           */
          name?: string;
          /**
           * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
           */
          prompts?: Array<{
            /**
             * The question prompt's title.
             */
            prompt_question?: string;
            /**
             * The question prompt's correct answers:
             * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
             * * For `rank_order` polls, you can only provide one correct answer.
             */
            prompt_right_answers?: Array<string>;
          }>;
          /**
           * The high score label used for the `rating_max_value` field.
           *
           * This field only applies to the `rating_scale` poll.
           */
          rating_max_label?: string;
          /**
           * The rating scale's maximum value, up to a maximum value of 10.
           *
           * This field only applies to the `rating_scale` poll.
           */
          rating_max_value?: number;
          /**
           * The low score label used for the `rating_min_value` field.
           *
           * This field only applies to the `rating_scale` poll.
           */
          rating_min_label?: string;
          /**
           * The rating scale's minimum value. This value cannot be less than zero.
           *
           * This field only applies to the `rating_scale` poll.
           */
          rating_min_value?: number;
          /**
           * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
           *
           * For `single` and `matching` polls, this field only accepts one answer.
           */
          right_answers?: Array<string>;
          /**
           * Whether to display the radio selection as a drop-down box:
           * * `true` — Show as a drop-down box.
           * * `false` — Do not show as a drop-down box.
           *
           * This value defaults to `false`.
           */
          show_as_dropdown?: boolean;
          /**
           * The poll's question and answer type:
           * * `single` — Single choice.
           * * `multiple` — Multiple choice.
           * * `matching` — Matching.
           * * `rank_order` — Rank order.
           * * `short_answer` — Short answer.
           * * `long_answer` — Long answer.
           * * `fill_in_the_blank` — Fill in the blank.
           * * `rating_scale` — Rating scale.
           */
          type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
        }>;
        /**
         * The poll's title, up to 64 characters.
         */
        title?: string;
      }>;
    };
  }): CancelablePromise<{
    polls?: Array<{
      /**
       * Whether to allow meeting participants to answer poll questions anonymously:
       * * `true` — Anonymous polls enabled.
       * * `false` — Participants cannot answer poll questions anonymously.
       */
      anonymous?: boolean;
      /**
       * Meeting Poll ID
       */
      id?: string;
      /**
       * The type of poll:
       * * `1` — Poll.
       * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
       * * `3` — Quiz. This feature must be enabled in your Zoom account.
       */
      poll_type?: 1 | 2 | 3;
      /**
       * Information about the poll's questions.
       */
      questions?: Array<{
        /**
         * The allowed maximum number of characters. This field only returns for `short_answer` and `long_answer` polls.
         */
        answer_max_character?: number;
        /**
         * The allowed minimum number of characters. This field only returns for `short_answer` and `long_answer` polls.
         */
        answer_min_character?: number;
        /**
         * Whether participants must answer the question:
         * * `true` — The participant must answer the question.
         * * `false` — The participant does not need to answer the question.
         */
        answer_required?: boolean;
        /**
         * The poll question's available answers.
         */
        answers?: Array<string>;
        /**
         * Whether the correct answer is case sensitive. This field only returns for `fill_in_the_blank` polls:
         * * `true` — The answer is case-sensitive.
         * * `false` — The answer is not case-sensitive.
         */
        case_sensitive?: boolean;
        /**
         * The poll question's title. For `fill_in_the_blank` polls, this field is the poll's question.
         */
        name?: string;
        /**
         * Information about the prompt questions. This object only returns for `matching` and `rank_order` polls.
         */
        prompts?: Array<{
          /**
           * The question prompt's title.
           */
          prompt_question?: string;
          /**
           * The question prompt's correct answers.
           */
          prompt_right_answers?: Array<string>;
        }>;
        /**
         * The high score label used for the `rating_max_value` field. This field only returns for `rating_scale` polls.
         */
        rating_max_label?: string;
        /**
         * The rating scale's maximum value. This field only returns for `rating_scale` polls.
         */
        rating_max_value?: number;
        /**
         * The low score label used for the `rating_min_value` field. This field only returns for `rating_scale` polls.
         */
        rating_min_label?: string;
        /**
         * The rating scale's minimum value. This field only returns for `rating_scale` polls.
         */
        rating_min_value?: number;
        /**
         * The poll question's correct answer(s).
         */
        right_answers?: Array<string>;
        /**
         * Whether to display the radio selection as a drop-down box:
         * * `true` — Show as a drop-down box.
         * * `false` — Do not show as a drop-down box.
         */
        show_as_dropdown?: boolean;
        /**
         * The poll's question and answer type:
         * * `single` — Single choice.
         * * `multiple` — Multiple choice.
         * * `matching` — Matching.
         * * `rank_order` — Rank order.
         * * `short_answer` — Short answer.
         * * `long_answer` — Long answer.
         * * `fill_in_the_blank` — Fill in the blank.
         * * `rating_scale` — Rating scale.
         */
        type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
      }>;
      /**
       * Status of the Meeting Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
       */
      status?: 'notstart' | 'started' | 'ended' | 'sharing';
      /**
       * Title for the Poll
       */
      title?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/meetings/{meetingId}/batch_polls',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`404\` **Not Found** <br>
         **Error Code:** \`300\` <br>
        Invalid Meeting ID.
         **Error Code:** \`300\` <br>
        Meeting id does not exist.
         **Error Code:** \`3000\` <br>
        Cannot access meeting information.
         **Error Code:** \`3001\`<br>
        Meeting does not exist: {meetingId}.<br>
         **Error Code:** \`4400\` <br>
         * You can only add a maximum of 50 polls.
         * Meeting polls disabled. To enable this feature, enable the "Meeting Polls/Quizzes" setting in the Zoom web portal's "Settings" interface.
         * Advanced meeting polls disabled. To enable this feature, enable the "Allow host to create advanced polls and quizzes" setting in the Zoom web portal's "Settings" interface.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
      },
    });
  }

  /**
   * Get a meeting poll
   * Polls allow the meeting host to survey attendees. Use this API to get information about a specific meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings).<br><br>
   * **Scopes**: `meeting:read:admin` `meeting:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   *
   * @returns any **HTTP Status Code:** `200` <br>
   * Meeting Poll object returned
   * @throws ApiError
   */
  public meetingPollGet({
    meetingId,
    pollId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * The poll ID
     */
    pollId: string;
  }): CancelablePromise<{
    /**
     * Meeting Poll ID
     */
    id?: string;
    /**
     * Status of the Meeting Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: 'notstart' | 'started' | 'ended' | 'sharing';
    /**
     * Allow meeting participants to answer poll questions anonymously.
     *
     * This value defaults to `false`.
     */
    anonymous?: boolean;
    /**
     * The type of poll:
     * * `1` — Poll.
     * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
     * * `3` — Quiz. This feature must be enabled in your Zoom account.
     *
     * This value defaults to `1`.
     */
    poll_type?: 1 | 2 | 3;
    /**
     * Information about the poll's questions.
     */
    questions?: Array<{
      /**
       * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
       * * For `short_answer` polls, a maximum of 500 characters.
       * * For `long_answer` polls, a maximum of 2,000 characters.
       */
      answer_max_character?: number;
      /**
       * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
       */
      answer_min_character?: number;
      /**
       * Whether participants must answer the question:
       * * `true` — The participant must answer the question.
       * * `false` — The participant does not need to answer the question.
       *
       * **Note:**
       * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
       * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
       */
      answer_required?: boolean;
      /**
       * The poll question's available answers. This field requires a **minimum** of two answers.
       *
       * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
       * * For `matching` polls, you can only provide a maximum of 16 answers.
       * * For `rank_order` polls, you can only provide a maximum of seven answers.
       */
      answers?: Array<string>;
      /**
       * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
       * * `true` — The answer is case-sensitive.
       * * `false` — The answer is not case-sensitive.
       *
       * This value defaults to `false`.
       */
      case_sensitive?: boolean;
      /**
       * The poll question, up to 255 characters.
       *
       * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
       */
      name?: string;
      /**
       * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
       */
      prompts?: Array<{
        /**
         * The question prompt's title.
         */
        prompt_question?: string;
        /**
         * The question prompt's correct answers:
         * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
         * * For `rank_order` polls, you can only provide one correct answer.
         */
        prompt_right_answers?: Array<string>;
      }>;
      /**
       * The high score label used for the `rating_max_value` field.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_max_label?: string;
      /**
       * The rating scale's maximum value, up to a maximum value of 10.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_max_value?: number;
      /**
       * The low score label used for the `rating_min_value` field.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_min_label?: string;
      /**
       * The rating scale's minimum value. This value cannot be less than zero.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_min_value?: number;
      /**
       * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
       *
       * For `single` and `matching` polls, this field only accepts one answer.
       */
      right_answers?: Array<string>;
      /**
       * Whether to display the radio selection as a drop-down box:
       * * `true` — Show as a drop-down box.
       * * `false` — Do not show as a drop-down box.
       *
       * This value defaults to `false`.
       */
      show_as_dropdown?: boolean;
      /**
       * The poll's question and answer type:
       * * `single` — Single choice.
       * * `multiple` — Multiple choice.
       * * `matching` — Matching.
       * * `rank_order` — Rank order.
       * * `short_answer` — Short answer.
       * * `long_answer` — Long answer.
       * * `fill_in_the_blank` — Fill in the blank.
       * * `rating_scale` — Rating scale.
       */
      type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
    }>;
    /**
     * The poll's title, up to 64 characters.
     */
    title?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/polls/{pollId}',
      path: {
        meetingId: meetingId,
        pollId: pollId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`4400\` <br> Meeting polls disabled. To enable this feature, enable the "Meeting Polls/Quizzes" setting in the Zoom web portal's "Settings" interface.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**Error Code:** \`404\` <br>
        Meeting Poll not found.`,
      },
    });
  }

  /**
   * Update a meeting poll
   * Polls allow the meeting host to survey attendees. Use this API to update information of a specific meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings)<br><br>
   * **Scopes**: `meeting:write:admin` `meeting:write`
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   * @returns void
   * @throws ApiError
   */
  public meetingPollUpdate({
    meetingId,
    pollId,
    requestBody,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * The poll ID
     */
    pollId: string;
    /**
     * Meeting Poll
     */
    requestBody: {
      /**
       * Allow meeting participants to answer poll questions anonymously.
       *
       * This value defaults to `false`.
       */
      anonymous?: boolean;
      /**
       * The type of poll:
       * * `1` — Poll.
       * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
       * * `3` — Quiz. This feature must be enabled in your Zoom account.
       *
       * This value defaults to `1`.
       */
      poll_type?: 1 | 2 | 3;
      /**
       * Information about the poll's questions.
       */
      questions?: Array<{
        /**
         * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * * For `short_answer` polls, a maximum of 500 characters.
         * * For `long_answer` polls, a maximum of 2,000 characters.
         */
        answer_max_character?: number;
        /**
         * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
         */
        answer_min_character?: number;
        /**
         * Whether participants must answer the question:
         * * `true` — The participant must answer the question.
         * * `false` — The participant does not need to answer the question.
         *
         * **Note:**
         * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
         * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
         */
        answer_required?: boolean;
        /**
         * The poll question's available answers. This field requires a **minimum** of two answers.
         *
         * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
         * * For `matching` polls, you can only provide a maximum of 16 answers.
         * * For `rank_order` polls, you can only provide a maximum of seven answers.
         */
        answers?: Array<string>;
        /**
         * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
         * * `true` — The answer is case-sensitive.
         * * `false` — The answer is not case-sensitive.
         *
         * This value defaults to `false`.
         */
        case_sensitive?: boolean;
        /**
         * The poll question, up to 255 characters.
         *
         * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
         */
        name?: string;
        /**
         * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
         */
        prompts?: Array<{
          /**
           * The question prompt's title.
           */
          prompt_question?: string;
          /**
           * The question prompt's correct answers:
           * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
           * * For `rank_order` polls, you can only provide one correct answer.
           */
          prompt_right_answers?: Array<string>;
        }>;
        /**
         * The high score label used for the `rating_max_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_label?: string;
        /**
         * The rating scale's maximum value, up to a maximum value of 10.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_value?: number;
        /**
         * The low score label used for the `rating_min_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_label?: string;
        /**
         * The rating scale's minimum value. This value cannot be less than zero.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_value?: number;
        /**
         * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
         *
         * For `single` and `matching` polls, this field only accepts one answer.
         */
        right_answers?: Array<string>;
        /**
         * Whether to display the radio selection as a drop-down box:
         * * `true` — Show as a drop-down box.
         * * `false` — Do not show as a drop-down box.
         *
         * This value defaults to `false`.
         */
        show_as_dropdown?: boolean;
        /**
         * The poll's question and answer type:
         * * `single` — Single choice.
         * * `multiple` — Multiple choice.
         * * `matching` — Matching.
         * * `rank_order` — Rank order.
         * * `short_answer` — Short answer.
         * * `long_answer` — Long answer.
         * * `fill_in_the_blank` — Fill in the blank.
         * * `rating_scale` — Rating scale.
         */
        type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
      }>;
      /**
       * The poll's title, up to 64 characters.
       */
      title?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/meetings/{meetingId}/polls/{pollId}',
      path: {
        meetingId: meetingId,
        pollId: pollId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`4400\` <br>
         * Meeting polls disabled. To enable this feature, enable the "Meeting Polls/Quizzes" setting in the Zoom web portal's "Settings" interface.
         * Advanced meeting polls disabled. To enable this feature, enable the "Allow host to create advanced polls and quizzes" setting in the Zoom web portal's "Settings" interface.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**Error Code:** \`404\` <br>
        Meeting Poll not found`,
      },
    });
  }

  /**
   * Delete a meeting poll
   * Polls allow the meeting host to survey attendees. Use this API to delete a meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings).<br>
   * **Scopes**: `meeting:write:admin` `meeting:write`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` <br>
   * **Prerequisites**:<br>
   * * Host user type must be **Pro**.
   * * Polling feature should be enabled in the host's account.
   * * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
   * @returns void
   * @throws ApiError
   */
  public meetingPollDelete({
    meetingId,
    pollId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * The poll ID
     */
    pollId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/meetings/{meetingId}/polls/{pollId}',
      path: {
        meetingId: meetingId,
        pollId: pollId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`4400\` <br> Meeting polls disabled. To enable this feature, enable the "Meeting Polls/Quizzes" setting in the Zoom web portal's "Settings" interface.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**Error Code:** \`404\`
        Meeting Poll not found`,
      },
    });
  }

  /**
   * Get a meeting survey
   * Use this API to return information about a [meeting survey](https://support.zoom.us/hc/en-us/articles/4404969060621-Post-meeting-survey-and-reporting).
   *
   * **Scopes:** `meeting:read`, `meeting:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The host must be a **Pro** user type.
   * * The [**Meeting Survey**](https://support.zoom.us/hc/en-us/articles/4404939095053-Enabling-meeting-surveys) feature enabled in the host's account.
   * * The meeting must be a scheduled meeting. Instant meetings do not have survey features enabled.
   * @returns any **HTTP Status Code:** `200` <br>
   * Meeting survey object returned.
   * @throws ApiError
   */
  public meetingSurveyGet({
    meetingId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
  }): CancelablePromise<{
    /**
     * Information about the customized meeting survey.
     */
    custom_survey?: {
      /**
       * Allow participants to anonymously answer survey questions.
       *
       * This value defaults to `true`.
       */
      anonymous?: boolean;
      /**
       * Information about the meeting survey's questions.
       */
      questions?: Array<{
        /**
         * The allowed maximum number of characters. This field only applies to `long_answer` survey, a maximum of 2,000 characters.
         */
        answer_max_character?: number;
        /**
         * The allowed minimum number of characters. This field only applies to `long_answer` survey. You must provide at least a **one** character minimum value.
         */
        answer_min_character?: number;
        /**
         * Whether participants must answer the question:
         * * `true` — The participant must answer the question.
         * * `false` — The participant does not need to answer the question.
         *
         * This value defaults to `false`.
         */
        answer_required?: boolean;
        /**
         * The survey question's available answers. This field requires a **minimum** of two answers.
         *
         * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
         * * For `matching` polls, you can only provide a maximum of 16 answers.
         * * For `rank_order` polls, you can only provide a maximum of seven answers.
         */
        answers?: Array<string>;
        /**
         * The survey question, up to 255 characters.
         */
        name?: string;
        /**
         * The high score label used for the `rating_max_value` field.
         *
         * This field only applies to the `rating_scale` survey.
         */
        rating_max_label?: string;
        /**
         * The rating scale's maximum value, up to a maximum value of 10.
         *
         * This field only applies to the `rating_scale` survey.
         */
        rating_max_value?: number;
        /**
         * The low score label used for the `rating_min_value` field.
         *
         * T his field only applies to the `rating_scale` survey.
         */
        rating_min_label?: string;
        /**
         * The rating scale's minimum value. This value cannot be less than zero.
         *
         * This field only applies to the `rating_scale` survey.
         */
        rating_min_value?: number;
        /**
         * Display the radio selection as a drop-down box:
         * * `true` — Show as a drop-down box.
         * * `false` — Do not show as a drop-down box.
         *
         * This value defaults to `false`.
         */
        show_as_dropdown?: boolean;
        /**
         * The survey's question and answer type:
         * * `single` — Single choice.
         * * `multiple` — Multiple choice.
         * * `rating_scale` — Rating scale.
         * * `long_answer` — Long answer.
         */
        type?: 'single' | 'multiple' | 'rating_scale' | 'long_answer';
      }>;
    };
    /**
     * Whether the **Show in the browser when the meeting ends** option is enabled:
     * * `true` — Enabled.
     * * `false` — Disabled.
     *
     * This value defaults to `true`.
     */
    show_in_the_browser?: boolean;
    /**
     * The link to the third party meeting survey.
     */
    third_party_survey?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/survey',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br> Bad Request

         **Error Code:** \`300\` <br>
        Invalid meeting ID.

         **Error Code:** \`3000\` <br>
         * Cannot access Webinar information. <br>
         * Meeting survey disabled. To enable this feature, enable the "Meeting Survey" setting in the Zoom web portal's "Settings" interface.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` <br> Not Found

         **Error Code:** \`300\` <br>
        Meeting ID does not exist.

         **Error Code:** \`3001\` <br>
        Meeting does not exist: {meetingId}.`,
      },
    });
  }

  /**
   * Update a meeting survey
   * Use this API to update a [meeting survey](https://support.zoom.us/hc/en-us/articles/4404969060621-Post-meeting-survey-and-reporting).
   *
   * **Scopes:** `meeting:write`, `meeting:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The host must be a **Pro** user type.
   * * The [**Meeting Survey**](https://support.zoom.us/hc/en-us/articles/4404939095053-Enabling-meeting-surveys) feature enabled in the host's account.
   * * The meeting must be a scheduled meeting. Instant meetings do not have survey features enabled.
   * @returns void
   * @throws ApiError
   */
  public meetingSurveyUpdate({
    meetingId,
    requestBody,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    requestBody: {
      /**
       * Information about the customized meeting survey.
       */
      custom_survey?: {
        /**
         * Allow participants to anonymously answer survey questions.
         *
         * This value defaults to `true`.
         */
        anonymous?: boolean;
        /**
         * Information about the meeting survey's questions.
         */
        questions?: Array<{
          /**
           * The allowed maximum number of characters. This field only applies to `long_answer` survey, a maximum of 2,000 characters.
           */
          answer_max_character?: number;
          /**
           * The allowed minimum number of characters. This field only applies to `long_answer` survey. You must provide at least a **one** character minimum value.
           */
          answer_min_character?: number;
          /**
           * Whether participants must answer the question:
           * * `true` — The participant must answer the question.
           * * `false` — The participant does not need to answer the question.
           *
           * This value defaults to `false`.
           */
          answer_required?: boolean;
          /**
           * The survey question's available answers. This field requires a **minimum** of two answers.
           *
           * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
           * * For `matching` polls, you can only provide a maximum of 16 answers.
           * * For `rank_order` polls, you can only provide a maximum of seven answers.
           */
          answers?: Array<string>;
          /**
           * The survey question, up to 255 characters.
           */
          name?: string;
          /**
           * The high score label used for the `rating_max_value` field.
           *
           * This field only applies to the `rating_scale` survey.
           */
          rating_max_label?: string;
          /**
           * The rating scale's maximum value, up to a maximum value of 10.
           *
           * This field only applies to the `rating_scale` survey.
           */
          rating_max_value?: number;
          /**
           * The low score label used for the `rating_min_value` field.
           *
           * T his field only applies to the `rating_scale` survey.
           */
          rating_min_label?: string;
          /**
           * The rating scale's minimum value. This value cannot be less than zero.
           *
           * This field only applies to the `rating_scale` survey.
           */
          rating_min_value?: number;
          /**
           * Display the radio selection as a drop-down box:
           * * `true` — Show as a drop-down box.
           * * `false` — Do not show as a drop-down box.
           *
           * This value defaults to `false`.
           */
          show_as_dropdown?: boolean;
          /**
           * The survey's question and answer type:
           * * `single` — Single choice.
           * * `multiple` — Multiple choice.
           * * `rating_scale` — Rating scale.
           * * `long_answer` — Long answer.
           */
          type?: 'single' | 'multiple' | 'rating_scale' | 'long_answer';
        }>;
      };
      /**
       * Whether the **Show in the browser when the meeting ends** option is enabled:
       * * `true` — Enabled.
       * * `false` — Disabled.
       *
       * This value defaults to `true`.
       */
      show_in_the_browser?: boolean;
      /**
       * The link to the third party meeting survey.
       */
      third_party_survey?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/meetings/{meetingId}/survey',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br> Bad Request

         **Error Code:** \`300\` <br>
         * Invalid meeting ID. <br>
         * Invalid third party survey: {third_party_survey}.

         **Error Code:** \`3000\` <br>
         * Cannot access Webinar information. <br>
         * Meeting survey disabled. To enable this feature, enable the "Meeting Survey" setting in the Zoom web portal's "Settings" interface.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` <br> Not Found

         **Error Code:** \`300\` <br>
        Meeting ID does not exist.

         **Error Code:** \`3001\` <br>
        Meeting does not exist: {meetingId}.`,
      },
    });
  }

  /**
   * Delete a meeting survey
   * Use this API to delete a [meeting survey](https://support.zoom.us/hc/en-us/articles/4404969060621-Post-meeting-survey-and-reporting).
   *
   * **Scopes:** `meeting:write`, `meeting:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The host must be a **Pro** user type.
   * * The [**Meeting Survey**](https://support.zoom.us/hc/en-us/articles/4404939095053-Enabling-meeting-surveys) feature enabled in the host's account.
   * * The meeting must be a scheduled meeting. Instant meetings do not have survey features enabled.
   * @returns void
   * @throws ApiError
   */
  public meetingSurveyDelete({
    meetingId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/meetings/{meetingId}/survey',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br> Bad Request

         **Error Code:** \`300\` <br>
        Invalid meeting ID.

         **Error Code:** \`3000\` <br>
         * Cannot access Webinar information. <br>
         * Meeting survey disabled. To enable this feature, enable the "Meeting Survey" setting in the Zoom web portal's "Settings" interface.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` <br> Not Found

         **Error Code:** \`300\` <br>
        Meeting ID does not exist.

         **Error Code:** \`3001\` <br>
        Meeting does not exist: {meetingId}.`,
      },
    });
  }

  /**
   * List meeting templates
   * Use this API to list available [meeting templates](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates) for a user. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Scopes:** `meeting:read` or `meeting:read:admin`</br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * @returns any **HTTP Status Code:** `200` **OK** <br>
   * @throws ApiError
   */
  public listMeetingTemplates({
    userId,
  }: {
    /**
     * Unique identifier of the user. Retrieve the value of this field by calling the [**List users**](/docs/api-reference/zoom-api/methods#operation/users) API.
     */
    userId: string;
  }): CancelablePromise<{
    templates?: Array<{
      /**
       * The template ID.
       */
      id?: string;
      /**
       * The template name.
       */
      name?: string;
      /**
       * The template type: <br>
       * `1`: Meeting template <br>
       * `2`: Admin meeting template
       */
      type?: number;
    }>;
    /**
     * Total records found for this request.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/meeting_templates',
      path: {
        userId: userId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` **Not Found** <br>
         **Error Code:** \`1001\`<br> User not exist: {userId}.<br>
        User {userId} does not exist or does not belong to this account.`,
      },
    });
  }

  /**
   * Create a meeting template from an existing meeting
   * Use this API to create a meeting template from an existing meeting.
   *
   * **Scopes**: `meeting:write:admin`, `meeting:write`</br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `201`<br>
   * Meeting template created.
   * @throws ApiError
   */
  public meetingTemplateCreate({
    userId,
    requestBody,
  }: {
    /**
     * The user ID retrievable from the [List users](/api-reference/zoom-api/methods#operation/users) API.
     */
    userId: string;
    requestBody: {
      /**
       * The meeting ID aka the meeting number in long (int64) format.
       */
      meeting_id?: number;
      /**
       * The template name.
       */
      name?: string;
      /**
       * If the field is set to true, the recurrence meeting template will be saved as the scheduled meeting.
       */
      save_recurrence?: boolean;
      /**
       * Overwrite an existing meeting template if the template is created from same existing meeting.
       */
      overwrite?: boolean;
    };
  }): CancelablePromise<{
    /**
     * The template ID.
     */
    id?: string;
    /**
     * The template name.
     */
    name?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users/{userId}/meeting_templates',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`300\` <br>
         * Meeting ID does not exist.
         * Invalid meeting ID.
         * You can only create up to 40 meeting templates.

         **Error Code:** \`3000\` <br>
         * Cannot access webinar information.
         * Meeting template name already exists: {templateName}.

         **Error Code:** \`3001\` <br>
        Meeting does not exist: {meetingId}

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1001\` <br>
         * User not exist: {userId}.
         * User {userId} does not exist or does not belong to this account.`,
      },
    });
  }

  /**
   * Get livestream details
   * Zoom allows users to [livestream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Use this API to get a meeting's livestream configuration details such as Stream URL, Stream Key and Page URL.<br><br>
   * **Prerequisites:**<br>
   * * Meeting host must be a licensed user with a Pro or higher plan.<br>
   * * Live streaming details must have been [configured](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service#h_01589a6f-a40a-4e18-a448-cb746e52ebc5) for the meeting.<br><br>
   * **Scopes:** `meeting:read:admin` `meeting:read`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   *
   *
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Live Stream details returned.
   *
   *
   * @throws ApiError
   */
  public getMeetingLiveStreamDetails({
    meetingId,
  }: {
    /**
     * Unique identifier of the meeting.
     */
    meetingId: string;
  }): CancelablePromise<{
    /**
     * Live streaming page URL. This is the URL using which anyone can view the livestream of the meeting.
     */
    page_url?: string;
    /**
     * Stream Key.
     */
    stream_key?: string;
    /**
     * Stream URL.
     */
    stream_url?: string;
    /**
     * The number of pixels in each dimension that the video camera can display.
     */
    resolution?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/livestream',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`300\`<br>
        Missing meetingId<br>
        Invalid meetingId<br><br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account: {accountId}

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
         **Error Code:** \`1001\`<br>
        User {userId} does not exist.

        `,
      },
    });
  }

  /**
   * Update a livestream
   * Use this API to update a meeting's livestream information. Zoom allows users to [livestream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform.
   *
   * **Scopes:** `meeting:write:admin`, `meeting:write`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * Meeting host must have a Pro license.
   * @returns void
   * @throws ApiError
   */
  public meetingLiveStreamUpdate({
    meetingId,
    requestBody,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * Meeting
     */
    requestBody: {
      /**
       * The live stream page URL.
       */
      page_url: string;
      /**
       * Stream name and key.
       */
      stream_key: string;
      /**
       * Streaming URL.
       */
      stream_url: string;
      /**
       * The number of pixels in each dimension that the video camera can display, required when a user enables 1080p. Use a value of `720p` or `1080p`
       */
      resolution?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/meetings/{meetingId}/livestream',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\` <br>Missing meetingId <br> Invalid meetingId.`,
        400: `**HTTP Status Code:** \`400\`<br>**Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}.<br>
         **Error Code:** \`3000\` Cannot access webinar info.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\`<br>**Error Code:** \`1001\` <br>User {userId} does not exist.
        `,
      },
    });
  }

  /**
   * Update Live Stream Status
   * Zoom allows users to [livestream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Use this API to update the status of a meeting's livestream.<br><br>
   * **Prerequisites:**<br>
   * * Meeting host must have a Pro license.<br>
   * **Scopes:** `meeting:write:admin` `meeting:write`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   * @returns void
   * @throws ApiError
   */
  public meetingLiveStreamStatusUpdate({
    meetingId,
    requestBody,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * Meeting
     */
    requestBody: {
      /**
       * Update the status of a live stream.
       *
       * The value can be one of the following:<br>
       * `start`: Start a live stream. <br>
       * `stop`: Stop an ongoing live stream.
       */
      action?: 'start' | 'stop';
      /**
       * Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
       */
      settings?: {
        /**
         * Display the name of the active speaker during a live stream.
         */
        active_speaker_name?: boolean;
        /**
         * Display name of the live stream.
         */
        display_name?: string;
      };
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/meetings/{meetingId}/livestream/status',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\` <br>
        Missing meetingId.<br>
        Invalid meetingId`,
        400: `**HTTP Status Code:** \`400\` <br>
         **Error Code:**\`3000\`<br>
        Cannot access webinar info.<br>
         **Error Code:**\`1010\`<br>User does not belong to this account: {accountId}.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` <br>
         **Error Code:**\`1001\`<br>
        User {userId} does not exist.<br>
        `,
        429: `**HTTP Status Code:** \`429\`<br>Too many requests submitted to start the livestream of this meeting: {meetingId}. If the livestream has not already started, retry making a new request after 30 seconds.`,
      },
    });
  }

  /**
   * List past meeting instances
   * Use this API to return a list of past meeting instances.
   *
   * **Scopes:** `meeting:read:admin`, `meeting:read` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * List of ended meeting instances returned.
   * @throws ApiError
   */
  public pastMeetings({
    meetingId,
  }: {
    /**
     * The past meeting's ID. The meeting ID must be from within the last 30 days. Past meeting IDs expire after 30 days.
     */
    meetingId: number;
  }): CancelablePromise<{
    /**
     * List of ended meeting instances.
     */
    meetings?: Array<{
      /**
       * Start time
       */
      start_time?: string;
      /**
       * Meeting UUID. Unique meeting ID. Each meeting instance will generate its own Meeting UUID (i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
       *
       *
       */
      uuid?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_meetings/{meetingId}/instances',
      path: {
        meetingId: meetingId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting not found.`,
      },
    });
  }

  /**
   * List past meeting's poll results
   * [Polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) allow the meeting host to survey attendees. Use this API to list poll results of a meeting.<br><br>
   *
   * **Scopes**: `meeting:read:admin`, `meeting:read`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium` <br>
   * **Prerequisites**:<br>
   * * Host user type must be **Pro**.
   * * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Polls returned successfully.
   * @throws ApiError
   */
  public listPastMeetingPolls({
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
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    questions?: Array<{
      /**
       * Email address of the user who submitted answers to the poll. If the user is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      email?: string;
      /**
       * Name of the user who submitted answers to the poll. If "anonymous" option is enabled for a poll, the participant's polling information will be kept anonymous and the value of `name` field will be "Anonymous Attendee".
       */
      name?: string;
      question_details?: Array<{
        /**
         * Answer submitted by the user.
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
         * Question asked during the poll.
         */
        question?: string;
      }>;
    }>;
    /**
     * The start time of the meeting.
     */
    start_time?: string;
    /**
     * Meeting UUID.
     */
    uuid?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_meetings/{meetingId}/polls',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**Error Code:** \`12702\`<br>
        Can not access a meeting a year ago.`,
      },
    });
  }

  /**
   * Get past meeting details
   * Use this API to get information about a past meeting.
   *
   * **Scopes:** `meeting:read:admin`, `meeting:read` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200` <br>
   * Meeting information returned.
   * @throws ApiError
   */
  public pastMeetingDetails({
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
     * The meeting's UUID. You **must** double encode this value if the meeting UUID begins with a `/` character or contains the `//` character.
     */
    uuid?: string;
    /**
     * The meeting's duration, in minutes.
     */
    duration?: number;
    /**
     * The meeting's start date and time.
     */
    start_time?: string;
    /**
     * The meeting's end date and time.
     */
    end_time?: string;
    /**
     * The host's ID.
     */
    host_id?: string;
    /**
     * The meeting host's department.
     */
    dept?: string;
    /**
     * The number of meeting participants.
     */
    participants_count?: number;
    /**
     * Whether the meeting was created directly through Zoom or via an API request:
     * * If the meeting was created via an OAuth app, this field returns the OAuth app's name.
     * * If the meeting was created via JWT or the Zoom Web Portal, this returns the `Zoom` value.
     */
    source?: string;
    /**
     * The meeting's topic.
     */
    topic?: string;
    /**
     * The total number of minutes attended by the meeting's host and participants.
     */
    total_minutes?: number;
    /**
     * The meeting type:
     * * `0` — A prescheduled meeting.
     * * `1` — An instant meeting.
     * * `2` — A scheduled meeting.
     * * `3` — A recurring meeting with no fixed time.
     * * `4` — A [personal meeting room](https://support.zoom.us/hc/en-us/articles/201362843).
     * * `7` — A [PAC (Personal Audio Conference)](https://support.zoom.us/hc/en-us/articles/205172455-Hosting-a-Personal-Audio-Conference-PAC-meeting) meeting.
     * * `8` — A recurring meeting with a fixed time.
     */
    type?: 0 | 1 | 2 | 3 | 4 | 7 | 8;
    /**
     * The user's email address.
     */
    user_email?: string;
    /**
     * The user's display name.
     */
    user_name?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_meetings/{meetingId}',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Meeting not found.

         **Error Code:** \`1010\`
         * User does not exist: {userId}
         * User "{userId}" does not exist or does not belong to this account.

         **Error Code:** \`300\` <br>
        Cannot access meeting information.

         **Error Code:** \`200\` <br>
        Only available for paid account: {accountId}

         **Error Code:** \`12702\` <br>
        Can not access a meeting a year ago.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting not found.

         **Error Code:** \`3001\`
         * This meeting is not available or the meeting ID is invalid.
         * The meeting ID is invalid or the meeting has not ended.`,
      },
    });
  }

  /**
   * Get past meeting participants
   * Retrieve information on participants from a past meeting. Note the API doesn't return results if there's only one participant in a meeting.<br><br>
   * **Scopes:** `meeting:read:admin` `meeting:read`
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * **Prerequisites:**<br>
   * * Paid account on a Pro or higher plan.
   *
   * <br> <br>  **Note**: Please double encode your UUID when using this API if the UUID begins with a '/'or contains '//' in it.
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Meeting participants' report returned.
   * @throws ApiError
   */
  public pastMeetingParticipants({
    meetingId,
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
       * Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank.
       */
      id?: string;
      /**
       * Participant display name.
       */
      name?: string;
      /**
       * Email address of the user. If the user is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      user_email?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_meetings/{meetingId}/participants',
      path: {
        meetingId: meetingId,
      },
      query: {
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`1010\`<br>
        User {userId} not exist or not belong to this account.<br><br>
         **Error Code:** \`300\`<br>
        Cannot access meeting information.<br><br>
         **Error Code:** \`200\`<br>
        Only available for paid account: {accountId}

         **Error Code:** \`12702\` <br>
        Can not access a meeting a year ago.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting not found<br>
         **Error Code:** \`1001\`<br>
        User {userId} not exist or not belong to this account.<br>
        User not exist: {userId}<br><br>
         **Error Code:** \`3001\`<br>
        This meeting is not available or ID is not valid.<br>
        Meeting ID is invalid or not end.`,
      },
    });
  }

  /**
   * Use in-meeting controls
   * Use this API to control [in-meeting](https://support.zoom.us/hc/en-us/articles/360021921032-In-Meeting-Controls) features. In-meeting controls include starting and stopping a recording, pausing and resuming a recording, and inviting participants.
   *
   * **Note:** This API's recording control only works for cloud recordings. It does **not** work for local recordings.
   *
   * **Scopes:** `meeting:write`, `meeting:write:admin`, `meeting:master`
   *
   * **Prerequisites:**
   * * The meeting **must** be a live meeting **except** inviting participants to the meeting through [call out (phone)/(room system)].
   * * Recording control: [Cloud recording](https://support.zoom.us/hc/en-us/articles/360060231472-Enabling-cloud-recording) must be enabled on the account.
   * * The user calling this API must be the host or an alternative meeting host.
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status:** `202` **Accepted**
   * Request processed successfully.
   * @throws ApiError
   */
  public inMeetingControl({
    meetingId,
    requestBody,
  }: {
    /**
     * The live meeting's ID.
     */
    meetingId: string;
    requestBody?: {
      /**
       * The in-meeting method to control:
       * * `recording.start` — Start the recording.
       * * `recording.stop` — Stop the recording.
       * * `recording.pause` — Pause the recording.
       * * `recording.resume` — Resume a paused recording.
       * * `participant.invite` — Invite a participant to the meeting.
       * * `participant.invite.callout` — Invite a participant to the meeting through [call out (phone)](https://support.zoom.us/hc/en-us/articles/4404535651085-Inviting-others-by-phone-call-out).
       * * `participant.invite.room_system_callout` — Invite a participant to the meeting through [call out (room system)].
       */
      method?: string;
      /**
       * The in-meeting parameters.
       */
      params?: {
        /**
         * The user's email address or the user ID, up to a maximum of 10 contacts. The account must be a part of the meeting host's account.
         */
        contacts?: Array<{
          /**
           * The user's email address. Use this value if you do not have the user's ID.
           *
           * If you pass the `id` value, the API ignores this query parameter.
           */
          email?: string;
          /**
           * The user's ID.
           */
          id?: string;
        }>;
        /**
         * The user's name to display in the meeting. Use this field if you pass the `participant.invite.callout` value for the `method` field.
         */
        invitee_name?: string;
        /**
         * The user's phone number. Use this field if you pass the `participant.invite.callout` value for the `method` field.
         */
        phone_number?: string;
        /**
         * Information about the `participant.invite.callout` settings.
         */
        invite_options?: {
          /**
           * Whether to require a greeting before being connected. Use this field if you pass the `participant.invite.callout` value for the `method` field.
           */
          require_greeting?: boolean;
          /**
           * Whether to require pressing 1 before being connected. Use this field if you pass the `participant.invite.callout` value for the `method` field.
           */
          require_pressing_one?: boolean;
        };
        /**
         * The type of call out. Use a value of `h323` or `sip`. Use this field if you pass the `participant.invite.room_system_callout` value for the `method` field.
         */
        call_type?: string;
        /**
         * The user's device IP address or URI. Use this field if you pass the `participant.invite.room_system_callout` value for the `method` field.
         */
        device_ip?: string;
        /**
         * Enable customers to leverage services that require customization of the FROM header to identify the caller. Use this field if you pass the `participant.invite.room_system_callout` value for the `method` field and the `h323` value for the `call_type` field.
         */
        h323_headers?: {
          /**
           * Custom name that will be used within the h323 Header.
           */
          from_display_name?: string;
          /**
           * Custom remote name that will be used within the meeting.
           */
          to_display_name?: string;
        };
        /**
         * Enable customers to leverage services that require customization of the FROM header to identify the caller. Use this field if you pass the `participant.invite.room_system_callout` value for the `method` field and the `sip` value for the `call_type` field.
         */
        sip_headers?: {
          /**
           * Custom name that will be used within the SIP Header.
           */
          from_display_name?: string;
          /**
           * Custom remote name that will be used within the meeting.
           */
          to_display_name?: string;
          /**
           * Custom URI that will be used within the SIP Header. The URI must start with 'sip:' or 'sips:' as a valid URI based on parameters defined by the platform.
           */
          from_uri?: string;
          /**
           * Ability to add 1 to 10 custom headers, each of which has a maximum length of 256 bytes to comply with SIP standards.  Custom headers would leverage header names starting with 'X-' per SIP guidelines.
           */
          additional_headers?: Array<{
            /**
             * Additional custom SIP header's key.
             */
            key?: string;
            /**
             * Additional custom SIP header's value.
             */
            value?: string;
          }>;
        };
      };
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/live_meetings/{meetingId}/events',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status:** \`400\` **Bad Request** <br><br>
         **Error Code:** \`300\`<br>
         * Meeting id does not exist.<br>
         * Invalid meeting id.<br>
         * Meeting does not exist.<br>
         * No permission.<br>
         * This API is not available for this account, please contact Zoom support.

         **Error Code:** \`3309\`<br>
        Not enough cloud storage available. Either purchase additional storage or delete cloud recordings to free up storage.
        `,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`3001\` <br> Meeting {meetingId} is not found or has expired.`,
        429: `**HTTP Status Code:** \`429\` <br>
         * You have exceeded the rate limit "{0}" of requests for this meeting. You can resume these API requests after 5 seconds.<br>
         * You have exceeded the rate limit "{0}" of requests for this meeting and this phone number. You may resume these requests after 5 seconds.
        `,
      },
    });
  }

  /**
   * Delete a live meeting message
   * Deletes a message in a live meeting based on ID.
   *
   * **Scopes:** `meeting:write` `meeting:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public deleteMeetingChatMessageById({
    meetingId,
    messageId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * The live meeting chat message's unique identifier (UUID), in base64-encoded format.
     */
    messageId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/live_meetings/{meetingId}/chat/messages/{messageId}',
      path: {
        meetingId: meetingId,
        messageId: messageId,
      },
      errors: {
        400: `**HTTP Status Code:** \`200\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Only available for Paid accounts.
         * DLP is not enabled.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`3001\` <br>
        Meeting does not exist: {meetingId}`,
      },
    });
  }

  /**
   * Get meeting's token
   * Use this API to get a meeting's [closed caption token (caption URL)](https://support.zoom.us/hc/en-us/articles/115002212983-Using-a-third-party-closed-captioning-service). This token lets you use a third-party service to stream text to their closed captioning software to the Zoom meeting.
   *
   * **Scopes:** `meeting:read`, `meeting:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The **Closed captioning** setting enabled in the Zoom web portal.
   * * The **Allow use of caption API Token to integrate with 3rd-party Closed Captioning services** setting enabled.
   * @returns any **HTTP Status Code:** `200` <br>
   * Meeting token returned.
   * @throws ApiError
   */
  public meetingToken({
    meetingId,
    type = 'closed_caption_token',
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * The meeting token type:
     * * `closed_caption_token` — The third-party closed caption API token.
     *
     * This defaults to `closed_caption_token`.
     */
    type?: 'closed_caption_token';
  }): CancelablePromise<{
    /**
     * The generated meeting token.
     */
    token?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/token',
      path: {
        meetingId: meetingId,
      },
      query: {
        type: type,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`300\` <br>
        Invalid meeting ID.

         **Error Code:** \`3000\` <br>
         * Cannot access Webinar information. <br>
         * Meeting survey disabled. To enable this feature, enable the "Meeting Survey" setting in the Zoom web portal's "Settings" interface.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`300\` <br>
        Meeting ID does not exist.

         **Error Code:** \`3001\` <br>
        Meeting does not exist: {meetingId}`,
      },
    });
  }

  /**
   * Get a meeting's join token for local recording
   * Use this API to get a meeting's join token to allow for local recording. The join token lets a recording bot implemented using Zoom Meeting SDK to connect to a Zoom meeting. The recording bot can then automatically start locally recording. This supports both regular and raw local recording types.
   *
   * **Scopes:** `meeting_token:read:admin:local_recording`, `meeting_token:read:local_recording` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan for the meeting host.
   * * The **Local recording** user setting enabled in the Zoom web portal.
   * @returns any **HTTP Status Code:** `200` <br>
   * Meeting local recording token returned.
   * @throws ApiError
   */
  public meetingLocalRecordingJoinToken({
    meetingId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
  }): CancelablePromise<{
    /**
     * The number of seconds the join token is valid for before it expires. This value always returns `120`.
     */
    expire_in?: 120;
    /**
     * The join token.
     */
    token?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/jointoken/local_recording',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`300\` <br>
        Invalid meeting ID.

         **Error Code:** \`3000\` <br>
        Cannot access Webinar information.

         **Error Code:** \`124\` <br>
        This API only supports OAuth2 authorization.

         **Error Code:** \`3000\` <br>
        Not allowed to start local recording. To use this feature, enable the "Local Recording" setting in the "Settings" page of the Zoom web portal.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`300\` <br>
        Meeting ID does not exist.

         **Error Code:** \`3001\` Meeting does not exist: {meetingId}`,
      },
    });
  }

  /**
   * Get a meeting's archive token for local archiving
   * Use this API to get a meeting's archive token to allow local archiving. The archive token allows a meeting SDK app or bot to get archive permission to access the meeting's raw audio and video media stream in real-time.
   *
   * **Scopes:** `meeting_token:read:admin:local_archiving` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan for the meeting host.
   * * The **Archive meetings and webinars** account setting enabled in the Zoom web portal.
   * @returns any **HTTP Status Code:** `200` <br>
   * Meeting local archiving token returned.
   * @throws ApiError
   */
  public meetingLocalArchivingArchiveToken({
    meetingId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
  }): CancelablePromise<{
    /**
     * The number of seconds the archive token is valid for before it expires. This value always returns `120`.
     */
    expire_in?: 120;
    /**
     * The archive token.
     */
    token?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/jointoken/local_archiving',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`300\` <br>
        Invalid meeting ID.

         **Error Code:** \`3000\` <br>
        Cannot access Webinar information.

         **Error Code:** \`124\` <br>
        This API only supports OAuth2 authorization.

         **Error Code:** \`3000\` <br>
        Not allowed to start local archiving. To use this feature, enable the "Archive meetings and webinars" setting in the "Settings" page of the Zoom web portal.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`300\` <br>
        Meeting ID does not exist.

         **Error Code:** \`3001\` Meeting does not exist: {meetingId}`,
      },
    });
  }

  /**
   * Get a meeting's join token for live streaming
   * Use this API to get a meeting's join token to allow live streaming. The join token allows a recording bot implemented using Zoom meeting SDK to connect to a Zoom meeting "hosted by the issuer of the token", and can call the streaming method automatically. It supports both regular live streaming, and raw streaming.
   *
   * **Scopes:** `meeting_token:read:admin:live_streaming`, `meeting_token:read:live_streaming` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan for the meeting host.
   * * The **Allow livestreaming of meetings** user setting enabled in the Zoom web portal.
   * @returns any **HTTP Status Code:** `200` <br>
   * Meeting live streaming token returned.
   * @throws ApiError
   */
  public meetingLiveStreamingJoinToken({
    meetingId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
  }): CancelablePromise<{
    /**
     * The number of seconds the join token is valid for before it expires. This value always returns `120`.
     */
    expire_in?: 120;
    /**
     * The join token.
     */
    token?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/jointoken/live_streaming',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`300\` <br>
        Invalid meeting ID.

         **Error Code:** \`3000\` <br>
        Cannot access Webinar information.

         **Error Code:** \`124\` <br>
        This API only supports OAuth2 authorization.

         **Error Code:** \`3000\` <br>
        Not allowed to start live streaming. To use this feature, enable the "Allow livestreaming of meetings" setting in the "Settings" page of the Zoom web portal.

         **Error Code:** \`3161\` <br>
        Meeting hosting and scheduling capabilities are not allowed for your user account.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`300\` <br>
        Meeting ID does not exist.

         **Error Code:** \`3001\` Meeting does not exist: {meetingId}`,
      },
    });
  }
}
