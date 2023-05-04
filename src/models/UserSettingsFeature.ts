/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserSettingsFeature = {
  /**
   * Host meeting in China.
   * @deprecated
   */
  cn_meeting?: boolean;
  /**
   * The user's assigned [Concurrent Meeting](https://support.zoom.us/hc/en-us/articles/206122046) type:
   * * `Basic`
   * * `Plus`
   * * `None`
   *
   * **Note:** This feature requires a Concurrent Meeting Basic or Plus plan subscription.
   */
  concurrent_meeting?: UserSettingsFeature.concurrent_meeting;
  /**
   * Host meeting in India.
   * @deprecated
   */
  in_meeting?: boolean;
  /**
   * Large meeting feature.
   */
  large_meeting?: boolean;
  /**
   * Large meeting capacity: can be 500 or 1000, depending on if the user has a large meeting capacity plan subscription or not.
   */
  large_meeting_capacity?: number;
  /**
   * User's meeting capacity.
   */
  meeting_capacity?: number;
  /**
   * Webinar feature.
   */
  webinar?: boolean;
  /**
   * Webinar capacity: can be 100, 500, 1000, 3000, 5000 or 10000, depending on if the user has a webinar capacity plan subscription or not.
   */
  webinar_capacity?: number;
  /**
   * Whether the Zoom Events feature is enabled for the user.
   */
  zoom_events?: boolean;
  /**
   * The user's Zoom Events plan capacity: `500`, `1000`, `3000`, `5000`, `10000`, `20000`, `30000`, or `50000`.
   */
  zoom_events_capacity?: UserSettingsFeature.zoom_events_capacity;
  /**
   * Zoom phone feature.
   */
  zoom_phone?: boolean;
  /**
   * Whether the user has a Zoom IQ license. For information about a Zoom IQ license, contact [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).
   */
  zoom_iq_for_sales?: boolean;
  /**
   * Whether the user has a Zoom Whiteboard license.
   */
  zoom_whiteboard?: boolean;
  /**
   * Whether the user has a Zoom Whiteboard Plus license.
   */
  zoom_whiteboard_plus?: boolean;
  /**
   * Whether the user has a Zoom Translated Captions license.
   */
  zoom_translated_captions?: boolean;
  /**
   * Whether the user has a Zoom Customer Managed Key license.
   */
  zoom_customer_managed_key?: boolean;
};

export namespace UserSettingsFeature {
  /**
   * The user's assigned [Concurrent Meeting](https://support.zoom.us/hc/en-us/articles/206122046) type:
   * * `Basic`
   * * `Plus`
   * * `None`
   *
   * **Note:** This feature requires a Concurrent Meeting Basic or Plus plan subscription.
   */
  export enum concurrent_meeting {
    BASIC = 'Basic',
    PLUS = 'Plus',
    NONE = 'None',
  }

  /**
   * The user's Zoom Events plan capacity: `500`, `1000`, `3000`, `5000`, `10000`, `20000`, `30000`, or `50000`.
   */
  export enum zoom_events_capacity {
    '_500' = 500,
    '_1000' = 1000,
    '_3000' = 3000,
    '_5000' = 5000,
    '_10000' = 10000,
    '_20000' = 20000,
    '_30000' = 30000,
    '_50000' = 50000,
  }
}
