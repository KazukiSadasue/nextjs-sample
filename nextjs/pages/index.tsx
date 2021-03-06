import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LoginCard from '../src/components/LoginCard';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <LoginCard />
      </Box>
    </Container>
  );
}
