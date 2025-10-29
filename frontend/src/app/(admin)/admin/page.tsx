import React from 'react';

interface Props {
  name?: string;
}

const ComponentName: React.FC<Props> = ({ name }) => {
  return (
    <div>
      /* Your JSX here */
    </div>
  );
};

export default ComponentName;