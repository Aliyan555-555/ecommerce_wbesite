import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Typography } from '@mui/material';
import Header from './PageHeader';

export default function Calender() {
  return (
    <div className='w-full h-full flex flex-col'>
      <Header type={'APP'} name={'Calender'} />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     
      <DateCalendar />
    
    </LocalizationProvider>
    </div>
  );
}
