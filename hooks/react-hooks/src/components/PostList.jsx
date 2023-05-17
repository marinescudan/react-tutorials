import React, { useState, useEffect } from 'react';

// postInterface = {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
// }

export const PostList = function () {
  const [data, setData] = useState(null);

  useEffect(() => {

    // Fetch data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data));

    // Clean up the subscription
    return () => {
        setData(null);
    }

  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <div>
      {data ? (
        <ul>
          {data.slice(0, 3).map(item => (
            <li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}