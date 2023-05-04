/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Zoom Room List
 */
export type ZoomRoomList = {
  next_page_token?: string;
  /**
   * The number of pages returned for the request made.
   */
  page_count?: number;
  /**
   * The page number of the current results.
   */
  page_number?: number;
  /**
   * The number of records returned with a single API call.
   */
  page_size?: number;
  /**
   * The total number of all the records available across pages.
   */
  total_records?: number;
  /**
   * Array of Zoom Rooms
   */
  zoom_rooms?: Array<{
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
  }>;
};
