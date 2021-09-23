import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';

import { useHistory } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export default function MenuItem(props) {
  const history = useHistory();
  const { t } = useTranslation();

  function goto(url) {
    history.push(url);
  }

  return (
    <ListItem button key={props.text} onClick={() => goto(props.path)}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={t('menu.' + props.text)} />
    </ListItem>
  );
}
