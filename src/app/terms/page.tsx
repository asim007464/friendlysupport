import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/data/siteContact";

export const metadata: Metadata = {
  title: "Client Terms and Conditions | Friendly Support Limited",
  description:
    "Client Terms and Conditions for Friendly Support Limited companionship and practical support services.",
};

const companyFacts = [
  { label: "Company Name", value: "Friendly Support Limited" },
  { label: "Company Number", value: "16588810" },
  { label: "ICO Registration Number", value: "C1900441" },
  {
    label: "Registered Office",
    value:
      "Suite 2, Parkway 5, Parkway Business Centre, 300 Princess Road, Manchester, England, M14 7HR",
  },
];

function Section({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-heading text-xl font-bold text-[#1a3d3d]">
        {n}. {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-[#4a5568]">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading mb-3 text-3xl font-bold text-[#1a3d3d] sm:text-4xl">
              Client Terms and Conditions
            </h1>
            <p className="mb-8 text-[15px] text-[#4a5568]">
              Website version — last updated 10 August 2026
            </p>

            <div className="mb-12 rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm sm:p-8">
              <dl className="space-y-4 text-[15px]">
                {companyFacts.map((fact) => (
                  <div key={fact.label} className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-4">
                    <dt className="font-semibold text-[#1a3d3d]">{fact.label}</dt>
                    <dd className="text-[#4a5568]">{fact.value}</dd>
                  </div>
                ))}
                <div className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-4">
                  <dt className="font-semibold text-[#1a3d3d]">Email / Telephone</dt>
                  <dd className="text-[#4a5568]">
                    <a
                      href={`mailto:${SITE_EMAIL}`}
                      className="font-semibold text-[#1F7A7A] hover:underline"
                    >
                      {SITE_EMAIL}
                    </a>
                    {" | "}
                    <a
                      href={`tel:${SITE_PHONE_TEL}`}
                      className="font-semibold text-[#1F7A7A] hover:underline"
                    >
                      {SITE_PHONE_DISPLAY}
                    </a>{" "}
                    (Phone / WhatsApp)
                  </dd>
                </div>
                <div className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-4">
                  <dt className="font-semibold text-[#1a3d3d]">Website</dt>
                  <dd className="text-[#4a5568]">friendlysupportlimited.co.uk</dd>
                </div>
              </dl>
            </div>

            <div className="space-y-10">
              <Section n={1} title="Introduction">
                <p>
                  These Terms and Conditions explain the basis on which Friendly Support Limited
                  provides companionship and practical support services. Please read them carefully
                  before services begin.
                </p>
                <p>These Terms should be read together with any:</p>
                <BulletList
                  items={[
                    "quotation;",
                    "Booking Confirmation;",
                    "Service Plan;",
                    "Privacy Notice;",
                    "cancellation information; and",
                    "other written terms specifically agreed with you.",
                  ]}
                />
                <p>
                  Where a specific written arrangement differs from these general Terms, the
                  specific written arrangement will normally apply to that particular service.
                </p>
              </Section>

              <Section n={2} title="About Friendly Support Limited">
                <p>
                  Friendly Support Limited provides friendly, respectful and practical companionship
                  services intended to help adults maintain independence, confidence, social contact
                  and enjoyment of everyday life.
                </p>
                <p>
                  Friendly Support Limited provides non-regulated companionship and practical
                  support.
                </p>
                <p className="font-semibold text-[#1a3d3d]">
                  We do not provide regulated personal care, nursing or medical treatment under
                  these Terms.
                </p>
              </Section>

              <Section n={3} title="Client and Customer">
                <p>
                  The Client is the person receiving the service. The Customer is the person who
                  enters into the agreement with Friendly Support Limited and is responsible for
                  payment. The Client and Customer may be the same person.
                </p>
                <p>
                  Where a relative, attorney, deputy or other representative enters into
                  arrangements on behalf of somebody else, Friendly Support Limited may request
                  appropriate evidence of authority where necessary.
                </p>
              </Section>

              <Section n={4} title="Services we may provide">
                <p>
                  Subject to the agreed Service Plan or Booking Confirmation, services may include:
                </p>
                <BulletList
                  items={[
                    "companionship;",
                    "conversation;",
                    "social visits;",
                    "walks;",
                    "hobbies and recreational activities;",
                    "shopping;",
                    "grocery collection;",
                    "ordinary errands;",
                    "accompanying clients to appointments;",
                    "accompanying clients to cafes or restaurants;",
                    "community, cultural or religious activities;",
                    "light household assistance;",
                    "laundry and ironing;",
                    "simple meal preparation;",
                    "sitting companionship;",
                    "companionship while family members or carers take a break;",
                    "authorised family updates;",
                    "extended companionship; and",
                    "other agreed non-regulated practical support.",
                  ]}
                />
                <p>Only services agreed with Friendly Support Limited form part of the contract.</p>
              </Section>

              <Section n={5} title="Personal care is not included">
                <p>
                  Friendly Support Limited does not provide regulated personal care through this
                  service.
                </p>
                <p>Companions must not provide physical assistance with:</p>
                <BulletList
                  items={[
                    "bathing or showering;",
                    "washing the body;",
                    "toileting;",
                    "continence care;",
                    "changing continence products;",
                    "dressing or undressing;",
                    "oral hygiene;",
                    "personal skin, hair or nail care;",
                    "physical assistance with feeding;",
                    "hoisting;",
                    "lifting or transferring a person; or",
                    "other regulated personal-care activities.",
                  ]}
                />
                <p>
                  Clients, relatives and representatives must not ask Companions to undertake these
                  activities privately or informally. If the Client&apos;s needs change, please
                  contact Friendly Support Limited so that the situation can be reviewed.
                </p>
              </Section>

              <Section n={6} title="Medical and nursing services">
                <p>Friendly Support Limited does not provide:</p>
                <BulletList
                  items={[
                    "medical diagnosis;",
                    "medical treatment;",
                    "nursing;",
                    "wound care;",
                    "injections;",
                    "clinical procedures;",
                    "clinical observations as a healthcare service; or",
                    "medical advice.",
                  ]}
                />
                <p>
                  A Companion may accompany a Client to an appointment and provide ordinary
                  practical assistance, but does not replace a doctor, nurse or other healthcare
                  professional.
                </p>
              </Section>

              <Section n={7} title="Medication">
                <p>
                  Friendly Support Limited does not operate a medication-administration or
                  medication-management service.
                </p>
                <p>Companions must not independently:</p>
                <BulletList
                  items={[
                    "select medication;",
                    "prescribe medication;",
                    "change medication;",
                    "alter doses;",
                    "change medication timings;",
                    "administer injections; or",
                    "make clinical decisions concerning medication.",
                  ]}
                />
                <p>
                  Where expressly agreed and appropriate, a Companion may provide a simple reminder
                  to a Client who remains independently responsible for managing and taking their
                  own medication.
                </p>
              </Section>

              <Section n={8} title="Initial service discussion">
                <p>
                  Before services begin, Friendly Support Limited may ask for information reasonably
                  necessary to provide the agreed service safely. This may include information
                  about:
                </p>
                <BulletList
                  items={[
                    "the support required;",
                    "routines and preferences;",
                    "hobbies and interests;",
                    "communication requirements;",
                    "mobility relevant to outings;",
                    "property access;",
                    "household risks;",
                    "emergency contacts;",
                    "pets;",
                    "allergies;",
                    "dietary requirements;",
                    "significant safety matters; and",
                    "other relevant circumstances.",
                  ]}
                />
                <p>
                  We may decline a requested service where we reasonably believe that it falls
                  outside our scope or cannot be provided safely or lawfully.
                </p>
              </Section>

              <Section n={9} title="Service Plan">
                <p>
                  Where appropriate, the agreed services will be recorded in a Service Plan, Booking
                  Confirmation or similar written arrangement. The Service Plan may be reviewed
                  where circumstances or the Client&apos;s needs change.
                </p>
                <p>
                  A Companion should not be asked to undertake substantially different duties
                  without prior agreement from Friendly Support Limited.
                </p>
              </Section>

              <Section n={10} title="Our standard charges">
                <div className="rounded-xl border border-[#e8ecec] bg-white p-5">
                  <p className="font-semibold text-[#1a3d3d]">£25 per hour</p>
                  <p>Minimum booking: 2 hours</p>
                  <p>Normal minimum charge: £50</p>
                </div>
                <p>
                  A different price or arrangement may apply where this has been agreed in writing.
                </p>
              </Section>

              <Section n={11} title="Quotations and packages">
                <p>
                  Where Friendly Support Limited provides a written quotation, fixed-price service,
                  package, extended visit or other special arrangement, the price stated in that
                  written agreement will apply. Any package or fixed-price arrangement will specify
                  what is included.
                </p>
              </Section>

              <Section n={12} title="Additional expenses">
                <p>
                  Unless expressly included in the agreed price, the Client or Customer is
                  responsible for reasonable third-party expenses incurred on the Client&apos;s
                  behalf. These may include:
                </p>
                <BulletList
                  items={[
                    "public-transport fares;",
                    "taxi fares;",
                    "parking charges;",
                    "admission or ticket costs;",
                    "food and refreshments;",
                    "shopping;",
                    "postage; and",
                    "other agreed purchases.",
                  ]}
                />
                <p>
                  Where reasonably practicable, significant expenses will be agreed in advance.
                </p>
              </Section>

              <Section n={13} title="Payment">
                <p>
                  Payment terms will be stated on the invoice, quotation or Booking Confirmation.
                  Payment should normally be made directly to Friendly Support Limited.
                </p>
                <p>
                  Clients should not make private payments directly to Companions for Friendly
                  Support Limited services. Invoices or receipts will be provided as appropriate.
                </p>
              </Section>

              <Section n={14} title="Overdue payments">
                <p>
                  Where payment becomes overdue, Friendly Support Limited may contact the Customer
                  requesting payment. Following reasonable notice, future non-emergency services
                  may be suspended until outstanding sums have been resolved. Any debt-recovery
                  action or charges will remain subject to applicable law.
                </p>
              </Section>

              <Section n={15} title="Cancelling an individual visit">
                <p>
                  We understand that plans sometimes change and ask Clients to provide as much
                  notice as reasonably possible.
                </p>
                <p>
                  <strong className="text-[#1a3d3d]">48 hours or more before the visit</strong>
                  <br />
                  No cancellation charge.
                </p>
                <p>
                  <strong className="text-[#1a3d3d]">
                    Between 24 and 48 hours before the visit
                  </strong>
                  <br />A charge of up to 50% of the booked visit may apply where Friendly Support
                  Limited has suffered a corresponding reasonable loss.
                </p>
                <p>
                  <strong className="text-[#1a3d3d]">
                    Less than 24 hours before the visit, or where no access is available when the
                    Companion attends
                  </strong>
                  <br />A charge of up to 100% of the booked visit may apply where Friendly Support
                  Limited has suffered a corresponding reasonable loss.
                </p>
                <p>
                  Cancellation charges are intended to reflect genuine losses and are not intended
                  to operate as penalties. Where Friendly Support Limited is reasonably able to
                  avoid or reduce the loss, this will be taken into account. Exceptional
                  circumstances may be considered individually.
                </p>
              </Section>

              <Section n={16} title="Statutory cancellation rights">
                <p>
                  Nothing in these Terms removes any cancellation rights provided by law. Where a
                  statutory cooling-off period applies, Friendly Support Limited will respect those
                  rights.
                </p>
                <p>
                  If a Customer expressly requests that services begin before the end of a statutory
                  cancellation period, Friendly Support Limited may begin providing those services.
                  Where services have already been supplied following such a request, the Customer
                  may be required to pay the amount lawfully due for services already provided.
                </p>
              </Section>

              <Section n={17} title="Cancellation by Friendly Support Limited">
                <p>
                  Where Friendly Support Limited cancels a visit and is unable to provide an agreed
                  replacement, the Client will not be charged for the service that was not supplied.
                  Where payment has already been received, Friendly Support Limited will normally:
                </p>
                <BulletList
                  items={[
                    "arrange a replacement visit;",
                    "issue a credit; or",
                    "refund the relevant amount.",
                  ]}
                />
              </Section>

              <Section n={18} title="Staff availability and continuity">
                <p>
                  We aim to provide reliable continuity and, wherever reasonably possible, the same
                  Companion or a small familiar team. However, a particular Companion cannot be
                  guaranteed.
                </p>
                <p>An alternative Companion may be provided because of:</p>
                <BulletList
                  items={[
                    "sickness;",
                    "annual leave;",
                    "emergency;",
                    "staff departure;",
                    "transport disruption;",
                    "training;",
                    "safeguarding concerns; or",
                    "other reasonable operational circumstances.",
                  ]}
                />
                <p>
                  Where reasonably practicable, Friendly Support Limited will notify the Client in
                  advance.
                </p>
              </Section>

              <Section n={19} title="Client responsibilities">
                <p>The Client and Customer agree, where relevant, to:</p>
                <BulletList
                  items={[
                    "provide accurate information reasonably required for the service;",
                    "notify Friendly Support Limited of important changes;",
                    "provide safe access to the property;",
                    "maintain a reasonably safe environment;",
                    "treat Companions respectfully;",
                    "disclose significant known hazards;",
                    "appropriately control pets where necessary;",
                    "advise us of significant infectious illness that may affect worker safety;",
                    "pay agreed charges; and",
                    "refrain from asking staff to undertake activities outside the agreed service scope.",
                  ]}
                />
              </Section>

              <Section n={20} title="Respect for staff">
                <p>
                  Violence, threats, serious harassment, discriminatory abuse, intimidation or
                  sexual misconduct towards Friendly Support Limited personnel will not be
                  tolerated. Where a Companion reasonably believes that they are unsafe, they may
                  leave. Friendly Support Limited may suspend or terminate services where necessary
                  to protect staff.
                </p>
              </Section>

              <Section n={21} title="Light household assistance">
                <p>Where agreed, light household assistance may include:</p>
                <BulletList
                  items={[
                    "dusting;",
                    "light vacuuming;",
                    "wiping accessible surfaces;",
                    "washing dishes;",
                    "laundry;",
                    "ironing;",
                    "changing bed linen where safe;",
                    "light tidying; and",
                    "simple meal preparation.",
                  ]}
                />
                <p>It does not normally include:</p>
                <BulletList
                  items={[
                    "heavy lifting;",
                    "moving heavy furniture;",
                    "specialist deep cleaning;",
                    "industrial cleaning;",
                    "post-construction cleaning;",
                    "hazardous-waste removal;",
                    "high-level ladder work; or",
                    "specialist cleaning requiring professional equipment.",
                  ]}
                />
              </Section>

              <Section n={22} title="Meal preparation">
                <p>
                  Companions may prepare or heat simple meals where agreed. Clients or their
                  Representatives should inform Friendly Support Limited of any relevant:
                </p>
                <BulletList
                  items={[
                    "food allergies;",
                    "intolerances;",
                    "religious dietary requirements;",
                    "medically relevant dietary restrictions; or",
                    "swallowing concerns.",
                  ]}
                />
                <p>
                  Friendly Support Limited does not provide clinical dietary or nutritional advice.
                </p>
              </Section>

              <Section n={23} title="Shopping and Client money">
                <p>
                  Where a Companion undertakes shopping for a Client, reasonable steps will be taken
                  to account for money spent and to return receipts and change where available.
                  Friendly Support Limited staff must not use Client money for personal purposes.
                </p>
                <p>
                  Any special arrangement involving bank cards, PINs, online banking or financial
                  accounts must be specifically approved by management and subject to appropriate
                  safeguards.
                </p>
              </Section>

              <Section n={24} title="Gifts and loans">
                <p>
                  Companions must not solicit gifts or borrow money from Clients. Clients and
                  families are asked not to place workers in an uncomfortable position by offering:
                </p>
                <BulletList
                  items={[
                    "substantial cash;",
                    "expensive gifts;",
                    "loans;",
                    "property;",
                    "investments; or",
                    "inheritance arrangements.",
                  ]}
                />
                <p>
                  Any significant proposed gift should be referred to Friendly Support Limited.
                </p>
              </Section>

              <Section n={25} title="Private arrangements with Companions">
                <p>
                  Friendly Support Limited&apos;s management, safeguarding procedures and insurance
                  arrangements apply to services booked through Friendly Support Limited. Clients
                  should therefore not make undisclosed private paid arrangements with Companions
                  supplied by Friendly Support Limited. Services arranged privately may fall outside
                  Friendly Support Limited&apos;s supervision and insurance.
                </p>
              </Section>

              <Section n={26} title="Transport">
                <p>A Companion may accompany the Client:</p>
                <BulletList
                  items={[
                    "on foot;",
                    "by bus or train;",
                    "by taxi;",
                    "by licensed private-hire vehicle; or",
                    "using another agreed form of transport.",
                  ]}
                />
                <p>
                  A Companion may transport a Client in their own vehicle only where Friendly
                  Support Limited has expressly authorised this and appropriate insurance and other
                  requirements have been confirmed.
                </p>
                <p>
                  Transport, parking, admission charges and similar expenses are not included unless
                  expressly agreed.
                </p>
              </Section>

              <Section n={27} title="Keys and home access">
                <p>
                  Where Friendly Support Limited accepts keys or access information, reasonable
                  precautions will be taken to protect them. Clients should provide clear
                  information regarding:
                </p>
                <BulletList
                  items={[
                    "keys;",
                    "alarm systems;",
                    "lock boxes;",
                    "door-entry codes; and",
                    "relevant home-security procedures.",
                  ]}
                />
                <p>Any known loss or security incident will be addressed promptly.</p>
              </Section>

              <Section n={28} title="Family updates">
                <p>
                  Where appropriate authority has been provided, Friendly Support Limited may
                  provide agreed updates to nominated relatives or representatives. These may
                  include:
                </p>
                <BulletList
                  items={[
                    "confirmation that a visit took place;",
                    "activities undertaken;",
                    "practical matters;",
                    "general non-clinical observations; and",
                    "concerns that reasonably require attention.",
                  ]}
                />
                <p>These updates are not medical reports or clinical assessments.</p>
              </Section>

              <Section n={29} title="Confidentiality">
                <p>Client information will be treated confidentially. Information may be shared where:</p>
                <BulletList
                  items={[
                    "the Client has authorised disclosure;",
                    "an authorised Representative is entitled to receive it;",
                    "sharing is reasonably necessary for the provision of services;",
                    "there is an emergency;",
                    "safeguarding concerns justify disclosure;",
                    "disclosure is required by law; or",
                    "another lawful basis applies.",
                  ]}
                />
              </Section>

              <Section n={30} title="Data protection and privacy">
                <p>
                  Friendly Support Limited processes personal information in accordance with
                  applicable UK data-protection law. A separate{" "}
                  <Link href="/privacy" className="font-semibold text-[#1F7A7A] hover:underline">
                    Privacy Notice
                  </Link>{" "}
                  will explain matters including:
                </p>
                <BulletList
                  items={[
                    "what information we collect;",
                    "why it is collected;",
                    "how it is used;",
                    "who it may be shared with;",
                    "how long it may be retained; and",
                    "the individual's applicable data-protection rights.",
                  ]}
                />
                <p>
                  Relevant health-related information will only be collected where there is an
                  appropriate reason for doing so.
                </p>
                <p>ICO Registration Number: C1900441</p>
              </Section>

              <Section n={31} title="Photographs, recordings and marketing">
                <p>
                  Friendly Support Limited will not intentionally use identifiable photographs,
                  recordings, testimonials or personal stories relating to a Client for advertising
                  or promotional purposes without appropriate permission. Consent for marketing
                  purposes is voluntary and is not a condition of receiving ordinary services.
                </p>
              </Section>

              <Section n={32} title="CCTV and recording in Client homes">
                <p>
                  Clients should inform Friendly Support Limited about indoor CCTV or other
                  recording systems where reasonably necessary to protect the privacy and dignity of
                  staff and comply with applicable law. Recording must not unlawfully intrude upon a
                  worker&apos;s reasonable expectation of privacy.
                </p>
              </Section>

              <Section n={33} title="Safeguarding">
                <p>
                  Friendly Support Limited takes suspected abuse, neglect, exploitation and coercion
                  seriously. Where a genuine safeguarding concern exists, Friendly Support Limited
                  may need to share relevant information with an appropriate authority or
                  professional. This may include:
                </p>
                <BulletList
                  items={[
                    "local authority safeguarding services;",
                    "police;",
                    "ambulance services;",
                    "healthcare professionals; or",
                    "another appropriate organisation.",
                  ]}
                />
                <p>
                  Where the law permits or requires it, protecting somebody from serious harm may
                  justify disclosure without the ordinary consent of a Client or family member.
                </p>
              </Section>

              <Section n={34} title="Emergencies">
                <p>
                  Friendly Support Limited is not an emergency service. Where a Companion reasonably
                  believes that there is an immediate danger to life or serious safety, they may
                  contact 999 or another appropriate emergency service. Friendly Support Limited may
                  also contact the Client&apos;s nominated emergency contact where appropriate.
                </p>
              </Section>

              <Section n={35} title="Accidents and incidents">
                <p>
                  Significant accidents or incidents occurring during the provision of services may
                  be recorded and investigated. Where appropriate, information may be shared with
                  the:
                </p>
                <BulletList
                  items={[
                    "Client;",
                    "Customer;",
                    "authorised Representative;",
                    "insurer;",
                    "emergency service; or",
                    "relevant authority.",
                  ]}
                />
              </Section>

              <Section n={36} title="Quality of service">
                <p>
                  Friendly Support Limited will provide contracted services with reasonable care and
                  skill. If a Client believes that a service has not been delivered appropriately,
                  they should contact us promptly so that we have a reasonable opportunity to
                  investigate and, where appropriate, put matters right.
                </p>
                <p>Nothing in these Terms limits statutory consumer rights.</p>
              </Section>

              <Section n={37} title="Complaints">
                <p>
                  Friendly Support Limited welcomes feedback and takes complaints seriously.
                </p>
                <p>Complaints may be made using the following details:</p>
                <p>
                  Friendly Support Limited
                  <br />
                  Email:{" "}
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="font-semibold text-[#1F7A7A] hover:underline"
                  >
                    {SITE_EMAIL}
                  </a>
                  <br />
                  Telephone / WhatsApp:{" "}
                  <a
                    href={`tel:${SITE_PHONE_TEL}`}
                    className="font-semibold text-[#1F7A7A] hover:underline"
                  >
                    {SITE_PHONE_DISPLAY}
                  </a>
                </p>
                <p>We aim to:</p>
                <BulletList
                  items={[
                    "acknowledge complaints appropriately;",
                    "investigate matters fairly;",
                    "maintain suitable records;",
                    "explain our conclusions; and",
                    "take reasonable remedial action where appropriate.",
                  ]}
                />
                <p>
                  A Client will not be treated unfairly for making a genuine complaint. You can also
                  use our{" "}
                  <Link href="/complaints" className="font-semibold text-[#1F7A7A] hover:underline">
                    complaints page
                  </Link>
                  .
                </p>
              </Section>

              <Section n={38} title="Damage to property">
                <p>
                  Companions are expected to take reasonable care while in a Client&apos;s home. Any
                  alleged accidental damage should be reported to Friendly Support Limited as soon
                  as reasonably practicable. We will investigate the circumstances appropriately.
                </p>
                <p>
                  Friendly Support Limited is not responsible for ordinary wear and tear or for loss
                  or damage not caused by our breach of contract or negligence.
                </p>
              </Section>

              <Section n={39} title="Valuable property">
                <p>
                  Clients are encouraged to keep substantial cash, valuable jewellery, important
                  documents and other high-value property securely stored. Any suspected theft
                  should be reported promptly to Friendly Support Limited and, where appropriate,
                  the police. Friendly Support Limited will cooperate reasonably with any legitimate
                  investigation.
                </p>
              </Section>

              <Section n={40} title="Liability">
                <p>
                  Friendly Support Limited is responsible for loss or damage where liability arises
                  under applicable law, including foreseeable loss caused by our breach of contract
                  or negligence.
                </p>
                <p>We are not responsible for loss caused solely by:</p>
                <BulletList
                  items={[
                    "circumstances outside our reasonable control;",
                    "materially inaccurate information provided to us; or",
                    "activities undertaken contrary to our reasonable advice and outside the agreed service.",
                  ]}
                />
                <p>
                  Nothing in these Terms excludes or restricts liability where it would be unlawful
                  to do so, including liability for death or personal injury caused by negligence or
                  for fraud.
                </p>
              </Section>

              <Section n={41} title="Insurance">
                <p>
                  Friendly Support Limited will maintain insurance appropriate to the services it
                  provides. Relevant details may be provided on reasonable request where
                  appropriate.
                </p>
              </Section>

              <Section n={42} title="Changes in Client needs">
                <p>
                  The Client or Representative should inform Friendly Support Limited where the
                  Client&apos;s needs materially change. Where a Client begins to require:
                </p>
                <BulletList
                  items={[
                    "regulated personal care;",
                    "substantial physical assistance;",
                    "medication management;",
                    "nursing;",
                    "medical treatment;",
                    "continuous clinical supervision; or",
                    "another service outside Friendly Support Limited's scope,",
                  ]}
                />
                <p>
                  we may recommend that an appropriately qualified or regulated provider is engaged.
                  Friendly Support Limited may continue to provide separate companionship alongside
                  another provider where responsibilities are clearly defined and the arrangement is
                  safe and appropriate.
                </p>
              </Section>

              <Section n={43} title="Hospital and appointment companionship">
                <p>
                  Where agreed and permitted by the relevant organisation, a Companion may accompany
                  or visit a Client in hospital or at another appointment. The Companion remains a
                  companionship worker and does not assume the responsibilities of clinical or
                  professional staff.
                </p>
              </Section>

              <Section n={44} title="Extended, overnight or live-in companionship">
                <p>
                  Extended-hours, overnight or live-in companionship requires a separate written
                  agreement. The arrangement should specify, where relevant:
                </p>
                <BulletList
                  items={[
                    "active companionship hours;",
                    "rest periods;",
                    "overnight expectations;",
                    "accommodation;",
                    "meals;",
                    "travel;",
                    "expenses;",
                    "household duties;",
                    "privacy arrangements; and",
                    "service boundaries.",
                  ]}
                />
                <p>
                  Extended presence does not convert Friendly Support Limited&apos;s service into
                  regulated personal care.
                </p>
              </Section>

              <Section n={45} title="Suspension of services">
                <p>
                  Friendly Support Limited may temporarily suspend services where reasonably
                  necessary because of:
                </p>
                <BulletList
                  items={[
                    "serious safety concerns;",
                    "safeguarding concerns;",
                    "violence or aggression;",
                    "unsafe premises;",
                    "significant infectious-health risks;",
                    "persistent non-payment;",
                    "substantial changes in Client needs; or",
                    "another serious reason preventing safe or lawful service delivery.",
                  ]}
                />
                <p>
                  We will communicate with the Client or Representative as soon as reasonably
                  practicable.
                </p>
              </Section>

              <Section n={46} title="Ending regular services">
                <p>
                  Unless a different notice period is stated in the Booking Confirmation, either
                  party may normally end an ongoing regular service arrangement by giving 7 days&apos;
                  written notice.
                </p>
                <p>
                  Friendly Support Limited may terminate or suspend services immediately, or on
                  shorter notice, where there is a serious reason including:
                </p>
                <BulletList
                  items={[
                    "violence;",
                    "serious threats;",
                    "serious harassment;",
                    "safeguarding concerns;",
                    "fraud or theft;",
                    "persistent non-payment following reasonable notice;",
                    "illegal activity;",
                    "repeated attempts to require prohibited personal care;",
                    "serious unsafe conditions; or",
                    "a breakdown in the professional relationship making continuation unreasonable.",
                  ]}
                />
              </Section>

              <Section n={47} title="Refunds">
                <p>
                  Where a Client has paid in advance for future services that Friendly Support
                  Limited will no longer provide, the appropriate unused amount will normally be
                  refunded or credited. This remains subject to any lawful amount due for:
                </p>
                <BulletList
                  items={[
                    "services already supplied; or",
                    "reasonable losses properly arising under the cancellation provisions.",
                  ]}
                />
              </Section>

              <Section n={48} title="Events outside our reasonable control">
                <p>
                  Services may occasionally be affected by circumstances outside our reasonable
                  control, including:
                </p>
                <BulletList
                  items={[
                    "severe weather;",
                    "major transport disruption;",
                    "civil emergencies;",
                    "widespread illness;",
                    "major power or infrastructure failure;",
                    "government restrictions; or",
                    "unexpected serious staff emergencies.",
                  ]}
                />
                <p>
                  Friendly Support Limited will take reasonable steps to minimise disruption and
                  communicate with affected Clients.
                </p>
              </Section>

              <Section n={49} title="Changes to prices">
                <p>
                  Friendly Support Limited may change prices for future services. Regular Clients
                  will be given reasonable notice of material price changes. A price change will not
                  retrospectively increase the price of services already supplied.
                </p>
              </Section>

              <Section n={50} title="Changes to these Terms">
                <p>
                  These Terms may be updated where reasonably necessary because of changes to:
                </p>
                <BulletList
                  items={[
                    "law;",
                    "regulation;",
                    "business operations;",
                    "insurance arrangements; or",
                    "the nature of our services.",
                  ]}
                />
                <p>
                  Material changes affecting ongoing Clients will be communicated appropriately.
                </p>
              </Section>

              <Section n={51} title="Governing law">
                <p>
                  These Terms are governed by the laws of England and Wales. Nothing in these Terms
                  removes any mandatory legal or consumer protection available to the Client or
                  Customer.
                </p>
              </Section>

              <Section n={52} title="Important service boundary">
                <div className="rounded-xl border border-[#e8ecec] bg-white p-5">
                  <p className="font-semibold uppercase tracking-wide text-[#1a3d3d]">
                    Friendly Support Limited provides companionship and practical non-regulated
                    support.
                  </p>
                  <p className="mt-3 font-semibold text-[#1a3d3d]">
                    Friendly Support Limited does not provide regulated personal care, nursing or
                    medical treatment under these Terms.
                  </p>
                </div>
                <p>
                  Clients, relatives and representatives must not ask Companions to perform
                  personal-care activities informally or privately.
                </p>
                <p>
                  Where a Client&apos;s needs develop beyond Friendly Support Limited&apos;s service
                  boundaries, we will deal with the situation sensitively and may recommend an
                  appropriately qualified or regulated provider.
                </p>
              </Section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
