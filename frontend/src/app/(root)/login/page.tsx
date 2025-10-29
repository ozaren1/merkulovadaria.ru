import { signIn, signUp } from '@@@/server/user';
import React from 'react';

interface Props {
  name?: string;
}

const Login: React.FC<Props> = ({ name }) => {
  return (
    <div className='flex flex-col gap-5'>
      <button onClick={signIn}>signIn</button>
      <button onClick={signUp}>signUp</button>
      </div>
  );
};

export default Login;