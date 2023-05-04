/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Zoom room.
 */
export type ZoomRoom = {
  /**
   * Zoom room email type.
   */
  account_type?: string;
  /**
   * Zoom calendar name.
   */
  calender_name?: string;
  /**
   * Zoom Room camera.
   *
   * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
   */
  camera?: string;
  /**
   * Zoom room device IP.
   */
  device_ip?: string;
  /**
   * Zoom room email.
   */
  email?: string;
  health?: string;
  /**
   * Zoom room ID.
   */
  id?: string;
  /**
   * Zoom Room issues.
   */
  issues?: Array<string>;
  /**
   * Zoom room last start time.
   */
  last_start_time?: string;
  /**
   * Zoom room location.
   */
  location?: string;
  /**
   * The Zoom Room's location ID.
   */
  location_id?: string;
  /**
   * Zoom Room microphone.
   *
   * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
   */
  microphone?: string;
  /**
   * Zoom room name.
   */
  room_name?: string;
  /**
   * Zoom Room speaker.
   *
   * **Note:** This response returns an empty string (`““`) value for any users who are **not** a part of the host's account (external users).
   */
  speaker?: string;
  /**
   * Zoom room status.
   */
  status?: string;
};
