/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GroupsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a group's webinar registration settings
   * Get webinar registration settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).
   * **Prerequisite**: Pro, Business, or Education account<br>
   * **Scopes**: `group:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * Group settings registration information returned.
   * @throws ApiError
   */
  public groupSettingsRegistration({
    groupId,
    type,
  }: {
    groupId: string;
    /**
     * The registration type:
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
      url: '/groups/{groupId}/settings/registration',
      path: {
        groupId: groupId,
      },
      query: {
        type: type,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
         **Error Code:** \`4130\` <br>
        Group does not exist: {groupId}.`,
      },
    });
  }

  /**
   * Update a group's webinar registration settings
   * Update webinar registration settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).<p style="background-color:#FEEFB3; color:#9F6000"><br>Note:</b> The `force_pmi_jbh_password` field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality.</p>
   * **Prerequisite**: Pro, Business, or Education account<br>
   * **Scopes**: `group:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **Error code:** `200`<br>
   * Only available for Paid account, {accountId}
   * @throws ApiError
   */
  public groupSettingsRegistrationUpdate({
    groupId,
    requestBody,
    type,
  }: {
    groupId: string;
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
     * The registration type:
     * * `webinar` — webinar.
     */
    type?: 'webinar';
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/groups/{groupId}/settings/registration',
      path: {
        groupId: groupId,
      },
      query: {
        type: type,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`4130\`<br>
        Group does not exist: {groupId}.`,
      },
    });
  }

  /**
   * List groups
   * List [groups](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.
   *
   * **Prerequisite**: Pro or higher account.<br>
   * **Scopes**: `group:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200`<br>
   * List of groups returned.<br>
   * **Error Code:** `200`
   * Only available for paid accounts.
   * @throws ApiError
   */
  public groups(): CancelablePromise<{
    /**
     * List of Group objects.
     */
    groups?: Array<{
      /**
       * Group ID.
       */
      id?: string;
      /**
       * Group name.
       */
      name?: string;
      /**
       * Total number of members in this group.
       */
      total_members?: number;
    }>;
    /**
     * Total records.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups',
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`4130\`<br> A group with this {groupId} does not exist.`,
      },
    });
  }

  /**
   * Create a group
   * Use this API to create a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management). You can add a **maximum** of 100 groups in one account per day, and a maximum of 5000 groups in one account.
   *
   * If you enabled a new group via the user interface, you can also choose whether to display the group and set its privacy level.
   *
   * **Scopes:** `group:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites**:
   * * A Pro or higher account
   * @returns any **Error Code:** `200` <br>
   * Only available for Paid account: {accountId}
   * @throws ApiError
   */
  public groupCreate({
    requestBody,
  }: {
    requestBody: {
      /**
       * The group's name.
       */
      name?: string;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/groups',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\` <br>
        Missing field: {$name}`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`4130\` <br>
        A group with the name "{groupId}" does not exist.`,
        409: `**HTTP Status Code:** \`409\` <br>
        Conflict

         **Error Code:** \`4132\` <br>
        The group name "{groupName}" is already in use.`,
        429: `**HTTP Status Code:** \`429\` <br>
        You have exceeded the daily rate limit ({0}) of Create a Group API request for this account. This limit resets at GMT 00:00:00.`,
      },
    });
  }

  /**
   * Delete a group
   * Use this API to delete a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).
   *
   * **Scopes:** `group:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro, Business, or Education account
   * @returns any **Error Code:** `200`<br>
   * Only available for Paid account,{accountId}.
   * @throws ApiError
   */
  public groupDelete({
    groupId,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/groups/{groupId}',
      path: {
        groupId: groupId,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Group member not found.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Group not found.<br>
         **Error Code:** \`4130\`<br>
        A group with this {groupId} does not exist.`,
      },
    });
  }

  /**
   * Get a group
   * Get a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.
   *
   * **Prerequisite**: Pro, Business, or Education account<br>
   * **Scopes**: `group:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200`<br> Group returned.<br>
   * **Error Code:** `200`<br>
   * Only available for Paid account,{accountId}.
   * @throws ApiError
   */
  public group({
    groupId,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
  }): CancelablePromise<{
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Total count of members in the group.
     */
    total_members?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups/{groupId}',
      path: {
        groupId: groupId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`1010\`<br>
        Group does not belong to your account.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Group not found.<br>
         **Error Code:** \`4130\`<br> A group with this {groupId} does not exist.`,
      },
    });
  }

  /**
   * Update a group
   * Update a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.
   *
   * **Prerequisite**: Pro, Business, or Education account<br>
   * **Scopes**: `group:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any The group does not belong to this account:{accountId}.
   * @throws ApiError
   */
  public groupUpdate({
    groupId,
    requestBody,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    requestBody: {
      /**
       * Group name. It must be unique to one account and less than 128 characters.
       */
      name?: string;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/groups/{groupId}',
      path: {
        groupId: groupId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**Status Code:** \`404\`<br>
        Not found.<br>
         **Error Code:** \`4130\`<br>
        A group with this {groupId} does not exist.`,
        409: `**Status Code:** \`409\`<br>
        Conflict<br>
         **Error Code:** \`4132\`<br>
        Group name {groupName} is already in use.`,
      },
    });
  }

  /**
   * List group admins
   * Use this API to return a list of [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) administrators under your account.
   *
   * **Scopes:** `group:read:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro, Business, or Education account
   * @returns any **HTTP Status Code:** `200`<br> Only available for paid account: "{accountId}".
   * @throws ApiError
   */
  public groupAdmins({
    groupId,
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    admins?: Array<{
      /**
       * The user's email address.
       */
      email?: string;
      /**
       * The user's display name.
       */
      name?: string;
    }>;
    /**
     * The next page token is used to paginate through large result sets. A next page token is returned when the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of records returned in a single API call.
     */
    page_size?: number;
    /**
     * The total number of records available across all pages.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups/{groupId}/admins',
      path: {
        groupId: groupId,
      },
      query: {
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
        Not found.<br>
         **Error Code:** \`4130\`<br>
        A group with the "{groupId}" ID does not exist.`,
      },
    });
  }

  /**
   * Add group admins
   * Use this API to add administrators to a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.
   *
   * **Scopes:** `group:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro, Business, or Education account
   * @returns any **Status Code:** `200` <br> Only available for paid account: "{accountId}".
   * @throws ApiError
   */
  public groupAdminsCreate({
    groupId,
    requestBody,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    requestBody: {
      /**
       * A list of the administrators to add to a group.
       */
      admins?: Array<{
        /**
         * The user's email. Use this value if you do not have the user's ID.
         *
         * If you pass the `id` value, the API ignores this parameter.
         */
        email?: string;
        /**
         * The user's ID.
         */
        id?: string;
      }>;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/groups/{groupId}/admins',
      path: {
        groupId: groupId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**Status Code:** \`404\` <br> Not found. <br> **Error Code:** \`4130\` <br> A group with the "{groupId}" ID does not exist.`,
      },
    });
  }

  /**
   * Delete a group admin
   * Use this API to remove a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) administrator in a Zoom account.
   *
   * **Scopes:** `group:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro, Business, or Education account
   * @returns any **Status Code:** `200` <br> Only available for paid account: "{accountId}".
   * @throws ApiError
   */
  public groupAdminsDelete({
    groupId,
    userId,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/groups/{groupId}/admins/{userId}',
      path: {
        groupId: groupId,
        userId: userId,
      },
      errors: {
        400: `**Status Code:** \`400\` <br> Bad request. <br> **Error Code:** \`4138\` <br> That user is not an administrator for the group: "{groupId}".`,
        404: `**Status Code:** \`404\` <br> Not found. <br> **Error Code:** \`4130\` <br> A group with the "{groupId}" ID does not exist.`,
      },
    });
  }

  /**
   * Get locked settings
   * Retrieve a [group's](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) locked settings. If you lock a setting, the group members will not be able to modify it individually. <p style="background-color:#FEEFB3; color:#9F6000"><br>Note:</b> The `force_pmi_jbh_password` field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality.</p>
   *
   * **Prerequisite**: Pro, Business, or Education account<br>
   * **Scopes**: `group:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **Error Code:** `200`<br>
   * Only available for paid account.
   *
   * **Status Code:** `200`<br>
   * Locked settings of group returned.
   *
   * @throws ApiError
   */
  public getGroupLockSettings({
    groupId,
    option,
  }: {
    /**
     * Id of the group.
     */
    groupId: string;
    /**
     * Optional query parameters:
     * * `meeting_security` — Use this query parameter to view the meeting security settings applied to the user's account.
     */
    option?: string;
  }): CancelablePromise<
    | {
        audio_conferencing?: {
          /**
           * Whether the group has the [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call) setting enabled.
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
           * @deprecated
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
           * Allow participants who belong to your account to see that a guest (someone who does not belong to your account) is participating in the meeting/webinar.
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
          /**
           * Allow host to put attendee on hold.
           *
           * **This field has been deprecated and is no longer supported.**
           * @deprecated
           */
          attendee_on_hold?: boolean;
          /**
           * Enable users to see and add contacts to 'auto-answer group' in the contact list on chat. Any call from members of this group will be automatically answered.
           */
          auto_answer?: boolean;
          /**
           * Whether to allow a live transcription service to transcribe meetings.
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
           * Displays whether or not custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) have been selected for meetings/webinars hosted by this group.
           */
          custom_data_center_regions?: boolean;
          /**
           * Whether the **Disable desktop screen sharing for meetings you host** setting is enabled.
           */
          disable_screen_sharing_for_host_meetings?: boolean;
          /**
           * Whether the **Disable screen sharing when guests are in the meeting** setting is enabled.
           */
          disable_screen_sharing_for_in_meeting_guests?: boolean;
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
           * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for the users in the group or not.
           */
          file_transfer?: boolean;
          /**
           * Whether to allow the viewing of full transcripts in the in-meeting side panel.
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
           * Allow host to type closed captions or assign a participant/third party device to add closed captions.
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
           * Allow participants in a meeting can provide nonverbal feedback and express opinions by clicking on icons in the Participants panel.
           */
          non_verbal_feedback?: boolean;
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
           * Allow meeting host to provide 1:1 remote support to another participant.
           */
          remote_support?: boolean;
          /**
           * Indicates whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option has been enabled and locked for the group or not.
           */
          request_permission_to_unmute?: boolean;
          /**
           * Whether participants can save closed captions or transcripts.
           */
          save_caption?: boolean;
          /**
           * Whether participants can save closed captions or transcripts.
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
           * Whether to allow participants to join a meeting directly from their browser and bypass the Zoom application download process. This is useful for participants who cannot download, install, or run applications. Note that the meeting experience from the browser is limited.
           */
          show_a_join_from_your_browser_link?: boolean;
          /**
           * Allow participants to join a meeting directly from their browser.
           */
          show_browser_join_link?: boolean;
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
           * Attendees cannot join a meeting until a host admits them individually from the waiting room.
           */
          waiting_room?: boolean;
          /**
           * Whether to allow webinar participants to send chat messages.
           */
          webinar_chat?: boolean;
          /**
           * Whether webinar livestreaming is enabled.
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
           * If join before host option is enabled for a personal meeting, then enforce password requirement.
           */
          force_pmi_jbh_password?: boolean;
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
           * Automatically mute all participants when they join the meeting.
           */
          mute_upon_entry?: boolean;
          /**
           * Start meetings with participant video on.
           */
          participant_video?: boolean;
          /**
           * Generate and send new passwords for newly scheduled or edited meetings.
           */
          pstn_password_protected?: boolean;
          /**
           * Require password for instant meetings. If you use PMI for your instant meetings, this option will be disabled.
           */
          require_password_for_instant_meetings?: boolean;
          /**
           * Require participants to enter password for PMI meetings.
           */
          require_password_for_pmi_meetings?: boolean;
          /**
           * This setting applies for regular meetings that do not use PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting.
           */
          require_password_for_scheduling_new_meetings?: boolean;
          /**
           * Receive desktop notification for upcoming meetings.
           */
          upcoming_meeting_reminder?: boolean;
        };
        telephony?: {
          telephony_regions?: boolean;
          /**
           * Allow users to join the meeting using the existing 3rd party audio configuration.
           */
          third_party_audio?: boolean;
        };
      }
    | {
        meeting_security?: {
          /**
           * Whether the [**Approve or block entry for users from specific countries/regions**](https://support.zoom.us/hc/en-us/articles/360060086231-Joining-from-specific-countries-regions) setting is enabled.
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
           * Whether end-to-end encryption is enabled for meetings.
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
      url: '/groups/{groupId}/lock_settings',
      path: {
        groupId: groupId,
      },
      query: {
        option: option,
      },
      errors: {
        404: `**Status Code:** \`404\`<br>
        Not found.<br>
         **Error Code:** \`4130\`<br>
        Group does not exist: {groupId}`,
      },
    });
  }

  /**
   * Update locked settings
   * Update a [group's](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) locked settings. If you lock a setting, the group members will not be able to modify it individually. <p style="background-color:#FEEFB3; color:#9F6000"><br>Note:</b> The `force_pmi_jbh_password` field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality.</p>
   *
   * **Prerequisite**: Pro, Business, or Education account<br>
   * **Scopes**: `group:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public groupLockedSettings({
    groupId,
    option,
    requestBody,
  }: {
    /**
     * The Id of the group.
     */
    groupId: string;
    /**
     * Optional query parameters:
     * * `meeting_security` — Use this query parameter to view the meeting security settings applied to the user's account.
     */
    option?: string;
    requestBody?:
      | {
          audio_conferencing?: {
            /**
             * Whether the group has the [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F51844DRCX3K7BRTMZ40381R) setting enabled.
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
             * Allow participants who belong to your account to see that a guest (someone who does not belong to your account) is participating in the meeting/webinar.
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
            /**
             * Allow host to put attendee on hold.
             *
             * **This field has been deprecated and is no longer supported.**
             */
            attendee_on_hold?: boolean;
            /**
             * Enable users to see and add contacts to 'auto-answer group' in the contact list on chat. Any call from members of this group will be automatically answered.
             */
            auto_answer?: boolean;
            /**
             * Whether to allow a live transcription service to transcribe meetings.
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
             * Displays whether or not custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) have been selected for meetings/webinars hosted by this group.
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
             * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for the users in the group or not.
             */
            file_transfer?: boolean;
            /**
             * Whether to allow the viewing of full transcripts in the in-meeting side panel.
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
             * Allow host to type closed captions or assign a participant/third party device to add closed captions.
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
             * Whether to allow the host to present a survey to participants once a meeting has ended. This feature is only available in version 5.7.3 or higher.
             */
            meeting_survey?: boolean;
            /**
             * Allow participants in a meeting can provide nonverbal feedback and express opinions by clicking on icons in the Participants panel.
             */
            non_verbal_feedback?: boolean;
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
             * Allow meeting host to provide 1:1 remote support to another participant.
             */
            remote_support?: boolean;
            /**
             * Indicate whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option should be enabled and locked for the group or not.
             */
            request_permission_to_unmute?: boolean;
            /**
             * Whether to allow participants to save closed captions or transcripts.
             */
            save_caption?: boolean;
            /**
             * Whether participants can save closed captions or transcripts.
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
             * Whether to allow participants to join a meeting directly from their browser and bypass the Zoom application download process. This is useful for participants who cannot download, install, or run applications. Note that the meeting experience from the browser is limited.
             */
            show_a_join_from_your_browser_link?: boolean;
            /**
             * Allow participants to join a meeting directly from their browser.
             */
            show_browser_join_link?: boolean;
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
             * Attendees cannot join a meeting until a host admits them individually from the waiting room.
             */
            waiting_room?: boolean;
            /**
             * Whether to allow webinar participants to send chat messages.
             */
            webinar_chat?: boolean;
            /**
             * Whether webinar livestreaming is enabled.
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
             * Allow hosts and participants to record the meeting to a local file.
             */
            local_recording?: boolean;
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
             * If join before host option is enabled for a personal meeting, then enforce password requirement.
             * @deprecated
             */
            force_pmi_jbh_password?: boolean;
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
             * Automatically mute all participants when they join the meeting.
             */
            mute_upon_entry?: boolean;
            /**
             * Start meetings with participant video on.
             */
            participant_video?: boolean;
            /**
             * Turn the lock setting on or off for the **Enable Personal Meeting ID** setting for a group.<br><br>
             * `true`: Turn the **"Enable Personal Meeting ID"** setting **on** for all users in the group. Users can choose to use personal meeting ID for their meetings. <br><br>
             * `false`: Turn **off** the **"Enable Personal Meeting ID"** setting. **If this setting is [disabled](https://support.zoom.us/hc/en-us/articles/201362843-Personal-meeting-ID-PMI-and-personal-link?flash_digest=eb7ac62d8c7fb4daf285916e3e15d87537806133#h_aa0335c8-3b06-41bc-bc1f-a8b84ef17f2a), meetings that were scheduled with PMI by this group members will be invalid. Users will have to update previously scheduled PMI meetings.**<br><br>
             * For Zoom Phone only:If a user has been assigned a desk phone, **"Elevate to Zoom Meeting"** on desk phone will be disabled.
             *
             *
             *
             */
            personal_meeting?: boolean;
            /**
             * Generate and send new passwords for newly scheduled or edited meetings.
             */
            pstn_password_protected?: boolean;
            /**
             * Require password for instant meetings. If you use PMI for your instant meetings, this option will be disabled.
             */
            require_password_for_instant_meetings?: boolean;
            /**
             * Require participants to enter password for PMI meetings.
             */
            require_password_for_pmi_meetings?: boolean;
            /**
             * This setting applies for regular meetings that do not use PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting.
             */
            require_password_for_scheduling_new_meetings?: boolean;
            /**
             * Receive desktop notification for upcoming meetings.
             */
            upcoming_meeting_reminder?: boolean;
          };
          telephony?: {
            telephony_regions?: boolean;
            /**
             * Allow users to join the meeting using the existing 3rd party audio configuration.
             */
            third_party_audio?: boolean;
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
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/groups/{groupId}/lock_settings',
      path: {
        groupId: groupId,
      },
      query: {
        option: option,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`200\`<br>
        Only available for paid account.
        `,
        404: `**Status Code:** \`404\`<br>
        Not found.<br>
         **Error Code:** \`4130\`<br>
        This group does not exist.
        `,
      },
    });
  }

  /**
   * List group members
   * List the members of a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.
   *
   * **Prerequisite**: Pro, Business, or Education account<br>
   * **Scopes**: `group:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200`<br> Only available for paid account,{accountId}.
   * @throws ApiError
   */
  public groupMembers({
    groupId,
    pageSize = 30,
    pageNumber = 1,
    nextPageToken,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.
     * @deprecated
     */
    pageNumber?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    members?: Array<{
      /**
       * User's email address.
       */
      email?: string;
      /**
       * First name of the user.
       */
      first_name?: string;
      /**
       * Unique Identifier of the user.
       */
      id?: string;
      /**
       * Last name of the user.
       */
      last_name?: string;
      /**
       * User type: <br> `1` - Basic<br> `2` - Licensed<br> `3` - On-prem
       */
      type?: number;
    }>;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of pages returned from this request.
     */
    page_count?: number;
    /**
     * The page number of the current results.
     */
    page_number?: number;
    /**
     * The number of records returned from a single API call.
     */
    page_size?: number;
    /**
     * The total number of records available across all pages.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups/{groupId}/members',
      path: {
        groupId: groupId,
      },
      query: {
        page_size: pageSize,
        page_number: pageNumber,
        next_page_token: nextPageToken,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
        Not found.<br>
         **Error Code:** \`4130\`<br>
        A group with this {groupId} does not exist.`,
      },
    });
  }

  /**
   * Add group members
   * Use this API to add users to a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) in your account.
   *
   * **Scopes:** `group:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro, Business, or Education account
   * @returns any Only available for paid account,{accountId}.
   * @throws ApiError
   */
  public groupMembersCreate({
    groupId,
    requestBody,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    requestBody: {
      /**
       * List of Group members
       */
      members?: Array<{
        /**
         * User email. If the user ID is given then the user email should be ignored.
         */
        email?: string;
        /**
         * User ID.
         */
        id?: string;
      }>;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/groups/{groupId}/members',
      path: {
        groupId: groupId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**Status Code:** \`404\`<br>
        Not found.<br>
         **Error Code:** \`4130\`<br>
        A group with this {groupId} does not exist.`,
      },
    });
  }

  /**
   * Delete a group member
   * Use this API to remove a user from a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) in an account.
   *
   * **Scopes:** `group:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro, Business, or Education account
   * @returns any Only available for paid account,{accountId}.
   * @throws ApiError
   */
  public groupMembersDelete({
    groupId,
    memberId,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    /**
     * The member ID or email address.
     */
    memberId: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/groups/{groupId}/members/{memberId}',
      path: {
        groupId: groupId,
        memberId: memberId,
      },
      errors: {
        400: `**Status Code:** \`400\`<br>
        Bad request.<br>
         **Error Code:** \`1010\`<br>
        Group does not belong to this account:{accountId}.`,
        404: `**Status Code:** \`404\`<br>
        Not found.<br>
         **Error Code:** \`4130\`<br>
        A group with this {groupId} does not exist.`,
      },
    });
  }

  /**
   * Update a group member
   * Use this API to perform either of the following tasks:
   * * Remove a group member from one group and move them to a different group.
   * * Set a user's primary group. By default, the primary group is the first group that user is added to.
   *
   * If a user is a member of multiple groups, you can [assign the user a primary group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-#h_d07c7dcd-4fd8-485a-b5fe-a322e8d21c09). The user will use the primary group's settings by default. However, if the user is a member of a group with locked settings, those group settings will remain locked to the user.
   *
   * **Scopes:** `group:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro or higher account
   * @returns void
   * @throws ApiError
   */
  public updateAGroupMember({
    groupId,
    memberId,
    requestBody,
  }: {
    /**
     * The group's unique ID. To get this value, use the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     * * To set a user's primary group, use the `target_group_id` value for this parameter's value.
     * * To move a group member from one group to another, use the `groupId` of the designated group.
     */
    groupId: string;
    /**
     * The group member's unique ID. To get this value, use the [**List group members**](/docs/api-reference/zoom-api/methods#operation/groupMembers) API.
     */
    memberId: string;
    requestBody?: {
      /**
       * The action to perform:
       * * `move` — Remove the group member from one group and move them to a different group.
       * * `set_primary` — Set the user's primary group.
       */
      action: 'move' | 'set_primary';
      /**
       * The target group's ID. To get this value, use the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
       * * To set a user's primary group, use the designated primary group's `groupId` value.
       * * To move a group member from one group to another, use the `groupId` of the designated group.
       */
      target_group_id?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/groups/{groupId}/members/{memberId}',
      path: {
        groupId: groupId,
        memberId: memberId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`200\`<br>
        Only available for Paid account, {accountId}.<br><br>
         **Error Code:** \`300\`<br>
        The target_group_id can not be empty.<br><br>
         **Error Code:** \`1010\`<br>
        Group does not belong to this account:{accountId}.


        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
         **Error Code:** \`4130\`<br>
        A group with this {groupId} does not exist.`,
      },
    });
  }

  /**
   * Get a group's settings
   * Get settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).
   * **Prerequisite**: Pro, Business, or Education account<br>
   * **Scopes**: `group:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **Error Code**: `200` <br>
   * Only available for paid account.
   *
   * **HTTP Status Code**: `200` <br>
   * Group Settings Returned.
   *
   * @throws ApiError
   */
  public getGroupSettings({
    groupId,
    option,
    customQueryFields,
  }: {
    groupId: string;
    /**
     * Optional query parameters:
     * * `meeting_authentication` — Use this query parameter to view the [meeting authentication settings](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) applied to the user's account.
     * * `recording_authentication` — Use this query parameter to view the [recording authentication settings](https://support.zoom.us/hc/en-us/articles/360037756671-Authentication-Profiles-for-Cloud-Recordings) applied to the user's account.
     * * `meeting_security` — Use this query parameter to view the meeting security settings applied to the user's account.
     */
    option?: 'meeting_authentication' | 'recording_authentication' | 'meeting_security';
    /**
     * Provide the name of the field by which you would like to filter the response. For example, if you provide "host_video" as the value of this field, you will get a response similar to the following:
     *
     * {
     * "schedule_meeting": {
     * "host_video": false
     * }
     * }
     *
     * You can provide multiple values by separating them with commas(example: "host_video,participant_video").
     */
    customQueryFields?: string;
  }): CancelablePromise<
    | {
        /**
         * The group's audio conference settings.
         */
        audio_conferencing?: {
          /**
           * The group's [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F51844DRCX3K7BRTMZ40381R) settings.
           */
          toll_free_and_fee_based_toll_call?: {
            /**
             * Whether webinar attendees can dial in through the account's **Toll-free and Fee-based Toll Call** phone numbers. This feature is only available in version 5.2.2 and higher.
             */
            allow_webinar_attendees_dial?: boolean;
            /**
             * Whether the group has the [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F51844DRCX3K7BRTMZ40381R) setting enabled.
             */
            enable?: boolean;
            /**
             * The group's **Toll-free and Fee-based Toll Call** phone number information.
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
        in_meeting?: {
          /**
           * Allow participants who belong to your account to see that a guest (someone who does not belong to your account) is participating in the meeting/webinar.
           */
          alert_guest_join?: boolean;
          /**
           * If the value of this field is set to `true`,  allow users to delete messages in the in-meeting chat.
           *
           */
          allow_users_to_delete_messages_in_meeting_chat?: boolean;
          /**
           * Whether livestreaming is enabled.
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
           * Show Zoom windows during screen share.
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
           * Allow participants to use annotation tools to add information to shared screens.
           */
          annotation?: boolean;
          /**
           * Allow host to put attendee on hold.
           *
           * **This field has been deprecated and is no longer supported.**
           */
          attendee_on_hold?: boolean;
          /**
           * Enable users to see and add contacts to 'auto-answer group' in the contact list on chat. Any call from members of this group will be automatically answered.
           */
          auto_answer?: boolean;
          /**
           * Automatically save all in-meeting chats.
           */
          auto_saving_chat?: boolean;
          /**
           * Allow host to split meeting participants into separate, smaller rooms.
           */
          breakout_room?: boolean;
          /**
           * Whether the host can assign participants to breakout rooms when scheduling. This feature is **only** available in version 4.5.0 or higher.
           */
          breakout_room_schedule?: boolean;
          /**
           * Allow meeting participants to send chat message visible to all participants.
           */
          chat?: boolean;
          /**
           * Allow host to type closed captions or assign a participant/third party device to add closed captions.
           */
          closed_caption?: boolean;
          /**
           * Information about the group's closed captioning settings.
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
           * Allow the host to add co-hosts. Co-hosts have the same in-meeting controls as the host.
           */
          co_host?: boolean;
          /**
           * If set to `true`, you can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to be used by this group for hosting their real-time meeting and webinar traffic. These regions can be provided in the `data_center_regions` field. If set to `false`, the regions cannot be customized and the default regions will be used.
           */
          custom_data_center_regions?: boolean;
          /**
           * Whether custom livestreaming is enabled.
           */
          custom_live_streaming_service?: boolean;
          /**
           * The specific instructions to allow your account's meeting hosts to configure a custom livestream.
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
           * Whether the **Disable desktop screen sharing for meetings you host** setting is enabled.
           */
          disable_screen_sharing_for_host_meetings?: boolean;
          /**
           * Whether the **Disable screen sharing when guests are in the meeting** setting is enabled.
           */
          disable_screen_sharing_for_in_meeting_guests?: boolean;
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
           * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for the users in the group or not.
           */
          file_transfer?: boolean;
          /**
           * Enable higher quality video for host and participants. This will require more bandwidth.
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
            /**
             * A list of system-supported languages.
             */
            languages?: 'English' | 'Chinese' | 'Japanese' | 'German' | 'French' | 'Russian' | 'Portuguese' | 'Spanish' | 'Korean';
          };
          /**
           * Whether Facebook livestreaming is enabled.
           */
          live_streaming_facebook?: boolean;
          /**
           * Whether YouTube livestreaming is enabled.
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
           * Allow participants in a meeting can provide nonverbal feedback and express opinions by clicking on icons in the Participants panel.
           */
          non_verbal_feedback?: boolean;
          /**
           * Show the list of H.323/SIP devices only to the host.
           */
          only_host_view_device_list?: boolean;
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
           * When each participant joins by telephone, allow the option to record and play their own voice as entry and exit chimes.
           */
          record_play_own_voice?: boolean;
          /**
           * During screen sharing, allow the person who is sharing to let others control the shared content.
           */
          remote_control?: boolean;
          /**
           * Allow meeting host to provide 1:1 remote support to another participant.
           */
          remote_support?: boolean;
          /**
           * Indicates whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option has been enabled for the group or not.
           */
          request_permission_to_unmute?: boolean;
          /**
           * Allow host and participants to share their screen or content during meetings.
           */
          screen_sharing?: boolean;
          /**
           * Allow users to invite participants by email only by default.
           */
          sending_default_email_invites?: boolean;
          /**
           * Whether to allow participants to join a meeting directly from their browser and bypass the Zoom application download process. This is useful for participants who cannot download, install, or run applications. Note that the meeting experience from the browser is limited.
           */
          show_a_join_from_your_browser_link?: boolean;
          /**
           * Allow participants to join a meeting directly from their browser.
           */
          show_browser_join_link?: boolean;
          /**
           * Show the list of H.323/SIP devices.
           */
          show_device_list?: boolean;
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
          unchecked_data_center_regions?: 'EU' | 'HK' | 'AU' | 'IN' | 'TY' | 'CN' | 'US' | 'CA' | 'DE' | 'NL' | 'LA';
          /**
           * Allow  HTML formatting instead of plain text for meeting invitations scheduled with the Outlook plugin.
           */
          use_html_format_email?: boolean;
          /**
           * Enable virtual background.
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
           * Attendees cannot join a meeting until a host admits them individually from the waiting room.
           */
          waiting_room?: boolean;
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
             * Whether webinar livestreaming is enabled.
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
           * Information about the account's meeting polling settings.
           */
          meeting_polling?: {
            /**
             * Whether to allow the host to add polls before or during a meeting.
             */
            enable?: boolean;
            /**
             * Whether to allow host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. Hosts can also set the correct answers for quizzes they create.
             */
            advanced_polls?: boolean;
            /**
             * Whether to allow users to manage saved polls and quizzes from Meetings
             */
            manage_saved_polls_and_quizzes?: boolean;
            /**
             * Whether to require answers to be anonymous.
             */
            require_answers_to_be_anonymous?: boolean;
            /**
             * Whether to allow alternative hosts to add or edit polls and quizzes.
             */
            allow_alternative_host_to_add_edit?: boolean;
            /**
             * Whether to allow host to upload an image for each question.
             */
            allow_host_to_upload_image?: boolean;
          };
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
             * Whether to allow users to manage saved polls and quizzes from Meetings
             */
            manage_saved_polls_and_quizzes?: boolean;
            /**
             * Whether to require answers to be anonymous.
             */
            require_answers_to_be_anonymous?: boolean;
            /**
             * Whether to allow host to upload an image for each question.
             */
            allow_host_to_upload_image?: boolean;
            /**
             * Whether to allow alternative hosts to add or edit polls and quizzes.
             */
            allow_alternative_host_to_add_edit?: boolean;
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
           * Whether Workplace by Facebook is enabled.
           */
          workplace_by_facebook?: boolean;
        };
        other_options?: {
          /**
           * Whether to display the Zoom Help badge on the bottom-right of the page.
           */
          allow_users_contact_support_via_chat?: boolean;
          /**
           * Whether iOS blurs the screenshot in the task switcher when multiple apps are open. Android hides the screenshot in the system-level list of recent apps.
           */
          blur_snapshot?: boolean;
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
        recording?: {
          /**
           * Make cloud recordings accessible to account members only.
           */
          account_user_access_recording?: boolean;
          /**
           * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
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
           * Record meetings automatically as they start.
           */
          auto_recording?: string;
          /**
           * Allow hosts to record and save the meeting / webinar in the cloud.
           */
          cloud_recording?: boolean;
          /**
           * Allow anyone with a link to the cloud recording to download.
           */
          cloud_recording_download?: boolean;
          /**
           * Allow only the host with a link to the cloud recording to download.
           */
          cloud_recording_download_host?: boolean;
          /**
           * Allow the host to delete the recordings. If this option is disabled, the recordings cannot be deleted by the host and only admin can delete them.
           */
          host_delete_cloud_recording?: boolean;
          /**
           * The account's [**Record active speaker, gallery view and shared screen separately**](https://support.zoom.us/hc/en-us/articles/360060316092-Changing-basic-and-advanced-cloud-recording-settings#h_01F4CYJTCTXNS2MXH00W9EFG6R) settings.
           */
          record_files_separately?: {
            /**
             * Whether recording only the active speaker is enabled.
             */
            active_speaker?: boolean;
            /**
             * Whether recording only the gallery view is enabled.
             */
            gallery_view?: boolean;
            /**
             * Whether recording only shared screen is enabled.
             */
            shared_screen?: boolean;
          };
          /**
           * Whether participants' names display in the recording.
           */
          display_participant_name?: boolean;
          /**
           * Whether thumbnails of the presenter are recorded when they are sharing their screen.
           */
          recording_thumbnails?: boolean;
          /**
           * Whether recordings will be optimized for a 3rd party video editor. This can increase the file size and the time it takes to generate recording files.
           */
          optimize_recording_for_3rd_party_video_editor?: boolean;
          /**
           * Whether the [recording highlights](https://support.zoom.us/hc/en-us/articles/360060802432) feature is enabled.
           */
          recording_highlight?: boolean;
          /**
           * Whether panelist chats are saved to the recording.
           */
          save_panelist_chat?: boolean;
          /**
           * Whether poll results shared during the meeting or webinar are saved. This also includes poll results shared during the meeting or webinar.
           */
          save_poll_results?: boolean;
          /**
           * Whether [closed captions](https://support.zoom.us/hc/en-us/articles/207279736) are saved as a VTT (Video Track Text) file.
           */
          save_close_caption?: boolean;
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
           * Whether to record one audio file for all participants.
           */
          record_audio_file?: boolean;
          /**
           * When someone is sharing their screen, active speaker will show on the top right corner of the shared screen.
           */
          record_gallery_view?: boolean;
          /**
           * Record active speaker with shared screen.
           */
          record_speaker_view?: boolean;
          /**
           * Automatically transcribe the audio of a meeting or webinar for cloud recordings.
           */
          recording_audio_transcript?: boolean;
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
           * Save chat messages from the meeting / webinar.
           */
          save_chat_text?: boolean;
          /**
           * Add a timestamp to the recording.
           */
          show_timestamp?: boolean;
        };
        schedule_meeting?: {
          /**
           * Determine how participants can join the audio portion of the meeting.
           */
          audio_type?: string;
          /**
           * If the value is set to `true`, the meeting password will be encrypted and included in the join meeting link to allow participants to join with just one click without having to enter the password.
           *
           */
          embed_password_in_join_link?: boolean;
          /**
           * If join before host option is enabled for a personal meeting, then enforce password requirement.
           *
           *
           * **This field will be deprecated in near future.** If you would like to enable this setting, we highly encourage you to use the `require_password_for_pmi_meetings` field.
           *
           *
           * @deprecated
           */
          force_pmi_jbh_password?: boolean;
          /**
           * Start meetings with host video on.
           */
          host_video?: boolean;
          /**
           * Allow participants to join the meeting before the host arrives
           */
          join_before_host?: boolean;
          /**
           * Automatically mute all participants when they join the meeting.
           */
          mute_upon_entry?: boolean;
          /**
           * Start meetings with participant video on.
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
           * Generate and send new passwords for newly scheduled or edited meetings.
           */
          pstn_password_protected?: boolean;
          /**
           * If enabled, a random password will be generated on the user's end who starts the instant meeting. Other participants will have to enter the password to join the meeting. If you use PMI for your instant meetings, this option will be disabled.
           */
          require_password_for_instant_meetings?: boolean;
          /**
           * Indicates whether a password is required for [PMI](https://support.zoom.us/hc/en-us/articles/203276937-Using-Personal-Meeting-ID-PMI-) meetings or not. The value can be one of the following:<br>
           * `none`: Do not require password for PMI meetings.<br>
           * `all`: Require participants to enter password for all PMI enabled meetings.<br> `jbh_only`: Require password only for meetings where the **"join before host"** setting is enabled.
           */
          require_password_for_pmi_meetings?: 'all' | 'jbh_only' | 'none';
          /**
           * Require a password for meetings which have already been scheduled
           *
           */
          require_password_for_scheduled_meetings?: boolean;
          /**
           * This setting applies for regular meetings that do not use PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting.
           */
          require_password_for_scheduling_new_meetings?: boolean;
          /**
           * Receive desktop notification for upcoming meetings.
           */
          upcoming_meeting_reminder?: boolean;
          /**
           * Indicates whether PMI is enabled for all instant meetings or not.
           */
          use_pmi_for_instant_meetings?: boolean;
          /**
           * Indicates whether PMI is enabled for all scheduled meetings or not.
           */
          use_pmi_for_schedule_meetings?: boolean;
          /**
           * Information about the [**Always display "Zoom Meeting" as the meeting topic**](https://support.zoom.us/hc/en-us/articles/201363253-Changing-account-settings#h_01EG9BJ646V2WJK1S3H2MP6YV6) setting.
           */
          always_display_zoom_meeting_as_topic?: {
            /**
             * Whether the **Always display "Zoom Meeting" as the meeting topic** setting is enabled.
             */
            enable?: boolean;
            /**
             * Whether to display "Zoom Meeting" as the topic for already-scheduled meetings.
             */
            display_topic_for_scheduled_meetings?: boolean;
          };
          /**
           * Information about the [**Always show "Zoom Webinar" as the webinar topic**](https://support.zoom.us/hc/en-us/articles/201363253-Changing-account-settings#h_01EG9BJ646V2WJK1S3H2MP6YV6) setting.
           */
          always_display_zoom_webinar_as_topic?: {
            /**
             * Whether the **Always show "Zoom Webinar" as the webinar topic** setting is enabled.
             */
            enable?: boolean;
            /**
             * Whether to display "Zoom Webinar" as the topic for already-scheduled meetings.
             */
            display_topic_for_scheduled_webinars?: boolean;
          };
        };
        telephony?: {
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
           * Allow users to join the meeting using the existing 3rd party audio configuration.
           */
          third_party_audio?: boolean;
        };
      }
    | (
        | {
            /**
             * Whether the [**Allow authentication exception**](https://support.zoom.us/hc/en-us/articles/360037117472#h_01F13A9N1FQFNVESC9C21NRHXY) setting is enabled. This lets hosts invite users who can bypass authentication.
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
               * Authentication domains
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
            /**
             * Authentication Options
             */
            authentication_options?: Array<{
              /**
               * Authentication default option
               */
              default_option?: boolean;
              /**
               * Authentication domains
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
        meeting_security?: {
          /**
           * Whether all meetings are required to be secured with at least one security option.
           *
           * This setting can only be disabled by Enterprise, ISV, Business (with more than 100 licenses), and Education accounts.
           */
          auto_security?: boolean;
          /**
           * Whether users in specific domains are blocked from joining meetings and webinars.
           */
          block_user_domain?: boolean;
          /**
           * A list of blocked domains.
           */
          block_user_domain_list?: Array<string>;
          /**
           * Information about the Chat Etiquette Tool.
           */
          chat_etiquette_tool?: {
            /**
             * Whether the **Chat Etiquette Tool** is enabled.
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
          };
          /**
           * Whether the meeting password will be encrypted and included in the invitation link. The provided link will allow participants to join the meeting without having to enter the password.
           */
          embed_password_in_join_link?: boolean;
          /**
           * The type of encryption used to start a meeting:
           * * `enhanced_encryption` — Enhanced encryption. Encryption data is stored in the cloud.
           * * `e2ee` — End-to-end encryption. The encryption key is stored on the local device and cannot be obtained by anyone else. E2EE also [**disables** certain features](https://support.zoom.us/hc/en-us/articles/360048660871), such as cloud recording, live streaming, and allowing participants to join before the host.
           */
          encryption_type?: 'enhanced_encryption' | 'e2ee';
          /**
           * Whether end-to-end encryption is enabled for meetings.
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
           * Whether a password is required for participants joining by phone.
           *
           * If enabled and the meeting is password-protected, a numeric password is required for participants to join by phone. For meetings with alphanumeric passwords, a numeric password will be generated.
           */
          phone_password?: boolean;
          /**
           * Whether all Personal Meeting ID (PMI) meetings that users can join via client or Zoom Rooms systems are password-protected.
           */
          pmi_password?: boolean;
          /**
           * Whether a password is required for meetings that have already been scheduled.
           */
          require_password_for_scheduled_meeting?: boolean;
          /**
           * Whether a password is required for webinars that have already been scheduled.
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
           * Whether a password is generated when scheduling webinars. Participants must use the generated password to join the scheduled webinar.
           */
          webinar_password?: boolean;
        };
      }
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups/{groupId}/settings',
      path: {
        groupId: groupId,
      },
      query: {
        option: option,
        custom_query_fields: customQueryFields,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
             **Error Code:** \`4130\` <br>
            Group does not exist: {groupId}.`,
      },
    });
  }

  /**
   * Update a group's settings
   * Update settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).<p style="background-color:#FEEFB3; color:#9F6000"><br>Note:</b> The `force_pmi_jbh_password` field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality.</p>
   * **Prerequisite**: Pro, Business, or Education account<br>
   * **Scopes**: `group:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **Error code:** `200`<br>
   * Only available for Paid account, {accountId}
   * @throws ApiError
   */
  public updateGroupSettings({
    groupId,
    option,
    requestBody,
  }: {
    /**
     * Id of the group.
     */
    groupId: string;
    /**
     * Optional query parameters:
     * * `meeting_authentication` — [Meeting authentication settings](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars).
     * * `recording_authentication` — [Recording authentication settings](https://support.zoom.us/hc/en-us/articles/360037756671-Authentication-Profiles-for-Cloud-Recordings).
     * * `meeting_security` — Meeting security settings.
     */
    option?: 'meeting_authentication' | 'recording_authentication' | 'meeting_security';
    requestBody?:
      | {
          /**
           * The group's audio conference settings.
           */
          audio_conferencing?: {
            /**
             * The group's [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F51844DRCX3K7BRTMZ40381R) settings.
             */
            toll_free_and_fee_based_toll_call?: {
              /**
               * Whether webinar attendees can dial in through the account's **Toll-free and Fee-based Toll Call** phone numbers. This feature is only available in version 5.2.2 and higher.
               */
              allow_webinar_attendees_dial?: boolean;
              /**
               * Whether the group has the [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F51844DRCX3K7BRTMZ40381R) setting enabled.
               */
              enable?: boolean;
              /**
               * The group's **Toll-free and Fee-based Toll Call** phone number information.
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
          in_meeting?: {
            /**
             * Allow participants who belong to your account to see that a guest (someone who does not belong to your account) is participating in the meeting/webinar.
             */
            alert_guest_join?: boolean;
            /**
             * If the value of this field is set to `true`,  allow users to delete messages in the in-meeting chat.
             *
             */
            allow_users_to_delete_messages_in_meeting_chat?: boolean;
            /**
             * Whether livestreaming is enabled.
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
             * Show Zoom windows during screen share.
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
             * Allow participants to use annotation tools to add information to shared screens.
             */
            annotation?: boolean;
            /**
             * Allow host to put attendee on hold.
             *
             * **This field has been deprecated and is no longer supported.**
             */
            attendee_on_hold?: boolean;
            /**
             * Enable users to see and add contacts to 'auto-answer group' in the contact list on chat. Any call from members of this group will be automatically answered.
             */
            auto_answer?: boolean;
            /**
             * Automatically save all in-meeting chats.
             */
            auto_saving_chat?: boolean;
            /**
             * Allow host to split meeting participants into separate, smaller rooms.
             */
            breakout_room?: boolean;
            /**
             * Whether the host can assign participants to breakout rooms when scheduling. This feature is **only** available in version 4.5.0 or higher.
             */
            breakout_room_schedule?: boolean;
            /**
             * Allow meeting participants to send chat message visible to all participants.
             */
            chat?: boolean;
            /**
             * Allow host to type closed captions or assign a participant/third party device to add closed captions.
             */
            closed_caption?: boolean;
            /**
             * Information about the group's closed captioning settings.
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
             * Allow the host to add co-hosts. Co-hosts have the same in-meeting controls as the host.
             */
            co_host?: boolean;
            /**
             * If set to `true`, you can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to be used by this group for hosting their real-time meeting and webinar traffic. These regions can be provided in the `data_center_regions` field. If set to `false`, the regions cannot be customized and the default regions will be used.
             */
            custom_data_center_regions?: boolean;
            /**
             * Whether custom livestreaming is enabled.
             */
            custom_live_streaming_service?: boolean;
            /**
             * The specific instructions to allow your account's meeting hosts to configure a custom livestream.
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
             * Require that all meetings are encrypted using AES.
             */
            e2e_encryption?: boolean;
            /**
             * Play sound when participants join or leave.
             */
            entry_exit_chime?: 'host' | 'all' | 'none';
            /**
             * Allow another user to take control of the camera during a meeting.
             */
            far_end_camera_control?: boolean;
            /**
             * Enable users to provide feedback to Zoom at the end of the meeting.
             */
            feedback?: boolean;
            /**
             * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for the users in the group or not.
             */
            file_transfer?: boolean;
            /**
             * Enable higher quality video for host and participants. This will require more bandwidth.
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
             * Whether Facebook livestreaming is enabled.
             */
            live_streaming_facebook?: boolean;
            /**
             * Whether YouTube livestreaming is enabled.
             */
            live_streaming_youtube?: boolean;
            manual_captioning?: {
              /**
               * Allow host to type or assign a participant to type.
               */
              allow_to_type?: boolean;
              /**
               * Whether to allow a live transcription service to transcribe meetings.
               */
              auto_generated_captions?: boolean;
              /**
               * Whether to allow the viewing of full transcripts in the in-meeting side panel.
               */
              full_transcript?: boolean;
              /**
               * Allow host to type closed captions or assign a participant/third party device to add closed captions.
               */
              manual_captions?: boolean;
              /**
               * Whether participants can save closed captions or transcripts.
               */
              save_captions?: boolean;
              /**
               * Whether to allow the use of an API token to integrate with 3rd-party closed captioning services.
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
             * Allow participants in a meeting can provide nonverbal feedback and express opinions by clicking on icons in the Participants panel.
             */
            non_verbal_feedback?: boolean;
            /**
             * Show the list of H.323/SIP devices only to the host.
             */
            only_host_view_device_list?: boolean;
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
             * When each participant joins by telephone, allow the option to record and play their own voice as entry and exit chimes.
             */
            record_play_own_voice?: boolean;
            /**
             * During screen sharing, allow the person who is sharing to let others control the shared content.
             */
            remote_control?: boolean;
            /**
             * Allow meeting host to provide 1:1 remote support to another participant.
             */
            remote_support?: boolean;
            /**
             * Indicate whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option should be enabled for the group or not.
             */
            request_permission_to_unmute?: boolean;
            /**
             * Allow host and participants to share their screen or content during meetings.
             */
            screen_sharing?: boolean;
            /**
             * Allow users to invite participants by email only by default.
             */
            sending_default_email_invites?: boolean;
            /**
             * Whether to allow participants to join a meeting directly from their browser and bypass the Zoom application download process. This is useful for participants who cannot download, install, or run applications. Note that the meeting experience from the browser is limited.
             */
            show_a_join_from_your_browser_link?: boolean;
            /**
             * Allow participants to join a meeting directly from their browser.
             */
            show_browser_join_link?: boolean;
            /**
             * Show the list of H.323/SIP devices.
             */
            show_device_list?: boolean;
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
             * Attendees cannot join a meeting until a host admits them individually from the waiting room.
             */
            waiting_room?: boolean;
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
               * Whether webinar attendees can save chats:
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
               * Whether webinar livestreaming is enabled.
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
             * Information about the account's meeting polling settings.
             */
            meeting_polling?: {
              /**
               * Whether to allow the host to add polls before or during a meeting.
               */
              enable?: boolean;
              /**
               * Whether to allow host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. Hosts can also set the correct answers for quizzes they create.
               */
              advanced_polls?: boolean;
              /**
               * Whether to allow users to manage saved polls and quizzes from Meetings
               */
              manage_saved_polls_and_quizzes?: boolean;
              /**
               * Whether to require answers to be anonymous.
               */
              require_answers_to_be_anonymous?: boolean;
              /**
               * Whether to allow host to upload an image for each question.
               */
              allow_host_to_upload_image?: boolean;
              /**
               * Whether to allow alternative hosts to add or edit polls and quizzes.
               */
              allow_alternative_host_to_add_edit?: boolean;
            };
            webinar_polling?: {
              /**
               * Whether to allow host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. Hosts can also set the correct answers for quizzes they create.
               */
              advanced_polls?: boolean;
              /**
               * Whether to allow alternative hosts to add or edit polls and quizzes.
               */
              allow_alternative_host_to_add_edit?: boolean;
              /**
               * Whether to allow users to manage saved polls and quizzes from Webinars
               */
              manage_saved_polls_and_quizzes?: boolean;
              /**
               * Whether to require answers to be anonymous.
               */
              require_answers_to_be_anonymous?: boolean;
              /**
               * Whether to allow host to upload an image for each question.
               */
              allow_host_to_upload_image?: boolean;
              /**
               * Whether to allow the host to add polls before or during a webinar.
               */
              enable?: boolean;
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
             * Whether Workplace by Facebook is enabled.
             */
            workplace_by_facebook?: boolean;
          };
          other_options?: {
            /**
             * Whether to display the Zoom Help badge on the bottom-right of the page.
             */
            allow_users_contact_support_via_chat?: boolean;
            /**
             * Whether iOS blurs the screenshot in the task switcher when multiple apps are open. Android hides the screenshot in the system-level list of recent apps.
             */
            blur_snapshot?: boolean;
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
          recording?: {
            /**
             * Make cloud recordings accessible to account members only.
             */
            account_user_access_recording?: boolean;
            /**
             * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted archiving solution access by the Zoom Support team.
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
             * Record meetings automatically as they start.
             */
            auto_recording?: string;
            /**
             * Allow hosts to record and save the meeting / webinar in the cloud.
             */
            cloud_recording?: boolean;
            /**
             * Allow anyone with a link to the cloud recording to download.
             */
            cloud_recording_download?: boolean;
            /**
             * Allow only the host with a link to the cloud recording to download.
             */
            cloud_recording_download_host?: boolean;
            /**
             * Allow the host to delete the recordings. If this option is disabled, the recordings cannot be deleted by the host and only admin can delete them.
             */
            host_delete_cloud_recording?: boolean;
            /**
             * The account's [**Record active speaker, gallery view and shared screen separately**](https://support.zoom.us/hc/en-us/articles/360060316092-Changing-basic-and-advanced-cloud-recording-settings#h_01F4CYJTCTXNS2MXH00W9EFG6R) settings.
             */
            record_files_separately?: {
              /**
               * Whether recording only the active speaker is enabled.
               */
              active_speaker?: boolean;
              /**
               * Whether recording only the gallery view is enabled.
               */
              gallery_view?: boolean;
              /**
               * Whether recording only shared screen is enabled.
               */
              shared_screen?: boolean;
            };
            /**
             * Whether participants' names display in the recording.
             */
            display_participant_name?: boolean;
            /**
             * Whether thumbnails of the presenter are recorded when they are sharing their screen.
             */
            recording_thumbnails?: boolean;
            /**
             * Whether recordings will be optimized for a 3rd party video editor. This can increase the file size and the time it takes to generate recording files.
             */
            optimize_recording_for_3rd_party_video_editor?: boolean;
            /**
             * Whether the [recording highlights](https://support.zoom.us/hc/en-us/articles/360060802432) feature is enabled.
             * @deprecated
             */
            recording_highlight?: boolean;
            /**
             * Whether panelist chats are saved to the recording.
             */
            save_panelist_chat?: boolean;
            /**
             * Whether poll results shared during the meeting or webinar are saved. This also includes poll results shared during the meeting or webinar.
             */
            save_poll_results?: boolean;
            /**
             * Whether [closed captions](https://support.zoom.us/hc/en-us/articles/207279736) are saved as a VTT (Video Track Text) file.
             */
            save_close_caption?: boolean;
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
             * Whether to record one audio file for all participants.
             */
            record_audio_file?: boolean;
            /**
             * When someone is sharing their screen, active speaker will show on the top right corner of the shared screen.
             */
            record_gallery_view?: boolean;
            /**
             * Record active speaker with shared screen.
             */
            record_speaker_view?: boolean;
            /**
             * Automatically transcribe the audio of a meeting or webinar for cloud recordings.
             */
            recording_audio_transcript?: boolean;
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
             * Save chat messages from the meeting / webinar.
             */
            save_chat_text?: boolean;
            /**
             * Add a timestamp to the recording.
             */
            show_timestamp?: boolean;
          };
          schedule_meeting?: {
            /**
             * Determine how participants can join the audio portion of the meeting.
             */
            audio_type?: string;
            /**
             * If the value is set to `true`, the meeting password will be encrypted and included in the join meeting link to allow participants to join with just one click without having to enter the password.
             *
             */
            embed_password_in_join_link?: boolean;
            /**
             * If join before host option is enabled for a personal meeting, then enforce password requirement.
             * @deprecated
             */
            force_pmi_jbh_password?: boolean;
            /**
             * Start meetings with host video on.
             */
            host_video?: boolean;
            /**
             * Allow participants to join the meeting before the host arrives
             */
            join_before_host?: boolean;
            /**
             * Automatically mute all participants when they join the meeting.
             */
            mute_upon_entry?: boolean;
            /**
             * Start meetings with participant video on.
             */
            participant_video?: boolean;
            /**
             * Generate and send new passwords for newly scheduled or edited meetings.
             */
            pstn_password_protected?: boolean;
            /**
             * Require password from all participants before joining a meeting.
             */
            require_password_for_all_meetings?: boolean;
            /**
             * If enabled, a random password will be generated on the user's end who starts the instant meeting. Other participants will have to enter the password to join the meeting. If you use PMI for your instant meetings, this option will be disabled.
             */
            require_password_for_instant_meetings?: boolean;
            /**
             * Indicates whether a password is required for [PMI](https://support.zoom.us/hc/en-us/articles/203276937-Using-Personal-Meeting-ID-PMI-) meetings or not. The value can be one of the following:<br>
             * `none`: Do not require password for PMI meetings.<br>
             * `all`: Require participants to enter password for all PMI enabled meetings.<br> `jbh_only`: Require password only for meetings where the **"join before host"** setting is enabled.
             */
            require_password_for_pmi_meetings?: 'all' | 'jbh_only' | 'none';
            /**
             * Require a password for meetings which have already been scheduled
             *
             */
            require_password_for_scheduled_meetings?: boolean;
            /**
             * This setting applies for regular meetings that do not use PMI. If enabled, a password will be generated while a host schedules a new meeting and participants will be required to enter the password before they can join the meeting.
             */
            require_password_for_scheduling_new_meetings?: boolean;
            /**
             * Receive desktop notification for upcoming meetings.
             */
            upcoming_meeting_reminder?: boolean;
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
          };
          telephony?: {
            audio_conference_info?: string;
            /**
             * Allow users to join the meeting using the existing 3rd party audio configuration.
             */
            third_party_audio?: boolean;
          };
        }
      | (
          | {
              /**
               * Meeting Authentication Options
               */
              authentication_option?: {
                /**
                 * Authentication action
                 */
                action?: 'update' | 'show' | 'hide';
                /**
                 * Authentication default option
                 */
                default_option?: boolean;
                /**
                 * Authentication domains
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
              };
              /**
               * Only authenticated users can join meetings
               */
              meeting_authentication?: boolean;
            }
          | {
              /**
               * Authentication Options
               */
              authentication_option?: {
                /**
                 * Authentication action
                 */
                action?: 'update' | 'show' | 'hide';
                /**
                 * Authentication default option
                 */
                default_option?: boolean;
                /**
                 * Authentication domains
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
              };
              /**
               * Only authenticated users can view cloud recordings
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
               * Information about the defined **Chat Etiquette Tool** policies.
               */
              policies?: Array<{
                /**
                 * The policy ID.
                 */
                id?: string;
                /**
                 * The policy's current status:
                 * * `activated` — Activated.
                 * * `deactivated` — Deactivated.
                 */
                status?: 'activated' | 'deactivated';
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
        };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/groups/{groupId}/settings',
      path: {
        groupId: groupId,
      },
      query: {
        option: option,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
             **Error Code:** \`4130\`<br>
            Group does not exist: {groupId}.`,
      },
    });
  }

  /**
   * Delete Virtual Background files
   * Use this API to delete a group's [Virtual Background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_01EJF3YFEWGT8YA0ZJ079JEDQE).
   *
   * **Scope:** `group:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The [Virtual Background feature](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) must be enabled on the account.
   * @returns void
   * @throws ApiError
   */
  public delGroupVb({
    groupId,
    fileIds,
  }: {
    /**
     * The group ID. To get a group's ID, use the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    /**
     * A comma-separated list of the file IDs to delete.
     */
    fileIds?: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/groups/{groupId}/settings/virtual_backgrounds',
      path: {
        groupId: groupId,
      },
      query: {
        file_ids: fileIds,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
            Bad Request

             **Error Code:** \`300\` <br>
             * Invalid parameter: {file_ids}
             * Group member not found.`,
        404: `**HTTP Status Code:** \`404\` <br>
            Not Found

             **Error Code:** \`4130\` <br>
            A group with this {groupId} does not exist.`,
      },
    });
  }

  /**
   * Upload Virtual Background files
   * Use this API to [upload Virtual Background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_01EJF3YFEWGT8YA0ZJ079JEDQE) for all users in a group to use.
   *
   * **Scopes:** `group:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * The [Virtual Background feature](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) must be enabled on the account.
   * @returns any **HTTP Status Code:** `201` <br>
   * Created
   * @throws ApiError
   */
  public uploadGroupVb({
    groupId,
    formData,
  }: {
    /**
     * The group ID. To get a group's ID, use the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    formData?: {
      /**
       * The Virtual Background file's path.
       */
      file?: string;
    };
  }): CancelablePromise<{
    /**
     * The file's ID.
     */
    id?: string;
    /**
     * Whether the file is the default Virtual Background file.
     */
    is_default?: boolean;
    /**
     * The file's name.
     */
    name?: string;
    /**
     * The file's size, in bytes.
     */
    size?: string;
    /**
     * The file type.
     */
    type?: string;
  }> {
    // @ts-ignore
    return this.httpRequest.request({
      method: 'POST',
      url: '/groups/{groupId}/settings/virtual_backgrounds',
      path: {
        groupId: groupId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
             **Error Code:** \`120\`<br>
            No file uploaded, verify that a file has been uploaded.<br>
            File size cannot exceed 15M.<br>
            A maximum of 10 files are allowed for a user.<br>
            Only jpg/jpeg or png image file can be uploaded.

            `,
        404: `**HTTP Status Code:** \`404\` **Not Found** <br>
             **Error Code:** \`1001\`<br>
            User not exist.<br>
            User {email} not exist or not belong to this account.`,
      },
    });
  }
}
