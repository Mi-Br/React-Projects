import { useState } from 'react'
import { Box, Card, CardActionArea, CardActions, CardContent, Container, CssBaseline, FormHelperText, Grid, Input, InputLabel, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'

function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });




  const [error, setError] = useState(false)
  const [result, setResult] = useState<number>()

  type fieldInput = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>

  function onInputChange({ target }: fieldInput) {
    // console.log(target.value)
    if (target.value.length > 0) {
      setError(!(/^[01]+$/.test(target.value)))
      if (!error) {
        const base10Number = parseInt(target.value, 2);
        setResult(base10Number)
      }
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box>
            <Grid display="grid" justifyItems={'center'} alignItems={'center'} sx={{ height: '100vh' }}>
              <Card sx={{ padding: '3rem' }}>
                <CardContent>
                  <Typography variant='h3'>Binary converter</Typography>
                  <p>Use following calculator to convert binary digits to any other base</p>
                  <TextField variant='outlined' fullWidth sx={{ marginTop: '2rem' }} label='binary number' error={error} helperText={error ? 'binary input only' : ''} onChange={e => onInputChange(e)}></TextField>
                  <Typography variant='caption'>Result: </Typography>
                  <Typography variant='overline'>{result}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
