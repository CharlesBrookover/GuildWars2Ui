import {DateTime, Interval, Duration, DurationLikeObject} from 'luxon';

const ServerResetDt = DateTime.utc().startOf('day').plus({day: 1});

export function msTillReset(): number {
    return Interval.fromDateTimes(DateTime.utc(), ServerResetDt).toDuration().as('milliseconds');
}



export function DurationInMs(duration: DurationLikeObject): number {
    return Duration.fromObject(duration).as('milliseconds');
}
