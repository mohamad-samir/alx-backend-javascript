import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const { body: photoBody } = photoResponse;
      const { firstName, lastName } = userResponse;
      console.log(`${photoBody} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
