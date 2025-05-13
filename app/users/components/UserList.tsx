"use client";

import { User } from "@prisma/client";
import UserBox from "./UserBox";

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <aside
      className="
        fixed
        inset-y-0
        pb-20
        lg:pb-0
        lg:left-20
        lg:w-80
        lg:block    
        lg:overflow-y-auto
        border-r
        border-gray-200
        block
        w-full
        left-0
        "
    >
      <aside
        className="
    fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block 
    lg:overflow-y-auto border-r border-gray-200 block w-full left-0
  "
      >
        <div className="px-5">
          {/* Heading with underline */}
          <div className="pt-4 pb-3 mb-4 border-b border-gray-300">
            <div className="text-2xl font-bold text-neutral-800">People</div>
          </div>

          {/* List of users */}
          {items.map((item) => (
            <UserBox key={item.id} data={item} />
          ))}
        </div>
      </aside>
    </aside>
  );
};

export default UserList;
