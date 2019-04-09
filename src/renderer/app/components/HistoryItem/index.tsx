import * as React from 'react';
import { observer } from 'mobx-react';
import store from '../../store';
import { HistoryItem } from '../../models';
import { Favicon, Item, Remove, Title } from './style';

export default observer(({ data }: { data: HistoryItem }) => {
  return (
    <Item key={data._id}>
      <Favicon
        style={{
          backgroundImage: `url(${store.faviconsStore.favicons[data.favicon]})`,
        }}
      />
      <Title>{data.title}</Title>
      <Remove />
    </Item>
  );
});
