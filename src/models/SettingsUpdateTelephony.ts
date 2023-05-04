/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SettingsUpdateTelephony = {
  /**
   * Third party audio conference info.
   */
  audio_conference_info?: string;
  /**
   * Show the international numbers link on the invitation email.
   */
  show_international_numbers_link?: boolean;
  /**
   * Indicates where most of the participants call into or call from during a meeting.
   */
  telephony_regions?: {
    /**
     * The account's selected telephony regions that indicate where most participants call into or call from during a meeting.
     */
    selection_values?: string;
  };
  /**
   * Third party audio conference.
   */
  third_party_audio?: boolean;
};
