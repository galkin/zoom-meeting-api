/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Account Settings: Schedule Meeting.
 */
export type AccountSettingsScheduleMeeting = {
  /**
   * Determine how participants can join the audio portion of the meeting.<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - 3rd party audio conference.
   */
  audio_type?: AccountSettingsScheduleMeeting.audio_type;
  /**
   * Only Zoom users who are signed in can join meetings.
   */
  enforce_login?: boolean;
  /**
   * Only signed in users with a specified domain can join the meeting.
   */
  enforce_login_domains?: string;
  /**
   * Only signed in users with a specific domain can join meetings.
   */
  enforce_login_with_domains?: boolean;
  /**
   * Require a password for Personal Meetings if attendees can join before host.
   */
  force_pmi_jbh_password?: boolean;
  /**
   * Start meetings with the host video on.
   */
  host_video?: boolean;
  /**
   * If the value of "join_before_host" field is set to `true`, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
   *
   * *  `0`: Allow participant to join anytime.
   * *  `5`: Allow participant to join 5 minutes before meeting start time.
   * * `10`: Allow participant to join 10 minutes before meeting start time.
   */
  jbh_time?: AccountSettingsScheduleMeeting.jbh_time;
  /**
   * Allow participants to join the meeting before the host arrives.
   */
  join_before_host?: boolean;
  /**
   * Account wide meeting/webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
   */
  meeting_password_requirement?: {
    /**
     *
     * Specify the max length of consecutive characters(abcde...) that can be used in a password.
     * If you set the value of this field to `0`, no restriction will be applied on consecutive characters.
     *
     * If you would like to set this restriction, you can specify a number between `4` and `8` that will define the maximum allowed length for consecutive characters in a password.
     *
     * The maximum allowed length will be `n-1` where `n` refers to the value you provide for this field.  For instance, if you provide `4` as the value, there can only be a maximum of `3` consecutive characters in a password(example: abc1x@8fdh).
     */
    consecutive_characters_length?: AccountSettingsScheduleMeeting.consecutive_characters_length;
    /**
     * If set to `true`, the password must contain at least 1 letter (such as a,b,c...).
     *
     */
    have_letter?: boolean;
    /**
     * If set to `true`, the password must contain at least 1 number (such as 1,2,3...).
     */
    have_number?: boolean;
    /**
     * If set to `true`, the password must have at least 1 special character (!,@,#...).
     */
    have_special_character?: boolean;
    /**
     * If set to `true`, the password must include both uppercase and lowercase characters.
     */
    have_upper_and_lower_characters?: boolean;
    /**
     * The minimum length that the meeting/webinar password needs to have.
     */
    length?: number;
    /**
     * If set to `true`, the password must only contain numbers and no other characters.
     */
    only_allow_numeric?: boolean;
    /**
     * If set to `true`, users will be informed if the provided password is weak.
     */
    weak_enhance_detection?: boolean;
  };
  /**
   * Always display "Zoom Meeting" as the meeting topic.
   */
  not_store_meeting_topic?: boolean;
  /**
   * Start meetings with the participant video on. Participants can change this setting during the meeting.
   */
  participant_video?: boolean;
  /**
   * Personal Meeting Setting.<br><br>
   * `true`: Indicates that the **"Enable Personal Meeting ID"** setting is turned on. Users can choose to use personal meeting ID for their meetings. <br><br>
   * `false`: Indicates that the **"Enable Personal Meeting ID"** setting is [turned off](https://support.zoom.us/hc/en-us/articles/201362843-Personal-meeting-ID-PMI-and-personal-link#h_aa0335c8-3b06-41bc-bc1f-a8b84ef17f2a). If this setting is disabled, meetings that were scheduled with PMI will be invalid. Scheduled meetings will need to be manually updated.
   * For Zoom Phone only:If a user has been assigned a desk phone, **"Elevate to Zoom Meeting"** on desk phone will be disabled.
   *
   *
   *
   */
  personal_meeting?: boolean;
  /**
   * Require a password for instant meetings. If you use PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
   *
   */
  require_password_for_instant_meetings?: boolean;
  /**
   * Require a password for a meeting held using Personal Meeting ID (PMI) This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
   *
   */
  require_password_for_pmi_meetings?: AccountSettingsScheduleMeeting.require_password_for_pmi_meetings;
  /**
   * Require a password for meetings which have already been scheduled
   *
   */
  require_password_for_scheduled_meetings?: boolean;
  /**
   * Require a password when scheduling new meetings. This setting applies for regular meetings that do not use PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
   */
  require_password_for_scheduling_new_meetings?: boolean;
  /**
   * Use Personal Meeting ID (PMI) when starting an instant meeting
   *
   */
  use_pmi_for_instant_meetings?: boolean;
  /**
   * Use Personal Meeting ID (PMI) when scheduling a meeting
   *
   */
  use_pmi_for_scheduled_meetings?: boolean;
  /**
   * Information about the [**Always display "Zoom Meeting" as the meeting topic**](https://support.zoom.us/hc/en-us/articles/201363253-Changing-account-settings#h_01EG9BJ646V2WJK1S3H2MP6YV6) setting.
   */
  always_display_zoom_meeting_as_topic?: {
    /**
     * Whether to enable the **Always display "Zoom Meeting" as the meeting topic** setting.
     */
    enable?: boolean;
    /**
     * Whether to display "Zoom Meeting" as the topic for already-scheduled meetings.
     */
    display_topic_for_scheduled_meetings?: boolean;
  };
  /**
   * Information about the **Hide meeting description** feature.
   */
  hide_meeting_description?: {
    /**
     * Whether to enable the **Hide meeting description** setting.
     */
    enable?: boolean;
    /**
     * Whether to hide the description for already-scheduled meetings.
     */
    hide_description_for_scheduled_meetings?: boolean;
  };
  /**
   * Information about the [**Always show "Zoom Webinar" as the webinar topic**](https://support.zoom.us/hc/en-us/articles/201363253-Changing-account-settings#h_01EG9BJ646V2WJK1S3H2MP6YV6) setting.
   */
  always_display_zoom_webinar_as_topic?: {
    /**
     * Whether to enable the **Always show "Zoom Webinar" as the webinar topic** setting.
     */
    enable?: boolean;
    /**
     * Whether to display "Zoom Webinar" as the topic for already-scheduled meetings.
     */
    display_topic_for_scheduled_webinars?: boolean;
  };
  /**
   * Information about the **Hide webinar description** feature.
   */
  hide_webinar_description?: {
    /**
     * Whether to enable the **Hide webinar description** setting.
     */
    enable?: boolean;
    /**
     * Whether to hide webinar description for the webinars which have already been scheduled.
     */
    hide_description_for_scheduled_webinars?: boolean;
  };
};

