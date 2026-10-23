import type { ReactNode } from "react";
import * as psihiatrieAdulti from "./psihiatrie-adulti";
import * as psihiatriePediatrica from "./psihiatrie-pediatrica";
import * as neurologie from "./neurologie";
import * as psihologieClinica from "./psihologie-clinica";
import * as psihoterapieIntegrativa from "./psihoterapie-integrativa";
import * as terapieEmdr from "./terapie-emdr";
import * as logopedie from "./logopedie";
import * as evaluareaCopiilor from "./evaluarea-copiilor";
import * as consilierePsihologica from "./consiliere-psihologica";
import * as evaluariComisii from "./evaluari-comisii";
import * as avizPsihologicPortArma from "./aviz-psihologic-port-arma";
import * as consultatiiCas from "./consultatii-cas";

export type ServiceContent = { Body: () => ReactNode; kf: ReactNode[] };

/** slug -> content module (static imports, so every page is bundled at build time). */
export const contentBySlug: Record<string, ServiceContent> = {
  "psihiatrie-adulti": psihiatrieAdulti,
  "psihiatrie-pediatrica": psihiatriePediatrica,
  neurologie: neurologie,
  "psihologie-clinica": psihologieClinica,
  "psihoterapie-integrativa": psihoterapieIntegrativa,
  "terapie-emdr": terapieEmdr,
  logopedie: logopedie,
  "evaluarea-copiilor": evaluareaCopiilor,
  "consiliere-psihologica": consilierePsihologica,
  "evaluari-comisii": evaluariComisii,
  "aviz-psihologic-port-arma": avizPsihologicPortArma,
  "consultatii-cas": consultatiiCas,
};
