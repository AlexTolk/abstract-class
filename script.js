var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Resource = /** @class */ (function () {
    function Resource(data) {
        this.data = data;
    }
    Resource.prototype.get = function () {
        return this.data;
    };
    Resource.prototype.getOne = function (key, value) {
        return this.data.find(function (item) { return item[key] === value; });
    };
    Resource.prototype.add = function (newObj) {
        this.data.push(newObj);
        return this.data;
    };
    Resource.prototype.update = function (key, value, partialData) {
        var index = this.data.findIndex(function (item) { return item[key] === value; });
        if (index === -1)
            return undefined;
        this.data[index] = __assign(__assign({}, this.data[index]), partialData);
        return this.data[index];
    };
    Resource.prototype.delete = function (key, value) {
        var index = this.data.findIndex(function (item) { return item[key] === value; });
        if (index === -1)
            return undefined;
        var deleted = this.data.splice(index, 1)[0];
        return deleted;
    };
    return Resource;
}());
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel(data) {
        return _super.call(this, data) || this;
    }
    return UserModel;
}(Resource));
var users = new UserModel([
    { id: 1, name: 'Alice', phone: '1234', email: 'alice@example.com', address: 'Wonderland' }
]);
console.log(users.get());
console.log(users.add({ id: 2, name: 'Bob', phone: '5678', email: 'bob@example.com', address: 'Earth' }));
console.log(users.getOne('id', 1));
console.log(users.update('id', 1, { name: 'Alice Updated' }));
console.log(users.delete('id', 2));
console.log(users.get());
