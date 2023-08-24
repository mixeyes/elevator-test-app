import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allBuildings } from '../stores';

const ConfigPage = () => {
  const buildings = useSelector(allBuildings);
  return (
    <>
      <h1>Config page</h1>
      {Object.entries(buildings).map(([key, value]) => (
        <>
          <div>
            <span>{value.id}</span>
          </div>
          <div>
            <span>{value.name}</span>
          </div>
        </>
      ))}
    </>
  );
};

export default ConfigPage;
