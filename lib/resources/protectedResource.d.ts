import Resource from './resource';
import { KeycloakAdminClient } from '../client';
export interface ResourceQuery {
    id?: string;
    name?: string;
    uri?: string;
    owner?: string;
    type?: string;
    scope?: string;
    matchingUri?: boolean;
    deep?: boolean;
    firstResult?: number;
    maxResult?: number;
}
export interface ResourceOwner {
    id: string;
    name: string;
}
export interface ProtectedResource {
    id: string;
    uris: string[];
    type: string;
    scopes: string[];
    icon_uri: string;
    owner: ResourceOwner;
    ownerManagedAccess: boolean;
    displayName: string;
    attributes?: any;
}
export declare class ProtectedResource extends Resource<{}> {
    find: (payload?: ResourceQuery) => Promise<string[] | ProtectedResource[]>;
    constructor(client: KeycloakAdminClient);
}
