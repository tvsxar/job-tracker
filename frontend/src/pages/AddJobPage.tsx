function AddJobPage() {
  return (
    <div className="flex items-center justify-center min-h-[85vh] px-4 sm:px-12 lg:px-25 bg-gray-50">
      <div className="border border-gray-100 rounded-lg p-2 max-w-lg bg-white">
        <div className="w-full max-w-md rounded-xl p-3">
          <h1 className="mb-6 font-semibold text-xl">Add Your Job</h1>
          <form className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">Title</label>
                <input
                  type="text"
                  placeholder="Frontend Developer"
                  className="px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">Company</label>
                <input
                  type="text"
                  placeholder="Google"
                  className="px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Salary</label>
              <input
                type="number"
                placeholder="Optional"
                className="px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Status</label>
              <select
                className="px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-gray-300"
                defaultValue="applied"
              >
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-2 rounded-md hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.5)] transition cursor-pointer bg-[#EC4899] text-white"
            >
              Save Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddJobPage;
