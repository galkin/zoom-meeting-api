/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CloudArchivedFiles = {
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
  meeting_type: CloudArchivedFiles.meeting_type;
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
  type: CloudArchivedFiles.type;
  /**
   * The universally unique identifier (UUID) of the recorded meeting or webinar instance. Each meeting or webinar instance generates a UUID.
   */
  uuid: string;
  /**
   * The archive's processing status:
   * * `completed` — The archive's processing is complete.
   * * `processing` — The archive is processing.
   */
  status: CloudArchivedFiles.status;
};

export namespace CloudArchivedFiles {
  /**
   * Whether the meeting or webinar is internal or external:
   * * `internal` — An internal meeting or webinar.
   * * `external` — An external meeting or webinar.
   *
   * The `id`, `host_id`, and `topic` PII (Personal Identifiable Information) values in this response are removed when this value is `external`.
   */
  export enum meeting_type {
    INTERNAL = 'internal',
    EXTERNAL = 'external',
  }

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
  export enum type {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
    '_8' = 8,
    '_9' = 9,
    '_100' = 100,
  }

  /**
   * The archive's processing status:
   * * `completed` — The archive's processing is complete.
   * * `processing` — The archive is processing.
   */
  export enum status {
    COMPLETED = 'completed',
    PROCESSING = 'processing',
  }
}
