/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get account's managed domains
   * Use this API to get an account's [managed domains](https://support.zoom.us/hc/en-us/articles/203395207). To get the master account's managed domains, pass the `me` value for the `accountId` path parameter.
   *
   * **Scopes:** `account:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or a higher paid account with the Master account option enabled.
   * @returns any **HTTP Status Code:** `200` <br>
   * Account's managed domains returned.
   *
   * **Error Code:** `200` <br>
   * Only available for paid accounts.
   * @throws ApiError
   */
  public accountManagedDomain({
    accountId,
  }: {
    /**
     * The account's ID. For the Master account, pass the `me` value for this parameter.
     */
    accountId: string;
  }): CancelablePromise<{
    /**
     * Information about the managed domains.
     */
    domains?: Array<{
      /**
       * The domain's name.
       */
      domain?: string;
      /**
       * The domain's status.
       */
      status?: string;
    }>;
    /**
     * The total number of records returned.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/accounts/{accountId}/managed_domains',
      path: {
        accountId: accountId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`2001\` <br>
        Account does not exist: $accountId`,
      },
    });
  }

  /**
   * Get account settings
   * Use this API to get an account's settings. To get the Master account's settings, use the `me` value for the `accountId` path parameter.
   *
   * **Scopes:** `account:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * The account must be a paid account.
   * @returns any **HTTP Status Code:** `200` <br>
   * Account settings returned.
   *
   * **Error Code:** `200` <br>
   * Only available for paid accounts.
   * @throws ApiError
   */
  public accountSettings({
    accountId,
    option,
    customQueryFields,
  }: {
    /**
     * The account's ID. For the Master account, pass the `me` value for this parameter.
     */
    accountId: string;
    /**
     * Optional query parameters:
     * * `meeting_authentication` — Use this query parameter to view the [meeting authentication settings](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) applied to the user's account.
     * * `recording_authentication` — Use this query parameter to view the [recording authentication settings](https://support.zoom.us/hc/en-us/articles/360037756671-Authentication-Profiles-for-Cloud-Recordings) applied to the user's account.
     * * `security` — Use this query parameter to view the account's security settings. For example, password requirements for user login or two-factor authentication.
     * * `meeting_security` — Use this query parameter to view the meeting security settings applied to the user's account.
     */
    option?: 'meeting_authentication' | 'recording_authentication' | 'meeting_security' | 'security';
    /**
     * The name of the field by which to filter the response. For example, if you provide the `host_video` value for this field, you will get a response similar to the following:
     *
     * `{ "schedule_meeting": { "host_video": false } }`
     *
     * To use multiple values, comma-separate each value. For example: `host_video,participant_video`
     */
    customQueryFields?: string;
  }): CancelablePromise<
    | {
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
          sign_in_with_two_factor_auth?: 'all' | 'group' | 'role' | 'none';
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
         * Account Settings: In Meeting.
         */
        in_meeting?: {
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
          allow_participants_chat_with?: 1 | 2 | 3 | 4;
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
          allow_users_save_chats?: 1 | 2 | 3;
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
          entry_exit_chime?: 'host' | 'all' | 'none';
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
          meeting_reactions_emojis?: 'all' | 'selected';
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
            allow_attendees_chat_with?: 1 | 2 | 3;
            /**
             * Whether to automatically save chat messages to a local file on the host's computer when the webinar ends.
             */
            allow_auto_save_local_chat_file?: boolean;
            /**
             * Allow webinar panelists to chat with:
             * * `1` — Host and all panelists.
             * * `2` — Everyone.
             */
            allow_panelists_chat_with?: 1 | 2;
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
            allow_users_save_chats?: 0 | 1 | 2;
            /**
             * By default, allow webinar attendees to chat with:
             * * `1` — Host and all panelists.
             * * `2` — Everyone.
             */
            default_attendees_chat_with?: 1 | 2;
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
          who_can_share_screen?: 'host' | 'all';
          /**
           * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
           * `host`: Only a host can share the screen when someone else is sharing.<br>
           * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
           *
           */
          who_can_share_screen_when_someone_is_sharing?: 'host' | 'all';
          /**
           * Indicates how many participants can share at the same time. The value can be one of the following:<br>
           * `one`: Only one participant can share at a time
           * .<br>
           * `multiple`: Multiple participants can share simultaneously (dual monitors recommended)
           * . For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
           *
           */
          participants_share_simultaneously?: 'multiple' | 'one';
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
          meeting_qos_and_mos?: 0 | 1 | 2 | 3;
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
          use_cdn?: 'none' | 'default' | 'wangsu';
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
              archive_retention?:
                | 1
                | 2
                | 3
                | 4
                | 5
                | 6
                | 7
                | 8
                | 9
                | 10
                | 11
                | 12
                | 13
                | 14
                | 15
                | 16
                | 17
                | 18
                | 19
                | 20
                | 21
                | 22
                | 23
                | 24
                | 25
                | 26
                | 27
                | 28
                | 29
                | 30;
              /**
               * Perform the action when meetings or webinars cannot be archived.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
               */
              action_when_archive_failed?: 1 | 2;
              /**
               * Show notification when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
               */
              notification_when_archiving_starts?: 'participants' | 'guest';
              /**
               * Play voice prompt when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
               */
              play_voice_prompt_when_archiving_starts?: 'participants' | 'guest' | 'none';
            };
            /**
             * Archive types:
             *
             * * `1`: Only meetings are archived.<br>
             * * `2`: Only webinars are archived.<br>
             * * `3`: Both meetings and webinars are archived.
             */
            type?: 1 | 2 | 3;
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
          auto_delete_cmr_days?: 30 | 60 | 90 | 120;
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
          auto_recording?: 'local' | 'cloud' | 'none';
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
          audio_type?: 'both' | 'telephony' | 'voip' | 'thirdParty';
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
          jbh_time?: 0 | 5 | 10 | 15;
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
            consecutive_characters_length?: 0 | 4 | 5 | 6 | 7 | 8;
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
          require_password_for_pmi_meetings?: 'jbh_only' | 'all' | 'none';
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
        /**
         * Account Settings: Telephony.
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
             * Telephony region options provided by Zoom to select from.
             */
            allowed_values?: Array<string>;
            /**
             * The account's selected telephony regions that indicate where most participants call in to or call from during a meeting.
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
      }
    | (
        | {
            /**
             * Whether to enable the [**Allow authentication exception**](https://support.zoom.us/hc/en-us/articles/360037117472#h_01F13A9N1FQFNVESC9C21NRHXY) setting. This lets hosts invite users who can bypass authentication.
             */
            allow_authentication_exception?: boolean;
            /**
             * Meeting Authentication Options
             */
            authentication_options?: Array<{
              /**
               * Authentication default option
               */
              default_option?: boolean;
              /**
               * Authentication domains.
               */
              domains?: string;
              /**
               * Authentication id
               */
              id?: string;
              /**
               * Authentication name
               */
              name?: string;
              /**
               *  Authentication type. Specify one of the following authentication types for the authentication profile:<br>
               * * `enforce_login`: This option allows any users to join the meeting or webinar, as long as they are signed into their Zoom account.
               * * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can join the meeting or webinar. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.<br>
               * * `enforce_login_with_same_account`: This option allows users to join the meeting or webinar with the same Zoom account.
               */
              type?: 'enforce_login' | 'enforce_login_with_same_account' | 'enforce_login_with_domains';
              /**
               * Authentication visible
               */
              visible?: boolean;
            }>;
            /**
             * Only authenticated users can join meetings
             */
            meeting_authentication?: boolean;
          }
        | {
            authentication_options?: Array<{
              /**
               * Authentication default option
               */
              default_option?: boolean;
              /**
               * Authentication domains.
               */
              domains?: string;
              /**
               * Authentication id
               */
              id?: string;
              /**
               * Authentication name
               */
              name?: string;
              /**
               * Authentication type
               */
              type?: 'internally' | 'enforce_login' | 'enforce_login_with_domains';
              /**
               * Authentication visible
               */
              visible?: boolean;
            }>;
            /**
             * Only authenticated users can view cloud recordings
             */
            recording_authentication?: boolean;
          }
      )
    | {
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
        sign_in_with_two_factor_auth?: 'all' | 'group' | 'role' | 'none';
        /**
         * This field contains group IDs of groups that have 2FA enabled. This field is only returned if the value of `sign_in_with_two_factor_auth` is `group`
         */
        sign_in_with_two_factor_auth_groups?: Array<string>;
        /**
         * This field contains role IDs of roles that have 2FA enabled. This field is only returned if the value of `sign_in_with_two_factor_auth` is `role`.
         */
        sign_in_with_two_factor_auth_roles?: Array<string>;
      }
    | {
        meeting_security?: {
          /**
           * Whether all meetings must be secured with at least one security option.
           *
           * This setting can only be disabled by Enterprise, ISV, Business (with more than 100 licenses), and Education accounts.
           */
          auto_security?: boolean;
          /**
           * Whether users in specific domains are blocked from joining meetings and webinars.
           */
          block_user_domain?: boolean;
          /**
           * The blocked domains.
           */
          block_user_domain_list?: Array<string>;
          /**
           * Information about the **Chat Etiquette Tool**.
           */
          chat_etiquette_tool?: {
            /**
             * Whether to enable the **Chat Etiquette Tool**.
             */
            enable?: boolean;
            /**
             * Information about the defined **Chat Etiquette Tool** policies.
             */
            policies?: Array<{
              /**
               * The policy's description.
               */
              description?: string;
              /**
               * The policy ID.
               */
              id?: string;
              /**
               * Whether the policy is locked by an account-level user. When it is locked, users cannot update the policy.
               */
              is_locked?: boolean;
              /**
               * A list of defined rule keywords.
               */
              keywords?: Array<string>;
              /**
               * The policy name.
               */
              name?: string;
              /**
               * The regular expression to match to the content of chat messages.
               */
              regular_expression?: string;
              /**
               * The policy's current status:
               * * `activated` — Activated.
               * * `deactivated` — Deactivated.
               */
              status?: 'activated' | 'deactivated';
              /**
               * The policy's trigger action:
               * * `1` — Ask the user to confirm before they send the message.
               * * `2` — Block the user's message.
               */
              trigger_action?: 1 | 2;
            }>;
            /**
             * The read-only maximum number of **Chat Etiquette Tool** policies.
             */
            policy_max_count?: number;
          };
          /**
           * Whether the meeting password is encrypted and included in the invitation link. The provided link will allow participants to join the meeting without having to enter the password.
           */
          embed_password_in_join_link?: boolean;
          /**
           * The type of encryption used when starting a meeting:
           * * `enhanced_encryption` — Enhanced encryption. Encryption data is stored in the cloud.
           * * `e2ee` — End-to-end encryption. The encryption key is stored on the local device and cannot be obtained by anyone else. Enabling E2EE also [**disables** certain features](https://support.zoom.us/hc/en-us/articles/360048660871), such as cloud recording, live streaming, and allowing participants to join before the host.
           */
          encryption_type?: 'enhanced_encryption' | 'e2ee';
          /**
           * Whether to enable end-to-end encryption for meetings.
           */
          end_to_end_encrypted_meetings?: boolean;
          /**
           * Whether all instant and scheduled meetings that users can join via client or Zoom Rooms systems are password-protected. [Personal Meeting ID (PMI)](https://support.zoom.us/hc/en-us/articles/203276937) meetings are **not** included in this setting.
           */
          meeting_password?: boolean;
          /**
           * Information about the meeting and webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
           */
          meeting_password_requirement?: {
            /**
             * The maximum length of consecutive characters (for example, `abcdef`) allowed in a password:
             * * `4` through `8` — The maximum consecutive characters length. The length is `n` minus `1`, where `n` is the value. For example, if the value is `4`, there can only be a maximum of `3` consecutive characters in a password (for example, `abc1x@8fdh`).
             * * `0` — No consecutive character restriction.
             */
            consecutive_characters_length?: 0 | 4 | 5 | 6 | 7 | 8;
            /**
             * Whether passwords must contain at least one letter character.
             */
            have_letter?: boolean;
            /**
             * Whether passwords must contain at least one numeric character.
             */
            have_number?: boolean;
            /**
             * Whether passwords must contain at least one special character. For example, `!`, `@`, and/or `#` characters.
             */
            have_special_character?: boolean;
            /**
             * Whether passwords must include uppercase and lowercase characters.
             */
            have_upper_and_lower_characters?: boolean;
            /**
             * The minimum password length.
             */
            length?: number;
            /**
             * Whether passwords must contain **only** numeric characters.
             */
            only_allow_numeric?: boolean;
            /**
             * Whether users are informed when the provided password is weak.
             */
            weak_enhance_detection?: boolean;
          };
          /**
           * Whether to specify that only authenticated users can join the meeting from the web client.
           */
          only_authenticated_can_join_from_webclient?: boolean;
          /**
           * Whether passwords are required for participants joining by phone.
           *
           * If enabled and the meeting is password-protected, a numeric password is required for participants to join by phone. For meetings with alphanumeric passwords, a numeric password will be generated.
           */
          phone_password?: boolean;
          /**
           * Whether all Personal Meeting ID (PMI) meetings that users can join via client or Zoom Rooms systems are password-protected.
           */
          pmi_password?: boolean;
          /**
           * Whether passwords are required for meetings that have already been scheduled.
           */
          require_password_for_scheduled_meeting?: boolean;
          /**
           * Whether passwords are required for webinars that have already been scheduled.
           */
          require_password_for_scheduled_webinar?: boolean;
          /**
           * Whether participants are placed in the [**Waiting Room**](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) when they join a meeting.
           *
           * When the **Waiting Room** feature is enabled, the [**Allow participants to join before host**](https://support.zoom.us/hc/en-us/articles/202828525-Allow-participants-to-join-before-host) setting is disabled.
           */
          waiting_room?: boolean;
          /**
           * Information about the Waiting Room settings.
           */
          waiting_room_settings?: {
            /**
             * The type of participants to be admitted to the Waiting Room:
             * * `0` — All attendees.
             * * `1` — Users who are not in your account.
             * * `2` — Users who are not in your account and are not part of your [allowed domains list](https://support.zoom.us/hc/en-us/articles/360037117472-Configuring-authentication-profiles#h_e3cf0d5f-eec7-4c2a-ad29-ef2a5079a7da).
             */
            participants_to_place_in_waiting_room?: 0 | 1 | 2;
            /**
             * The users who can admit participants from the Waiting Room:
             * * `0` — Host and co-hosts only.
             * * `1` — Host, co-hosts, and anyone who bypassed the Waiting Room if the host and co-hosts are not present.
             */
            users_who_can_admit_participants_from_waiting_room?: 0 | 1;
            /**
             * If the `participants_to_place_in_waiting_room` field is `2`, a comma-separated list of the domains that can bypass the Waiting Room (`"example.com,example2.com"`).
             */
            whitelisted_domains_for_waiting_room?: string;
          };
          /**
           * Whether to generate a password when scheduling webinars. Participants must use the generated password to join the scheduled webinar.
           */
          webinar_password?: boolean;
        };
      }
    | {
        /**
         * @deprecated
         */
        in_meeting?: {
          /**
           * Whether custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-meetings-webinars) are in use:
           * * `true` — Users can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting real-time meeting traffic. The data center regions can be provided in the `data_center_regions` field.
           * * `false` — Only the default data center regions.
           */
          custom_data_center_regions?: boolean;
          /**
           * If the value of `custom_data_center_regions` is `true`, a comma-separated list of the selected custom [data center regions](https://support.zoom.us/hc/en-us/articles/360059254691-Datacenter-abbreviation-list):
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
           * If the value of `custom_data_center_regions` is `true`, a comma-separated list the [data center regions](https://support.zoom.us/hc/en-us/articles/360059254691-Datacenter-abbreviation-list) that are **not** selected:
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
        };
        in_session?: {
          /**
           * Whether custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-meetings-webinars) are in use:
           * * `true` — Users can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting real-time meeting traffic. The data center regions can be provided in the `data_center_regions` field.
           * * `false` — Only the default data center regions.
           */
          custom_data_center_regions?: boolean;
          /**
           * If the value of `custom_data_center_regions` is `true`, a comma-separated list of the selected custom [data center regions](https://support.zoom.us/hc/en-us/articles/360059254691-Datacenter-abbreviation-list):
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
           * If the value of `custom_data_center_regions` is `true`, a comma-separated list the [data center regions](https://support.zoom.us/hc/en-us/articles/360059254691-Datacenter-abbreviation-list) that are **not** selected:
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
           * Whether to enable the [**Peer to Peer connection while only 2 people are in a meeting**](https://support.zoom.us/hc/en-us/articles/360061410851-Enabling-Peer-to-Peer-connection-for-2-people-in-a-meeting) setting.
           */
          p2p_connetion?: boolean;
          /**
           * Whether to enable the **Listening ports range** setting.
           */
          p2p_ports?: boolean;
          /**
           * When the `p2p_ports` value is `true`, the value is a semi-colon list of the peer to peer listening ports range, between `1` to `65535`. This value defaults to an empty string.
           */
          ports_range?: string;
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
           * Allow host to split meeting participants into separate, smaller rooms.
           */
          subsession?: boolean;
        };
        session_security?: {
          /**
           * Approve or block users from specific regions or countries from joining this meeting.
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
             * `true`: Setting enabled to either allow or block users from specific regions from joining your meetings. <br>
             *
             * `false`: Setting disabled.
             */
            enable?: boolean;
            /**
             * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
             * `approve`: Allow users from specific regions or countries to join this meeting. If this setting is selected, the approved regions or countries must be included in the `approved_list`.<br><br>
             * `deny`: Block users from specific regions or countries from joining this meeting. If this setting is selected, the approved regions or countries must be included in the `denied_list`
             */
            method?: 'approve' | 'deny';
          };
        };
        recording?: {
          /**
           * Whether hosts can record and save meetings or webinars to the cloud.
           */
          cloud_recording?: boolean;
          /**
           * Whether to enable recording the [**Active Speaker** view](https://support.zoom.us/hc/en-us/articles/360025561091-Recording-layouts#h_5c001397-33d6-47fb-bb40-1a3f68401581) during screen sharing.
           */
          record_speaker_view?: boolean;
          /**
           * Whether to enable recording the [**Gallery** view](https://support.zoom.us/hc/en-us/articles/360025561091-Recording-layouts#h_889dc825-9d79-4139-b65d-e719669c546b) during screen sharing.
           */
          record_gallery_view?: boolean;
          /**
           * Whether to record one audio file for all participants.
           */
          record_audio_file?: boolean;
          /**
           * Whether meeting and webinar chat texts are saved.
           */
          save_chat_text?: boolean;
          /**
           * Whether timestamps are added to all meeting and webinar recordings.
           */
          show_timestamp?: boolean;
          /**
           * Whether to enable the [**Audio transcription**](https://support.zoom.us/hc/en-us/articles/115004794983-Audio-transcription-for-cloud-recordings) feature.
           */
          recording_audio_transcript?: boolean;
          /**
           * Whether to enable the [**Cloud recording downloads**](https://support.zoom.us/hc/en-us/articles/360060240972-Managing-cloud-recording-settings) setting.
           */
          cloud_recording_download?: boolean;
          /**
           * Whether cloud recordings are automatically deleted after a specific number of days.
           */
          auto_delete_cmr?: boolean;
          /**
           * When the `auto_delete_cmr` value is `true`, the number of days before Zoom automatically deletes cloud recordings:
           * * `30` — 30 days.
           * * `60` — 60 days.
           * * `90` — 90 days.
           * * `120` — 120 days.
           */
          auto_delete_cmr_days?: 30 | 60 | 90 | 120;
        };
      }
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/accounts/{accountId}/settings',
      path: {
        accountId: accountId,
      },
      query: {
        option: option,
        custom_query_fields: customQueryFields,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`2001\` <br>
        Account does not exist: $accountId`,
      },
    });
  }

  /**
   * Update account settings
   * Use this API to update an account's settings. To update the Master account's settings, pass the `me` value for the `accountId` path parameter.
   *
   * **Scopes:** `account:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * The account must be a paid account.
   * @returns any **Error Code:** `200` <br>
   * Only available for paid accounts.
   * @throws ApiError
   */
  public accountSettingsUpdate({
    accountId,
    requestBody,
    option,
  }: {
    /**
     * The account's ID. For the Master account, pass the `me` value for this parameter.
     */
    accountId: string;
    requestBody:
      | {
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
            sign_in_with_two_factor_auth?: 'all' | 'group' | 'role' | 'none';
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
            allow_participants_chat_with?: 1 | 2 | 3 | 4;
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
            allow_users_save_chats?: 1 | 2 | 3;
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
            entry_exit_chime?: 'host' | 'all' | 'none';
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
            meeting_reactions_emojis?: 'all' | 'selected';
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
              allow_attendees_chat_with?: 1 | 2 | 3;
              /**
               * Whether to automatically save chat messages to a local file on the host's computer when the webinar ends.
               */
              allow_auto_save_local_chat_file?: boolean;
              /**
               * Allow webinar panelists to chat with:
               * * `1` — Host and all panelists.
               * * `2` — Everyone.
               */
              allow_panelists_chat_with?: 1 | 2;
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
              allow_users_save_chats?: 0 | 1 | 2;
              /**
               * By default, allow webinar attendees to chat with:
               * * `1` — Host and all panelists.
               * * `2` — Everyone.
               */
              default_attendees_chat_with?: 1 | 2;
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
            who_can_share_screen?: 'host' | 'all';
            /**
             * The type of user that can begin sharing their screen when someone else in the meeting is sharing their screen:
             * * `host` — Only hosts can screen share when someone else is sharing.
             * * `all` — Both hosts and participants can screen share when someone else is sharing.
             */
            who_can_share_screen_when_someone_is_sharing?: 'host' | 'all';
            /**
             * Indicates how many participants can share at the same time. The value can be one of the following:<br>
             * `one`: Only one participant can share at a time
             * .<br>
             * `multiple`: Multiple participants can share simultaneously (dual monitors recommended).
             */
            participants_share_simultaneously?: 'multiple' | 'one';
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
            meeting_qos_and_mos?: 0 | 1 | 2 | 3;
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
            use_cdn?: 'none' | 'default' | 'wangsu';
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
                archive_retention?:
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                  | 23
                  | 24
                  | 25
                  | 26
                  | 27
                  | 28
                  | 29
                  | 30;
                /**
                 * Perform the action when meetings or webinars cannot be archived.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
                 */
                action_when_archive_failed?: 1 | 2;
                /**
                 * Show notification when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
                 */
                notification_when_archiving_starts?: 'participants' | 'guest';
                /**
                 * Play voice prompt when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
                 */
                play_voice_prompt_when_archiving_starts?: 'participants' | 'guest' | 'none';
              };
              /**
               * Archive types:
               *
               * * `1`: Only meetings are archived.<br>
               * * `2`: Only webinars are archived.<br>
               * * `3`: Both meetings and webinars are archived.
               */
              type?: 1 | 2 | 3;
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
            auto_delete_cmr_days?: 30 | 60 | 90 | 120;
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
            auto_recording?: 'local' | 'cloud' | 'none';
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
            audio_type?: 'both' | 'telephony' | 'voip' | 'thirdParty';
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
            jbh_time?: 0 | 5 | 10 | 15;
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
              consecutive_characters_length?: 0 | 4 | 5 | 6 | 7 | 8;
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
            require_password_for_pmi_meetings?: 'jbh_only' | 'all' | 'none';
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
        }
      | (
          | {
              /**
               * Whether to enable the [**Allow authentication exception**](https://support.zoom.us/hc/en-us/articles/360037117472#h_01F13A9N1FQFNVESC9C21NRHXY) setting. This lets hosts invite users who can bypass authentication.
               */
              allow_authentication_exception?: boolean;
              /**
               * Meeting Authentication Options
               */
              authentication_option?: {
                /**
                 * Specify the action that you would like to take via this API request:<br>
                 * * `add` : Choose this value if you are adding an authentication option.
                 * * `update`: Choose this value if you are updating an existing authentication option.
                 * * `delete`: Choose this value if you are deleting an existing authentication option.
                 */
                action?: 'update' | 'delete' | 'add';
                /**
                 * Specify whether you would like to set this authentication option as the default option or not.
                 */
                default_option?: boolean;
                /**
                 * If you chose `enforce_login_with_domains` as the authentication type, specify the domain(s) that you want to allow to join your meetings or webinars.
                 */
                domains?: string;
                /**
                 *  Authentication ID. If you are creating an authentication profile, you do not need to provide this field. The id field will be generated in the response once this API request is completed successfully. You can also use the Get Account Settings API with query parameter set to `meeting_authentication` to list the authentication id.<br><br>
                 * Use this field or the `name` field to identify the associated authentication option that you would like to update or delete.
                 */
                id?: string;
                /**
                 * Unique name for the authentication option.
                 */
                name?: string;
                /**
                 *  Authentication type. Specify one of the following authentication types for the authentication profile:<br>
                 * * `enforce_login`: This option allows any users to join the meeting or webinar, as long as they are signed into their Zoom account.
                 * * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can join the meeting or webinar. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.<br>
                 * * `enforce_login_with_same_account`: This option allows users to join the meeting or webinar with the same Zoom account.
                 */
                type?: 'enforce_login' | 'enforce_login_with_same_account' | 'enforce_login_with_domains';
              };
              /**
               * If set to "true", only authenticated users can join meetings. The method for authentication can be defined in the "authentication_option".
               */
              meeting_authentication?: boolean;
            }
          | {
              /**
               * Specify the authentication options for this account.
               */
              authentication_option?: {
                /**
                 * Specify the action that you would like to take via this API request:<br>
                 * * `add` : Choose this value if you are adding an authentication option.
                 * * `update`: Choose this value if you are updating an existing authentication option.
                 * * `delete`: Choose this value if you are deleting an existing authentication option.
                 */
                action?: 'update' | 'delete' | 'add';
                /**
                 * Specify whether you would like to set this authentication option as the default option or not.
                 */
                default_option?: boolean;
                /**
                 * If you chose `enforce_login_with_domains` as the authentication type, specify the domain(s) that you want to allow to view the recordings.
                 */
                domains?: string;
                /**
                 *  Authentication ID. If you are creating an authentication profile, you do not need to provide this field. The id field will be generated in the response once this API request is completed successfully. You can also use the Get Account Settings API with query parameter set to `meeting_authentication` to list the authentication id.<br><br>
                 * Use this field or the `name` field to identify the associated authentication option that you would like to update or delete.
                 */
                id?: string;
                /**
                 * Unique name for the authentication option.
                 */
                name?: string;
                /**
                 * Specify one authentication type that is to be associated with this authentication configuration:<br>
                 * * `internally`: This option allows you specify a rule that only signed in users within your account can view the recording.<br>
                 * * `enforce_login`: This option allows any users to view the recording, as long as they are signed into their Zoom account.<br>
                 * * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can view the recording. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.
                 *
                 *
                 */
                type?: 'internally' | 'enforce_login' | 'enforce_login_with_domains';
              };
              /**
               * If set to `true`, only authenticated users can view the cloud recordings.<br><br>
               * The authentication profile **must first be set at the account level via the account settings**, and later can be disabled after enabling on the preferred level - i.e. user level using user settings or at group level via group settings  (if you do not want the settings to be enabled on the entire account).
               */
              recording_authentication?: boolean;
            }
        )
      | {
          meeting_security?: {
            /**
             * Whether to require that all meetings are secured with at least one security option.
             *
             * This setting can only be disabled by Enterprise, ISV, Business (with more than 100 licenses), and Education accounts.
             */
            auto_security?: boolean;
            /**
             * Whether to block users in specific domains from joining meetings and webinars.
             */
            block_user_domain?: boolean;
            /**
             * The domain to block, up to 20 domains. For example, the `*.example.com` domain.
             */
            block_user_domain_list?: Array<string>;
            /**
             * Information about the **Chat Etiquette** Tool.
             */
            chat_etiquette_tool?: {
              /**
               * Whether to enable the **Chat Etiquette Tool**. This value defaults to `false`.
               *
               * The **Chat Etiquette Tool** allows you to define specific keywords and text patterns in chat to prevent users from inadvertently sharing unwanted messages.
               */
              enable?: boolean;
              /**
               * The policy operation to perform for the update:
               * * `create` — Create policies.
               * * `update` — Update policies.
               * * `delete` — Delete policies.
               */
              operate?: 'create' | 'update' | 'delete';
              /**
               * Information about the defined **Chat Etiquette Tool** policies.
               */
              policies?: Array<{
                /**
                 * The policy's description.
                 */
                description?: string;
                /**
                 * The policy ID.
                 */
                id?: string;
                /**
                 * Whether to lock the policy. When it is locked, users cannot update the policy. This value defaults to `false`.
                 */
                is_locked?: boolean;
                /**
                 * A list of defined rule keywords.
                 */
                keywords?: Array<string>;
                /**
                 * The policy name.
                 */
                name?: string;
                /**
                 * The regular expression to match to the content of chat messages.
                 */
                regular_expression?: string;
                /**
                 * The policy's current status:
                 * * `activated` — Activated.
                 * * `deactivated` — Deactivated.
                 */
                status?: 'activated' | 'deactivated';
                /**
                 * The policy's trigger action:
                 * * `1` — Ask the user to confirm before they send the message.
                 * * `2` — Block the user's message.
                 */
                trigger_action?: 1 | 2;
              }>;
            };
            /**
             * Whether the meeting password will be encrypted and included in the invitation link. The provided link will allow participants to join the meeting without having to enter the password.
             */
            embed_password_in_join_link?: boolean;
            /**
             * The type of encryption to use when starting a meeting:
             * * `enhanced_encryption` — Use enhanced encryption. Encryption data is stored in the cloud.
             * * `e2ee` — End-to-end encryption. The encryption key is stored on the local device and cannot be obtained by anyone else. Enabling E2EE also [**disables** certain features](https://support.zoom.us/hc/en-us/articles/360048660871), such as cloud recording, live streaming, and allowing participants to join before the host.
             */
            encryption_type?: 'enhanced_encryption' | 'e2ee';
            /**
             * Whether to enable end-to-end encryption for meetings. If enabled, you can specify the type of encryption in the `encryption_type` field.
             */
            end_to_end_encrypted_meetings?: boolean;
            /**
             * Whether all instant and scheduled meetings that users can join via client or Zoom Rooms systems are password-protected. [Personal Meeting ID (PMI)](https://support.zoom.us/hc/en-us/articles/203276937) meetings are **not** included in this setting.
             */
            meeting_password?: boolean;
            /**
             * Information about the meeting and webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
             */
            meeting_password_requirement?: {
              /**
               * The maximum length of consecutive characters (for example, `abcdef`) allowed in a password:
               * * `4` through `8` — The maximum consecutive characters length. The length is `n` minus `1`, where `n` is the provided value. For example, if you provide the `4` value, there can only be a maximum of `3` consecutive characters in a password (for example, `abc1x@8fdh`).
               * * `0` — Do not apply a consecutive character restriction.
               */
              consecutive_characters_length?: 0 | 4 | 5 | 6 | 7 | 8;
              /**
               * Whether the password must contain at least one letter character.
               */
              have_letter?: boolean;
              /**
               * Whether the password must contain at least one numeric character.
               */
              have_number?: boolean;
              /**
               * Whether the password must contain at least one special character. For example, `!`, `@`, and/or `#` characters.
               */
              have_special_character?: boolean;
              /**
               * Whether the password must include uppercase and lowercase characters.
               */
              have_upper_and_lower_characters?: boolean;
              /**
               * The password's minimum length.
               */
              length?: number;
              /**
               * Whether the password must contain **only** numeric characters.
               */
              only_allow_numeric?: boolean;
              /**
               * Whether users will be informed when the provided password is weak.
               */
              weak_enhance_detection?: boolean;
            };
            /**
             * Whether to specify that only authenticated users can join the meeting from the web client.
             */
            only_authenticated_can_join_from_webclient?: boolean;
            /**
             * Whether to require a password for participants joining by phone.
             *
             * If enabled and the meeting is password-protected, a numeric password is required for participants to join by phone. For meetings with alphanumeric passwords, a numeric password will be generated.
             */
            phone_password?: boolean;
            /**
             * Whether all Personal Meeting ID (PMI) meetings that users can join via client or Zoom Rooms systems are password-protected.
             */
            pmi_password?: boolean;
            /**
             * Whether to require a password for meetings that have already been scheduled.
             */
            require_password_for_scheduled_meeting?: boolean;
            /**
             * Whether to require a password for webinars that have already been scheduled.
             */
            require_password_for_scheduled_webinar?: boolean;
            /**
             * Whether participants are placed in the [**Waiting Room**](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) when they join a meeting.
             *
             * If the **Waiting Room** feature is enabled, the [**Allow participants to join before host**](https://support.zoom.us/hc/en-us/articles/202828525-Allow-participants-to-join-before-host) setting is automatically disabled.
             */
            waiting_room?: boolean;
            /**
             * Information about the Waiting Room settings.
             */
            waiting_room_settings?: {
              /**
               * The type of participants to be admitted to the Waiting Room:
               * * `0` — All attendees.
               * * `1` — Users who are not in your account.
               * * `2` — Users who are not in your account and are not part of your [allowed domains list](https://support.zoom.us/hc/en-us/articles/360037117472-Configuring-authentication-profiles#h_e3cf0d5f-eec7-4c2a-ad29-ef2a5079a7da).
               */
              participants_to_place_in_waiting_room?: 0 | 1 | 2;
              /**
               * The users who can admit participants from the Waiting Room:
               * * `0` — Host and co-hosts only.
               * * `1` — Host, co-hosts, and anyone who bypassed the Waiting Room if the host and co-hosts are not present.
               */
              users_who_can_admit_participants_from_waiting_room?: 0 | 1;
              /**
               * If the `participants_to_place_in_waiting_room` field is `2`, a comma-separated list of the domains that can bypass the Waiting Room (`"example.com,example2.com"`).
               */
              whitelisted_domains_for_waiting_room?: string;
            };
            /**
             * Whether to generate a password when scheduling webinars. Participants must use the generated password to join the scheduled webinar.
             */
            webinar_password?: boolean;
          };
        }
      | {
          /**
           * @deprecated
           */
          in_meeting?: {
            /**
             * Whether to use custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-meetings-webinars):
             * * `true` — Users can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting real-time meeting traffic. The data center regions can be provided in the `data_center_regions` field.
             * * `false` — Only use the default data center regions.
             */
            custom_data_center_regions?: boolean;
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
          };
          in_session?: {
            /**
             * Whether to use custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-meetings-webinars):
             * * `true` — Users can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting real-time meeting traffic. The data center regions can be provided in the `data_center_regions` field.
             * * `false` — Only use the default data center regions.
             */
            custom_data_center_regions?: boolean;
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
             * Whether to enable the [**Peer to Peer connection while only 2 people are in a meeting**](https://support.zoom.us/hc/en-us/articles/360061410851-Enabling-Peer-to-Peer-connection-for-2-people-in-a-meeting) setting.
             */
            p2p_connetion?: boolean;
            /**
             * Whether to enable the **Listening ports range** setting.
             */
            p2p_ports?: boolean;
            /**
             * When the `p2p_ports` value is `true`, the value is a semi-colon list of the peer to peer listening ports range, between `1` to `65535`. This value defaults to an empty string.
             */
            ports_range?: string;
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
             * Allow host to split meeting participants into separate, smaller rooms.
             */
            subsession?: boolean;
          };
          session_security?: {
            /**
             * Approve or block users from specific regions or countries from joining this meeting.
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
               * `true`: Setting enabled to either allow or block users from specific regions from joining your meetings. <br>
               *
               * `false`: Setting disabled.
               */
              enable?: boolean;
              /**
               * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
               * `approve`: Allow users from specific regions or countries to join this meeting. If this setting is selected, the approved regions or countries must be included in the `approved_list`.<br><br>
               * `deny`: Block users from specific regions or countries from joining this meeting. If this setting is selected, the approved regions or countries must be included in the `denied_list`
               */
              method?: 'approve' | 'deny';
            };
          };
          recording?: {
            /**
             * Whether to enable the recording of the [**Active Speaker** view](https://support.zoom.us/hc/en-us/articles/360025561091-Recording-layouts#h_5c001397-33d6-47fb-bb40-1a3f68401581) during screen sharing.
             */
            record_speaker_view?: boolean;
            /**
             * Whether to enable the recording of the [**Gallery** view](https://support.zoom.us/hc/en-us/articles/360025561091-Recording-layouts#h_889dc825-9d79-4139-b65d-e719669c546b) during screen sharing.
             */
            record_gallery_view?: boolean;
            /**
             * Whether to record a single audio file for all participants.
             */
            record_audio_file?: boolean;
            /**
             * Whether to save meeting and webinar chat texts.
             */
            save_chat_text?: boolean;
            /**
             * Whether to add timestamps to meeting and webinar recordings.
             */
            show_timestamp?: boolean;
            /**
             * Whether to enable the [**Cloud recording downloads**](https://support.zoom.us/hc/en-us/articles/360060240972-Managing-cloud-recording-settings) setting.
             */
            cloud_recording_download?: boolean;
            /**
             * Whether to enable the automatic deletion of cloud recordings after a specific number of days.
             */
            auto_delete_cmr?: boolean;
            /**
             * When the `auto_delete_cmr` value is `true`, the number of days before Zoom automatically deletes cloud recordings:
             * * `30` — 30 days.
             * * `60` — 60 days.
             * * `90` — 90 days.
             * * `120` — 120 days.
             */
            auto_delete_cmr_days?: 30 | 60 | 90 | 120;
          };
        };
    /**
     * Optional query parameters:
     * * `meeting_authentication` — Use this query parameter to view the [meeting authentication settings](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) applied to the user's account.
     * * `recording_authentication` — Use this query parameter to view the [recording authentication settings](https://support.zoom.us/hc/en-us/articles/360037756671-Authentication-Profiles-for-Cloud-Recordings) applied to the user's account.
     * * `security` — Use this query parameter to view the account's security settings. For example, password requirements for user login or two-factor authentication.
     * * `meeting_security` — Use this query parameter to view the meeting security settings applied to the user's account.
     */
    option?: 'meeting_authentication' | 'recording_authentication' | 'security' | 'meeting_security';
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/accounts/{accountId}/settings',
      path: {
        accountId: accountId,
      },
      query: {
        option: option,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\` <br>
        The domains provided are invalid. If you are providing multiple domains, separate each domain with a comma.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Not Found

         **Error Code:** \`2001\` <br>
        Account does not exist: $accountId`,
      },
    });
  }

  /**
   * Get locked settings
   * [Account Locked Settings](https://support.zoom.us/hc/en-us/articles/115005269866) allow you turn settings on or off for all users in your account. No user except the account admin or account owner can change these settings. With lock settings, you force the settings on for all users.
   * Use this API to retrieve an account's locked settings.
   *
   * **Note:** This API can be used by Zoom Accounts that are on a Pro or a higher plan as well accounts that have master and sub accounts options enabled. <br><br>
   * **Prerequisites:**
   * * Pro or a higher paid account. <br>
   *
   * **Scope**: `account:read:admin`.
   * <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   *
   *
   *
   *
   *
   * **Scope:** account:read:admin
   * @returns any **Error Code:** `200`<br>
   * Only available for paid account:$accountId.
   *
   * **HTTP Status Code:** `200`<br>
   * Locked settings for the Account returned.
   *
   *
   * @throws ApiError
   */
  public getAccountLockSettings({
    accountId,
    option,
    customQueryFields,
  }: {
    /**
     * Unique Identifier of the account. To retrieve locked settings of the master account or a regular account, use "me" as the value of this field. <br> To retrieve locked settings of a sub account, provide the Account ID of the sub account in this field.
     */
    accountId: string;
    /**
     * Optional query parameters:
     * * `meeting_security` — Use this query parameter to view the meeting security settings applied to the user's account.
     */
    option?: string;
    /**
     * Provide the name of the field by which you would like to filter the response. For example, if you provide "host_video" as the value of this field, you will get a response similar to the following:<br>
     * {
     * "schedule_meeting": {
     * "host_video": false
     * }
     * }
     * <br>You can provide multiple values by separating them with commas(example: "host_video,participant_video”).
     */
    customQueryFields?: string;
  }): CancelablePromise<
    | {
        audio_conferencing?: {
          /**
           * Whether the account has the [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F51680NJ7YHZDXGJNSKDGM2P) setting enabled.
           */
          toll_free_and_fee_based_toll_call?: boolean;
        };
        email_notification?: {
          /**
           * Notify the alternative host who is set or removed.
           */
          alternative_host_reminder?: boolean;
          /**
           * Notify host and participants when the meeting is cancelled.
           */
          cancel_meeting_reminder?: boolean;
          /**
           * Whether to notify the host when a cloud recording is available.
           */
          cloud_recording_available_reminder?: boolean;
          /**
           * Notify host when participants join the meeting before them.
           */
          jbh_reminder?: boolean;
          /**
           * Notify the host there is a meeting is scheduled, rescheduled, or cancelled.
           */
          schedule_for_reminder?: boolean;
        };
        in_meeting?: {
          /**
           * Allow participants who belong to your account to see that a guest (someone who does not belong to your account) is participating in the meeting or webinar.
           */
          alert_guest_join?: boolean;
          /**
           * If the value of this field is set to `true`,  allow users to delete messages in the in-meeting chat.
           *
           */
          allow_users_to_delete_messages_in_meeting_chat?: boolean;
          /**
           * Whether to allow livestreaming.
           */
          allow_live_streaming?: boolean;
          /**
           * Show Zoom windows during screen share.
           */
          allow_show_zoom_windows?: boolean;
          /**
           * Allow participants to use annotation tools to add information to shared screens.
           */
          annotation?: boolean;
          anonymous_question_answer?: boolean;
          /**
           * Allow host to put attendee on hold.
           *
           * **This field has been deprecated and is no longer supported.**
           * @deprecated
           */
          attendee_on_hold?: boolean;
          /**
           * Whether to enable the [**Focus Mode**](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) feature. When enabled, this feature only displays the host and co-hosts' video and profile pictures during a meeting.
           *
           * This value defaults to `false`.
           */
          attention_mode_focus_mode?: boolean;
          /**
           * Enable users to see and add contacts to 'auto-answer group' in the contact list on chat. Any call from members of this group will be automatically answered.
           */
          auto_answer?: boolean;
          /**
           * Whether to enable Zoom's [live transcription feature](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription#h_01FHGGHYJ4457H4GSZY0KM3NSB).
           */
          auto_generated_captions?: boolean;
          /**
           * Automatically save all in-meeting chats.
           */
          auto_saving_chat?: boolean;
          /**
           * Allow host to split meeting participants into separate, smaller rooms.
           */
          breakout_room?: boolean;
          /**
           * Allow meeting participants to send chat message visible to all participants.
           */
          chat?: boolean;
          /**
           * Allow host to type closed captions or assign a participant/third party device to add closed captions.
           */
          closed_caption?: boolean;
          /**
           * Allow the host to add co-hosts. Co-hosts have the same in-meeting controls as the host.
           */
          co_host?: boolean;
          /**
           * Displays whether or not custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) have been selected for meetings/webinars hosted by the account.
           */
          custom_data_center_regions?: boolean;
          /**
           * Whether to enable the **Disable desktop screen sharing for meetings you host** setting.
           */
          disable_screen_sharing_for_host_meetings?: boolean;
          /**
           * Whether to enable the **Disable screen sharing when guests are in the meeting** setting.
           */
          disable_screen_sharing_for_in_meeting_guests?: boolean;
          /**
           * Enable DSCP marking for signaling and media packets. (Default is 56 for audio, 40 for video, and 40 for signaling.)
           */
          dscp_marking?: boolean;
          /**
           * Require that all meetings are encrypted using AES.
           */
          e2e_encryption?: boolean;
          /**
           * Play sound when participants join or leave.
           */
          entry_exit_chime?: string;
          /**
           * Allow another user to take control of the camera during a meeting.
           */
          far_end_camera_control?: boolean;
          /**
           * Enable users to provide feedback to Zoom at the end of the meeting.
           */
          feedback?: boolean;
          /**
           * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for all users on the account or not.
           */
          file_transfer?: boolean;
          /**
           * Whether full transcripts are available for viewing in the in-meeting side panel.
           */
          full_transcript?: boolean;
          /**
           * Enable higher quality video for host and participants. This will require more bandwidth.
           */
          group_hd?: boolean;
          /**
           * Whether hosts can assign participants as interpreters to interpret one language into another in real-time.
           */
          language_interpretation?: boolean;
          /**
           * Whether to enable manual closed captioning. When [enabled](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription), the host or assigned participant can provide manual captioning or a [3rd-party device](https://support.zoom.us/hc/en-us/articles/115002212983) can be assigned to provide captioning.
           */
          manual_captions?: boolean;
          /**
           * Whether meeting participants can [communicate using the emoji reactions](https://support.zoom.us/hc/en-us/articles/115001286183-Nonverbal-feedback-and-meeting-reactions) located in the **Reactions** menu in the meeting toolbar.
           */
          meeting_reactions?: boolean;
          /**
           * Set this field to true to use [webinar reactions](https://support.zoom.us/hc/en-us/articles/4803536268429).
           */
          webinar_reactions?: boolean;
          /**
           * Whether the host can present a survey to participants once a meeting has ended. This feature is only available in version 5.7.3 or higher.
           */
          meeting_survey?: boolean;
          /**
           * Allow users to select original sound during a meeting.
           */
          original_audio?: boolean;
          /**
           * Add 'Polls' to the meeting controls. This allows the host to survey the attendees.
           */
          polling?: boolean;
          /**
           * Display end-of-meeting experience feedback survey.
           */
          post_meeting_feedback?: boolean;
          /**
           * Allow meeting participants to send a private 1:1 message to another participant.
           */
          private_chat?: boolean;
          /**
           * During screen sharing, allow the person who is sharing to let others control the shared content.
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
           * Whether participants can save closed captions or transcripts.
           */
          save_caption?: boolean;
          /**
           * Whether participants can [save closed caption or transcripts](https://support.zoom.us/hc/en-us/articles/360060958752).
           *
           * **Note:** If the `full_transcript` field is set to `false`, participants **cannot** save captions.
           */
          save_captions?: boolean;
          /**
           * Allow host and participants to share their screen or content during meetings.
           */
          screen_sharing?: boolean;
          /**
           * Allow users to invite participants by email only by default.
           */
          sending_default_email_invites?: boolean;
          /**
           * Always show meeting controls during a meeting.
           */
          show_meeting_control_toolbar?: boolean;
          /**
           * Whether the person sharing during a presentation can allow others to control the slide presentation. This feature is only available in version 5.8.3 or higher.
           */
          slide_control?: boolean;
          /**
           * Allow users to select stereo audio during a meeting.
           */
          stereo_audio?: boolean;
          /**
           * Allow  HTML formatting instead of plain text for meeting invitations scheduled with the Outlook plugin.
           */
          use_html_format_email?: boolean;
          /**
           * Enable virtual background.
           */
          virtual_background?: boolean;
          /**
           * Whether to allow webinar participants to send chat messages.
           */
          webinar_chat?: boolean;
          /**
           * Whether to enable webinar livestreaming.
           */
          webinar_live_streaming?: boolean;
          /**
           * Whether the host can add polls before or during a webinar.
           */
          webinar_polling?: boolean;
          /**
           * Whether attendees can ask the host and panelists questions in the webinar.
           */
          webinar_question_answer?: boolean;
          /**
           * Whether the host can present surveys to attendees once a webinar has ended.
           */
          webinar_survey?: boolean;
          /**
           * Allow participants to share a whiteboard that includes annotation tools.
           */
          whiteboard?: boolean;
        };
        other_options?: {
          /**
           * If true, iOS blurs the screenshot in the task switcher when multiple apps are open. Android hides the screenshot in the system-level list of recent apps.
           */
          blur_snapshot?: boolean;
          /**
           * Webinar registration options.
           */
          webinar_registration_options?: boolean;
        };
        recording?: {
          /**
           * Make cloud recordings accessible to account members only.
           */
          account_user_access_recording?: boolean;
          /**
           * Allow Zoom to automatically delete recordings permanently after a specified number of days.
           */
          auto_delete_cmr?: boolean;
          /**
           * Record meetings automatically as they start.
           */
          auto_recording?: boolean;
          /**
           * Allow hosts to record and save the meeting / webinar in the cloud.
           */
          cloud_recording?: boolean;
          /**
           * Allow anyone with a link to the cloud recording to download.
           */
          cloud_recording_download?: boolean;
          /**
           * Allow the host to delete the recordings. If this option is disabled, the recordings cannot be deleted by the host and only admin can delete them.
           */
          host_delete_cloud_recording?: boolean;
          /**
           * Setting to allow cloud recording access only from specific IP address ranges.
           *
           */
          ip_address_access_control?: boolean;
          /**
           * Allow hosts and participants to record the meeting to a local file.
           */
          local_recording?: boolean;
          /**
           * If set to `true`, meeting hosts cannot view their meeting cloud recordings. Only the admins who have recording management privilege can access them.
           *
           *
           */
          prevent_host_access_recording?: boolean;
          /**
           * Only authenticated users can view cloud recordings
           */
          recording_authentication?: boolean;
          /**
           * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom support team.
           */
          archive?: boolean;
        };
        schedule_meeting?: {
          /**
           * Determine how participants can join the audio portion of the meeting.
           */
          audio_type?: boolean;
          /**
           * If the value is set to `true`, the meeting password will be encrypted and included in the join meeting link to allow participants to join with just one click without having to enter the password.
           *
           */
          embed_password_in_join_link?: boolean;
          /**
           * Allow only signed-in users to join meetings.
           *
           */
          enforce_login?: boolean;
          /**
           * Specify the domains from which users can join a meeting.
           *
           */
          enforce_login_domains?: string;
          /**
           * Allow only signed-in users with specified domains to join meetings.
           *
           */
          enforce_login_with_domains?: boolean;
          /**
           * Start meetings with host video on.
           */
          host_video?: boolean;
          /**
           * Allow participants to join the meeting before the host arrives
           */
          join_before_host?: boolean;
          /**
           * Only authenticated users can join meetings
           */
          meeting_authentication?: boolean;
          /**
           * Whether to enable the [**Always display "Zoom Meeting" as the meeting topic**](https://support.zoom.us/hc/en-us/articles/201363253-Changing-account-settings#h_01EG9BJ646V2WJK1S3H2MP6YV6) setting.
           */
          not_store_meeting_topic?: boolean;
          /**
           * Whether to enable the [**Always show "Zoom Webinar" as the webinar topic**](https://support.zoom.us/hc/en-us/articles/201363253-Changing-account-settings#h_01EG9BJ646V2WJK1S3H2MP6YV6) setting.
           */
          always_display_zoom_webinar_as_topic?: boolean;
          /**
           * Start meetings with participant video on.
           */
          participant_video?: boolean;
          /**
           * Require password for instant meetings. If you use a PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
           */
          require_password_for_instant_meetings?: boolean;
          /**
           * Require participants to enter password for PMI meetings. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
           */
          require_password_for_pmi_meetings?: boolean;
          /**
           * This setting applies for regular meetings that do not use a PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
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
        };
        telephony?: {
          telephony_regions?: boolean;
          /**
           * Allow users to join the meeting using the existing 3rd party audio configuration.
           */
          third_party_audio?: boolean;
        };
        tsp?: {
          call_out?: boolean;
          show_international_numbers_link?: boolean;
        };
      }
    | {
        meeting_security?: {
          /**
           * Whether to enable the [**Approve or block entry for users from specific countries/regions**](https://support.zoom.us/hc/en-us/articles/360060086231-Joining-from-specific-countries-regions) setting.
           */
          approved_or_denied_countries_or_regions?: boolean;
          /**
           * Whether all meetings must be secured with at least one security option.
           *
           * This setting can only be disabled by Enterprise, ISV, Business (with more than 100 licenses), and Education accounts.
           */
          auto_security?: boolean;
          /**
           * Whether users in specific domains are blocked from joining meetings and webinars.
           */
          block_user_domain?: boolean;
          /**
           * Whether to enable the **Chat Etiquette Tool**.
           */
          chat_etiquette_tool?: boolean;
          /**
           * Whether the meeting password is encrypted and included in the invitation link. The provided link will allow participants to join the meeting without having to enter the password.
           */
          embed_password_in_join_link?: boolean;
          /**
           * Whether use encryption to start a meeting.
           */
          encryption_type?: boolean;
          /**
           * Whether to enable end-to-end encryption for meetings.
           */
          end_to_end_encrypted_meetings?: boolean;
          /**
           * Whether all instant and scheduled meetings that users can join via client or Zoom Rooms systems are password-protected. [Personal Meeting ID (PMI)](https://support.zoom.us/hc/en-us/articles/203276937) meetings are **not** included in this setting.
           */
          meeting_password?: boolean;
          /**
           * Whether to specify that only authenticated users can join the meeting from the web client.
           */
          only_authenticated_can_join_from_webclient?: boolean;
          /**
           * Whether passwords are required for participants joining by phone.
           *
           * If enabled and the meeting is password-protected, a numeric password is required for participants to join by phone. For meetings with alphanumeric passwords, a numeric password will be generated.
           */
          phone_password?: boolean;
          /**
           * Whether all Personal Meeting ID (PMI) meetings that users can join via client or Zoom Rooms systems are password-protected.
           */
          pmi_password?: boolean;
          /**
           * Whether participants are placed in the [**Waiting Room**](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) when they join a meeting.
           *
           * If the **Waiting Room** feature is enabled, the [**Allow participants to join before host**](https://support.zoom.us/hc/en-us/articles/202828525-Allow-participants-to-join-before-host) setting is automatically disabled.
           */
          waiting_room?: boolean;
          /**
           * Whether to generate a password when scheduling webinars. Participants must use the generated password to join the scheduled webinar.
           */
          webinar_password?: boolean;
        };
      }
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/accounts/{accountId}/lock_settings',
      path: {
        accountId: accountId,
      },
      query: {
        option: option,
        custom_query_fields: customQueryFields,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
             **Error Code:** \`2001\`<br>
            Account does not exist: $subAccountId.`,
      },
    });
  }

  /**
   * Update locked settings
   * [Account Locked Settings](https://support.zoom.us/hc/en-us/articles/115005269866) allow you turn settings on or off for all users in your account. No user except the account admin or account owner can change these settings. With lock settings, you force the settings on for all users. Use this API to update an account's locked settings.
   *
   * **Note:** This API can be used by Zoom Accounts that are on a Pro or a higher plan as well accounts that have master and sub accounts options enabled.<br><br>
   * **Prerequisites:**<br>
   * * Pro or a higher paid account. <br>
   *
   * **Scope:** `account:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   *
   *
   *
   * @returns any **Error Code:** `200`<br>
   * Only available for Paid account: $accountId.
   *
   * @throws ApiError
   */
  public updateAccountLockSettings({
    accountId,
    requestBody,
  }: {
    /**
     * Unique Identifier of the account. To retrieve locked settings of the master account or a regular account, provide "me" as the value of this field. <br> To retrieve locked settings of a sub account, provide the Account ID of the sub account in this field.
     */
    accountId: string;
    requestBody?:
      | {
          audio_conferencing?: {
            /**
             * Whether the account has the [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F51680NJ7YHZDXGJNSKDGM2P) setting enabled.
             */
            toll_free_and_fee_based_toll_call?: boolean;
          };
          email_notification?: {
            /**
             * Notify the alternative host who is set or removed.
             */
            alternative_host_reminder?: boolean;
            /**
             * Notify host and participants when the meeting is cancelled.
             */
            cancel_meeting_reminder?: boolean;
            /**
             * Whether to notify the host when a cloud recording is available.
             */
            cloud_recording_available_reminder?: boolean;
            /**
             * Notify host when participants join the meeting before them.
             */
            jbh_reminder?: boolean;
            /**
             * Notify the host there is a meeting is scheduled, rescheduled, or cancelled.
             */
            schedule_for_reminder?: boolean;
          };
          in_meeting?: {
            /**
             * Allow participants who belong to your account to see that a guest (someone who does not belong to your account) is participating in the meeting or webinar.
             */
            alert_guest_join?: boolean;
            /**
             * If the value of this field is set to `true`,  allow users to delete messages in the in-meeting chat.
             *
             */
            allow_users_to_delete_messages_in_meeting_chat?: boolean;
            /**
             * Whether to allow livestreaming.
             */
            allow_live_streaming?: boolean;
            /**
             * Show Zoom windows during screen share.
             */
            allow_show_zoom_windows?: boolean;
            /**
             * Allow participants to use annotation tools to add information to shared screens.
             */
            annotation?: boolean;
            anonymous_question_answer?: boolean;
            /**
             * Allow host to put attendee on hold.
             *
             * **This field has been deprecated and is no longer supported.**
             * @deprecated
             */
            attendee_on_hold?: boolean;
            /**
             * Whether to enable the [**Focus Mode**](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) feature. When enabled, this feature only displays the host and co-hosts' video and profile pictures during a meeting.
             */
            attention_mode_focus_mode?: boolean;
            /**
             * Enable users to see and add contacts to 'auto-answer group' in the contact list on chat. Any call from members of this group will be automatically answered.
             */
            auto_answer?: boolean;
            /**
             * Whether to enable Zoom's [live transcription feature](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription#h_01FHGGHYJ4457H4GSZY0KM3NSB).
             */
            auto_generated_captions?: boolean;
            /**
             * Automatically save all in-meeting chats.
             */
            auto_saving_chat?: boolean;
            /**
             * Allow host to split meeting participants into separate, smaller rooms.
             */
            breakout_room?: boolean;
            /**
             * Allow meeting participants to send chat message visible to all participants.
             */
            chat?: boolean;
            /**
             * Allow host to type closed captions or assign a participant/third party device to add closed captions.
             */
            closed_caption?: boolean;
            /**
             * Allow the host to add co-hosts. Co-hosts have the same in-meeting controls as the host.
             */
            co_host?: boolean;
            /**
             * If set to `true`, account owners and admins on paid accounts can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting their real-time meeting and webinar traffic. These regions can be provided in the `data_center_regions` field in the account settings. If set to `false`, the regions cannot be customized and the default regions will be used.
             */
            custom_data_center_regions?: boolean;
            /**
             * Whether to enable the **Disable desktop screen sharing for meetings you host** setting.
             */
            disable_screen_sharing_for_host_meetings?: boolean;
            /**
             * Whether to enable the **Disable screen sharing when guests are in the meeting** setting.
             */
            disable_screen_sharing_for_in_meeting_guests?: boolean;
            /**
             * Allow users to select stereo audio during a meeting.
             */
            dscp_marking?: boolean;
            /**
             * Require that all meetings are encrypted using AES.
             */
            e2e_encryption?: boolean;
            /**
             * Play sound when participants join or leave.
             */
            entry_exit_chime?: string;
            /**
             * Allow another user to take control of the camera during a meeting.
             */
            far_end_camera_control?: boolean;
            /**
             * Enable users to provide feedback to Zoom at the end of the meeting.
             */
            feedback?: boolean;
            /**
             * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for all users on the account or not.
             */
            file_transfer?: boolean;
            /**
             * Whether to enable the viewing of full transcripts in the in-meeting side panel.
             */
            full_transcript?: boolean;
            /**
             * Enable higher quality video for host and participants. This will require more bandwidth.
             */
            group_hd?: boolean;
            /**
             * Whether to allow hosts to assign participants as interpreters who can interpret one language into another in real-time.
             */
            language_interpretation?: boolean;
            /**
             * Whether to enable manual closed captioning. When [enabled](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription), the host or assigned participant can provide manual captioning or a [3rd-party device](https://support.zoom.us/hc/en-us/articles/115002212983) can be assigned to provide captioning.
             */
            manual_captions?: boolean;
            /**
             * Set this field to true to use [webinar reactions](https://support.zoom.us/hc/en-us/articles/4803536268429).
             */
            webinar_reactions?: boolean;
            /**
             * Whether to allow the host to present a survey to participants once a meeting has ended. This feature is only available in version 5.7.3 or higher.
             */
            meeting_survey?: boolean;
            /**
             * Allow users to select original sound during a meeting.
             */
            original_audio?: boolean;
            /**
             * Add 'Polls' to the meeting controls. This allows the host to survey the attendees.
             */
            polling?: boolean;
            /**
             * Display end-of-meeting experience feedback survey.
             */
            post_meeting_feedback?: boolean;
            /**
             * Allow meeting participants to send a private 1:1 message to another participant.
             */
            private_chat?: boolean;
            /**
             * During screen sharing, allow the person who is sharing to let others control the shared content.
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
             * Whether to allow participants to save closed captions or transcripts.
             */
            save_caption?: boolean;
            /**
             * Whether to allow participants to [save closed captions or transcripts](https://support.zoom.us/hc/en-us/articles/360060958752).
             *
             * **Note:** If the `full_transcript` field is set to `false`, participants **cannot** save captions.
             */
            save_captions?: boolean;
            /**
             * Allow host and participants to share their screen or content during meetings.
             */
            screen_sharing?: boolean;
            /**
             * Allow users to invite participants by email only by default.
             */
            sending_default_email_invites?: boolean;
            /**
             * Always show meeting controls during a meeting.
             */
            show_meeting_control_toolbar?: boolean;
            /**
             * Whether the person sharing during a presentation can allow others to control the slide presentation. This feature is only available in version 5.8.3 or higher.
             */
            slide_control?: boolean;
            /**
             * Allow users to select stereo audio during a meeting.
             */
            stereo_audio?: boolean;
            /**
             * Allow  HTML formatting instead of plain text for meeting invitations scheduled with the Outlook plugin.
             */
            use_html_format_email?: boolean;
            /**
             * Enable virtual background.
             */
            virtual_background?: boolean;
            /**
             * Whether to allow webinar participants to send chat messages.
             */
            webinar_chat?: boolean;
            /**
             * Whether to enable webinar livestreaming.
             */
            webinar_live_streaming?: boolean;
            /**
             * Whether to allow the host to add polls before or during a webinar.
             */
            webinar_polling?: boolean;
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
          };
          other_options?: {
            /**
             * If true, iOS blurs the screenshot in the task switcher when multiple apps are open. Android hides the screenshot in the system-level list of recent apps.
             */
            blur_snapshot?: boolean;
            /**
             * Webinar registration options.
             */
            webinar_registration_options?: boolean;
          };
          recording?: {
            /**
             * Make cloud recordings accessible to account members only.
             */
            account_user_access_recording?: boolean;
            /**
             * Allow Zoom to automatically delete recordings permanently after a specified number of days.
             */
            auto_delete_cmr?: boolean;
            /**
             * Record meetings automatically as they start.
             */
            auto_recording?: boolean;
            /**
             * Allow hosts to record and save the meeting / webinar in the cloud.
             */
            cloud_recording?: boolean;
            /**
             * Allow anyone with a link to the cloud recording to download.
             */
            cloud_recording_download?: boolean;
            /**
             * Allow the host to delete the recordings. If this option is disabled, the recordings cannot be deleted by the host and only admin can delete them.
             */
            host_delete_cloud_recording?: boolean;
            /**
             * Setting to allow cloud recording access only from specific IP address ranges.
             *
             */
            ip_address_access_control?: boolean;
            /**
             * Allow hosts and participants to record the meeting to a local file.
             */
            local_recording?: boolean;
            /**
             * If set to `true`, meeting hosts cannot view their meeting cloud recordings. Only the admins who have recording management privilege can access them.
             *
             *
             */
            prevent_host_access_recording?: boolean;
            recording_authentication?: boolean;
            /**
             * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom support team.
             */
            archive?: boolean;
          };
          schedule_meeting?: {
            /**
             * Determine how participants can join the audio portion of the meeting.
             */
            audio_type?: boolean;
            /**
             * If the value is set to `true`, the meeting password will be encrypted and included in the join meeting link to allow participants to join with just one click without having to enter the password.
             *
             */
            embed_password_in_join_link?: boolean;
            /**
             * Participants must always sign in before joining the scheduled meeting.
             */
            enforce_login?: boolean;
            /**
             * Specify the domains from which users can join a meeting.
             *
             */
            enforce_login_domains?: string;
            /**
             * Allow only signed-in users with specified domains to join meetings.
             *
             */
            enforce_login_with_domains?: boolean;
            /**
             * Start meetings with host video on.
             */
            host_video?: boolean;
            /**
             * Allow participants to join the meeting before the host arrives
             */
            join_before_host?: boolean;
            meeting_authentication?: boolean;
            /**
             * Whether to enable the [**Always display "Zoom Meeting" as the meeting topic**](https://support.zoom.us/hc/en-us/articles/201363253-Changing-account-settings#h_01EG9BJ646V2WJK1S3H2MP6YV6) setting.
             */
            not_store_meeting_topic?: boolean;
            /**
             * Whether to enable the [**Always show "Zoom Webinar" as the webinar topic**](https://support.zoom.us/hc/en-us/articles/201363253-Changing-account-settings#h_01EG9BJ646V2WJK1S3H2MP6YV6) setting.
             */
            always_display_zoom_webinar_as_topic?: boolean;
            /**
             * Start meetings with participant video on.
             */
            participant_video?: boolean;
            /**
             * Turn the lock setting on or off for the **Enable Personal Meeting ID** setting for an entire account.<br><br>
             * `true`: Turn the **"Enable Personal Meeting ID"** setting **on** for all users in the account. Users can choose to use personal meeting ID for their meetings. <br><br>
             * `false`: Turn **off** the **"Enable Personal Meeting ID"** setting. **If this setting is [disabled](https://support.zoom.us/hc/en-us/articles/201362843-Personal-meeting-ID-PMI-and-personal-link?flash_digest=eb7ac62d8c7fb4daf285916e3e15d87537806133#h_aa0335c8-3b06-41bc-bc1f-a8b84ef17f2a), meetings that were scheduled with a PMI by the users in the account will be invalid. Users will have to update previously scheduled PMI meetings.**<br><br>
             * For Zoom Phone only: If a user has been assigned a desk phone, **"Elevate to Zoom Meeting"** on desk phone will be disabled.
             *
             *
             *
             */
            personal_meeting?: boolean;
            /**
             * Require password for instant meetings. If you use a PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
             */
            require_password_for_instant_meetings?: boolean;
            /**
             * Require participants to enter password for PMI meetings. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
             */
            require_password_for_pmi_meetings?: boolean;
            /**
             * This setting applies for regular meetings that do not use a PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
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
          };
          telephony?: {
            telephony_regions?: boolean;
            /**
             * Allow users to join the meeting using the existing 3rd party audio configuration.
             */
            third_party_audio?: boolean;
          };
          tsp?: {
            call_out?: boolean;
            show_international_numbers_link?: boolean;
          };
        }
      | {
          meeting_security?: {
            /**
             * Whether to enable the [**Approve or block entry for users from specific countries/regions**](https://support.zoom.us/hc/en-us/articles/360060086231-Joining-from-specific-countries-regions) setting.
             */
            approved_or_denied_countries_or_regions?: boolean;
            /**
             * Whether to require that all meetings are secured with at least one security option.
             *
             * This setting can only be disabled by Enterprise, ISV, Business (with more than 100 licenses), and Education accounts.
             */
            auto_security?: boolean;
            /**
             * Whether to block users in specific domains from joining meetings and webinars.
             */
            block_user_domain?: boolean;
            /**
             * Whether to enable the **Chat Etiquette Tool**.
             */
            chat_etiquette_tool?: boolean;
            /**
             * Whether the meeting password will be encrypted and included in the invitation link. The provided link will allow participants to join the meeting without having to enter the password.
             */
            embed_password_in_join_link?: boolean;
            /**
             * The type of encryption to use when starting a meeting:
             * * `enhanced_encryption` — Use enhanced encryption. Encryption data is stored in the cloud.
             * * `e2ee` — End-to-end encryption. The encryption key is stored on the local device and cannot be obtained by anyone else. Enabling E2EE also [**disables** certain features](https://support.zoom.us/hc/en-us/articles/360048660871), such as cloud recording, live streaming, and allowing participants to join before the host.
             */
            encryption_type?: 'enhanced_encryption' | 'e2ee';
            /**
             * Whether to enable end-to-end encryption for meetings. If enabled, you can specify the type of encryption in the `encryption_type` field.
             */
            end_to_end_encrypted_meetings?: boolean;
            /**
             * Whether all instant and scheduled meetings that users can join via client or Zoom Rooms systems are password-protected. [Personal Meeting ID (PMI)](https://support.zoom.us/hc/en-us/articles/203276937) meetings are **not** included in this setting.
             */
            meeting_password?: boolean;
            /**
             * Whether to specify that only authenticated users can join the meeting from the web client.
             */
            only_authenticated_can_join_from_webclient?: boolean;
            /**
             * Whether to require a password for participants joining by phone.
             *
             * If enabled and the meeting is password-protected, a numeric password is required for participants to join by phone. For meetings with alphanumeric passwords, a numeric password will be generated.
             */
            phone_password?: boolean;
            /**
             * Whether all Personal Meeting ID (PMI) meetings that users can join via client or Zoom Rooms systems are password-protected.
             */
            pmi_password?: boolean;
            /**
             * Whether participants are placed in the [**Waiting Room**](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) when they join a meeting.
             *
             * If the **Waiting Room** feature is enabled, the [**Allow participants to join before host**](https://support.zoom.us/hc/en-us/articles/202828525-Allow-participants-to-join-before-host) setting is automatically disabled.
             */
            waiting_room?: boolean;
            /**
             * Whether to generate a password when scheduling webinars. Participants must use the generated password to join the scheduled webinar.
             */
            webinar_password?: boolean;
          };
        };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/accounts/{accountId}/lock_settings',
      path: {
        accountId: accountId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
             **Error Code:** \`2001\`<br>
            TAccount does not exist: $subAccountId.
            `,
      },
    });
  }

  /**
   * Get an account's webinar registration settings
   * Use this API to get an account's webinar registration settings. To get the master account's webinar registration settings, use the `me` value for the `accountId` path parameter.
   *
   * **Scopes:** `account:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * The account must be a paid account.
   * @returns any **HTTP Status Code:** `200` <br>
   * Account settings registration returned.
   *
   * **Error Code:** `200` <br>
   * Only available for paid accounts.
   * @throws ApiError
   */
  public accountSettingsRegistration({
    accountId,
    type,
  }: {
    /**
     * The account's ID. For master accounts, pass the `me` value for this parameter.
     */
    accountId: string;
    /**
     * The type of registration's type:
     * * `webinar` — webinar.
     */
    type?: 'webinar';
  }): CancelablePromise<{
    /**
     * When participants submit registration, do something.
     */
    options?: {
      /**
       * Send an email to host when someone registers.
       */
      host_email_notification?: boolean;
      /**
       * Close registration after event date.
       */
      close_registration?: boolean;
      /**
       * Allow participants to join from multiple devices
       */
      allow_participants_to_join_from_multiple_devices?: boolean;
      /**
       * Show social share buttons on registration page
       */
      show_social_share_buttons?: boolean;
    };
    /**
     * Array of Registrant Questions.
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
       * Decide whether this field are required.
       */
      required?: boolean;
      /**
       * Indicates whether or not the displayed fields are required to be filled out by registrants.
       */
      selected?: boolean;
    }>;
    /**
     * Approval type for the registration.
     */
    approve_type?: 0 | 1;
    /**
     * Array of Registrant Custom Questions
     */
    custom_questions?: Array<{
      /**
       * Title of the custom question.
       */
      title?: string;
      /**
       * Type of the question being asked.
       */
      type?: 'short' | 'single_dropdown' | 'single_radio' | 'multiple';
      /**
       * Decide whether this field are required.
       */
      required?: boolean;
      /**
       * Indicates whether or not the custom question is required to be answered by participants or not.
       */
      selected?: boolean;
      /**
       * Answer choices for the custom question. Can not be used for `short` question type as this type of question requires registrants to type out the answer.
       */
      answers?: Array<string>;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/accounts/{accountId}/settings/registration',
      path: {
        accountId: accountId,
      },
      query: {
        type: type,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
            Not Found

             **Error Code:** \`2001\` <br>
            Account does not exist: $accountId`,
      },
    });
  }

  /**
   * Update an account's webinar registration settings
   * Use this API to update an account's webinar registration settings. To update the master account's webinar registration settings, pass the `me` value for the `accountId` path parameter.
   *
   * **Scopes:** `account:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * The account must be a paid account.
   * @returns void
   * @throws ApiError
   */
  public accountSettingsRegistrationUpdate({
    accountId,
    requestBody,
    type,
  }: {
    /**
     * The account's ID. For master accounts, pass the `me` value for this parameter.
     */
    accountId: string;
    requestBody: {
      /**
       * When participants submit registration, do something.
       */
      options?: {
        /**
         * Send an email to host when someone registers.
         */
        host_email_notification?: boolean;
        /**
         * Close registration after event date.
         */
        close_registration?: boolean;
        /**
         * Allow participants to join from multiple devices
         */
        allow_participants_to_join_from_multiple_devices?: boolean;
        /**
         * Show social share buttons on registration page
         */
        show_social_share_buttons?: boolean;
      };
      /**
       * Array of Registrant Questions.
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
         * Decide whether this field are required.
         */
        required?: boolean;
        /**
         * Indicates whether or not the displayed fields are required to be filled out by registrants.
         */
        selected?: boolean;
      }>;
      /**
       * Approval type for the registration.
       */
      approve_type?: 0 | 1;
      /**
       * Array of Registrant Custom Questions
       */
      custom_questions?: Array<{
        /**
         * Title of the custom question.
         */
        title?: string;
        /**
         * Type of the question being asked.
         */
        type?: 'short' | 'single_dropdown' | 'single_radio' | 'multiple';
        /**
         * Decide whether this field are required.
         */
        required?: boolean;
        /**
         * Indicates whether or not the custom question is required to be answered by participants or not.
         */
        selected?: boolean;
        /**
         * Answer choices for the custom question. Can not be used for `short` question type as this type of question requires registrants to type out the answer.
         */
        answers?: Array<string>;
      }>;
    };
    /**
     * The type of registration's type:
     * * `webinar` — webinar.
     */
    type?: 'webinar';
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/accounts/{accountId}/settings/registration',
      path: {
        accountId: accountId,
      },
      query: {
        type: type,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\` <br>
            The domains provided are invalid. If you are providing multiple domains, separate each domain with a comma.`,
        400: `**HTTP Status Code:** \`400\` <br>
            Bad Request

             **Error Code:** \`200\` <br>
            Only available for paid accounts.`,
        404: `**HTTP Status Code:** \`404\`<br>
            Not Found

             **Error Code:** \`2001\` <br>
            Account does not exist: $accountId`,
      },
    });
  }

  /**
   * Get account's trusted domains
   * Use this API to get an account's [trusted domains](https://support.zoom.us/hc/en-us/articles/203395207). To get the Master account's trusted domains, use the `me` value for the `accountId` path parameter.
   *
   * **Scopes:** `account:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The account must be a paid account.
   * @returns any **HTTP Status Code:** `200` <br>
   * Account's trusted domains returned.
   *
   * **Error Code:** `2001` <br>
   * Account does not exist: $accountId
   * @throws ApiError
   */
  public accountTrustedDomain({
    accountId,
  }: {
    /**
     * The account's ID. For the Master account, pass the `me` value for this parameter.
     */
    accountId: string;
  }): CancelablePromise<{
    /**
     * A list of the account's trusted domains.
     */
    trusted_domains?: Array<string>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/accounts/{accountId}/trusted_domains',
      path: {
        accountId: accountId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
            Not Found

             **Error Code:** \`2001\` <br>
            Account does not exist: $accountId`,
      },
    });
  }
}
