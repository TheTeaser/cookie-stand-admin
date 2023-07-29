import { hours, cities } from '../data'

export default function ReportTable({ form , setForm}) {
    
    function deleteHandler(i) {
        let newform = form.filter((item,index)=> index !== i)
        setForm(newform)
    }

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
                        {form.map((item, index) => (
                            <tr className={index%2!=0?'bg-green-400 ':'bg-green-300 '}>
                                <td className='p-4 font-bold border border-black'>
                                   <p> {item.location} </p><button onClick={() =>deleteHandler(index)} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
                                    </td>
                                {cities.map((item, index) => (
                                    <td className='p-4 font-bold border border-black'>{item}</td>
                                ))}
                            </tr>
                        ))}



                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='p-4 font-bold bg-green-600 border border-black'>Total</td>
                            {cities.map(item => (
                                <td className='p-4 font-bold bg-green-600 border border-black' >{item * form.length}</td>
                            ))}
                        </tr>
                    </tfoot>
                </table>
            ) : <h2 className="p-10 text-2xl">No Cookie Stands Available</h2>}
        </div>
    )
}