/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Account Settings: Recording.
 */
export type AccountSettingsRecording = {
  /**
   * Cloud recordings are only accessible to account members. People outside of your organization cannot open links that provide access to cloud recordings.
   */
  account_user_access_recording?: boolean;
  /**
   * Allow recovery of deleted cloud recordings from trash.
   * If the value of this field is set to `true`, deleted cloud recordings will be kept in trash for 30 days after deletion and can be recovered within that period.
   */
  allow_recovery_deleted_cloud_recordings?: boolean;
  /**
   * [Archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) settings. This setting can only be used if you have been granted with archiving solution access by the Zoom support team.
   */
  archive?: {
    /**
     * Enable the archiving feature.
     */
    enable?: boolean;
    settings?: {
      /**
       * Include in-meeting and/or in-webinar audio in the archive.
       */
      audio_file?: boolean;
      /**
       * Include closed caption or transcript in the archive.
       */
      cc_transcript_file?: boolean;
      /**
       * Include in-meeting chat in the archive.
       */
      chat_file?: boolean;
      /**
       * Include user email in in-meeting chat file.
       */
      chat_with_sender_email?: boolean;
      /**
       * Include in-meeting and/or in-webinar video in the archive.
       */
      video_file?: boolean;
      /**
       * Include direct message in in-meeting chat file.
       */
      chat_with_direct_message?: boolean;
      /**
       * The retention period for archiving content, in days.
       */
      archive_retention?: AccountSettingsRecording.archive_retention;
      /**
       * Perform the action when meetings or webinars cannot be archived.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
       */
      action_when_archive_failed?: AccountSettingsRecording.action_when_archive_failed;
      /**
       * Show notification when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
       */
      notification_when_archiving_starts?: AccountSettingsRecording.notification_when_archiving_starts;
      /**
       * Play voice prompt when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
       */
      play_voice_prompt_when_archiving_starts?: AccountSettingsRecording.play_voice_prompt_when_archiving_starts;
    };
    /**
     * Archive types:
     *
     * * `1`: Only meetings are archived.<br>
     * * `2`: Only webinars are archived.<br>
     * * `3`: Both meetings and webinars are archived.
     */
    type?: AccountSettingsRecording.type;
  };
  /**
   * Allow Zoom to permanently delete recordings automatically after a specified number of days.
   */
  auto_delete_cmr?: boolean;
  /**
   * When the `auto_delete_cmr` value is `true`, this value is the number of days before the auto-deletion of cloud recordings:
   * * `30` — 30 days.
   * * `60` — 60 days.
   * * `90` — 90 days.
   * * `120` — 120 days.
   */
  auto_delete_cmr_days?: AccountSettingsRecording.auto_delete_cmr_days;
  /**
   * The account's [**Record active speaker, gallery view and shared screen separately**](https://support.zoom.us/hc/en-us/articles/360060316092-Changing-basic-and-advanced-cloud-recording-settings#h_01F4CYJTCTXNS2MXH00W9EFG6R) settings.
   */
  record_files_separately?: {
    /**
     * Whether to record the active speaker only.
     */
    active_speaker?: boolean;
    /**
     * Whether to record the gallery view only.
     */
    gallery_view?: boolean;
    /**
     * Whether to record the shared screen only.
     */
    shared_screen?: boolean;
  };
  /**
   * Whether to display participants' names in the recording.
   */
  display_participant_name?: boolean;
  /**
   * Whether to record thumbnails of the presenter when they are sharing their screen.
   */
  recording_thumbnails?: boolean;
  /**
   * Whether to optimize recordings for a 3rd party video editor. This may increase the file size and the time it takes to generate recording files.
   */
  optimize_recording_for_3rd_party_video_editor?: boolean;
  /**
   * Whether to enable the [recording highlights](https://support.zoom.us/hc/en-us/articles/360060802432) feature.
   * @deprecated
   */
  recording_highlight?: boolean;
  /**
   * Whether to save panelist chat to the recording. This setting saves messages sent by panelists during a webinar to either all panelists or all panelists and attendees to the recording.
   */
  save_panelist_chat?: boolean;
  /**
   * Whether to save poll results shared during the meeting or webinar. This also includes poll results shared during the meeting or webinar.
   */
  save_poll_results?: boolean;
  /**
   * Whether to save [closed captions](https://support.zoom.us/hc/en-us/articles/207279736) as a VTT (Video Track Text) file.
   */
  save_close_caption?: boolean;
  /**
   * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
   */
  auto_recording?: AccountSettingsRecording.auto_recording;
  /**
   * Allow hosts to record and save the meeting in the cloud.
   */
  cloud_recording?: boolean;
  /**
   * Cloud recording downloads.
   */
  cloud_recording_download?: boolean;
  /**
   * Only the host can download cloud recordings.
   */
  cloud_recording_download_host?: boolean;
  /**
   * If the value of this field is set to `true`, hosts will be able to delete the recordings. If this option is set to `false`, the recordings cannot be deleted by the host and only admin can delete them.
   *
   */
  host_delete_cloud_recording?: boolean;
  /**
   * Setting to allow cloud recording access only from specific IP address ranges.
   *
   */
  ip_address_access_control?: {
    /**
     * If set to `true`, the cloud recordings of this account can only be accessed by the IP addresses defined in the `ip_addresses_or_ranges` property.
     *
     *
     */
    enable?: boolean;
    /**
     * IP addresses or ranges that have access to the cloud recordings. Separate multiple IP ranges with comma. Use n.n.n.n, n.n.n.n/n or n.n.n.n - n.n.n.n syntax where n is a number.
     *
     * Example: `46.33.24.184, 48.99.100.2/25` or `200.181.108.17 - 220.181.108.157`
     *
     *
     */
    ip_addresses_or_ranges?: string;
  };
  /**
   * Allow hosts and participants to record the meeting using a local file.
   */
  local_recording?: boolean;
  /**
   * If set to `true`, meeting hosts cannot view their meeting cloud recordings. Only the admins who have recording management privilege can access them.
   *
   */
  prevent_host_access_recording?: boolean;
  /**
   * Whether to record one audio file for all participants.
   */
  record_audio_file?: boolean;
  /**
   * Record the gallery view with a shared screen.
   */
  record_gallery_view?: boolean;
  /**
   * Record the active speaker with a shared screen.
   */
  record_speaker_view?: boolean;
  /**
   * Automatically transcribe the audio of the meeting or webinar to the cloud.
   */
  recording_audio_transcript?: boolean;
  /**
   * Show a disclaimer to participants before a recording starts
   *
   */
  recording_disclaimer?: boolean;
  /**
   * By selecting this option, your recording will have meeting smart chapters, and next steps. You are directing Zoom to access, process, and use your account's recording data for the purpose of analysis and insights.
   */
  smart_recording?: {
    /**
     * By selecting this option, meeting details in the audio transcript will be highlighted. Hosts can modify highlighted sections and generate a video summary (highlighted sections may have a 3-second offset) based on these sections. The summary is for informational purposes only and may not be complete.
     */
    create_recording_highlights?: boolean;
    /**
     * By selecting this option, your recording will have chapters with overview. Hosts can edit the chapters.
     */
    create_smart_chapters?: boolean;
    /**
     * By selecting this option, there will be a summary of actions to take after the recorded meeting.
     */
    create_next_steps?: boolean;
  };
  /**
   * This object represents the minimum password requirements set for recordings via Account Recording Settings.
   */
  recording_password_requirement?: {
    /**
     * Indicates whether or not password must contain at least one alphabetical letter (a, b, c..).
     */
    have_letter?: boolean;
    /**
     * Indicates whether or not password must contain at least one number(1, 2, 3..).
     */
    have_number?: boolean;
    /**
     * Indicates whether or not password must contain at least one special character(!, @, #..).
     */
    have_special_character?: boolean;
    /**
     * Minimum required length for the password.
     */
    length?: number;
    /**
     * Indicates whether or not password must contain only numeric characters.
     */
    only_allow_numeric?: boolean;
  };
  /**
   * Require a passcode to access existing cloud recordings.
   */
  required_password_for_existing_cloud_recordings?: boolean;
  /**
   * Whether to require a passcode to share cloud recordings.
   */
  required_password_for_shared_cloud_recordings?: boolean;
  /**
   * Save the chat text from the meeting.
   */
  save_chat_text?: boolean;
  /**
   * Add a timestamp to the recording.
   */
  show_timestamp?: boolean;
};

