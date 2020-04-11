import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../stores/user';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function Header() {
  const classes = useStyles();

  const dispatch = useDispatch();

  // ログアウトボタンが押された場合
  const onClickLogout = () => {
    dispatch(logout());
  };

  // 設定ボタン（ログアウト、パスワード変更とか）
  const Setting = () => {
    // reduxの状態からユーザーの名前を取得
    const name = useSelector(state => state.user.name);

    if (name) {
      return (
        <>
          <span>{name}</span>
          <Button color="secondary">パスワード変更</Button>
          <Button color="secondary" onClick={onClickLogout}>
            ログアウト
          </Button>
        </>
      );
    }
    return null;
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title} color="secondary">
          Trend Finder
        </Typography>
        <Setting />
      </Toolbar>
    </AppBar>
  );
}
