import Resource from './resource';
import {KeycloakAdminClient} from '../client';


export interface AuthorizationRequest {
    /**
     * Must be urn:ietf:params:oauth:grant-type:uma-ticket.
     */
    grant_type: string,

    /**
     * The most recent permission ticket received by the client as part of the UMA authorization process.
     */
    ticket?: string,

    /**
     * A string representing additional claims that should be considered by the server when evaluating permissions for
     * the resource(s) and scope(s) being requested. This parameter allows clients to push claims to Keycloak.
     * For more details about all supported token formats see claim_token_format parameter.
     */
    claim_token?: string,

    /**
     * A string indicating the format of the token specified in the claim_token parameter. Keycloak supports two token
     * formats: urn:ietf:params:oauth:token-type:jwt and https://openid.net/specs/openid-connect-core-1_0.html#IDToken.
     * The urn:ietf:params:oauth:token-type:jwt format indicates that the claim_token parameter references an access
     * token. The https://openid.net/specs/openid-connect-core-1_0.html#IDToken indicates that the claim_token parameter
     * references an OpenID Connect ID Token.
     */
    claim_token_format?: string,

    /**
     * A previously issued RPT which permissions should also be evaluated and added in a new one. This parameter allows
     * clients in possession of an RPT to perform incremental authorization where permissions are added on demand.
     */
    rpt?: string,

    /**
     * A string representing a set of one or more resources and scopes the client is seeking access. This parameter can
     * be defined multiple times in order to request permission for multiple resource and scopes. This parameter is an
     * extension to urn:ietf:params:oauth:grant-type:uma-ticket grant type in order to allow clients to send authorization
     * requests without a permission ticket. The format of the string must be: RESOURCE_ID#SCOPE_ID. For instance:
     * Resource A#Scope A, Resource A#Scope A, Scope B, Scope C, Resource A, #Scope A.
     */
    permission?: string,

    /**
     * The client identifier of the resource server to which the client is seeking access. This parameter is mandatory
     * in case the permission parameter is defined. It serves as a hint to Keycloak to indicate the context in which
     * permissions should be evaluated.
     */
    audience?: string

    /**
     * A boolean value indicating to the server whether resource names should be included in the RPT’s permissions.
     * If false, only the resource identifier is included.
     */
    response_include_resource_name?: boolean

    /**
     * An integer N that defines a limit for the amount of permissions an RPT can have. When used together with rpt
     * parameter, only the last N requested permissions will be kept in the RPT.
     */
    response_permissions_limit?: number

    /**
     * A boolean value indicating whether the server should create permission requests to the resources and scopes
     * referenced by a permission ticket. This parameter only have effect if used together with the ticket parameter
     * as part of a UMA authorization process.
     */
    submit_request?: boolean

    /**
     * A string value indicating how the server should respond to authorization requests. This parameter is specially
     * useful when you are mainly interested in either the overall decision or the permissions granted by the server,
     * instead of a standard OAuth2 response. Possible values are:
     *
     * decision
     *
     * Indicates that responses from the server should only represent the overall decision by returning a JSON with
     * the a DecisionResponseMode.
     *
     * If the authorization request does not map to any permission, a 403 HTTP status code is returned instead.
     *
     * permissions
     *
     * Indicates that responses from the server should contain any permission granted by the server by returning a
     * JSON with PermissionResponseMode
     *
     * If the authorization request does not map to any permission, a 403 HTTP status code is returned instead.
     */
    response_mode?: string
}

export interface PermissionResponseMode {
    rsid: string,
    scopes: string[]
}

export interface DecisionResponseMode {
    result: boolean
}

export class Authorization extends Resource<{ accessToken: string }> {

    public authorize = this.makeRequest<AuthorizationRequest, PermissionResponseMode|DecisionResponseMode>({
        method: 'POST',
        payloadFormat: 'form'
    });

    constructor(client: KeycloakAdminClient) {
        super(client, {
            path: '/realms/{realm}/protocol/openid-connect/token',
            getUrlParams: () => ({
                realm: client.realmName,
            }),
            getBaseUrl: () => client.baseUrl,
        });
    }
}
