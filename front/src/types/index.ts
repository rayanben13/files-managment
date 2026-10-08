// src/types/index.ts

export interface User {
  id: number;
  fullName: string;
  email: string;
  role: "guest" | "student" | "admin";
  specialityId: number | null;
  yearId: number | null;
  speciality?: Speciality;
  year?: Year;
}

export interface Speciality {
  id: number;
  name: string;
  icon?: string;
}

export interface Year {
  id: number;
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// File & Report Types
export interface File {
  id_file: number;
  title: string;
  description?: string;
  file_path?: string;
  file_type?: string;
  size?: number;
  created_at?: string;
  updated_at?: string;
  user_id?: number;
  subject_id?: number;
  visibility?: "public" | "private";
  is_approved?: boolean;
}

export interface ReportedFile {
  id_file: number;
  file?: File;
  reports_count?: number;
}

export interface ReportDetail {
  id_report: number;
  reason: string;
  details?: string;
  created_at: string;
  users?: {
    id: number;
    username?: string;
    fullname?: string;
    img_user?: string;
  };
}

// Study List Types
export interface StudyList {
  id_stuList: number;
  name: string;
  course?: string;
  description?: string;
  privacy?: "public" | "private";
  count_files: number;
  count_likes?: number;
  isLoved?: boolean;
  FilesStudylist?: File[];
}

export interface StudyListResponse {
  data: StudyList[];
  total?: number;
}

// Subject Types
export interface Subject {
  id_subject: number;
  name: string;
  icon?: string;
  count_files?: number;
}

// Notification Types
export interface Notification {
  id_notification: number;
  message: string;
  is_read: boolean;
  type?: string;
  related_id?: number;
  created_at: string;
  user_id?: number;
}

export interface NotificationResponse {
  data: Notification[];
  total?: number;
}

// AI Message Types
export interface AIMessage {
  role: "user" | "assistant";
  content: string;
}

// Search Results Types
export interface SearchResults {
  files: File[];
  subjects: Subject[];
}

// API Error Response
export interface ApiErrorResponse {
  error?: string;
  message?: string;
  status?: number;
}

// Generic API Response
export interface ApiResponse<T> {
  data?: T;
  success?: boolean;
  message?: string;
  error?: string;
}