export namespace AccountSettingsRecording {
  /**
   * The retention period for archiving content, in days.
   */
  export enum archive_retention {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
    '_8' = 8,
    '_9' = 9,
    '_10' = 10,
    '_11' = 11,
    '_12' = 12,
    '_13' = 13,
    '_14' = 14,
    '_15' = 15,
    '_16' = 16,
    '_17' = 17,
    '_18' = 18,
    '_19' = 19,
    '_20' = 20,
    '_21' = 21,
    '_22' = 22,
    '_23' = 23,
    '_24' = 24,
    '_25' = 25,
    '_26' = 26,
    '_27' = 27,
    '_28' = 28,
    '_29' = 29,
    '_30' = 30,
  }

  /**
   * Perform the action when meetings or webinars cannot be archived.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
   */
  export enum action_when_archive_failed {
    '_1' = 1,
    '_2' = 2,
  }

  /**
   * Show notification when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
   */
  export enum notification_when_archiving_starts {
    PARTICIPANTS = 'participants',
    GUEST = 'guest',
  }

  /**
   * Play voice prompt when video or audio archiving starts.<br>`1` - Participants can stay in the meeting and will receive a notification.<br>`2` - Nobody can join or stay in the meeting.
   */
  export enum play_voice_prompt_when_archiving_starts {
    PARTICIPANTS = 'participants',
    GUEST = 'guest',
    NONE = 'none',
  }

  /**
   * Archive types:
   *
   * * `1`: Only meetings are archived.<br>
   * * `2`: Only webinars are archived.<br>
   * * `3`: Both meetings and webinars are archived.
   */
  export enum type {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }

  /**
   * When the `auto_delete_cmr` value is `true`, this value is the number of days before the auto-deletion of cloud recordings:
   * * `30` — 30 days.
   * * `60` — 60 days.
   * * `90` — 90 days.
   * * `120` — 120 days.
   */
  export enum auto_delete_cmr_days {
    '_30' = 30,
    '_60' = 60,
    '_90' = 90,
    '_120' = 120,
  }

  /**
   * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
   */
  export enum auto_recording {
    LOCAL = 'local',
    CLOUD = 'cloud',
    NONE = 'none',
  }
}
