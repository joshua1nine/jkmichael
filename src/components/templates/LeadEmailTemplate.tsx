import * as React from "react";

export type LeadEmailTemplateProps = {
  name: string;
  email: string;
  body: string;
};

export const LeadEmailTemplate: React.FC<Readonly<LeadEmailTemplateProps>> = ({
  name,
  email,
  body,
}) => (
  <div>
    <h1>New lead: {name}!</h1>
    <h2>{email}</h2>
    <p>{body}</p>
  </div>
);

export default LeadEmailTemplate;
