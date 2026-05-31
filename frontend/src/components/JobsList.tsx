import JobCard from "./JobCard";
import type { Job } from '../types';
import { useState } from "react";

function JobsList() {
    const [openJobId, setOpenJobId] = useState<number | null>(null);

    const jobs: Job[] = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Google',
            salary: 120000,
            status: 'applied'
        },
        {
            id: 2,
            title: 'Accountant',
            company: 'Amazon',
            salary: 110000,
            status: 'interview'
        },
        {
            id: 3,
            title: 'Software Engineer',
            company: 'Apple',
            salary: 90000,
            status: 'rejected'
        },
        {
            id: 4,
            title: 'Data Scientist',
            company: 'Google',
            salary: 100000,
            status: 'offer'
        },
        {
            id: 5,
            title: 'Designer',
            company: 'Apple',
            salary: 80000,
            status: 'applied'
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map(job => (
                <JobCard
                    key={job.id}
                    job={job}
                    isOpen={openJobId === job.id}
                    onMenuClick={() =>
                        setOpenJobId(prev => (prev === job.id ? null : job.id))
                    }
                    onCloseMenu={() => setOpenJobId(null)}
                />
            ))}
        </div>
    )
}

export default JobsList
