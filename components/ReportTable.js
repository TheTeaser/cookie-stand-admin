import { hours, cities, Totals } from '../data'

export default function ReportTable() {

    return (
        <div className="flex items-center justify-center m-8">
            {hours.length ? (
                <table className='text-center'>
                    <thead>
                        <tr>
                            {hours.map(item => (
                                <th className='p-4 bg-green-600'>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>

                        {cities.map((item, index) => (<>
                            <tr className={index % 2 != 0 ? 'bg-green-300' : 'bg-green-400'}>
                                {item.map(element => (
                                    <td className='border border-black '>{element}</td>
                                ))}
                            </tr>
                        </>))}

                    </tbody>
                    <tfoot>
                        <tr>
                            {Totals.map(item => (
                                <td className='p-4 font-bold bg-green-600 border border-black' >{item}</td>
                            ))}
                        </tr>
                    </tfoot>
                </table>
            ) : <h2 className="p-10 text-2xl">No Cookie Stands Available</h2>}
        </div>
    )
}