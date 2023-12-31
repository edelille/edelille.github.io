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

import BuildIcon from '@mui/icons-material/Build';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react'

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
                <Typography variant='subtitle1' align='center' sx={{ 'marginBottom' : '1rem'}}>A Software Developer by Profession</Typography>
                <Typography variant='h5' component="h2" align='center' sx={{ 'width': '100%' }}>You have visited my personal website</Typography>
                <Typography variant='h6' component="h3" align='center' sx={{ 'width': '100%' }}>
                    I am still building things <BuildIcon sx={{ 'marginBottom': '-5px'}}/> right now
                </Typography>
                <TextField label={`Support you have given :)`} value={voteValue} sx={{ 'marginTop': '2rem'}}/>
                <Button variant='contained' onClick={() => { incrementVoteValue() }} sx={{ 'marginTop': '1rem'}}>
                    <MyHeart/>Support me! <MyHeart/>
                </Button>
                { voteValue >= 10 && 
                        <Fade in timeout={300}>
                    <Typography variant='h6' sx={{ 'marginTop': '1rem', 'color': 'green'}}>
                        Wow, Thanks so much for clicking me over 10 times :)
                    </Typography>
                        </Fade>
                }
                { voteValue >= 25 && 
                        <Fade in timeout={300}>
                <Typography variant='h2' sx={{ 'marginTop': '1rem', 'color': 'red', 'textShadow': '2px 2px #555555'}}>
                    25 times... :O
                </Typography>
                        </Fade>
                }
                { voteValue >= 50 && <>
                        <Fade in timeout={200}><div>
                <Typography variant='h3' align='center' sx={{ 'marginTop': '1rem', 'color': 'black'}}>
                    50!! 
                </Typography>
                        </div></Fade>

                        <Fade in timeout={700}><div>
                <Typography variant='h5' align='center' sx={{ 'color': 'black'}}>
                    <Divider sx={{'borderColor': 'white'}}/>
                    You win, here&apos;s a song I liked recently for a reward.
                    <Divider sx={{'borderColor': 'white'}}/>
                    I hope you enjoyed clicking the button
                </Typography>

                        </div></Fade>
                        <Fade in timeout={1500}><Stack alignItems='center'>
                <Divider sx={{'borderColor': 'white', 'height': '3rem'}}/>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5LbFdY6vGsQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
                <Typography variant='h4' align='center' sx={{ 'marginTop': '1rem', 'color': 'black'}}>
                    Check back in a little bit okay 🫵
                </Typography>
                <Typography variant='h6' align='center' sx={{ 'marginTop': '1rem', 'width': '40rem', 'color': 'black'}}>
                    Going to have some cool data science, math, visualizations and more! All at a low price of free ninety nine
                </Typography>
                        </Stack>
                        </Fade>
                        </>
                }
            </Stack>
            </Card>
        </Box>
    )
}
