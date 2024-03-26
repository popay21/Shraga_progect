import React, { useEffect, useState } from 'react';
// יבוא fetchFlags מהקובץ api.js
import { fetchFlags } from '../api';

const Items = () => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const getFlags = async () => {
      const flagsData = await fetchFlags();
      setFlags(flagsData);
    };
    getFlags();
  }, []);

  return (
    <div>
      <h1>דגלים</h1>
      <div>
        {flags.map((flag, index) => (
          <img key={index} src={flag} alt="דגל" />
        ))}
      </div>
    </div>
  );
}

export default Items;








