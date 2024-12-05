import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
