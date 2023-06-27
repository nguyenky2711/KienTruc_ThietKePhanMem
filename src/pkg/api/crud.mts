import Client, {ListResult, RecordFullListQueryParams, RecordListQueryParams} from "pocketbase";

// The interface for CRUD operations
interface CRUD<T> {
    getList(page?: number, perPage?: number, queryParams?: RecordListQueryParams): Promise<ListResult<T>>

    getFullList(queryParams?: RecordFullListQueryParams): Promise<Array<T>>

    getFirstListItem(filter: string, queryParams?: RecordListQueryParams): Promise<T>

    create(item: T): Promise<T>;

    read(id: string): Promise<T>;

    update(id: string, item: T): Promise<T>;

    delete(id: string): Promise<void>;
}

// The interface for Employee entity
interface IEmployee {
    id: string;
    username: string;         // "test_username",
    email: string;            // "test@example.com",
    emailVisibility: boolean; // true,
    password: string;         // "12345678",
    passwordConfirm: string;  // "12345678",
    name: string;             // "test",
    status: string;           // "Đang làm việc",
    phone_number: string;     // "0123456789",
    cccd: string;             // "căng cước công dân",
    address: string;          // "địa chỉ",
    start_time: Date;         // "2022-01-01 10:00:00.123Z",
    end_time: Date;           // "2022-01-01 10:00:00.123Z",
    role: string;             // "Quản Lý"
}

// The interface for Park entity
interface IPark {
    id: string;
    name: string,
    code: string,
    price: number,
    capacity: number,
    size: number,
}

// The interface for Cost entity
interface ICost {
    transport_type: string;
    time: Date;
    price: number;
}

interface ICamera {
    id: string;
    name: string;
    area: string;
    screen_v2: string;
}

interface IAttendance {
    transport_type: string;
    card_id: string;
    check_in: string;
    check_out: string;
    check_in_img: string;
    check_out_img: string;
    area_id: string;
}

// DO NOT EDIT THIS FILE, IT'S GENERATED BY crud.mts
// The abstract class that implements common logic for CRUD operations
abstract class BaseCRUD<T> implements CRUD<T> {
    protected client: Client;

    // The constructor that takes a base URL and a strategy object as parameters
    protected constructor(client: Client) {
        this.client = client;
    }

    // The abstract method for get collection name of an item
    abstract collect(): string;

    // The abstract method for getting the first item from the list
    abstract getFirstListItem(filter: string, queryParams?: RecordListQueryParams): Promise<T>;

    // The abstract method for getting the full list of items
    abstract getFullList(queryParams?: RecordFullListQueryParams): Promise<Array<T>>;

    // The abstract method for getting the list of items
    abstract getList(page?: number, perPage?: number, queryParams?: RecordListQueryParams): Promise<ListResult<T>>;

    // The abstract method for creating an item
    abstract create(item: T): Promise<T>;

    // The abstract method for reading an item by id
    abstract read(id: string): Promise<T>;

    // The abstract method for updating an item by id
    abstract update(id: string, item: T): Promise<T>;

    // The abstract method for deleting an item by id
    abstract delete(id: string): Promise<void>;
}

// The concrete class for Employee CRUD operations
class EmployeeCRUD extends BaseCRUD<IEmployee> {
    // The constructor that takes a base URL and a strategy object as parameters
    constructor(client: Client) {
        super(client);
    }

    // The method for getting the collection name of an employee
    collect(): string {
        return "users";
    }

    // The method for getting the list of employees
    async getList(page?: number, perPage?: number, queryParams?: RecordListQueryParams): Promise<ListResult<IEmployee>> {
        return await this.client.collection(this.collect()).getList(page, perPage, queryParams);
    }

    // The method for getting the full list of employees
    async getFullList(queryParams?: RecordFullListQueryParams): Promise<Array<IEmployee>> {
        return await this.client.collection(this.collect()).getFullList(queryParams);
    }

