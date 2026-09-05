import "react";

declare module "react" {
  interface CSSProperties {
    "--light-color"?: string;
    "--traffic-light-direction"?: string;
  }
}
