import {
    Card,
    Box,
    Typography,
} from '@mui/material'

import {
    useState
}



import BuildIcon from '@mui/icons-material/Build';


export default function Page() {
    
    return (
        <Box
            sx={{
                'width': '100vw',
                'height': '100vh',
                'backgroundColor': 'lightgrey',
                'paddingY': '5rem'
            }}
        >
            <Card
                sx={{
                    'marginX': 'auto',
                    'width': '50rem',
                    'height': '50rem',
                    'borderRadius': '5rem',
                    'padding': '4rem',

                }}
            >
                <Typography variant='h1' align='center' sx={{ }}>Hi, I am Lam</Typography>
                <Typography variant='h5' component="h2" align='center' sx={{ 'width': '100%' }}>You have visited my personal website</Typography>
                <Typography variant='h6' component="h3" align='center' sx={{ 'width': '100%' }}>
                    I am still building things <BuildIcon sx={{ 'marginBottom': '-5px'}}/> right now
                </Typography>
            </Card>
        </Box>
    )
}
