export interface PermissionTicketRepresentation {
    id?: string;
    owner?: string;
    resource?: string;
    scope?: string;
    granted?: string;
    scopeName?: string;
    resourceName?: string;
    requester?: string;
    ownerName?: string;
    requesterName?: string;
}
