export interface Job {
  id: number;
  title: string;
  company: string;
  salary: number;
  status: JobStatus;
}

export type JobStatus = "applied" | "interview" | "offer" | "rejected";
