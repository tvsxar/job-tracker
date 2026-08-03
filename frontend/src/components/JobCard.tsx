import { useEffect, useRef, useState } from 'react';
import type { Job, JobStatus } from '../types';

interface JobCardProps {
    job: Job;
    isOpen: boolean;
    onMenuClick: () => void;
    onCloseMenu: () => void;
}

function JobCard({ job, isOpen, onMenuClick, onCloseMenu }: JobCardProps) {
    const [status, setStatus] = useState(job.status);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onCloseMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onCloseMenu]);

    const bgColors = {
        'applied': 'bg-blue-200',
        'interview': 'bg-orange-200',
        'offer': 'bg-green-200',
        'rejected': 'bg-red-200'
    }

    const textColors = {
        'applied': 'text-blue-500',
        'interview': 'text-orange-500',
        'offer': 'text-green-500',
        'rejected': 'text-red-500'
    }

    const handleStatusChange = (newStatus: JobStatus) => {
        setStatus(newStatus);
        onCloseMenu();
    };

    const formatStatus = (s: string) =>
        s.charAt(0).toUpperCase() + s.slice(1);

    return (
        <div className="border rounded-lg p-4 flex flex-col gap-2 border-gray-300 bg-white">
            <div ref={menuRef} className="flex items-center justify-between mb-3 relative">
                <h2 className="font-semibold text-lg">{job.title}</h2>

                <div 
                onClick={onMenuClick}
                className={`${bgColors[status]} ${textColors[status]}  py-0.5 px-1 rounded-lg cursor-pointer hover:scale-102`}>
                    {formatStatus(status)}
                </div>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-24 
                    rounded-lg shadow-lg bg-white ring-1 ring-gray-300 ring-opacity-5
                    focus:outline-none"
                        role="menu">
                        <div role="none">
                            <p onClick={() => handleStatusChange('applied')} className='px-1 hover:bg-gray-200 cursor-pointer rounded-t-lg border-b-gray-200'>Applied</p>
                            <p onClick={() => handleStatusChange('interview')} className='px-1 hover:bg-gray-200 cursor-pointer'>Interview</p>
                            <p onClick={() => handleStatusChange('offer')} className='px-1 hover:bg-gray-200 cursor-pointer'>Offer</p>
                            <p onClick={() => handleStatusChange('rejected')} className='px-1 hover:bg-gray-200 cursor-pointer rounded-b-lg'>Rejected</p>
                        </div>
                    </div>
                )}
            </div>

            <p className='text-gray-600 text-sm'>{job.company}</p>

            <p className="font-medium text-lg">${job.salary}</p>
        </div>
    )
}

export default JobCard
