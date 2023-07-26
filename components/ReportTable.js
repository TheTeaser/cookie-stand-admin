import { useState } from 'react';
import { hours, cities, Totals } from '../data';

export default function ReportTable({ form, cookieStandData, totals, updateTotals }) {
  return (
    <div className="flex items-center justify-center m-8">
      <table className="text-center">
        <thead>
          <tr>
            <th className="p-4 bg-green-600">Location</th>
            {hours.map((item) => (
              <th className="p-4 bg-green-600" key={item}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cookieStandData.map((item, index) => (
            <tr key={index} className={index % 2 !== 0 ? 'bg-green-300' : 'bg-green-400'}>
              {item.map((element, i) => (
                <td key={i} className="border border-black">
                  {element}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-4 font-bold bg-green-600 border border-black">Totals</td>
            {totals.map((item, index) => (
              <td key={index} className="p-4 font-bold bg-green-600 border border-black">
                {item}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
