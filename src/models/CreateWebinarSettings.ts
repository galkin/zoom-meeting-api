/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Create Webinar settings.
 */
export type CreateWebinarSettings = {
  /**
   * Allow attendees to join from multiple devices.
   */
  allow_multiple_devices?: boolean;
  /**
   * Alternative host emails or IDs. Multiple values separated by comma.
   */
  alternative_hosts?: string;
  /**
   * Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
   */
  alternative_host_update_polls?: boolean;
  /**
   * The default value is `2`. To enable registration required, set the approval type to `0` or `1`.  Values include:<br>
   *
   * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
   */
  approval_type?: CreateWebinarSettings.approval_type;
  /**
   * Send reminder email to attendees and panelists.
   */
  attendees_and_panelists_reminder_email_notification?: {
    /**
     * * `true`: Send reminder email to attendees and panelists.
     *
     * * `false`: Do not send reminder email to attendees and panelists.
     */
    enable?: boolean;
    /**
     * `0` - No plan.<br>`1` - Send 1 hour before webinar.<br>`2` - Send 1 day before webinar.<br>`3` - Send 1 hour and 1 day before webinar.<br>`4` - Send 1 week before webinar.<br>`5` - Send 1 hour and 1 week before webinar.<br>`6` - Send 1 day and 1 week before webinar.<br>`7` - Send 1 hour, 1 day and 1 week before webinar.
     */
    type?: CreateWebinarSettings.type;
  };
  /**
   * Determine how participants can join the audio portion of the meeting.(Not supported for simulive webinar.)
   */
  audio?: CreateWebinarSettings.audio;
  /**
   * Meeting authentication domains. This option, allows you to specify the rule so that Zoom users, whose email address contains a certain domain, can join the Webinar. You can either provide multiple domains, using a comma in between and/or use a wildcard for listing domains.
   */
  authentication_domains?: string;
  /**
   * Specify the authentication type for users to join a Webinar with`meeting_authentication` setting set to `true`. The value of this field can be retrieved from the `id` field within `authentication_options` array in the response of [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API.
   */
  authentication_option?: string;
  /**
   * Automatic recording (not supported for simulive webinar): <br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
   */
  auto_recording?: CreateWebinarSettings.auto_recording;
  /**
   * Close registration after event date.
   * @deprecated
   */
  close_registration?: boolean;
  /**
   * Contact email for registration
   */
  contact_email?: string;
  /**
   * Contact name for registration
   */
  contact_name?: string;
  /**
   * Set the email language to one of the following:
   * `en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`.
   */
  email_language?: string;
  /**
   * Only signed-in users can join this meeting.
   *
   * **This field is deprecated and will not be supported in future.** <br><br> Instead of this field, use the "meeting_authentication", "authentication_option" and/or "authentication_domains" fields to establish the authentication mechanism for this Webinar.
   * @deprecated
   */
  enforce_login?: boolean;
  /**
   * Only signed-in users with specified domains can join meetings.
   *
   * **This field is deprecated and will not be supported in future.** <br><br> Instead of this field, use the "authentication_domains" field for this Webinar.
   * @deprecated
   */
  enforce_login_domains?: string;
  /**
   * Send follow-up email to absentees.
   */
  follow_up_absentees_email_notification?: {
    /**
     * * `true`: Send follow-up email to absentees.
     *
     * * `false`: Do not send follow-up email to absentees.
     */
    enable?: boolean;
    /**
     * `0` - No plan.<br>`1` - Send 1 days after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
     */
    type?: CreateWebinarSettings.type;
  };
  /**
   * Send follow-up email to attendees.
   */
  follow_up_attendees_email_notification?: {
    /**
     * * `true`: Send follow-up email to attendees.
     *
     * * `false`: Do not send follow-up email to attendees.
     */
    enable?: boolean;
    /**
     * `0` - No plan.<br>`1` - Send 1 day after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
     */
    type?: CreateWebinarSettings.type;
  };
  /**
   * List of global dial-in countries
   */
  global_dial_in_countries?: Array<string>;
  /**
   * Default to HD video.(Not supported for simulive webinar.)
   */
  hd_video?: boolean;
  /**
   * Whether HD video for attendees is enabled. This value defaults to `false`.(Not supported for simulive webinar.)
   */
  hd_video_for_attendees?: boolean;
  /**
   * Start video when host joins webinar.(Not supported for simulive webinar.)
   */
  host_video?: boolean;
  /**
   * The webinar's [language interpretation settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars). Make sure to add the language in the web portal in order to use it in the API. See link for details.
   *
   * **Note:** This feature is only available for certain Webinar add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar. This is not supported for simulive webinars.
   */
  language_interpretation?: {
    /**
     * Enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars) for the webinar.
     */
    enable?: boolean;
    /**
     * Information about the webinar's language interpreters.
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
   * Require panelists to authenticate to join
   */
  panelist_authentication?: boolean;
  /**
   * Only [authenticated](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) users can join meeting if the value of this field is set to `true`.
   */
  meeting_authentication?: boolean;
  /**
   * Add watermark that identifies the viewing participant.(Not supported for simulive webinar.)
   */
  add_watermark?: boolean;
  /**
   * Add audio watermark that identifies the participants.(Not supported for simulive webinar.)
   */
  add_audio_watermark?: boolean;
  /**
   * Make the webinar on-demand.(Not supported for simulive webinar.)
   */
  on_demand?: boolean;
  /**
   * Send invitation email to panelists (If `false`, do not send invitation email to panelists).
   */
  panelists_invitation_email_notification?: boolean;
  /**
   * Start video when panelists join webinar.(Not supported for simulive webinar.)
   */
  panelists_video?: boolean;
  /**
   * Zoom will open a survey page in attendees' browsers after leaving the webinar
   */
  post_webinar_survey?: boolean;
  /**
   * Enable practice session.
   */
  practice_session?: boolean;
  /**
   * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
   */
  question_and_answer?: {
    /**
     * * `true`: Allow participants to send questions without providing their name to the host, co-host, and panelists..
     *
     * * `false`: Do not allow anonymous questions.(Not supported for simulive webinar.)
     */
    allow_anonymous_questions?: boolean;
    /**
     * Indicate whether you want attendees to be able to view answered questions only or view all questions.
     *
     * * `only`: Attendees are able to view answered questions only.
     *
     * *  `all`: Attendees are able to view all questions submitted in the Q&A.
     */
    answer_questions?: CreateWebinarSettings.answer_questions;
    /**
     * * `true`: Attendees can answer questions or leave a comment in the question thread.
     *
     * * `false`: Attendees can not answer questions or leave a comment in the question thread
     */
    attendees_can_comment?: boolean;
    /**
     * * `true`: Attendees can click the thumbs up button to bring popular questions to the top of the Q&A window.
     *
     * * `false`: Attendees can not click the thumbs up button on questions.
     */
    attendees_can_upvote?: boolean;
    /**
     * If simulive webinar,
     *
     * * `true`: allow auto-reply to attendees.
     *
     * * `false`: don't allow auto-reply to the attendees.
     */
    allow_auto_reply?: boolean;
    /**
     * If `allow_auto_reply` = true, the text to be included in the automatic response.
     */
    auto_reply_text?: string;
    /**
     * * `true`: Enable [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
     *
     * * `false`: Disable Q&A for webinar.
     */
    enable?: boolean;
  };
  /**
   * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
   */
  registrants_email_notification?: boolean;
  /**
   * Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number.
   */
  registrants_restrict_number?: number;
  /**
   * Registration types. Only used for recurring webinars with a fixed time.<br>`1` - Attendees register once and can attend any of the webinar sessions.<br>`2` - Attendees need to register for each session in order to attend.<br>`3` - Attendees register once and can choose one or more sessions to attend.
   */
  registration_type?: CreateWebinarSettings.registration_type;
  /**
   * Whether to always send 1080p video to attendees. This value defaults to `false`.(Not supported for simulive webinar.)
   */
  send_1080p_video_to_attendees?: boolean;
  /**
   * Show social share buttons on the registration page.
   */
  show_share_button?: boolean;
  /**
   * Survey url for post webinar survey
   */
  survey_url?: string;
  /**
   * Whether the **Webinar Session Branding** setting is enabled. This setting lets hosts visually customize a webinar by setting a session background. This also lets hosts set Virtual Background and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers.
   */
  enable_session_branding?: boolean;
};

export namespace CreateWebinarSettings {
  /**
   * The default value is `2`. To enable registration required, set the approval type to `0` or `1`.  Values include:<br>
   *
   * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
   */
  export enum approval_type {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
  }

  /**
   * `0` - No plan.<br>`1` - Send 1 hour before webinar.<br>`2` - Send 1 day before webinar.<br>`3` - Send 1 hour and 1 day before webinar.<br>`4` - Send 1 week before webinar.<br>`5` - Send 1 hour and 1 week before webinar.<br>`6` - Send 1 day and 1 week before webinar.<br>`7` - Send 1 hour, 1 day and 1 week before webinar.
   */
  export enum type {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
  }

  /**
   * Determine how participants can join the audio portion of the meeting.(Not supported for simulive webinar.)
   */
  export enum audio {
    BOTH = 'both',
    TELEPHONY = 'telephony',
    VOIP = 'voip',
  }

  /**
   * Automatic recording (not supported for simulive webinar): <br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
   */
  export enum auto_recording {
    LOCAL = 'local',
    CLOUD = 'cloud',
    NONE = 'none',
  }

  /**
   * Indicate whether you want attendees to be able to view answered questions only or view all questions.
   *
   * * `only`: Attendees are able to view answered questions only.
   *
   * *  `all`: Attendees are able to view all questions submitted in the Q&A.
   */
  export enum answer_questions {
    ONLY = 'only',
    ALL = 'all',
  }

  /**
   * Registration types. Only used for recurring webinars with a fixed time.<br>`1` - Attendees register once and can attend any of the webinar sessions.<br>`2` - Attendees need to register for each session in order to attend.<br>`3` - Attendees register once and can choose one or more sessions to attend.
   */
  export enum registration_type {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }
}
