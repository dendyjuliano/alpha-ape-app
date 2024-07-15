import { Grid } from "antd";

type useBreakpoint = {
  isDekstop: boolean;
};

export default function useBreakpoint(): useBreakpoint {
  const { useBreakpoint } = Grid;
  const { md: isDekstop } = useBreakpoint();

  return {
    isDekstop: !!isDekstop,
  };
}
