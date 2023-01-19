const Table = ({ data }) => {
  return (
    <table>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Zender</th>
          <th>Name</th>
        </tr>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.first_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
