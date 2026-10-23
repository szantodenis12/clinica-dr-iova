import type { ComponentType } from "react";
import cand from "./cand-mergem-la-psihiatru";
import psihiatru from "./psihiatru-psiholog-psihoterapeut-diferente";
import repere from "./repere-dezvoltare-limbaj-copii-0-5-ani";
import evaluare from "./evaluare-psihiatrica-copil-ce-presupune";
import consultatie from "./consultatie-psihiatrie-cas-bilet-trimitere";
import aviz from "./aviz-psihologic-permis-arma-pasi";

/** slug -> article body (JSX of <article class="art-body prose">). Add a line here for every post in src/data/blog.ts. */
export const blogBodies: Record<string, ComponentType> = {
  "cand-mergem-la-psihiatru": cand,
  "psihiatru-psiholog-psihoterapeut-diferente": psihiatru,
  "repere-dezvoltare-limbaj-copii-0-5-ani": repere,
  "evaluare-psihiatrica-copil-ce-presupune": evaluare,
  "consultatie-psihiatrie-cas-bilet-trimitere": consultatie,
  "aviz-psihologic-permis-arma-pasi": aviz,
};
