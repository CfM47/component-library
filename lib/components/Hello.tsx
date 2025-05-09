interface HelloProps {
  thing: string;
}

export const Hello = ({ thing }: HelloProps) => {
  return <div>Hello {thing}</div>;
};
