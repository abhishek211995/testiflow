export default function ShortCodeTable() {
  const tableItems = [
    {
      name: "Shortcode 1",
      shortcode: "[gs_testimonial id=2]",
      added_date: "23-08-2023",
    },
    {
      name: "Shortcode 2",
      shortcode: "[gs_testimonial id=2]",
      added_date: "23-08-2023",
    },
    {
      name: "Shortcode 3",
      shortcode: "[gs_testimonial id=2]",
      added_date: "23-08-2023",
    },
  ];

  return (
    <div className="tf_shortcode_wrap">
      <table className="tf_table">
        <thead>
          <tr>
            <th style={{ width: "2%" }}>
              <input type="checkbox"></input>
            </th>
            <th style={{ width: "20%" }}>ShortCode Name</th>
            <th style={{ width: "40%" }}>ShortCode</th>
            <th style={{ width: "10%" }}>Added Date</th>
            <th style={{ width: "20%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((items, index) => {
            return (
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>{items.name}</td>
                <td>{items.shortcode}</td>
                <td>{items.added_date}</td>
                <td>
                  <a>
                    <span class="dashicons dashicons-edit"></span> Edit
                  </a>
                  <a>
                    <span class="dashicons dashicons-trash"></span> Delete
                  </a>
                  <a>
                    <span class="dashicons dashicons-admin-page"></span> Clone
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
