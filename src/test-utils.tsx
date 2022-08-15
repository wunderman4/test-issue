import { render, RenderOptions } from "@testing-library/react";
import { FC, ReactElement, ReactNode } from "react";

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
