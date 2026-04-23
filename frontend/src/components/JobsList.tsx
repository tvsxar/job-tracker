import JobCard from "./JobCard";
import type { Job } from '../types';

function JobsList() {
    const jobs: Job[] = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Google',
            salary: 120000,
            status: 'Applied'
        },
        {
            id: 2,
            title: 'Accountant',
            company: 'Amazon',
            salary: 110000,
            status: 'Interview'
        },
        {
            id: 3,
            title: 'Software Engineer',
            company: 'Apple',
            salary: 90000,
            status: 'Rejected'
        },
        {
            id: 4,
            title: 'Data Scientist',
            company: 'Google',
            salary: 100000,
            status: 'Offer'
        },
        {
            id: 5,
            title: 'Designer',
            company: 'Apple',
            salary: 80000,
            status: 'Applied'
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map(job => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    )
}

export default JobsList