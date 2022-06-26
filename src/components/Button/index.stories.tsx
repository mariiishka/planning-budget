import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';
import { Box } from '@mui/material';

export default {
  title: 'Unknown/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <Box display="flex" flexDirection="column" alignItems="center" p={10} gap={5}>
    <Box display="flex" gap={2}>
      <Box>
        <Button color="primary" variant="outlined">
          Button
        </Button>
      </Box>
      <Box>
        <Button color="primary" variant="contained">
          Button
        </Button>
      </Box>
      <Box>
        <Button color="primary" variant="text">
          Button
        </Button>
      </Box>
    </Box>

    <Box display="flex" gap={2}>
      <Box>
        <Button disabled color="primary" variant="outlined">
          Button
        </Button>
      </Box>
      <Box>
        <Button disabled color="primary" variant="contained">
          Button
        </Button>
      </Box>
      <Box>
        <Button disabled color="primary" variant="text">
          Button
        </Button>
      </Box>
    </Box>

    <Box display="flex" gap={2}>
      <Box>
        <Button color="success" variant="outlined">
          Button
        </Button>
      </Box>
      <Box>
        <Button color="success" variant="contained">
          Button
        </Button>
      </Box>
      <Box>
        <Button color="success" variant="text">
          Button
        </Button>
      </Box>
    </Box>

    <Box display="flex" gap={2}>
      <Box>
        <Button disabled color="success" variant="outlined">
          Button
        </Button>
      </Box>
      <Box>
        <Button disabled color="success" variant="contained">
          Button
        </Button>
      </Box>
      <Box>
        <Button disabled color="success" variant="text">
          Button
        </Button>
      </Box>
    </Box>

    <Box display="flex" gap={2}>
      <Box>
        <Button color="error" variant="outlined">
          Button
        </Button>
      </Box>
      <Box>
        <Button color="error" variant="contained">
          Button
        </Button>
      </Box>
      <Box>
        <Button color="error" variant="text">
          Button
        </Button>
      </Box>
    </Box>

    <Box display="flex" gap={2}>
      <Box>
        <Button disabled color="error" variant="outlined">
          Button
        </Button>
      </Box>
      <Box>
        <Button disabled color="error" variant="contained">
          Button
        </Button>
      </Box>
      <Box>
        <Button disabled color="error" variant="text">
          Button
        </Button>
      </Box>
    </Box>

    <Box display="flex" gap={2}>
      <Box>
        <Button color="info" variant="outlined">
          Button
        </Button>
      </Box>
      <Box>
        <Button color="info" variant="contained">
          Button
        </Button>
      </Box>
      <Box>
        <Button color="info" variant="text">
          Button
        </Button>
      </Box>
    </Box>

    <Box display="flex" gap={2}>
      <Box>
        <Button disabled color="info" variant="outlined">
          Button
        </Button>
      </Box>
      <Box>
        <Button disabled color="info" variant="contained">
          Button
        </Button>
      </Box>
      <Box>
        <Button disabled color="info" variant="text">
          Button
        </Button>
      </Box>
    </Box>

    <Box display="flex" gap={2}>
      <Box>
        <Button color="warning" variant="outlined">
          Button
        </Button>
      </Box>
      <Box>
        <Button color="warning" variant="contained">
          Button
        </Button>
      </Box>
      <Box>
        <Button color="warning" variant="text">
          Button
        </Button>
      </Box>
    </Box>

    <Box display="flex" gap={2}>
      <Box>
        <Button disabled color="warning" variant="outlined">
          Button
        </Button>
      </Box>
      <Box>
        <Button disabled color="warning" variant="contained">
          Button
        </Button>
      </Box>
      <Box>
        <Button disabled color="warning" variant="text">
          Button
        </Button>
      </Box>
    </Box>
  </Box>
);

export const Default = Template.bind({});
