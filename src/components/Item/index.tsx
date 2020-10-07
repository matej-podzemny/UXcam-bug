import React from 'react';
import { SwipeRow } from 'react-native-swipe-list-view';

import * as S from './styled';

interface Props {
  label: string;
  remove: () => void;
}

const DeliveryItem = ({ label, remove }: Props) => {
  const renderContent = () => (
    <S.Wrapper>
      <S.Content>
        <S.Row>
          <S.Item>
            <S.Title numberOfLines={1}>{label}</S.Title>
          </S.Item>
        </S.Row>
      </S.Content>
    </S.Wrapper>
  );

  return (
    <SwipeRow useNativeDriver leftOpenValue={100} rightOpenValue={0}>
      <S.Touch onPress={remove}>
        <S.Title>Remove</S.Title>
      </S.Touch>
      {renderContent()}
    </SwipeRow>
  );
};

export default DeliveryItem;
