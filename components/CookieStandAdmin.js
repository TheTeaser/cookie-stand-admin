import { useState } from 'react';
import LoginForm from './LoginForm';
import ReportTable from './ReportTable';
import { hours } from '../data';

export default function CookieStandAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookieStandData, setCookieStandData] = useState([]);
  const [form, setForm] = useState({
    location: '',
    minimum: '',
    maximum: '',
    average: '',
  });

  const handleLogin = (username, password) => {
    setIsLoggedIn(true);
  };

  const handleDelete = (standId) => {
    const updatedData = cookieStandData.filter((stand) => stand.id !== standId);
    setCookieStandData(updatedData);
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
      for (let i = 1; i < standData.data.length; i++) {
        totals[i - 1] += standData.data[i];
      }
    });
    setTotals(totals);
  };

  const createCookieStandRow = () => {
    const newCookieStand = {
      id: cookieStandData.length + 1,
      data: [form.location, ...generateRandomData()],
    };
    setCookieStandData([...cookieStandData, newCookieStand]);
    updateTotals();
    setForm({
      location: '',
      minimum: '',
      maximum: '',
      average: '',
    });
  };

  const [totals, setTotals] = useState(Array(hours.length).fill(0));

  return (
    <div>
      {isLoggedIn ? (
        <>
          <ReportTable
            form={form}
            cookieStandData={cookieStandData}
            totals={totals}
            updateTotals={updateTotals}
            handleDelete={handleDelete}
          />
          <button className="flex items-center justify-center p-5 text-2xl bg-green-500" onClick={createCookieStandRow}>
            Create
          </button>
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}
