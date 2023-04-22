import { useState } from 'react'
import { Box, Card, CardActionArea, CardActions, CardContent, Container, CssBaseline, FormHelperText, Grid, Input, InputLabel, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'

function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box>
            <Grid display="grid" justifyItems={'center'} alignItems={'center'} sx={{ height: '100vh' }}>
              <Card sx={{ padding: '3rem' }}>
                <CardContent>
                  <Typography variant='h2'>Binary converter</Typography>
                  <p>Use following calculator to convert binary digits to any other base</p>
                  <TextField variant='outlined' fullWidth sx={{ marginTop: '2rem' }} label='binary number' error helperText='binary input only'></TextField>
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
