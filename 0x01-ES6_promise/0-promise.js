export default function getResponseFromAPI() { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: 'API response data' });
    }, 1000); 
  });
}
