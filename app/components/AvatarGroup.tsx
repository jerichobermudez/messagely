'use client';

import Image from "next/image";
import { User } from "@prisma/client";

interface AvatarGroupProps {
  users?: User[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  users = []
}) => {
  const slicedUsers = users.slice(0, 3);

  const positionMap = {
    // 0: 'top-0 left-[12px]',
    // 1: 'bottom-0',
    // 2: 'bottom-0 right-0',
    0: 'top-0 left-[0px]',
    1: 'top-2 left-2',
    2: 'bottom-0 right-0',
  }

  return (
    <div className="relative h-11 w-11">
      {slicedUsers.map((user, index) => (
        <div 
          key={user.id} 
          className={`
            absolute
            inline-block 
            rounded-full 
            overflow-hidden
            h-[30px]
            w-[30px]
            ${positionMap[index as keyof typeof positionMap]}
          `}>
            <Image
              fill
              src={user?.image || '/images/default.png'}
              alt="Avatar"
            />
        </div>
      ))}
    </div>
  );
}

export default AvatarGroup;
