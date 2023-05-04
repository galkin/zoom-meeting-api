/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoomRoomsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List Zoom Rooms
   * Zoom Rooms is a software-based room system that provides an integrated experience for audio conferencing, wireless screen sharing and video conferencing. Use this API to list all the existing [Zoom Rooms](https://support.zoom.us/hc/en-us/articles/207483343-Getting-Started-with-Zoom-Rooms) in a Zoom account.<br><br>
   * **Prerequisites:**<br>
   * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
   * **Scopes**: `room:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200`<br>
   * A list of Zoom Rooms returned successfully.
   * @throws ApiError
   */
  public listZoomRooms({
    status,
    type,
    unassignedRooms = false,
    pageSize = 30,
    nextPageToken,
    locationId,
    queryName,
  }: {
    /**
     * The status of the Zoom Room.
     */
    status?: 'Offline' | 'Available' | 'InMeeting' | 'UnderConstruction';
    /**
     * Type of the Zoom Rooms.
     */
    type?: 'Kiosk' | 'ZoomRoom' | 'StandaloneWhiteboard' | 'SchedulingDisplayOnly' | 'DigitalSignageOnly';
    /**
     * Use this query parameter with a value of `true` if you would like to see Zoom Rooms in your account that have not been assigned to anyone yet.
     */
    unassignedRooms?: boolean;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Parent location ID of the Zoom Room.
     */
    locationId?: string;
    /**
     * The name of a Zoom Room. If you do not call this parameter, the API will return all of the account's Zoom Rooms.
     */
    queryName?: string;
  }): CancelablePromise<{
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of records returned within a single API call.
     */
    page_size?: number;
    /**
     * List of existing Zoom Rooms.
     */
    rooms?: Array<{
      /**
       * Activation Code is the code that is used to complete the setup of the Zoom Room.
       */
      activation_code?: string;
      /**
       * Unique Identifier of the Zoom Room.
       */
      id?: string;
      /**
       * Unique Identifier of the [location](/docs/api-reference/zoom-api/methods#operation/listZRLocations) of the room.
       */
      location_id?: string;
      /**
       * Name of the Zoom Room.
       */
      name?: string;
      /**
       * Globally unique identifier of the Zoom Room. Use this ID for the **Dashboard Zoom Room APIs**.
       */
      room_id?: string;
      /**
       * Status of the Zoom Room.
       */
      status?: 'Offline' | 'Available' | 'InMeeting' | 'UnderConstruction';
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms',
      query: {
        status: status,
        type: type,
        unassigned_rooms: unassignedRooms,
        page_size: pageSize,
        next_page_token: nextPageToken,
        location_id: locationId,
        query_name: queryName,
      },
    });
  }

  /**
   * Add a Zoom Room
   * Use this API to [add a Zoom Room](https://support.zoom.us/hc/en-us/articles/202822279-Add-Zoom-Rooms-on-Web-Portal) to a Zoom account.<br><br>
   * **Prerequisites:**<br>
   * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
   * **Scopes**: `room:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `201` **Created**<br>
   * Zoom Room added successfully.
   * @throws ApiError
   */
  public addARoom({
    requestBody,
  }: {
    requestBody?: {
      /**
       * **Optional**<br>Location ID of the lowest level location in the [location hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) where the Zoom Room is to be added. For instance if the structure of the location hierarchy is set up as “country, states, city, campus, building, floor”, a room can only be added under the floor level location.
       *
       * This ID can be retrieved from the [**List Zoom Room locations**](/docs/api-reference/zoom-api/methods#operation/listZRLocations) API.
       */
      location_id?: string;
      /**
       * Name of the Zoom Room.
       */
      name: string;
      /**
       * Type of the Zoom Room.
       */
      type: 'Kiosk' | 'ZoomRoom' | 'StandaloneWhiteboard' | 'SchedulingDisplayOnly' | 'DigitalSignageOnly';
      /**
       * The calendar resource's ID.
       */
      calendar_resource_id?: string;
    };
  }): CancelablePromise<{
    /**
     * Unique Identifier of the Zoom Room.
     */
    id?: string;
    /**
     * Location ID of the location where the Zoom Room was added.
     */
    location_id?: string;
    /**
     * Name of the Zoom Room.
     */
    name?: string;
    /**
     * Globally unique identifier of the Zoom Room. Use this ID for the **Dashboard Zoom Room APIs**.
     */
    room_id?: string;
    /**
     * Type of the Zoom Room.
     */
    type?: 'Kiosk' | 'ZoomRoom' | 'StandaloneWhiteboard' | 'SchedulingDisplayOnly' | 'DigitalSignageOnly';
    /**
     * The calendar resource's ID.
     */
    calendar_resource_id?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/rooms',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br><br>
         **Error Code:** \`200\`<br> Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
        At least one normal Zoom Rooms required.<br><br>
         **Error Code:** \`300\`<br>
        Invalid parent location id {location_id}.<br>

        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>

         **Error Code:** \`4801\`<br>
        Location not found:{location_id}.<br><br>
         **Error Code:** \`4060\`<br>
        Calendar resource does not exist: {resourceId}.`,
      },
    });
  }

  /**
   * List digital signage contents
   * Use this API to return information about a Zoom account's [Zoom Rooms digital signage content](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage). You can also view this content in the **Room Management** section's [**Digital Signage Content**](https://zoom.us/digitalsignage#/) tab in the Zoom web portal.
   *
   * **Scopes:** `room:read:admin`
   *
   * **Prerequisites:**
   * * A Pro or a higher account with Zoom Rooms.
   * * Existing content in the **Digital Signage Content** tab.
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * List returned.
   * @throws ApiError
   */
  public listDigitalSignageContent({
    type,
    folderId,
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * Specify the type of digital signage resource. The value can be one of the following:
     * * `content`: Returns information about content files.
     * * `folder`: Returns information about the folder where the content files are located.
     */
    type?: string;
    /**
     * Unique identifier of the folder where the content is located. Provide this field if you would like to filter the response by contents that are only available in a specific folder.
     */
    folderId?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    contents?: Array<{
      /**
       * Unique identifier of the content or the folder.
       */
      id?: string;
      /**
       * Name of the content file or the folder.
       */
      name?: string;
    }>;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of records returned within a single API call.
     */
    page_size?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/digital_signage',
      query: {
        type: type,
        folder_id: folderId,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         * Zoom Room subscription was not found. Try again after purchasing a Zoom Room subscription.
         * Access restricted.`,
      },
    });
  }

  /**
   * Update E911 digital signage
   * Display or hide E911 emergency alert text content from [Zoom Rooms digital signage](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage).
   *
   * **Scope:** `room:write:admin`
   *
   * **Prerequisites:**<br>
   * * [Zoom Rooms](https://zoom.us/zoomrooms/software) 5.3.0 or higher
   * * Zoom Rooms digital signage must be [enabled](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-Digital-Signage#h_767fbb33-82a8-45a8-8392-a1bfa9687edd)
   *
   * @returns any **HTTP Status Code:** `202` <br>
   * @throws ApiError
   */
  public manageE911Signage({
    requestBody,
  }: {
    requestBody?:
      | {
          /**
           * To display the emergency content on the Zoom Rooms digital signage display, set the value of this field to be `zoomroom.emergency_alert_displayed`.
           */
          method?: 'zoomroom.emergency_alert_displayed';
          params?: {
            /**
             * Provide the content to be displayed.
             */
            content?: string;
            /**
             * Provide one of the following IDs associated with the Zoom Room.<br>
             *
             * * `accountId`: Account ID of the Zoom account.<br> Provide account ID as the value of this field to display the alert content on all Zoom Rooms' displays in the account.<br><br>
             * * `locationId`: Location ID. Get the value of this field by calling the [**List Zoom Rooms locations**](/docs/api-reference/zoom-api/methods#operation/listZRLocations) API.
             * Provide location ID as the value of this field to display the alert content on all Zoom Rooms' displays listed in the specified location.<br><br>
             * * `roomId`: Unique identifier of the Zoom Room. Get the value of this field by calling the [**List Zoom Rooms**](/docs/api-reference/zoom-api/methods#operation/listZoomRooms) API. Provide room ID as the value of this field to display the alert content on a specific Zoom Rooms' display.
             */
            target_ids?: Array<string>;
            /**
             * Provide one of the following values for this field that is associated to the value you entered in the `target_ids` field. <br>
             * * `account`
             * * `location`
             * * `room`
             */
            target_type?: 'account' | 'location' | 'room';
          };
        }
      | {
          /**
           * To remove the emergency content from the Zoom Rooms digital signage display, set the value of this field to be `zoomroom.emergency_alert_removed`.
           */
          method?: 'zoomroom.emergency_alert_removed';
          params?: {
            /**
             * Unique identifier of the event.
             */
            event_id?: string;
            /**
             * Provide one of the following IDs associated with the Zoom Room.<br>
             *
             * * `accountId`: Account ID of the Zoom account.<br> Provide account ID as the value of this field to remove the alert content from all Zoom Rooms' displays in the account.<br><br>
             * * `locationId`: Location ID. Get the value of this field by calling the [**List Zoom Rooms locations**](/docs/api-reference/zoom-api/methods#operation/listZRLocations) API.
             * Provide location ID as the value of this field to remove the alert content from all Zoom Rooms' displays listed in the specified location.<br><br>
             * * `roomId`: Unique identifier of the Zoom Room. Get the value of this field by calling the [**List Zoom Rooms**](/docs/api-reference/zoom-api/methods#operation/listZoomRooms) API. Provide room ID as the value of this field to remove the alert content from a specific Zoom Rooms' display.
             */
            target_ids?: Array<string>;
            /**
             * Provide one of the following values for this field that is associated to the value you entered in the `target_ids` field. <br>
             * * `account`
             * * `location`
             * * `room`
             */
            target_type?: 'account' | 'location' | 'room';
          };
        };
  }): CancelablePromise<{
    /**
     * Unique identifier of the event related to the content being displayed. This field is only returned if you provided `zoomroom.emergency_alert_displayed` as the value of the `method` parameter.
     *
     * Save this response value and provide it as the value of the `event_id` request parameter when you need to remove the alert content using `zoomroom.emergency_alert_removed` method.
     */
    event_id?: string;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/rooms/events',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>

         **Error Code:** \`200\` <br> Access restricted. <br><br>
         **Error Code:** \`300\`
        Event id is required.<br>
        Invalid value submitted for Target Ids. Provide a valid Target Id associated with the Target type.`,
      },
    });
  }

  /**
   * Use Zoom Room controls
   * This Zoom Rooms API let you control [Zoom Rooms](https://support.zoom.us/hc/en-us/articles/207483343). This API let your app return information such as your account's Zoom Rooms and manage meetings and contacts.
   *
   * **Prerequisites:**
   * * [Zoom Rooms](https://support.zoom.us/hc/en-us/articles/207483343-Getting-started-with-Zoom-Rooms#:~:text=Zoom%20Rooms%20is%20a%20software,or%20from%20their%20mobile%20device) must have been set up for use for the account and must be online.
   * * You must have access to the Calendar Integration APIs (either Microsoft Exchange or Google Calendar APIs) to get calendar information associated with the Room.
   *
   * **Scope:** `room:write:admin`
   * @returns any **HTTP Status Code:** `202` **Accepted**<br>
   * Request processed successfully.
   * @throws ApiError
   */
  public zoomRoomsControls({
    id,
    requestBody,
  }: {
    /**
     * Room ID
     */
    id: string;
    requestBody: {
      /**
       * The method that you would like to control.
       */
      method?:
        | 'zoomroom.check_in'
        | 'zoomroom.check_out'
        | 'zoomroom.mute'
        | 'zoomroom.unmute'
        | 'zoomroom.meeting_accept'
        | 'zoomroom.meeting_decline'
        | 'zoomroom.restart'
        | 'zoomroom.meeting_leave'
        | 'zoomroom.meeting_join'
        | 'zoomroom.meeting_invite'
        | 'zoomroom.meeting_cancel'
        | 'zoomroom.meeting_end';
      params?: {
        /**
         * This field applies to the 'zoomroom.check_in' and 'zoomroom.check_out' methods. This field is only required if Google Calendar is being used for the event associated with the Zoom Room. The value for this field can be retrieved by calling Google's [CalendarList:list API](https://developers.google.com/calendar/v3/reference/events/list) and referring to the "id" field included in the [calendarList resource](https://developers.google.com/calendar/v3/reference/calendarList#resource).
         *
         *
         */
        calendar_id?: string;
        /**
         * This field applies to the 'zoomroom.check_in' and 'zoomroom.check_out' methods. This field is required only for Microsoft Exchange or Office 365  calendar. The change key represents the specific version of the calendar item and can be retrieved by using Microsoft's [FindItem Operation](https://docs.microsoft.com/en-us/exchange/client-developer/web-service-reference/finditem-operation) and referring to the ChangeKey field of the ItemId Element included in the operation response.<br>
         */
        change_key?: string;
        /**
         * This field applies to the 'zoomroom.check_in' and 'zoomroom.check_out' methods and is required. Unique Identifier of the calendar event associated with the Zoom Room.<br><br>If the calendar integration being used is Microsoft Exchange, the value for this field can be retrieved by using Microsoft's [FindItem Operation](https://docs.microsoft.com/en-us/exchange/client-developer/web-service-reference/finditem-operation) and referring to the Id field of the ItemId Element included in the operation response.<br><br>If the Google calendar integration was used for this event, the event_id can be retrieved by calling Google's [Events:list API](https://developers.google.com/calendar/v3/reference/events/list) and referring to the "id" field included in the [events resource](https://developers.google.com/calendar/v3/reference/events#resource).
         *
         *
         */
        event_id?: string;
        /**
         * This field applies to the 'zoomroom.check_in' and 'zoomroom.check_out' methods. This field is only required for Microsoft Exchange / Office 365 Calendar. It is the [resource mailbox](https://support.microsoft.com/en-us/help/10063/creating-and-managing-resource-mailboxes-in-office-365) associated with the calendar.
         */
        resource_email?: string;
        /**
         * This field applies to the 'zoomroom.meeting_join' method and is required. The meeting's number. If the value of this field is provided, join the meeting. If the value of this field is not provided, start an [instant meeting](https://support.zoom.us/hc/en-us/articles/201362533-Instant-meetings-vs-scheduled-meetings).
         */
        meeting_number?: string;
        /**
         * This field applies to the 'zoomroom.meeting_join' method. The passcode to join the meeting.
         */
        passcode?: string;
        /**
         * This field applies to the 'zoomroom.meeting_join' method. Whether to force a user to immediately join the meeting. If true, this forces the user to leave any current meetings and immediately join the meeting passed in the meeting_number value.
         */
        force_accept?: boolean;
        /**
         * This field applies to the 'zoomroom.meeting_join' method and is required. A comma-separated list of callee user IDs, up to a maximum of 10 callees.
         */
        user_ids?: Array<string>;
        /**
         * This field applies to the 'zoomroom.meeting_cancel' method and is required. The meeting's topic, up to 200 characters.
         */
        meeting_topic?: string;
        /**
         * This field applies to the 'zoomroom.meeting_cancel' method and is required. The meeting's start time, in ISO date-time format. You can use time in 0 timezone, if you use this value with timezone, you must pass the timezone field.
         */
        start_time?: string;
        /**
         * This field applies to the 'zoomroom.meeting_cancel' method and is required. The scheduled meeting duration, in minutes.
         */
        duration?: number;
        /**
         * This field applies to the 'zoomroom.meeting_cancel' method. The meeting's [timezone](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists/#timezones). This parameter is optional if the 'start_time' value includes a timezone offset.
         */
        timezone?: string;
      };
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/rooms/{id}/events',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`300\`<br>
         * Zoom Room is offline. Please ensure that the Zoom Room is online before checking in or checking out.
         * Invalid parameters.


        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
         **Error Code:** \`1012\` <br>
        Room does not exist: {roomId}.


        `,
      },
    });
  }

  /**
   * Delete a Zoom Room
   * [Remove](https://support.zoom.us/hc/en-us/articles/360033432032-Zoom-Room-Device-Profiles#h_e55b2092-c418-4b02-819f-44de51448900) a specific Zoom Room profile from a Zoom account.<br><br>
   * **Prerequisites:**<br>
   * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
   * **Scopes**: `room:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public deleteAZoomRoom({
    roomId,
  }: {
    /**
     * Unique Identifier of a Zoom Room.
     */
    roomId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/rooms/{roomId}',
      path: {
        roomId: roomId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br><br>
         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
        Access restricted.<br>



        `,
        404: `**HTTP Status Code:** \`404\` **Not Found** <br><br>
         **Error Code:** \`1012\`<br>
        Room not found:{roomId}`,
      },
    });
  }

  /**
   * Get Zoom Room profile
   *
   * Zoom Rooms is a software-based room system that provides an integrated experience for audio conferencing, wireless screen sharing and video conferencing. Use this API to get detailed information on a specific Zoom Room in a Zoom account.
   *
   * **Prerequisites:**<br>
   * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
   * **Scopes**: `room:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Zoom Room profile returned successfully.
   * @throws ApiError
   */
  public getZrProfile({
    roomId,
    regenerateActivationCode = false,
  }: {
    /**
     * Unique Identifier of the Zoom Room. This can be retrieved from the response of the [**List Zoom Rooms**](/docs/api-reference/zoom-api/methods#operation/listZoomRooms) API.
     */
    roomId: string;
    /**
     * Whether to regenerate an activation code for a Zoom Room. This value defaults to `false`.
     */
    regenerateActivationCode?: boolean;
  }): CancelablePromise<{
    basic?: {
      /**
       * Activation Code is the code that is used to complete the setup of the Zoom Room.
       */
      activation_code?: string;
      /**
       * Hide this Zoom Room from your Contact List.
       */
      hide_room_in_contacts?: boolean;
      /**
       * Name of the Zoom Room.
       */
      name?: string;
      /**
       * The short display name of the Zoom Room.
       */
      display_name?: string;
      /**
       * Require code to exit out of Zoom Rooms application to switch between other apps.
       *
       */
      required_code_to_ext?: boolean;
      /**
       * 1-16 digit number or characters that is used to secure your Zoom Rooms application. This code must be entered on your Zoom Room Controller to change settings or sign out.
       */
      room_passcode?: string;
      /**
       * The email address to be used for reporting Zoom Room issues.
       */
      support_email?: string;
      /**
       * The phone number to be used for reporting Zoom Room issues.
       *
       */
      support_phone?: string;
      /**
       * The calendar resource's ID.
       */
      calendar_resource_id?: string;
      /**
       * The room type: Kiosk, ZoomRoom,StandaloneWhiteboard, SchedulingDisplayOnly, DigitalSignageOnly
       */
      zoom_room_type?: 'Kiosk' | 'ZoomRoom' | 'StandaloneWhiteboard' | 'SchedulingDisplayOnly' | 'DigitalSignageOnly';
    };
    /**
     * Information about the device.
     */
    device?: {
      /**
       * The device's profile ID.
       */
      device_profile_id?: string;
    };
    setup?: {
      /**
       * The set up information for checking in and out of Zoom Room.
       */
      checkin_and_checkout?: {
        /**
         * Whether to enable check-in and check-out options.
         */
        enable?: boolean;
        /**
         * Check-in and check-out options subsettings.
         */
        checkin_and_checkout_options?: {
          /**
           * Allowed seconds for participants to check in prior to meeting start time.
           */
          checkin_minutes_prior_to_meeting_start_time?: number;
          /**
           * Allowed seconds before releasing a room due to no check-out or Zoom Room activity.
           */
          allowed_minutes_before_release_room_after_no_checkout?: number;
          /**
           * Notify in-room participants on the Zoom Rooms display when users check in.
           */
          enable_new_user_checkin_notification?: boolean;
          /**
           * Remove recurring meeting series from Zoom Rooms.
           */
          enable_remove_recurring?: boolean;
          /**
           * Allowed number of consecutive missed check-ins before removing the room from entire meeting series.
           */
          allowed_consecutive_missed_checkin_before_removing_room?: number;
        };
      };
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/{roomId}',
      path: {
        roomId: roomId,
      },
      query: {
        regenerate_activation_code: regenerateActivationCode,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>

         **Error Code:** \`200\`<br>
         * Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.
         * Access restricted.

        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>

         **Error Code:** \`1012\`<br>
        Room not found:{roomId}.`,
      },
    });
  }

  /**
   * Update a Zoom Room profile
   * Update basic information on a specific Zoom Room in a Zoom account.<br>
   *
   * **Prerequisites:**<br>
   * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
   * **Scopes**: `room:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public updateRoomProfile({
    roomId,
    requestBody,
  }: {
    /**
     * Unique Identifier of a Zoom Room.
     */
    roomId: string;
    requestBody?: {
      basic?: {
        /**
         * Hide this Zoom Room from your Contact List.
         */
        hide_room_in_contacts?: boolean;
        /**
         * Name of the Zoom Room.
         */
        name?: string;
        /**
         * The short display name of the Zoom Room.
         */
        display_name?: string;
        /**
         * Require code to exit out of Zoom Rooms application to switch between other apps.
         *
         */
        required_code_to_ext?: boolean;
        /**
         * 1-16 digit number or characters that is used to secure your Zoom Rooms application. This code must be entered on your Zoom Room Controller to change settings or sign out.
         */
        room_passcode?: string;
        /**
         * The email address to be used for reporting Zoom Room issues.
         */
        support_email?: string;
        /**
         * The phone number to be used for reporting Zoom Room issues.
         *
         */
        support_phone?: string;
        /**
         * The calendar resource's ID. If the value of this field is empty (`""`), the calendar resource will be removed from Zoom Room.
         */
        calendar_resource_id?: string;
        /**
         * The room type: Kiosk, ZoomRoom,StandaloneWhiteboard, SchedulingDisplayOnly, DigitalSignageOnly
         */
        zoom_room_type?: 'Kiosk' | 'ZoomRoom' | 'StandaloneWhiteboard' | 'SchedulingDisplayOnly' | 'DigitalSignageOnly';
      };
      /**
       * Information about the device.
       */
      device?: {
        /**
         * The device's profile ID.
         */
        device_profile_id?: string;
      };
      setup?: {
        /**
         * The set up information for checking in and out of Zoom Room.
         */
        checkin_and_checkout?: {
          /**
           * Whether to enable check-in and check-out options.
           */
          enable?: boolean;
          /**
           * Check-in and check-out options subsettings.
           */
          checkin_and_checkout_options?: {
            /**
             * Allowed seconds for participants to check-in prior to meeting start time.
             */
            checkin_minutes_prior_to_meeting_start_time?: number;
            /**
             * Allowed seconds before releasing room due to no check-out or Zoom Room activity.
             */
            allowed_minutes_before_release_room_after_no_checkout?: number;
            /**
             * Notify in-room participants on the Zoom Rooms display when users check in.
             */
            enable_new_user_checkin_notification?: boolean;
            /**
             * Remove recurring meeting series from Zoom Rooms.
             */
            enable_remove_recurring?: boolean;
            /**
             * Allowed number of consecutive missed check-ins before removing the room from entire meeting series.
             */
            allowed_consecutive_missed_checkin_before_removing_room?: number;
          };
        };
      };
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/rooms/{roomId}',
      path: {
        roomId: roomId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br><br>
         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
        Access restricted.<br><br>

        `,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1012\` <br>
        Zoom Room not found: {roomId}

         **Error Code:** \`8005\` <br>
        Zoom Room device profile does not exist: {roomId}.<br><br>
         **Error Code:** \`4060\`<br>
        Calendar resource does not exist: {resourceId}.`,
      },
    });
  }

  /**
   * List device profiles
   * Use this API to return a list of Zoom Room device profiles.
   *
   * **Scopes:** `room:read:admin`
   *
   * **Prerequisites:**
   * * A Pro or a higher account with Zoom Rooms.
   * @returns any **HTTP Status Code:** `200` <br>
   * Device profiles returned.
   * @throws ApiError
   */
  public getRoomProfiles({
    roomId,
  }: {
    /**
     * The Zoom Room's ID.
     */
    roomId: string;
  }): CancelablePromise<
    Array<{
      /**
       * Whether audio processing is enabled.
       */
      audio_processing?: boolean;
      /**
       * Whether microphone level auto adjust is enabled.
       */
      auto_adjust_mic_level?: boolean;
      /**
       * The camera's device ID.
       */
      camera_id?: string;
      /**
       * Whether echo cancellation is enabled.
       */
      echo_cancellation?: boolean;
      /**
       * The device's profile ID.
       */
      id?: string;
      /**
       * The microphone's device ID.
       */
      microphone_id?: string;
      /**
       * The device profile's name.
       */
      name?: string;
      /**
       * The noise suppression setting:
       * * `moderate` — Moderate noise suppression.
       * * `aggressive` — Aggressive noise suppression.
       * * `none` — Noise suppression disabled.
       */
      noise_suppression?: 'moderate' | 'aggressive' | 'none';
      /**
       * The speaker's device ID.
       */
      speaker_id?: string;
    }>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/{roomId}/device_profiles',
      path: {
        roomId: roomId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Purchase a Zoom Room subscription and try again. <br>
         * Access restricted.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1012\` <br>
        Zoom Room ID does not exist: {roomId}`,
      },
    });
  }

  /**
   * Create a device profile
   * Use this API to create a Zoom Room device profile.
   *
   * **Scopes:** `room:write:admin`
   *
   * **Prerequisites:**
   * * A Pro or a higher account with Zoom Rooms.
   * @returns any **HTTP Status Code:** `201` <br>
   * Device profile successfully created.
   * @throws ApiError
   */
  public createRoomDeviceProfile({
    roomId,
    requestBody,
  }: {
    /**
     * The Zoom Room's ID.
     */
    roomId: string;
    requestBody: any;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/rooms/{roomId}/device_profiles',
      path: {
        roomId: roomId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Purchase a Zoom Room subscription and try again. <br>
         * Access restricted.

         **Error Code:** \`300\` <br>
        Unable to create device profile because there is no microphone/speaker/camera available in the following Zoom Room: {roomId}.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1012\` <br>
        Room does not exist: {roomId}`,
      },
    });
  }

  /**
   * Get device information
   * Use this API to return information about a Zoom Room device.
   *
   * **Scopes:** `room:read:admin`
   *
   * **Prerequisites:**
   * * A Pro or a higher account with Zoom Rooms.
   * @returns any **HTTP Status Code:** `200` <br>
   * Device information returned.
   * @throws ApiError
   */
  public getRoomDevices({
    roomId,
  }: {
    /**
     * The Zoom Room's ID.
     */
    roomId: string;
  }): CancelablePromise<{
    /**
     * Information about the Zoom Room device's cameras.
     */
    cameras?: Array<{
      /**
       * The camera's device ID.
       */
      id?: string;
      /**
       * The camera's device name.
       */
      name?: string;
    }>;
    /**
     * Information about the Zoom Room device's microphone.
     */
    microphones?: Array<{
      /**
       * The microphone's device ID.
       */
      id?: string;
      /**
       * The microphone's device name.
       */
      name?: string;
    }>;
    /**
     * Information about the Zoom Room device's speakers.
     */
    speakers?: Array<{
      /**
       * The speaker's device ID.
       */
      id?: string;
      /**
       * The speaker's device name.
       */
      name?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/{roomId}/device_profiles/devices',
      path: {
        roomId: roomId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Purchase a Zoom Room subscription and try again. <br>
         * Access restricted.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1012\` <br>
        Zoom Room ID does not exist: {roomId}`,
      },
    });
  }

  /**
   * Delete a device profile
   * Use this API to delete a Zoom Room device profile.
   *
   * **Scopes:** `room:write:admin`
   *
   * **Prerequisites:**
   * * A Pro or a higher account with Zoom Rooms.
   * @returns void
   * @throws ApiError
   */
  public deleteRoomProfile({
    roomId,
    deviceProfileId,
  }: {
    /**
     * The Zoom Room's ID.
     */
    roomId: string;
    /**
     * The Zoom Room device profile's ID.
     */
    deviceProfileId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/rooms/{roomId}/device_profiles/{deviceProfileId}',
      path: {
        roomId: roomId,
        deviceProfileId: deviceProfileId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Purchase a Zoom Room subscription and try again. <br>
         * Access restricted.

         **Error Code:** \`300\` <br>
        You cannot delete this device profile.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1012\` <br>
        Room does not exist: {roomId}`,
      },
    });
  }

  /**
   * Get a device profile
   * Use this API to return a Zoom Room device profile.
   *
   * **Scopes:** `room:read:admin`
   *
   * **Prerequisites:**
   * * A Pro or a higher account with Zoom Rooms.
   * @returns any **HTTP Status Code:** `200` <br>
   * Device profile returned.
   * @throws ApiError
   */
  public getRoomProfile({
    roomId,
    deviceProfileId,
  }: {
    /**
     * The Zoom Room's ID.
     */
    roomId: string;
    /**
     * The Zoom Room device profile's ID.
     */
    deviceProfileId: string;
  }): CancelablePromise<{
    /**
     * Whether audio processing is enabled.
     */
    audio_processing?: boolean;
    /**
     * Whether microphone level auto adjust is enabled.
     */
    auto_adjust_mic_level?: boolean;
    /**
     * The camera's device ID.
     */
    camera_id?: string;
    /**
     * Whether echo cancellation is enabled.
     */
    echo_cancellation?: boolean;
    /**
     * The device's profile ID.
     */
    id?: string;
    /**
     * The microphone's device ID.
     */
    microphone_id?: string;
    /**
     * The device profile's name.
     */
    name?: string;
    /**
     * The noise suppression setting:
     * * `moderate` — Moderate noise suppression.
     * * `aggressive` — Aggressive noise suppression.
     * * `none` — Noise suppression disabled.
     */
    noise_suppression?: 'moderate' | 'aggressive' | 'none';
    /**
     * The speaker's device ID.
     */
    speaker_id?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/{roomId}/device_profiles/{deviceProfileId}',
      path: {
        roomId: roomId,
        deviceProfileId: deviceProfileId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Purchase a Zoom Room subscription and try again. <br>
         * Access restricted.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1012\` <br>
        Room does not exist: {roomId}

         **Error Code:** \`8005\` <br>
        Zoom Room device profile does not exist: {roomId}`,
      },
    });
  }

  /**
   * Update a device profile
   * Use this API to update a Zoom Room device profile.
   *
   * **Scopes:** `room:write:admin`
   *
   * **Prerequisites:**
   * * A Pro or a higher account with Zoom Rooms.
   * @returns void
   * @throws ApiError
   */
  public updateDeviceProfile({
    roomId,
    deviceProfileId,
    requestBody,
  }: {
    /**
     * The Zoom Room's ID.
     */
    roomId: string;
    /**
     * The Zoom Room device profile's ID.
     */
    deviceProfileId: string;
    requestBody: any;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/rooms/{roomId}/device_profiles/{deviceProfileId}',
      path: {
        roomId: roomId,
        deviceProfileId: deviceProfileId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Purchase a Zoom Room subscription and try again. <br>
         * Access restricted.

         **Error Code:** \`300\` <br>
        You cannot change this device profile.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
         **Error Code:** \`1012\` <br>
        Room does not exist: {roomId}.
         **Error Code:** \`8005\` <br>
        Room device profile does not exist: {roomId}.


        `,
      },
    });
  }

  /**
   * List Zoom Room devices
   * List information about the devices that are being used for a specific [Zoom Room](https://support.zoom.us/hc/en-us/articles/207483343-Getting-Started-with-Zoom-Rooms) in an account.
   *
   * **Prerequisites:**<br>
   * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
   * * Account owner or admin permissions.
   * **Scopes**: `room:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` **OK**
   * Devices listed successfully.
   * @throws ApiError
   */
  public listZrDevices({
    roomId,
  }: {
    /**
     * Unique Identifier of the Zoom Room. This can be retrieved from the response of [**List Zoom Rooms**](/docs/api-reference/zoom-api/methods#operation/listZoomRooms) API.
     */
    roomId: string;
  }): CancelablePromise<{
    devices?: Array<{
      /**
       * App version of Zoom Rooms.
       */
      app_version?: string;
      /**
       * Operating system of the device.
       */
      device_system?: string;
      /**
       * Type of the device. The value of this field can be one of the following:<br>`Zoom Rooms Computer`,<br> `Controller`, `Scheduling Display`, `Zoom Rooms Control System`, `Companion Whiteboard`
       */
      device_type?: 'Zoom Rooms Computer' | 'Controller' | 'Scheduling Display' | 'Zoom Rooms Control System' | 'Companion Whiteboard';
      /**
       * Unique identifier of the device.
       */
      id?: string;
      /**
       * Name of the Zoom Room.
       */
      room_name?: string;
      /**
       * Status of the device. The value can be either `Online` or `Offline`.
       */
      status?: 'Online' | 'Offline';
      /**
       * Array of device mac addresses
       */
      device_mac_addresses?: Array<string>;
      /**
       * The device's name
       */
      device_hostname?: string;
      /**
       * The device's manufacturer
       */
      device_manufacturer?: string;
      /**
       * The device's model
       */
      device_model?: string;
      /**
       * The device's firmware version
       */
      device_firmware?: string;
      /**
       * The device IP address.
       */
      ip_address?: string;
      /**
       * The device serial number.
       */
      serial_number?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/{roomId}/devices',
      path: {
        roomId: roomId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>

         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.`,
      },
    });
  }

  /**
   * Change a Zoom Room's location
   * An account owner of a Zoom account can establish a [Zoom Rooms Location Hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) to better organize Zoom Rooms spread across various locations. The location can be structured in a hierarchy with Country being the top-level location, followed by city, campus, building, and floor. Use this API to assign a new location for a Zoom Room. Note that the Zoom Room can be assigned only to the lowest level location available in the hierarchy.
   * **Prerequisite:**<br>
   * * Account owner or admin permission
   * * Zoom Rooms version 4.0 or higher<br>
   * **Scopes:** `room:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public changeZrLocation({
    roomId,
    requestBody,
  }: {
    /**
     * Unique Identifier of the Zoom Room.
     */
    roomId: string;
    requestBody?: {
      /**
       * Location ID of the location where Zoom Room is to be assigned. This can be retrieved from the `id` property in the response of [**List Zoom Rooms locations**](/docs/api-reference/zoom-api/methods#operation/listZRLocations) API.
       */
      location_id?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/rooms/{roomId}/location',
      path: {
        roomId: roomId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`4801\`<br>
        Location not found: {location_id}`,
      },
    });
  }

  /**
   * Get Zoom Room settings
   * Get information on meeting or alert settings applied to a specific Zoom Room. By default, only **Meeting Settings** are returned. To view only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter.<br>
   * **Prerequisites:**<br>
   * * Zoom Room licenses
   * * Owner or Admin privileges on the Zoom Account.<br>
   * **Scopes:** `room:read:admin`
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Zoom Room settings returned successfully.
   * @throws ApiError
   */
  public getZrSettings({
    roomId,
    settingType = 'meeting',
  }: {
    /**
     * Unique identifier of the Zoom Room.
     */
    roomId: string;
    /**
     * The type of setting that you would like to retrieve.<br> `alert`: Alert Settings applied on the Zoom Rooms Account.<br>
     * `meeting`: Meeting settings of the Zoom Rooms Account.
     */
    settingType?: string;
  }): CancelablePromise<
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
           * Whether to enable the [**Remote support**](https://support.zoom.us/hc/en-us/articles/360060951012-Enabling-remote-support) setting. This value defaults to `false`. By enabling this setting, the setting `allow_multiple_content_sharing` will not work.
           */
          remote_support?: boolean;
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
           * Encrypt screen and content shared in meetings.
           */
          encrypt_shared_screen_content?: boolean;
          /**
           * If enabled, the meeting host and meeting ID (in addition to the meeting topic) are hidden from the Zoom Rooms display for private meetings. This affects meetings that were originally scheduled as private, as well as public meetings that were transformed to private.
           */
          hide_id_for_private_meeting?: boolean;
          /**
           * Hide share instructions from TV.
           */
          hide_share_instruction?: boolean;
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
           * If enabled, a Zoom Room automatically becomes the host when it joins an internal meeting before the host and other participants.
           */
          make_room_alternative_host?: boolean;
          /**
           * If enabled, all personal information in contact details page will be hidden.
           */
          hide_user_personal_information?: boolean;
          /**
           * If enabled, users do not need to manually enter the meeting passcode when a Zoom Room joins a scheduled meeting on its meeting list.
           */
          bypass_meeting_password?: boolean;
          /**
           * If enabled, meeting participants that are audio only or have their video turned off will also be shown on the Zoom Rooms display by default.
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
          /**
           * The sound that plays when participants join or leave a meeting:
           * * `host` — Chime when host joins or leaves a meeting.
           * * `all` — Chime when any participant joins or leaves a meeting.
           * * `none` — Do not chime.
           */
          entry_exit_chime?: 'host' | 'all' | 'none';
          /**
           * When a participant joins by telephone, whether recording and playing the participant's own voice is enabled.
           */
          record_play_own_voice?: boolean;
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
      url: '/rooms/{roomId}/settings',
      path: {
        roomId: roomId,
      },
      query: {
        setting_type: settingType,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>

         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
        Access restricted.
        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>

         **Error Code:** \`1012\`<br>
        Room not found:{roomId}.

        `,
      },
    });
  }

  /**
   * Update Zoom Room settings
   * Update either meeting or alert settings applied to a specific Zoom Room. To update **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter. To update **Meeting Settings**, specify `meeting` as the value of the `setting_type` query parameter.<br>
   * **Prerequisites:**<br>
   * * Zoom Room licenses
   * * Owner or Admin privileges on the Zoom Account.<br>
   * **Scopes:** `room:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public updateZrSettings({
    roomId,
    settingType,
    requestBody,
  }: {
    /**
     * Unique Identifier of the Zoom Room.
     */
    roomId: string;
    /**
     * The type of setting that you would like to update.<br> `alert`: Alert Settings applied on the Zoom Room.<br>
     * `meeting`: Meeting settings of the Zoom Room.<br>
     * `signage`: Digital signage settings applied on the Zoom Room.
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
             * Whether to enable the [**Remote support**](https://support.zoom.us/hc/en-us/articles/360060951012-Enabling-remote-support) setting. This value defaults to `false`. By enabling this setting, the setting `allow_multiple_content_sharing` will not work.
             */
            remote_support?: boolean;
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
             * Encrypt screen and content shared in meetings.
             */
            encrypt_shared_screen_content?: boolean;
            /**
             * If enabled, the meeting host and meeting ID (in addition to the meeting topic) are hidden from the Zoom Rooms display for private meetings. This affects meetings that were originally scheduled as private, as well as public meetings that were transformed to private.
             */
            hide_id_for_private_meeting?: boolean;
            /**
             * Hide share instructions from TV.
             */
            hide_share_instruction?: boolean;
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
             * If enabled, a Zoom Room automatically becomes the host when it joins an internal meeting before the host and other participants.
             */
            make_room_alternative_host?: boolean;
            /**
             * If enabled, all personal information in contact details page will be hidden.
             */
            hide_user_personal_information?: boolean;
            /**
             * If enabled, users do not need to manually enter the meeting passcode when a Zoom Room joins a scheduled meeting on its meeting list.
             */
            bypass_meeting_password?: boolean;
            /**
             * If enabled, meeting participants that are audio only or have their video turned off will also be shown on the Zoom Room display by default.
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
            /**
             * The sound that plays when participants join or leave a meeting:
             * * `host` — Chime when host joins or leaves a meeting.
             * * `all` — Chime when any participant joins or leaves a meeting.
             * * `none` — Do not chime.
             */
            entry_exit_chime?: 'host' | 'all' | 'none';
            /**
             * When a participant joins by telephone, whether recording and playing the participant's own voice is enabled.
             */
            record_play_own_voice?: boolean;
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
      url: '/rooms/{roomId}/settings',
      path: {
        roomId: roomId,
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
      },
    });
  }

  /**
   * Get Zoom Room sensor data
   * Use this API to get the sensor data from the specified Zoom Room. <br>
   * **Prerequisites:**<br>
   * * Zoom Room licenses
   * * Owner or Admin privileges on the Zoom Account.<br>
   * **Scopes:** `room:read:admin`
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Zoom Room settings returned successfully.
   * @throws ApiError
   */
  public getZrSensorData({
    roomId,
    from,
    to,
    pageSize = 30,
    nextPageToken,
    deviceId,
    sensorType,
  }: {
    /**
     * The Zoom Room ID.
     */
    roomId: string;
    /**
     * The start time and date in 'yyyy-MM-ddTHH:dd:ssZ' format.
     */
    from: string;
    /**
     * The end time and date in 'yyyy-MM-ddTHH:dd:ssZ' format.
     */
    to: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    deviceId?: string;
    sensorType?: 'CO2' | 'TEMPERATURE' | 'REAL_TIME_PEOPLE_COUNT' | 'HUMIDITY' | 'VOC';
  }): CancelablePromise<{
    /**
     * The start date in the query.
     */
    from: string;
    /**
     * The end date in the query.
     */
    to: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token: string;
    /**
     * The number of records returned within a single API call.
     */
    page_size: number;
    /**
     * The total number of all the records available across pages.
     */
    total_records: number;
    /**
     * The data from the Zoom Room sensor.
     */
    sensor_data: Array<{
      /**
       * The time when the sensor data is reported.
       */
      date_time: string;
      /**
       * The device ID.
       */
      device_id: string;
      /**
       * The sensor type.
       */
      sensor_type: 'CO2' | 'TEMPERATURE' | 'REAL_TIME_PEOPLE_COUNT' | 'HUMIDITY' | 'VOC';
      /**
       * The values from the sensor.
       */
      sensor_value: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/{roomId}/sensor_data',
      path: {
        roomId: roomId,
      },
      query: {
        from: from,
        to: to,
        page_size: pageSize,
        next_page_token: nextPageToken,
        device_id: deviceId,
        sensor_type: sensorType,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>

         **Error Code:** \`200\`<br>
        Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.<br>
        Access restricted.
        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>

         **Error Code:** \`1012\`<br>
        Room not found:{roomId}.

        `,
      },
    });
  }
}
