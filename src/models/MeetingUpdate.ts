/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Meeting object
 */
export type MeetingUpdate = {
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
    monthly_week?: MeetingUpdate.monthly_week;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
     *
     * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    monthly_week_day?: MeetingUpdate.monthly_week_day;
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
    type: MeetingUpdate.type;
    /**
     * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
     *
     * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    weekly_days?: MeetingUpdate.weekly_days;
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
    approval_type?: MeetingUpdate.approval_type;
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
      method?: MeetingUpdate.method;
    };
    /**
     * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
     */
    audio?: MeetingUpdate.audio;
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
    auto_recording?: MeetingUpdate.auto_recording;
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
    calendar_type?: MeetingUpdate.calendar_type;
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
    encryption_type?: MeetingUpdate.encryption_type;
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
    jbh_time?: MeetingUpdate.jbh_time;
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
    registration_type?: MeetingUpdate.registration_type;
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
  type?: MeetingUpdate.type;
};

export namespace MeetingUpdate {
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
   * Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.** <br><br>
   *
   * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
   */
  export enum approval_type {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
  }

  /**
   * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
   * `approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.<br><br>
   * `deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list`
   */
  export enum method {
    APPROVE = 'approve',
    DENY = 'deny',
  }

  /**
   * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
   */
  export enum audio {
    BOTH = 'both',
    TELEPHONY = 'telephony',
    VOIP = 'voip',
  }

  /**
   * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
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
   * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
   * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
   *
   * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
   */
  export enum encryption_type {
    ENHANCED_ENCRYPTION = 'enhanced_encryption',
    E2EE = 'e2ee',
  }

  /**
   * If the value of "join_before_host" field is set to true, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
   *
   * *  `0`: Allow participant to join anytime.
   * *  `5`: Allow participant to join 5 minutes before meeting start time.
   * * `10`: Allow participant to join 10 minutes before meeting start time.
   */
  export enum jbh_time {
    '_0' = 0,
    '_5' = 5,
    '_10' = 10,
  }

  /**
   * Registration type. Used for recurring meeting with fixed time only. <br>`1` Attendees register once and can attend any of the occurrences.<br>`2` Attendees need to register for each occurrence to attend.<br>`3` Attendees register once and can choose one or more occurrences to attend.
   */
  export enum registration_type {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }
}
