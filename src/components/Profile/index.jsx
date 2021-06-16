import React from 'react';
import { useState } from 'react';
import { Button, TextField, Grid, CircularProgress } from '@material-ui/core';

import api from '../../services/api';

import { Content } from './styles';
import DisplayTable from '../DisplayTable';

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      setLoading(true)
      const users = await api.get(`/users/${username}`);
      const repos = await api.get(`/users/${username}/repos`);
      setData(users.data);
      setRepositories(repos.data);
      setLoading(false);
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <Content>
         <Grid item xs={12} lg={12}>
          <TextField 
              fullWidth 
              label="Usuário" 
              variant="outlined"
              value={username}
              onChange={onChangeHandler} 
            />
            <Button 
              fullWidth 
              variant="contained" 
              color="primary"
              onClick={submitHandler}
            >
              {loading ? 
                <CircularProgress color="inherit" size={16} /> : 'Pesquisar'
              }
            </Button>
          </Grid>
          <Grid item>
            <DisplayTable data={data} repositories={repositories} />
          </Grid>
        </Content>
      </Grid>
    </Grid>
  )
}

export default Profile;