export namespace AccountSettingsScheduleMeeting {
  /**
   * Determine how participants can join the audio portion of the meeting.<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - 3rd party audio conference.
   */
  export enum audio_type {
    BOTH = 'both',
    TELEPHONY = 'telephony',
    VOIP = 'voip',
    THIRD_PARTY = 'thirdParty',
  }

  /**
   * If the value of "join_before_host" field is set to `true`, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
   *
   * *  `0`: Allow participant to join anytime.
   * *  `5`: Allow participant to join 5 minutes before meeting start time.
   * * `10`: Allow participant to join 10 minutes before meeting start time.
   */
  export enum jbh_time {
    '_0' = 0,
    '_5' = 5,
    '_10' = 10,
    '_15' = 15,
  }

  /**
   *
   * Specify the max length of consecutive characters(abcde...) that can be used in a password.
   * If you set the value of this field to `0`, no restriction will be applied on consecutive characters.
   *
   * If you would like to set this restriction, you can specify a number between `4` and `8` that will define the maximum allowed length for consecutive characters in a password.
   *
   * The maximum allowed length will be `n-1` where `n` refers to the value you provide for this field.  For instance, if you provide `4` as the value, there can only be a maximum of `3` consecutive characters in a password(example: abc1x@8fdh).
   */
  export enum consecutive_characters_length {
    '_0' = 0,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
    '_8' = 8,
  }

  /**
   * Require a password for a meeting held using Personal Meeting ID (PMI) This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
   *
   */
  export enum require_password_for_pmi_meetings {
    JBH_ONLY = 'jbh_only',
    ALL = 'all',
    NONE = 'none',
  }
}
