import React from 'react';
import { TrendingUp } from '@material-ui/icons';
import { ActionButton } from '../atoms/ActionButton';
import { Grid, Box } from '@material-ui/core';

export function TrendWord() {
  return (
    <>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <TrendingUp />
        </Grid>
        <Grid item>
          トレンドワード
        </Grid>
        <Box ml={3}>
          <ActionButton onClick={(event) => event.preventDefault()}>#コロナ</ActionButton>
        </Box>
        <Box ml={3}>
          <ActionButton onClick={(event) => event.preventDefault()}>#インフルエンザ</ActionButton>
        </Box>
        <Box ml={3}>
          <ActionButton onClick={(event) => event.preventDefault()}>#タピオカ</ActionButton>
        </Box>
      </Grid>
    </>
  );
}
