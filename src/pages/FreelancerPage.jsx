import SectionPage from "../components/layout/SectionPage";
import UserProfile from "../components/user/UserProfile";
import users from "../data/user";
import UserSearchBar from "../components/user/UserSearchBar";
import { use, useState } from "react";

function FreeLancerPage() {
  const [query, setQuery] = useState("");

  const lowerCaseQuery = query.toLocaleLowerCase();
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLocaleLowerCase().includes(lowerCaseQuery) ||
      user.live.toLocaleLowerCase().includes(lowerCaseQuery) ||
      user.skills.some((s) => s.toLocaleLowerCase().includes(lowerCaseQuery))
    );
  });

  return (
    <>
      <SectionPage title="Freelancer Page">
        <UserSearchBar query={query} onChange={setQuery} />
        {filteredUsers?.length > 0 ? (
          <>
            {query && (
              <p className="mb-5">Có "{filteredUsers.length}" kết quả dựa theo tìm kiếm</p>
            )}
            
            {filteredUsers.map((user, index) => (
              <UserProfile key={index} user={user} />
            ))}
          </>
        ) : (
          <p className="text-gray-500 flex justify-center">
            Không có user "{query}" theo kết quả tìm kiếm
          </p>
        )}
      </SectionPage>
    </>
  );
}

export default FreeLancerPage;
