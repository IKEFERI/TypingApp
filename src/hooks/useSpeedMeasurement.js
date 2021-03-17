import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSpeed } from "../redux/actions";

export default function useSpeedMeasurement() {
  const dispatch = useDispatch()

  const [currentSpeed, setCurrentSpeed] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [timerId, setTimerId] = useState(null)

  const { allChars, passedChar, currentChar, measurementFrequencyInSeconds } = useSelector(state => state.appState)

  const getTime = () => (new Date()).getTime()

  useEffect(() => {
    const deltaTime = (getTime() - startTime) / 1000
    setCurrentSpeed(Math.round(passedChar / deltaTime * 60) || 0)
  }, [timerId, startTime])

  const ticking = useCallback(() => setTimerId(setTimeout(ticking, measurementFrequencyInSeconds * 1000)), [measurementFrequencyInSeconds])

  useEffect(() => {
    if (currentChar === 1 && !startTime) {
      setStartTime((new Date()).getTime());
      ticking()
    }

  }, [currentChar, startTime, ticking]);

  useEffect(() => {
    if ((passedChar + 1)  === allChars) {
      dispatch(setSpeed(currentSpeed))
      clearTimeout(timerId)
    }
  }, [passedChar, allChars, dispatch, currentSpeed, timerId])

  return {
    speed: currentSpeed
  }
}