import React, { FunctionComponent, useEffect, useState } from "react";

type AllowType = "left" | "right";

interface IProps {
  name: string;
  dir: AllowType;
  phone?: number;
}

const Typescript: FunctionComponent<IProps> = ({ name, phone, dir }) => {
  const [newName, setNewName] = useState<string>(name);

  useEffect(() => {
    setNewName("Mike");
  });

  return (
    <div className="Typescript">
      <p>I'm typsescript</p>
      {name}
      {dir}
      {newName}
      {phone && phone}
    </div>
  );
};

export default Typescript;
