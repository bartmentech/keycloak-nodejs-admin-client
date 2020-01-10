import { KeycloakAdminClient } from '../client';
export interface RequestArgs {
    method: string;
    path?: string;
    urlParamKeys?: string[];
    queryParamKeys?: string[];
    keyTransform?: Record<string, string>;
    catchNotFound?: boolean;
    payloadKey?: string;
    returnResourceIdInLocationHeader?: {
        field: string;
    };
    payloadFormat?: string;
}
export declare class Agent {
    private client;
    private basePath;
    private getBaseParams?;
    private getBaseUrl?;
    private requestConfig?;
    constructor({ client, path, getUrlParams, getBaseUrl, }: {
        client: KeycloakAdminClient;
        path?: string;
        getUrlParams?: () => Record<string, any>;
        getBaseUrl?: () => string;
    });
    request({ method, path, urlParamKeys, queryParamKeys, catchNotFound, keyTransform, payloadKey, returnResourceIdInLocationHeader, payloadFormat, }: RequestArgs): (payload?: any) => Promise<any>;
    updateRequest({ method, path, urlParamKeys, queryParamKeys, catchNotFound, keyTransform, payloadKey, returnResourceIdInLocationHeader, payloadFormat, }: RequestArgs): (query?: any, payload?: any) => Promise<any>;
    private requestWithParams;
    private transformKeys;
    private transformKey;
}
