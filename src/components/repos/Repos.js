import React from 'react';
import RepoItem from './RepoItem';
import propTypes from 'prop-types';

const Repos = ({ repos }) => {
  return repos.map(repos => <RepoItem repo={repos} key={repos.id} />);
};

Repos.propTypes = {
  repos: propTypes.array.isRequired
};

export default Repos;
