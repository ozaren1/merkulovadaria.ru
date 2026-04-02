import React from 'react';
import Link from "next/link";

interface Props {
  name?: string;
}

const ComponentName: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <Link href="/admin/banner">mainBanner</Link>

    </div>
  );
};

export default ComponentName;