/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Account Settings: In Meeting.
 */
export type AccountSettingsInMeeting = {
  /**
   * Information about the [Translate captions](https://support.zoom.us/hc/en-us/articles/8158738379917-Managing-automated-captions-) settings in meetings.
   */
  auto_generated_translation?: {
    /**
     * Information about all  speak languages and  translation languages in meetings.
     */
    language_item_pairList?: {
      /**
       * A list of speak languages and  translation languages.
       */
      trans_lang_config?: Array<{
        /**
         * language used in meetings
         */
        speak_language?: {
          /**
           * the name of language
           */
          name?:
            | 'Chinese (Simplified)'
            | 'Dutch'
            | 'English'
            | 'French'
            | 'German'
            | 'Italian'
            | 'Japanese'
            | 'Korean'
            | 'Portuguese'
            | 'Russian'
            | 'Spanish'
            | 'Ukrainian';
          /**
           * th code for the language
           */
          code?: 'zh' | 'nl' | 'en' | 'fr' | 'de' | 'it' | 'ja' | 'ko' | 'pt' | 'ru' | 'es' | 'uk';
        };
        /**
         * Information about all the translation languages.
         */
        translate_to?: {
          /**
           * Whether to select all the translation languages
           */
          all?: boolean;
          /**
           * A list of the translation languages.
           */
          language_config?: Array<{
            /**
             * the name of translation language
             */
            name?: 'English';
            /**
             * the code of translation language
             */
            code?: 'en';
          }>;
        };
      }>;
      /**
       * Whether to select all speak languages and translation languages
       */
      all?: boolean;
    };
    /**
     * Whether to allow users to enable automated translated captions in these language pairs in meetings.
     */
    enable?: boolean;
  };
  /**
   * Identify guest participants in a meeting or webinar.
   */
  alert_guest_join?: boolean;
  /**
   * Whether the host can enable [**Focus Mode**](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) when scheduling a meeting. This value defaults to `null`.
   */
  allow_host_to_enable_focus_mode?: boolean;
  /**
   * Whether to allow livestreaming.
   */
  allow_live_streaming?: boolean;
  /**
   * Whether to allow participants to only chat with certain groups:
   * * `1` — The participant cannot use chat.
   * * `2` — Host and co-hosts only.
   * * `3` — The participant can chat with other participants publicly.
   * * `4` - The participant can chat with other participants publicly and privately.
   *
   * **Note:** This setting is only available with client versions 5.7.3 and above.
   */
  allow_participants_chat_with?: AccountSettingsInMeeting.allow_participants_chat_with;
  /**
   * If the value of this field is set to `true`, meeting participants and webinar panelists can be allowed to rename themselves during a meeting or a webinar.
   *
   */
  allow_participants_to_rename?: boolean;
  /**
   * Show the Zoom desktop application when sharing screens.
   */
  allow_show_zoom_windows?: boolean;
  /**
   * Whether to allow participants to save meeting chats:
   * * `1` — Participants cannot save meeting chats.
   * * `2` — Participants can only save host and co-host meeting chats.
   * * `3` — Participants can save all meeting chats.
   */
  allow_users_save_chats?: AccountSettingsInMeeting.allow_users_save_chats;
  /**
   * If the value of this field is set to `true`,  allow users to delete messages in the in-meeting chat.
   *
   */
  allow_users_to_delete_messages_in_meeting_chat?: boolean;
  /**
   * Allow participants to use annotation tools to add information to shared screens.
   */
  annotation?: boolean;
  /**
   * Allow an anonymous Q&A in a webinar.
   */
  anonymous_question_answer?: boolean;
  /**
   * Allow host to put attendee on hold.
   *
   * **This field has been deprecated and is no longer supported.**
   * @deprecated
   */
  attendee_on_hold?: boolean;
  /**
   * Whether to enable [**Focus Mode**](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode). When enabled, this feature only displays the host and co-hosts' video and profile pictures during a meeting.
   *
   * This value defaults to `false`.
   */
  attention_mode_focus_mode?: boolean;
  /**
   * Whether to enable the [**Auto-answer group in chat**](https://support.zoom.us/hc/en-us/articles/203736135-Auto-answering-invitations-to-meetings) setting. Calls from these group members will be answered automatically.
   */
  auto_answer?: boolean;
  /**
   * Automatically save all in-meeting chats so that the host does not need to manually save the chat transcript after the meeting starts.
   */
  auto_saving_chat?: boolean;
  /**
   * Allow host to split meeting participants into separate, smaller rooms.
   */
  breakout_room?: boolean;
  /**
   * Whether the host can assign participants to breakout rooms when scheduling. This feature is only available in version 4.5.0 or higher.
   */
  breakout_room_schedule?: boolean;
  /**
   * Allow meeting participants to send a message that is visible to all participants.
   */
  chat?: boolean;
  /**
   * Allow a host to type closed captions. Enable a host to assign a participant or third party device to add closed captions.
   */
  closed_caption?: boolean;
  /**
   * Information about the account's closed captioning settings.
   */
  closed_captioning?: {
    /**
     * Whether to allow a live transcription service to transcribe meetings.
     */
    auto_transcribing?: boolean;
    /**
     * Whether to allow the host to type closed captions or assign a participant or 3rd-party service to provide closed captioning.
     */
    enable?: boolean;
    /**
     * Whether to allow participants to save closed captions or transcripts.
     */
    save_caption?: boolean;
    /**
     * Whether to allow the use of an API token to integrate with 3rd-party closed captioning services.
     */
    third_party_captioning_service?: boolean;
    /**
     * Whether to allow the viewing of full transcripts in the in-meeting side panel.
     */
    view_full_transcript?: boolean;
  };
  /**
   * Allow the host to add co-hosts.
   */
  co_host?: boolean;
  /**
   * If set to `true`, account owners and admins on paid accounts can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting their real-time meeting and webinar traffic. These regions can be provided in the `data_center_regions` field. If set to `false`, the regions cannot be customized and the default regions will be used.
   */
  custom_data_center_regions?: boolean;
  /**
   * Whether to allow custom livestreaming.
   */
  custom_live_streaming_service?: boolean;
  /**
   * The specific instructions to configure a custom livestream.
   */
  custom_service_instructions?: string;
  /**
   * If the value of `custom_data_center_regions` is `true`, a comma-separated list of the following [data center regions](https://support.zoom.us/hc/en-us/articles/360059254691-Datacenter-abbreviation-list) to opt in to:
   * * `AU` — Australia.
   * * `LA` — Latin America.
   * * `CA` — Canada.
   * * `CN` — China.
   * * `DE` — Germany.
   * * `HK` — Hong Kong SAR.
   * * `IN` — India.
   * * `IE` — Ireland.
   * * `TY` — Japan.
   * * `MX` — Mexico.
   * * `NL` — Netherlands.
   * * `SG` — Singapore.
   * * `US` — United States.
   */
  data_center_regions?: Array<'AU' | 'LA' | 'CA' | 'CN' | 'DE' | 'HK' | 'IN' | 'IE' | 'TY' | 'MX' | 'NL' | 'SG' | 'US'>;
  /**
   * Whether to enable the **Disable desktop screen sharing for meetings you host** setting.
   */
  disable_screen_sharing_for_host_meetings?: boolean;
  /**
   * Whether to enable the **Disable screen sharing when guests are in the meeting** setting.
   */
  disable_screen_sharing_for_in_meeting_guests?: boolean;
  /**
   * DSCP audio.
   */
  dscp_audio?: number;
  /**
   * DSCP marking.
   */
  dscp_marking?: boolean;
  /**
   * DSCP video.
   */
  dscp_video?: number;
  /**
   * Whether to use the differentiated services code point classifiers ('dscp_video', 'dscp_audio') in the dual way (incoming and outgoing).
   */
  dscp_dual?: boolean;
  /**
   * Zoom requires encryption for all data between the Zoom cloud, Zoom client, and Zoom Room. Require encryption for 3rd party endpoints (H323/SIP).
   */
  e2e_encryption?: boolean;
  /**
   * Play sound when participants join or leave.<br>`host` - Heard by host only.<br>`all` - Heard by host and all attendees.<br>`none` - Disable.
   */
  entry_exit_chime?: AccountSettingsInMeeting.entry_exit_chime;
  /**
   * Allow another user to take control of your camera during a meeting.
   */
  far_end_camera_control?: boolean;
  /**
   * Add a "Feedback" tab to the Windows Settings or Mac Preferences dialog. Enable users to provide feedback to Zoom at the end of the meeting.
   */
  feedback?: boolean;
  /**
   * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled on the account or not.
   */
  file_transfer?: boolean;
  /**
   * Activate higher quality video for host and participants.
   * Please note: This will use more bandwidth.
   */
  group_hd?: boolean;
  /**
   * Whether to allow participants to join a meeting directly from their desktop browser. Note that the meeting experience from the desktop browser is limited.
   */
  join_from_desktop?: boolean;
  /**
   * Whether to allow participants to join a meeting directly from their mobile browser. Note that the meeting experience from the mobile browser is limited.
   */
  join_from_mobile?: boolean;
  /**
   * Information about the [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Using-Language-Interpretation-in-your-meeting-or-webinar) settings.
   */
  language_interpretation?: {
    /**
     * A list of user-defined supported languages.
     */
    custom_languages?: Array<string>;
    /**
     * Whether to allow hosts to assign participants as interpreters who can interpret one language into another in real-time.
     */
    enable?: boolean;
    /**
     * Whether enable language interpretation by default.
     */
    enable_language_interpretation_by_default?: boolean;
    /**
     * Whether to allow participants to speak in listening channel.
     */
    allow_participants_to_speak_in_listening_channel?: boolean;
    /**
     * Whether to allow up to 25 custom languages when scheduling meetings.
     */
    allow_up_to_25_custom_languages_when_scheduling_meetings?: boolean;
    /**
     * A list of system-supported languages.
     */
    languages?: Array<'English' | 'Chinese' | 'Japanese' | 'German' | 'French' | 'Russian' | 'Portuguese' | 'Spanish' | 'Korean'>;
  };
  /**
   * Whether to allow Facebook livestreaming.
   */
  live_streaming_facebook?: boolean;
  /**
   * Whether to allow YouTube livestreaming.
   */
  live_streaming_youtube?: boolean;
  /**
   * Information about manual captioning settings.
   */
  manual_captioning?: {
    /**
     * Whether to allow the host to manually caption or let the host assign a participant to provide manual captioning.
     */
    allow_to_type?: boolean;
    /**
     * Whether to enable Zoom's [live transcription feature](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription#h_01FHGGHYJ4457H4GSZY0KM3NSB).
     */
    auto_generated_captions?: boolean;
    /**
     * Whether to enable the viewing of full transcripts in the in-meeting side panel.
     */
    full_transcript?: boolean;
    /**
     * Whether to [enable manual closed captioning](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription).
     */
    manual_captions?: boolean;
    /**
     * Whether to allow participants to [save closed captions or transcripts](https://support.zoom.us/hc/en-us/articles/360060958752).
     *
     * **Note:** If the `full_transcript` field is set to `false`, participants **cannot** save captions.
     */
    save_captions?: boolean;
    /**
     * Whether to allow the use of an API token to integrate with a [3rd-party device](https://support.zoom.us/hc/en-us/articles/115002212983) to provide closed captioning.
     */
    third_party_captioning_service?: boolean;
  };
  /**
   * Whether meeting participants can [communicate using the emoji reactions](https://support.zoom.us/hc/en-us/articles/115001286183-Nonverbal-feedback-and-meeting-reactions) located in the **Reactions** menu in the meeting toolbar.
   */
  meeting_reactions?: boolean;
  /**
   * Choose from the following meeting reaction options:
   * * `all` — All emojis: Allow meeting participants to use any emoji available in Zoom chat as a reaction in a meeting.
   * * `selected` — Selected emojis: Allow meeting participants to use the 6 standard meeting reaction emojis: Clapping Hands, Thumbs Up, Heart, Tears of Joy, Open Mouth, Party Popper (Tada, Celebration)
   */
  meeting_reactions_emojis?: AccountSettingsInMeeting.meeting_reactions_emojis;
  /**
   * Whether to allow host and panelist to use audible clap.
   */
  allow_host_panelists_to_use_audible_clap?: boolean;
  /**
   * Set this field to true to use [webinar reactions](https://support.zoom.us/hc/en-us/articles/4803536268429).
   */
  webinar_reactions?: boolean;
  /**
   * Whether to allow the host to present a survey to participants once a meeting has ended. This feature is only available in version 5.7.3 or higher.
   */
  meeting_survey?: boolean;
  /**
   * Allow users to select original sound in their client settings.
   */
  original_audio?: boolean;
  /**
   * Peer to peer connection while only two people are in a meeting.
   */
  p2p_connetion?: boolean;
  /**
   * Peer to peer listening ports range.
   */
  p2p_ports?: boolean;
  /**
   * Add "Polls" to the meeting controls.
   */
  polling?: boolean;
  /**
   * Information about the account's meeting polling settings.
   */
  meeting_polling?: {
    /**
     * Whether to allow the host to add polls before or during a meeting.
     */
    enable?: boolean;
    /**
     * Whether to require answers to be anonymous.
     */
    require_answers_to_be_anonymous?: boolean;
    /**
     * Whether to allow host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. Hosts can also set the correct answers for quizzes they create.
     */
    advanced_polls?: boolean;
    /**
     * Whether to allow users to manage saved polls and quizzes from Meetings
     */
    manage_saved_polls_and_quizzes?: boolean;
    /**
     * Whether to allow the alternative host to add or edit polls and quizzes.
     */
    allow_alternative_host_to_add_edit?: boolean;
    /**
     * Whether to allow host to upload an image for each question.
     */
    allow_host_to_upload_image?: boolean;
  };
  /**
   * The listening ports range, separated by a comma (ex 55,56). The ports range must be between 1 to 65535.
   */
  ports_range?: string;
  /**
   * Display a thumbs up or down survey at the end of each meeting.
   */
  post_meeting_feedback?: boolean;
  /**
   * Allow a meeting participant to send a private message to another participant.
   */
  private_chat?: boolean;
  /**
   * Record and play their own voice.
   */
  record_play_own_voice?: boolean;
  /**
   * Allow users to request remote control.
   */
  remote_control?: boolean;
  /**
   * Whether to enable the [**Non-verbal feedback**](https://support.zoom.us/hc/en-us/articles/115001286183-Nonverbal-feedback-and-meeting-reactions-) setting.  This value defaults to `false`.
   */
  non_verbal_feedback?: boolean;
  /**
   * Whether to enable the [**Remote support**](https://support.zoom.us/hc/en-us/articles/360060951012-Enabling-remote-support) setting. This value defaults to `false`.
   */
  remote_support?: boolean;
  /**
   * Whether to enable the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting) setting.
   */
  request_permission_to_unmute_participants?: boolean;
  /**
   * Allow screen sharing.
   */
  screen_sharing?: boolean;
  /**
   * Only show the default email when sending email invites.
   */
  sending_default_email_invites?: boolean;
  /**
   * Whether to allow participants to join a meeting directly from their browser and bypass the Zoom application download process. This is useful for participants who cannot download, install, or run applications. Note that the meeting experience from the browser is limited.
   */
  show_a_join_from_your_browser_link?: boolean;
  /**
   * Always show the meeting control toolbar.
   */
  show_meeting_control_toolbar?: boolean;
  /**
   * Whether the person sharing during a presentation can allow others to control the slide presentation. This feature is only available in version 5.8.3 or higher.
   */
  slide_control?: boolean;
  /**
   * Allow users to select stereo audio in their client settings.
   */
  stereo_audio?: boolean;
  /**
   * If the value of `custom_data_center_regions` is `true`, a comma-separated list of the following [data center regions](https://support.zoom.us/hc/en-us/articles/360059254691-Datacenter-abbreviation-list) to **not** opt in to:
   * * `EU` — Europe.
   * * `HK` — Hong Kong.
   * * `AU` — Australia.
   * * `IN` — India.
   * * `LA` — Latin America.
   * * `TY` — Tokyo.
   * * `CN` — China.
   * * `US` — United States.
   * * `CA` — Canada.
   */
  unchecked_data_center_regions?: Array<'EU' | 'HK' | 'AU' | 'IN' | 'TY' | 'CN' | 'US' | 'CA' | 'DE' | 'NL' | 'LA'>;
  /**
   * Use HTML formatted email for the Outlook plugin.
   */
  use_html_format_email?: boolean;
  /**
   * Allow users to replace their background with any selected image. Choose or upload an image in the Zoom desktop application settings.
   */
  virtual_background?: boolean;
  /**
   * Settings to manage virtual background.
   */
  virtual_background_settings?: {
    /**
     * Allow users to upload custom backgrounds.
     */
    allow_upload_custom?: boolean;
    /**
     * Allow use of videos for virtual backgrounds.
     */
    allow_videos?: boolean;
    /**
     * Enable virtual background.
     */
    enable?: boolean;
    files?: Array<{
      /**
       * Unique identifier of the file.
       */
      id?: string;
      /**
       * Indicates whether or not this file is the default virtual background file.
       */
      is_default?: boolean;
      /**
       * File name.
       */
      name?: string;
      /**
       * File size.
       */
      size?: number;
      /**
       * File type.
       */
      type?: string;
    }>;
  };
  /**
   * Add a watermark when viewing a shared screen.
   */
  watermark?: boolean;
  webinar_chat?: {
    /**
     * Allow webinar attendees to chat with:
     * * `1` — No one.
     * * `2` — Host and all panelists.
     * * `3` — Everyone.
     */
    allow_attendees_chat_with?: AccountSettingsInMeeting.allow_attendees_chat_with;
    /**
     * Whether to automatically save chat messages to a local file on the host's computer when the webinar ends.
     */
    allow_auto_save_local_chat_file?: boolean;
    /**
     * Allow webinar panelists to chat with:
     * * `1` — Host and all panelists.
     * * `2` — Everyone.
     */
    allow_panelists_chat_with?: AccountSettingsInMeeting.allow_panelists_chat_with;
    /**
     * Whether to allow webinar panelists to send direct messages to other panelists.
     */
    allow_panelists_send_direct_message?: boolean;
    /**
     * Whether to allow webinar attendees to save chats:
     * * `0` — Attendees cannot save chats.
     * * `1` — Attendees can only save host and panelist chats.
     * * `2` — Attendees can save all chats.
     */
    allow_users_save_chats?: AccountSettingsInMeeting.allow_users_save_chats;
    /**
     * By default, allow webinar attendees to chat with:
     * * `1` — Host and all panelists.
     * * `2` — Everyone.
     */
    default_attendees_chat_with?: AccountSettingsInMeeting.default_attendees_chat_with;
    /**
     * Whether to allow webinar participants to send chat messages.
     */
    enable?: boolean;
  };
  webinar_live_streaming?: {
    /**
     * The specific instructions to allow your account's meeting hosts to configure a custom livestream.
     */
    custom_service_instructions?: string;
    /**
     * Whether to enable webinar livestreaming.
     */
    enable?: boolean;
    /**
     * Whether to notify users to watch the livestream. This does not apply to custom RTMP (real-time messaging protocol).
     */
    live_streaming_reminder?: boolean;
    /**
     * The available livestreaming services:
     * * `facebook`
     * * `workplace_by_facebook`
     * * `youtube`
     * * `custom_live_streaming_service`
     */
    live_streaming_service?: Array<'facebook' | 'workplace_by_facebook' | 'youtube' | 'custom_live_streaming_service'>;
  };
  /**
   * Information about the account's webinar polling settings.
   */
  webinar_polling?: {
    /**
     * Whether to allow the host to add polls before or during a webinar.
     */
    enable?: boolean;
    /**
     * Whether to allow host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. Hosts can also set the correct answers for quizzes they create.
     */
    advanced_polls?: boolean;
    /**
     * Whether to require answers to be anonymous.
     */
    require_answers_to_be_anonymous?: boolean;
    /**
     * Whether to allow users to manage saved polls and quizzes from Meetings
     */
    manage_saved_polls_and_quizzes?: boolean;
    /**
     * Whether to allow the alternative host to add or edit polls and quizzes.
     */
    allow_alternative_host_to_add_edit?: boolean;
    /**
     * Whether to allow host to upload an image for each question.
     */
    allow_host_to_upload_image?: boolean;
  };
  /**
   * Whether attendees can ask the host and panelists questions in the webinar.
   */
  webinar_question_answer?: boolean;
  /**
   * Whether to allow the host to present surveys to attendees once a webinar has ended.
   */
  webinar_survey?: boolean;
  /**
   * Allow participants to share a whiteboard that includes annotation tools.
   */
  whiteboard?: boolean;
  /**
   * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
   * `host`: Only host can share the screen.<br>
   * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
   *
   */
  who_can_share_screen?: AccountSettingsInMeeting.who_can_share_screen;
  /**
   * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
   * `host`: Only a host can share the screen when someone else is sharing.<br>
   * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
   *
   */
  who_can_share_screen_when_someone_is_sharing?: AccountSettingsInMeeting.who_can_share_screen_when_someone_is_sharing;
  /**
   * Indicates how many participants can share at the same time. The value can be one of the following:<br>
   * `one`: Only one participant can share at a time
   * .<br>
   * `multiple`: Multiple participants can share simultaneously (dual monitors recommended)
   * . For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
   *
   */
  participants_share_simultaneously?: AccountSettingsInMeeting.participants_share_simultaneously;
  /**
   * Whether to allow Workplace by Facebook livestreaming.
   */
  workplace_by_facebook?: boolean;
};

