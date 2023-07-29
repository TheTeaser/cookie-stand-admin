export default function Main({ form, setForm, setFlag }) {
  function lastCookieAddedHandler(event) {
    event.preventDefault();
    let obj = {
      location: event.target.location.value,
      minimum: event.target.minimum.value,
      maximum: event.target.maximum.value,
      average: event.target.average.value
    };
    setForm([...form, obj]);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <form className="w-4/5 p-10 bg-green-300 rounded-lg" onSubmit={lastCookieAddedHandler}>
        <h1 className="p-5 text-4xl font-bold">Create a Cookie Stand</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col col-span-2">
            <label className="text-2xl">Add a location</label>
            <input
              className="w-full px-3 py-2 mt-1 text-lg border border-gray-400 rounded-md"
              type="text"
              name="location"
              placeholder="Cookie Stand Location"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="flex flex-col">
            <label className="text-2xl">Minimum Customers / Hour</label>
            <input
              className="w-full px-3 py-2 mt-1 text-lg border border-gray-400 rounded-md"
              type="number"
              name="minimum"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-2xl">Maximum Customers / Hour</label>
            <input
              className="w-full px-3 py-2 mt-1 text-lg border border-gray-400 rounded-md"
              type="number"
              name="maximum"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-2xl">Average Cookies / Sale</label>
            <input
              className="w-full px-3 py-2 mt-1 text-lg border border-gray-400 rounded-md"
              type="number"
              name="average"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="px-6 py-3 text-xl font-semibold text-white bg-green-500 rounded-md"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </main>
  );
}
