interface RedDivProps {
  children?: React.ReactNode;
}

export const RedDiv: React.FC<RedDivProps> = ({ children }) => {
  return <div className="red-div">children</div>;
};
