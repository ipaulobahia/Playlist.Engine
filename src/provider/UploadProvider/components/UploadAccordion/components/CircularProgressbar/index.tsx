import { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar as CircularProgressbarUI } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const CircularProgressbar = () => {
  const [percentage, setPercentage] = useState<number>(0)

  useEffect(() => { simulateProgressBar(100, 100) }, [])

  function simulateProgressBar(total: number, intervalTime = 100) {
    return new Promise((resolve, reject) => {
      if (typeof total !== 'number' || total <= 0) {
        return reject('Total must be a number greater than zero.');
      }

      let progress = 0;

      const update = () => {
        progress += 1;
        const percentage = (progress / total) * 100;

        if (progress >= total) {
          clearInterval(interval);
          resolve(percentage.toFixed(2));
        }

        setPercentage(parseInt(percentage.toFixed(0)))
      };

      const interval = setInterval(update, intervalTime);
    });
  }

  return (
    <div className='size-10'>
      <CircularProgressbarUI
        className='block dark:hidden'
        styles={buildStyles({ pathColor: '#000', textColor: '#000', trailColor: "#CDD1D6", textSize: '25px' })}
        value={percentage}
        text={`${percentage}%`} />
      <CircularProgressbarUI
        className='hidden dark:block'
        styles={buildStyles({ pathColor: '#FFF', textColor: '#FFF', trailColor: "#CDD1D6", textSize: '25px' })}
        value={percentage}
        text={`${percentage}%`} />
    </div>
  )
}