import type { MDXComponents } from "mdx/types";
import { Placeholder } from "@/components/placeholder";
import { Stages } from "@/components/stages";

const components: MDXComponents = {
  Placeholder,
  Stages,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
