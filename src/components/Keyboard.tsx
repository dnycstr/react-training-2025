interface RedDivProps {
    onClick?: () => void;
    children?: React.ReactNode;
  }
  
  export const Keyboard: React.FC<RedDivProps> = ({ children, onClick }) => {
    return <button onClick={onClick} className="keyboard-container">{children}</button>;
  };
  