enum DaysOFWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(dayOfWeek: DaysOFWeek): boolean {
  return dayOfWeek === DaysOFWeek.Sunday || dayOfWeek === DaysOFWeek.Saturday;
}

console.log(isWeekend(DaysOFWeek.Monday));
