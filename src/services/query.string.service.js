import queryString from 'query-string';

export default function(query) {
  const parsed = queryString.parse(query);
  return parsed;
}
