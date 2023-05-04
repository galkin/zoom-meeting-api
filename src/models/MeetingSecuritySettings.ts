/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MeetingSecuritySettings = {
  meeting_security?: {
    /**
     * `true`: Require that all meetings are secured with at least one security option.
     *
     * This setting can only be disabled by Enterprise, ISV, Business (with more than 100 licenses), and Education accounts. [Learn more](https://marketplace.zoom.us/docs/guides/stay-up-to-date/announcements#meeting-security).
     */
    auto_security?: boolean;
    /**
     * If set to `true`, Block users in specific domains from joining meetings and webinars.
     */
    block_user_domain?: boolean;
    /**
     * Specific domain, for Example: `*.example.com`.
     */
    block_user_domain_list?: Array<string>;
    /**
     * If set to `true`, meeting passcode will be encrypted and included in the invite link to allow participants to join with just one click without having to enter the passcode.
     *
     */
    embed_password_in_join_link?: boolean;
    /**
     * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
     * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
     *
     * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
     */
    encryption_type?: MeetingSecuritySettings.encryption_type;
    /**
     * Allow use of end-to-end encryption for meetings. If set to `true`, you can specify the encryption type in `encryption_type` field.
     */
    end_to_end_encrypted_meetings?: boolean;
    /**
     * If set to `true`, all instant, and scheduled meetings that users can join via client, or room systems will be passcode-protected. The Personal Meeting ID (PMI) meetings are not included in this setting.
     */
    meeting_password?: boolean;
    /**
     * Meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
     */
    meeting_password_requirement?: {
      consecutive_characters_length?: MeetingSecuritySettings.consecutive_characters_length;
      /**
       * If set to `true`, the passcode must contain at least 1 letter (such as a,b,c...).
       *
       */
      have_letter?: boolean;
      /**
       * If set to `true`, the passcode must contain at least 1 number (such as 1,2,3...).
       */
      have_number?: boolean;
      /**
       * If set to `true`, the passcode must have at least 1 special character (!,@,#...).
       */
      have_special_character?: boolean;
      /**
       * If set to `true`, the passcode must include both uppercase and lowercase characters.
       */
      have_upper_and_lower_characters?: boolean;
      /**
       * The minimum length that the meeting/webinar passcode needs to have.
       */
      length?: number;
      /**
       * If set to `true`, the passcode must only contain numbers and no other characters.
       */
      only_allow_numeric?: boolean;
      /**
       * If set to `true`, users will be informed if the provided passcode is weak.
       */
      weak_enhance_detection?: boolean;
    };
    /**
     * Require passcode for participants joining by phone. If set to `true`, a numeric passcode will be required for participants joining by phone if your meeting has a passcode. For meeting with an alphanumeric passcode, a numeric version will be generated.
     */
    phone_password?: boolean;
    /**
     * If set to `true`, all Personal Meeting ID (PMI) meetings that users can join via client, or room systems will be passcode-protected.
     *
     */
    pmi_password?: boolean;
    /**
     * Require a passcode for meetings which have already been scheduled.
     *
     */
    require_password_for_scheduled_meeting?: boolean;
    /**
     * Require a passcode for webinars which have already been scheduled.
     *
     */
    require_password_for_scheduled_webinar?: boolean;
    /**
     * When participants join a meeting, place them in a waiting room and require the host to admit them individually. Enabling the waiting room automatically disables the setting for allowing participants to join before host.
     *
     */
    waiting_room?: boolean;
    /**
     * Specify the settings to be applied if waiting room is enabled.
     */
    waiting_room_settings?: {
      /**
       *
       *
       * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
       * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
       */
      participants_to_place_in_waiting_room?: MeetingSecuritySettings.participants_to_place_in_waiting_room;
      /**
       * Specify who can admit participants from the waiting room. The value of this field can be one of the following:<br>
       * `0`: Host and co-hosts only<br> `1`: Host, co-hosts, and anyone who bypassed the waiting room (only if host and co-hosts are not present).
       *
       *
       *
       */
      users_who_can_admit_participants_from_waiting_room?: number;
      /**
       * If the value of the `participants_to_place_in_waiting_room` field is `2`, use this setting to specify the domains that can bypass the waiting room feature. Separate multiple domains with commas(example: "aaa.com,bbb.com").
       */
      whitelisted_domains_for_waiting_room?: string;
    };
    /**
     * If set to `true`, a passcode will be generated when scheduling a Webinar and participants require the passcode to join the Webinar.
     *
     */
    webinar_password?: boolean;
  };
};

export namespace MeetingSecuritySettings {
  /**
   * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
   * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
   *
   * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
   */
  export enum encryption_type {
    ENHANCED_ENCRYPTION = 'enhanced_encryption',
    E2EE = 'e2ee',
  }

  export enum consecutive_characters_length {
    '_0' = 0,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
    '_8' = 8,
  }

  /**
   *
   *
   * Specify who should be admitted to the waiting room. The value of this field can be one of the following:<br>
   * `0`: All attendees<br> `1`: Users who are not in your account<br> `2`: Users who are not in your account and are not part of your whitelisted domains that are specified in
   */
  export enum participants_to_place_in_waiting_room {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
  }
}
