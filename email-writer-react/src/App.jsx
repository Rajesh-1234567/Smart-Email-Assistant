import { useState } from 'react';
import './App.css';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper
} from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={6} sx={{ p: 4, backgroundColor: '#f5faff', borderRadius: '16px' }}>
        <Typography variant='h3' component="h1" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
          ✉️ Email Reply Generator
        </Typography>

        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant='outlined'
            label="📨 Original Email Content"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 3, backgroundColor: '#ffffff', borderRadius: '8px' }}
          />

          <FormControl fullWidth sx={{ mb: 1.5 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone}
              label="Tone (Optional)"
              onChange={(e) => setTone(e.target.value)}
              sx={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="confident">Confident</MenuItem>
              <MenuItem value="apologetic">Apologetic</MenuItem>
              <MenuItem value="empathetic">Empathetic</MenuItem>
              <MenuItem value="persuasive">Persuasive</MenuItem>
              <MenuItem value="optimistic">Optimistic</MenuItem>
              <MenuItem value="urgent">Urgent</MenuItem>
              <MenuItem value="natural">Natural</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="caption" sx={{ mb: 3, display: 'block', color: 'gray' }}>
            🎯 Tip: Select a tone that matches your message style.
          </Typography>

          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
            sx={{ py: 1.5, fontWeight: 'bold', fontSize: '1rem' }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "✨ Generate Reply"}
          </Button>
        </Box>

        {error && (
          <Typography color='error' sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box sx={{ mt: 4, backgroundColor: '#eaf4ff', p: 3, borderRadius: '12px' }}>
            <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
              📝 Generated Reply:
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant='outlined'
              value={generatedReply}
              inputProps={{ readOnly: true }}
              sx={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
            />

            <Button
              variant='outlined'
              color='secondary'
              sx={{ mt: 2 }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              📋 Copy to Clipboard
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default App;
