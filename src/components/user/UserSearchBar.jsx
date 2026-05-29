import { Search } from "lucide-react";
import { X } from "lucide-react";

function UserSearchBar({ onChange, query }) {
  return (
    <>
      <div className="border border-gray-200 py-2 px-3 rounded-lg flex justify-between items-center mb-5">
        <div className="flex items-center gap-2 w-full">
          <Search size={15} className="text-gray-400" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Tìm kiếm theo tên, skills, nơi làm việc,..."
            className="w-full focus:outline-0"
            onChange={(e) => onChange(e.target.value)}
            value={query}
          />
        </div>

        <X
          onClick={() => onChange("")}
          size={15}
          className={`text-red-700 hover:text-red-800 active:text-red-900 cursor-pointer ${query ? "" : "hidden"} `}
        />
      </div>
    </>
  );
}

export default UserSearchBar;
