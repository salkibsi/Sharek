import { ParsedFormValues } from './formTypes';
import { getCookie } from '../../../helpers';

const DEMO_FORM_ID = 'b360c926-ed24-473a-8418-ee1050ddbd06';
const HUBSPOT_UTK = 'hubspotutk';
const GOOGLE_CID = '_ga';

const getHubspotUserToken = () => getCookie(HUBSPOT_UTK) || undefined;
const getGoogleAnalyticsClientId = () => getCookie(GOOGLE_CID).slice(6);

const DEMO_REQUEST = 'demoRequest';

declare type EncodeBodyData = {
  pipelinevalue: number;
  email: string;
  google_analytics_client_id: string;
  numberofemployees?: number;
  numberofinvestments?: number;
  lead_form_source: typeof DEMO_REQUEST;
};

const encodeBody = (data: EncodeBodyData) =>
  JSON.stringify({
    fields: Object.entries(data).map(([name, value]) => ({ name, value })),
    context: { hutk: getHubspotUserToken() },
  });

export const submitToHubspot = ({ isCompany, email, size, value }: ParsedFormValues) => {
  const body = encodeBody({
    ...(isCompany ? { numberofemployees: size } : { numberofinvestments: size }),
    pipelinevalue: value,
    email,
    google_analytics_client_id: getGoogleAnalyticsClientId(),
    lead_form_source: DEMO_REQUEST,
  });
  return fetch(`/submit/6881367/${DEMO_FORM_ID}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });
};
