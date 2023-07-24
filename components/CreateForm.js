import { useState } from "react";

function CreateForm({ onAddStand }) {
  const [form, setForm] = useState({
    location: "",
    minimum: "",
    maximum: "",
    average: "",
  });

  const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddStand(form);
    setForm({
      location: "",
      minimum: "",
      maximum: "",
      average: "",
    });
  };

  return (
    <form className="flex flex-col items-center justify-center w-auto h-auto p-10 bg-green-300" onSubmit={handleSubmit}>
      <h1 className="p-5 text-4xl font-bold">Create Cookie Stand</h1>
      <div>
        <div className="flex justify-around">
          <label className="text-2xl">Location</label>
          <input
            className="w-11/12 mx-auto"
            type="text"
            value={form.location}
            name="location"
            onChange={handleChange}
          />
        </div>
        <div className="flex p-5">
          <div className="flex flex-col p-5">
            <label className="text-2xl">Minimum Customers per Hour</label>
            <input
              type="number"
              value={form.minimum}
              name="minimum"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col p-5">
            <label className="text-2xl">Maximum Customers per Hour</label>
            <input
              type="number"
              value={form.maximum}
              name="maximum"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col p-5">
            <label className="text-2xl">Average Cookies per Sale</label>
            <input
              type="number"
              value={form.average}
              name="average"
              onChange={handleChange}
            />
          </div>
          <button className="flex items-center justify-center p-5 text-2xl bg-green-600" type="submit">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateForm;
