import { Typography, Button, Box } from "@mui/material";
import CompaniesPage from "../CompaniesPage";

function HomePage() {
  return (
    <>
      <Typography align="center" variant='inherit' component="div" sx={{textTransform: 'uppercase', fontWeight: '700', fontSize: '50px'}}>
        Інформаційна система зареєстрованих підприємців
      </Typography>
      <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', height: '38vw', marginTop: '25px'}}>
        <Button href="#/companies" variant="contained" sx={{width: "45vw"}}>
          <Typography align="center" variant='inherit' component="div" sx={{textTransform: 'uppercase', fontWeight: '700', fontSize: '30px'}}>
            Юридичні особи
          </Typography>
        </Button>
        <Button href="#/fop" variant="contained" sx={{width: "45vw"}}>
          <Typography align="center" variant='inherit' component="div" sx={{textTransform: 'uppercase', fontWeight: '700', fontSize: '30px'}}>
            Фізичні особи
          </Typography>
        </Button>
      </Box>
    </>
  );
}

export default HomePage;
