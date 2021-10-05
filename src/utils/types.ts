export interface LoginData {
   username: string;
   password: string;
}

export enum Role {
   Admin = 'admin',
   PM = 'pm',
   Member = 'member',
}
export enum TaskStatus {
   Requesting = 1,
   Unscheduled = 2,
   Doing = 3,
   Reviewing = 4,
   Completed = 5,
   Cancelled = 6,
}
export enum ProjectStatus {
   Pending = 1,
   InProgress = 2,
   Completed = 3,
   Cancelled = 4,
}
export enum Priority {
   High = 'high',
   Medium = 'medium',
}
export type User = {
   id: number;
   username: string;
   password: string;
   email: string;
   avatar?: any;
   firstName: string;
   lastName: string;
   role: Role;
   active: boolean;
   dateOfBirth: string;
};
export type Project = {
   id: number;
   name: string;
   status: ProjectStatus;
   client: string;
   description?: string;
   startDate?: string;
   endDate?: string;
   members?: User[];
   pm?: User;
};
export type Task = {
   id: number;
   title: string;
   notes?: string;
   assign?: User;
   projectId: number;
   requestByUser: User;
   dueDate: string;
   status: TaskStatus;
   priority: Priority;
};
export type Report = {
   id: number;
   title: string;
   user: User;
   projectId: number;
   date: string;
   note?: string;
   link?: string;
};
export type UserProfileType = User & {
   projects: Project[];
   tasks: Task[];
};
