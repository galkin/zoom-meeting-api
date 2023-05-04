/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Account Settings: Notification.
 */
export type AccountSettingsEmailNotification = {
  /**
   * Notify when an alternative host is set or removed from a meeting.
   */
  alternative_host_reminder?: boolean;
  /**
   * Notify the host and participants when a meeting is cancelled.
   */
  cancel_meeting_reminder?: boolean;
  /**
   * Whether to notify the host when a cloud recording is available.
   */
  cloud_recording_available_reminder?: boolean;
  /**
   * Notify the host when participants join the meeting before them.
   */
  jbh_reminder?: boolean;
  /**
   * Notify user when host licenses are running low.
   */
  low_host_count_reminder?: boolean;
  /**
   * Whether to notify any alternative hosts when a cloud recording is available.
   */
  recording_available_reminder_alternative_hosts?: boolean;
  /**
   * Whether to notify the person who scheduled the meeting or webinar for the host when a cloud recording is available.
   */
  recording_available_reminder_schedulers?: boolean;
  /**
   * Notify the host there is a meeting is scheduled, rescheduled, or cancelled.
   */
  schedule_for_reminder?: boolean;
};
