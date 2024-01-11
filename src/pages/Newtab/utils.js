import { DAYS, MONTHS, CONDITIONS } from './constants';

export const getDate = () => {
  const date = new Date();
  const res = {
    month: '',
    weekday: '',
    day: '',
  };

  res.month = MONTHS[date.getMonth()];
  res.weekday = DAYS[date.getDay()];
  res.day = date.getDate();

  return res;
};

export const getTime = (is24hr) => {
  console.log(is24hr);
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  if (hh === 0 && !is24hr) {
    hh = 12;
  }

  if (hh > 12 && !is24hr) {
    hh = hh - 12;
  }

  hh = hh < 10 ? '0' + hh : hh;
  mm = mm < 10 ? '0' + mm : mm;

  return {
    time: hh + ':' + mm,
    seconds: ss,
  };
};

export const getCondition = (code) => {
  if (code === 1000) return 'sunny';
  if (code === 1003) return 'partlyCloudy';
  if (code >= 1006 && code <= 1087) return 'cloudy';
  if (code >= 1087 && code <= 1117) return 'snowy';
  if (code === 1035 && code <= 1147) return 'cloudy';
  if (code >= 1150 && code <= 1201) return 'rainy';
  if (code >= 1204 && code <= 1237) return 'snowy';
  if (code >= 1240 && code <= 1252) return 'rainy';
  if (code >= 1255 && code <= 1264) return 'snowy';
  if (code >= 1273 && code <= 1282) return 'stormy';
};

export const spanSplit = (word) => {
  return word
    .split('')
    .map((l) => `<span>${l}</span>`)
    .join('');
};

export const flatten = (obj) => {
  let flattened = [];

  obj.map((o) => {
    if ('children' in o) {
      if (Array.isArray(o['children'])) {
        Object.assign(flattened, flatten(o['children']));
        const res = {
          key: o.title,
          children: o.children,
        };
        flattened.push(res);
      }
    }
  });

  return flattened;
};
