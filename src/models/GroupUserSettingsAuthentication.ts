/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GroupUserSettingsAuthentication =
  | {
      /**
       * Whether the [**Allow authentication exception**](https://support.zoom.us/hc/en-us/articles/360037117472#h_01F13A9N1FQFNVESC9C21NRHXY) setting is enabled. This lets hosts invite users who can bypass authentication.
       */
      allow_authentication_exception?: boolean;
      /**
       * Meeting Authentication Options
       */
      authentication_options?: Array<{
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
        type?: 'enforce_login' | 'enforce_login_with_same_account' | 'enforce_login_with_domains';
        /**
         * Authentication visible
         */
        visible?: boolean;
      }>;
      /**
       * Only authenticated users can join meetings
       */
      meeting_authentication?: boolean;
    }
  | {
      /**
       * Authentication Options
       */
      authentication_options?: Array<{
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
        type?: 'internally' | 'enforce_login' | 'enforce_login_with_domains';
        /**
         * Authentication visible
         */
        visible?: boolean;
      }>;
      /**
       * Only authenticated users can view cloud recordings
       */
      recording_authentication?: boolean;
    };
