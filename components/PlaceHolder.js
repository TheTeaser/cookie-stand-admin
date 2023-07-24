export default function Placeholder(props) {

    return (
  
      <>
        {props.flag ? (
          <>
            <p>Location: {props.form.location}</p>
            <p>minimum: {props.form.minimum}</p>
            <p>maximum: {props.form.maximum}</p>
            <p>average: {props.form.average}</p>
          </>
        ) : <></>}
  
      </>
    )
  }