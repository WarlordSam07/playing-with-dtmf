import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import Encoder from './Encoder';
import { DTMF } from '../utils/dtmf';
import Decoder from './Decoder';

const dtmf = new DTMF();

const App: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ padding: 20 }}>
      <Paper style={{ padding: 10 }}>
        <Typography variant="h3">
          DTMF Encoder/Decoder
        </Typography>
        <Typography gutterBottom>
          This tool alows you to encode or decode DTMF (dual-tone multi-frequency) signals.
        </Typography>
        <br />

        <Typography variant="h4">
          DTMF Encoder
        </Typography>
        <Encoder dtmf={dtmf} />

        <br />
        <Typography variant="h4">
          DTMF Decoder
        </Typography>
        <Decoder dtmf={dtmf} />
        <br />
        <Typography variant="caption" gutterBottom>
          A tool by <a href="https://github.com/warlordsam07">WarlordSam07</a>.
        </Typography>
      </Paper>
    </Container>
  );
}

export default App;
