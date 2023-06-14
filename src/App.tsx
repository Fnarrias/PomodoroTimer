import { Button, Container, IconButton } from "@mui/material"
import { PomodoroTimer } from "./components/PomodoroTimer"
import { TimerConfig } from "./components/TimerConfig"
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";
import { TimeProvider } from "./contexts/TimeProvider";


function App() {
  const [showConfig, setShowConfig] = useState(true)
  const handleShowConfig = ()=>{
    setShowConfig(showConfig ? false : true)
  }
  return (
    <TimeProvider>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        maxWidth="md"
      >
        {showConfig ? (
          <PomodoroTimer />
        ) : (
          <TimerConfig setShowConfig={setShowConfig} />
        )}
        {showConfig && (
          <Button startIcon={<SettingsIcon />} onClick={handleShowConfig} variant="contained" color="primary">Config</Button>
        )}
      </Container>
    </TimeProvider>
  );
}

export default App
