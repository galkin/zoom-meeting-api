/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AccountsService } from './services/AccountsService';
import { ArchivingService } from './services/ArchivingService';
import { CloudRecordingService } from './services/CloudRecordingService';
import { ContactGroupsService } from './services/ContactGroupsService';
import { DashboardsService } from './services/DashboardsService';
import { DeprecatedApiEndpointsService } from './services/DeprecatedApiEndpointsService';
import { DevicesService } from './services/DevicesService';
import { GroupsService } from './services/GroupsService';
import { ImGroupsService } from './services/ImGroupsService';
import { MeetingsService } from './services/MeetingsService';
import { PacService } from './services/PacService';
import { ReportsService } from './services/ReportsService';
import { RolesService } from './services/RolesService';
import { SipPhoneService } from './services/SipPhoneService';
import { TrackingFieldService } from './services/TrackingFieldService';
import { TspService } from './services/TspService';
import { UsersService } from './services/UsersService';
import { WebinarsService } from './services/WebinarsService';
import { WorkspacesService } from './services/WorkspacesService';
import { ZoomRoomsService } from './services/ZoomRoomsService';
import { ZoomRoomsAccountService } from './services/ZoomRoomsAccountService';
import { ZoomRoomsCalendarService } from './services/ZoomRoomsCalendarService';
import { ZoomRoomsDevicesService } from './services/ZoomRoomsDevicesService';
import { ZoomRoomsLocationService } from './services/ZoomRoomsLocationService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class Client {
  public readonly accounts: AccountsService;
  public readonly archiving: ArchivingService;
  public readonly cloudRecording: CloudRecordingService;
  public readonly contactGroups: ContactGroupsService;
  public readonly dashboards: DashboardsService;
  public readonly deprecatedApiEndpoints: DeprecatedApiEndpointsService;
  public readonly devices: DevicesService;
  public readonly groups: GroupsService;
  public readonly imGroups: ImGroupsService;
  public readonly meetings: MeetingsService;
  public readonly pac: PacService;
  public readonly reports: ReportsService;
  public readonly roles: RolesService;
  public readonly sipPhone: SipPhoneService;
  public readonly trackingField: TrackingFieldService;
  public readonly tsp: TspService;
  public readonly users: UsersService;
  public readonly webinars: WebinarsService;
  public readonly workspaces: WorkspacesService;
  public readonly zoomRooms: ZoomRoomsService;
  public readonly zoomRoomsAccount: ZoomRoomsAccountService;
  public readonly zoomRoomsCalendar: ZoomRoomsCalendarService;
  public readonly zoomRoomsDevices: ZoomRoomsDevicesService;
  public readonly zoomRoomsLocation: ZoomRoomsLocationService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    // @ts-ignore
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'https://api.zoom.us/v2',
      VERSION: config?.VERSION ?? '2.0.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.accounts = new AccountsService(this.request);
    this.archiving = new ArchivingService(this.request);
    this.cloudRecording = new CloudRecordingService(this.request);
    this.contactGroups = new ContactGroupsService(this.request);
    this.dashboards = new DashboardsService(this.request);
    this.deprecatedApiEndpoints = new DeprecatedApiEndpointsService(this.request);
    this.devices = new DevicesService(this.request);
    this.groups = new GroupsService(this.request);
    this.imGroups = new ImGroupsService(this.request);
    this.meetings = new MeetingsService(this.request);
    this.pac = new PacService(this.request);
    this.reports = new ReportsService(this.request);
    this.roles = new RolesService(this.request);
    this.sipPhone = new SipPhoneService(this.request);
    this.trackingField = new TrackingFieldService(this.request);
    this.tsp = new TspService(this.request);
    this.users = new UsersService(this.request);
    this.webinars = new WebinarsService(this.request);
    this.workspaces = new WorkspacesService(this.request);
    this.zoomRooms = new ZoomRoomsService(this.request);
    this.zoomRoomsAccount = new ZoomRoomsAccountService(this.request);
    this.zoomRoomsCalendar = new ZoomRoomsCalendarService(this.request);
    this.zoomRoomsDevices = new ZoomRoomsDevicesService(this.request);
    this.zoomRoomsLocation = new ZoomRoomsLocationService(this.request);
  }
}
