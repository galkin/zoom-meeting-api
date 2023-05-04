/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Account Settings: Integration.
 */
export type AccountSettingsIntegration = {
  /**
   * Enable users who join a meeting from their mobile device to share content from their Box account.
   */
  box?: boolean;
  /**
   * Enable users who join a meeting from their mobile device to share content from their Dropbox account.
   */
  dropbox?: boolean;
  /**
   * Enable meetings to be scheduled using Google Calendar.
   */
  google_calendar?: boolean;
  /**
   * Enable users who join a meeting from their mobile device to share content from their Google Drive.
   */
  google_drive?: boolean;
  /**
   * Enable users to control a connected Kubi device from within a Zoom meeting.
   */
  kubi?: boolean;
  /**
   * Enable users who join a meeting from their mobile device to share content from their Microsoft OneDrive account.
   */
  microsoft_one_drive?: boolean;
};
