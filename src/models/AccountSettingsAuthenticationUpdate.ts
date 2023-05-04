/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccountSettingsAuthenticationUpdate =
  | {
      /**
       * Whether to enable the [**Allow authentication exception**](https://support.zoom.us/hc/en-us/articles/360037117472#h_01F13A9N1FQFNVESC9C21NRHXY) setting. This lets hosts invite users who can bypass authentication.
       */
      allow_authentication_exception?: boolean;
      /**
       * Meeting Authentication Options
       */
      authentication_option?: {
        /**
         * Specify the action that you would like to take via this API request:<br>
         * * `add` : Choose this value if you are adding an authentication option.
         * * `update`: Choose this value if you are updating an existing authentication option.
         * * `delete`: Choose this value if you are deleting an existing authentication option.
         */
        action?: AccountSettingsAuthenticationUpdate.action;
        /**
         * Specify whether you would like to set this authentication option as the default option or not.
         */
        default_option?: boolean;
        /**
         * If you chose `enforce_login_with_domains` as the authentication type, specify the domain(s) that you want to allow to join your meetings or webinars.
         */
        domains?: string;
        /**
         *  Authentication ID. If you are creating an authentication profile, you do not need to provide this field. The id field will be generated in the response once this API request is completed successfully. You can also use the Get Account Settings API with query parameter set to `meeting_authentication` to list the authentication id.<br><br>
         * Use this field or the `name` field to identify the associated authentication option that you would like to update or delete.
         */
        id?: string;
        /**
         * Unique name for the authentication option.
         */
        name?: string;
        /**
         *  Authentication type. Specify one of the following authentication types for the authentication profile:<br>
         * * `enforce_login`: This option allows any users to join the meeting or webinar, as long as they are signed into their Zoom account.
         * * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can join the meeting or webinar. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.<br>
         * * `enforce_login_with_same_account`: This option allows users to join the meeting or webinar with the same Zoom account.
         */
        type?: AccountSettingsAuthenticationUpdate.type;
      };
      /**
       * If set to "true", only authenticated users can join meetings. The method for authentication can be defined in the "authentication_option".
       */
      meeting_authentication?: boolean;
    }
  | {
      /**
       * Specify the authentication options for this account.
       */
      authentication_option?: {
        /**
         * Specify the action that you would like to take via this API request:<br>
         * * `add` : Choose this value if you are adding an authentication option.
         * * `update`: Choose this value if you are updating an existing authentication option.
         * * `delete`: Choose this value if you are deleting an existing authentication option.
         */
        action?: AccountSettingsAuthenticationUpdate.action;
        /**
         * Specify whether you would like to set this authentication option as the default option or not.
         */
        default_option?: boolean;
        /**
         * If you chose `enforce_login_with_domains` as the authentication type, specify the domain(s) that you want to allow to view the recordings.
         */
        domains?: string;
        /**
         *  Authentication ID. If you are creating an authentication profile, you do not need to provide this field. The id field will be generated in the response once this API request is completed successfully. You can also use the Get Account Settings API with query parameter set to `meeting_authentication` to list the authentication id.<br><br>
         * Use this field or the `name` field to identify the associated authentication option that you would like to update or delete.
         */
        id?: string;
        /**
         * Unique name for the authentication option.
         */
        name?: string;
        /**
         * Specify one authentication type that is to be associated with this authentication configuration:<br>
         * * `internally`: This option allows you specify a rule that only signed in users within your account can view the recording.<br>
         * * `enforce_login`: This option allows any users to view the recording, as long as they are signed into their Zoom account.<br>
         * * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can view the recording. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.
         *
         *
         */
        type?: AccountSettingsAuthenticationUpdate.type;
      };
      /**
       * If set to `true`, only authenticated users can view the cloud recordings.<br><br>
       * The authentication profile **must first be set at the account level via the account settings**, and later can be disabled after enabling on the preferred level - i.e. user level using user settings or at group level via group settings  (if you do not want the settings to be enabled on the entire account).
       */
      recording_authentication?: boolean;
    };

export namespace AccountSettingsAuthenticationUpdate {
  /**
   * Specify the action that you would like to take via this API request:<br>
   * * `add` : Choose this value if you are adding an authentication option.
   * * `update`: Choose this value if you are updating an existing authentication option.
   * * `delete`: Choose this value if you are deleting an existing authentication option.
   */
  export enum action {
    UPDATE = 'update',
    DELETE = 'delete',
    ADD = 'add',
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
