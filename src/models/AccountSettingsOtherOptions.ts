/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccountSettingsOtherOptions = {
  /**
   * Whether administrators can activate users with a single default password when they add users. This immediately activates the users without waiting for them to set their own password.
   */
  allow_auto_active_users?: boolean;
  /**
   * Whether to display the Zoom Help badge on the bottom-right of the page.
   */
  allow_users_contact_support_via_chat?: boolean;
  /**
   * Whether users can add pronouns to their profile cards and share them during meetings and webinars.
   */
  allow_users_enter_and_share_pronouns?: boolean;
  /**
   * Whether iOS blurs the screenshot in the task switcher when multiple apps are open. Android hides the screenshot in the system-level list of recent apps.
   */
  blur_snapshot?: boolean;
  /**
   * Whether a user with the [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege) can view other users' meetings.
   */
  display_meetings_scheduled_for_others?: boolean;
  /**
   * The Dashboard meeting [quality scores and network alerts](https://support.zoom.us/hc/en-us/articles/360061244651) setting:
   * * `0` — Do not enable meeting quality scores and network alerts on the Dashboard.
   * * `1` — Display the meeting quality score and network alerts on the Dashboard.
   * * `2` — Use custom thresholds for quality scores and network alerts.
   * * `3` —Both Use custom thresholds for quality scores and network alerts and Display the meeting quality score and network alerts on the Dashboard.
   */
  meeting_qos_and_mos?: AccountSettingsOtherOptions.meeting_qos_and_mos;
  /**
   * Whether meetings with only one person will display on the Dashboard and in reports.
   */
  show_one_user_meeting_on_dashboard?: boolean;
  /**
   * Allow connections to different CDNs (content delivery networks) for a better web browsing experience. All users in your organization will use the selected CDN to access static resources:
   * * `none` — Do not use a CDN.
   * * `default` — Use the Amazon CloudFront CDN for users **except** Chinese Mainland users. Chinese Mainland users will use the Wangsu CDN (China).
   * * `wangsu` — Use the Wangsu CDN for all users.
   */
  use_cdn?: AccountSettingsOtherOptions.use_cdn;
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

export namespace AccountSettingsOtherOptions {
  /**
   * The Dashboard meeting [quality scores and network alerts](https://support.zoom.us/hc/en-us/articles/360061244651) setting:
   * * `0` — Do not enable meeting quality scores and network alerts on the Dashboard.
   * * `1` — Display the meeting quality score and network alerts on the Dashboard.
   * * `2` — Use custom thresholds for quality scores and network alerts.
   * * `3` —Both Use custom thresholds for quality scores and network alerts and Display the meeting quality score and network alerts on the Dashboard.
   */
  export enum meeting_qos_and_mos {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }

  /**
   * Allow connections to different CDNs (content delivery networks) for a better web browsing experience. All users in your organization will use the selected CDN to access static resources:
   * * `none` — Do not use a CDN.
   * * `default` — Use the Amazon CloudFront CDN for users **except** Chinese Mainland users. Chinese Mainland users will use the Wangsu CDN (China).
   * * `wangsu` — Use the Wangsu CDN for all users.
   */
  export enum use_cdn {
    NONE = 'none',
    DEFAULT = 'default',
    WANGSU = 'wangsu',
  }
}
