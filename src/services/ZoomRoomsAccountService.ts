/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoomRoomsAccountService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Zoom Room account profile
   * Get details on the account profile of a Zoom Room. This information can only by accessed either by the Zoom Room Account Owner or a user with Zoom Rooms admin permission. To get information on an individual Room Profile, use the [**Get Zoom Room profile**](/docs/api-reference/zoom-api/methods#operation/getZRProfile) API.
   *
   * **Prerequisites:**<br>
   * * Zoom account owner or Zoom Rooms admin permissions<br>
   *
   * **Scopes:** `room:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200`<br>
   * Zoom Room Account Profile returned successfully.
   * @throws ApiError
   */
  public getZrAccountProfile(): CancelablePromise<{
    basic?: {
      /**
       * Require code to exit out of the Zoom Rooms application to switch between other apps.
       *
       */
      required_code_to_ext?: boolean;
      /**
       * 1-16 digit number or characters used to secure your Zoom Rooms application. This code must be entered on your Zoom Room Controller to change settings or to sign out.
       */
      room_passcode?: string;
      /**
       * The email address used for reporting Zoom Room issues.
       */
      support_email?: string;
      /**
       * The phone number used for reporting Zoom room issues.
       */
      support_phone?: string;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/account_profile',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
        Access restricted.`,
      },
    });
  }

  /**
   * Update Zoom Room account profile
   * Update information on the account profile of a Zoom Room. This information can only by accessed either by the Zoom Room Account Owner or a user with Zoom Rooms admin permission. To update information on an individual Room Profile, use the [**Update a Zoom Room profile**](/docs/api-reference/zoom-api/methods#operation/updateRoomProfile) API.
   *
   * **Prerequisites:**<br>
   * * Zoom account owner or Zoom Rooms admin permissions<br>
   *
   * **Scopes:** `room:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public updateZrAccProfile({
    requestBody,
  }: {
    requestBody?: {
      basic?: {
        /**
         * Require code to exit out of the Zoom Rooms application to switch between other apps.
         *
         */
        required_code_to_ext?: boolean;
        /**
         * 1-16 digit number or characters used to secure your Zoom Rooms application. This code must be entered on your Zoom Room Controller to change settings or to sign out.
         */
        room_passcode?: string;
        /**
         * The email address used for reporting Zoom Room issues.
         */
        support_email?: string;
        /**
         * The phone number used for reporting Zoom room issues.
         */
        support_phone?: string;
      };
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/rooms/account_profile',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br><br>
         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
        Access restricted.`,
      },
    });
  }

  /**
   * Get Zoom Room account settings
   * Get details on Account Settings of a Zoom Room. With this API, you can view either the **Account Meeting Settings** or the **Alert Settings** (Client Alert Settings and Notification Settings) of the Zoom Rooms account. By default, only **Account Meeting Settings** are returned. To view only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter.<br><br>
   * **Prerequisites:**<br>
   * * Zoom Room licenses
   * * Owner or Admin privileges on the Zoom Account.<br>
   * **Scopes:** `room:read:admin`<br><br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * ZR Account Settings returned successfully.
   *
   * @throws ApiError
   */
  public getZrAccountSettings({
    settingType = 'meeting',
  }: {
    /**
     * The type of setting that you would like to retrieve.<br> `alert`: Alert Settings applied on the Zoom Rooms Account.<br>
     * `meeting`: Meeting settings of the Zoom Rooms Account. <br>
     * `signage`: View digital signage settings of the Zoom Rooms Account.
     */
    settingType?: 'meeting' | 'alert';
  }): CancelablePromise<
    | {
        zoom_rooms?: {
          /**
           * Enable multiple participants to [share content simultaneously](https://support.zoom.us/hc/en-us/articles/360017767812-Sharing-Multiple-Screens-in-a-Zoom-Room) by default.
           */
          allow_multiple_content_sharing?: boolean;
          /**
           * Enable [automated audio test](https://support.zoom.us/hc/en-us/articles/360000319683-Zoom-Rooms-Daily-Audio-Testing) to ensure high quality audio.
           */
          audio_device_daily_auto_test?: boolean;
          /**
           * Enable participants in a Zoom Room to share their laptop screen on the Zoom Room TV without entering a meeting ID or sharing code.
           */
          auto_direct_sharing?: boolean;
          /**
           * Automatically start scheduled meetings according to the start time listed on the calendar associated with the room. A meeting alert will appear 10 minutes prior to the scheduled time on the TV.
           */
          auto_start_scheduled_meeting?: boolean;
          /**
           * Automatically stop the meeting at the end time as scheduled and listed in the calendar associated with the room.
           */
          auto_stop_scheduled_meeting?: boolean;
          /**
           * Use facial detection technology to [determine and display the attendees count](https://support.zoom.us/hc/en-us/articles/360031027111-Count-Attendees-in-Zoom-Rooms) after meetings on Dashboard.
           *
           */
          count_attendees_number_in_room?: boolean;
          /**
           * Display a [survey](https://support.zoom.us/hc/en-us/articles/214193146-End-of-Meeting-Attendee-Feedback) at the end of each meeting regarding the audio and video quality on the Zoom Rooms Controller.
           */
          display_feedback_survey?: boolean;
          /**
           *  Show the same information on the TV that is shown on the controller.
           */
          display_meeting_list?: boolean;
          /**
           * Allow to display room name, time and sharing key on the top portion of TV.
           */
          display_top_banner?: boolean;
          /**
           * Allow in-room participants to input email address where they can receive the recording before starting a recording if the meeting was created on the Scheduling Display or if it was started using the "Meet Now" option.
           */
          email_address_prompt_before_recording?: boolean;
          /**
           * Encrypt screen and content shared in meetings.
           */
          encrypt_shared_screen_content?: boolean;
          /**
           * If enabled, the meeting host and meeting ID (in addition to the meeting topic) are hidden from the Zoom Rooms display for private meetings. This affects meetings that were originally scheduled as private, as well as public meetings that were transformed to private.
           */
          hide_id_for_private_meeting?: boolean;
          /**
           * Set [Zoom Rooms as the alternative host](https://support.zoom.us/hc/en-us/articles/203614149-Zoom-Rooms-as-Alternative-Host).
           *
           */
          make_room_alternative_host?: boolean;
          /**
           * Enable secure connection between Zoom Rooms computer and controller.
           */
          secure_connection_channel?: boolean;
          /**
           * Restrict[ sending Whiteboard sessions](https://support.zoom.us/hc/en-us/articles/115004797286-Using-the-Whiteboard-in-Zoom-Rooms-for-Touch#h_781274b3-5237-4320-8826-be2120b00e21) to contacts or internal users only.
           */
          send_whiteboard_to_internal_contact_only?: boolean;
          /**
           * If enabled, the upcoming meeting alert message will be shown on the TV display. The value of the `upcoming_meeting_alert` field should be set to `true` to use this field.
           */
          show_alert_before_meeting?: boolean;
          /**
           * Allow users to see call history of joined meetings and phone calls from the Zoom Rooms controller.
           *
           */
          show_call_history_in_room?: boolean;
          /**
           * If enabled, you can invite participants from the contact list during a meeting or when starting a meeting
           */
          show_contact_list_on_controller?: boolean;
          /**
           * When enabled, meeting participants that are audio only or have their video turned off will also be shown on the Zoom Rooms display by default.
           */
          show_non_video_participants?: boolean;
          /**
           * Require the AirPlay service to be [started by an administrator](https://support.zoom.us/hc/en-us/articles/204726885-Screen-Share-Using-Airplay-Mirroring#h_a342ad38-4e46-47a8-a1d9-cded3b144b39) rather than always being available.
           */
          start_airplay_manually?: boolean;
          /**
           * Allow users to share content via Apple Screen Mirroring (called Airplay on iOS 11 or earlier) in Zoom Rooms
           */
          start_airplay_mirroring?: boolean;
          /**
           * Integrate with Skype for Business, GoToMeeting, or WebEx and show the meeting dial-in button on the meeting list tab for Zoom Rooms Controllers.
           */
          support_join_3rd_party_meeting?: boolean;
          /**
           * If enabled, all meetings in this room will be treated as [private meetings](https://support.zoom.us/hc/en-us/articles/115001051063-Zoom-Rooms-Private-Meetings), and the Zoom Room will display "Your Name's Meeting" instead of the real meeting topic.
           */
          transform_meeting_to_private?: boolean;
          /**
           * If enabled, a reminder will display 10 minutes prior to the next scheduled meeting on the controller.
           */
          upcoming_meeting_alert?: boolean;
          /**
           * [Restart](https://support.zoom.us/hc/en-us/articles/205418949-Zoom-Rooms-Weekly-System-Restart) the Zoom Rooms computer and controller once a week.
           */
          weekly_system_restart?: boolean;
        };
      }
    | {
        /**
         * The Client Alert Settings section includes alerts that display on the TV screen of the Zoom Room. Disable these settings if you have deliberately disconnected one or more peripheral devices or have never enabled them.
         */
        client_alert?: {
          /**
           * Display an alert message when an issue is detected with a bluetooth microphone.
           */
          detect_bluetooth_microphone_error_alert?: boolean;
          /**
           * Display an alert message when an issue is detected with a bluetooth speaker.
           */
          detect_bluetooth_speaker_error_alert?: boolean;
          /**
           * Display an alert message when an issue is detected with a camera.
           */
          detect_camera_error_alert?: boolean;
          /**
           * Display an alert message when an issue is detected with microphone.
           */
          detect_microphone_error_alert?: boolean;
          /**
           * Display an alert message when an issue is detected with a speaker.
           */
          detect_speaker_error_alert?: boolean;
        };
        digital_signage?: {
          /**
           * Specifies the elements that you want to display in the top banner.
           */
          banner?: {
            /**
             * Display or hide banner room name.
             */
            banner_room_name?: boolean;
            /**
             * Display or hide banner sharing key.
             */
            banner_sharing_key?: boolean;
            /**
             * Display or hide time in the banner.
             */
            banner_time?: boolean;
          };
          /**
           * Display period object lets you define the number of minutes before or after the scheduled meeting time you would like the content to display.
           */
          display_period?: {
            /**
             * Start displaying digital signage content after certain duration after the meeting ends. The value of this field indicates the duration in minutes.
             */
            start_displaying_content?: number;
            /**
             * Stop displaying content {certain_duration} before a meeting is scheduled to begin. The value of this field indicates the duration in minutes.
             */
            stop_displaying_content?: number;
          };
          /**
           * [Indicates whether digital signage is on or off,](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage#h_767fbb33-82a8-45a8-8392-a1bfa9687edd). <br>
           * `true`: enable<br> `false`: disable
           */
          enable_digital_signage?: boolean;
          /**
           * Set the [layout](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage#h_4e25ddf3-8f97-4957-8f8b-99725f940fa7). The value of this field can be either `standard` or `video_content`.
           *
           * `standard`: Standard Center<br>
           * `video_content`: Video + Content
           */
          layout?: string;
          /**
           * Sound of all contents will be muted if the value of this field is set to `true`.
           */
          mute?: boolean;
          /**
           * Content list.
           */
          play_list?: Array<{
            /**
             * Specify an action for the content list. The value can be one of the following:<br>
             * `add`: Add another content list.<br>
             * `update`: Update existing content list.<br>
             * `delete`: Delete content list.
             *
             */
            action?: 'add' | 'update' | 'delete';
            contents?: Array<{
              /**
               * Content Id.
               */
              content_id?: string;
              /**
               * Duration for how long the content will be displayed.
               */
              duration?: number;
              id?: string;
              /**
               * Name of the content.
               */
              name?: string;
              /**
               * Order of the content in the display.
               */
              order?: number;
            }>;
            /**
             * Specify the display end time for the content list in GMT.
             */
            end_time?: string;
            /**
             * Unique identifier of the content list. This field is only required if you would like to remove or update the content list.
             */
            id?: string;
            /**
             * Name of the content list.
             */
            name?: string;
            /**
             * Specify the display start time for the content list in GMT.
             */
            start_time?: string;
          }>;
        };
        /**
         * [Notifications Settings](https://support.zoom.us/hc/en-us/articles/205394099-Zoom-Room-Alerts#h_b430b5f2-5150-4522-9c96-c77f22ab70bc) includes the circumstances in which the room sends an email alert to the support team to notify them of a potentially urgent issue. These issues can affect the operation of the room, but do not display on the TV screen. The email alert is sent to the email address specified in the Notification Email Recipients section.
         */
        notification?: {
          /**
           * Send an alert when the audio echo test result meets usability threshold.
           */
          audio_meet_usability_threshold?: boolean;
          /**
           * Send an alert when the audio echo test result does not meet usability threshold.
           */
          audio_not_meet_usability_threshold?: boolean;
          /**
           * Send an alert when the battery starts charging.
           */
          battery_is_charging?: boolean;
          /**
           * Send an alert when the battery of the controller or the scheduling display is low (at 20%) and is not being charged.
           */
          battery_low_and_not_charging?: boolean;
          /**
           * Specify a percentage so that an alert is sent when the battery is less than the {battery_percentage} that you specified.
           */
          battery_percentage?: string;
          /**
           * Send an alert when the connection to the Controller or Scheduling Display cannot be detected.
           */
          controller_scheduling_disconnected?: boolean;
          /**
           * Send an alert when the Controller or Scheduling Display can be detected again.
           */
          controller_scheduling_reconnected?: boolean;
          /**
           * Send an alert when CPU usage is above 90%.
           */
          cpu_usage_high_detected?: boolean;
          /**
           * Send an alert when the mic, speaker or camera is disconnected in the Zoom Room.
           */
          mic_speaker_camera_disconnected?: boolean;
          /**
           * Send an alert when the mic, speaker or camera is reconnected.
           */
          mic_speaker_camera_reconnected?: boolean;
          /**
           * Send an alert when low bandwidth network is detected
           */
          network_unstable_detected?: boolean;
          /**
           * Send an alert when SIP registration stops working.
           */
          sip_registration_failed?: boolean;
          /**
           * Send an alert after the SIP registration is re-enabled.
           */
          sip_registration_re_enabled?: boolean;
          /**
           * Send an alert when the Zoom Room is online after previously being offline.
           */
          zoom_room_come_back_online?: boolean;
          /**
           * Send an alert when the TV display is disconnected
           */
          zoom_room_display_disconnected?: boolean;
          /**
           * Send an alert when the machine hosting the Zoom Room application has a network issue or cannot connect with the Controller.
           */
          zoom_room_offline?: boolean;
        };
      }
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/account_settings',
      query: {
        setting_type: settingType,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
        Access restricted.`,
      },
    });
  }

  /**
   * Update Zoom Room account settings
   * Update account settings applied for Zoom Rooms in a Zoom account. With this API, you can update either the **Account Meeting Settings** or the **Alert Settings** (Client Alert Settings and Notification Settings) of the Zoom Rooms account by specifying the required setting type in the `setting_type` parameter. To update only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter and to update only **Account Meeting Settings**, specify `meeting` as the value of the `setting_type` query parameter.<br><br>
   * **Prerequisites:**<br>
   * * Zoom Room licenses
   * * Owner or Admin privileges on the Zoom Account.<br>
   * **Scopes:** `room:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public updateZoomRoomAccSettings({
    settingType = 'meeting',
    requestBody,
  }: {
    /**
     * The type of setting that you would like to update.<br> `alert`: Alert Settings applied on the Zoom Rooms Account.<br>
     * `meeting`: Meeting settings of the Zoom Rooms Account.<br>
     * `signage`: View digital signage settings of the Zoom Rooms Account.
     */
    settingType?: string;
    requestBody?:
      | {
          zoom_rooms?: {
            /**
             * Enable multiple participants to [share content simultaneously](https://support.zoom.us/hc/en-us/articles/360017767812-Sharing-Multiple-Screens-in-a-Zoom-Room) by default.
             */
            allow_multiple_content_sharing?: boolean;
            /**
             * Enable [automated audio test](https://support.zoom.us/hc/en-us/articles/360000319683-Zoom-Rooms-Daily-Audio-Testing) to ensure high quality audio.
             */
            audio_device_daily_auto_test?: boolean;
            /**
             * Enable participants in a Zoom Room to share their laptop screen on the Zoom Room TV without entering a meeting ID or sharing code.
             */
            auto_direct_sharing?: boolean;
            /**
             * Automatically start scheduled meetings according to the start time listed on the calendar associated with the room. A meeting alert will appear 10 minutes prior to the scheduled time on the TV.
             */
            auto_start_scheduled_meeting?: boolean;
            /**
             * Automatically stop the meeting at the end time as scheduled and listed in the calendar associated with the room.
             */
            auto_stop_scheduled_meeting?: boolean;
            /**
             * Use facial detection technology to [determine and display the attendees count](https://support.zoom.us/hc/en-us/articles/360031027111-Count-Attendees-in-Zoom-Rooms) after meetings on Dashboard.
             *
             */
            count_attendees_number_in_room?: boolean;
            /**
             * Display a [survey](https://support.zoom.us/hc/en-us/articles/214193146-End-of-Meeting-Attendee-Feedback) at the end of each meeting regarding the audio and video quality on the Zoom Rooms Controller.
             */
            display_feedback_survey?: boolean;
            /**
             *  Show the same information on the TV that is shown on the controller.
             */
            display_meeting_list?: boolean;
            /**
             * Allow to display room name, time and sharing key on the top portion of TV.
             */
            display_top_banner?: boolean;
            /**
             * Allow in-room participants to input email address where they can receive the recording before starting a recording if the meeting was created on the Scheduling Display or if it was started using the "Meet Now" option.
             */
            email_address_prompt_before_recording?: boolean;
            /**
             * Encrypt screen and content shared in meetings.
             */
            encrypt_shared_screen_content?: boolean;
            /**
             * If enabled, the meeting host and meeting ID (in addition to the meeting topic) are hidden from the Zoom Rooms display for private meetings. This affects meetings that were originally scheduled as private, as well as public meetings that were transformed to private.
             */
            hide_id_for_private_meeting?: boolean;
            /**
             * Set [Zoom Rooms as the alternative host](https://support.zoom.us/hc/en-us/articles/203614149-Zoom-Rooms-as-Alternative-Host).
             *
             */
            make_room_alternative_host?: boolean;
            /**
             * Enable secure connection between Zoom Rooms computer and controller.
             */
            secure_connection_channel?: boolean;
            /**
             * Restrict[ sending Whiteboard sessions](https://support.zoom.us/hc/en-us/articles/115004797286-Using-the-Whiteboard-in-Zoom-Rooms-for-Touch#h_781274b3-5237-4320-8826-be2120b00e21) to contacts or internal users only.
             */
            send_whiteboard_to_internal_contact_only?: boolean;
            /**
             * If enabled, the upcoming meeting alert message will be shown on the TV display. The value of the `upcoming_meeting_alert` field should be set to `true` to use this field.
             */
            show_alert_before_meeting?: boolean;
            /**
             * Allow users to see call history of joined meetings and phone calls from the Zoom Rooms controller.
             *
             */
            show_call_history_in_room?: boolean;
            /**
             * If enabled, you can invite participants from the contact list during a meeting or when starting a meeting
             */
            show_contact_list_on_controller?: boolean;
            /**
             * When enabled, meeting participants that are audio only or have their video turned off will also be shown on the Zoom Rooms display by default.
             */
            show_non_video_participants?: boolean;
            /**
             * Require the AirPlay service to be [started by an administrator](https://support.zoom.us/hc/en-us/articles/204726885-Screen-Share-Using-Airplay-Mirroring#h_a342ad38-4e46-47a8-a1d9-cded3b144b39) rather than always being available.
             */
            start_airplay_manually?: boolean;
            /**
             * Integrate with Skype for Business, GoToMeeting, or WebEx and show the meeting dial-in button on the meeting list tab for Zoom Rooms Controllers.
             */
            support_join_3rd_party_meeting?: boolean;
            /**
             * If enabled, all meetings in this room will be treated as [private meetings](https://support.zoom.us/hc/en-us/articles/115001051063-Zoom-Rooms-Private-Meetings), and the Zoom Room will display "Your Name's Meeting" instead of the real meeting topic.
             */
            transform_meeting_to_private?: boolean;
            /**
             * If enabled, a reminder will display 10 minutes prior to the next scheduled meeting on the controller.
             */
            upcoming_meeting_alert?: boolean;
            /**
             * [Restart](https://support.zoom.us/hc/en-us/articles/205418949-Zoom-Rooms-Weekly-System-Restart) the Zoom Rooms computer and controller once a week.
             */
            weekly_system_restart?: boolean;
          };
        }
      | {
          /**
           * The Client Alert Settings section includes alerts that display on the TV screen of the Zoom Room. Disable these settings if you have deliberately disconnected one or more peripheral devices or have never enabled them.
           */
          client_alert?: {
            /**
             * Display an alert message when an issue is detected with a bluetooth microphone.
             */
            detect_bluetooth_microphone_error_alert?: boolean;
            /**
             * Display an alert message when an issue is detected with a bluetooth speaker.
             */
            detect_bluetooth_speaker_error_alert?: boolean;
            /**
             * Display an alert message when an issue is detected with a camera.
             */
            detect_camera_error_alert?: boolean;
            /**
             * Display an alert message when an issue is detected with microphone.
             */
            detect_microphone_error_alert?: boolean;
            /**
             * Display an alert message when an issue is detected with a speaker.
             */
            detect_speaker_error_alert?: boolean;
          };
          digital_signage?: {
            banner?: {
              banner_room_name?: boolean;
              banner_sharing_key?: boolean;
              banner_time?: boolean;
            };
            /**
             * Display period object lets you define the number of minutes before or after the scheduled meeting time you would like the content to display.
             */
            display_period?: {
              /**
               * Start displaying digital signage content after certain duration after the meeting ends. Specify the value of the duration in minutes in this field.
               */
              start_displaying_content?: number;
              /**
               * Stop displaying content {certain_duration} before a meeting is scheduled to begin. Specify the value of duration in minutes in this field.
               */
              stop_displaying_content?: number;
            };
            /**
             * [Enable or disable digital signage](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage#h_767fbb33-82a8-45a8-8392-a1bfa9687edd). <br>
             * `true`: enable<br> `false`: disable
             */
            enable_digital_signage?: boolean;
            /**
             * Set the [layout](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage#h_4e25ddf3-8f97-4957-8f8b-99725f940fa7). The value of this field can be either `standard` or `video_content`.
             *
             * `standard`: Standard Center<br>
             * `video_content`: Video + Content
             */
            layout?: string;
            /**
             * Sound of all contents will be muted if the value of this field is set to `true`.
             */
            mute?: boolean;
            /**
             * Content list.
             */
            play_list?: Array<{
              /**
               * Specify an action for the content list. The value can be one of the following:<br>
               * `add`: Add another content list.<br>
               * `update`: Update existing content list.<br>
               * `delete`: Delete content list.
               *
               */
              action?: 'add' | 'update' | 'delete';
              contents?: Array<{
                /**
                 * Specify an action for the content in the content list. The value can be one of the following:<br>
                 * `add`: Add another content to the content list.<br>
                 * `update`: Update existing content's information in the content list.<br>
                 * `delete`: Delete content from the content list.
                 *
                 *
                 */
                action?: string;
                /**
                 * Content Id.
                 */
                content_id?: string;
                /**
                 * By default each content is display for 5 seconds. Using this field, specify how long you would like to display the content.
                 */
                duration?: number;
                /**
                 * Unique identifier of the content. This field is only required if you would like to remove or update the content information.
                 */
                id?: string;
                /**
                 * Name of the content.
                 */
                name?: string;
                /**
                 * Order of the content in the display.
                 */
                order?: number;
              }>;
              /**
               * Specify the display end time for the content list in GMT.
               */
              end_time?: string;
              /**
               * Unique identifier of the content list. This field is only required if you would like to remove or update the content list.
               */
              id?: string;
              /**
               * Name of the content list.
               */
              name?: string;
              /**
               * Specify the display start time for the content list in GMT.
               */
              start_time?: string;
            }>;
          };
          /**
           * [Notifications Settings](https://support.zoom.us/hc/en-us/articles/205394099-Zoom-Room-Alerts#h_b430b5f2-5150-4522-9c96-c77f22ab70bc) includes the circumstances in which the room sends an email alert to the support team to notify them of a potentially urgent issue. These issues can affect the operation of the room, but do not display on the TV screen. The email alert is sent to the email address specified in the Notification Email Recipients section.
           */
          notification?: {
            /**
             * Send an alert when the audio echo test result meets usability threshold.
             */
            audio_meet_usability_threshold?: boolean;
            /**
             * Send an alert when the audio echo test result does not meet usability threshold.
             */
            audio_not_meet_usability_threshold?: boolean;
            /**
             * Send an alert when the battery starts charging.
             */
            battery_is_charging?: boolean;
            /**
             * Send an alert when the battery of the controller or the scheduling display is low (at 20%) and is not being charged.
             */
            battery_low_and_not_charging?: boolean;
            /**
             * Specify a percentage so that an alert is sent when the battery is less than the {battery_percentage} that you specified.
             */
            battery_percentage?: string;
            /**
             * Send an alert when the connection to the Controller or Scheduling Display cannot be detected.
             */
            controller_scheduling_disconnected?: boolean;
            /**
             * Send an alert when the Controller or Scheduling Display can be detected again.
             */
            controller_scheduling_reconnected?: boolean;
            /**
             * Send an alert when CPU usage is above 90%.
             */
            cpu_usage_high_detected?: boolean;
            /**
             * Send an alert when the mic, speaker or camera is disconnected in the Zoom Room.
             */
            mic_speaker_camera_disconnected?: boolean;
            /**
             * Send an alert when the mic, speaker or camera is reconnected.
             */
            mic_speaker_camera_reconnected?: boolean;
            /**
             * Send an alert when the network is stable.
             */
            network_stable_detected?: boolean;
            /**
             * Send an alert when low bandwidth network is detected
             */
            network_unstable_detected?: boolean;
            /**
             * Send an alert when SIP registration stops working.
             */
            sip_registration_failed?: boolean;
            /**
             * Send an alert after the SIP registration is re-enabled.
             */
            sip_registration_re_enabled?: boolean;
            /**
             * Send an alert when the Zoom Room is online after previously being offline.
             */
            zoom_room_come_back_online?: boolean;
            /**
             * Send an alert when the TV display is disconnected
             */
            zoom_room_display_disconnected?: boolean;
            /**
             * Send an alert when the machine hosting the Zoom Room application has a network issue or cannot connect with the Controller.
             */
            zoom_room_offline?: boolean;
          };
        };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/rooms/account_settings',
      query: {
        setting_type: settingType,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br><br>
         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
        Access restricted.`,
      },
    });
  }
}
