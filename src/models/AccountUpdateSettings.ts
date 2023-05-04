/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccountUpdateSettings = {
  /**
   * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
   */
  security?: {
    /**
     * Whether to only allow account administrators to change a user's picture.
     * @deprecated
     */
    admin_change_name_pic?: boolean;
    /**
     * Whether to only allow account administrators to change a user's information.
     */
    admin_change_user_info?: boolean;
    /**
     * If the `admin_change_user_info` value is `true`, the list of the types of user information that only the account administrators can modify:
     * * `name`
     * * `profile_picture`
     * * `sign_in_email`
     * * `host_key`
     */
    user_modifiable_info_by_admin?: Array<'name' | 'profile_picture' | 'sign_in_email' | 'host_key'>;
    /**
     * Hide billing information.
     */
    hide_billing_info?: boolean;
    /**
     * Allow users to import photos from a photo library on a  device.
     */
    import_photos_from_devices?: boolean;
    /**
     * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requirements to the users' Zoom login password.
     */
    password_requirement?: {
      /**
       *
       * Specify the max length of consecutive characters(abcde...) that can be used in a password.
       * If you set the value of this field to `0`, no restriction will be applied on consecutive characters.
       *
       * If you would like to set this restriction, you can specify a number between 4 and 8 that define the maximum allowed length for consecutive characters in a password.
       *
       * The max allowed length will be `n-1` where `n` refers to the value you provide for this field.  For instance, if you provide `4` as the value, there can only be a maximum of `3` consecutive characters in a password(example: abc1x@8fdh).
       */
      consecutive_characters_length?: number;
      /**
       * If the value of this field is set to `true`, the password must have at least one special character(!, @, #...).
       */
      have_special_character?: boolean;
      /**
       * Specify a minimum length for the password. The password length can be from a minimum of 9 characters, up to 14 characters. If you provide `0` as the value of this field, this field will be disabled and not be used and the basic password length requirement (minimum of 8 characters) will be applied for the requirement.
       */
      minimum_password_length?: number;
      /**
       * If the value of this field is set to `true`, user passwords will have to pass detection through a weak password dictionary in case hackers use simple passwords to sign in to your users' accounts.
       */
      weak_enhance_detection?: boolean;
    };
    /**
     * Settings for User Sign In interval requirements after a period of inactivity. If enabled, this setting forces automatic logout of users in Zoom Client app after a set amount of time. <br>
     *
     * If this setting is disabled, the value of this field will be `0`. If the setting is enabled, the value of this field will indicate the **period of inactivity** in minutes after which, an inactive user will be automatically logged out of the Zoom Client. The value for the period of inactivity can be one of the following:<br>
     *
     * `5`: 5 minutes<br>
     * `10`: 10 minutes<br>
     * `15`: 15 minutes<br>
     * `30`: 30 minutes<br>
     * `45`: 45 minutes<br>
     * `60`: 60 minutes<br>
     * `90`: 90 minutes<br>
     * `120`: 120 minutes
     *
     */
    sign_again_period_for_inactivity_on_client?: number;
    /**
     * Settings for User Sign In interval requirements after a period of inactivity. If enabled, this setting forces automatic logout of users in Zoom Web Portal after a set amount of time. <br>
     *
     * If this setting is disabled, the value of this field will be `0`. If the setting is enabled, the value of this field will indicate the **period of inactivity** in minutes after which, an inactive user will be automatically logged out of the Zoom Web Portal. The value for the period of inactivity can be one of the following:<br>
     *
     * `5`: 5 minutes<br>
     * `10`: 10 minutes<br>
     * `15`: 15 minutes<br>
     * `30`: 30 minutes<br>
     * `60`: 60 minutes<br>
     * `120`: 120 minutes
     *
     *
     *
     *
     */
    sign_again_period_for_inactivity_on_web?: number;
    /**
     * Settings for 2FA( [two factor authentication](https://support.zoom.us/hc/en-us/articles/360038247071) ). The value can be one of the following:
     * `all`: Two factor authentication will be enabled for all users in the account.<br>
     * `none`: Two factor authentication is disabled.<br>
     * `group`: Two factor authentication will be enabled for users belonging to specific groups. If 2FA is enabled for certain groups, the group IDs of the group(s) will be provided in the `sign_in_with_two_factor_auth_groups` field.<br>
     * `role`: Two factor authentication will be enabled only for users assigned with specific roles in the account. If 2FA is enabled for specific roles, the role IDs will be provided in the
     * `sign_in_with_two_factor_auth_roles` field.
     *
     */
    sign_in_with_two_factor_auth?: AccountUpdateSettings.sign_in_with_two_factor_auth;
    /**
     * This field contains group IDs of groups that have 2FA enabled. This field is only returned if the value of `sign_in_with_two_factor_auth` is `group`
     */
    sign_in_with_two_factor_auth_groups?: Array<string>;
    /**
     * This field contains role IDs of roles that have 2FA enabled. This field is only returned if the value of `sign_in_with_two_factor_auth` is `role`.
     */
    sign_in_with_two_factor_auth_roles?: Array<string>;
  };
  /**
   * The account's audio conference settings.
   */
  audio_conferencing?: {
    /**
     * The account's [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F51680NJ7YHZDXGJNSKDGM2P) settings.
     */
    toll_free_and_fee_based_toll_call?: {
      /**
       * Whether webinar attendees can dial in through the account's **Toll-free and Fee-based Toll Call** phone numbers. This feature is only available in version 5.2.2 and higher.
       */
      allow_webinar_attendees_dial?: boolean;
      /**
       * Whether the account has the [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F51680NJ7YHZDXGJNSKDGM2P) setting enabled.
       */
      enable?: boolean;
      /**
       * The account's **Toll-free and Fee-based Toll Call** phone number information.
       */
      numbers?: Array<{
        /**
         * The phone number's [E.164 country calling code](https://en.wikipedia.org/wiki/List_of_country_calling_codes).
         */
        code?: string;
        /**
         * The phone number's [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
         */
        country_code?: string;
        /**
         * The country name.
         */
        country_name?: string;
        /**
         * The phone number's display number.
         */
        display_number?: string;
        /**
         * The phone number.
         */
        number?: string;
      }>;
    };
  };
  /**
   * Account Settings: Notification.
   */
  email_notification?: {
    /**
     * Notify when an alternative host is set or removed from a meeting.
     */
    alternative_host_reminder?: boolean;
    /**
     * Notify the host and participants when a meeting is cancelled.
     */
    cancel_meeting_reminder?: boolean;
    /**
     * Whether to notify the host when a cloud recording is available.
     */
    cloud_recording_available_reminder?: boolean;
    /**
     * Notify the host when participants join the meeting before them.
     */
    jbh_reminder?: boolean;
    /**
     * Notify user when host licenses are running low.
     */
    low_host_count_reminder?: boolean;
    /**
     * Whether to notify any alternative hosts when a cloud recording is available.
     */
    recording_available_reminder_alternative_hosts?: boolean;
    /**
     * Whether to notify the person who scheduled the meeting or webinar for the host when a cloud recording is available.
     */
    recording_available_reminder_schedulers?: boolean;
    /**
     * Notify the host there is a meeting is scheduled, rescheduled, or cancelled.
     */
    schedule_for_reminder?: boolean;
  };
  /**
   * Account Settings: Feature.
   */
  feature?: {
    /**
     * Set the maximum number of participants a host can have in a single meeting.
     */
    meeting_capacity?: number;
  };
  /**
   * In Meeting Account Settings
   */
  in_meeting?: {
    /**
     * Whether to enable [guest participant](https://support.zoom.us/hc/en-us/articles/115004791123-Identifying-guests-in-the-meeting-webinar) alerts.
     */
    alert_guest_join?: boolean;
    /**
     * If the value of this field is set to `true`,  allow users to delete messages in the in-meeting chat.
     *
     */
    allow_users_to_delete_messages_in_meeting_chat?: boolean;
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
    allow_participants_chat_with?: AccountUpdateSettings.allow_participants_chat_with;
    /**
     * Whether to allow meeting participants to rename themselves during a meeting.
     */
    allow_participants_to_rename?: boolean;
    /**
     * Whether to enable the [**Show Zoom windows during screen share**](https://support.zoom.us/hc/en-us/articles/360061383571-Showing-Zoom-windows-during-screen-share) feature.
     */
    allow_show_zoom_windows?: boolean;
    /**
     * Whether to allow participants to save meeting chats:
     * * `1` — Participants cannot save meeting chats.
     * * `2` — Participants can only save host and co-host meeting chats.
     * * `3` — Participants can save all meeting chats.
     */
    allow_users_save_chats?: AccountUpdateSettings.allow_users_save_chats;
    /**
     * Whether to allow meeting participants to use the [annotation tools](https://support.zoom.us/hc/en-us/articles/115005706806).
     */
    annotation?: boolean;
    /**
     * Whether to enable anonymous Q&A.
     */
    anonymous_question_answer?: boolean;
    /**
     * Whether to allow the host to put an attendee on hold. This value defaults to `false`. **This field has been deprecated and is no longer supported.**
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
     * Whether to automatically save all in-meeting chats.
     */
    auto_saving_chat?: boolean;
    /**
     * Whether to allow the meeting host to split meeting participants into separate breakout rooms.
     */
    breakout_room?: boolean;
    /**
     * Whether the host can assign participants to breakout rooms when scheduling. This feature is **only** available in version 4.5.0 or higher.
     */
    breakout_room_schedule?: boolean;
    /**
     * Whether to enable chat during meeting for all participants.
     */
    chat?: boolean;
    /**
     * Whether to enable closed captions.
     */
    closed_caption?: boolean;
    /**
     * Information about the account's closed captioning settings.
     */
    closed_captioning?: {
      /**
       * Whether to enable Zoom's [live transcription feature](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription#h_01FHGGHYJ4457H4GSZY0KM3NSB).
       */
      auto_transcribing?: boolean;
      /**
       * Whether to enable [closed captioning and transcription services](https://support.zoom.us/hc/en-us/articles/4409683389709-Enabling-or-disabling-closed-captioning-and-live-transcription-services).
       */
      enable?: boolean;
      /**
       * Whether to allow participants to [save closed captions or transcripts](https://support.zoom.us/hc/en-us/articles/360060958752).
       *
       * **Note:** If the `view_full_transcript` field is set to `false`, participants **cannot** save captions.
       */
      save_caption?: boolean;
      /**
       * Whether to allow the use of an API token to integrate with a [3rd-party device](https://support.zoom.us/hc/en-us/articles/115002212983) to provide closed captioning.
       */
      third_party_captioning_service?: boolean;
      /**
       * Whether to enable the viewing of full transcripts in the in-meeting side panel.
       */
      view_full_transcript?: boolean;
    };
    /**
     * Whether to allow the host to add co-hosts.
     */
    co_host?: boolean;
    /**
     * Whether to use custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-meetings-webinars):
     * * `true` — Users can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting real-time meeting traffic. The data center regions can be provided in the `data_center_regions` field.
     * * `false` — Only use the default data center regions.
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
     * The DSCP audio marking value. This value defaults to `56`.
     */
    dscp_audio?: number;
    /**
     * Whether to enable [differentiated services code point (DSCP)](https://en.wikipedia.org/wiki/Differentiated_services) marking.
     */
    dscp_marking?: boolean;
    /**
     * The DSCP video marking value. This value defaults to `40`.
     */
    dscp_video?: number;
    /**
     * Whether to use the differentiated services code point classifiers ('dscp_video', 'dscp_audio') in the dual way (incoming and outgoing).
     */
    dscp_dual?: boolean;
    /**
     * Whether to require [AES encryption](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) for meetings.
     */
    e2e_encryption?: boolean;
    /**
     * When to play the meeting entry/exit sound notification:
     * * `host` — Only when the host joins or leaves.
     * * `all` — When any participant joins or leaves.
     * * `none` - Disable the entry/exit sound notification.
     */
    entry_exit_chime?: AccountUpdateSettings.entry_exit_chime;
    /**
     * Whether to allow another user to take control of the user's camera.
     */
    far_end_camera_control?: boolean;
    /**
     * Whether to enable the [**Feedback to Zoom**](https://support.zoom.us/hc/en-us/articles/115005838023-Feedback-to-Zoom) setting.
     */
    feedback?: boolean;
    /**
     * Whether to enable the [**Send files via meeting chat**](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting.
     */
    file_transfer?: boolean;
    /**
     * Whether to enable group HD video.
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
     * Information about the [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Using-Language-Interpretation-in-your-meeting-or-webinar) settings.
     */
    language_interpretation?: {
      /**
       * A list of user-defined supported languages.
       */
      custom_languages?: Array<string>;
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
       * Whether to allow hosts to assign participants as interpreters who can interpret one language into another in real-time.
       */
      enable?: boolean;
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
    meeting_reactions_emojis?: AccountUpdateSettings.meeting_reactions_emojis;
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
     * Whether to allow users to select original sound in their client settings.
     */
    original_audio?: boolean;
    /**
     * Whether to enable the [**Peer to Peer connection while only 2 people are in a meeting**](https://support.zoom.us/hc/en-us/articles/360061410851-Enabling-Peer-to-Peer-connection-for-2-people-in-a-meeting) setting.
     */
    p2p_connetion?: boolean;
    /**
     * Whether to enable the **Listening ports range** setting.
     */
    p2p_ports?: boolean;
    /**
     * Whether to add polls to the meeting controls.
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
       * Whether to allow the host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. Hosts can also set the correct answers for quizzes they create.
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
     * When the `p2p_ports` value is `true`, the value is a semi-colon list of the peer to peer listening ports range, between `1` to `65535`. This value defaults to an empty string.
     */
    ports_range?: string;
    /**
     * Whether to display a thumbs up or thumbs down feedback survey at the end of each meeting.
     */
    post_meeting_feedback?: boolean;
    /**
     * Whether to [enable private chat](https://support.zoom.us/hc/en-us/articles/360060835932-Enabling-and-disabling-private-chat) between participants during meetings.
     */
    private_chat?: boolean;
    /**
     * Whether to let the user record and play their own voice.
     */
    record_play_own_voice?: boolean;
    /**
     * Whether to enable the [**Remote control**](https://support.zoom.us/hc/en-us/articles/201362673-Requesting-or-giving-remote-control) setting.
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
     * Whether to allow hosts and participants to share their screen or content during meetings.
     */
    screen_sharing?: boolean;
    /**
     * Whether to enable the [**Only show default email when sending email invites**](https://support.zoom.us/hc/en-us/articles/360061433531-Showing-default-email-when-sending-email-invites) setting.
     */
    sending_default_email_invites?: boolean;
    /**
     * Whether to allow participants to join a meeting directly from their browser and bypass the Zoom application download process. This is useful for participants who cannot download, install, or run applications. Note that the meeting experience from the browser is limited.
     */
    show_a_join_from_your_browser_link?: boolean;
    /**
     * Whether to display the in-meeting control toolbar.
     */
    show_meeting_control_toolbar?: boolean;
    /**
     * Whether the person sharing during a presentation can allow others to control the slide presentation. This feature is only available in version 5.8.3 or higher.
     */
    slide_control?: boolean;
    /**
     * Whether to allow users to select stereo audio in their client settings.
     */
    stereo_audio?: boolean;
    /**
     * Whether to enable the use of HTML-formatted emails for the Outlook plugin.
     */
    use_html_format_email?: boolean;
    /**
     * Whether to enable Virtual Backgrounds.
     */
    virtual_background?: boolean;
    /**
     * The account's Virtual Background settings.
     */
    virtual_background_settings?: {
      /**
       * Whether to allow user to upload custom Virtual Backgrounds.
       */
      allow_upload_custom?: boolean;
      /**
       * Whether to allow the use of videos for Virtual Backgrounds.
       */
      allow_videos?: boolean;
      /**
       * Whether to enable Virtual Backgrounds.
       */
      enable?: boolean;
      /**
       * Information about the Virtual Background files.
       */
      files?: Array<{
        /**
         * The Virtual Background file's ID.
         */
        id?: string;
        /**
         * Whether the file is the default Virtual Background file.
         */
        is_default?: boolean;
        /**
         * The Virtual Background file's name.
         */
        name?: string;
        /**
         * The Virtual Background file's size, in bytes.
         */
        size?: number;
        /**
         * The Virtual Background file's type.
         */
        type?: string;
      }>;
    };
    /**
     * Whether to include a [watermark](https://support.zoom.us/hc/en-us/articles/209605273-Adding-an-image-watermark) when viewing a shared screen.
     */
    watermark?: boolean;
    /**
     * Information about the account's webinar chat settings.
     */
    webinar_chat?: {
      /**
       * Allow webinar attendees to chat with:
       * * `1` — No one.
       * * `2` — Host and all panelists.
       * * `3` — Everyone.
       */
      allow_attendees_chat_with?: AccountUpdateSettings.allow_attendees_chat_with;
      /**
       * Whether to automatically save chat messages to a local file on the host's computer when the webinar ends.
       */
      allow_auto_save_local_chat_file?: boolean;
      /**
       * Allow webinar panelists to chat with:
       * * `1` — Host and all panelists.
       * * `2` — Everyone.
       */
      allow_panelists_chat_with?: AccountUpdateSettings.allow_panelists_chat_with;
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
      allow_users_save_chats?: AccountUpdateSettings.allow_users_save_chats;
      /**
       * By default, allow webinar attendees to chat with:
       * * `1` — Host and all panelists.
       * * `2` — Everyone.
       */
      default_attendees_chat_with?: AccountUpdateSettings.default_attendees_chat_with;
      /**
       * Whether to allow webinar participants to send chat messages.
       */
      enable?: boolean;
    };
    webinar_live_streaming?: {
      /**
       * The specific instructions to allow the account's meeting hosts to configure a custom livestream.
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
       * * `facebook` — Facebook.
       * * `workplace_by_facebook` — Workplace by Facebook.
       * * `youtube` — YouTube.
       * * `custom_live_streaming_service` — Custom Live Streaming Service.
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
       * Whether to allow the host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. Hosts can also set the correct answers for quizzes they create.
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
     * Whether to enable the [**Zoom Whiteboard**](https://support.zoom.us/hc/en-us/articles/4410916881421) feature.
     */
    whiteboard?: boolean;
    /**
     * The type of user who can share their screen or content during meetings:
     * * `host` — Only hosts can screen share.
     * * `all` — Both hosts and participants can screen share.
     */
    who_can_share_screen?: AccountUpdateSettings.who_can_share_screen;
    /**
     * The type of user that can begin sharing their screen when someone else in the meeting is sharing their screen:
     * * `host` — Only hosts can screen share when someone else is sharing.
     * * `all` — Both hosts and participants can screen share when someone else is sharing.
     */
    who_can_share_screen_when_someone_is_sharing?: AccountUpdateSettings.who_can_share_screen_when_someone_is_sharing;
    /**
     * Indicates how many participants can share at the same time. The value can be one of the following:<br>
     * `one`: Only one participant can share at a time
     * .<br>
     * `multiple`: Multiple participants can share simultaneously (dual monitors recommended).
     */
    participants_share_simultaneously?: AccountUpdateSettings.participants_share_simultaneously;
    /**
     * Whether to allow Workplace by Facebook livestreaming.
     */
    workplace_by_facebook?: boolean;
  };
  /**
   * Account Settings: Integration.
   */
  integration?: {
    /**
     * Enable users who join a meeting from their mobile device to share content from their Box account.
     */
    box?: boolean;
    /**
     * Enable users who join a meeting from their mobile device to share content from their Dropbox account.
     */
    dropbox?: boolean;
    /**
     * Enable meetings to be scheduled using Google Calendar.
     */
    google_calendar?: boolean;
    /**
     * Enable users who join a meeting from their mobile device to share content from their Google Drive.
     */
    google_drive?: boolean;
    /**
     * Enable users to control a connected Kubi device from within a Zoom meeting.
     */
    kubi?: boolean;
    /**
     * Enable users who join a meeting from their mobile device to share content from their Microsoft OneDrive account.
     */
    microsoft_one_drive?: boolean;
  };
  other_options?: {
    /**
     * Whether administrators can activate users with a single default password when they add users. This immediately activates the users without waiting for them to set their own password.
     */
    allow_auto_active_users?: boolean;
    /**
     * Whether to display the Zoom Help badge on the bottom-right of the page.
     */
    allow_users_contact_support_via_chat?: boolean;
    /**
     * Whether users can add pronouns to their profile cards and share them during meetings and webinars.
     */
    allow_users_enter_and_share_pronouns?: boolean;
    /**
     * Whether iOS blurs the screenshot in the task switcher when multiple apps are open. Android hides the screenshot in the system-level list of recent apps.
     */
    blur_snapshot?: boolean;
    /**
     * Whether a user with the [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege) can view other users' meetings.
     */
    display_meetings_scheduled_for_others?: boolean;
    /**
     * The Dashboard meeting [quality scores and network alerts](https://support.zoom.us/hc/en-us/articles/360061244651) setting:
     * * `0` — Do not enable meeting quality scores and network alerts on the Dashboard.
     * * `1` — Display the meeting quality score and network alerts on the Dashboard.
     * * `2` — Use custom thresholds for quality scores and network alerts.
     * * `3` —Both Use custom thresholds for quality scores and network alerts and Display the meeting quality score and network alerts on the Dashboard.
     */
    meeting_qos_and_mos?: AccountUpdateSettings.meeting_qos_and_mos;
    /**
     * Whether meetings with only one person will display on the Dashboard and in reports.
     */
    show_one_user_meeting_on_dashboard?: boolean;
    /**
     * Allow connections to different CDNs (content delivery networks) for a better web browsing experience. All users in your organization will use the selected CDN to access static resources:
     * * `none` — Do not use a CDN.
     * * `default` — Use the Amazon CloudFront CDN for users **except** Chinese Mainland users. Chinese Mainland users will use the Wangsu CDN (China).
     * * `wangsu` — Use the Wangsu CDN for all users.
     */
    use_cdn?: AccountUpdateSettings.use_cdn;
    /**
     * Webinar registration options.
     */
    webinar_registration_options?: {
      /**
       * Allow host to enable "Show join info on registration confirmation page".
       */
      allow_host_to_enable_join_info?: boolean;
      /**
       * Allow host to enable "Show social share buttons on registration page".
       */
      allow_host_to_enable_social_share_buttons?: boolean;
      /**
       * Enable custom questions.
       */
      enable_custom_questions?: boolean;
    };
  };
  profile?: {
    recording_storage_location?: {
      /**
       * Users can choose the country to store their recorded content. Content can include meeting, webinar, and phone recordings, as well as voicemail, transcripts, and custom greeting prompts. See [Managing the Communications Content storage location](https://support.zoom.us/hc/en-us/articles/360050781131) for details.
       *
       * Provide abbreviated country codes as the value for this field. See the [Countries abbreviation list](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) for details.
       */
      allowed_values?: Array<string>;
      /**
       * Abbreviated country code.
       */
      value?: string;
    };
  };
  /**
   * Account Settings: Recording.
   */
  recording?: {
    /**
     * Cloud recordings are only accessible to account members. People outside of your organization cannot open links that provide access to cloud recordings.
     */
    account_user_access_recording?: boolean;
    /**
     * Allow recovery of deleted cloud recordings from trash.
     * If the value of this field is set to `true`, deleted cloud recordings will be kept in trash for 30 days after deletion and can be recovered within that period.
     */
    allow_recovery_deleted_cloud_recordings?: boolean;
    /**
     * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
     */
    archive?: {
      /**
       * Enable the archiving feature.
       */
      enable?: boolean;
      settings?: {
        /**
         * Include in-meeting and/or in-webinar audio in the archive.
         */
        audio_file?: boolean;
        /**
         * Include closed caption or transcript in the archive.
         */
        cc_transcript_file?: boolean;
        /**
         * Include in-meeting chat in the archive.
         */
        chat_file?: boolean;
        /**
         * Include user email in in-meeting chat file.
         */
        chat_with_sender_email?: boolean;
        /**
         * Include in-meeting and/or in-webinar video in the archive.
         */
        video_file?: boolean;
        /**
         * Include direct message in in-meeting chat file.
         */
        chat_with_direct_message?: boolean;
        /**
         * The retention period for archiving content, in days.
         */
        archive_retention?: AccountUpdateSettings.archive_retention;
        /**
         * Perform the action when meetings or webinars cannot be archived.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
         */
        action_when_archive_failed?: AccountUpdateSettings.action_when_archive_failed;
        /**
         * Show notification when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
         */
        notification_when_archiving_starts?: AccountUpdateSettings.notification_when_archiving_starts;
        /**
         * Play voice prompt when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
         */
        play_voice_prompt_when_archiving_starts?: AccountUpdateSettings.play_voice_prompt_when_archiving_starts;
      };
      /**
       * Archive types:
       *
       * * `1`: Only meetings are archived.<br>
       * * `2`: Only webinars are archived.<br>
       * * `3`: Both meetings and webinars are archived.
       */
      type?: AccountUpdateSettings.type;
    };
    /**
     * Allow Zoom to permanently delete recordings automatically after a specified number of days.
     */
    auto_delete_cmr?: boolean;
    /**
     * When the `auto_delete_cmr` value is `true`, this value is the number of days before the auto-deletion of cloud recordings:
     * * `30` — 30 days.
     * * `60` — 60 days.
     * * `90` — 90 days.
     * * `120` — 120 days.
     */
    auto_delete_cmr_days?: AccountUpdateSettings.auto_delete_cmr_days;
    /**
     * The account's [**Record active speaker, gallery view and shared screen separately**](https://support.zoom.us/hc/en-us/articles/360060316092-Changing-basic-and-advanced-cloud-recording-settings#h_01F4CYJTCTXNS2MXH00W9EFG6R) settings.
     */
    record_files_separately?: {
      /**
       * Whether to record the active speaker only.
       */
      active_speaker?: boolean;
      /**
       * Whether to record the gallery view only.
       */
      gallery_view?: boolean;
      /**
       * Whether to record the shared screen only.
       */
      shared_screen?: boolean;
    };
    /**
     * Whether to display participants' names in the recording.
     */
    display_participant_name?: boolean;
    /**
     * Whether to record thumbnails of the presenter when they are sharing their screen.
     */
    recording_thumbnails?: boolean;
    /**
     * Whether to optimize recordings for a 3rd party video editor. This may increase the file size and the time it takes to generate recording files.
     */
    optimize_recording_for_3rd_party_video_editor?: boolean;
    /**
     * Whether to enable the [recording highlights](https://support.zoom.us/hc/en-us/articles/360060802432) feature.
     * @deprecated
     */
    recording_highlight?: boolean;
    /**
     * Whether to save panelist chat to the recording. This setting saves messages sent by panelists during a webinar to either all panelists or all panelists and attendees to the recording.
     */
    save_panelist_chat?: boolean;
    /**
     * Whether to save poll results shared during the meeting or webinar. This also includes poll results shared during the meeting or webinar.
     */
    save_poll_results?: boolean;
    /**
     * Whether to save [closed captions](https://support.zoom.us/hc/en-us/articles/207279736) as a VTT (Video Track Text) file.
     */
    save_close_caption?: boolean;
    /**
     * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
     */
    auto_recording?: AccountUpdateSettings.auto_recording;
    /**
     * Allow hosts to record and save the meeting in the cloud.
     */
    cloud_recording?: boolean;
    /**
     * Cloud recording downloads.
     */
    cloud_recording_download?: boolean;
    /**
     * Only the host can download cloud recordings.
     */
    cloud_recording_download_host?: boolean;
    /**
     * If the value of this field is set to `true`, hosts will be able to delete the recordings. If this option is set to `false`, the recordings cannot be deleted by the host and only admin can delete them.
     *
     */
    host_delete_cloud_recording?: boolean;
    /**
     * Setting to allow cloud recording access only from specific IP address ranges.
     *
     */
    ip_address_access_control?: {
      /**
       * If set to `true`, the cloud recordings of this account can only be accessed by the IP addresses defined in the `ip_addresses_or_ranges` property.
       *
       *
       */
      enable?: boolean;
      /**
       * IP addresses or ranges that have access to the cloud recordings. Separate multiple IP ranges with comma. Use n.n.n.n, n.n.n.n/n or n.n.n.n - n.n.n.n syntax where n is a number.
       *
       * Example: `46.33.24.184, 48.99.100.2/25` or `200.181.108.17 - 220.181.108.157`
       *
       *
       */
      ip_addresses_or_ranges?: string;
    };
    /**
     * Allow hosts and participants to record the meeting using a local file.
     */
    local_recording?: boolean;
    /**
     * If set to `true`, meeting hosts cannot view their meeting cloud recordings. Only the admins who have recording management privilege can access them.
     *
     */
    prevent_host_access_recording?: boolean;
    /**
     * Whether to record one audio file for all participants.
     */
    record_audio_file?: boolean;
    /**
     * Record the gallery view with a shared screen.
     */
    record_gallery_view?: boolean;
    /**
     * Record the active speaker with a shared screen.
     */
    record_speaker_view?: boolean;
    /**
     * Automatically transcribe the audio of the meeting or webinar to the cloud.
     */
    recording_audio_transcript?: boolean;
    /**
     * Show a disclaimer to participants before a recording starts
     *
     */
    recording_disclaimer?: boolean;
    /**
     * By selecting this option, your recording will have meeting smart chapters, and next steps. You are directing Zoom to access, process, and use your account's recording data for the purpose of analysis and insights.
     */
    smart_recording?: {
      /**
       * By selecting this option, meeting details in the audio transcript will be highlighted. Hosts can modify highlighted sections and generate a video summary (highlighted sections may have a 3-second offset) based on these sections. The summary is for informational purposes only and may not be complete.
       */
      create_recording_highlights?: boolean;
      /**
       * By selecting this option, your recording will have chapters with overview. Hosts can edit the chapters.
       */
      create_smart_chapters?: boolean;
      /**
       * By selecting this option, there will be a summary of actions to take after the recorded meeting.
       */
      create_next_steps?: boolean;
    };
    /**
     * This object represents the minimum password requirements set for recordings via Account Recording Settings.
     */
    recording_password_requirement?: {
      /**
       * Indicates whether or not password must contain at least one alphabetical letter (a, b, c..).
       */
      have_letter?: boolean;
      /**
       * Indicates whether or not password must contain at least one number(1, 2, 3..).
       */
      have_number?: boolean;
      /**
       * Indicates whether or not password must contain at least one special character(!, @, #..).
       */
      have_special_character?: boolean;
      /**
       * Minimum required length for the password.
       */
      length?: number;
      /**
       * Indicates whether or not password must contain only numeric characters.
       */
      only_allow_numeric?: boolean;
    };
    /**
     * Require a passcode to access existing cloud recordings.
     */
    required_password_for_existing_cloud_recordings?: boolean;
    /**
     * Whether to require a passcode to share cloud recordings.
     */
    required_password_for_shared_cloud_recordings?: boolean;
    /**
     * Save the chat text from the meeting.
     */
    save_chat_text?: boolean;
    /**
     * Add a timestamp to the recording.
     */
    show_timestamp?: boolean;
  };
  /**
   * Account Settings: Schedule Meeting.
   */
  schedule_meeting?: {
    /**
     * Determine how participants can join the audio portion of the meeting.<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - 3rd party audio conference.
     */
    audio_type?: AccountUpdateSettings.audio_type;
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
    jbh_time?: AccountUpdateSettings.jbh_time;
    /**
     * Allow participants to join the meeting before the host arrives.
     */
    join_before_host?: boolean;
    /**
     * Account wide meeting or webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
     */
    meeting_password_requirement?: {
      /**
       *
       * Specify the max length of consecutive characters(abcde...) that can be used in a password.
       * If you set the value of this field to `0`, no restriction will be applied on consecutive characters.
       *
       * If you would like to set this restriction, you can specify a number between 4 and 8 that define the maximum allowed length for consecutive characters in a password.
       *
       * The max allowed length will be `n-1` where `n` refers to the value you provide for this field.  For instance, if you provide `4` as the value, there can only be a maximum of `3` consecutive characters in a password(example: abc1x@8fdh).
       */
      consecutive_characters_length?: AccountUpdateSettings.consecutive_characters_length;
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
       * The minimum length that the meeting or webinar password must have.
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
     * `false`: Indicates that the **"Enable Personal Meeting ID"** setting is [turned off](https://support.zoom.us/hc/en-us/articles/201362843-Personal-meeting-ID-PMI-and-personal-link#h_aa0335c8-3b06-41bc-bc1f-a8b84ef17f2a). If this setting is disabled, meetings that were scheduled with a PMI will be invalid. Scheduled meetings will need to be manually updated.
     * For Zoom Phone only: If a user has been assigned a desk phone, **"Elevate to Zoom Meeting"** on desk phone will be disabled.
     *
     *
     *
     */
    personal_meeting?: boolean;
    /**
     * Require a password for instant meetings. If you use a PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     *
     */
    require_password_for_instant_meetings?: boolean;
    /**
     * Require a password for a meeting held using a Personal Meeting ID (PMI). This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     *
     */
    require_password_for_pmi_meetings?: AccountUpdateSettings.require_password_for_pmi_meetings;
    /**
     * Require a password for meetings which have already been scheduled.
     *
     */
    require_password_for_scheduled_meetings?: boolean;
    /**
     * Require a password when scheduling new meetings. This setting applies for regular meetings that do not use a PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     */
    require_password_for_scheduling_new_meetings?: boolean;
    /**
     * Use a Personal Meeting ID (PMI) when starting an instant meeting.
     */
    use_pmi_for_instant_meetings?: boolean;
    /**
     * Use a Personal Meeting ID (PMI) when scheduling a meeting.
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
  /**
   * Account Settings Update: Telephony.
   */
  telephony?: {
    /**
     * Third party audio conference info.
     */
    audio_conference_info?: string;
    /**
     * Indicates where most of the participants call into or call from during a meeting.
     */
    telephony_regions?: {
      /**
       * The account's selected telephony regions that indicate where most participants call into or call from during a meeting.
       */
      selection_values?: string;
    };
    /**
     * Users can join the meeting using the existing third party audio configuration.
     */
    third_party_audio?: boolean;
  };
  /**
   * Account Settings: TSP.
   */
  tsp?: {
    /**
     * Call Out
     */
    call_out?: boolean;
    /**
     * Call Out Countries/Regions
     */
    call_out_countries?: Array<string>;
    /**
     * Display toll-free numbers
     */
    display_toll_free_numbers?: boolean;
    /**
     * Show international numbers link on the invitation email
     */
    show_international_numbers_link?: boolean;
  };
  /**
   * Account Settings: Zoom Rooms.
   */
  zoom_rooms?: {
    /**
     * Automatic start and stop for scheduled meetings.
     */
    auto_start_stop_scheduled_meetings?: boolean;
    /**
     * Cloud recording for instant meetings.
     */
    cmr_for_instant_meeting?: boolean;
    /**
     * Shift all meetings to private.
     */
    force_private_meeting?: boolean;
    /**
     * Hide host and meeting ID from private meetings.
     */
    hide_host_information?: boolean;
    /**
     * Display meeting list with calendar integration.
     */
    list_meetings_with_calendar?: boolean;
    /**
     * Start AirPlay service manually.
     */
    start_airplay_manually?: boolean;
    /**
     * Automatic direct sharing using an ultrasonic proximity signal.
     */
    ultrasonic?: boolean;
    /**
     * Upcoming meeting alert.
     */
    upcoming_meeting_alert?: boolean;
    /**
     * Weekly system restart.
     */
    weekly_system_restart?: boolean;
    /**
     * Zoom Room post meeting feedback.
     */
    zr_post_meeting_feedback?: boolean;
  };
};

export namespace AccountUpdateSettings {
  /**
   * Settings for 2FA( [two factor authentication](https://support.zoom.us/hc/en-us/articles/360038247071) ). The value can be one of the following:
   * `all`: Two factor authentication will be enabled for all users in the account.<br>
   * `none`: Two factor authentication is disabled.<br>
   * `group`: Two factor authentication will be enabled for users belonging to specific groups. If 2FA is enabled for certain groups, the group IDs of the group(s) will be provided in the `sign_in_with_two_factor_auth_groups` field.<br>
   * `role`: Two factor authentication will be enabled only for users assigned with specific roles in the account. If 2FA is enabled for specific roles, the role IDs will be provided in the
   * `sign_in_with_two_factor_auth_roles` field.
   *
   */
  export enum sign_in_with_two_factor_auth {
    ALL = 'all',
    GROUP = 'group',
    ROLE = 'role',
    NONE = 'none',
  }

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
   * When to play the meeting entry/exit sound notification:
   * * `host` — Only when the host joins or leaves.
   * * `all` — When any participant joins or leaves.
   * * `none` - Disable the entry/exit sound notification.
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
   * The type of user who can share their screen or content during meetings:
   * * `host` — Only hosts can screen share.
   * * `all` — Both hosts and participants can screen share.
   */
  export enum who_can_share_screen {
    HOST = 'host',
    ALL = 'all',
  }

  /**
   * The type of user that can begin sharing their screen when someone else in the meeting is sharing their screen:
   * * `host` — Only hosts can screen share when someone else is sharing.
   * * `all` — Both hosts and participants can screen share when someone else is sharing.
   */
  export enum who_can_share_screen_when_someone_is_sharing {
    HOST = 'host',
    ALL = 'all',
  }

  /**
   * Indicates how many participants can share at the same time. The value can be one of the following:<br>
   * `one`: Only one participant can share at a time
   * .<br>
   * `multiple`: Multiple participants can share simultaneously (dual monitors recommended).
   */
  export enum participants_share_simultaneously {
    MULTIPLE = 'multiple',
    ONE = 'one',
  }

  /**
   * The Dashboard meeting [quality scores and network alerts](https://support.zoom.us/hc/en-us/articles/360061244651) setting:
   * * `0` — Do not enable meeting quality scores and network alerts on the Dashboard.
   * * `1` — Display the meeting quality score and network alerts on the Dashboard.
   * * `2` — Use custom thresholds for quality scores and network alerts.
   * * `3` —Both Use custom thresholds for quality scores and network alerts and Display the meeting quality score and network alerts on the Dashboard.
   */
  export enum meeting_qos_and_mos {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }

  /**
   * Allow connections to different CDNs (content delivery networks) for a better web browsing experience. All users in your organization will use the selected CDN to access static resources:
   * * `none` — Do not use a CDN.
   * * `default` — Use the Amazon CloudFront CDN for users **except** Chinese Mainland users. Chinese Mainland users will use the Wangsu CDN (China).
   * * `wangsu` — Use the Wangsu CDN for all users.
   */
  export enum use_cdn {
    NONE = 'none',
    DEFAULT = 'default',
    WANGSU = 'wangsu',
  }

  /**
   * The retention period for archiving content, in days.
   */
  export enum archive_retention {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
    '_8' = 8,
    '_9' = 9,
    '_10' = 10,
    '_11' = 11,
    '_12' = 12,
    '_13' = 13,
    '_14' = 14,
    '_15' = 15,
    '_16' = 16,
    '_17' = 17,
    '_18' = 18,
    '_19' = 19,
    '_20' = 20,
    '_21' = 21,
    '_22' = 22,
    '_23' = 23,
    '_24' = 24,
    '_25' = 25,
    '_26' = 26,
    '_27' = 27,
    '_28' = 28,
    '_29' = 29,
    '_30' = 30,
  }

  /**
   * Perform the action when meetings or webinars cannot be archived.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
   */
  export enum action_when_archive_failed {
    '_1' = 1,
    '_2' = 2,
  }

  /**
   * Show notification when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
   */
  export enum notification_when_archiving_starts {
    PARTICIPANTS = 'participants',
    GUEST = 'guest',
  }

  /**
   * Play voice prompt when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
   */
  export enum play_voice_prompt_when_archiving_starts {
    PARTICIPANTS = 'participants',
    GUEST = 'guest',
    NONE = 'none',
  }

  /**
   * Archive types:
   *
   * * `1`: Only meetings are archived.<br>
   * * `2`: Only webinars are archived.<br>
   * * `3`: Both meetings and webinars are archived.
   */
  export enum type {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }

  /**
   * When the `auto_delete_cmr` value is `true`, this value is the number of days before the auto-deletion of cloud recordings:
   * * `30` — 30 days.
   * * `60` — 60 days.
   * * `90` — 90 days.
   * * `120` — 120 days.
   */
  export enum auto_delete_cmr_days {
    '_30' = 30,
    '_60' = 60,
    '_90' = 90,
    '_120' = 120,
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
   * If you would like to set this restriction, you can specify a number between 4 and 8 that define the maximum allowed length for consecutive characters in a password.
   *
   * The max allowed length will be `n-1` where `n` refers to the value you provide for this field.  For instance, if you provide `4` as the value, there can only be a maximum of `3` consecutive characters in a password(example: abc1x@8fdh).
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
   * Require a password for a meeting held using a Personal Meeting ID (PMI). This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
   *
   */
  export enum require_password_for_pmi_meetings {
    JBH_ONLY = 'jbh_only',
    ALL = 'all',
    NONE = 'none',
  }
}