    // The method for getting the first employee from the list
    async getFirstListItem(filter: string, queryParams?: RecordListQueryParams): Promise<IEmployee> {
        return await this.client.collection(this.collect()).getFirstListItem(filter, queryParams);
    }

    // The method for creating an employee
    async create(item: IEmployee): Promise<IEmployee> {
        return await this.client.collection(this.collect()).create(item);
    }

    // The method for reading an employee by id
    async read(id: string): Promise<IEmployee> {
        return await this.client.collection(this.collect()).getOne(id, {});
    }

    // The method for updating an employee by id
    async update(id: string, item: IEmployee): Promise<IEmployee> {
        return await this.client.collection(this.collect()).update(id, item);
    }

    // The method for deleting an employee by id
    async delete(id: string): Promise<void> {
        await this.client.collection(this.collect()).delete(id);
    }
}

// The concrete class for Park CRUD operations
class ParkCRUD extends BaseCRUD<IPark> {
    // The constructor that takes a base URL and a strategy object as parameters
    constructor(client: Client) {
        super(client);
    }

    // The method for getting the collection name of a park
    collect(): string {
        return "areas";
    }

    // The method for getting the list of parks
    async getList(page?: number, perPage?: number, queryParams?: RecordListQueryParams): Promise<ListResult<IPark>> {
        return await this.client.collection(this.collect()).getList(page, perPage, queryParams);
    }

    // The method for getting the full list of parks
    async getFullList(queryParams?: RecordFullListQueryParams): Promise<Array<IPark>> {
        return await this.client.collection(this.collect()).getFullList(queryParams);
    }

    // The method for getting the first park from the list
    async getFirstListItem(filter: string, queryParams?: RecordListQueryParams): Promise<IPark> {
        return await this.client.collection(this.collect()).getFirstListItem(filter, queryParams);
    }

    // The method for creating a park
    async create(item: IPark): Promise<IPark> {
        return await this.client.collection(this.collect()).create(item);
    }

    // The method for reading a park by id
    async read(id: string): Promise<IPark> {
        return await this.client.collection(this.collect()).getOne(id, {});
    }

    // The method for updating a park by id
    async update(id: string, item: IPark): Promise<IPark> {
        return await this.client.collection(this.collect()).update(id, item);
    }

    // The method for deleting a park by id
    async delete(id: string): Promise<void> {
        await this.client.collection(this.collect()).delete(id);
    }
}

// The concrete class for Cost CRUD operations
class CostCRUD extends BaseCRUD<ICost> {
    // The constructor that takes a base URL and a strategy object as parameters
    constructor(client: Client) {
        super(client);
    }

    // The method for getting the collection name of a cost
    collect(): string {
        return "prices";
    }

    // The method for getting the list of costs
    async getList(page?: number, perPage?: number, queryParams?: RecordListQueryParams): Promise<ListResult<ICost>> {
        return await this.client.collection(this.collect()).getList(page, perPage, queryParams);
    }

    // The method for getting the full list of costs
    async getFullList(queryParams?: RecordFullListQueryParams): Promise<Array<ICost>> {
        return await this.client.collection(this.collect()).getFullList(queryParams);
    }

    // The method for getting the first cost from the list
    async getFirstListItem(filter: string, queryParams?: RecordListQueryParams): Promise<ICost> {
        return await this.client.collection(this.collect()).getFirstListItem(filter, queryParams);
    }

    // The method for creating a cost
    async create(item: ICost): Promise<ICost> {
        return await this.client.collection(this.collect()).create(item);
    }

    // The method for reading a cost by id
    async read(id: string): Promise<ICost> {
        return await this.client.collection(this.collect()).getOne(id, {});
    }

    // The method for updating a cost by id
    async update(id: string, item: ICost): Promise<ICost> {
        return await this.client.collection(this.collect()).update(id, item);
    }

    // The method for deleting a cost by id
    async delete(id: string): Promise<void> {
        await this.client.collection(this.collect()).delete(id);
    }
}

// The concrete class for Camera CRUD operations
class CameraCRUD extends BaseCRUD<ICamera> {
    // The constructor that takes a base URL and a strategy object as parameters
    constructor(client: Client) {
        super(client);
    }

