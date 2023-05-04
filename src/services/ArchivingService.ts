/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ArchivingService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List archived files
   * Use this API to get an account's archived meeting or webinar files.
   *
   * Zoom's [archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-indicators) allows account administrators to set up an automated mechanism to record, collect, and archive meeting data to a 3rd-party platform of their choice to satisfy FINRA and/or other compliance requirements.
   *
   * **Scopes:** `recording:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * The [**Meeting and Webinar Archiving** feature](https://support.zoom.us/hc/en-us/articles/4405656451213--Archiving-for-meetings-and-webinars) enabled for your account by [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).
   * @returns any **HTTP Status Code:** `200` <br>
   * Archived files returned.
   * @throws ApiError
   */
  public listArchivedFiles({
    pageSize = 30,
    nextPageToken,
    from,
    to,
    queryDateType = 'meeting_start_time',
  }: {
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The query start date, `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `to` query parameter value cannot exceed seven days.
     */
    from?: string;
    /**
     * The query end date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `from` query parameter value cannot exceed seven days.
     */
    to?: string;
    /**
     * The type of query date:
     * * `meeting_start_time`
     * * `archive_complete_time`
     *
     * This value defaults to `meeting_start_time`.
     */
    queryDateType?: 'meeting_start_time' | 'archive_complete_time';
  }): CancelablePromise<{
    /**
     * The queried start date.
     */
    from?: string;
    /**
     * Information about the meeting or webinar.
     */
    meetings?: Array<{
      /**
       * The user's account name.
       */
      account_name: string;
      /**
       * Information about the archive files.
       */
      archive_files: Array<{
        /**
         * The URL at which to download the the archive file.
         *
         * **JWT apps**
         *
         * To access a private or password-protected archive file of a user in your account, use a [Zoom JWT app](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app). Use the generated JWT token as the value of the `access_token` query parameter and include this query parameter at the end of the URL.
         *
         * `https://{{base-domain}}/rec/archive/download/{{path-to-file-download}}?access_token={{JWT-token}}`
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
        download_url: string;
        /**
         * The archived file's extension.
         */
        file_extension: string;
        /**
         * The file path to the On-Premise account archive file.
         *
         * **Note:** The API only returns this field for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). It does **not** return the `download_url` field.
         */
        file_path?: string;
        /**
         * The archived file's size, in bytes.
         */
        file_size: number;
        /**
         * The archive file's type:
         * * `MP4` — Video file.
         * * `M4A` — Audio-only file.
         * * `TRANSCRIPT` — A transcription file, in VTT format.
         * * `CHAT` — A TXT file containing in-meeting chat messages.
         * * `CC` — A file containing the closed captions of the recording, in VTT file format.
         * * `CHAT_MESSAGE` — A JSON file encoded in base64 format containing chat messages. The file also includes waiting room chats, deleted messages, meeting emojis and non-verbal feedback.
         */
        file_type: 'MP4' | 'M4A' | 'TRANSCRIPT' | 'CHAT' | 'CC' | 'CHAT_MESSAGE';
        /**
         * The archive file's unique ID.
         */
        id: string;
        /**
         * Whether the archive file is an individual recording file:
         * * `true` — An individual recording file.
         * * `false` — An entire meeting file.
         */
        individual: boolean;
        /**
         * The individual recording file's participant email address. This value is returned when the `individual` value is `true`. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
         */
        participant_email?: string;
        /**
         * The individual recording file's participant join time. This value is returned when the `individual` value is `true`.
         */
        participant_join_time: string;
        /**
         * The individual recording file's participant leave time. This value is returned when the `individual` value is `true`.
         */
        participant_leave_time: string;
        /**
         * The archive file's recording type:
         * * `shared_screen_with_gallery_view`
         * * `audio_only`
         * * `chat_file`
         * * `closed_caption`
         * * `chat_message`
         *
         * For more information, read our [Managing and sharing cloud recordings](https://support.zoom.us/hc/en-us/articles/205347605-Managing-and-sharing-cloud-recordings#h_9898497b-e736-4980-a749-d55608f10773) documentation.
         */
        recording_type: 'shared_screen_with_gallery_view' | 'audio_only' | 'chat_file' | 'closed_caption' | 'chat_message';
        /**
         * The archived file's processing status:
         * * `completed` — The processing of the file is complete.
         * * `processing` — The file is processing.
         * * `failed` — The processing of the file failed.
         */
        status: 'completed' | 'processing' | 'failed';
        /**
         * The archived file's encryption fingerprint.
         */
        encryption_fingerprint: string;
        /**
         * The number of `TXT` or `JSON` file messages. This field will return only when the `file_extension` is `JSON` or `TXT`
         */
        number_of_messages?: number;
      }>;
      /**
       * The meeting or webinar's archive completion time.
       */
      complete_time: '';
      /**
       * The meeting or webinar's scheduled duration.
       */
      duration: number;
      /**
       * The meeting or webinar's duration, in seconds.
       */
      duration_in_second: number;
      /**
       * The ID of the user set as the host of the archived meeting or webinar.
       */
      host_id: string;
      /**
       * The ID of the meeting (`meetingId`) or the webinar (`webinarId`).
       */
      id: number;
      /**
       * Whether the room is a [breakout room](https://support.zoom.us/hc/en-us/articles/115005769646-Participating-in-breakout-rooms).
       */
      is_breakout_room: boolean;
      /**
       * Whether the meeting or webinar is internal or external:
       * * `internal` — An internal meeting or webinar.
       * * `external` — An external meeting or webinar.
       *
       * The `id`, `host_id`, and `topic` PII (Personal Identifiable Information) values in this response are removed when this value is `external`.
       */
      meeting_type: 'internal' | 'external';
      /**
       * The parent meeting's universally unique ID (UUID). Each meeting or webinar instance generates a UUID. If the `is_breakout_room` value is `true`, the API returns this value.
       */
      parent_meeting_id?: string;
      /**
       * The number of archived files returned in the API call response.
       */
      recording_count: number;
      /**
       * The meeting or webinar's start time.
       */
      start_time: string;
      /**
       * The meeting or webinar's [timezone](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones).
       */
      timezone: string;
      /**
       * The meeting or webinar topic.
       */
      topic: string;
      /**
       * The total size of the archive file, in bytes.
       */
      total_size: number;
      /**
       * The type of archived meeting or webinar:
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
       * * `6` — A recurring webinar without a fixed time.
       * * `9` — A recurring webinar with a fixed time.
       *
       * If the recording is **not** from a meeting or webinar:
       * * `100` — A [breakout room](https://support.zoom.us/hc/en-us/articles/115005769646-Participating-in-breakout-rooms).
       */
      type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
      /**
       * The universally unique identifier (UUID) of the recorded meeting or webinar instance. Each meeting or webinar instance generates a UUID.
       */
      uuid: string;
      /**
       * The archive's processing status:
       * * `completed` — The archive's processing is complete.
       * * `processing` — The archive is processing.
       */
      status: 'completed' | 'processing';
    }>;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     *
     * **Note:** if you use `next_page_token` as a parameter, your other request parameters should be changeless to make sure that the large result set is what you want. For example, if your `to` parameter is for a future time, Zoom resets this value to the current time and returns this value in the response body, along with the `next_page_token` value. Use these same `to` and `next_page_token` values in requests for the remaining results set; otherwise you will get an invalid token error.
     */
    next_page_token?: string;
    /**
     * The number of records returned within a single API call.
     */
    page_size?: number;
    /**
     * The queried end date.
     */
    to?: string;
    /**
     * The total number of returned meeting records.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/archive_files',
      query: {
        page_size: pageSize,
        next_page_token: nextPageToken,
        from: from,
        to: to,
        query_date_type: queryDateType,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`2001\` <br>
        Account does not exist: {accountId}`,
      },
    });
  }

  /**
   * Delete a meeting's archived files
   * Use this API to delete all of a meeting's archived files.
   *
   * **Scopes:** `recording:write:admin`, `recording:write` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The [**Meeting and Webinar Archiving** feature](https://support.zoom.us/hc/en-us/articles/4405656451213--Archiving-for-meetings-and-webinars) enabled for your account by [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).
   * @returns void
   * @throws ApiError
   */
  public deleteArchivedFiles({
    meetingUuid,
  }: {
    /**
     * The meeting's universally unique identifier (UUID). Each meeting instance generates a UUID. For example, after a meeting ends, a new UUID is generated for the next meeting instance.
     *
     * If the meeting UUID begins with a `/` character or contains a `//` character, you **must** double-encode the meeting UUID when using the meeting UUID for other API calls.
     */
    meetingUuid: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/past_meetings/{meetingUUID}/archive_files',
      path: {
        meetingUUID: meetingUuid,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\` <br>
        Only available for Paid account.

         **Error Code:** \`200\` <br>
        Not available for this account.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`3001\` <br>
        Meeting does not exist: {0}`,
      },
    });
  }

  /**
   * Get a meeting's archived files
   * Use this API to return a specific meeting instance's [archived files](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-indicators).
   *
   * **Scopes:** `recording:read` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The [**Meeting and Webinar Archiving** feature](https://support.zoom.us/hc/en-us/articles/4405656451213--Archiving-for-meetings-and-webinars) enabled for your account by [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).
   * @returns any **HTTP Status Code:** `200` <br>
   * Meeting archived files returned.
   * @throws ApiError
   */
  public getArchivedFiles({
    meetingUuid,
  }: {
    /**
     * The meeting's universally unique identifier (UUID). Each meeting instance generates a UUID. For example, after a meeting ends, a new UUID is generated for the next meeting instance.
     *
     * If the meeting UUID begins with a `/` character or contains a `//` character, you **must** double-encode the meeting UUID when using the meeting UUID for other API calls.
     */
    meetingUuid: string;
  }): CancelablePromise<{
    /**
     * The user's account name.
     */
    account_name: string;
    /**
     * Information about the archive files.
     */
    archive_files: Array<{
      /**
       * The URL at which to download the the archive file.
       *
       * **JWT apps**
       *
       * To access a private or password-protected archive file of a user in your account, use a [Zoom JWT app](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app). Use the generated JWT token as the value of the `access_token` query parameter and include this query parameter at the end of the URL.
       *
       * `https://{{base-domain}}/rec/archive/download/{{path-to-file-download}}?access_token={{JWT-token}}`
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
      download_url: string;
      /**
       * The archived file's extension.
       */
      file_extension: string;
      /**
       * The file path to the On-Premise account archive file.
       *
       * **Note:** The API only returns this field for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). It does **not** return the `download_url` field.
       */
      file_path?: string;
      /**
       * The archived file's size, in bytes.
       */
      file_size: number;
      /**
       * The archive file's type:
       * * `MP4` — Video file.
       * * `M4A` — Audio-only file.
       * * `TRANSCRIPT` — A transcription file, in VTT format.
       * * `CHAT` — A TXT file containing in-meeting chat messages.
       * * `CC` — A file containing the closed captions of the recording, in VTT file format.
       * * `CHAT_MESSAGE` — A JSON file encoded in base64 format containing chat messages. The file also includes waiting room chats, deleted messages, meeting emojis and non-verbal feedback.
       */
      file_type: 'MP4' | 'M4A' | 'TRANSCRIPT' | 'CHAT' | 'CC' | 'CHAT_MESSAGE';
      /**
       * The archive file's unique ID.
       */
      id: string;
      /**
       * Whether the archive file is an individual recording file:
       * * `true` — An individual recording file.
       * * `false` — An entire meeting file.
       */
      individual: boolean;
      /**
       * The individual recording file's participant email address. This value is returned when the `individual` value is `true`. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      participant_email?: string;
      /**
       * The individual recording file's participant join time. This value is returned when the `individual` value is `true`.
       */
      participant_join_time: string;
      /**
       * The individual recording file's participant leave time. This value is returned when the `individual` value is `true`.
       */
      participant_leave_time: string;
      /**
       * The archive file's recording type:
       * * `shared_screen_with_gallery_view`
       * * `audio_only`
       * * `chat_file`
       * * `closed_caption`
       * * `chat_message`
       *
       * For more information, read our [Managing and sharing cloud recordings](https://support.zoom.us/hc/en-us/articles/205347605-Managing-and-sharing-cloud-recordings#h_9898497b-e736-4980-a749-d55608f10773) documentation.
       */
      recording_type: 'shared_screen_with_gallery_view' | 'audio_only' | 'chat_file' | 'closed_caption' | 'chat_message';
      /**
       * The archived file's processing status:
       * * `completed` — The processing of the file is complete.
       * * `processing` — The file is processing.
       * * `failed` — The processing of the file failed.
       */
      status: 'completed' | 'processing' | 'failed';
      /**
       * The archived file's encryption fingerprint.
       */
      encryption_fingerprint: string;
      /**
       * The number of `TXT` or `JSON` file messages. This field will return only when the `file_extension` is `JSON` or `TXT`
       */
      number_of_messages?: number;
    }>;
    /**
     * The meeting or webinar's archive completion time.
     */
    complete_time: '';
    /**
     * The meeting or webinar's scheduled duration.
     */
    duration: number;
    /**
     * The meeting or webinar's duration, in seconds.
     */
    duration_in_second: number;
    /**
     * The ID of the user set as the host of the archived meeting or webinar.
     */
    host_id: string;
    /**
     * The ID of the meeting (`meetingId`) or the webinar (`webinarId`).
     */
    id: number;
    /**
     * Whether the room is a [breakout room](https://support.zoom.us/hc/en-us/articles/115005769646-Participating-in-breakout-rooms).
     */
    is_breakout_room: boolean;
    /**
     * Whether the meeting or webinar is internal or external:
     * * `internal` — An internal meeting or webinar.
     * * `external` — An external meeting or webinar.
     *
     * The `id`, `host_id`, and `topic` PII (Personal Identifiable Information) values in this response are removed when this value is `external`.
     */
    meeting_type: 'internal' | 'external';
    /**
     * The parent meeting's universally unique ID (UUID). Each meeting or webinar instance generates a UUID. If the `is_breakout_room` value is `true`, the API returns this value.
     */
    parent_meeting_id?: string;
    /**
     * The number of archived files returned in the API call response.
     */
    recording_count: number;
    /**
     * The meeting or webinar's start time.
     */
    start_time: string;
    /**
     * The meeting or webinar's [timezone](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones).
     */
    timezone: string;
    /**
     * The meeting or webinar topic.
     */
    topic: string;
    /**
     * The total size of the archive file, in bytes.
     */
    total_size: number;
    /**
     * The type of archived meeting or webinar:
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
     * * `6` — A recurring webinar without a fixed time.
     * * `9` — A recurring webinar with a fixed time.
     *
     * If the recording is **not** from a meeting or webinar:
     * * `100` — A [breakout room](https://support.zoom.us/hc/en-us/articles/115005769646-Participating-in-breakout-rooms).
     */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
    /**
     * The universally unique identifier (UUID) of the recorded meeting or webinar instance. Each meeting or webinar instance generates a UUID.
     */
    uuid: string;
    /**
     * The archive's processing status:
     * * `completed` — The archive's processing is complete.
     * * `processing` — The archive is processing.
     */
    status: 'completed' | 'processing';
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_meetings/{meetingUUID}/archive_files',
      path: {
        meetingUUID: meetingUuid,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
        Meeting recording not found.

         **Error Code:** \`3001\` <br>
        Meeting {meetingUUId} does not exist.`,
      },
    });
  }

  /**
   * Get archived file statistics
   * Use this API to get statistics about an account's archived meeting or webinar files.
   *
   * Zoom's [archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-indicators) allows account administrators to set up an automated mechanism to record, collect, and archive meeting data to a third-party platform of their choice to satisfy FINRA and other compliance requirements.
   *
   * **Scopes:** `recording:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * The [**Meeting and Webinar Archiving** feature](https://support.zoom.us/hc/en-us/articles/4405656451213--Archiving-for-meetings-and-webinars) enabled for your account by [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).
   * @returns any **HTTP Status Code:** `200` <br>
   * The statistics of Archived files returned.
   * @throws ApiError
   */
  public getArchivedFileStatistics({
    from,
    to,
  }: {
    /**
     * The query start date, `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `to` query parameter value cannot exceed seven days.
     */
    from?: string;
    /**
     * The query end date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `from` query parameter value cannot exceed seven days.
     */
    to?: string;
  }): CancelablePromise<{
    /**
     * The queried start date.
     */
    from?: string;
    /**
     * The queried end date.
     */
    to?: string;
    /**
     * The total number of returned meeting records.
     */
    total_records?: number;
    /**
     * Statistics about archive files, by file extension.
     */
    statistic_by_file_extension?: {
      /**
       * The number of mp4 files.
       */
      mp4_file_count?: number;
      /**
       * The number of m4a files.
       */
      m4a_file_count?: number;
      /**
       * The number of txt files.
       */
      txt_file_count?: number;
      /**
       * The number of json files.
       */
      json_file_count?: number;
      /**
       * The number of vtt files.
       */
      vtt_file_count?: number;
    };
    /**
     * Statistics about archive files, by file status.
     */
    statistic_by_file_status?: {
      /**
       * The number of processing files.
       */
      processing_file_count?: number;
      /**
       * The number of completed files.
       */
      completed_file_count?: number;
      /**
       * The number of failed files.
       */
      failed_file_count?: number;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/archive_files/statistics',
      query: {
        from: from,
        to: to,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`2001\` <br>
        Account does not exist: {accountId}`,
      },
    });
  }
}
