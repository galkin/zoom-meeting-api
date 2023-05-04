/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserSettingsRecording = {
  /**
   * Ask host to confirm the disclaimer.
   */
  ask_host_to_confirm_disclaimer?: boolean;
  /**
   * This field can be used if `recording_disclaimer` is set to true. This field indicates whether or not you would like to ask participants for consent when a recording starts. The value can be one of the following:<br>
   * * `true`: Ask participants for consent when a recording starts. <br>
   * * `false`: Do not ask participants for consent when a recording starts.
   */
  ask_participants_to_consent_disclaimer?: boolean;
  /**
   * Auto delete cloud recordings.
   */
  auto_delete_cmr?: boolean;
  /**
   * When the `auto_delete_cmr` value is `true`, this value is the number of days before the auto-deletion of cloud recordings:
   * * `30` — 30 days.
   * * `60` — 60 days.
   * * `90` — 90 days.
   * * `120` — 120 days.
   */
  auto_delete_cmr_days?: UserSettingsRecording.auto_delete_cmr_days;
  /**
   * The account's [**Record active speaker, gallery view and shared screen separately**](https://support.zoom.us/hc/en-us/articles/360060316092-Changing-basic-and-advanced-cloud-recording-settings#h_01F4CYJTCTXNS2MXH00W9EFG6R) settings.
   */
  record_files_separately?: {
    /**
     * Record the active speaker only.
     */
    active_speaker?: boolean;
    /**
     * Record the gallery view only.
     */
    gallery_view?: boolean;
    /**
     * Record the shared screen only.
     */
    shared_screen?: boolean;
  };
  /**
   * Display participants' names in the recording.
   */
  display_participant_name?: boolean;
  /**
   * Record thumbnails of the presenter when they are sharing their screen.
   */
  recording_thumbnails?: boolean;
  /**
   * Optimize recordings for a 3rd party video editor. This may increase the file size and the time it takes to generate recording files.
   */
  optimize_recording_for_3rd_party_video_editor?: boolean;
  /**
   * Enable the [recording highlights](https://support.zoom.us/hc/en-us/articles/360060802432) feature.
   * @deprecated
   */
  recording_highlight?: boolean;
  /**
   * Save panelist chat to the recording. This setting saves messages sent by panelists during a webinar to either all panelists or all panelists and attendees to the recording.
   */
  save_panelist_chat?: boolean;
  /**
   * Save poll results shared during the meeting or webinar. This also includes poll results shared during the meeting or webinar.
   */
  save_poll_results?: boolean;
  /**
   * Save [closed captions](https://support.zoom.us/hc/en-us/articles/207279736) as a VTT (Video Track Text) file.
   */
  save_close_caption?: boolean;
  /**
   * Automatic recording:<br>`local` - Record on local.<br>`cloud` - Record on cloud.<br>`none` - Disabled.
   */
  auto_recording?: UserSettingsRecording.auto_recording;
  /**
   * Cloud recording.
   */
  cloud_recording?: boolean;
  /**
   * Host can pause or stop the auto recording in the cloud.
   */
  host_pause_stop_recording?: boolean;
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
   * Local recording.
   */
  local_recording?: boolean;
  /**
   * Record one audio file for all participants.
   */
  record_audio_file?: boolean;
  /**
   * Record the gallery view.
   */
  record_gallery_view?: boolean;
  /**
   * Record the active speaker view.
   */
  record_speaker_view?: boolean;
  /**
   * Audio transcript.
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
   * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
   */
  recording_password_requirement?: {
    /**
     * Passcode must contain at least one alphabetical letter (a, b, c..).
     */
    have_letter?: boolean;
    /**
     * Passcode must contain at least one number(1, 2, 3..).
     */
    have_number?: boolean;
    /**
     * Passcode must contain at least one special character(!, @, #..).
     */
    have_special_character?: boolean;
    /**
     * Minimum required length for the passcode.
     */
    length?: number;
    /**
     * Passcode must contain only numeric characters.
     */
    only_allow_numeric?: boolean;
  };
  /**
   * Save chat text from the meeting.
   */
  save_chat_text?: boolean;
  /**
   * Show timestamp on video.
   */
  show_timestamp?: boolean;
};

export namespace UserSettingsRecording {
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
   * Automatic recording:<br>`local` - Record on local.<br>`cloud` - Record on cloud.<br>`none` - Disabled.
   */
  export enum auto_recording {
    LOCAL = 'local',
    CLOUD = 'cloud',
    NONE = 'none',
  }
}
