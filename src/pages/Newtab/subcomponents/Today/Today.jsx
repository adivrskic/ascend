import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StateContext } from '../../context/StateProvider';
import { useFetch } from '../../hooks/useFetch';
import { getDate, getTime, getCondition } from '../../utils';
import { icons } from '../../icons';
import './today.scss';

const Today = () => {
  const [coords, setCoords] = useState();
  const [is24hr, setIs24hr] = useState(false);
  const [time, setTime] = useState(getTime(false)?.time);
  const [seconds, setSeconds] = useState(0);
  const { day, month, weekday } = getDate();
  const [unit, setUnit] = useState('f');
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const { time, seconds } = getTime(is24hr);
      setTime(time);
      setSeconds(seconds);
    }, 1000);

    () => clearInterval(timer);
  }, []);

  const { data, loading, error } = useFetch(
    `http://api.weatherapi.com/v1/forecast.json?key=add869602f154c0fa89151047240501&q=${coords?.lat},${coords?.long}&days=5&aqi=no&alerts=no`
  );

  const condition = getCondition(data?.current?.condition?.code);

  const onSuccess = (pos) => {
    setCoords({ lat: pos.coords.latitude, long: pos.coords.longitude });
  };
  const onError = async (err) => {};

  const toggleUnit = () => {
    unit === 'f' ? setUnit('c') : setUnit('f');
  };

  const setLoaderPosition = (e) => {
    const loader = document.querySelector('svg');
    const x = e.pageX;
    const y = e.pageY;

    loader.style.top = y + 13;
    loader.style.left = x + 3;
  };

  return (
    <div className="ascend-today">
      <div
        className="ascend-time"
        onClick={() => setIs24hr(!is24hr)}
        style={{
          '--seconds': `${(seconds / 60) * 100}%`,
        }}
      >
        {time.split('').map((char, index) => {
          return <span key={index}>{char}</span>;
        })}
      </div>
      <div className="ascend-weather-date">
        <div
          className="ascend-weather"
          onClick={() => toggleUnit()}
          onMouseOver={() => setLoader(true)}
          onMouseOut={() => setLoader(false)}
          onMouseMove={(e) => setLoaderPosition(e)}
        >
          <svg className={`svg ${loader ? 'loading' : ''}`}>
            <circle cx="50%" cy="50%" r="20" />
          </svg>
          <div>
            <div className="ascend-weather-icon">{icons[condition]}</div>
            <div className="ascend-weather-temp">
              {unit === 'f' ? data?.current?.temp_f : data?.current?.temp_c}
              {unit === 'f' ? '°F' : '°C'}{' '}
            </div>
          </div>
          <div className="ascend-weather-loc">
            {data?.location?.name}, {data?.location?.region}
          </div>
        </div>

        <div className="ascend-date">
          <div className="ascend-weekday">{weekday}</div>
          <div className="ascend-day">
            {month} {day}
          </div>
        </div>
      </div>
      {showModal ? createPortal(<div>TEST</div>, document.body) : null}
    </div>
  );
};

export default Today;
