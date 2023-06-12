import { Box, Button, Slider, Typography } from '@mui/material'
import { useContext, useRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TimeContext } from '../contexts/TimeContext';
 
interface Props {
    setShowConfig: React.Dispatch<React.SetStateAction<boolean>>
}

export const TimerConfig = ({setShowConfig}: Props) => {
  const {time, setTime} = useContext(TimeContext)
  const showValue = useRef(time);

  const handleChange = (event: Event, newValue: number| number[])=>{
    showValue.current = newValue as number;
    setTime(newValue as number);
  }
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <Typography sx={{ textAlign: "center" }}>
        Minutos:{showValue.current}
      </Typography>
      <Slider value={time} onChange={handleChange}></Slider>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => setShowConfig(true)}
      >
        Volver
      </Button>
    </Box>
  );
}
