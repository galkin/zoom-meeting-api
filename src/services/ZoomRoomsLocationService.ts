/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoomRoomsLocationService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List Zoom Room locations
   * A Zoom account owner or a Zoom Room administrator can establish a [location hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) to help manage Zoom Rooms that are spread among a variety of locations. Use this API to list the different location types used for Zoom Rooms in an account.<br><br>
   * **Prerequisites:**
   * * Account owner or admin permissions.
   * * Zoom Rooms Version 4.0 or higher<br><br>
   * **Scopes:** `room:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Zoom Room locations listed successfully.
   *
   * @throws ApiError
   */
  public listZrLocations({
    parentLocationId,
    type,
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * A unique identifier of the parent location. For instance, if a Zoom Room is located in Floor 1 of Building A, the location of Building A will be the parent location of Floor 1. Use this parameter to filter the response by a specific location hierarchy level.
     */
    parentLocationId?: string;
    /**
     * Use this field to filter the response by the type of location. The value can be one of the following:
     * `country`, `states`, `city`, `campus`, `building`, `floor`.
     */
    type?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    /**
     * Information about the Zoom Room locations.
     */
    locations?: Array<{
      /**
       * The location's unique ID.
       */
      id?: string;
      /**
       * Name of the location.
       */
      name?: string;
      /**
       * The parent location's unique ID. For example, if a Zoom Room is located in Floor 1 of Building A, the location of Building A will be the parent location of Floor 1 and the `parent_location_id` of Floor 1 will be the ID of Building A.
       *
       * The value of `parent_location_id` of the top-level location (`country`) is the Zoom account's ID.
       */
      parent_location_id?: string;
      /**
       * The type of location:
       * * `country`
       * * `states`
       * * `city`
       * * `campus`
       * * `building`
       * * `floor`
       */
      type?: 'country' | 'states' | 'city' | 'campus' | 'building' | 'floor';
    }>;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of records returned with a single API call.
     */
    page_size?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/locations',
      query: {
        parent_location_id: parentLocationId,
        type: type,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>

         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
         **Error Code:** \`300\`<br>
        Location type not exist.<br>
        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>

         **Error Code:** \`4801\`<br>
        Location not found:{parent_location_id}.`,
      },
    });
  }

  /**
   * Add a location
   * Add a location to the [location hierarchial structure(s)](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) of Zoom Rooms in an account.
   *
   * **Prerequisites:**
   * * Account owner or admin permissions.
   * * Zoom Rooms Version 4.0 or higher<br><br>
   * **Scopes:** `room:write:admin`<br>
   *
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Location added successfully.
   * @throws ApiError
   */
  public addAzrLocation({
    requestBody,
  }: {
    requestBody?: {
      /**
       * Name of the location. The name must be unique and shouldn't have already been used in the same account.
       */
      name?: string;
      /**
       * The location ID of the location that is a level higher from the location that is being added.<br><br> For example, to add a City named "City 1" as the child location under a State named "State 1", you must provide the location ID of "State 1". This can be retrieved using the [**List Zoom Room locations**](/docs/api-reference/zoom-api/methods#operation/listZRLocations) API.
       */
      parent_location_id?: string;
    };
  }): CancelablePromise<{
    /**
     * Location ID: Unique Identifier of the location that was added.
     */
    id?: string;
    /**
     * Name of the location.
     */
    name?: string;
    /**
     * Unique Identifier of the parent location.
     */
    parent_location_id?: string;
    /**
     * Type of location. The value should be one of the following:<br>
     * `country`, `states`, `city`, `campus`, `building`, `floor`.
     */
    type?: 'country' | 'states' | 'city' | 'campus' | 'building' | 'floor';
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/rooms/locations',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br><br>
         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br><br>
         **Error Code:** \`300\`<br>
        Location name already exists. Try a different location name.<br>
        Invalid parent location id {parent_location_id}
        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`4801\`<br>
        Location not exist {parent_location_id}`,
      },
    });
  }

  /**
   * Get Zoom Room location structure
   * Get the [location hierarchial structure(s)](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) applied on the Zoom Rooms in an account.<br><br>
   * **Prerequisites:**<br>
   * * Zoom Rooms version 4.0 or higher
   * * Account owner or admin permissions<br>
   * **Scopes:** `room:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Zoom Rooms location structure returned successfully.<br>
   *
   * @throws ApiError
   */
  public getZrLocationStructure(): CancelablePromise<{
    /**
     * Hierarchial structure array of the Zoom Rooms location.
     */
    structures?: Array<string>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/locations/structure',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>

         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.
        `,
      },
    });
  }

  /**
   * Update Zoom Rooms location structure
   * Update the [location hierarchial structure(s)](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) applied on the Zoom Rooms in an account.<br><br>
   * **Prerequisites:**<br>
   * * Zoom Rooms version 4.0 or higher
   * * Account owner or admin permissions<br>
   * **Scopes:** `room:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public updateZoomRoomsLocationStructure({
    requestBody,
  }: {
    requestBody?: {
      /**
       * Location Structure. The value can be either one or a combination of the following strings separated by comma:
       * `country`, `state`, `city`, `campus`, `building`, `floor`
       */
      structures?: Array<string>;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/rooms/locations/structure',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`2100\`<br>
        This sub account has no sip trunk plan`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`2001\` This account does not exist or does not belong to this master account.<br>This account does not exist or does not belong to you.`,
      },
    });
  }

  /**
   * Get Zoom Room location profile
   * Each location type of the [Zoom Rooms location hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) has a profile page that includes information such as name of the location, address, support email, etc. Use this API to retrieve information about a specific Zoom Rooms location type such as information about the city where the Zoom Rooms is located.
   *
   * **Prerequisite:**<br>
   * * Account owner or admin permission
   * * Zoom Rooms version 4.0 or higher<br>
   * **Scopes:** `room:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Zoom Rooms Location Profile returned successfully.
   * @throws ApiError
   */
  public getZrLocationProfile({
    locationId,
  }: {
    /**
     * Unique identifier of the location type. This can be retrieved using the [**List Zoom Room locations**](/docs/api-reference/zoom-api/methods#operation/listZRLocations) API (Id property in the response).
     */
    locationId: string;
  }): CancelablePromise<{
    basic?: {
      /**
       * Address
       */
      address?: string;
      /**
       * Description about the location.
       */
      'description '?: string;
      /**
       * Name of the location type.
       */
      name?: string;
      /**
       * Require code to exit out of your Zoom Rooms application to switch between other apps.
       *
       */
      required_code_to_ext?: boolean;
      /**
       * 1-16 digit number or characters that is used to secure your Zoom Rooms application.
       */
      room_passcode?: string;
      /**
       * The email address to be used for reporting Zoom Room issues.
       *
       */
      support_email?: string;
      /**
       * The phone number to be used for reporting Zoom Room issues.
       *
       */
      support_phone?: string;
      /**
       * Timezone (only returned for location type - city).
       */
      timezone?: string;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/locations/{locationId}',
      path: {
        locationId: locationId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
        Access restricted.<br>





        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
         **Error Code:** \`4801\`<br>
        Location not found: {locationId}.`,
      },
    });
  }

  /**
   * Update Zoom Room location profile
   * Each location type of the [Zoom Rooms location hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) has a profile page that includes information such as name of the location, address, support email, etc. Use this API to update information about a specific Zoom Rooms location type such as information about the city where the Zoom Rooms is located.
   *
   * **Prerequisite:**<br>
   * * Account owner or admin permission
   * * Zoom Rooms version 4.0 or higher<br>
   * **Scopes:** `room:write:admin`<br>
   *
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any OK
   * @throws ApiError
   */
  public updateZrLocationProfile({
    locationId,
    requestBody,
  }: {
    /**
     * Unique Identifier of the location. This can be retrieved from the [**List Zoom Room locations**](/docs/api-reference/zoom-api/methods#operation/listZRLocations) API.
     */
    locationId: string;
    requestBody?: {
      basic?: {
        /**
         * Address. Can only be updated for Campus and Building.
         */
        address?: string;
        /**
         * Description about the location.
         */
        'description '?: string;
        /**
         * Name of the location type.
         */
        name?: string;
        /**
         * Require code to exit out of your Zoom Rooms application to switch between other apps.
         *
         */
        required_code_to_ext?: boolean;
        /**
         * 1-16 digit number or characters that is used to secure your Zoom Rooms application.
         */
        room_passcode?: string;
        /**
         * The email address to be used for reporting Zoom Room issues.
         *
         */
        support_email?: string;
        /**
         * The phone number to be used for reporting Zoom Room issues.
         *
         */
        support_phone?: string;
        /**
         * Timezone (can only be updated for location type - city).
         */
        timezone?: string;
      };
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/rooms/locations/{locationId}',
      path: {
        locationId: locationId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Change the assigned parent location
   * An account owner of a Zoom account can establish a [Zoom Rooms Location Hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) to better organize Zoom Rooms spread across various locations. The location can be structured in a hierarchy with Country being the top-level location, followed by city, campus, building, and floor. The location in the lower level in the hierarchy is considered as a child of the location that is a level above in the hierarchy. Use this API to change the parent location of a child location. <br><br> For instance, if the location hierarchy is structured in a way where there are two campuses (Campus 1, and Campus 2) in a City and Campus 1 consists of a building named Building 1 with a floor where Zoom Rooms are located, and you would like to rearrange the structure so that Building 1 along with its child locations (floor and Zoom Rooms) are relocated directly under Campus 2 instead of Campus 1, you must provide the location ID of Building 1 in the path parameter of this request and the location ID of Campus 2 as the value of `parent_location_id` in the  request body.<br><br>
   * **Prerequisite:**<br>
   * * Account owner or admin permission
   * * Zoom Rooms version 4.0 or higher<br>
   * **Scopes:** `room:write:admin`<br><br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public changeParentLocation({
    locationId,
    requestBody,
  }: {
    locationId: string;
    requestBody?: {
      /**
       * Location ID of the new Parent Location under which you the child location will be positioned. This can be retrieved from the [**List Zoom Room locations**](/docs/api-reference/zoom-api/methods#operation/listZRLocations) API.
       */
      parent_location_id?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/rooms/locations/{locationId}/location',
      path: {
        locationId: locationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br><br>
         **Error Code:** \`200\`<br> Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
         **Error Code:** \`300\`<br> Invalid parent location id {parent_location_id}`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`4801\`<br> Location not found:{parent_location_id}.
        `,
      },
    });
  }

  /**
   * Get location settings
   * Get information on meeting or alert settings applied to Zoom Rooms located in a specific location. By default, only **Meeting Settings** are returned. To view only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter.<br><br>
   * **Prerequisites:**<br>
   * * Zoom Room licenses
   * * Owner or Admin privileges on the Zoom Account.<br>
   * **Scopes:** `room:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Zoom Room location settings returned successfully.
   * @throws ApiError
   */
  public getZrLocationSettings({
    locationId,
    settingType = 'meeting',
  }: {
    /**
     * Unique identifier of the location type. This can be retrieved using the [**List Zoom Room locations**](/docs/api-reference/zoom-api/methods#operation/listZRLocations) (Id property in the response).
     */
    locationId: string;
    /**
     * The type of setting that you would like to retrieve.<br> `alert`: Alert Settings applied on the Zoom Rooms Account.<br>
     * `meeting`: Meeting settings of the Zoom Rooms Account.<br>
     * `signage`: Digital signage settings of the Zoom Rooms Account.
     */
    settingType?: string;
  }): CancelablePromise<
    | {
        meeting_security?: {
          /**
           * Specifies whether enhanced encryption or [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) is being used when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
           * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
           *
           * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
           */
          encryption_type?: 'enhanced_encryption' | 'e2ee';
          /**
           * Allows use of end-to-end encryption for meetings. If set to `true`, the encryption type is specified in `encryption_type` field.
           */
          end_to_end_encrypted_meetings?: boolean;
        };
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
           * Automatically accept incoming calls made from other Zoom Rooms or contacts in your account. Enabling this setting will also automatically allow far-end camera control.
           *
           * This setting is returned only for location type - "country".
           */
          auto_accept_incoming_call_and_fecc?: boolean;
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
           * Encrypt screen and content shared in meetings.
           */
          encrypt_shared_screen_content?: boolean;
          /**
           * If enabled, the meeting host and meeting ID (in addition to the meeting topic) are hidden from the Zoom Rooms display for private meetings. This affects meetings that were originally scheduled as private, as well as public meetings that were transformed to private.
           */
          hide_id_for_private_meeting?: boolean;
          /**
           * If enabled, you will not see your own video but other people in the meeting can still see your video.
           *
           * This setting is returned only for location type - "country".
           */
          hide_self_view?: boolean;
          /**
           * Lock speaker volume control on controller.
           *
           * This setting is returned only for location type - "country".
           */
          lock_speaker_volume_control?: boolean;
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
           * Disable automatic detection and enable manual content sharing from a device to a Zoom Room. Learn more [here](https://support.zoom.us/hc/en-us/articles/201504265-Wired-HDMI-Screen-Share-via-Capture-Device).
           *
           * This setting is returned only for location type - "country".
           */
          start_hdmi_content_share_manualy?: boolean;
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
           * Enable [voice commands](https://support.zoom.us/hc/en-us/articles/115000527983-Voice-Command-with-Zoom-Rooms) with Zoom Rooms.
           */
          voice_commands?: boolean;
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
      url: '/rooms/locations/{locationId}/settings',
      path: {
        locationId: locationId,
      },
      query: {
        setting_type: settingType,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>

         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
        Access Restricted.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>

         **Error Code:** \`4801\`<br>
        Location not found: {locationId}

        `,
      },
    });
  }

  /**
   * Update location settings
   * Update information on either meeting or alert settings applied to Zoom Rooms located in a specific location. To update **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter. Similarly, to update **Meeting Settings**, specify `meeting` as the value of the `setting_type` query parameter.<br><br>
   * **Prerequisites:**<br>
   * * Zoom Room licenses
   * * Owner or Admin privileges on the Zoom Account.<br>
   * **Scopes:** `room:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public updateZrLocationSettings({
    locationId,
    settingType = 'meeting',
    requestBody,
  }: {
    /**
     * Unique identifier of the location type. This can be retrieved using the [**List Zoom Room locations**](/docs/api-reference/zoom-api/methods#operation/listZRLocations) (Id property in the response).
     */
    locationId: string;
    /**
     * The type of setting that you would like to update.<br> `alert`: Alert Settings applied on the Zoom Rooms Account.<br>
     * `meeting`: Meeting settings of the Zoom Rooms Account.<br>
     * `signage`: Digital signage settings.
     */
    settingType?: string;
    requestBody?:
      | {
          meeting_security?: {
            /**
             * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
             * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
             *
             * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
             */
            encryption_type?: 'enhanced_encryption' | 'e2ee';
            /**
             * Allow use of end-to-end encryption for meetings. If set to `true`, you can specify the encryption type in `encryption_type` field.
             */
            end_to_end_encrypted_meetings?: boolean;
          };
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
             * Automatically accept incoming calls made from other Zoom Rooms or contacts in your account. Enabling this setting will also automatically allow far-end camera control.
             *
             * This setting is returned only for location type - "country".
             */
            auto_accept_incoming_call_and_fecc?: boolean;
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
             * Encrypt screen and content shared in meetings.
             */
            encrypt_shared_screen_content?: boolean;
            /**
             * If enabled, the meeting host and meeting ID (in addition to the meeting topic) are hidden from the Zoom Rooms display for private meetings. This affects meetings that were originally scheduled as private, as well as public meetings that were transformed to private.
             */
            hide_id_for_private_meeting?: boolean;
            /**
             * If enabled, you will not see your own video but other people in the meeting can still see your video.
             *
             * This setting is returned only for location type - "country".
             */
            hide_self_view?: boolean;
            /**
             * Lock speaker volume control on controller.
             *
             * This setting is returned only for location type - "country".
             */
            lock_speaker_volume_control?: boolean;
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
             * Disable automatic detection and enable manual content sharing from a device to a Zoom Room. Learn more [here](https://support.zoom.us/hc/en-us/articles/201504265-Wired-HDMI-Screen-Share-via-Capture-Device).
             *
             * This setting is returned only for location type - "country".
             */
            start_hdmi_content_share_manualy?: boolean;
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
             * Enable [voice commands](https://support.zoom.us/hc/en-us/articles/115000527983-Voice-Command-with-Zoom-Rooms) with Zoom Rooms.
             */
            voice_commands?: boolean;
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
      url: '/rooms/locations/{locationId}/settings',
      path: {
        locationId: locationId,
      },
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
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`4801\`<br>
        Location not found: {locationId}`,
      },
    });
  }
}
