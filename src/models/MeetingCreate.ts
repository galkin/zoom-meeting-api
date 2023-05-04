/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The base meeting object.
 */
export type MeetingCreate = {
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
    monthly_week?: MeetingCreate.monthly_week;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
     *
     * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    monthly_week_day?: MeetingCreate.monthly_week_day;
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
    type: MeetingCreate.type;
    /**
     * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
     *
     * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    weekly_days?: MeetingCreate.weekly_days;
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
    approval_type?: MeetingCreate.approval_type;
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
      method?: MeetingCreate.method;
    };
    /**
     * How participants join the audio portion of the meeting:
     * * `both` — Both telephony and VoIP.
     * * `telephony` — Telephony only.
     * * `voip` — VoIP only.
     *
     * This value defaults to `both`.
     */
    audio?: MeetingCreate.audio;
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
    auto_recording?: MeetingCreate.auto_recording;
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
    calendar_type?: MeetingCreate.calendar_type;
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
    encryption_type?: MeetingCreate.encryption_type;
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
    jbh_time?: MeetingCreate.jbh_time;
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
    registration_type?: MeetingCreate.registration_type;
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
  type?: MeetingCreate.type;
};

export namespace MeetingCreate {
  /**
   * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
   */
  export enum monthly_week {
    '_-1' = -1,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
  }

  /**
   * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
   *
   * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
   */
  export enum monthly_week_day {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
  }

  /**
   * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
   */
  export enum type {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }

  /**
   * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
   *
   * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
   */
  export enum weekly_days {
    _1 = '1',
    _2 = '2',
    _3 = '3',
    _4 = '4',
    _5 = '5',
    _6 = '6',
    _7 = '7',
  }

  /**
   * Enable meeting registration approval:
   * * `0` — Automatically approve registration.
   * * `1` — Manually approve registration.
   * * `2` — No registration required.
   *
   * This value defaults to `2`.
   */
  export enum approval_type {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
  }

  /**
   * Whether to allow or block users from specific countries or regions:
   * * `approve` — Allow users from specific countries or regions to join the meeting. If you select this setting, you must include the approved countries or regions in the `approved_list` field.
   * * `deny` — Block users from specific countries or regions from joining the meeting. If you select this setting, you must include the blocked countries or regions in the `denied_list` field.
   */
  export enum method {
    APPROVE = 'approve',
    DENY = 'deny',
  }

  /**
   * How participants join the audio portion of the meeting:
   * * `both` — Both telephony and VoIP.
   * * `telephony` — Telephony only.
   * * `voip` — VoIP only.
   *
   * This value defaults to `both`.
   */
  export enum audio {
    BOTH = 'both',
    TELEPHONY = 'telephony',
    VOIP = 'voip',
  }

  /**
   * The automatic recording settings:
   * * `local` — Record the meeting locally.
   * * `cloud` — Record the meeting to the cloud.
   * * `none` — Auto-recording disabled.
   *
   * This value defaults to `none`.
   */
  export enum auto_recording {
    LOCAL = 'local',
    CLOUD = 'cloud',
    NONE = 'none',
  }

  /**
   * Indicates the type of calendar integration used to schedule the meeting:
   * * `1` — [Zoom Outlook add-in](https://support.zoom.us/hc/en-us/articles/360031592971-Getting-started-with-Outlook-plugin-and-add-in)
   * * `2` — [Zoom for Google Workspace add-on](https://support.zoom.us/hc/en-us/articles/360020187492-Using-the-Zoom-for-Google-Workspace-add-on)
   *
   * Works with the `private_meeting` field to determine whether to share details of meetings or not.
   */
  export enum calendar_type {
    '_1' = 1,
    '_2' = 2,
  }

  /**
   * The type of [end-to-end (E2EE) encryption](https://support.zoom.us/hc/en-us/articles/360048660871) to use for the meeting:
   * * `enhanced_encryption` — Enhanced encryption. Encryption is stored in the cloud when you enable this option.
   * * `e2ee` — End-to-end encryption. The encryption key is stored on your local device and **cannot** be obtained by anyone else. When you use E2EE encryption, [certain features](https://support.zoom.us/hc/en-us/articles/360048660871), such as cloud recording or phone and SIP/H.323 dial-in, are **disabled**.
   */
  export enum encryption_type {
    ENHANCED_ENCRYPTION = 'enhanced_encryption',
    E2EE = 'e2ee',
  }

  /**
   * If the value of the `join_before_host` field is `true`, this field indicates the time limits within which a participant can join a meeting before the meeting's host:
   *
   * * `0` — Allow the participant to join the meeting at anytime.
   * * `5` — Allow the participant to join 5 minutes before the meeting's start time.
   * * `10` — Allow the participant to join 10 minutes before the meeting's start time.
   */
  export enum jbh_time {
    '_0' = 0,
    '_5' = 5,
    '_10' = 10,
  }

  /**
   * The meeting's registration type:
   * * `1` — Attendees register once and can attend any meeting occurrence.
   * * `2` — Attendees must register for each meeting occurrence.
   * * `3` — Attendees register once and can select one or more meeting occurrences to attend.
   *
   * This field is only for recurring meetings with fixed times (`8`). This value defaults to `1`.
   */
  export enum registration_type {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }
}
