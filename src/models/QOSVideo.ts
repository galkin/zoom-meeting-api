/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QOSVideo = {
  /**
   * The average amount of packet loss. For example, the percentage of packets that failed to arrive at their destination.
   */
  avg_loss?: string;
  /**
   * The bits per second transmitted along a digital network, in kbps.
   */
  bitrate?: string;
  /**
   * The variation in the delay of received packets, in milliseconds.
   */
  jitter?: string;
  /**
   * The time it took a packet to travel from one point to another, in milliseconds.
   */
  latency?: string;
  /**
   * The maximum amount of packet loss. For example, the maximum percentage of packets that failed to arrive at their destination.
   */
  max_loss?: string;
  /**
   * The rate at which the video camera can produce unique images (frames). Zoom supports a frame rate of up to 30fps.
   */
  frame_rate?: string;
  /**
   * The number of pixels in each dimension that the video camera can display.
   */
  resolution?: string;
};
