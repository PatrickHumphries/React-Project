import { FormEvent, useState } from "react";
import { Event } from "../model/Event";

interface Props {
  onSubmit: (event: Event) => void;
}

function Header({onSubmit}: Props) {
  const [keyword, setKeyword] = useState("");

    function handleSubmit(e:FormEvent){
    e.preventDefault();
    setKeyword(keyword);
}

  return (
    <div className="Header" onSubmit={handleSubmit}>
      <form>
        <input type="text" placeholder="Search by keyword..."  onChange={(e) => setKeyword(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Header;
