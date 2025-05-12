import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #001e3c 0%, #0a1929 100%)',
        gap: 2
      }}
    >
      <CircularProgress 
        size={60} 
        thickness={4}
        sx={{
          color: '#ffffff',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
        }}
      />
      <Typography
        variant="h5"
        sx={{
          color: '#ffffff',
          fontFamily: 'Poppins',
          fontWeight: 500,
          letterSpacing: '0.5px',
          animation: 'fadeInOut 2s infinite',
          '@keyframes fadeInOut': {
            '0%': {
              opacity: 0.5,
            },
            '50%': {
              opacity: 1,
            },
            '100%': {
              opacity: 0.5,
            },
          },
        }}
      >
        Carregando...
      </Typography>
    </Box>
  );
};

export default LoadingComponent; 