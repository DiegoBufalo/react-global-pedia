import React from 'react';
import { Button, Box } from '@material-ui/core';
import { Container } from './styles';
import { history } from '../../utils/history';

export const Header: React.FC = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <div className="container">
          <div className="flex-left">
            <button
              className="Button"
              type="button"
              onClick={() => {
                history.push('/');
              }}
            >
              <img src="#" alt="Global Pedia" />
            </button>
          </div>

          <div className="flex-right">
            <Button
              className="Button buttonHeader"
              type="button"
              onClick={() => {
                history.push('/players');
              }}
              variant="contained"
            >
              Jogadores
            </Button>
            <Button
              className="Button buttonHeader"
              type="button"
              onClick={() => {
                history.push('/teams');
              }}
              variant="contained"
            >
              Times
            </Button>
            <Button
              className="Button buttonHeader"
              type="button"
              onClick={() => {
                history.push('/tournaments');
              }}
              variant="contained"
            >
              Campeonatos
            </Button>
          </div>
        </div>
      </Box>
    </Container>
  );
};
