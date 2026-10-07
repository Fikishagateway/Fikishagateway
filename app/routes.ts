import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/marketing-layout.tsx", [
    index("routes/home.tsx"),
  ]),
  route("terms-and-conditions", "routes/terms-and-conditions.tsx"),
] satisfies RouteConfig;
