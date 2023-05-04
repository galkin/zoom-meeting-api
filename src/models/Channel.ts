/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The channel object represents a Zoom chat [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-).
 */
export type Channel = {
  properties?: {
    channel_settings?: {
      /**
       * Allow members to add external users to the channel. The value can be one of the following:<br>
       * `0`: Disable. Do not allow channel members to add external users to the channel.<br>
       * `1`: All channel members. Allow all channel members to add external users to the channel.<br>
       * `2`: By members in your organization. Allow only members in your organization to add external users to the channel.
       */
      allow_to_add_external_users?: Channel.allow_to_add_external_users;
      /**
       * New members to the channel can see previous messages and files posted in the channel.
       */
      new_members_can_see_previous_messages_files?: boolean;
      /**
       * Permissions for members to post to the channel. The value can be one of the following:<br>
       * `1`: Everyone. All members can post to the channel.<br>
       * `2`: Admin only. Only the admin can post to the channel<br>
       * `3`: Admin and specific members. Only the admin and specified members can post to the channel. <br>
       *
       */
      posting_permissions?: Channel.posting_permissions;
    };
    /**
     * The ID of the channel.
     */
    id?: string;
    /**
     * The [Jabber Identity](https://en.wikipedia.org/wiki/JID_(Jabber)) used to access the account.
     */
    jid?: string;
    /**
     * The channel name.
     */
    name?: string;
    /**
     * The channel's type:
     * * `0` — An unknown channel type.
     * * `1` — A private channel. Members must be invited to join this channel.
     * * `2` — A private channel with members that belong to a Zoom account. All members of this channel are from the same organization and must be invited to join.
     * * `3` — A public channel. Anyone can search for and join this channel.
     * * `4` — An instant channel. This type of channel is created by adding members to a new chat.
     * * `5` — A public channel. Anyone can join this channel and invite members from other Zoom accounts.
     */
    type?: Channel.type;
  };
};

export namespace Channel {
  /**
   * Allow members to add external users to the channel. The value can be one of the following:<br>
   * `0`: Disable. Do not allow channel members to add external users to the channel.<br>
   * `1`: All channel members. Allow all channel members to add external users to the channel.<br>
   * `2`: By members in your organization. Allow only members in your organization to add external users to the channel.
   */
  export enum allow_to_add_external_users {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
  }

  /**
   * Permissions for members to post to the channel. The value can be one of the following:<br>
   * `1`: Everyone. All members can post to the channel.<br>
   * `2`: Admin only. Only the admin can post to the channel<br>
   * `3`: Admin and specific members. Only the admin and specified members can post to the channel. <br>
   *
   */
  export enum posting_permissions {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }

  /**
   * The channel's type:
   * * `0` — An unknown channel type.
   * * `1` — A private channel. Members must be invited to join this channel.
   * * `2` — A private channel with members that belong to a Zoom account. All members of this channel are from the same organization and must be invited to join.
   * * `3` — A public channel. Anyone can search for and join this channel.
   * * `4` — An instant channel. This type of channel is created by adding members to a new chat.
   * * `5` — A public channel. Anyone can join this channel and invite members from other Zoom accounts.
   */
  export enum type {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
  }
}
