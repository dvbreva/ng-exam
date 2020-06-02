export interface User {
    id?: number;
    name: string;
    email: string;
    password?: string;
    roleId?: number;
    isBlocked?: boolean;
    favouriteCourses?: number[]
}
  