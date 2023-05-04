/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Account Settings: Zoom Rooms.
 */
export type AccountSettingsZoomRooms = {
  /**
   * Automatic start and stop for scheduled meetings.
   */
  auto_start_stop_scheduled_meetings?: boolean;
  /**
   * Cloud recording for instant meetings.
   */
  cmr_for_instant_meeting?: boolean;
  /**
   * Shift all meetings to private.
   */
  force_private_meeting?: boolean;
  /**
   * Hide host and meeting ID from private meetings.
   */
  hide_host_information?: boolean;
  /**
   * Display meeting list with calendar integration.
   */
  list_meetings_with_calendar?: boolean;
  /**
   * Start AirPlay service manually.
   */
  start_airplay_manually?: boolean;
  /**
   * Automatic direct sharing using an ultrasonic proximity signal.
   */
  ultrasonic?: boolean;
  /**
   * Upcoming meeting alert.
   */
  upcoming_meeting_alert?: boolean;
  /**
   * Weekly system restart.
   */
  weekly_system_restart?: boolean;
  /**
   * Zoom Room post meeting feedback.
   */
  zr_post_meeting_feedback?: boolean;
};
