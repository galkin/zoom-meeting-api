/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QOSAudio = {
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
};
