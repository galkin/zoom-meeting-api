/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Webinar live stream status.
 */
export type WebinarLiveStreamStatus = {
  /**
   * Update the status of a live stream. This value can be one of the following:
   *
   * * `start` — Start a webinar live stream.
   *
   * * `stop` — Stop an ongoing webinar live stream.
   */
  action?: WebinarLiveStreamStatus.action;
  /**
   * Update the live stream session's settings. You can **only** update settings for a stopped live stream.
   */
  settings?: {
    /**
     * Display the name of the active speaker during a live stream.
     */
    active_speaker_name?: boolean;
    /**
     * Display the name of the live stream.
     */
    display_name?: string;
  };
};

export namespace WebinarLiveStreamStatus {
  /**
   * Update the status of a live stream. This value can be one of the following:
   *
   * * `start` — Start a webinar live stream.
   *
   * * `stop` — Stop an ongoing webinar live stream.
   */
  export enum action {
    START = 'start',
    STOP = 'stop',
  }
}
