/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * [Security settings](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) of an Account.
 */
export type AccountSettingsSecurity = {
  /**
   * Whether to only allow account administrators to change a user's picture.
   * @deprecated
   */
  admin_change_name_pic?: boolean;
  /**
   * Whether to only allow account administrators to change a user's information.
   */
  admin_change_user_info?: boolean;
  /**
   * If the `admin_change_user_info` value is `true`, the list of the types of user information that only the account administrators can modify:
   * * `name`
   * * `profile_picture`
   * * `sign_in_email`
   * * `host_key`
   */
  user_modifiable_info_by_admin?: Array<'name' | 'profile_picture' | 'sign_in_email' | 'host_key'>;
  /**
   * Hide billing information.
   */
  hide_billing_info?: boolean;
  /**
   * Allow users to import photos from a photo library on a  device.
   */
  import_photos_from_devices?: boolean;
  /**
   * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requirements to the users' Zoom login password.
   */
  password_requirement?: {
    /**
     *
     * Specify the max length of consecutive characters(abcde...) that can be used in a password.
     * If you set the value of this field to `0`, no restriction will be applied on consecutive characters.
     *
     * If you would like to set this restriction, you can specify a number between 4 and 8 that define the maximum allowed length for consecutive characters in a password.
     *
     * The max allowed length will be `n-1` where `n` refers to the value you provide for this field.  For instance, if you provide `4` as the value, there can only be a maximum of `3` consecutive characters in a password(example: abc1x@8fdh).
     */
    consecutive_characters_length?: number;
    /**
     * If the value of this field is set to `true`, the password must have at least one special character(!, @, #...).
     */
    have_special_character?: boolean;
    /**
     * Specify a minimum length for the password. The password length can be from a minimum of 9 characters, up to 14 characters. If you provide `0` as the value of this field, this field will be disabled and not be used and the basic password length requirement (minimum of 8 characters) will be applied for the requirement.
     */
    minimum_password_length?: number;
    /**
     * If the value of this field is set to `true`, user passwords will have to pass detection through a weak password dictionary in case hackers use simple passwords to sign in to your users' accounts.
     */
    weak_enhance_detection?: boolean;
  };
  /**
   * Settings for User Sign In interval requirements after a period of inactivity. If enabled, this setting forces automatic logout of users in Zoom Client app after a set amount of time. <br>
   *
   * If this setting is disabled, the value of this field will be `0`. If the setting is enabled, the value of this field will indicate the **period of inactivity** in minutes after which, an inactive user will be automatically logged out of the Zoom Client. The value for the period of inactivity can be one of the following:<br>
   *
   * `5`: 5 minutes<br>
   * `10`: 10 minutes<br>
   * `15`: 15 minutes<br>
   * `30`: 30 minutes<br>
   * `45`: 45 minutes<br>
   * `60`: 60 minutes<br>
   * `90`: 90 minutes<br>
   * `120`: 120 minutes
   *
   */
  sign_again_period_for_inactivity_on_client?: number;
  /**
   * Settings for User Sign In interval requirements after a period of inactivity. If enabled, this setting forces automatic logout of users in Zoom Web Portal after a set amount of time. <br>
   *
   * If this setting is disabled, the value of this field will be `0`. If the setting is enabled, the value of this field will indicate the **period of inactivity** in minutes after which, an inactive user will be automatically logged out of the Zoom Web Portal. The value for the period of inactivity can be one of the following:<br>
   *
   * `5`: 5 minutes<br>
   * `10`: 10 minutes<br>
   * `15`: 15 minutes<br>
   * `30`: 30 minutes<br>
   * `60`: 60 minutes<br>
   * `120`: 120 minutes
   *
   *
   *
   *
   */
  sign_again_period_for_inactivity_on_web?: number;
  /**
   * Settings for 2FA( [two factor authentication](https://support.zoom.us/hc/en-us/articles/360038247071) ). The value can be one of the following:
   * `all`: Two factor authentication will be enabled for all users in the account.<br>
   * `none`: Two factor authentication is disabled.<br>
   * `group`: Two factor authentication will be enabled for users belonging to specific groups. If 2FA is enabled for certain groups, the group IDs of the group(s) will be provided in the `sign_in_with_two_factor_auth_groups` field.<br>
   * `role`: Two factor authentication will be enabled only for users assigned with specific roles in the account. If 2FA is enabled for specific roles, the role IDs will be provided in the
   * `sign_in_with_two_factor_auth_roles` field.
   *
   */
  sign_in_with_two_factor_auth?: AccountSettingsSecurity.sign_in_with_two_factor_auth;
  /**
   * This field contains group IDs of groups that have 2FA enabled. This field is only returned if the value of `sign_in_with_two_factor_auth` is `group`
   */
  sign_in_with_two_factor_auth_groups?: Array<string>;
  /**
   * This field contains role IDs of roles that have 2FA enabled. This field is only returned if the value of `sign_in_with_two_factor_auth` is `role`.
   */
  sign_in_with_two_factor_auth_roles?: Array<string>;
};

export namespace AccountSettingsSecurity {
  /**
   * Settings for 2FA( [two factor authentication](https://support.zoom.us/hc/en-us/articles/360038247071) ). The value can be one of the following:
   * `all`: Two factor authentication will be enabled for all users in the account.<br>
   * `none`: Two factor authentication is disabled.<br>
   * `group`: Two factor authentication will be enabled for users belonging to specific groups. If 2FA is enabled for certain groups, the group IDs of the group(s) will be provided in the `sign_in_with_two_factor_auth_groups` field.<br>
   * `role`: Two factor authentication will be enabled only for users assigned with specific roles in the account. If 2FA is enabled for specific roles, the role IDs will be provided in the
   * `sign_in_with_two_factor_auth_roles` field.
   *
   */
  export enum sign_in_with_two_factor_auth {
    ALL = 'all',
    GROUP = 'group',
    ROLE = 'role',
    NONE = 'none',
  }
}
