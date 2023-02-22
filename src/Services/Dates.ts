import {DateTime, Interval} from 'luxon';

const ServerResetDt = DateTime.utc().startOf('day').plus({day: 1});

export function msTillReset(): number {
    console.log(ServerResetDt.toString());
    return Interval.fromDateTimes(DateTime.utc(), ServerResetDt).toDuration().as('milliseconds');
}
