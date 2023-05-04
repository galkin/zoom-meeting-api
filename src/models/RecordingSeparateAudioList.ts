/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Return a list of recording files for each participant. The API only returns this response when the **Record a separate audio file of each participant** setting is enabled.
 */
export type RecordingSeparateAudioList = {
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
};
