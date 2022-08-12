import { createTheme } from "@mui/system";
export const theme = createTheme({
    breakpoints: {
        values: {
          xs: 280,
          sm: 600,
          ms: 700,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
        Typography: {
          fontFamily: ['"Khand"', 'sans-serif'].join(','),
          h1:{
            fontFamily: `'Khand',sans-serif`
          },
          h2:{
            fontFamily: `'Khand',sans-serif`
          }, 
          span:{
            fontFamily: `'Khand',sans-serif`
          },
          p:{
            fontFamily: `'Khand',sans-serif`
          },
         }
      },
})