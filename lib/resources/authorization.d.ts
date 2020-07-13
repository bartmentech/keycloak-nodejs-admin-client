import Resource from './resource';
import { KeycloakAdminClient } from '../client';
import { TokenResponse } from '../utils/auth';
export interface AuthorizationRequest {
    grant_type: 'urn:ietf:params:oauth:grant-type:uma-ticket';
    ticket?: string;
    claim_token?: string;
    claim_token_format?: string;
    rpt?: string;
    permission?: string;
    audience?: string;
    response_include_resource_name?: boolean;
    response_permissions_limit?: number;
    submit_request?: boolean;
    response_mode?: 'decision' | 'permissions';
}
export interface PermissionResponseMode {
    rsid: string;
    scopes: string[];
    rsname: string;
}
export interface DecisionResponseMode {
    result: boolean;
}
export declare class Authorization extends Resource<{
    accessToken: string;
}> {
    authorize: (payload?: AuthorizationRequest & {
        accessToken: string;
    }) => Promise<TokenResponse | DecisionResponseMode | PermissionResponseMode[]>;
    constructor(client: KeycloakAdminClient);
}
