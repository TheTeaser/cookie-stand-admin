import { useState } from "react";
import Placeholder from "./PlaceHolder";
import ReportTable from "./ReportTable";
import { hours } from '../data';

export default function Main() {
  const [form, setForm] = useState({
    location: "",
    minimum: "",
    maximum: "",
    average: ""
  });
  const [flag, setFlag] = useState(false);
  const [cookieStandData, setCookieStandData] = useState([]);
  const [totals, setTotals] = useState(Array(hours.length).fill(0));

  const lastCookieAddedHandler = () => {
    setFlag(true);
    createCookieStandRow();
  };

  const createCookieStandRow = () => {
    const newCookieStand = [form.location, ...generateRandomData()];
    setCookieStandData((prevData) => [...prevData, newCookieStand]);
    updateTotals();
  };

  const generateRandomData = () => {
    const min = parseInt(form.minimum);
    const max = parseInt(form.maximum);
    const avg = parseInt(form.average);
    return hours.map(() => Math.floor(Math.random() * (max - min + 1)) + min * avg);
  };

  const updateTotals = () => {
    const totals = Array(hours.length).fill(0);
    cookieStandData.forEach((standData) => {
      for (let i = 1; i < standData.length; i++) {
        totals[i - 1] += standData[i];
      }
    });
    setTotals(totals);
  };

  return (
    <main className="flex flex-col items-center justify-center h-auto">
      <div className="flex flex-col items-center justify-center w-auto h-auto p-10 bg-green-300">
        <h1 className="p-5 text-4xl font-bold">Create Cookie Stand</h1>
        <div>
          <div className="flex justify-around">
            <label className="text-2xl">Location</label>
            <input
              className="w-11/12 mx-auto"
              type="text"
              value={form.location}
              name="location"
              onChange={(event) =>
                setForm({ ...form, location: event.target.value })
              }
            />
          </div>
          <div className="flex p-5">
            <div className="flex flex-col p-5">
              <label className="text-2xl">Minimum Customers per Hour</label>
              <input
                type="number"
                value={form.minimum}
                name="minimum"
                onChange={(event) =>
                  setForm({ ...form, minimum: event.target.value })
                }
              />
            </div>
            <div className="flex flex-col p-5">
              <label className="text-2xl">Maximum Customers per Hour</label>
              <input
                type="number"
                value={form.maximum}
                name="maximum"
                onChange={(event) =>
                  setForm({ ...form, maximum: event.target.value })
                }
              />
            </div>
            <div className="flex flex-col p-5">
              <label className="text-2xl">Average Cookies per Sale</label>
              <input
                type="number"
                value={form.average}
                name="average"
                onChange={(event) =>
                  setForm({ ...form, average: event.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="flex items-center justify-center p-5 text-2xl bg-green-500"
              onClick={lastCookieAddedHandler}
            >
              Create
            </button>
          </div>
        </div>
      </div>
      {flag ? <ReportTable form={form} cookieStandData={cookieStandData} totals={totals} updateTotals={updateTotals} /> : <h2 className="p-10 text-2xl">No Cookie Stands Available...</h2>}
    </main>
  );
}
