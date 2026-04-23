import type { Job } from '../types';

interface JobCardProps {
    job: Job
}

function JobCard({ job }: JobCardProps) {
    const bgColors = {
        'Applied': 'bg-blue-200',
        'Interview': 'bg-orange-200',
        'Offer': 'bg-green-200',
        'Rejected': 'bg-red-200'
    }

    const textColors = {
        'Applied': 'text-blue-500',
        'Interview': 'text-orange-500',
        'Offer': 'text-green-500',
        'Rejected': 'text-red-500'
    }

    return (
        <div className="border rounded-lg p-4 flex flex-col gap-2 border-gray-300 bg-white">
            <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-lg">{job.title}</h2>

                <div className={`${bgColors[job.status]} ${textColors[job.status]}  py-0.5 px-1 rounded-lg`}>
                    <p>{job.status}</p>
                </div>
            </div>

            <p className='text-gray-600'>{job.company}</p>

            <p className="font-medium text-lg">${job.salary}</p>
        </div>
    )
}

export default JobCard