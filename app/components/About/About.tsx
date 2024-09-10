'use client';

import useDictionary from '@/app/hooks/useDictionary';
import React from 'react';

export const About = () => {
  const dictionary = useDictionary('about');

  return (
    <div>
      <h1>{dictionary.title}</h1>
      <p>{dictionary.description}</p>
    </div>
  );
};
