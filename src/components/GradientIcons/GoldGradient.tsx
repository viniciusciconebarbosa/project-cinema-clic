import { SxProps } from '@mui/material';

export const GoldGradient = () => (
  <svg width="0" height="0">
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop stopColor="#a4600c" offset="0%" />
      <stop stopColor="#CB9B51" offset="22%" />
      <stop stopColor="#F6E27A" offset="45%" />
      <stop stopColor="#F6F2C0" offset="50%" />
      <stop stopColor="#F6E27A" offset="55%" />
      <stop stopColor="#CB9B51" offset="78%" />
      <stop stopColor="#92560d" offset="100%" />
    </linearGradient>
  </svg>
);

export const goldIconStyle: SxProps = {
  fontSize: 50,
  mb: 2,
  fill: "url(#goldGradient)"
};

export const featureCardStyle: SxProps = {
  p: 3,
  textAlign: 'center',
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)'
  }
}; 