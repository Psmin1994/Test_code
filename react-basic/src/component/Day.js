import React from 'react';
import Word from './Word';
import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Day = () => {
  const {day} = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word key={word.id} word={word}></Word>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
