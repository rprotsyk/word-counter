import { FormEvent, ReactNode, useState } from 'react';
import { Typography, Button, TextField, CircularProgress } from '@mui/material';

export default function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const parsedResult = result ? JSON.parse(result) : null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await fetch('https://8clznsy5bb.execute-api.us-east-1.amazonaws.com/dev/count-words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(JSON.stringify(data));
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setResult(JSON.stringify({ message: 'Error: Unable to process request', data: {} }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter Text"
          variant="outlined"
          fullWidth
          value={text}
          onChange={e => setText(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {isLoading ? ( // Render a spinner when isLoading is true
        <CircularProgress />
      ) : (
        parsedResult && (
          <>
            <Typography variant="body1" color="primary" gutterBottom>
              Results: {parsedResult.message}
            </Typography>
            {Object.entries(parsedResult.data || {}).map(([key, value]) => (
              <Typography key={key} variant="body2" gutterBottom>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value as ReactNode}
              </Typography>
            ))}
          </>
        )
      )}
    </div>
  );
}