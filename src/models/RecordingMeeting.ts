/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The recording meeting object.
 */
export type RecordingMeeting = {
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
  type?: RecordingMeeting.type;
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
};

export namespace RecordingMeeting {
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
    '_99' = 99,
  }
}
