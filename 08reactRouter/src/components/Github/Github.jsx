import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Mr-Kaif8')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <h1>Github Followers: {data.followers}</h1>
      <img src={data.avatar_url} alt={data.name} width={300} />
    </div>
  );
}

export default Github;


// export const githubInfoLoder = async () => {
//     const Response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return Response.json()
// }