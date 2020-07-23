"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var resource_1 = __importDefault(require("./resource"));
var Permissions = (function (_super) {
    __extends(Permissions, _super);
    function Permissions(client) {
        var _this = _super.call(this, client, {
            path: '/realms/{realm}/authz/protection/permission',
            getUrlParams: function () { return ({
                realm: client.realmName
            }); },
            getBaseUrl: function () { return client.baseUrl; }
        }) || this;
        _this.find = _this.makeRequest({
            method: 'GET',
            path: '/ticket'
        });
        _this.create = _this.makeRequest({
            method: 'POST',
            keyTransform: {
                resourceId: 'resource_id',
                scopes: 'resource_scopes',
                resourceServerId: 'resource_server_id'
            }
        });
        _this.createTicket = _this.makeRequest({
            method: 'POST',
            path: '/ticket'
        });
        return _this;
    }
    return Permissions;
}(resource_1["default"]));
exports.Permissions = Permissions;
//# sourceMappingURL=permission.js.map