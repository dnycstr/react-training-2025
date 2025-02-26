interface HDivProps {
  children?: React.ReactNode;
}

export const HDiv: React.FC<HDivProps> = ({ children }) => {
  return <div className="horizontal-div-container">{children}</div>;
};
