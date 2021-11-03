import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { LinearProgress, TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

import { history } from '../../../utils/history';
import { api } from '../../../services/api';
import { useToast } from '../../../context/useToast';

import { Container, Address } from './styles';
import { PlayersData } from '../../../types';

export const PlayerForm: React.FC = () => {
  const [player, setPlayer] = useState<PlayersData>({} as PlayersData);
  const { id } = useParams<{ id?: string | undefined }>();
  const { catchInfoError, catchInfoSuccess } = useToast();
  const [ activePlayer, setActive] = useState(true);

  useEffect(() => {
    async function loadPlayer() {
      if (id) {
        await api
          .get<PlayersData>(`/players/${id}`)
          .then((response) => {
            setPlayer(response.data);
          })
          .catch((err) => {
            catchInfoError(err.response.data, err.response.status);
          })
          .finally(() => setActive(player.active));
      }
    }
    loadPlayer();
  }, [catchInfoError, id]);

  const handleSubmitPlayer = async (name: string, active: boolean) => {
    const data = {
      name,
      active: activePlayer,
    };

    if (id) {
      await api
        .put(`/players/${id}/update`, data)
        .then((response) => {
          history.goBack();
          catchInfoSuccess('Jogador atualizado com sucesso', response.status);
        })
        .catch((err) => {
          catchInfoError(err.response.data, err.response.status);
        });
    } else {
      await api
        .post(`/players/create`, data)
        .then((response) => {
          history.push("/players");
          catchInfoSuccess('Jogador criado com sucesso', response.status);
        })
        .catch((err) => {
          catchInfoError(err.response.data, err.response.status);
        });
    }
  };

  const MySwitch = () => {
    return (
      <Switch
        checked={activePlayer}
        onChange={() => {
          setActive(!activePlayer);
        }}
      />
    );
  }

  return (
    <>
      <Container>
        <Formik
          enableReinitialize
          initialValues={{
            name: player.name ? player.name : '',
            active: player.active ? player.active : true,
          }}
          onSubmit={(values) => {
            handleSubmitPlayer(values.name, values.active);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Address>
                <div>
                  <Field component={TextField} name="name" type="text" label="Nome" />
                </div>
                <div>
                <FormControlLabel
                    control={
                      <Switch
                        checked={activePlayer}
                        onChange={() => {
                          setActive(!activePlayer);
                        }}
                      />
                    }
                    label="Jogador ainda em atividade?"
                  />
                </div>
              </Address>
              <footer>
              <Button variant="contained" color="primary" disabled={isSubmitting} onClick={() => history.goBack()}>
                  Voltar
                </Button>
                {isSubmitting && <LinearProgress />}
                <br />
                <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
                  {id ? 'Salvar' : 'Cadastrar'}
                </Button>
              </footer>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};
