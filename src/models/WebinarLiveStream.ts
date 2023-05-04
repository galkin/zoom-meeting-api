/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Webinar live stream.
 */
export type WebinarLiveStream = {
  /**
   * The webinar live stream page's URL.
   */
  page_url: string;
  /**
   * The webinar live stream name and key.
   */
  stream_key: string;
  /**
   * The webinar live stream URL.
   */
  stream_url: string;
  /**
   * The number of pixels in each dimension that the video camera can display, required when a user enables 1080p. Use a value of `720p` or `1080p`
   */
  resolution?: string;
};
