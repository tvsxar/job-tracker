import JobsList from "../components/JobsList";

function HomePage() {
  return (
    <div className='px-4 sm:px-12 lg:px-25 xl:px-25 bg-gray-100 flex flex-col gap-16 sm:gap-16 py-8 sm:py-12 min-h-[85vh]'>
      <JobsList />
    </div>
  )
}

export default HomePage;