import moment from "moment";

export const renderWithBreaks = (value: string | undefined) => {
  return value ? value.replace(/(\r\n|\r|\n)/g, "<br />") : "";
};

export const formatDate = (date: string | undefined) => {
  return date ? moment(date).format("MM/DD/YYYY") : "";
};

export const strToCamelCase = (value: string | undefined) => {
  return value ? value.replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
  .replace(/\s/g, '')
  .replace(/^(.)/, function($1) { return $1.toLowerCase(); }) : "";
}