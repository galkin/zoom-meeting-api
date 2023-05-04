/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Meeting live stream status.
 */
export type MeetingLiveStreamStatus = {
  /**
   * Update the status of a live stream.
   *
   * The value can be one of the following:<br>
   * `start`: Start a live stream. <br>
   * `stop`: Stop an ongoing live stream.
   */
  action?: MeetingLiveStreamStatus.action;
  /**
   * Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
   */
  settings?: {
    /**
     * Display the name of the active speaker during a live stream.
     */
    active_speaker_name?: boolean;
    /**
     * Display name of the live stream.
     */
    display_name?: string;
  };
};

export namespace MeetingLiveStreamStatus {
  /**
   * Update the status of a live stream.
   *
   * The value can be one of the following:<br>
   * `start`: Start a live stream. <br>
   * `stop`: Stop an ongoing live stream.
   */
  export enum action {
    START = 'start',
    STOP = 'stop',
  }
}
