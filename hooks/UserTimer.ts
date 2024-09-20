import { useAppSelector } from "@/redux/hooks";
import { useState, useEffect, useRef, useCallback } from "react";

const useTimer = () => {
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [time, setTime] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<any>(null);
  const board = useAppSelector((state) => state.card.board);

  // Start the timer
  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
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
    setIsEnd(false);
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(board?.duration!);
  }, [board, setTime]);

  useEffect(() => {
    if (board) {
      reset();
    }
  }, [board, reset]);

  useEffect(() => {
    if (time === 0) {
      setIsEnd(true);
      setIsRunning(false);
    }
  }, [time]);

  // Cleanup the interval on component unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { time, isRunning, start, stop, reset, isEnd };
};

export default useTimer;
