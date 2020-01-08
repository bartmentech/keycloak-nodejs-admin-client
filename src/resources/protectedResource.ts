import Resource from './resource';
import {KeycloakAdminClient} from '../client';

export interface ResourceQuery {
    id?: string;
    name?: string;
    uri?: string;
    owner?: string;
    type?: boolean;
    scope?: boolean;
    matchingUri?: boolean;
    /**
     * If true, the whole ProtectedResource representation will be returned, if false
     * only the resource ID.
     */
    deep?: boolean;
    firstResult?: number;
    maxResult?: number;
}

export interface ResourceOwner {
    id: string,
    name: string
}

export interface ProtectedResource {
    id: string,
    uris: string[],
    type: string,
    scopes: string[],
    icon_uri: string,
    owner: ResourceOwner,
    ownerManagedAccess: boolean,
    displayName: string
    attributes?: any,
}

export class ProtectedResource extends Resource<{}> {

    public find = this.makeRequest<ResourceQuery, ProtectedResource[]|string[]>({
        method: 'GET',
        keyTransform: {
            id: '_id',
            firstResult: 'first',
            maxResult: 'max'
        }
    });

    constructor(client: KeycloakAdminClient) {
        super(client, {
            path: '/realms/{realm}/authz/protection/resource_set',
            getUrlParams: () => ({
                realm: client.realmName,
            }),
            getBaseUrl: () => client.baseUrl,
        });
    }
}