export namespace AccountSettingsInMeeting {
  /**
   * Whether to allow participants to only chat with certain groups:
   * * `1` — The participant cannot use chat.
   * * `2` — Host and co-hosts only.
   * * `3` — The participant can chat with other participants publicly.
   * * `4` - The participant can chat with other participants publicly and privately.
   *
   * **Note:** This setting is only available with client versions 5.7.3 and above.
   */
  export enum allow_participants_chat_with {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
  }

  /**
   * Whether to allow participants to save meeting chats:
   * * `1` — Participants cannot save meeting chats.
   * * `2` — Participants can only save host and co-host meeting chats.
   * * `3` — Participants can save all meeting chats.
   */
  export enum allow_users_save_chats {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }

  /**
   * Play sound when participants join or leave.<br>`host` - Heard by host only.<br>`all` - Heard by host and all attendees.<br>`none` - Disable.
   */
  export enum entry_exit_chime {
    HOST = 'host',
    ALL = 'all',
    NONE = 'none',
  }

  /**
   * Choose from the following meeting reaction options:
   * * `all` — All emojis: Allow meeting participants to use any emoji available in Zoom chat as a reaction in a meeting.
   * * `selected` — Selected emojis: Allow meeting participants to use the 6 standard meeting reaction emojis: Clapping Hands, Thumbs Up, Heart, Tears of Joy, Open Mouth, Party Popper (Tada, Celebration)
   */
  export enum meeting_reactions_emojis {
    ALL = 'all',
    SELECTED = 'selected',
  }

