export enum UserRole {
  ADMIN = 1,
  CLIENT,
}

export interface UsersDto {
  id: number;
  first_name: string;
  last_name: string;
  role: UserRole;
  password: string;
  city: number;
}
