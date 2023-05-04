/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserSettingsEmailNotification = {
  /**
   * When an alternative host is set or removed from a meeting.
   */
  alternative_host_reminder?: boolean;
  /**
   * When a meeting is cancelled.
   */
  cancel_meeting_reminder?: boolean;
  /**
   * Whether to notify the host when a cloud recording is available.
   */
  cloud_recording_available_reminder?: boolean;
  /**
   * When attendees join meeting before host.
   */
  jbh_reminder?: boolean;
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
