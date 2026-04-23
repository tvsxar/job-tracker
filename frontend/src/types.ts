export interface Job {
  id: number;
  title: string;
  company: string;
  salary: number;
  status: "Applied" | "Interview" | "Offer" | "Rejected";
}
