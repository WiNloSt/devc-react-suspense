import '../src/App.css'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale(
  {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'Just now',
      m: '1 min',
      mm: '%d mins',
      h: '1 hr',
      hh: '%d hrs',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    }
  },
  null,
  true
)

dayjs.extend(relativeTime)
