import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};


const components = {
  Image,
  Callout, 
  p: ({ className, ...props } : {className?:string} & HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} style={{ fontSize: '0.5em' } } />;
}