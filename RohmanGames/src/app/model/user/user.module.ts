import { UserRole } from '../../enum/user-role';
export class UserModule {
  constructor(
    public id: string,
    public username: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public token: string,
    public userRole: UserRole = UserRole.Unknown,
    public deletedBy: string,
    public deleted: boolean,
    public lastChangedBy: string
  ) {}
}

export class EditUser {
  constructor(
    public id: string,
    public username: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public token: string,
    public userRole: UserRole = UserRole.Unknown,
    public newPassword: string
  ) {}
}

export class CreateUser {
  constructor(
    public firstName: string,
    public lastName: string,
    public username: string,
    public password: string,
    public email: string,
    public userRole: UserRole = UserRole.Unknown
  ) {}
}
