/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GroupUserSettingsAuthenticationUpdate =
  | {
      /**
       * Meeting Authentication Options
       */
      authentication_option?: {
        /**
         * Authentication action
         */
        action?: GroupUserSettingsAuthenticationUpdate.action;
        /**
         * Authentication default option
         */
        default_option?: boolean;
        /**
         * Authentication domains
         */
        domains?: string;
        /**
         * Authentication id
         */
        id?: string;
        /**
         * Authentication name
         */
        name?: string;
        /**
         *  Authentication type. Specify one of the following authentication types for the authentication profile:<br>
         * * `enforce_login`: This option allows any users to join the meeting or webinar, as long as they are signed into their Zoom account.
         * * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can join the meeting or webinar. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.<br>
         * * `enforce_login_with_same_account`: This option allows users to join the meeting or webinar with the same Zoom account.
         */
        type?: GroupUserSettingsAuthenticationUpdate.type;
      };
      /**
       * Only authenticated users can join meetings
       */
      meeting_authentication?: boolean;
    }
  | {
      /**
       * Authentication Options
       */
      authentication_option?: {
        /**
         * Authentication action
         */
        action?: GroupUserSettingsAuthenticationUpdate.action;
        /**
         * Authentication default option
         */
        default_option?: boolean;
        /**
         * Authentication domains
         */
        domains?: string;
        /**
         * Authentication id
         */
        id?: string;
        /**
         * Authentication name
         */
        name?: string;
        /**
         * Authentication type
         */
        type?: GroupUserSettingsAuthenticationUpdate.type;
      };
      /**
       * Only authenticated users can view cloud recordings
       */
      recording_authentication?: boolean;
    };

export namespace GroupUserSettingsAuthenticationUpdate {
  /**
   * Authentication action
   */
  export enum action {
    UPDATE = 'update',
    SHOW = 'show',
    HIDE = 'hide',
  }

  /**
   *  Authentication type. Specify one of the following authentication types for the authentication profile:<br>
   * * `enforce_login`: This option allows any users to join the meeting or webinar, as long as they are signed into their Zoom account.
   * * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can join the meeting or webinar. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.<br>
   * * `enforce_login_with_same_account`: This option allows users to join the meeting or webinar with the same Zoom account.
   */
  export enum type {
    ENFORCE_LOGIN = 'enforce_login',
    ENFORCE_LOGIN_WITH_SAME_ACCOUNT = 'enforce_login_with_same_account',
    ENFORCE_LOGIN_WITH_DOMAINS = 'enforce_login_with_domains',
  }
}
