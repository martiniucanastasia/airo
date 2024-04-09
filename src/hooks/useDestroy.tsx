import { useEffect, useState } from 'react';

const useDestroy = (isActive: boolean, timeToDestroy: number) => {
  const [isDestroyed, setIsDestroyed] = useState(true);

  useEffect(() => {
    if (!isActive) {
      setTimeout(() => {
        setIsDestroyed(true);
      }, timeToDestroy);
    } else {
      setIsDestroyed(false);
    }
  }, [isActive]);

  return { isDestroyed };
};

export default useDestroy;
