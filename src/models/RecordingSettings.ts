/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RecordingSettings = {
  /**
   * Approval type for the registration.<br>
   * `0`- Automatically approve the registration when a user registers.<br>
   * `1` - Manually approve or deny the registration of a user.<br>
   * `2` - No registration required to view the recording.
   */
  approval_type?: RecordingSettings.approval_type;
  /**
   * Authentication domains.
   */
  authentication_domains?: string;
  /**
   * Authentication Options.
   */
  authentication_option?: string;
  /**
   * Determine whether registration is required to view the recording.
   */
  on_demand?: boolean;
  /**
   * Enable password protection for the recording by setting a password. The password must have a minimum of **eight** characters with a mix of numbers, letters and special characters.<br><br>
   * **Note:** If the account owner or the admin has set minimum password strength requirements for recordings via Account Settings, the password value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](/docs/api-reference/zoom-api/ma#operation/accountSettings) API.
   */
  password?: string;
  /**
   * Only authenticated users can view.
   */
  recording_authentication?: boolean;
  /**
   * Send an email to host when someone registers to view the recording. This applies for On-demand recordings only.
   */
  send_email_to_host?: boolean;
  /**
   * Determine how the meeting recording is shared.
   */
  share_recording?: RecordingSettings.share_recording;
  /**
   * Show social share buttons on registration page. This applies for On-demand recordings only.
   */
  show_social_share_buttons?: boolean;
  /**
   * Name of the recording.
   */
  topic?: string;
  /**
   * Determine whether a viewer can download the recording file or not.
   */
  viewer_download?: boolean;
};

export namespace RecordingSettings {
  /**
   * Approval type for the registration.<br>
   * `0`- Automatically approve the registration when a user registers.<br>
   * `1` - Manually approve or deny the registration of a user.<br>
   * `2` - No registration required to view the recording.
   */
  export enum approval_type {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
  }

  /**
   * Determine how the meeting recording is shared.
   */
  export enum share_recording {
    PUBLICLY = 'publicly',
    INTERNALLY = 'internally',
    NONE = 'none',
  }
}
