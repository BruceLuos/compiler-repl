import { useState, useMemo } from "react";

export default function SortedList({ names }: { names: string[] }) {
  const [newNames, setNewNames] = useState<string[]>(names);
  
  // 这里使用useMemo方法错误，react-compiler会检测出来并提示eslint报错
  useMemo(() => {
    setNewNames(names);
  }, [names]);

  const sortedNames = newNames.toSorted();

  return (
    <ul>
      {sortedNames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
