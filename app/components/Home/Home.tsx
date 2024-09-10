'use client';

import useDictionary from '@/app/hooks/useDictionary';
import React from 'react';

export const Home = () => {
  const dictionary = useDictionary('home');

  return (
    <div>
      <h1>{dictionary.title}</h1>
      <p>{dictionary.description}</p>
    </div>
  );
};
