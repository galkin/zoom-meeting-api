/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GroupSettingsOtherOptions = {
  /**
   * Whether to display the Zoom Help badge on the bottom-right of the page.
   */
  allow_users_contact_support_via_chat?: boolean;
  /**
   * Whether iOS blurs the screenshot in the task switcher when multiple apps are open. Android hides the screenshot in the system-level list of recent apps.
   */
  blur_snapshot?: boolean;
  /**
   * Webinar registration options.
   */
  webinar_registration_options?: {
    /**
     * Allow host to enable "Show join info on registration confirmation page".
     */
    allow_host_to_enable_join_info?: boolean;
    /**
     * Allow host to enable "Show social share buttons on registration page".
     */
    allow_host_to_enable_social_share_buttons?: boolean;
    /**
     * Enable custom questions.
     */
    enable_custom_questions?: boolean;
  };
};
