import React from 'react';
import {useRouter} from 'next/router';
import { Container, Button } from './styles';

const HomePage: React.FC = () => {
  const router = useRouter();
  return (
    <Container>
      <h1>Welcome to Felipe's Aircrafts planner!</h1>
      <Button onClick={() => router.push('/planner')}>
        <p>Access the system</p>
      </Button>
    </Container>
  );
}

export default HomePage;
