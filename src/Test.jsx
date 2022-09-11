import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';

const Test = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    subscribe: false,
    age: 0,
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <TextField
          name='name'
          value={inputs.name}
          onChange={handleChange}
          type='text'
          placeholder='Name'
          variant='outlined'
          sx={{ margin: 3 }}
        />
        <TextField
          name='email'
          value={inputs.email}
          onChange={handleChange}
          type='email'
          placeholder='Email'
          variant='standard'
          sx={{ margin: 3 }}
        />
        <TextField
          name='password'
          value={inputs.password}
          onChange={handleChange}
          type='password'
          placeholder='Password'
          variant='filled'
          sx={{ margin: 3 }}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    subscribe: !inputs.subscribe,
                  }))
                }
              />
            }
            label='Subscribe'
          />
        </FormGroup>

        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            name='age'
            value={inputs.age}
            label='Age'
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Button type='submit' variant='contained' sx={{ margin: 3 }}>
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Test;
