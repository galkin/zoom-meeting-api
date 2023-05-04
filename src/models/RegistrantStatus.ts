/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegistrantStatus = {
  /**
   * Registrant Status:<br>`approve` - Approve registrant.<br>`cancel` - Cancel previously approved registrant's registration.<br>`deny` - Deny registrant.
   */
  action: RegistrantStatus.action;
  /**
   * List of registrants.
   */
  registrants?: Array<{
    email?: string;
    id?: string;
  }>;
};

export namespace RegistrantStatus {
  /**
   * Registrant Status:<br>`approve` - Approve registrant.<br>`cancel` - Cancel previously approved registrant's registration.<br>`deny` - Deny registrant.
   */
  export enum action {
    APPROVE = 'approve',
    CANCEL = 'cancel',
    DENY = 'deny',
  }
}
