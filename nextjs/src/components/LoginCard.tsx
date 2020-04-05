import React from 'react';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, TextField, Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
});

export default function LoginCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box m={5}>
          <form noValidate autoComplete="off">
            <TextField className={classes.input} id="standard-basic" label="ログインID" />
            <TextField className={classes.input} id="standard-basic" label="パスワード" />
            <Box display="flex" justifyContent="center" m={5}>
              <Button variant="contained" color="secondary" onClick={() => Router.push('/home')}>
                ログイン
              </Button>
            </Box>
          </form>
        </Box>
      </CardContent>
    </Card>
  );
}
