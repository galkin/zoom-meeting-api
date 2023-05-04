/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserSettingsUpdate = {
  email_notification?: {
    /**
     * When an alternative host is set or removed from a meeting.
     */
    alternative_host_reminder?: boolean;
    /**
     * When a meeting is cancelled.
     */
    cancel_meeting_reminder?: boolean;
    /**
     * Whether to notify the host when a cloud recording is available.
     */
    cloud_recording_available_reminder?: boolean;
    /**
     * When attendees join meeting before host.
     */
    jbh_reminder?: boolean;
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
  feature?: {
    /**
     * The user's assigned [Concurrent Meeting](https://support.zoom.us/hc/en-us/articles/206122046) type:
     * * `Basic`
     * * `Plus`
     * * `None`
     *
     * **Note:** This feature requires a Concurrent Meeting Basic or Plus plan subscription.
     */
    concurrent_meeting?: UserSettingsUpdate.concurrent_meeting;
    /**
     * Enable [large meeting](https://support.zoom.us/hc/en-us/articles/201362823-What-is-a-Large-Meeting-) feature for the user.
     */
    large_meeting?: boolean;
    /**
     * Set the meeting capacity for the user if the user has **Large meeting** feature enabled. The value for the field can be either 500 or 1000.
     */
    large_meeting_capacity?: number;
    /**
     * Set a user's meeting capacity. User's meeting capacity denotes the maximum number of participants that can join a meeting scheduled by the user.
     */
    meeting_capacity?: number;
    /**
     * Enable Webinar feature for the user.
     */
    webinar?: boolean;
    /**
     * The user's webinar capacity. This only applies to users with the [**Webinar**](https://support.zoom.us/hc/en-us/articles/200917029-Getting-started-with-webinar) feature enabled:
     * * `100`
     * * `500`
     * * `501`
     * * `1000`
     * * `1001`
     * * `3000`
     * * `5000`
     * * `10000`
     */
    webinar_capacity?: UserSettingsUpdate.webinar_capacity;
    /**
     * Whether to enable the Zoom Events feature for the user.
     */
    zoom_events?: boolean;
    /**
     * The user's Zoom Events plan capacity: `500`, `1000`, `3000`, `5000`, `10000`, `20000`, `30000`, or `50000`.
     */
    zoom_events_capacity?: UserSettingsUpdate.zoom_events_capacity;
    /**
     * Zoom phone feature.
     */
    zoom_phone?: boolean;
    /**
     * Whether the user has a Zoom IQ license. For information about a Zoom IQ license, contact [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).
     */
    zoom_iq_for_sales?: boolean;
    /**
     * Whether the user has a Zoom Whiteboard license.
     */
    zoom_whiteboard?: boolean;
    /**
     * Whether the user has a Zoom Whiteboard Plus license.
     */
    zoom_whiteboard_plus?: boolean;
    /**
     * Whether the user has a Zoom Translated Captions license.
     */
    zoom_translated_captions?: boolean;
    /**
     * Whether the user has a Zoom Customer Managed Key license.
     */
    zoom_customer_managed_key?: boolean;
  };
  in_meeting?: {
    /**
     * Whether the host can enable [**Focus Mode**](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) when scheduling a meeting. This value defaults to `null`.
     */
    allow_host_to_enable_focus_mode?: boolean;
    /**
     * If the value of this field is set to `true`,  allow users to delete messages in the in-meeting chat.
     *
     */
    allow_users_to_delete_messages_in_meeting_chat?: boolean;
    /**
     * Allow livestreaming.
     */
    allow_live_streaming?: boolean;
    /**
     * Whether to display a thumbs up or thumbs down feedback survey at the end of each meeting.
     */
    post_meeting_feedback?: boolean;
    /**
     * Whether to enable the [**Zoom Whiteboard**](https://support.zoom.us/hc/en-us/articles/4410916881421) feature.
     */
    whiteboard?: boolean;
    /**
     * Who participants can chat with:
     * * `1` — The participant cannot use chat.
     * * `2` — The participant can chat with the host and co-hosts only.
     * * `3` — The participant can chat with other participants publicly.
     * * `4` - The participant can chat with other participants publicly and privately.
     *
     * **Note:** This setting is only available with client versions 5.7.3 and above.
     */
    allow_participants_chat_with?: UserSettingsUpdate.allow_participants_chat_with;
    /**
     * How participants can save meeting chats:
     * * `1` — Participants cannot save meeting chats.
     * * `2` — Participants can only save host and co-host meeting chats.
     * * `3` — Participants can save all meeting chats.
     */
    allow_users_save_chats?: UserSettingsUpdate.allow_users_save_chats;
    /**
     * Allow meeting participants to use the [annotation tools](https://support.zoom.us/hc/en-us/articles/115005706806). This value defaults to `false`.
     */
    annotation?: boolean;
    /**
     * Allow the host to put an attendee on hold. This value defaults to `false`. **This field has been deprecated and is no longer supported.**
     */
    attendee_on_hold?: boolean;
    /**
     * Whether the [**Focus Mode**](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) feature is enabled. When enabled, this feature only displays the host and co-hosts' video and profile pictures during a meeting.
     *
     * This value defaults to `false`.
     */
    attention_mode_focus_mode?: boolean;
    /**
     * Automatically save all in-meeting chats. This value defaults to `false`.
     */
    auto_saving_chat?: boolean;
    /**
     * Allow the meeting host to split meeting participants into separate breakout rooms.
     */
    breakout_room?: boolean;
    /**
     * Allow the host to assign participants to breakout rooms when scheduling. This feature is **only** available in version 4.5.0 or higher.
     */
    breakout_room_schedule?: boolean;
    /**
     * Enable chat during meeting for all participants. This value defaults to `false`.
     */
    chat?: boolean;
    /**
     * Enable closed captions. This value defaults to `false`.
     */
    closed_caption?: boolean;
    /**
     * Information about the user's closed captioning settings.
     */
    closed_captioning?: {
      /**
       * Allow a live transcription service to transcribe meetings.
       */
      auto_transcribing?: boolean;
      /**
       * Allow the host to type closed captions or assign a participant or 3rd-party service to provide closed captioning.
       */
      enable?: boolean;
      /**
       * Allow participants to save closed captions or transcripts.
       */
      save_caption?: boolean;
      /**
       * Allow the use of an API token to integrate with 3rd-party closed captioning services.
       */
      third_party_captioning_service?: boolean;
      /**
       * Allow the viewing of full transcripts in the in-meeting side panel.
       */
      view_full_transcript?: boolean;
    };
    /**
     * Allow the host to add co-hosts. This value defaults to `false`.
     */
    co_host?: boolean;
    /**
     * Use custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-meetings-webinars):
     * * `true` — Users can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting real-time meeting traffic. The data center regions can be provided in the `data_center_regions` field.
     * * `false` — Only use the default data center regions.
     */
    custom_data_center_regions?: boolean;
    /**
     * Allow custom livestreaming.
     */
    custom_live_streaming_service?: boolean;
    /**
     * The custom livestreaming service instructions.
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
     * Enable the **Disable desktop screen sharing for meetings you host** setting.
     */
    disable_screen_sharing_for_host_meetings?: boolean;
    /**
     * Enable the **Disable screen sharing when guests are in the meeting** setting.
     */
    disable_screen_sharing_for_in_meeting_guests?: boolean;
    /**
     * Require [AES encryption](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) for meetings.
     */
    e2e_encryption?: boolean;
    /**
     * When to play the meeting entry/exit sound notification:
     * * `host` — Only when the host joins or leaves.
     * * `all` — When any participant joins or leaves.
     * * `none` - Disable the entry/exit sound notification.
     *
     * This value defaults to `all`.
     */
    entry_exit_chime?: UserSettingsUpdate.entry_exit_chime;
    /**
     * Allow another user to take control of the user's camera. This value defaults to `false`.
     */
    far_end_camera_control?: boolean;
    /**
     * Enable the [**Feedback to Zoom**](https://support.zoom.us/hc/en-us/articles/115005838023-Feedback-to-Zoom) setting. This value defaults to `false`.
     */
    feedback?: boolean;
    /**
     * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for the user or not.
     */
    file_transfer?: boolean;
    /**
     * Enable group HD video. This value defaults to `false`.
     */
    group_hd?: boolean;
    /**
     * Allow participants to join a meeting directly from their desktop browser. Note that the meeting experience from the desktop browser is limited.
     */
    join_from_desktop?: boolean;
    /**
     * Allow participants to join a meeting directly from their mobile browser. Note that the meeting experience from the mobile browser is limited.
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
       * Allow hosts to assign participants as interpreters who can interpret one language into another in real-time.
       */
      enable?: boolean;
    };
    /**
     * Allow Facebook livestreaming.
     */
    live_streaming_facebook?: boolean;
    /**
     * Allow YouTube livestreaming.
     */
    live_streaming_youtube?: boolean;
    /**
     * Information about manual captioning settings.
     */
    manual_captioning?: {
      /**
       * Allow the host to manually caption or let the host assign a participant to provide manual captioning.
       */
      allow_to_type?: boolean;
      /**
       * Enable Zoom's [live transcription feature](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription#h_01FHGGHYJ4457H4GSZY0KM3NSB).
       */
      auto_generated_captions?: boolean;
      /**
       * Enable the viewing of full transcripts in the in-meeting side panel.
       */
      full_transcript?: boolean;
      /**
       * [Enable manual closed captioning](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription).
       */
      manual_captions?: boolean;
      /**
       * Allow participants to [save closed captions or transcripts](https://support.zoom.us/hc/en-us/articles/360060958752).
       *
       * **Note:** If the `full_transcript` field is set to `false`, participants **cannot** save captions.
       */
      save_captions?: boolean;
      /**
       * Allow the use of an API token to integrate with a [3rd-party device](https://support.zoom.us/hc/en-us/articles/115002212983) to provide closed captioning.
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
    meeting_reactions_emojis?: UserSettingsUpdate.meeting_reactions_emojis;
    /**
     * Whether to allow host and panelist to use audible clap.
     */
    allow_host_panelists_to_use_audible_clap?: boolean;
    /**
     * Set this field to true to use [webinar reactions](https://support.zoom.us/hc/en-us/articles/4803536268429).
     */
    webinar_reactions?: boolean;
    /**
     * Allow the host to present a survey to participants once a meeting has ended. This feature is only available in version 5.7.3 or higher.
     */
    meeting_survey?: boolean;
    /**
     * Enable the [**Non-verbal feedback**](https://support.zoom.us/hc/en-us/articles/115001286183-Nonverbal-feedback-and-meeting-reactions-) setting.  This value defaults to `false`.
     */
    non_verbal_feedback?: boolean;
    /**
     * Add polls to the meeting controls. This value defaults to `false`.
     */
    polling?: boolean;
    /**
     * [Enable private chat](https://support.zoom.us/hc/en-us/articles/360060835932-Enabling-and-disabling-private-chat) between participants during meetings. This value defaults to `false`.
     */
    private_chat?: boolean;
    /**
     * Let the user record and play their own voice.
     */
    record_play_voice?: boolean;
    /**
     * Enable the [**Remote control**](https://support.zoom.us/hc/en-us/articles/201362673-Requesting-or-giving-remote-control) setting.  This value defaults to `false`.
     */
    remote_control?: boolean;
    /**
     * Enable the [**Remote support**](https://support.zoom.us/hc/en-us/articles/360060951012-Enabling-remote-support) setting. This value defaults to `false`.
     */
    remote_support?: boolean;
    /**
     * Indicates whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option has been enabled for the user or not.
     */
    request_permission_to_unmute?: boolean;
    /**
     * Allow host and participants to share their screen or content during meetings
     *
     */
    screen_sharing?: boolean;
    /**
     * Allow the use of shared dual cameras. This value defaults to `false`. **This field is deprecated.**
     * @deprecated
     */
    share_dual_camera?: boolean;
    /**
     * Allow participants to join a meeting directly from their browser and bypass the Zoom application download process. This is useful for participants who cannot download, install, or run applications. Note that the meeting experience from the browser is limited.
     */
    show_a_join_from_your_browser_link?: boolean;
    /**
     * Always display the [in-meeting controls](https://support.zoom.us/hc/en-us/articles/360021921032-Zoom-Room-meeting-controls-and-settings#h_01EQCC03TCPRC72VKXZ7W47FDX).
     */
    show_meeting_control_toolbar?: boolean;
    /**
     * Whether the person sharing during a presentation can allow others to control the slide presentation. This feature is only available in version 5.8.3 or higher.
     */
    slide_control?: boolean;
    /**
     * Enable Virtual Backgrounds. This value defaults to `false`.
     */
    virtual_background?: boolean;
    /**
     * The user's Virtual Background settings.
     */
    virtual_background_settings?: {
      /**
       * Allow the user to upload custom Virtual Backgrounds.
       */
      allow_upload_custom?: boolean;
      /**
       * Allow the use of videos for Virtual Backgrounds.
       */
      allow_videos?: boolean;
      /**
       * Enable Virtual Backgrounds.
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
     * Enable the [**Waiting Room**](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) feature. This value defaults to `false`.
     */
    waiting_room?: boolean;
    /**
     * Information about the user's webinar chat settings.
     */
    webinar_chat?: {
      /**
       * Allow webinar attendees to chat with:
       * * `1` — No one.
       * * `2` — Host and all panelists.
       * * `3` — Everyone.
       */
      allow_attendees_chat_with?: UserSettingsUpdate.allow_attendees_chat_with;
      /**
       * Automatically save chat messages to a local file on the host's computer when the webinar ends.
       */
      allow_auto_save_local_chat_file?: boolean;
      /**
       * Who webinar panelists can chat with:
       * * `1` — Host and all panelists.
       * * `2` — Everyone.
       */
      allow_panelists_chat_with?: UserSettingsUpdate.allow_panelists_chat_with;
      /**
       * Allow webinar panelists to send direct messages to other panelists.
       */
      allow_panelists_send_direct_message?: boolean;
      /**
       * How webinar attendees can save chats:
       * * `0` — Attendees cannot save chats.
       * * `1` — Attendees can only save host and panelist chats.
       * * `2` — Attendees can save all chats.
       */
      allow_users_save_chats?: UserSettingsUpdate.allow_users_save_chats;
      /**
       * By default, allow webinar attendees to chat with:
       * * `1` — Host and all panelists.
       * * `2` — Everyone.
       */
      default_attendees_chat_with?: UserSettingsUpdate.default_attendees_chat_with;
      /**
       * Allow webinar participants to send chat messages.
       */
      enable?: boolean;
    };
    webinar_live_streaming?: {
      /**
       * The specific instructions to allow your account's meeting hosts to configure a custom livestream.
       */
      custom_service_instructions?: string;
      /**
       * Whether webinar livestreaming is enabled.
       */
      enable?: boolean;
      /**
       * Notify users to watch the livestream. This does not apply to custom RTMP (real-time messaging protocol).
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
     * Information about the account's meeting polling settings.
     */
    meeting_polling?: {
      /**
       * Whether to allow the host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. The host can also set the correct answers for quizzes they create.
       */
      advanced_polls?: boolean;
      /**
       * Whether to allow alternative hosts to add or edit polls and quizzes.
       */
      allow_alternative_host_to_add_edit?: boolean;
      /**
       * Whether to require answers to be anonymous.
       */
      require_answers_to_be_anonymous?: boolean;
      /**
       * Whether to allow host to upload an image for each question.
       */
      allow_host_to_upload_image?: boolean;
      /**
       * Whether to allow the host to add polls before or during a meeting.
       */
      enable?: boolean;
    };
    /**
     * Information about the user's webinar polling settings.
     */
    webinar_polling?: {
      /**
       * Whether to allow the host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. The host can also set the correct answers for quizzes they create.
       */
      advanced_polls?: boolean;
      /**
       * Whether to allow alternative hosts to add or edit polls and quizzes.
       */
      allow_alternative_host_to_add_edit?: boolean;
      /**
       * Whether to require answers to be anonymous.
       */
      require_answers_to_be_anonymous?: boolean;
      /**
       * Whether to allow host to upload an image for each question.
       */
      allow_host_to_upload_image?: boolean;
      /**
       * Allow the host to add polls before or during a webinar.
       */
      enable?: boolean;
    };
    /**
     * Allow the host to present surveys to attendees once a webinar has ended.
     */
    webinar_survey?: boolean;
    /**
     * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
     * `host`: Only host can share the screen.<br>
     * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
     *
     */
    who_can_share_screen?: UserSettingsUpdate.who_can_share_screen;
    /**
     * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
     * `host`: Only a host can share the screen when someone else is sharing.<br>
     * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
     *
     */
    who_can_share_screen_when_someone_is_sharing?: UserSettingsUpdate.who_can_share_screen_when_someone_is_sharing;
    /**
     * Indicates how many participants can share at the same time. The value can be one of the following:<br>
     * `one`: Only one participant can share at a time
     * .<br>
     * `multiple`: Multiple participants can share simultaneously (dual monitors recommended).
     */
    participants_share_simultaneously?: UserSettingsUpdate.participants_share_simultaneously;
    /**
     * Allow Workplace by Facebook livestreaming.
     */
    workplace_by_facebook?: boolean;
    /**
     * Allow the user to view and add contacts to the [**Auto-answer group in chat**](https://support.zoom.us/hc/en-us/articles/203736135-Auto-answering-invitations-to-meetings) feature. Calls from members of the **Auto Answer Group** will be automatically answered the user.
     */
    auto_answer?: boolean;
    /**
     * Enable the [**Show Zoom windows during screen share**](https://support.zoom.us/hc/en-us/articles/360061383571-Showing-Zoom-windows-during-screen-share) feature.
     */
    allow_show_zoom_windows?: boolean;
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
  recording?: {
    /**
     * Ask host to confirm the disclaimer.
     */
    ask_host_to_confirm_disclaimer?: boolean;
    /**
     * This field can be used if `recording_disclaimer` is set to true. This field indicates whether or not you would like to ask participants for consent when a recording starts. The value can be one of the following:<br>
     * * `true`: Ask participants for consent when a recording starts. <br>
     * * `false`: Do not ask participants for consent when a recording starts.
     */
    ask_participants_to_consent_disclaimer?: boolean;
    /**
     * Auto delete cloud recordings.
     */
    auto_delete_cmr?: boolean;
    /**
     * When the `auto_delete_cmr` value is `true`, this value is the number of days before the auto-deletion of cloud recordings:
     * * `30` — 30 days.
     * * `60` — 60 days.
     * * `90` — 90 days.
     * * `120` — 120 days.
     */
    auto_delete_cmr_days?: UserSettingsUpdate.auto_delete_cmr_days;
    /**
     * The account's [**Record active speaker, gallery view and shared screen separately**](https://support.zoom.us/hc/en-us/articles/360060316092-Changing-basic-and-advanced-cloud-recording-settings#h_01F4CYJTCTXNS2MXH00W9EFG6R) settings.
     */
    record_files_separately?: {
      /**
       * Record the active speaker only.
       */
      active_speaker?: boolean;
      /**
       * Record the gallery view only.
       */
      gallery_view?: boolean;
      /**
       * Record the shared screen only.
       */
      shared_screen?: boolean;
    };
    /**
     * Display participants' names in the recording.
     */
    display_participant_name?: boolean;
    /**
     * Record thumbnails of the presenter when they are sharing their screen.
     */
    recording_thumbnails?: boolean;
    /**
     * Optimize recordings for a 3rd party video editor. This may increase the file size and the time it takes to generate recording files.
     */
    optimize_recording_for_3rd_party_video_editor?: boolean;
    /**
     * Enable the [recording highlights](https://support.zoom.us/hc/en-us/articles/360060802432) feature.
     * @deprecated
     */
    recording_highlight?: boolean;
    /**
     * Save panelist chat to the recording. This setting saves messages sent by panelists during a webinar to either all panelists or all panelists and attendees to the recording.
     */
    save_panelist_chat?: boolean;
    /**
     * Save poll results shared during the meeting or webinar. This also includes poll results shared during the meeting or webinar.
     */
    save_poll_results?: boolean;
    /**
     * Save [closed captions](https://support.zoom.us/hc/en-us/articles/207279736) as a VTT (Video Track Text) file.
     */
    save_close_caption?: boolean;
    /**
     * Automatic recording:<br>`local` - Record on local.<br>`cloud` - Record on cloud.<br>`none` - Disabled.
     */
    auto_recording?: UserSettingsUpdate.auto_recording;
    /**
     * Cloud recording.
     */
    cloud_recording?: boolean;
    /**
     * Host can pause or stop the auto recording in the cloud.
     */
    host_pause_stop_recording?: boolean;
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
     * Local recording.
     */
    local_recording?: boolean;
    /**
     * Record one audio file for all participants.
     */
    record_audio_file?: boolean;
    /**
     * Record the gallery view.
     */
    record_gallery_view?: boolean;
    /**
     * Record the active speaker view.
     */
    record_speaker_view?: boolean;
    /**
     * Audio transcript.
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
     * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
     */
    recording_password_requirement?: {
      /**
       * Passcode must contain at least one alphabetical letter (a, b, c..).
       */
      have_letter?: boolean;
      /**
       * Passcode must contain at least one number(1, 2, 3..).
       */
      have_number?: boolean;
      /**
       * Passcode must contain at least one special character(!, @, #..).
       */
      have_special_character?: boolean;
      /**
       * Minimum required length for the passcode.
       */
      length?: number;
      /**
       * Passcode must contain only numeric characters.
       */
      only_allow_numeric?: boolean;
    };
    /**
     * Save chat text from the meeting.
     */
    save_chat_text?: boolean;
    /**
     * Show timestamp on video.
     */
    show_timestamp?: boolean;
  };
  schedule_meeting?: {
    /**
     * Determine how participants can join the audio portion of the meeting:<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - Third party audio conference.
     */
    audio_type?: UserSettingsUpdate.audio_type;
    /**
     * Passcode for already scheduled meetings
     *
     */
    default_password_for_scheduled_meetings?: string;
    /**
     * Encrypt the meeting passcode and include in the join meeting link to allow participants to join with just one click without having to enter the passcode.
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
     * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
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
      consecutive_characters_length?: UserSettingsUpdate.consecutive_characters_length;
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
       * The minimum length that the meeting or webinar passcode must have.
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
     * `false`: Indicates that the **"Enable Personal Meeting ID"** setting is [turned off](https://support.zoom.us/hc/en-us/articles/201362843-Personal-meeting-ID-PMI-and-personal-link#h_aa0335c8-3b06-41bc-bc1f-a8b84ef17f2a). If this setting is disabled (`false`), meetings that were scheduled with a PMI will be invalid. Scheduled meetings must be manually updated.
     * For Zoom Phone only: If a user has been assigned a desk phone, **"Elevate to Zoom Meeting"** on desk phone will be disabled.
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
     * Require a passcode for instant meetings. If you use a PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     *
     */
    require_password_for_instant_meetings?: boolean;
    /**
     * Require a passcode for Personal Meeting ID (PMI). This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
     *
     */
    require_password_for_pmi_meetings?: UserSettingsUpdate.require_password_for_pmi_meetings;
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
  telephony?: {
    /**
     * Third party audio conference info.
     */
    audio_conference_info?: string;
    /**
     * Show the international numbers link on the invitation email.
     */
    show_international_numbers_link?: boolean;
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
     * Third party audio conference.
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
    call_out_countries?: Array<any>;
    /**
     * Show the international numbers link on the invitation email.
     */
    show_international_numbers_link?: boolean;
  };
};

export namespace UserSettingsUpdate {
  /**
   * The user's assigned [Concurrent Meeting](https://support.zoom.us/hc/en-us/articles/206122046) type:
   * * `Basic`
   * * `Plus`
   * * `None`
   *
   * **Note:** This feature requires a Concurrent Meeting Basic or Plus plan subscription.
   */
  export enum concurrent_meeting {
    BASIC = 'Basic',
    PLUS = 'Plus',
    NONE = 'None',
  }

  /**
   * The user's webinar capacity. This only applies to users with the [**Webinar**](https://support.zoom.us/hc/en-us/articles/200917029-Getting-started-with-webinar) feature enabled:
   * * `100`
   * * `500`
   * * `501`
   * * `1000`
   * * `1001`
   * * `3000`
   * * `5000`
   * * `10000`
   */
  export enum webinar_capacity {
    '_100' = 100,
    '_500' = 500,
    '_501' = 501,
    '_1000' = 1000,
    '_1001' = 1001,
    '_3000' = 3000,
    '_5000' = 5000,
    '_10000' = 10000,
  }

  /**
   * The user's Zoom Events plan capacity: `500`, `1000`, `3000`, `5000`, `10000`, `20000`, `30000`, or `50000`.
   */
  export enum zoom_events_capacity {
    '_500' = 500,
    '_1000' = 1000,
    '_3000' = 3000,
    '_5000' = 5000,
    '_10000' = 10000,
    '_20000' = 20000,
    '_30000' = 30000,
    '_50000' = 50000,
  }

  /**
   * Who participants can chat with:
   * * `1` — The participant cannot use chat.
   * * `2` — The participant can chat with the host and co-hosts only.
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
   * How participants can save meeting chats:
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
   *
   * This value defaults to `all`.
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
   * Who webinar panelists can chat with:
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
   * `multiple`: Multiple participants can share simultaneously (dual monitors recommended).
   */
  export enum participants_share_simultaneously {
    MULTIPLE = 'multiple',
    ONE = 'one',
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
   * Automatic recording:<br>`local` - Record on local.<br>`cloud` - Record on cloud.<br>`none` - Disabled.
   */
  export enum auto_recording {
    LOCAL = 'local',
    CLOUD = 'cloud',
    NONE = 'none',
  }

  /**
   * Determine how participants can join the audio portion of the meeting:<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - Third party audio conference.
   */
  export enum audio_type {
    BOTH = 'both',
    TELEPHONY = 'telephony',
    VOIP = 'voip',
    THIRD_PARTY = 'thirdParty',
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
   * Require a passcode for Personal Meeting ID (PMI). This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
   *
   */
  export enum require_password_for_pmi_meetings {
    JBH_ONLY = 'jbh_only',
    ALL = 'all',
    NONE = 'none',
  }
}
