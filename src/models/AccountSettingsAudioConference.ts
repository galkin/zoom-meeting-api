/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The account's audio conference settings.
 */
export type AccountSettingsAudioConference = {
  /**
   * The account's [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F51680NJ7YHZDXGJNSKDGM2P) settings.
   */
  toll_free_and_fee_based_toll_call?: {
    /**
     * Whether webinar attendees can dial in through the account's **Toll-free and Fee-based Toll Call** phone numbers. This feature is only available in version 5.2.2 and higher.
     */
    allow_webinar_attendees_dial?: boolean;
    /**
     * Whether the account has the [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F51680NJ7YHZDXGJNSKDGM2P) setting enabled.
     */
    enable?: boolean;
    /**
     * The account's **Toll-free and Fee-based Toll Call** phone number information.
     */
    numbers?: Array<{
      /**
       * The phone number's [E.164 country calling code](https://en.wikipedia.org/wiki/List_of_country_calling_codes).
       */
      code?: string;
      /**
       * The phone number's [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
       */
      country_code?: string;
      /**
       * The country name.
       */
      country_name?: string;
      /**
       * The phone number's display number.
       */
      display_number?: string;
      /**
       * The phone number.
       */
      number?: string;
    }>;
  };
};
