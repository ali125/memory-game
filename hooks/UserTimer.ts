import { useAppSelector } from "@/redux/hooks";
import { useState, useEffect, useRef, useCallback } from "react";

const useTimer = () => {
  const [time, setTime] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<any>(null);
  const board = useAppSelector((state) => state.card.board);

  // Start the timer
  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
  }, [isRunning]);

  // Stop the timer
  const stop = useCallback(() => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  }, [isRunning]);

  // Reset the timer
  const reset = useCallback(() => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(board?.duration!);
  }, [board]);

  useEffect(() => {
    if (board) {
      reset();
    }
  }, [board, reset]);

  // Cleanup the interval on component unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { time, isRunning, start, stop, reset };
};

export default useTimer;
