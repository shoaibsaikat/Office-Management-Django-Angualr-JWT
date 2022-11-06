export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email?: string;
    manager_id?: number;
    refresh_token?: string;
    access_token?: string;
    can_distribute_inventory?: boolean;
    can_approve_inventory?: boolean;
    can_approve_leave?: boolean;
    can_manage_asset?: boolean;
    can_manage_driver?: boolean;
    type: number;
    phone1: number;
    phone2: number;
    image: string;
}