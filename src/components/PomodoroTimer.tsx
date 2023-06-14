import { Box, Button, CircularProgress, Typography } from "@mui/material"
import { useContext, useEffect, useRef, useState } from "react"
import { TimeContext } from "../contexts/TimeContext"
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const PomodoroTimer = () => {
const { time } = useContext(TimeContext)
  const secondsLeft = useRef(0);
  const minutesLeft = useRef(time);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(20);
  const totalSecondsLeft = useRef(time * 60);

  const handleStart = ()=> {
    setStart(true);
    setStop(false);
  }
    
  const handleStop = ()=> {
    setStop(true);
    setStart(false);
  }
  
  useEffect(() => {
    const interval = setInterval(()=>{
        if(stop){ return }
        if(secondsLeft.current === 0){
            secondsLeft.current = 59;
            totalSecondsLeft.current--;
            setSeconds(59)
            minutesLeft.current--;
            setMinutes(minutesLeft.current)
        }else{
            secondsLeft.current--;
            totalSecondsLeft.current--;
            setSeconds(secondsLeft.current)
        }
        console.log(totalSecondsLeft.current)
    },1000)
    return () => clearInterval(interval)
  }, [start, stop]);

  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        size={300}
        variant="determinate"
        value={(totalSecondsLeft.current / (time * 60)) * 100}
      />
      <Typography
        variant="h3"
        sx={{
          color: "#1769aa",
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
          position: "absolute",
          top: "37%",
          left: "30%",
        }}
      >
        {minutesLeft.current < 10 ? "0" + minutesLeft.current : minutesLeft.current}:
        {secondsLeft.current < 10
          ? "0" + secondsLeft.current
          : secondsLeft.current}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {stop && <Button onClick={() => handleStart()} startIcon={<PlayArrowIcon/>} variant="contained" sx={{m:1}}>
          Start
        </Button>}
        {start && <Button onClick={() => handleStop()} startIcon={<PauseIcon/>} variant="contained" sx={{m:1}}>
          Pause
        </Button>}
      </Box>
    </Box>
  );
}
