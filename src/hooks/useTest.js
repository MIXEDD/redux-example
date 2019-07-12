import React, { useState, useEffect } from 'react';

function useTest(variable, dependencies) {
   const [test, setTest] = useState('test');

   useEffect(() => {
        setTest(variable);
   }, []);
   
   return test;
}

export default useTest;