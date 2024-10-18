abstract class Resource<T> {
    protected data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    get(): T[] {
        return this.data;
    }

    getOne(key: keyof T, value: any): T | undefined {
        return this.data.find(item => item[key] === value);
    }

    add(newObj: T): T[] {
        this.data.push(newObj);
        return this.data;
    }

    update(key: keyof T, value: any, partialData: Partial<T>): T | undefined {
        const index = this.data.findIndex(item => item[key] === value);
        if (index === -1) return undefined;
        this.data[index] = { ...this.data[index], ...partialData };
        return this.data[index];
    }

    delete(key: keyof T, value: any): T | undefined {
        const index = this.data.findIndex(item => item[key] === value);
        if (index === -1) return undefined;
        const [deleted] = this.data.splice(index, 1);
        return deleted;
    }
}


type User = { id: number; name: string; phone: string; email: string; address: string; };

class UserModel extends Resource<User> {
    constructor(data: User[]) {
        super(data);
    }
}

const users = new UserModel([
    { id: 1, name: 'Alice', phone: '1234', email: 'alice@example.com', address: 'Wonderland' }
]);

console.log(users.get());
console.log(users.add({ id: 2, name: 'Bob', phone: '5678', email: 'bob@example.com', address: 'Earth' }));
console.log(users.getOne('id', 1));
console.log(users.update('id', 1, { name: 'Alice Updated' }));
console.log(users.delete('id', 2));
console.log(users.get());