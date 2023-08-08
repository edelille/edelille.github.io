"use client"

import {
    Card,
    Button,
    Divider,
    Fade,
    Box,
    Stack,
    TextField,
    Typography,
} from '@mui/material'


import {
    useState
} from 'react'
import BuildIcon from '@mui/icons-material/Build';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Page() {

    const [ voteValue, setVoteValue ] = useState(0)

    const incrementVoteValue = () => {
        setVoteValue(voteValue+1)
    }

    const MyHeart = () =>  {
        return(
            <FavoriteIcon sx={{ 
                'color':'red',
                'fontSize': '2rem'
            }}/>
        )
    }
    
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
                    'height': 'auto',
                    'borderRadius': '5rem',
                    'padding': '4rem',

                }}
            >
            <Stack alignItems='center'>
                <Typography variant='h1' align='center' sx={{ }}>Hi, I am Lam</Typography>
                <Typography variant='h5' component="h2" align='center' sx={{ 'width': '100%' }}>You have visited my personal website</Typography>
                <Typography variant='h6' component="h3" align='center' sx={{ 'width': '100%' }}>
                    I am still building things <BuildIcon sx={{ 'marginBottom': '-5px'}}/> right now
                </Typography>
                <TextField label={`Support you have given :)`} value={voteValue} sx={{ 'marginTop': '2rem'}}/>
                <Button variant='contained' onClick={() => { incrementVoteValue() }} sx={{ 'marginTop': '1rem'}}>
                    <MyHeart/>Support me! <MyHeart/>
                </Button>
                { voteValue >= 10 && 
                    <Typography variant='h6' sx={{ 'marginTop': '1rem', 'color': 'green'}}>
                        Wow, Thanks so much for clicking me over 10 times :)
                    </Typography>
                }
                { voteValue >= 25 && 
                <Typography variant='h2' sx={{ 'marginTop': '1rem', 'color': 'red', 'textShadow': '2px 2px #555555'}}>
                    25 times... :O
                </Typography>
                }
                { voteValue >= 50 && <>

                <Typography variant='h3' align='center' sx={{ 'marginTop': '1rem', 'color': 'blue'}}>
                    50!! 
                </Typography>
                <Typography variant='h5' align='center' sx={{ 'color': 'blue'}}>
                    <Divider sx={{'borderColor': 'white'}}/>
                    You win, here&apos;s a song I liked recently for a reward.
                    <Divider sx={{'borderColor': 'white'}}/>
                    I hope you enjoyed clicking the button
                </Typography>
                <Divider sx={{'borderColor': 'white', 'height': '3rem'}}/>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/5LbFdY6vGsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                        </>}
            </Stack>
            </Card>
        </Box>
    )
}
