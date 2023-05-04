/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Meeting live stream.
 */
export type MeetingLiveStream = {
  /**
   * The live stream page URL.
   */
  page_url: string;
  /**
   * Stream name and key.
   */
  stream_key: string;
  /**
   * Streaming URL.
   */
  stream_url: string;
  /**
   * The number of pixels in each dimension that the video camera can display, required when a user enables 1080p. Use a value of `720p` or `1080p`
   */
  resolution?: string;
};
