/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Meeting metric details.
 */
export type listmeetingmetrics = {
  /**
   * Host display name.
   */
  host?: string;
  /**
   * Custom keys and values assigned to the meeting.
   */
  custom_keys?: Array<{
    /**
     * Custom key associated with the meeting.
     */
    key?: string;
    /**
     * Value of the custom key associated with the meeting.
     */
    value?: string;
  }>;
  /**
   * Department of the host.
   */
  dept?: string;
  /**
   * Meeting duration. Formatted as hh:mm:ss, for example: `16:08` for 16 minutes and 8 seconds.
   */
  duration?: string;
  /**
   * Email address of the host.
   */
  email?: string;
  /**
   * Meeting end time.
   */
  end_time?: string;
  /**
   * Indicates whether or not [third party audio](https://support.zoom.us/hc/en-us/articles/202470795-3rd-Party-Audio-Conference) was used in the meeting.
   */
  has_3rd_party_audio?: boolean;
  /**
   * Whether the archiving feature was used in the meeting.
   */
  has_archiving?: boolean;
  /**
   * Indicates whether or not the PSTN was used in the meeting.
   */
  has_pstn?: boolean;
  /**
   * Indicates whether or not the recording feature was used in the meeting.
   */
  has_recording?: boolean;
  /**
   * Indicates whether or not screenshare feature was used in the meeting.
   */
  has_screen_share?: boolean;
  /**
   * Indicates whether or not someone joined the meeting using SIP.
   */
  has_sip?: boolean;
  /**
   * Indicates whether or not video was used in the meeting.
   */
  has_video?: boolean;
  /**
   * Indicates whether or not VoIP was used in the meeting.
   */
  has_voip?: boolean;
  /**
   * Indicates whether a manual caption was enabled in the meeting.
   */
  has_manual_captions?: boolean;
  /**
   * Indicates whether an automated caption was enabled in the meeting.
   */
  has_automated_captions?: boolean;
  /**
   * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
   */
  id?: number;
  /**
   * The number of Zoom Room participants in the meeting.
   */
  in_room_participants?: number;
  /**
   * Meeting participant count.
   */
  participants?: number;
  /**
   * Meeting start time.
   */
  start_time?: string;
  /**
   * Meeting topic.
   */
  topic?: string;
  /**
   * Tracking fields and values assigned to the meeting.
   */
  tracking_fields?: Array<{
    /**
     * Label of the tracking field.
     */
    field?: string;
    /**
     * Value of the tracking field.
     */
    value?: string;
  }>;
  /**
   * License type of the user.
   */
  user_type?: string;
  /**
   * Meeting UUID. Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
   */
  uuid?: string;
  /**
   * The meeting's [audio quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
   * * `good` — The audio is almost flawless and the quality is excellent.
   * * `fair` — The audio occasionally has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
   * * `poor` — The audio often has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
   * * `bad` — The sound quality is extremely poor and the audio content is almost inaudible.
   */
  audio_quality?: listmeetingmetrics.audio_quality;
  /**
   * The meeting's [video quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
   * * `good` — The video is almost flawless and the quality is excellent.
   * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
   * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
   * * `bad` — The picture is very blurred and often gets stuck.
   */
  video_quality?: listmeetingmetrics.video_quality;
  /**
   * The meeting's [screen share quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
   * * `good` — The video is almost flawless and the quality is excellent.
   * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
   * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
   * * `bad` — The picture is very blurred and often gets stuck.
   */
  screen_share_quality?: listmeetingmetrics.screen_share_quality;
};

export namespace listmeetingmetrics {
  /**
   * The meeting's [audio quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
   * * `good` — The audio is almost flawless and the quality is excellent.
   * * `fair` — The audio occasionally has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
   * * `poor` — The audio often has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
   * * `bad` — The sound quality is extremely poor and the audio content is almost inaudible.
   */
  export enum audio_quality {
    GOOD = 'good',
    FAIR = 'fair',
    POOR = 'poor',
    BAD = 'bad',
  }

  /**
   * The meeting's [video quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
   * * `good` — The video is almost flawless and the quality is excellent.
   * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
   * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
   * * `bad` — The picture is very blurred and often gets stuck.
   */
  export enum video_quality {
    GOOD = 'good',
    FAIR = 'fair',
    POOR = 'poor',
    BAD = 'bad',
  }

  /**
   * The meeting's [screen share quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
   * * `good` — The video is almost flawless and the quality is excellent.
   * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
   * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
   * * `bad` — The picture is very blurred and often gets stuck.
   */
  export enum screen_share_quality {
    GOOD = 'good',
    FAIR = 'fair',
    POOR = 'poor',
    BAD = 'bad',
  }
}
