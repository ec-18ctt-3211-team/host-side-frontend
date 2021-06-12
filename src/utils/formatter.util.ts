interface ITimeFormatter {
  lang?: string;
  options?: Intl.DateTimeFormatOptions;
  timestamp: number | Date;
}

export const dateTimeFormatter = ({
  lang = 'en-US',
  options,
  timestamp,
}: ITimeFormatter) => new Intl.DateTimeFormat(lang, options).format(timestamp);
