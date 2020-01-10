import Resource from './resource';
import { KeycloakAdminClient } from '../client';
export interface AuthorizationRequest {
    grant_type: string;
    ticket?: string;
    claim_token?: string;
    claim_token_format?: string;
    rpt?: string;
    permission?: string;
    audience?: string;
    response_include_resource_name?: boolean;
    response_permissions_limit?: number;
    submit_request?: boolean;
    response_mode?: string;
}
export interface PermissionResponseMode {
    rsid: string;
    scopes: string[];
}
export interface DecisionResponseMode {
    result: boolean;
}
export declare class Authorization extends Resource<{
    accessToken: string;
}> {
    authorize: (payload?: AuthorizationRequest & {
        accessToken: string;
    }) => Promise<PermissionResponseMode | DecisionResponseMode>;
    constructor(client: KeycloakAdminClient);
}
