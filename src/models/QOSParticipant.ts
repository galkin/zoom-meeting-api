/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about the participant and their quality of service (QoS).
 */
export type QOSParticipant = {
  /**
   * The participant's universally unique ID. This value is the same as the participant's user ID if the participant joins the webinar by logging into Zoom. If the participant joins the webinar without logging into Zoom, this returns an empty value.
   */
  id?: string;
  /**
   * The type of device the participant used to join the meeting:
   * * `Phone` — The participant joined via PSTN.
   * * `H.323/SIP` — The participant joined via an H.323 or SIP device.
   * * `Windows` — The participant joined via VoIP using a Windows device.
   * * `Mac` — The participant joined via VoIP using a Mac device.
   * * `iOS` — The participant joined via VoIP using an iOS device.
   * * `Android` — The participant joined via VoIP using an Android device.
   *
   * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
   */
  device?: QOSParticipant.device;
  /**
   * The participant's PC domain.
   *
   * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
   */
  domain?: string;
  /**
   * The participant's hard disk ID.
   *
   * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
   */
  harddisk_id?: string;
  /**
   * The participant's IP address.
   */
  ip_address?: string;
  /**
   * The time at which the participant joined the meeting.
   */
  join_time?: string;
  /**
   * The time at which the participant left the meeting.
   */
  leave_time?: string;
  /**
   * The participant's location.
   */
  location?: string;
  /**
   * The participant's MAC address.
   *
   * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
   */
  mac_addr?: string;
  /**
   * The participant's PC name.
   */
  pc_name?: string;
  /**
   * The participant's ID. This value is assigned to a participant upon joining a meeting and is only valid for the meeting's duration.
   */
  user_id?: string;
  /**
   * The participant's display name.
   */
  user_name?: string;
  /**
   * The participant's quality of service information.
   */
  user_qos?: Array<{
    /**
     * The QoS metrics for screen sharing by a participant who joined the meeting via CRC.
     */
    as_device_from_crc?: {
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
    /**
     * The QoS metrics for screen sharing output received by a participant who joined the meeting via CRC.
     */
    as_device_to_crc?: {
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
    as_input?: {
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
    as_output?: {
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
    /**
     * The QoS metrics for audio sent by a participant who joined the meeting via a Cloud Room Connector (CRC).
     */
    audio_device_from_crc?: {
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
    /**
     * The QoS metrics for audio received by a participant who joined the meeting via CRC.
     */
    audio_device_to_crc?: {
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
    audio_input?: {
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
    audio_output?: {
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
    cpu_usage?: {
      /**
       * The system's maximum CPU usage.
       */
      system_max_cpu_usage?: string;
      /**
       * Zoom's average CPU usage.
       */
      zoom_avg_cpu_usage?: string;
      /**
       * Zoom's maximum CPU usage.
       */
      zoom_max_cpu_usage?: string;
      /**
       * Zoom's minimum CPU usage.
       */
      zoom_min_cpu_usage?: string;
    };
    /**
     * The QoS date and time.
     */
    date_time?: string;
    /**
     * The QoS metrics for video input being sent by a participant who joined the meeting via CRC.
     */
    video_device_from_crc?: {
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
    /**
     * The QoS metrics for video output being sent by a participant who joined the meeting via CRC.
     */
    video_device_to_crc?: {
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
    video_input?: {
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
    video_output?: {
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
  }>;
  /**
   * The participant's Zoom client version.
   */
  version?: string;
};

export namespace QOSParticipant {
  /**
   * The type of device the participant used to join the meeting:
   * * `Phone` — The participant joined via PSTN.
   * * `H.323/SIP` — The participant joined via an H.323 or SIP device.
   * * `Windows` — The participant joined via VoIP using a Windows device.
   * * `Mac` — The participant joined via VoIP using a Mac device.
   * * `iOS` — The participant joined via VoIP using an iOS device.
   * * `Android` — The participant joined via VoIP using an Android device.
   *
   * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
   */
  export enum device {
    PHONE = 'Phone',
    H_323_SIP = 'H.323/SIP',
    WINDOWS = 'Windows',
    MAC = 'Mac',
    I_OS = 'iOS',
    ANDROID = 'Android',
  }
}
