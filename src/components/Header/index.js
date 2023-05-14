import {
    AppBar,
    Toolbar,
    List,
    ListItemButton,
    Typography,
    Box, 
    useTheme,
    useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    const theme = useTheme();
    const breakpointsDownMd = useMediaQuery(theme.breakpoints.down('md'));

    const pages = [
        {
            id: 0,
            name: 'Home',
            path: '/',
        },
        {
            id: 1,
            name: 'ЮО',
            path: 'companies',
        },
        {
            id: 2,
            name: 'ФОП',
            path: 'fop',
        },
        {
            id: 3,
            name: 'About',
            path: 'about',
        }
    ];

    return (
        <Box sx={{marginBottom: '4.1rem'}}>
            <AppBar color='primary' sx={{color: 'white', height: '4rem'}}>
                <Toolbar sx={{height: '100%'}}>
                    <List sx={{display: 'flex', justifyContent: breakpointsDownMd ? 'space-between' : 'start', fontSize: '15px', width: '100%'}}>
                        {pages.map((page) => {
                            return (
                                <Box key={page.id} sx={{width: '100px'}}>
                                    <ListItemButton component={Link} to={page.path} key={page.id} sx={{display: 'flex', justifyContent:'center'}}>
                                        <Typography key={page.id} variant='inherit' color='secondary' component="div" sx={{textTransform: 'uppercase', fontWeight: '700'}}>
                                            {page.name}
                                        </Typography>
                                    </ListItemButton>
                                </Box>
                            )
                        })}
                    </List>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;