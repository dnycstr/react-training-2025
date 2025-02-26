interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div>
      <div> Sample Component Props</div>
      <div>{children}</div>
    </div>
  );
};
