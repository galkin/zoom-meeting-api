/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserUpdate = {
  /**
   * The Kaltura user ID.
   */
  cms_user_id?: string;
  /**
   * The user's company.
   */
  company?: string;
  /**
   * The user's assigned custom attributes.
   */
  custom_attributes?: Array<{
    /**
     * The custom attribute's key.
     */
    key?: string;
    /**
     * The custom attribute's name.
     */
    name?: string;
    /**
     * The custom attribute's value
     */
    value?: string;
  }>;
  /**
   * The user's assigned department.
   */
  dept?: string;
  /**
   * The user's first name. This value cannot contain more than five Chinese characters.
   */
  first_name?: string;
  /**
   * Provide unique identifier of the group that you would like to add a [pending user](https://support.zoom.us/hc/en-us/articles/201363183-Managing-users#h_13c87a2a-ecd6-40ad-be61-a9935e660edb) to. The value of this field can be retrieved from the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
   */
  group_id?: string;
  /**
   * The user's host key.
   */
  host_key?: string;
  /**
   * The user's job title.
   */
  job_title?: string;
  /**
   * The user's language.
   */
  language?: string;
  /**
   * The user's last name. This value cannot contain more than five Chinese characters.
   */
  last_name?: string;
  /**
   * The user's location.
   */
  location?: string;
  /**
   * The user's assigned manager.
   */
  manager?: string;
  /**
   * **Note:** This field has been **deprecated** and will not be supported in the future. Use the `country` field of the `phone_numbers` object to select the phone number country.
   *
   * The user's phone number [country ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
   * @deprecated
   */
  phone_country?: string;
  /**
   * **Note:** This field has been **deprecated** and will not be supported in the future. Instead, use the `phone_numbers` field to assign phone numbers to a user.
   *
   * The user's phone number. To update a phone number, you must also provide the `phone_country` field.
   * @deprecated
   */
  phone_number?: string;
  /**
   * Information about the user's assigned phone numbers.
   */
  phone_numbers?: Array<{
    /**
     * The phone number's country code
     */
    code?: string;
    /**
     * The phone number's [country ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) of the phone number.
     */
    country?: string;
    /**
     * The phone number's label:
     * * `Mobile`
     * * `Office`
     * * `Home`
     * * `Fax`
     */
    label?: 'Mobile' | 'Office' | 'Home' | 'Fax';
    /**
     * The phone number.
     */
    number?: string;
  }>;
  /**
   * The user's [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi).
   */
  pmi?: number;
  /**
   * The user's pronouns.
   */
  pronouns?: string;
  /**
   * The user's display pronouns setting:
   * * `1` — Ask the user every time they join meetings and webinars.
   * * `2` — Always display pronouns in meetings and webinars.
   * * `3` — Do not display pronouns in meetings and webinars.
   */
  pronouns_option?: UserUpdate.pronouns_option;
  /**
   * The user's [timezone](/docs/api-reference/other-references/abbreviation-lists#timezones)
   */
  timezone?: string;
  /**
   * The type of [user](https://support.zoom.us/hc/en-us/articles/201363173-Zoom-user-types-roles):
   * * `1` — Basic.
   * * `2` — Licensed.
   * * `3` — On-Premise.
   * * `4` — No Meetings License.
   * * `99` — None. You can only set this value if the user was created using the `ssoCreate` value for `action` parameter in the [**Create users**](/docs/api-reference/zoom-api/methods#operation/userCreate) API.
   */
  type?: UserUpdate.type;
  /**
   * Whether to use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi) for instant meetings.
   */
  use_pmi?: boolean;
  /**
   * The user's Personal Meeting Room name.
   */
  vanity_name?: string;
  /**
   * The Zoom One Bundle plan option:<br>`0` - Turn off Zoom United license.<br>`16` - Zoom One Business Plus with US/CA Unlimited.<br>`32` - Zoom One Business Plus with UK/IR Unlimited.<br>`64` - Zoom One Business Plus with AU/NZ Unlimited.<br>`128` - Zoom One Business Plus with Japan Unlimited.
   */
  zoom_one_type?: UserUpdate.zoom_one_type;
  /**
   * The Zoom United type. The license option:
   * * `1` — Zoom United Pro-United with US/CA Unlimited.
   * * `2` — Zoom United Pro-United with UK/IR Unlimited.
   * * `4` — Zoom United Pro-United with AU/NZ Unlimited.
   * * `8` — Zoom United Pro-United with Global Select.
   * * `16` — Zoom United Pro-United with Zoom Phone Pro.
   * * `32` — Zoom United Biz-United with US/CA Unlimited.
   * * `64` — Zoom United Biz-United with UK/IR Unlimited.
   * * `128` — Zoom United Biz-United with AU/NZ Unlimited.
   * * `256` — Zoom United Biz-United with Global Select.
   * * `512` — Zoom United Biz-United with Zoom Phone Pro.
   * * `1024` — Zoom United Ent-United with US/CA Unlimited.
   * * `2048` — Zoom United Ent-United with UK/IR Unlimited.
   * * `4096` — Zoom United Ent-United with AU/NZ Unlimited.
   * * `8192` — Zoom United Ent-United with Global Select.
   * * `16384` — Zoom United Ent-United with Zoom Phone Pro.
   * * `32768` — Zoom United Pro-United with JP Unlimited.
   * * `65536` — Zoom United Biz-United with JP Unlimited.
   * * `131072` — Zoom United Ent-United with JP Unlimited.
   * * `none` — Turn off Zoom United type.
   */
  plan_united_type?: UserUpdate.plan_united_type;
};

