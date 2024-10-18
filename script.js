"use strict";
class Resource {
    constructor(data) {
        this.data = data;
    }
    get() {
        return this.data;
    }
    getOne(key, value) {
        return this.data.find(item => item[key] === value);
    }
    add(newObj) {
        this.data.push(newObj);
        return this.data;
    }
    update(key, value, partialData) {
        const index = this.data.findIndex(item => item[key] === value);
        if (index === -1)
            return undefined;
        this.data[index] = Object.assign(Object.assign({}, this.data[index]), partialData);
        return this.data[index];
    }
    delete(key, value) {
        const index = this.data.findIndex(item => item[key] === value);
        if (index === -1)
            return undefined;
        const [deleted] = this.data.splice(index, 1);
        return deleted;
    }
}
class UserModel extends Resource {
    constructor(data) {
        super(data);
    }
}
const users = new UserModel([
    { id: 1, name: 'Alice', phone: '1234', email: 'alice@example.com', address: 'Wonderland' },
    { id: 2, name: 'Batman', phone: '1234', email: 'alice@example.com', address: 'Gotham' },
    { id: 3, name: 'Luke Skywalker', phone: '1234', email: 'alice@example.com', address: 'Galaxy far far away' },
    { id: 4, name: 'Karlson', phone: '1234', email: 'alice@example.com', address: 'Stockholm' },
]);
console.log(users.get());
console.log(users.add({ id: 5, name: 'Neo', phone: '5678', email: 'bob@example.com', address: 'Matrix' }));
console.log(users.getOne('id', 1));
console.log(users.update('id', 1, { name: 'Alice Smith' }));
console.log(users.delete('id', 5));
console.log(users.get());
class OrdersModel extends Resource {
    constructor(data) {
        super(data);
    }
}
const orders = new OrdersModel([
    { id: 1, price: 200 },
    { id: 2, price: 2000 },
    { id: 3, price: 300 },
    { id: 4, price: 250 },
    { id: 5, price: 20 },
]);
console.log(orders.get());
console.log(orders.add({ id: 6, price: 350 }));
console.log(orders.getOne('id', 1));
console.log(orders.update('id', 1, { price: 250 }));
console.log(orders.delete('id', 6));
console.log(orders.get());
