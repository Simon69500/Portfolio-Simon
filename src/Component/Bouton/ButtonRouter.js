import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};

export default function ButtonRouter() {
  return (
    <div>
        <Stack  direction="row" spacing={2}>
        <Button component={RouterLink} to="/">Acceuil</Button>
        <Button component={RouterLink} to="/About">A Propos</Button>
        <Button component={RouterLink} to="/Competence">Acceuil</Button>
        <Button href="#Actual">Link</Button>
        </Stack>
    </div>
  );
}
