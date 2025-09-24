export function stringify(data: any): string {
  if (!data && data !== 0) {
    return '';
  }

  switch (typeof data) {
    case 'object':
      // return objectToString(data);
      try {
        return JSON.stringify(data);
      } catch (e) {
        console.log(e);
        return '';
      }

    case 'string':
      return data;

    case 'boolean':
      return data ? '1' : '';

    default:
      return data.toString();
  }
}

/*
function objectToString(data: object): string {
  try {
    return JSON.stringify(data);
  } catch (e) {
    console.log(e);
    return '';
  }
}
*/
