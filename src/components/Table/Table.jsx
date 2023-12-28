import "../Table/Table.css";

const Table = ({ dates, data }) => {
  return (
    <>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Tasks</th>
              {dates.map((day, i) => {
                return <th key={i}>{day}</th>;
              })}
            </tr>
          </thead>

          {data.map((record, key) => {
            return (
              <tr key={key}>
                <td>{record.taskName}</td>
                {dates.map((date, i) => {
                  if (
                    parseInt(record.startDate.slice(0, 2)) <= date &&
                    parseInt(record.endDate.slice(0, 2)) >= date
                  )
                    return (
                      <td key={i} className={record.status}>
                        1
                      </td>
                    );
                  else return <td key={i}>0</td>;
                })}
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Table;
