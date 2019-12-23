import Resource from './resource';
import {KeycloakAdminClient} from '../client';
import {PermissionTicketRepresentation} from "../defs/PermissionTicketRepresentation";

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

export class Permissions extends Resource<{realm?: string}> {

    public find = this.makeRequest<PermissionQuery, PermissionTicketRepresentation[]>({
        method: 'GET',
    });

    constructor(client: KeycloakAdminClient) {
        super(client, {
            path: '/realms/{realm}/authz/protection/permission/ticket',
            getUrlParams: () => ({
                realm: client.realmName,
            }),
            getBaseUrl: () => client.baseUrl,
        });
    }
}
