import React from 'react'
import Redmi from './Redmi';
import Oppo from './Oppo';
import Samsung from './Samsung';
import Iphone from './Iphone';

export default function SmartPhone() {
  return (
    <>
      <Redmi />
      <Iphone />
      <div className="grid mt-5 lg:grid-cols-2 gap-3 grid-cols-1">
        <Oppo />
        <Samsung />
      </div>
    </>
  );
}

