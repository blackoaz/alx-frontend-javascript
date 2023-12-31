export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');

      return {
        status: 200,
        body: 'Success',
      };
    })
    .catch((error) => {
      console.error('Got an error from the API');
      return new Error();
    });
}
