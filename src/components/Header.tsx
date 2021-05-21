import { useState } from "react";

interface Props {
  onSubmit: (event: string) => void;
}

function Header({onSubmit}: Props) {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="Header">
      <form>
        <input type="text" placeholder="Search by keyword..."  onChange={(e) => setKeyword(e.target.value)} />
        <button type="submit" onClick={() => onSubmit(keyword)}>Search</button>
      </form>
    </div>
  );
}

export default Header;
