import { Credentials } from './utils/auth';
import { Users } from './resources/users';
import { Groups } from './resources/groups';
import { Roles } from './resources/roles';
import { Clients } from './resources/clients';
import { Realms } from './resources/realms';
import { Permissions } from './resources/permission';
import { ClientScopes } from './resources/clientScopes';
import { IdentityProviders } from './resources/identityProviders';
import { Components } from './resources/components';
import { AuthenticationManagement } from './resources/authenticationManagement';
import { AxiosRequestConfig } from 'axios';
import { Authorization } from './resources/authorization';
import { ProtectedResource } from './resources/protectedResource';
export interface ConnectionConfig {
    baseUrl?: string;
    realmName?: string;
    requestConfig?: AxiosRequestConfig;
}
export declare class KeycloakAdminClient {
    users: Users;
    groups: Groups;
    roles: Roles;
    clients: Clients;
    realms: Realms;
    clientScopes: ClientScopes;
    identityProviders: IdentityProviders;
    components: Components;
    permissions: Permissions;
    authorization: Authorization;
    protectedResource: ProtectedResource;
    authenticationManagement: AuthenticationManagement;
    baseUrl: string;
    realmName: string;
    accessToken: string;
    refreshToken: string;
    private requestConfig?;
    constructor(connectionConfig?: ConnectionConfig);
    auth(credentials: Credentials): Promise<void>;
    setAccessToken(token: string): void;
    getAccessToken(): string;
    getRequestConfig(): AxiosRequestConfig;
    setConfig(connectionConfig: ConnectionConfig): void;
}