export namespace UserUpdate {
  /**
   * The user's display pronouns setting:
   * * `1` — Ask the user every time they join meetings and webinars.
   * * `2` — Always display pronouns in meetings and webinars.
   * * `3` — Do not display pronouns in meetings and webinars.
   */
  export enum pronouns_option {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }

  /**
   * The type of [user](https://support.zoom.us/hc/en-us/articles/201363173-Zoom-user-types-roles):
   * * `1` — Basic.
   * * `2` — Licensed.
   * * `3` — On-Premise.
   * * `4` — No Meetings License.
   * * `99` — None. You can only set this value if the user was created using the `ssoCreate` value for `action` parameter in the [**Create users**](/docs/api-reference/zoom-api/methods#operation/userCreate) API.
   */
  export enum type {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_99' = 99,
  }

  /**
   * The Zoom One Bundle plan option:<br>`0` - Turn off Zoom United license.<br>`16` - Zoom One Business Plus with US/CA Unlimited.<br>`32` - Zoom One Business Plus with UK/IR Unlimited.<br>`64` - Zoom One Business Plus with AU/NZ Unlimited.<br>`128` - Zoom One Business Plus with Japan Unlimited.
   */
  export enum zoom_one_type {
    '_0' = 0,
    '_16' = 16,
    '_32' = 32,
    '_64' = 64,
    '_128' = 128,
  }

  /**
   * The Zoom United type. The license option:
   * * `1` — Zoom United Pro-United with US/CA Unlimited.
   * * `2` — Zoom United Pro-United with UK/IR Unlimited.
   * * `4` — Zoom United Pro-United with AU/NZ Unlimited.
   * * `8` — Zoom United Pro-United with Global Select.
   * * `16` — Zoom United Pro-United with Zoom Phone Pro.
   * * `32` — Zoom United Biz-United with US/CA Unlimited.
   * * `64` — Zoom United Biz-United with UK/IR Unlimited.
   * * `128` — Zoom United Biz-United with AU/NZ Unlimited.
   * * `256` — Zoom United Biz-United with Global Select.
   * * `512` — Zoom United Biz-United with Zoom Phone Pro.
   * * `1024` — Zoom United Ent-United with US/CA Unlimited.
   * * `2048` — Zoom United Ent-United with UK/IR Unlimited.
   * * `4096` — Zoom United Ent-United with AU/NZ Unlimited.
   * * `8192` — Zoom United Ent-United with Global Select.
   * * `16384` — Zoom United Ent-United with Zoom Phone Pro.
   * * `32768` — Zoom United Pro-United with JP Unlimited.
   * * `65536` — Zoom United Biz-United with JP Unlimited.
   * * `131072` — Zoom United Ent-United with JP Unlimited.
   * * `none` — Turn off Zoom United type.
   */
  export enum plan_united_type {
    _1 = '1',
    _2 = '2',
    _4 = '4',
    _8 = '8',
    _16 = '16',
    _32 = '32',
    _64 = '64',
    _128 = '128',
    _256 = '256',
    _512 = '512',
    _1024 = '1024',
    _2048 = '2048',
    _4096 = '4096',
    _8192 = '8192',
    _16384 = '16384',
    _32768 = '32768',
    _65536 = '65536',
    _131072 = '131072',
    NONE = 'none',
  }
}