    // The method for getting the collection name of a camera
    collect(): string {
        return "prices";
    }

    // The method for getting the list of cameras
    async getList(page?: number, perPage?: number, queryParams?: RecordListQueryParams): Promise<ListResult<ICamera>> {
        return await this.client.collection(this.collect()).getList(page, perPage, queryParams);
    }

    // The method for getting the full list of cameras
    async getFullList(queryParams?: RecordFullListQueryParams): Promise<Array<ICamera>> {
        return await this.client.collection(this.collect()).getFullList(queryParams);
    }

    // The method for getting the first camera from the list
    async getFirstListItem(filter: string, queryParams?: RecordListQueryParams): Promise<ICamera> {
        return await this.client.collection(this.collect()).getFirstListItem(filter, queryParams);
    }

    // The method for creating a camera
    async create(item: ICamera): Promise<ICamera> {
        return await this.client.collection(this.collect()).create(item);
    }

    // The method for reading a camera by id
    async read(id: string): Promise<ICamera> {
        return await this.client.collection(this.collect()).getOne(id, {});
    }

    // The method for updating a camera by id
    async update(id: string, item: ICamera): Promise<ICamera> {
        return await this.client.collection(this.collect()).update(id, item);
    }

    // The method for deleting a camera by id
    async delete(id: string): Promise<void> {
        await this.client.collection(this.collect()).delete(id);
    }
}

// The concrete class for Attendance CRUD operations
class AttendanceCRUD extends BaseCRUD<IAttendance> {
    // The constructor that takes a base URL and a strategy object as parameters
    constructor(client: Client) {
        super(client);
    }

    // The method for getting the collection name of an attendance
    collect(): string {
        return "prices";
    }

    // The method for getting the list of Attendances
    async getList(page?: number, perPage?: number, queryParams?: RecordListQueryParams): Promise<ListResult<IAttendance>> {
        return await this.client.collection(this.collect()).getList(page, perPage, queryParams);
    }

    // The method for getting the full list of Attendances
    async getFullList(queryParams?: RecordFullListQueryParams): Promise<Array<IAttendance>> {
        return await this.client.collection(this.collect()).getFullList(queryParams);
    }

    // The method for getting the first Attendance from the list
    async getFirstListItem(filter: string, queryParams?: RecordListQueryParams): Promise<IAttendance> {
        return await this.client.collection(this.collect()).getFirstListItem(filter, queryParams);
    }

    // The method for creating an attendance
    async create(item: IAttendance): Promise<IAttendance> {
        return await this.client.collection(this.collect()).create(item);
    }

    // The method for reading an attendance by id
    async read(id: string): Promise<IAttendance> {
        return await this.client.collection(this.collect()).getOne(id, {});
    }

    // The method for updating an attendance by id
    async update(id: string, item: IAttendance): Promise<IAttendance> {
        return await this.client.collection(this.collect()).update(id, item);
    }

    // The method for deleting a attendance by id
    async delete(id: string): Promise<void> {
        await this.client.collection(this.collect()).delete(id);
    }
}

// The type map for entity types and CRUD classes
const crudMap = {
    employee: EmployeeCRUD,
    park: ParkCRUD,
    cost: CostCRUD,
    camera: CameraCRUD,
    attendance: AttendanceCRUD,
};

// The type alias for entity types
type EntityTypes = keyof typeof crudMap;

// The type alias for CRUD classes
type CrudClasses = typeof crudMap[EntityTypes];

// The type alias for extracting the instance type of class
type ExtractInstanceType<T> = T extends new (...args: any[]) => infer R ? R : never;

// The factory function that takes an entity type and returns a CRUD object
export function CreateCRUD<T extends EntityTypes>(pb: Client, type: T): ExtractInstanceType<CrudClasses> {
    const CrudClass = crudMap[type];
    if (CrudClass === undefined) {
        throw new Error(`Invalid entity type: ${type}`);
    }
    return new CrudClass(pb);
}