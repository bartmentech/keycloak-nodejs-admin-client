import Resource from './resource';
import { KeycloakAdminClient } from '../client';
import { PermissionTicketRepresentation } from '../defs/permissionTicketRepresentation';
export interface PermissionQuery {
    resourceId?: string;
    scopeId?: string;
    owner?: string;
    requester?: string;
    granted?: boolean;
    returnNames?: boolean;
    firstResult?: number;
    maxResult?: number;
}
export interface PermissionRequest {
    resourceId: string;
    scopes: string[];
    resourceServerId?: string;
}
export interface PermissionResponse {
    ticket: string;
}
export declare class Permissions extends Resource<{}> {
    find: (payload?: PermissionQuery) => Promise<PermissionTicketRepresentation[]>;
    create: (payload?: PermissionRequest[]) => Promise<PermissionResponse>;
    createTicket: (payload?: PermissionTicketRepresentation) => Promise<PermissionTicketRepresentation>;
    constructor(client: KeycloakAdminClient);
}
