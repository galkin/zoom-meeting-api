/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Account Settings: Telephony.
 */
export type AccountSettingsTelephony = {
  /**
   * Third party audio conference info.
   */
  audio_conference_info?: string;
  /**
   * Indicates where most of the participants call into or call from during a meeting.
   */
  telephony_regions?: {
    /**
     * Telephony region options provided by Zoom to select from.
     */
    allowed_values?: Array<string>;
    /**
     * The account's selected telephony regions that indicate where most participants call in to or call from during a meeting.
     */
    selection_values?: string;
  };
  /**
   * Users can join the meeting using the existing third party audio configuration.
   */
  third_party_audio?: boolean;
};
