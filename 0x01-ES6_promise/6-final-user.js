import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userSignup = signUpUser(firstName, lastName);
  const userPhoto = uploadPhoto(fileName);
  return Promise.allSettled([userSignup, userPhoto])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
