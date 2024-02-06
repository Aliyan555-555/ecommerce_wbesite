
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
 function MyApp() {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{fontSize:'2rem'}} className={"w-full text-Dashboard flex items-center justify-center h-screen"}>
      
      <Calendar  onChange={(e)=>onChange(e)} value={value} />
    </div>
  );
}
export default MyApp;