  /**
   * Allow webinar attendees to chat with:
   * * `1` — No one.
   * * `2` — Host and all panelists.
   * * `3` — Everyone.
   */
  export enum allow_attendees_chat_with {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }

  /**
   * Allow webinar panelists to chat with:
   * * `1` — Host and all panelists.
   * * `2` — Everyone.
   */
  export enum allow_panelists_chat_with {
    '_1' = 1,
    '_2' = 2,
  }

  /**
   * By default, allow webinar attendees to chat with:
   * * `1` — Host and all panelists.
   * * `2` — Everyone.
   */
  export enum default_attendees_chat_with {
    '_1' = 1,
    '_2' = 2,
  }

  /**
   * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
   * `host`: Only host can share the screen.<br>
   * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
   *
   */
  export enum who_can_share_screen {
    HOST = 'host',
    ALL = 'all',
  }

  /**
   * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
   * `host`: Only a host can share the screen when someone else is sharing.<br>
   * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
   *
   */
  export enum who_can_share_screen_when_someone_is_sharing {
    HOST = 'host',
    ALL = 'all',
  }

  /**
   * Indicates how many participants can share at the same time. The value can be one of the following:<br>
   * `one`: Only one participant can share at a time
   * .<br>
   * `multiple`: Multiple participants can share simultaneously (dual monitors recommended)
   * . For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
   *
   */
  export enum participants_share_simultaneously {
    MULTIPLE = 'multiple',
    ONE = 'one',
  }
}
