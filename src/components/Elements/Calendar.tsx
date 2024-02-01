import { useEffect, useState } from "react";
import {
  format,
  getDay,
  getDate,
  getMonth,
  getYear,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  getWeek,
  eachWeekOfInterval,
  eachDayOfInterval
} from 'date-fns';
import { pl } from 'date-fns/locale';


interface DateInfo {
  dzisiaj: string;
  dzienTygodnia: number;
  dzienMiesiaca: number;
  numerMiesiaca: number;
  rok: number;
  nazwaMiesiaca: string;
  numerTygodniaRoku: number;
  poczatekMiesiaca: number;
  koniecMiesiaca: number;
  poczatekTygodnia: string;
  ileTygodniWMiesiacu: number;
}

interface IWeek {
  week: number;
  Monday: number | null;
  Tuesday: number | null;
  Wednesday: number | null;
  Thursday: number | null;
  Friday: number | null;
  Saturday: number | null;
  Sunday: number | null;
  lokalizacja: string;
}


const Calendar = () => {

  const [today, setToday] = useState<Date>(new Date());
  const [dateObj, setDateObj] = useState<DateInfo>({
    dzisiaj: "",
    dzienTygodnia: 0,
    dzienMiesiaca: 0,
    numerMiesiaca: 0,
    rok: 0,
    nazwaMiesiaca: "",
    numerTygodniaRoku: 0,
    poczatekMiesiaca: 0,
    koniecMiesiaca: 0,
    poczatekTygodnia: "",
    ileTygodniWMiesiacu: 0,
  });
  const [monthName, setMonthName] = useState<string>('');
  const [year, setYear] = useState<number>(0);
  const [monthArr, setMonthArr] = useState<IWeek[]>([]);


  const randomNames = ["Ted", "Adam", "Ela", "Anna", "Tomek"];

  const months = ['Styczeń','Luty','Marzec','Kwiecien','Maj','Czerwiec','Lipiec','Sierpien','Wrzesien','Pazdziernik','Listopad','Grudzien'];
  useEffect(()=>{

    const date = {
      dzisiaj: format(today, 'dd.MM.yyyy'),
      dzienTygodnia: getDay(today) + 1, // W date-fns niedziela to 0, więc dodajemy 1
      dzienMiesiaca: getDate(today),
      numerMiesiaca: getMonth(today) + 1, // getMonth zwraca miesiące od 0 do 11
      rok: getYear(today),
      nazwaMiesiaca: format(today, 'MMMM', { locale: pl }),
      numerTygodniaRoku: getWeek(today, { weekStartsOn: 1 }), // Ustawiamy pierwszy dzień tygodnia na poniedziałek
      poczatekMiesiaca: startOfMonth(today).getDay(),
      koniecMiesiaca: endOfMonth(today).getDate(),
      poczatekTygodnia: startOfWeek(today, { weekStartsOn: 1 }).getDate(),
      ileTygodniWMiesiacu: eachWeekOfInterval({ start: startOfMonth(today), end: endOfMonth(today) }, { weekStartsOn: 1 }).length,
      test: eachWeekOfInterval({ start: startOfMonth(today), end: endOfMonth(today) }, { weekStartsOn: 1 }),
    };
    setMonthName(months[getMonth(today)]);
    setYear(getYear(today));
    setDateObj(date)
    console.log("date", date);
    // prepareWeeksArray();
    generateWeeksArray(date.rok, date.numerMiesiaca);
  },[today]);


  function generateWeeksArray(year, month) {
    const startDate = startOfMonth(new Date(year, month - 1));
    const endDate = endOfMonth(startDate);
    const days = eachDayOfInterval({ start: startDate, end: endDate });

    const weeks: IWeek[] = [];
    let week: IWeek = {
        week: 0,
        Monday: null,
        Tuesday: null,
        Wednesday: null,
        Thursday: null,
        Friday: null,
        Saturday: null,
        Sunday: null,
        lokalizacja: ''
    };

    days.forEach(day => {
        // Używamy formatowania angielskiego bez lokalizacji
        const dayOfWeek = format(day, 'EEEE');

        if (dayOfWeek === 'Monday' || !Object.keys(week).length) {
            week = { 
                week: getWeek(day), 
                Monday: null, 
                Tuesday: null, 
                Wednesday: null, 
                Thursday: null, 
                Friday: null, 
                Saturday: null, 
                Sunday: null, 
                lokalizacja: randomNames[Math.floor(Math.random() * randomNames.length)]
            };
        }

        week[dayOfWeek] = day.getDate();

        if (dayOfWeek === 'Sunday') {
            weeks.push(week);
        }
    });

    // Dodaj ostatni tydzień, jeśli miesiąc kończy się w dniu innym niż niedziela
    if (format(endDate, 'EEEE') !== 'Sunday') {
        weeks.push(week);
    }
    console.log("weeks", weeks);
    setMonthArr(weeks);
}
 

  const handlePreviousMonth = () => {
    setToday(prevToday => {
      const year = prevToday.getFullYear();
      const month = prevToday.getMonth();
      // Obsługa zmiany roku
      const newYear = month === 0 ? year - 1 : year;
      // Ustawienie na pierwszy dzień poprzedniego miesiąca
      const newMonth = month === 0 ? 11 : month - 1;

      return new Date(newYear, newMonth, 1);
    });
  };

  const handleNextMonth = () => {
    setToday(prevToday => {
      const year = prevToday.getFullYear();
      const month = prevToday.getMonth();
      const newYear = month === 11 ? year + 1 : year;
      const newMonth = month === 11 ? 0 : month + 1;

      return new Date(newYear, newMonth, 1);
    });
  };

  return(
    <div>
      <div>
        <button onClick={handlePreviousMonth}>Poprzedni miesiąc</button>
        <button onClick={handleNextMonth}>Następny miesiąc</button>
      </div>
      <div>
        <span>{monthName} {year} - {dateObj.ileTygodniWMiesiacu}</span>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Tydzień</th>
              <th>Poniedziałek</th>
              <th>Wtorek</th>
              <th>Środa</th>
              <th>Czwartek</th>
              <th>Piątek</th>
              <th>Sobota</th>
              <th>Niedziela</th>
              <th>Lokalizacja</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>PL</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Calendar;
