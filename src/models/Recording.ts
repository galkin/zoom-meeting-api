/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Recording file object.
 */
export type Recording = {
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
  file_type?: Recording.file_type;
  /**
   * The file extension type of the recording file.
   */
  file_extension?: Recording.file_extension;
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
  recording_type?: Recording.recording_type;
  /**
   * The recording status.
   */
  status?: Recording.status;
};

export namespace Recording {
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
  export enum file_type {
    MP4 = 'MP4',
    M4A = 'M4A',
    CHAT = 'CHAT',
    TRANSCRIPT = 'TRANSCRIPT',
    CSV = 'CSV',
    TB = 'TB',
    CC = 'CC',
    CHAT_MESSAGE = 'CHAT_MESSAGE',
    SUMMARY = 'SUMMARY',
  }

  /**
   * The file extension type of the recording file.
   */
  export enum file_extension {
    MP4 = 'MP4',
    M4A = 'M4A',
    TXT = 'TXT',
    VTT = 'VTT',
    CSV = 'CSV',
    JSON = 'JSON',
    JPG = 'JPG',
  }

  /**
   * The recording type. The value of this field can be one of the following:<br>`shared_screen_with_speaker_view(CC)`<br>`shared_screen_with_speaker_view`<br>`shared_screen_with_gallery_view`<br>`speaker_view`<br>`gallery_view`<br>`shared_screen`<br>`audio_only`<br>`audio_transcript`<br>`chat_file`<br>`active_speaker`<br>`poll`<br>`timeline`<br>`closed_caption`<br>`audio_interpretation`<br>`summary`<br>`summary_next_steps`<br>`summary_smart_chapters`
   */
  export enum recording_type {
    SHARED_SCREEN_WITH_SPEAKER_VIEW_CC_ = 'shared_screen_with_speaker_view(CC)',
    SHARED_SCREEN_WITH_SPEAKER_VIEW = 'shared_screen_with_speaker_view',
    SHARED_SCREEN_WITH_GALLERY_VIEW = 'shared_screen_with_gallery_view',
    ACTIVE_SPEAKER = 'active_speaker',
    GALLERY_VIEW = 'gallery_view',
    SHARED_SCREEN = 'shared_screen',
    AUDIO_ONLY = 'audio_only',
    AUDIO_TRANSCRIPT = 'audio_transcript',
    CHAT_FILE = 'chat_file',
    POLL = 'poll',
    HOST_VIDEO = 'host_video',
    CLOSED_CAPTION = 'closed_caption',
    TIMELINE = 'timeline',
    THUMBNAIL = 'thumbnail',
    AUDIO_INTERPRETATION = 'audio_interpretation',
    SUMMARY = 'summary',
    SUMMARY_NEXT_STEPS = 'summary_next_steps',
    SUMMARY_SMART_CHAPTERS = 'summary_smart_chapters',
  }

  /**
   * The recording status.
   */
  export enum status {
    COMPLETED = 'completed',
  }
}
