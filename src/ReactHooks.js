import React, { useState, useEffect } from 'react';

const HooksApp = (count) => {
  const [name, setName] = useState('Krishna in hooks');
  useEffect(() => {
    console.log('I am an effect that gets called every time i am updated');
  });
  useEffect(() => {
    console.log('I am an effect that gets called every time I am loaded');
    return () => {
      console.log(
        'I am an effect that gets called once the component is unmounted'
      );
    };
  }, []);
  useEffect(() => {
    console.log(
      'I am an effect that gets called every time the dependecy changes'
    );
  }, [count]);

  const handleClick = () => {
    setName('This is Bharath in functional component after click');
  };
  return <div onClick={handleClick}>{name}</div>;
};

export default HooksApp;
