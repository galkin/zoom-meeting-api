/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Webinar registrant.
 */
export type WebinarRegistrant = {
  /**
   * The registrant's address.
   */
  address?: string;
  /**
   * The registrant's city.
   */
  city?: string;
  /**
   * The registrant's questions and comments.
   */
  comments?: string;
  /**
   * The registrant's two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
   */
  country?: string;
  /**
   * Information about custom questions.
   */
  custom_questions?: Array<{
    /**
     * The title of the custom question.
     */
    title?: string;
    /**
     * The custom question's response value. This has a limit of 128 characters.
     */
    value?: string;
  }>;
  /**
   * The registrant's email address. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for return value details.
   */
  email: string;
  /**
   * The registrant's first name.
   */
  first_name: string;
  /**
   * The registrant's industry.
   */
  industry?: string;
  /**
   * The registrant's job title.
   */
  job_title?: string;
  /**
   * The registrant's last name.
   */
  last_name?: string;
  /**
   * The registrant's number of employees:
   * * `1-20`
   * * `21-50`
   * * `51-100`
   * * `101-250`
   * * `251-500`
   * * `501-1,000`
   * * `1,001-5,000`
   * * `5,001-10,000`
   * * `More than 10,000`
   */
  no_of_employees?: WebinarRegistrant.no_of_employees;
  /**
   * The registrant's organization.
   */
  org?: string;
  /**
   * The registrant's phone number.
   */
  phone?: string;
  /**
   * The registrant's purchasing time frame:
   * * `Within a month`
   * * `1-3 months`
   * * `4-6 months`
   * * `More than 6 months`
   * * `No timeframe`
   */
  purchasing_time_frame?: WebinarRegistrant.purchasing_time_frame;
  /**
   * The registrant's role in the purchase process:
   * * `Decision Maker`
   * * `Evaluator/Recommender`
   * * `Influencer`
   * * `Not involved`
   */
  role_in_purchase_process?: WebinarRegistrant.role_in_purchase_process;
  /**
   * The registrant's state or province.
   */
  state?: string;
  /**
   * The registrant's status:
   * * `approved` — Registrant is approved.
   * * `denied` — Registrant is denied.
   * * `pending` — Registrant is waiting for approval.
   */
  status?: WebinarRegistrant.status;
  /**
   * The registrant's ZIP or postal code.
   */
  zip?: string;
  /**
   * The registrant's language preference for confirmation emails:
   * * `en-US` — English (US)
   * * `de-DE` — German (Germany)
   * * `es-ES` — Spanish (Spain)
   * * `fr-FR` — French (France)
   * * `jp-JP` — Japanese
   * * `pt-PT` — Portuguese (Portugal)
   * * `ru-RU` — Russian
   * * `zh-CN` — Chinese (PRC)
   * * `zh-TW` — Chinese (Taiwan)
   * * `ko-KO` — Korean
   * * `it-IT` — Italian (Italy)
   * * `vi-VN` — Vietnamese
   * * `pl-PL` — Polish
   * * `Tr-TR` — Turkish
   */
  language?: WebinarRegistrant.language;
};

export namespace WebinarRegistrant {
  /**
   * The registrant's number of employees:
   * * `1-20`
   * * `21-50`
   * * `51-100`
   * * `101-250`
   * * `251-500`
   * * `501-1,000`
   * * `1,001-5,000`
   * * `5,001-10,000`
   * * `More than 10,000`
   */
  export enum no_of_employees {
    _1_20 = '1-20',
    _21_50 = '21-50',
    _51_100 = '51-100',
    _101_250 = '101-250',
    _251_500 = '251-500',
    _501_1_000 = '501-1,000',
    _1_001_5_000 = '1,001-5,000',
    _5_001_10_000 = '5,001-10,000',
    MORE_THAN_10_000 = 'More than 10,000',
  }

  /**
   * The registrant's purchasing time frame:
   * * `Within a month`
   * * `1-3 months`
   * * `4-6 months`
   * * `More than 6 months`
   * * `No timeframe`
   */
  export enum purchasing_time_frame {
    WITHIN_A_MONTH = 'Within a month',
    _1_3_MONTHS = '1-3 months',
    _4_6_MONTHS = '4-6 months',
    MORE_THAN_6_MONTHS = 'More than 6 months',
    NO_TIMEFRAME = 'No timeframe',
  }

  /**
   * The registrant's role in the purchase process:
   * * `Decision Maker`
   * * `Evaluator/Recommender`
   * * `Influencer`
   * * `Not involved`
   */
  export enum role_in_purchase_process {
    DECISION_MAKER = 'Decision Maker',
    EVALUATOR_RECOMMENDER = 'Evaluator/Recommender',
    INFLUENCER = 'Influencer',
    NOT_INVOLVED = 'Not involved',
  }

  /**
   * The registrant's status:
   * * `approved` — Registrant is approved.
   * * `denied` — Registrant is denied.
   * * `pending` — Registrant is waiting for approval.
   */
  export enum status {
    APPROVED = 'approved',
    DENIED = 'denied',
    PENDING = 'pending',
  }

  /**
   * The registrant's language preference for confirmation emails:
   * * `en-US` — English (US)
   * * `de-DE` — German (Germany)
   * * `es-ES` — Spanish (Spain)
   * * `fr-FR` — French (France)
   * * `jp-JP` — Japanese
   * * `pt-PT` — Portuguese (Portugal)
   * * `ru-RU` — Russian
   * * `zh-CN` — Chinese (PRC)
   * * `zh-TW` — Chinese (Taiwan)
   * * `ko-KO` — Korean
   * * `it-IT` — Italian (Italy)
   * * `vi-VN` — Vietnamese
   * * `pl-PL` — Polish
   * * `Tr-TR` — Turkish
   */
  export enum language {
    EN_US = 'en-US',
    DE_DE = 'de-DE',
    ES_ES = 'es-ES',
    FR_FR = 'fr-FR',
    JP_JP = 'jp-JP',
    PT_PT = 'pt-PT',
    RU_RU = 'ru-RU',
    ZH_CN = 'zh-CN',
    ZH_TW = 'zh-TW',
    KO_KO = 'ko-KO',
    IT_IT = 'it-IT',
    VI_VN = 'vi-VN',
    PL_PL = 'pl-PL',
    TR_TR = 'Tr-TR',
  }
}
