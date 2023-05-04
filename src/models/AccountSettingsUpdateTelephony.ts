/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Account Settings Update: Telephony.
 */
export type AccountSettingsUpdateTelephony = {
  /**
   * Third party audio conference info.
   */
  audio_conference_info?: string;
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
   * Users can join the meeting using the existing third party audio configuration.
   */
  third_party_audio?: boolean;
};
