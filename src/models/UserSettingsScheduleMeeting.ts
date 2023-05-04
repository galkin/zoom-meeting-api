/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserSettingsScheduleMeeting = {
  /**
   * Determine how participants can join the audio portion of the meeting:<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - Third party audio conference.
   */
  audio_type?: UserSettingsScheduleMeeting.audio_type;
  /**
   * Passcode for already scheduled meetings
   *
   */
  default_password_for_scheduled_meetings?: string;
  /**
   * Encrypt the meeting passcode and include it in the join meeting link to allow participants to join with just one click without having to enter the passcode.
   *
   */
  embed_password_in_join_link?: boolean;
  /**
   * Require a passcode for personal meetings if attendees can join before host.
   */
  force_pmi_jbh_password?: boolean;
  /**
   * Start meetings with host video on.
   */
  host_video?: boolean;
  /**
   * Join the meeting before host arrives.
   */
  join_before_host?: boolean;
  /**
   * Account wide meeting or webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
   */
  meeting_password_requirement?: {
    consecutive_characters_length?: UserSettingsScheduleMeeting.consecutive_characters_length;
    /**
     * Passcode must contain at least 1 letter (such as a,b,c...).
     *
     */
    have_letter?: boolean;
    /**
     * Passcode must contain at least 1 number (such as 1,2,3...).
     */
    have_number?: boolean;
    /**
     * Passcode must have at least 1 special character (!,@,#...).
     */
    have_special_character?: boolean;
    /**
     * Passcode must include both uppercase and lowercase characters.
     */
    have_upper_and_lower_characters?: boolean;
    /**
     * The minimum length that the meeting/webinar passcode must have.
     */
    length?: number;
    /**
     * Passcode must only contain numbers and no other characters.
     */
    only_allow_numeric?: boolean;
    /**
     * Inform users if the provided passcode is weak.
     */
    weak_enhance_detection?: boolean;
  };
  /**
   * Start meetings with participants video on.
   */
  participants_video?: boolean;
  /**
   * Personal Meeting Setting.<br><br>
   * `true`: Indicates that the **"Enable [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi)"** setting is turned on. Users can choose to use a PMI for their meetings. <br><br>
   * `false`: Indicates that the **"Enable Personal Meeting ID"** setting is [turned off](https://support.zoom.us/hc/en-us/articles/201362843-Personal-meeting-ID-PMI-and-personal-link#h_aa0335c8-3b06-41bc-bc1f-a8b84ef17f2a). If this setting is disabled, meetings that were scheduled with PMI will be invalid. Scheduled meetings will need to be manually updated.
   * For Zoom Phone only:If a user has been assigned a desk phone, **"Elevate to Zoom Meeting"** on desk phone will be disabled.
   *
   *
   *
   */
  personal_meeting?: boolean;
  /**
   * PMI passcode
   *
   */
  pmi_password?: string;
  /**
   * Generate and require passcode for participants joining by phone.
   */
  pstn_password_protected?: boolean;
  /**
   * Require a passcode for instant meetings. If you use PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
   *
   */
  require_password_for_instant_meetings?: boolean;
  /**
   * Require a passcode for Personal Meeting ID (PMI). This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
   *
   */
  require_password_for_pmi_meetings?: UserSettingsScheduleMeeting.require_password_for_pmi_meetings;
  /**
   * Require a passcode for meetings which have already been scheduled
   *
   */
  require_password_for_scheduled_meetings?: boolean;
  /**
   * Require a passcode when scheduling new meetings.This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
   *
   */
  require_password_for_scheduling_new_meetings?: boolean;
  /**
   * Use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi) when starting an instant meeting.
   */
  use_pmi_for_instant_meetings?: boolean;
  /**
   * Use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi) when scheduling a meeting.
   */
  use_pmi_for_scheduled_meetings?: boolean;
};

export namespace UserSettingsScheduleMeeting {
  /**
   * Determine how participants can join the audio portion of the meeting:<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - Third party audio conference.
   */
  export enum audio_type {
    BOTH = 'both',
    TELEPHONY = 'telephony',
    VOIP = 'voip',
    THIRD_PARTY = 'thirdParty',
  }

  export enum consecutive_characters_length {
    '_0' = 0,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
    '_8' = 8,
  }

  /**
   * Require a passcode for Personal Meeting ID (PMI). This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
   *
   */
  export enum require_password_for_pmi_meetings {
    JBH_ONLY = 'jbh_only',
    ALL = 'all',
    NONE = 'none',
  }
}
