import Resource from './resource';
import RequiredActionProviderRepresentation from '../defs/requiredActionProviderRepresentation';
import { KeycloakAdminClient } from '../client';
export declare class AuthenticationManagement extends Resource {
    registerRequiredAction: (payload?: Record<string, any>) => Promise<any>;
    getRequiredActions: (payload?: void & {}) => Promise<any>;
    getRequiredActionForAlias: (payload?: {
        alias: string;
    }) => Promise<any>;
    updateRequiredAction: (query: {
        alias: string;
    }, payload: RequiredActionProviderRepresentation) => Promise<void>;
    deleteRequiredAction: (payload?: {
        alias: string;
    }) => Promise<void>;
    lowerRequiredActionPriority: (payload?: {
        alias: string;
    }) => Promise<any>;
    raiseRequiredActionPriority: (payload?: {
        alias: string;
    }) => Promise<any>;
    getUnregisteredRequiredActions: (payload?: void & {}) => Promise<any>;
    constructor(client: KeycloakAdminClient);
}
