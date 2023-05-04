/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserSettingsFeatureUpdate = {
  /**
   * The user's assigned [Concurrent Meeting](https://support.zoom.us/hc/en-us/articles/206122046) type:
   * * `Basic`
   * * `Plus`
   * * `None`
   *
   * **Note:** This feature requires a Concurrent Meeting Basic or Plus plan subscription.
   */
  concurrent_meeting?: UserSettingsFeatureUpdate.concurrent_meeting;
  /**
   * Enable [large meeting](https://support.zoom.us/hc/en-us/articles/201362823-What-is-a-Large-Meeting-) feature for the user.
   */
  large_meeting?: boolean;
  /**
   * Set the meeting capacity for the user if the user has **Large meeting** feature enabled. The value for the field can be either 500 or 1000.
   */
  large_meeting_capacity?: number;
  /**
   * Set a user's meeting capacity. User's meeting capacity denotes the maximum number of participants that can join a meeting scheduled by the user.
   */
  meeting_capacity?: number;
  /**
   * Enable Webinar feature for the user.
   */
  webinar?: boolean;
  /**
   * The user's webinar capacity. This only applies to users with the [**Webinar**](https://support.zoom.us/hc/en-us/articles/200917029-Getting-started-with-webinar) feature enabled:
   * * `100`
   * * `500`
   * * `501`
   * * `1000`
   * * `1001`
   * * `3000`
   * * `5000`
   * * `10000`
   */
  webinar_capacity?: UserSettingsFeatureUpdate.webinar_capacity;
  /**
   * Whether to enable the Zoom Events feature for the user.
   */
  zoom_events?: boolean;
  /**
   * The user's Zoom Events plan capacity: `500`, `1000`, `3000`, `5000`, `10000`, `20000`, `30000`, or `50000`.
   */
  zoom_events_capacity?: UserSettingsFeatureUpdate.zoom_events_capacity;
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

export namespace UserSettingsFeatureUpdate {
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
   * The user's webinar capacity. This only applies to users with the [**Webinar**](https://support.zoom.us/hc/en-us/articles/200917029-Getting-started-with-webinar) feature enabled:
   * * `100`
   * * `500`
   * * `501`
   * * `1000`
   * * `1001`
   * * `3000`
   * * `5000`
   * * `10000`
   */
  export enum webinar_capacity {
    '_100' = 100,
    '_500' = 500,
    '_501' = 501,
    '_1000' = 1000,
    '_1001' = 1001,
    '_3000' = 3000,
    '_5000' = 5000,
    '_10000' = 10000,
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
