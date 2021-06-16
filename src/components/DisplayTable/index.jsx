/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar
} from '@material-ui/core';

import { TableContent } from './styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const DisplayTable = ({ data, repositories }) => {
  return (
    <TableContent>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Localização</TableCell>
              <TableCell>Biografia</TableCell>
              <TableCell>Repositórios</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {!data.avatar_url ? (
                  <Avatar alt={data.name} src={data.avatar_url} />
                ) : (
                  <Avatar alt={data.name} src={data.avatar_url} />
                )}
              </TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.location}</TableCell>
              <TableCell>{data.bio}</TableCell>
              <TableCell>
                <List>
                  {repositories.map((repo) => (
                    <ListItem key={repo.name}>
                      <ListItemAvatar>
                        <Avatar />
                      </ListItemAvatar>
                      <a href={repo.html_url} target="_blank">
                        <ListItemText 
                          primary={repo.name}
                          secondary={repo.language}
                        />
                      </a>
                    </ListItem>
                  ))}
                </List>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </TableContent>
  )
}

DisplayTable.propTypes = {
  data: PropTypes.object.isRequired,
  repositories: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DisplayTable;