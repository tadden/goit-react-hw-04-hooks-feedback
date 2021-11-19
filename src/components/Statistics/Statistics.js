import { useState } from 'react';
import Options from '../Options';
import Notification from '../Notification';
import s from './Statistic.module.css'

export default function Statistics() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = Object.keys({ good, neutral, bad });

    const totalFeedbacks = () => {
        const total = good + neutral + bad;
        return total;
    };

    const countPositiveFeedback = () => {
        const persantage = (good / totalFeedbacks()) * 100;
        return persantage.toFixed();
    };

   const onBtnClick = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

    return (
        <div className={s.container}>
            <Options
                options={options}
                onBtnClick={onBtnClick}
            />
            <>
                <h2 className={s.title}>Statistic</h2>
            </>

            {totalFeedbacks() === 0 ? <Notification /> : (
                <>
                    <p className={s.text}>
                        <span className={s.score}>Good:</span>
                        <span>{good}</span>
                    </p>
                    <p className={s.text}>
                        <span className={s.score}>Neutral:</span>
                        <span>{neutral}</span>
                    </p>
                    <p className={s.text}>
                        <span className={s.score}>Bad:</span>
                        <span>{bad}</span>
                    </p>
                    <p className={s.text}>
                        <span className={s.score}>Total:</span>
                        <span>{totalFeedbacks()}</span>
                    </p>
                    <p className={s.text}>
                        <span className={s.score}>Positive feedback: </span>
                        <span>{countPositiveFeedback()}%</span>
                    </p>
           
                </>
            )}
        </div>
    );
}