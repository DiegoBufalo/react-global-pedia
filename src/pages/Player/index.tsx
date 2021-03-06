/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { api } from '../../services/api';
import { PlayersData, TeamPlayedData } from '../../types';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(id: number, name: string, teams: TeamPlayedData[], active: boolean) {
  return {
    id,
    name,
    active,
    teams,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.id}</TableCell>
        <TableCell align="right">{row.teams[row.teams.length - 1].team.name}</TableCell>
        <TableCell align="right">{row.active ? 'Ativo' : 'Aposentado'}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Carreira
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell align="right">Entrada</TableCell>
                    <TableCell align="right">Sa??da</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.teams.map((team) => (
                    <TableRow key={team.id}>
                      <TableCell component="th" scope="row">
                        {team.team.name}
                      </TableCell>
                      <TableCell align="right">{team.startDate}</TableCell>
                      <TableCell align="right">{team.active ? 'Atual' : team.endDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable(players: PlayersData[]) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Jogador </TableCell>
            <TableCell align="right">Cod. Jogador</TableCell>
            <TableCell align="right">Time Atual&nbsp;</TableCell>
            <TableCell align="right">Situa????o&nbsp;</TableCell>
            <TableCell align="right">A????es&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <Row key={player.id} row={player} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export const Player: React.FC = () => {
  const [players, setPlayers] = useState<PlayersData[]>([]);

  useEffect(() => {
    api.get('/players').then((response) => setPlayers(response.data));
  }, [players]);

  return (
    <div>
      <Container maxWidth="lg" >
        {CollapsibleTable(players)}
      </Container>
    </div>
  );
};
