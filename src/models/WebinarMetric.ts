/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Webinar metric details.
 */
export type WebinarMetric = {
  /**
   * User display name.
   */
  host?: string;
  /**
   * Custom keys and values assigned to the Webinar.
   */
  custom_keys?: Array<{
    /**
     * Custom key associated with the Webinar.
     */
    key?: string;
    /**
     * Value of the custom key associated with the Webinar.
     */
    value?: string;
  }>;
  /**
   * Department of the host.
   */
  dept?: string;
  /**
   * Webinar duration, formatted as hh:mm:ss, for example: `10:00` for ten minutes.
   */
  duration?: string;
  /**
   * User email.
   */
  email?: string;
  /**
   * Webinar end time.
   */
  end_time?: string;
  /**
   * Use TSP for the Webinar.
   */
  has_3rd_party_audio?: boolean;
  /**
   * Whether the archiving feature was used in the webinar.
   */
  has_archiving?: boolean;
  /**
   * Indicates whether or not PSTN was used for the Webinar.
   */
  has_pstn?: boolean;
  /**
   * Indicates whether or not recording was used for the Webinar.
   */
  has_recording?: boolean;
  /**
   * Indicates whether or not screen sharing was used for the Webinar.
   */
  has_screen_share?: boolean;
  /**
   * Indicates whether or not SIP was used for the Webinar.
   */
  has_sip?: boolean;
  /**
   * Indicates whether or not video was used for the Webinar.
   */
  has_video?: boolean;
  /**
   * Indicates whether or not VoIP was used for the Webinar.
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
   * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
   */
  id?: number;
  /**
   * Webinar participant count.
   */
  participants?: number;
  /**
   * Webinar start time.
   */
  start_time?: string;
  /**
   * Webinar topic.
   */
  topic?: string;
  /**
   * User type.
   */
  user_type?: string;
  /**
   * Webinar UUID.
   */
  uuid?: string;
  /**
   * The webinar's [audio quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
   * * `good` — The audio is almost flawless and the quality is excellent.
   * * `fair` — The audio occasionally has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
   * * `poor` — The audio often has distortion, noise, and other problems, but the content is basically continuous. Participants can communicate normally.
   * * `bad` — The sound quality is extremely poor and the audio content is almost inaudible.
   */
  audio_quality?: WebinarMetric.audio_quality;
  /**
   * The webinar's [video quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
   * * `good` — The video is almost flawless and the quality is excellent.
   * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
   * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
   * * `bad` — The picture is very blurred and often gets stuck.
   */
  video_quality?: WebinarMetric.video_quality;
  /**
   * The webinar's [screen share quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
   * * `good` — The video is almost flawless and the quality is excellent.
   * * `fair` — The video definition is high, occasionally gets stuck, fast or slow, or other problems, but the frequency is very low and the video quality is good.
   * * `poor` — The video definition is not high, but not many problems exist. The video quality is mediocre.
   * * `bad` — The picture is very blurred and often gets stuck.
   */
  screen_share_quality?: WebinarMetric.screen_share_quality;
};

export namespace WebinarMetric {
  /**
   * The webinar's [audio quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
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
   * The webinar's [video quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
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
   * The webinar's [screen share quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Using-meeting-quality-scores-and-network-alerts):
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
