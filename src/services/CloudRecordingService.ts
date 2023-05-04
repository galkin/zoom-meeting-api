/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CloudRecordingService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Meeting Recording's Analytics Summary
   * Use this API to return a meeting recording's [analytics summary](https://support.zoom.us/hc/en-us/articles/205347605-Managing-cloud-recordings#h_0b665029-ce74-4849-9794-d1aa0320d163). **Maximum duration: 1 Month**. To access a password-protected cloud recording, add an `access_token` parameter to the download URL and provide OAuth access token or [JWT](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app) as the `access_token` value.
   *
   * **Scopes:** `recording:read:admin`, `recording:read` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * Analytics Summary listed successfully.
   * @throws ApiError
   */
  public analyticsSummary({
    meetingId,
    from,
    to,
  }: {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * The start date for the monthly range to query. The maximum range can be a month. If you do not provide this value, this defaults to the current date.
     */
    from?: string;
    /**
     * The end date for the monthly range to query. The maximum range can be a month.
     */
    to?: string;
  }): CancelablePromise<{
    /**
     * The queried start date
     */
    from?: string;
    /**
     * The queried end date.
     */
    to?: string;
    /**
     * Analytics Summary.
     */
    analytics_summary?: Array<any>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/recordings/analytics_summary',
      path: {
        meetingId: meetingId,
      },
      query: {
        from: from,
        to: to,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User not found on this account: {accountId}`,
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting recording not found.

         **Error Code:** \`1001\` <br>
        User "{userId}" does not exist or does not belong to this account.

         **Error Code:** \`3301\` <br>
        There is no recording for this meeting.`,
      },
    });
  }

  /**
   * Get Meeting Recording's Analytics Details
   * Use this API to return a meeting recording's [analytics details](https://support.zoom.us/hc/en-us/articles/205347605-Managing-cloud-recordings#h_0b665029-ce74-4849-9794-d1aa0320d163). **Maximum duration: 1 Month**. To access a password-protected cloud recording, add an `access_token` parameter to the download URL and provide OAuth access token or [JWT](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app) as the `access_token` value.
   *
   * **Scopes:** `recording:read:admin`, `recording:read` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * Analytics Detail listed successfully.
   * @throws ApiError
   */
  public analyticsDetails({
    meetingId,
    pageSize = 30,
    nextPageToken,
    from,
    to,
    type,
  }: {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The start date for the monthly range to query. The maximum range can be a month. If you do not provide this value, this defaults to the current date.
     */
    from?: string;
    /**
     * The end date for the monthly range to query. The maximum range can be a month.
     */
    to?: string;
    /**
     * The type of analytics details:
     * * `by_view` — by_view.
     * * `by_download` — by_download.
     */
    type?: 'by_view' | 'by_download';
  }): CancelablePromise<{
    /**
     * The queried start date
     */
    from?: string;
    /**
     * The queried end date.
     */
    to?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of records returned within a single API call.
     */
    page_size?: number;
    /**
     * The total number of all the records available across pages.
     */
    total_records?: number;
    /**
     * Analytics Detail.
     */
    analytics_details?: Array<any>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/recordings/analytics_details',
      path: {
        meetingId: meetingId,
      },
      query: {
        page_size: pageSize,
        next_page_token: nextPageToken,
        from: from,
        to: to,
        type: type,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User not found on this account: {accountId}`,
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting recording not found.

         **Error Code:** \`1001\` <br>
        User "{userId}" does not exist or does not belong to this account.

         **Error Code:** \`3301\` <br>
        There is no recording for this meeting.`,
      },
    });
  }

  /**
   * Delete meeting recordings
   * Delete all recording files of a meeting.<br><br>
   *
   * **Scopes:** `recording:write:admin` `recording:write`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   * **Prerequisites**:
   * * Cloud Recording should be enabled on the user's account.<br>
   *
   * @returns any **HTTP Status Code:** `200` <br>
   * Recordings deleted.
   *
   * **Error Code:** `200` <br>
   * You do not have the right permission.
   * @throws ApiError
   */
  public recordingDelete({
    meetingId,
    action = 'trash',
  }: {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * The recording delete actions:<br>`trash` - Move recording to trash.<br>`delete` - Delete recording permanently.
     */
    action?: 'trash' | 'delete';
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/meetings/{meetingId}/recordings',
      path: {
        meetingId: meetingId,
      },
      query: {
        action: action,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account: {accountId}. <br/>
         **Error Code:** \`3332\` <br>
        This recording was selected for a simulive webinar. You cannot delete or trash it.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting recording not found
         **Error Code:** \`1001\` <br> User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3301\`<br>There is no recording for this meeting.
        `,
      },
    });
  }

  /**
   * Get meeting recordings
   * Use this API to return all of a meeting's [recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording#h_7420acb5-1897-4061-87b4-5b76e99c03b4). The recording files can be downloaded via the `download_url` property listed in the response.
   *
   * To access a password-protected cloud recording, add an `access_token` parameter to the download URL and provide OAuth access token or [JWT](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app) as the `access_token` value.
   *
   * **Scopes:** `recording:read:admin`, `recording:read` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200` <br>
   * Recording object returned.
   *
   * **Error Code:** `200` <br>
   * You do not have the right permissions.
   * @throws ApiError
   */
  public recordingGet({
    meetingId,
    includeFields,
    ttl,
  }: {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * The `download_access_token` value for downloading the meeting's recordings.
     */
    includeFields?: string;
    /**
     * The `download_access_token` Time to Live (TTL) value. This parameter is only valid if the `include_fields` query parameter contains the `download_access_token` value.
     */
    ttl?: number;
  }): CancelablePromise<{
    /**
     * Unique Identifier of the user account.
     */
    account_id?: string;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * ID of the user set as host of meeting.
     */
    host_id?: string;
    /**
     * Meeting ID - also known as the meeting number.
     */
    id?: number;
    /**
     * Number of recording files returned in the response of this API call. This includes the `recording_files` and  `participant_audio_files` files.
     */
    recording_count?: number;
    /**
     * The time at which the meeting started.
     */
    start_time?: string;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * The total file size of the recording. This includes the `recording_files` and `participant_audio_files` files.
     */
    total_size?: number;
    /**
     * The recording's associated type of meeting or webinar:
     *
     * If the recording is of a meeting:
     * * `1` — Instant meeting.
     * * `2` — Scheduled meeting.
     * * `3` — A recurring meeting with no fixed time.
     * * `4` — A meeting created via PMI (Personal Meeting ID).
     * * `7` — A [Personal Audio Conference](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference) (PAC).
     * * `8` - Recurring meeting with a fixed time.
     *
     * If the recording is of a webinar:
     * * `5` — A webinar.
     * * `6` — A recurring webinar without a fixed time
     * * `9` — A recurring webinar with a fixed time.
     *
     * If the recording is **not** from a meeting or webinar:
     *
     * * `99` — A recording uploaded via the [**Recordings**](https://zoom.us/recording) interface on the Zoom Web Portal.
     */
    type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 99;
    /**
     * Unique Meeting Identifier. Each instance of the meeting will have its own UUID.
     */
    uuid?: string;
    /**
     * List of recording file.
     */
    recording_files?: Array<{
      /**
       * The time at which recording was deleted. Returned in the response only for trash query.
       */
      deleted_time?: string;
      /**
       * The URL at which to download the the recording.
       *
       * **JWT apps**
       *
       * To access a private or password-protected cloud recording of a user in your account, use a [Zoom JWT app](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app). Use the generated JWT token as the value of the `access_token` query parameter and include this query parameter at the end of the URL. For example:
       *
       * `https://{{base-domain}}/rec/download/{{path-to-file-download}}?access_token={{JWT-token}}`
       *
       * **OAuth apps**
       *
       * If a user has authorized and installed your OAuth app that contains recording scopes, use the user's [OAuth access token](https://marketplace.zoom.us/docs/guides/auth/oauth) to download the file. For example:
       *
       * `https://{{base-domain}}/rec/archive/download/xxx?access_token={{OAuth-access-token}}`
       *
       * **Note:** This field does **not** return for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). Instead, this API will return the `file_path` field.
       *
       * **Note:** We recommend that you send the access_token as a Bearer token in the Authorization header, for example: "Authorization": "Bearer <ACCESS_TOKEN>”.
       */
      download_url?: string;
      /**
       * The file path to the On-Premise account recording.
       *
       * **Note:** This API only returns this field for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). It does **not** return the `download_url` field.
       */
      file_path?: string;
      /**
       * The recording file size.
       */
      file_size?: number;
      /**
       * The recording file type. The value of this field could be one of the following:<br>
       * `MP4`: Video file of the recording.<br>`M4A` Audio-only file of the recording.<br>`TIMELINE`: Timestamp file of the recording in JSON file format. To get a timeline file, the "Add a timestamp to the recording" setting must be enabled in the [recording settings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-recording#h_3f14c3a4-d16b-4a3c-bbe5-ef7d24500048). The time will display in the host's timezone, set on their Zoom profile.
       * <br> `TRANSCRIPT`: Transcription file of the recording in VTT format.<br> `CHAT`: A TXT file containing in-meeting chat messages that were sent during the meeting.<br>`CC`: File containing closed captions of the recording in VTT file format.<br>`CSV`: File containing polling data in csv format.
       *
       * <br>
       *
       * A recording file object with file type of either `CC` or `TIMELINE` **does not have** the following properties:<br>
       * `id`, `status`, `file_size`, `recording_type`, and `play_url`.<br>`SUMMARY`: Summary file of the recording in JSON file format.
       */
      file_type?: 'MP4' | 'M4A' | 'CHAT' | 'TRANSCRIPT' | 'CSV' | 'TB' | 'CC' | 'CHAT_MESSAGE' | 'SUMMARY';
      /**
       * The file extension type of the recording file.
       */
      file_extension?: 'MP4' | 'M4A' | 'TXT' | 'VTT' | 'CSV' | 'JSON' | 'JPG';
      /**
       * The recording file ID. Included in the response of general query.
       */
      id?: string;
      /**
       * The meeting ID.
       */
      meeting_id?: string;
      /**
       * The URL using which a recording file can be played.
       */
      play_url?: string;
      /**
       * The recording end time. Response in general query.
       */
      recording_end?: string;
      /**
       * The recording start time.
       */
      recording_start?: string;
      /**
       * The recording type. The value of this field can be one of the following:<br>`shared_screen_with_speaker_view(CC)`<br>`shared_screen_with_speaker_view`<br>`shared_screen_with_gallery_view`<br>`speaker_view`<br>`gallery_view`<br>`shared_screen`<br>`audio_only`<br>`audio_transcript`<br>`chat_file`<br>`active_speaker`<br>`poll`<br>`timeline`<br>`closed_caption`<br>`audio_interpretation`<br>`summary`<br>`summary_next_steps`<br>`summary_smart_chapters`
       */
      recording_type?:
        | 'shared_screen_with_speaker_view(CC)'
        | 'shared_screen_with_speaker_view'
        | 'shared_screen_with_gallery_view'
        | 'active_speaker'
        | 'gallery_view'
        | 'shared_screen'
        | 'audio_only'
        | 'audio_transcript'
        | 'chat_file'
        | 'poll'
        | 'host_video'
        | 'closed_caption'
        | 'timeline'
        | 'thumbnail'
        | 'audio_interpretation'
        | 'summary'
        | 'summary_next_steps'
        | 'summary_smart_chapters';
      /**
       * The recording status.
       */
      status?: 'completed';
    }>;
    /**
     * The JWT token to download the meeting's recording. This response only returns if the `download_access_token` is included in the `include_fields` query parameter.
     */
    download_access_token?: string;
    /**
     * The cloud recording's password.
     */
    password?: string;
    /**
     * The cloud recording's password to be used in the URL. This recording's password can be directly spliced in `play_url` or `share_url` with `?pwd=` to access and play. For example, 'https://zoom.us/rec/share**************?pwd=yNYIS408EJygs7rE5vVsJwXIz4-VW7MH'. If you want to use this field, please contact Zoom support.
     */
    recording_play_passcode?: string;
    /**
     * A list of recording files. The API only returns this response when the **Record a separate audio file of each participant** setting is enabled.
     */
    participant_audio_files?: Array<{
      /**
       * The URL at which to download the the recording.
       *
       * **JWT apps**
       *
       * To access a private or password-protected cloud recording of a user in your account, use a [Zoom JWT app](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app). Use the generated JWT token as the value of the `access_token` query parameter and include this query parameter at the end of the URL. For example:
       *
       * `https://{{base-domain}}/rec/download/{{path-to-file-download}}?access_token={{JWT-token}}`
       *
       * **OAuth apps**
       *
       * If a user has authorized and installed your OAuth app that contains recording scopes, use the user's [OAuth access token](https://marketplace.zoom.us/docs/guides/auth/oauth) to download the file. For example:
       *
       * `https://{{base-domain}}/rec/archive/download/xxx?access_token={{OAuth-access-token}}`
       *
       * **Note:** This field does **not** return for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). Instead, this API will return the `file_path` field.
       *
       * **Note:** We recommend that you send the access_token as a Bearer token in the Authorization header, for example: "Authorization": "Bearer <ACCESS_TOKEN>”.
       */
      download_url?: string;
      /**
       * The recording file's name.
       */
      file_name?: string;
      /**
       * The file path to the On-Premise account recording.
       *
       * **Note:** This API only returns this field for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). It does **not** return the `download_url` field.
       */
      file_path?: string;
      /**
       * The recording file's size, in bytes.
       */
      file_size?: number;
      /**
       * The recording file's format. One of:
       *
       * * `MP4` — Video file.
       * * `M4A` — Audio-only file.
       * * `TIMELINE` — Timestamp file of the recording, in JSON file format. To get a timeline file, the **Add a timestamp to the recording** setting **must** be enabled in the [recording settings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-recording#h_3f14c3a4-d16b-4a3c-bbe5-ef7d24500048). The time will display in the host's timezone.
       * * `TRANSCRIPT` — A transcript of the recording, in VTT format.
       * * `CHAT` — A text file containing chat messages sent during the meeting.
       * * `CC` — A file containing the closed captions of the recording, in VTT file format.
       * * `CSV` — A file containing polling data, in CSV format.
       *
       * A recording file object with file the `CC` or `TIMELINE` value **does not** have the `id`, `status`, `file_size`, `recording_type`, and `play_url` properties.
       */
      file_type?: string;
      /**
       * The recording file's unique ID. This is included in the general query response.
       */
      id?: string;
      /**
       * The URL at which the recording file can be opened and played.
       */
      play_url?: string;
      /**
       * The recording file's end time. This is included in the general query response.
       */
      recording_end?: string;
      /**
       * The recording file's start time.
       */
      recording_start?: string;
      /**
       * The recording file's status.
       */
      status?: 'completed';
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/recordings',
      path: {
        meetingId: meetingId,
      },
      query: {
        include_fields: includeFields,
        ttl: ttl,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User not found on this account: {accountId}`,
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting recording not found.

         **Error Code:** \`1001\` <br>
        User "{userId}" does not exist or does not belong to this account.

         **Error Code:** \`3301\` <br>
        There is no recording for this meeting.`,
      },
    });
  }

  /**
   * List recording registrants
   * Use this API to list registrants of a past meeting's [on-demand cloud recordings](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-recordings). Users must [register](/docs/api-reference/zoom-api/methods#operation/meetingRecordingRegistrantCreate) to view the recordings.
   *
   * **Scopes:** `recording:read:admin`, `recording:read` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * Registrants returned.
   * @throws ApiError
   */
  public meetingRecordingRegistrants({
    meetingId,
    status = 'approved',
    pageSize = 30,
    pageNumber = 1,
    nextPageToken,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    /**
     * Query by the registrant's status:
     * * `pending` — The registration is pending.
     * * `approved` — The registrant is approved.
     * * `denied` — The registration is denied.
     */
    status?: 'pending' | 'approved' | 'denied';
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
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of pages returned for the request made.
     */
    page_count?: number;
    /**
     * **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.
     * @deprecated
     */
    page_number?: number;
    /**
     * The number of records returned with a single API call.
     */
    page_size?: number;
    /**
     * The total number of all the records available across pages.
     */
    total_records?: number;
    /**
     * Information about the cloud recording registrants.
     */
    registrants?: Array<{
      /**
       * The registrant's ID.
       */
      id?: string;
      /**
       * The registrant's address.
       */
      address?: string;
      /**
       * The registrant's city.
       */
      city?: string;
      /**
       * The registrant's questions and comments.
       */
      comments?: string;
      /**
       * The registrant's two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
       */
      country?: string;
      /**
       * Information about custom questions.
       */
      custom_questions?: Array<{
        /**
         * The title of the custom question.
         */
        title?: string;
        /**
         * The custom question's response value. This has a limit of 128 characters.
         */
        value?: string;
      }>;
      /**
       * The registrant's email address. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for return value details.
       */
      email: string;
      /**
       * The registrant's first name.
       */
      first_name: string;
      /**
       * The registrant's industry.
       */
      industry?: string;
      /**
       * The registrant's job title.
       */
      job_title?: string;
      /**
       * The registrant's last name.
       */
      last_name?: string;
      /**
       * The registrant's number of employees:
       * * `1-20`
       * * `21-50`
       * * `51-100`
       * * `101-250`
       * * `251-500`
       * * `501-1,000`
       * * `1,001-5,000`
       * * `5,001-10,000`
       * * `More than 10,000`
       */
      no_of_employees?: '' | '1-20' | '21-50' | '51-100' | '101-250' | '251-500' | '501-1,000' | '1,001-5,000' | '5,001-10,000' | 'More than 10,000';
      /**
       * The registrant's organization.
       */
      org?: string;
      /**
       * The registrant's phone number.
       */
      phone?: string;
      /**
       * The registrant's purchasing time frame:
       * * `Within a month`
       * * `1-3 months`
       * * `4-6 months`
       * * `More than 6 months`
       * * `No timeframe`
       */
      purchasing_time_frame?: '' | 'Within a month' | '1-3 months' | '4-6 months' | 'More than 6 months' | 'No timeframe';
      /**
       * The registrant's role in the purchase process:
       * * `Decision Maker`
       * * `Evaluator/Recommender`
       * * `Influencer`
       * * `Not involved`
       */
      role_in_purchase_process?: '' | 'Decision Maker' | 'Evaluator/Recommender' | 'Influencer' | 'Not involved';
      /**
       * The registrant's state or province.
       */
      state?: string;
      /**
       * The registrant's status:
       * * `approved` — Registrant is approved.
       * * `denied` — Registrant is denied.
       * * `pending` — Registrant is waiting for approval.
       */
      status?: 'approved' | 'denied' | 'pending';
      /**
       * The registrant's ZIP or postal code.
       */
      zip?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/recordings/registrants',
      path: {
        meetingId: meetingId,
      },
      query: {
        status: status,
        page_size: pageSize,
        page_number: pageNumber,
        next_page_token: nextPageToken,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting recording not found.`,
      },
    });
  }

  /**
   * Create a recording registrant
   * Cloud Recordings of past Zoom Meetings can be made [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings). Users should be [registered](/docs/api-reference/zoom-api/methods#operation/meetingRecordingRegistrantCreate) to view these recordings.
   *
   * Use this API to register a user to gain access to **On-demand Cloud Recordings** of a past meeting.<br>
   * **Scopes:** `recording:write:admin`, `recording:write`.<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   * @returns any **HTTP Status Code:** `201` <br>
   * Registration submitted.
   * @throws ApiError
   */
  public meetingRecordingRegistrantCreate({
    meetingId,
    requestBody,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    requestBody: {
      /**
       * The registrant's address.
       */
      address?: string;
      /**
       * The registrant's city.
       */
      city?: string;
      /**
       * The registrant's questions and comments.
       */
      comments?: string;
      /**
       * The registrant's two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
       */
      country?: string;
      /**
       * Information about custom questions.
       */
      custom_questions?: Array<{
        /**
         * The title of the custom question.
         */
        title?: string;
        /**
         * The custom question's response value. This has a limit of 128 characters.
         */
        value?: string;
      }>;
      /**
       * The registrant's email address. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for return value details.
       */
      email: string;
      /**
       * The registrant's first name.
       */
      first_name: string;
      /**
       * The registrant's industry.
       */
      industry?: string;
      /**
       * The registrant's job title.
       */
      job_title?: string;
      /**
       * The registrant's last name.
       */
      last_name?: string;
      /**
       * The registrant's number of employees:
       * * `1-20`
       * * `21-50`
       * * `51-100`
       * * `101-250`
       * * `251-500`
       * * `501-1,000`
       * * `1,001-5,000`
       * * `5,001-10,000`
       * * `More than 10,000`
       */
      no_of_employees?: '' | '1-20' | '21-50' | '51-100' | '101-250' | '251-500' | '501-1,000' | '1,001-5,000' | '5,001-10,000' | 'More than 10,000';
      /**
       * The registrant's organization.
       */
      org?: string;
      /**
       * The registrant's phone number.
       */
      phone?: string;
      /**
       * The registrant's purchasing time frame:
       * * `Within a month`
       * * `1-3 months`
       * * `4-6 months`
       * * `More than 6 months`
       * * `No timeframe`
       */
      purchasing_time_frame?: '' | 'Within a month' | '1-3 months' | '4-6 months' | 'More than 6 months' | 'No timeframe';
      /**
       * The registrant's role in the purchase process:
       * * `Decision Maker`
       * * `Evaluator/Recommender`
       * * `Influencer`
       * * `Not involved`
       */
      role_in_purchase_process?: '' | 'Decision Maker' | 'Evaluator/Recommender' | 'Influencer' | 'Not involved';
      /**
       * The registrant's state or province.
       */
      state?: string;
      /**
       * The registrant's status:
       * * `approved` — Registrant is approved.
       * * `denied` — Registrant is denied.
       * * `pending` — Registrant is waiting for approval.
       */
      status?: 'approved' | 'denied' | 'pending';
      /**
       * The registrant's ZIP or postal code.
       */
      zip?: string;
    };
  }): CancelablePromise<{
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Registrant ID
     */
    registrant_id?: string;
    /**
     * Share URL for the on-demand recording. This includes the “tk” token for the registrant. This is similar to the token that Zoom returns in the URL response to join a registered meeting, for example: `url?tk=xxxx`. Except while the meeting registration token can be used to join the meeting, this token can only be used to watch the recording.
     */
    share_url?: string;
    /**
     * Meeting Topic
     */
    topic?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/meetings/{meetingId}/recordings/registrants',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting recording not found`,
      },
    });
  }

  /**
   * Get registration questions
   * For [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) meeting recordings, you can include fields with questions that will be shown to registrants when they register to view the recording.
   *
   * Use this API to retrieve a list of questions that are displayed for users to complete when registering to view the recording of a specific meeting.<br>
   * **Scopes:** `recording:read:admin`, `recording:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Recording Registrant Question object returned.
   * @throws ApiError
   */
  public recordingRegistrantsQuestionsGet({
    meetingId,
  }: {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
  }): CancelablePromise<{
    /**
     * Array of Registrant Custom Questions
     */
    custom_questions?: Array<{
      /**
       * Answer choices for the question. Can not be used with Short answer type.
       */
      answers?: Array<string>;
      /**
       * State whether registrants are required to answer custom questions or not.
       */
      required?: boolean;
      /**
       * Title of the question.
       */
      title?: string;
      /**
       * The type of registration question and answers.
       */
      type?: 'short' | 'single' | 'multiple';
    }>;
    /**
     * Array of Registrant Questions
     */
    questions?: Array<{
      /**
       * Field name.
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
       * State whether the field is required to be answered by the registrant or not.
       */
      required?: boolean;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/recordings/registrants/questions',
      path: {
        meetingId: meetingId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting recording or registrant not found.`,
      },
    });
  }

  /**
   * Update registration questions
   * For [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) meeting recordings, you can include fields with questions that will be shown to registrants when they register to view the recording.
   *
   * Use this API to update registration questions that are to be answered by users while registering to view a recording.<br>
   * **Scopes:** `recording:write:admin`, `recording:write`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   *
   * @returns void
   * @throws ApiError
   */
  public recordingRegistrantQuestionUpdate({
    meetingId,
    requestBody,
  }: {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * Recording Registrant Questions
     */
    requestBody: {
      /**
       * Array of Registrant Custom Questions
       */
      custom_questions?: Array<{
        /**
         * Answer choices for the question. Can not be used with Short answer type.
         */
        answers?: Array<string>;
        /**
         * State whether registrants are required to answer custom questions or not.
         */
        required?: boolean;
        /**
         * Title of the question.
         */
        title?: string;
        /**
         * The type of registration question and answers.
         */
        type?: 'short' | 'single' | 'multiple';
      }>;
      /**
       * Array of Registrant Questions
       */
      questions?: Array<{
        /**
         * Field name.
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
         * State whether the field is required to be answered by the registrant or not.
         */
        required?: boolean;
      }>;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/meetings/{meetingId}/recordings/registrants/questions',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting recording or Registrant not found`,
      },
    });
  }

  /**
   * Update registrant's status
   * A registrant can either be approved or denied from viewing the [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) recording.
   * Use this API to update a registrant's status.
   *
   * **Scopes:** `recording:write:admin`, `recording:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * @returns void
   * @throws ApiError
   */
  public meetingRecordingRegistrantStatus({
    meetingId,
    requestBody,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
    requestBody: {
      action: 'approve' | 'deny';
      /**
       * List of registrants
       */
      registrants?: Array<{
        id?: string;
      }>;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/meetings/{meetingId}/recordings/registrants/status',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
        Meeting recording or Registrant not found`,
        429: `**HTTP Status Code:** \`429\` <br> You have exceeded the daily rate limit of "{0}" for cloud recording **Update registrant's status** API requests for the registrant "{1}". You can resume these API requests at GMT 00:00:00.`,
      },
    });
  }

  /**
   * Get meeting recording settings
   * Retrieve settings applied to a meeting's [Cloud Recording](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording).<br><br>
   * **Scopes**: `recording:read:admin` `recording:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` <br>
   * @returns any **HTTP Status Code:** `200` <br>
   * Meeting recording settings returned
   * @throws ApiError
   */
  public recordingSettingUpdate({
    meetingId,
  }: {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
  }): CancelablePromise<{
    /**
     * Approval type for the registration.<br>
     * `0`- Automatically approve the registration when a user registers.<br>
     * `1` - Manually approve or deny the registration of a user.<br>
     * `2` - No registration required to view the recording.
     */
    approval_type?: 0 | 1 | 2;
    /**
     * Authentication domains.
     */
    authentication_domains?: string;
    /**
     * Authentication Options.
     */
    authentication_option?: string;
    /**
     * Determine whether registration is required to view the recording.
     */
    on_demand?: boolean;
    /**
     * Enable password protection for the recording by setting a password. The password must have a minimum of **eight** characters with a mix of numbers, letters and special characters.<br><br>
     * **Note:** If the account owner or the admin has set minimum password strength requirements for recordings via Account Settings, the password value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](/docs/api-reference/zoom-api/ma#operation/accountSettings) API.
     */
    password?: string;
    /**
     * Only authenticated users can view.
     */
    recording_authentication?: boolean;
    /**
     * Send an email to host when someone registers to view the recording. This applies for On-demand recordings only.
     */
    send_email_to_host?: boolean;
    /**
     * Determine how the meeting recording is shared.
     */
    share_recording?: 'publicly' | 'internally' | 'none';
    /**
     * Show social share buttons on registration page. This applies for On-demand recordings only.
     */
    show_social_share_buttons?: boolean;
    /**
     * Name of the recording.
     */
    topic?: string;
    /**
     * Determine whether a viewer can download the recording file or not.
     */
    viewer_download?: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/meetings/{meetingId}/recordings/settings',
      path: {
        meetingId: meetingId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting recording not found.`,
      },
    });
  }

  /**
   * Update meeting recording settings
   * Update settings applied to a meeting's [Cloud Recording](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording)<br><br>
   * **Scopes**: `recording:write:admin` `recording:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` <br>
   * @returns void
   * @throws ApiError
   */
  public recordingSettingsUpdate({
    meetingId,
    requestBody,
  }: {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    requestBody: {
      /**
       * Approval type for the registration.<br>
       * `0`- Automatically approve the registration when a user registers.<br>
       * `1` - Manually approve or deny the registration of a user.<br>
       * `2` - No registration required to view the recording.
       */
      approval_type?: 0 | 1 | 2;
      /**
       * Authentication domains.
       */
      authentication_domains?: string;
      /**
       * Authentication Options.
       */
      authentication_option?: string;
      /**
       * Determine whether registration is required to view the recording.
       */
      on_demand?: boolean;
      /**
       * Enable password protection for the recording by setting a password. The password must have a minimum of **eight** characters with a mix of numbers, letters and special characters.<br><br>
       * **Note:** If the account owner or the admin has set minimum password strength requirements for recordings via Account Settings, the password value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](/docs/api-reference/zoom-api/ma#operation/accountSettings) API.
       */
      password?: string;
      /**
       * Only authenticated users can view.
       */
      recording_authentication?: boolean;
      /**
       * Send an email to host when someone registers to view the recording. This applies for On-demand recordings only.
       */
      send_email_to_host?: boolean;
      /**
       * Determine how the meeting recording is shared.
       */
      share_recording?: 'publicly' | 'internally' | 'none';
      /**
       * Show social share buttons on registration page. This applies for On-demand recordings only.
       */
      show_social_share_buttons?: boolean;
      /**
       * Name of the recording.
       */
      topic?: string;
      /**
       * Determine whether a viewer can download the recording file or not.
       */
      viewer_download?: boolean;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/meetings/{meetingId}/recordings/settings',
      path: {
        meetingId: meetingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting recording not found. `,
      },
    });
  }

  /**
   * Recover meeting recordings
   * Zoom allows users to recover recordings from trash for up to 30 days from the deletion date. Use this API to recover all deleted [Cloud Recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording) of a specific meeting.<br><br>
   * **Scopes**: `recording:write:admin` `recording:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   * **Prerequisites**:<br>
   * * A Pro user with Cloud Recording enabled.
   * @returns any **HTTP Status Code:** `200` <br>
   * Recordings recovered.
   *
   * **Error Code:** `200`<br>
   * You do not have the right permissions.
   * @throws ApiError
   */
  public recordingStatusUpdate({
    meetingUuid,
    requestBody,
  }: {
    /**
     * The meeting's universally unique identifier (UUID). Each meeting instance generates a UUID. For example, after a meeting ends, a new UUID is generated for the next meeting instance.
     *
     * If the meeting UUID begins with a `/` character or contains a `//` character, you **must** double-encode the meeting UUID when using the meeting UUID for other API calls.
     */
    meetingUuid: string;
    requestBody: {
      action?: 'recover';
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/meetings/{meetingUUID}/recordings/status',
      path: {
        meetingUUID: meetingUuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account: {accountId}.
         **Error Code:** \`3309\`<br>
        Not enough cloud storage available. Either purchase additional storage or delete cloud recordings to free up storage.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting recording not found.<br> **Error Code:** \`1001\`<br>  User does not exist: {userId}.<br>
         **Error Code:** \`3301\`<br>There is no recording for this meeting.



        `,
      },
    });
  }

  /**
   * Delete a meeting recording file
   * Delete a specific recording file from a meeting.<p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note:</b> To use this API, you must enable the <b>The host can delete cloud recordings</b> setting. You can find this setting in the <b>Recording</b> tab of the <b>Settings</b> interface in the [Zoom web portal](https://zoom.us/).</p>
   *
   * **Scopes**: `recording:write:admin`, `recording:write`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200` <br>
   * Recording deleted.
   *
   * **Error Code:** `200`<br>
   * You do not have the right permissions.
   * @throws ApiError
   */
  public recordingDeleteOne({
    meetingId,
    recordingId,
    action = 'trash',
  }: {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * The recording ID.
     */
    recordingId: string;
    /**
     * The recording delete actions:<br>`trash` - Move recording to trash.<br>`delete` - Delete recording permanently.
     */
    action?: 'trash' | 'delete';
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/meetings/{meetingId}/recordings/{recordingId}',
      path: {
        meetingId: meetingId,
        recordingId: recordingId,
      },
      query: {
        action: action,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br> **Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}.<br>
         **Error Code:** \`3303\` <br>
        You can not delete an uncompleted meeting. <br/>
         **Error Code:** \`3332\` <br>
        This recording was selected for a simulive webinar. You cannot delete or trash it. <br>
         **Error Code:** \`3332\` <br>
        Unable to delete this file because this recording is being used for Zoom IQ for Sales.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting recording file not found<br>
         **Error Code:** \`1001\` <br>
        User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3301\` <br> There is no recording for this meeting.
        `,
      },
    });
  }

  /**
   * Recover a single recording
   * Zoom allows users to recover recordings from trash for up to 30 days from the deletion date. Use this API to recover a single recording file from the meeting.<br>
   * **Scopes:** `recording:write:admin` `recording:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   *
   * @returns void
   * @throws ApiError
   */
  public recordingStatusUpdateOne({
    meetingId,
    recordingId,
    requestBody,
  }: {
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * The recording ID.
     */
    recordingId: string;
    requestBody: {
      action?: 'recover';
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/meetings/{meetingId}/recordings/{recordingId}/status',
      path: {
        meetingId: meetingId,
        recordingId: recordingId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
         **Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}.
         **Error Code:** \`3309\`<br>
        Not enough cloud storage available. Either purchase additional storage or delete cloud recordings to free up storage.`,
        404: `**HTTP Status Code:** \`404\` <br>Meeting recording not found.<br>
         **Error Code:** \`1001\` <br> User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3301\`There is no recording for this meeting.`,
      },
    });
  }

  /**
   * List all recordings
   * Use this API to list all [cloud recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording) of a user. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note:</b> To access a user's password protected cloud recording, add an <code>access_token</code> parameter to the download URL and provide either the <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app">JWT</a> or the user's OAuth access token as the value of the <code>access_token</code> parameter.</p>
   *
   * When a user records a meeting or a webinar by choosing the **Record to the Cloud** option, the video, audio, and chat text are recorded in the Zoom cloud.
   *
   * **Scopes:** `recording:read:admin`, `recording:read`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * Pro or a higher plan.
   * * Cloud Recording must be enabled on the user's account.
   * @returns any **HTTP Status Code:** `200`<br>
   * List of recording objects returned.
   * @throws ApiError
   */
  public recordingsList({
    userId,
    pageSize = 30,
    nextPageToken,
    mc = 'false',
    trash = false,
    from,
    to,
    trashType = 'meeting_recordings',
    meetingId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * Query Metadata of Recording if an On-Premise Meeting Connector was used for the meeting.
     */
    mc?: string;
    /**
     * Query trash.
     * `true`: List recordings from trash.<br> `false`: Do not list recordings from the trash.<br> The default value is `false`. If you set it to `true`, you can use the `trash_type` property to indicate the type of Cloud recording that you need to retrieve.
     */
    trash?: boolean;
    /**
     * The start date in 'yyyy-mm-dd' UTC format for the date range for which you would like to retrieve recordings. The maximum range can be a month. If no value is provided for this field, the default will be current date. For example, if you make the API request on June 30, 2020, without providing the “from” and “to” parameters, by default the value of 'from' field will be “2020-06-30” and the value of the 'to' field will be “2020-07-01”.
     *
     * **Note**: The "trash" files cannot be filtered by date range and thus, the "from" and "to" fields should not be used for trash files.
     */
    from?: string;
    /**
     * End date in 'yyyy-mm-dd' 'yyyy-mm-dd' UTC format.
     */
    to?: string;
    /**
     * The type of Cloud recording that you would like to retrieve from the trash. The value can be one of the following:<br>
     * `meeting_recordings`: List all meeting recordings from the trash.<br>
     * `recording_file`: List all individual recording files from the trash.
     */
    trashType?: string;
    /**
     * The meeting ID.
     */
    meetingId?: number;
  }): CancelablePromise<{
    /**
     * Start Date.
     */
    from?: string;
    /**
     * End Date.
     */
    to?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of pages returned for the request made.
     */
    page_count?: number;
    /**
     * The number of records returned within a single API call.
     */
    page_size?: number;
    /**
     * The number of all records available across pages.
     */
    total_records?: number;
    /**
     * List of recordings.
     */
    meetings?: Array<{
      /**
       * Unique Identifier of the user account.
       */
      account_id?: string;
      /**
       * Meeting duration.
       */
      duration?: number;
      /**
       * ID of the user set as host of meeting.
       */
      host_id?: string;
      /**
       * Meeting ID - also known as the meeting number.
       */
      id?: number;
      /**
       * Number of recording files returned in the response of this API call. This includes the `recording_files` and  `participant_audio_files` files.
       */
      recording_count?: number;
      /**
       * The time at which the meeting started.
       */
      start_time?: string;
      /**
       * Meeting topic.
       */
      topic?: string;
      /**
       * The total file size of the recording. This includes the `recording_files` and `participant_audio_files` files.
       */
      total_size?: number;
      /**
       * The recording's associated type of meeting or webinar:
       *
       * If the recording is of a meeting:
       * * `1` — Instant meeting.
       * * `2` — Scheduled meeting.
       * * `3` — A recurring meeting with no fixed time.
       * * `4` — A meeting created via PMI (Personal Meeting ID).
       * * `7` — A [Personal Audio Conference](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference) (PAC).
       * * `8` - Recurring meeting with a fixed time.
       *
       * If the recording is of a webinar:
       * * `5` — A webinar.
       * * `6` — A recurring webinar without a fixed time
       * * `9` — A recurring webinar with a fixed time.
       *
       * If the recording is **not** from a meeting or webinar:
       *
       * * `99` — A recording uploaded via the [**Recordings**](https://zoom.us/recording) interface on the Zoom Web Portal.
       */
      type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 99;
      /**
       * Unique Meeting Identifier. Each instance of the meeting will have its own UUID.
       */
      uuid?: string;
      /**
       * List of recording file.
       */
      recording_files?: Array<{
        /**
         * The time at which recording was deleted. Returned in the response only for trash query.
         */
        deleted_time?: string;
        /**
         * The URL at which to download the the recording.
         *
         * **JWT apps**
         *
         * To access a private or password-protected cloud recording of a user in your account, use a [Zoom JWT app](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app). Use the generated JWT token as the value of the `access_token` query parameter and include this query parameter at the end of the URL. For example:
         *
         * `https://{{base-domain}}/rec/download/{{path-to-file-download}}?access_token={{JWT-token}}`
         *
         * **OAuth apps**
         *
         * If a user has authorized and installed your OAuth app that contains recording scopes, use the user's [OAuth access token](https://marketplace.zoom.us/docs/guides/auth/oauth) to download the file. For example:
         *
         * `https://{{base-domain}}/rec/archive/download/xxx?access_token={{OAuth-access-token}}`
         *
         * **Note:** This field does **not** return for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). Instead, this API will return the `file_path` field.
         *
         * **Note:** We recommend that you send the access_token as a Bearer token in the Authorization header, for example: "Authorization": "Bearer <ACCESS_TOKEN>”.
         */
        download_url?: string;
        /**
         * The file path to the On-Premise account recording.
         *
         * **Note:** This API only returns this field for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). It does **not** return the `download_url` field.
         */
        file_path?: string;
        /**
         * The recording file size.
         */
        file_size?: number;
        /**
         * The recording file type. The value of this field could be one of the following:<br>
         * `MP4`: Video file of the recording.<br>`M4A` Audio-only file of the recording.<br>`TIMELINE`: Timestamp file of the recording in JSON file format. To get a timeline file, the "Add a timestamp to the recording" setting must be enabled in the [recording settings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-recording#h_3f14c3a4-d16b-4a3c-bbe5-ef7d24500048). The time will display in the host's timezone, set on their Zoom profile.
         * <br> `TRANSCRIPT`: Transcription file of the recording in VTT format.<br> `CHAT`: A TXT file containing in-meeting chat messages that were sent during the meeting.<br>`CC`: File containing closed captions of the recording in VTT file format.<br>`CSV`: File containing polling data in csv format.
         *
         * <br>
         *
         * A recording file object with file type of either `CC` or `TIMELINE` **does not have** the following properties:<br>
         * `id`, `status`, `file_size`, `recording_type`, and `play_url`.<br>`SUMMARY`: Summary file of the recording in JSON file format.
         */
        file_type?: 'MP4' | 'M4A' | 'CHAT' | 'TRANSCRIPT' | 'CSV' | 'TB' | 'CC' | 'CHAT_MESSAGE' | 'SUMMARY';
        /**
         * The file extension type of the recording file.
         */
        file_extension?: 'MP4' | 'M4A' | 'TXT' | 'VTT' | 'CSV' | 'JSON' | 'JPG';
        /**
         * The recording file ID. Included in the response of general query.
         */
        id?: string;
        /**
         * The meeting ID.
         */
        meeting_id?: string;
        /**
         * The URL using which a recording file can be played.
         */
        play_url?: string;
        /**
         * The recording end time. Response in general query.
         */
        recording_end?: string;
        /**
         * The recording start time.
         */
        recording_start?: string;
        /**
         * The recording type. The value of this field can be one of the following:<br>`shared_screen_with_speaker_view(CC)`<br>`shared_screen_with_speaker_view`<br>`shared_screen_with_gallery_view`<br>`speaker_view`<br>`gallery_view`<br>`shared_screen`<br>`audio_only`<br>`audio_transcript`<br>`chat_file`<br>`active_speaker`<br>`poll`<br>`timeline`<br>`closed_caption`<br>`audio_interpretation`<br>`summary`<br>`summary_next_steps`<br>`summary_smart_chapters`
         */
        recording_type?:
          | 'shared_screen_with_speaker_view(CC)'
          | 'shared_screen_with_speaker_view'
          | 'shared_screen_with_gallery_view'
          | 'active_speaker'
          | 'gallery_view'
          | 'shared_screen'
          | 'audio_only'
          | 'audio_transcript'
          | 'chat_file'
          | 'poll'
          | 'host_video'
          | 'closed_caption'
          | 'timeline'
          | 'thumbnail'
          | 'audio_interpretation'
          | 'summary'
          | 'summary_next_steps'
          | 'summary_smart_chapters';
        /**
         * The recording status.
         */
        status?: 'completed';
      }>;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/recordings',
      path: {
        userId: userId,
      },
      query: {
        page_size: pageSize,
        next_page_token: nextPageToken,
        mc: mc,
        trash: trash,
        from: from,
        to: to,
        trash_type: trashType,
        meeting_id: meetingId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User {userId} not exist or not belong to this account.
        `,
      },
    });
  }
}
