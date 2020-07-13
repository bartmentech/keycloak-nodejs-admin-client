import Resource from './resource';
import {KeycloakAdminClient} from '../client';
import {PermissionTicketRepresentation} from '../defs/permissionTicketRepresentation';

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
    resourceId: string,
    scopes: string[],
    resourceServerId?: string,
}

export interface PermissionResponse {
    ticket: string
}

export class Permissions extends Resource<{}> {

    public find = this.makeRequest<PermissionQuery, PermissionTicketRepresentation[]>({
        method: 'GET',
        path: '/ticket',
    });

    public request = this.makeRequest<PermissionRequest[], PermissionResponse>({
        method: 'POST',
        keyTransform: {
            resourceId: 'resource_id',
            scopes: 'resource_scopes',
            resourceServerId: 'resource_server_id',
        }
    });

    constructor(client: KeycloakAdminClient) {
        super(client, {
            path: '/realms/{realm}/authz/protection/permission',
            getUrlParams: () => ({
                realm: client.realmName,
            }),
            getBaseUrl: () => client.baseUrl,
        });
    }
}
