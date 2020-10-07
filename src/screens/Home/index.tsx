import React, { useState } from 'react';
import Item from '@components/Item';

import * as S from './styled';

const Home = () => {
  const [log, setLog] = useState(0);

  const Array = ['Petr', 'Karel', 'Michal', 'Jana', 'Bozena', 'Marie'];
  console.log(log);

  return (
    <S.Wrapper>
      <S.Button onPress={() => setLog(log + 1)}>
        <S.Label>Add one</S.Label>
      </S.Button>
      <S.Number>{log}</S.Number>

      {Array.map(
        (item, index) =>
          index <= log && <Item label={index.toString()} remove={() => setLog(log - 1)} />
      )}
    </S.Wrapper>
  );
};

export default Home;
