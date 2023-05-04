/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Meeting settings.
 */
export type MeetingSettings = {
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
  approval_type?: MeetingSettings.approval_type;
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
    method?: MeetingSettings.method;
  };
  /**
   * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
   */
  audio?: MeetingSettings.audio;
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
  auto_recording?: MeetingSettings.auto_recording;
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
  calendar_type?: MeetingSettings.calendar_type;
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
  encryption_type?: MeetingSettings.encryption_type;
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
  jbh_time?: MeetingSettings.jbh_time;
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
  registration_type?: MeetingSettings.registration_type;
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

export namespace MeetingSettings {
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
