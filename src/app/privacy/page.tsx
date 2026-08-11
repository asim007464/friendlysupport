import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/data/siteContact";

export const metadata: Metadata = {
  title: "Company Service, Safeguarding and Professional Conduct Policy | Friendly Support Limited",
  description:
    "Company service, safeguarding and professional conduct policy for Friendly Support Limited.",
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

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      <Header />

      <main>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading mb-3 text-3xl font-bold text-[#1a3d3d] sm:text-4xl">
              Company Service, Safeguarding and Professional Conduct Policy
            </h1>
            <p className="mb-8 text-[15px] text-[#4a5568]">
              Friendly Support Limited — company policy for service delivery, safeguarding and
              professional conduct.
            </p>

            <div className="mb-12 rounded-2xl border border-[#e8ecec] bg-white p-6 shadow-sm sm:p-8">
              <dl className="space-y-4 text-[15px]">
                {companyFacts.map((fact) => (
                  <div key={fact.label} className="sm:grid sm:grid-cols-[200px_1fr] sm:gap-4">
                    <dt className="font-semibold text-[#1a3d3d]">{fact.label}</dt>
                    <dd className="text-[#4a5568]">{fact.value}</dd>
                  </div>
                ))}
                <div className="sm:grid sm:grid-cols-[200px_1fr] sm:gap-4">
                  <dt className="font-semibold text-[#1a3d3d]">Email</dt>
                  <dd className="text-[#4a5568]">
                    <a
                      href={`mailto:${SITE_EMAIL}`}
                      className="font-semibold text-[#1F7A7A] hover:underline"
                    >
                      {SITE_EMAIL}
                    </a>
                  </dd>
                </div>
                <div className="sm:grid sm:grid-cols-[200px_1fr] sm:gap-4">
                  <dt className="font-semibold text-[#1a3d3d]">Telephone / WhatsApp</dt>
                  <dd className="text-[#4a5568]">
                    <a
                      href={`tel:${SITE_PHONE_TEL}`}
                      className="font-semibold text-[#1F7A7A] hover:underline"
                    >
                      {SITE_PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div className="sm:grid sm:grid-cols-[200px_1fr] sm:gap-4">
                  <dt className="font-semibold text-[#1a3d3d]">Website</dt>
                  <dd className="text-[#4a5568]">friendlysupportlimited.co.uk</dd>
                </div>
              </dl>
            </div>

            <div className="space-y-10">
              <Section n={1} title="Purpose of this policy">
                <p>
                  This policy sets out the principles, professional standards and service boundaries
                  under which Friendly Support Limited operates.
                </p>
                <p>
                  It applies to all directors, managers, employees, workers, companions, contractors
                  and any other person acting on behalf of Friendly Support Limited.
                </p>
                <p>Our aim is to ensure that every service is delivered:</p>
                <BulletList
                  items={[
                    "safely",
                    "respectfully",
                    "compassionately",
                    "reliably",
                    "professionally",
                    "with appropriate regard for dignity and independence",
                    "within clearly defined service boundaries",
                    "with proper regard for confidentiality, safeguarding and personal choice",
                  ]}
                />
              </Section>

              <Section n={2} title="Our service">
                <p>
                  Friendly Support Limited provides non-regulated companionship, social support and
                  practical household assistance.
                </p>
                <p>
                  Our purpose is to help adults maintain independence, confidence, companionship and
                  meaningful social contact in their everyday lives.
                </p>
                <p>Depending upon the individual Service Plan, our services may include:</p>
                <BulletList
                  items={[
                    "companionship and conversation",
                    "social visits",
                    "accompanying clients on walks",
                    "accompanying clients to appointments",
                    "accompanying clients on shopping trips",
                    "grocery shopping and ordinary errands",
                    "visits to cafés, restaurants and community venues",
                    "support attending cultural, religious or social activities",
                    "light household assistance",
                    "laundry and ironing",
                    "simple meal preparation",
                    "sitting companionship while a family member or carer takes a break",
                    "help with ordinary household organisation",
                    "agreed updates to authorised family members or representatives",
                    "extended companionship",
                    "other agreed non-regulated practical support",
                  ]}
                />
                <p>
                  All services must remain within the agreed and lawful scope of Friendly Support
                  Limited.
                </p>
              </Section>

              <Section n={3} title="Services we do not provide">
                <p>
                  Friendly Support Limited does not provide regulated personal care as part of its
                  companionship service.
                </p>
                <p>Staff must not provide physical assistance with:</p>
                <BulletList
                  items={[
                    "bathing or showering",
                    "washing the body",
                    "toileting",
                    "continence care",
                    "changing continence products",
                    "dressing or undressing",
                    "oral hygiene",
                    "personal skin care",
                    "personal hair care",
                    "personal nail care",
                    "physical assistance with feeding",
                    "hoisting",
                    "lifting or transferring a person",
                    "clinical mobility procedures",
                    "any other activity that falls within regulated personal care",
                  ]}
                />
                <p>
                  Staff must not agree privately to undertake prohibited activities because a
                  client, relative or representative requests them.
                </p>
                <p>Any such request must be referred to management.</p>
              </Section>

              <Section n={4} title="Medical and nursing boundaries">
                <p>
                  Friendly Support Limited is not a medical, nursing or clinical service provider.
                </p>
                <p>Staff must not:</p>
                <BulletList
                  items={[
                    "diagnose illness",
                    "prescribe treatment",
                    "alter treatment",
                    "provide medical advice",
                    "perform wound care",
                    "administer injections",
                    "undertake invasive procedures",
                    "manage catheters or stomas",
                    "perform nursing procedures",
                    "undertake clinical observations as a healthcare service",
                    "represent themselves as providing medical or nursing care on behalf of Friendly Support Limited",
                  ]}
                />
                <p>
                  A Companion may accompany a client to a healthcare appointment and may assist with
                  ordinary communication where the client wishes.
                </p>
                <p>
                  Where an emergency arises, staff should obtain appropriate professional
                  assistance.
                </p>
              </Section>

              <Section n={5} title="Medication">
                <p>
                  Friendly Support Limited does not provide a medication-administration or
                  medication-management service.
                </p>
                <p>Staff must not independently:</p>
                <BulletList
                  items={[
                    "select medication",
                    "decide whether medication should be taken",
                    "alter a prescribed dose",
                    "change medication timings",
                    "crush or modify medication",
                    "fill clinical medication devices",
                    "administer injections",
                    "conceal medication in food",
                    "administer medication requiring clinical responsibility",
                    "make clinical decisions concerning medication",
                  ]}
                />
                <p>
                  Where specifically agreed by management and appropriate to the service, a
                  Companion may provide a simple reminder to a client who remains independently
                  responsible for managing and taking their own medication.
                </p>
                <p>
                  Any concern relating to medication must be reported promptly to management.
                </p>
              </Section>

              <Section n={6} title="Person-centred support">
                <p>Every client must be treated as an individual.</p>
                <p>Staff should, wherever reasonably possible, respect the client&apos;s:</p>
                <BulletList
                  items={[
                    "wishes",
                    "choices",
                    "routines",
                    "independence",
                    "abilities",
                    "communication preferences",
                    "cultural background",
                    "religion or belief",
                    "dietary preferences",
                    "hobbies and interests",
                    "privacy",
                    "dignity",
                    "personal lifestyle",
                  ]}
                />
                <p>
                  Support should encourage independence rather than unnecessarily taking over
                  activities the client is safely and comfortably able to undertake themselves.
                </p>
              </Section>

              <Section n={7} title="Dignity and respect">
                <p>All clients must be treated with courtesy, patience and respect.</p>
                <p>Staff must never:</p>
                <BulletList
                  items={[
                    "humiliate",
                    "belittle",
                    "intimidate",
                    "threaten",
                    "ridicule",
                    "shout at",
                    "discriminate against",
                    "deliberately embarrass",
                    "exploit",
                  ]}
                />
                <p>Private matters should be discussed discreetly.</p>
                <p>
                  The client&apos;s home, possessions, preferences and personal boundaries must be
                  respected at all times.
                </p>
              </Section>

              <Section n={8} title="Equality, diversity and inclusion">
                <p>
                  Friendly Support Limited is committed to providing services fairly and without
                  unlawful discrimination.
                </p>
                <p>
                  Clients and staff must be treated respectfully regardless of characteristics
                  including:
                </p>
                <BulletList
                  items={[
                    "age",
                    "disability",
                    "race",
                    "nationality",
                    "ethnic origin",
                    "religion or belief",
                    "sex",
                    "sexual orientation",
                    "gender reassignment",
                    "pregnancy or maternity",
                    "any other characteristic protected by law",
                  ]}
                />
                <p>
                  Reasonable adjustments should be considered where appropriate and practicable.
                </p>
                <p>
                  Harassment, victimisation and discriminatory conduct are unacceptable.
                </p>
              </Section>

              <Section n={9} title="Safeguarding adults">
                <p>
                  Friendly Support Limited has zero tolerance for abuse, neglect, exploitation or
                  coercion.
                </p>
                <p>Safeguarding concerns may include:</p>
                <BulletList
                  items={[
                    "physical abuse",
                    "emotional or psychological abuse",
                    "sexual abuse",
                    "financial abuse",
                    "neglect",
                    "discriminatory abuse",
                    "domestic abuse",
                    "organisational abuse",
                    "coercive or controlling behaviour",
                    "exploitation",
                    "modern slavery",
                    "self-neglect",
                    "inappropriate restriction of a person's freedom",
                  ]}
                />
                <p>
                  All staff must remain alert to signs that a client may be at risk.
                </p>
                <p>
                  A member of staff must never assume that somebody else will report a serious
                  concern.
                </p>
              </Section>

              <Section n={10} title="Reporting a safeguarding concern">
                <p>Where a safeguarding concern arises, staff must:</p>
                <NumberedList
                  items={[
                    "take reasonable steps to protect immediate safety",
                    "contact emergency services where there is immediate danger",
                    "inform the Friendly Support Limited manager or safeguarding lead promptly",
                    "make an accurate and factual written record",
                    "preserve relevant information or evidence where appropriate",
                    "follow management instructions regarding referral to the appropriate authority",
                  ]}
                />
                <p>
                  Depending upon the circumstances, relevant information may need to be shared
                  with:
                </p>
                <BulletList
                  items={[
                    "the local authority safeguarding team",
                    "the police",
                    "ambulance services",
                    "NHS professionals",
                    "another appropriate agency",
                    "an authorised representative",
                  ]}
                />
                <p>
                  Confidentiality must never be used as a reason to conceal serious abuse, neglect
                  or immediate danger.
                </p>
              </Section>

              <Section n={11} title="Safeguarding allegations against staff">
                <p>Any allegation that a Friendly Support Limited worker has:</p>
                <BulletList
                  items={[
                    "harmed or abused a client",
                    "stolen from a client",
                    "exploited a client",
                    "behaved sexually or otherwise inappropriately towards a client",
                    "neglected a client",
                    "committed another serious safeguarding breach",
                  ]}
                />
                <p>must be reported to management immediately.</p>
                <p>
                  Appropriate protective action will be taken while the matter is investigated.
                </p>
                <p>
                  Where necessary, the matter may be referred to the police, local authority,
                  Disclosure and Barring Service or another appropriate organisation.
                </p>
              </Section>

              <Section n={12} title="Professional boundaries">
                <p>
                  Friendly, trusting relationships are an important part of companionship work, but
                  those relationships must remain professional.
                </p>
                <p>Staff must not:</p>
                <BulletList
                  items={[
                    "exploit a client emotionally",
                    "borrow money from a client",
                    "lend substantial sums to a client",
                    "request gifts",
                    "pressure a client to give money or property",
                    "become a beneficiary under a client's will",
                    "encourage a client to alter a will or financial arrangement",
                    "become involved in investments",
                    "provide financial advice",
                    "enter into an inappropriate intimate or sexual relationship with a client",
                    "use a client's possessions for personal purposes",
                    "encourage unhealthy dependency for personal gain",
                  ]}
                />
              </Section>

              <Section n={13} title="Gifts">
                <p>Staff must never request gifts from clients.</p>
                <p>
                  Small customary tokens such as chocolates or flowers may be accepted where
                  appropriate.
                </p>
                <p>
                  Cash gifts or anything of significant financial value must be reported to
                  management before acceptance.
                </p>
                <p>Staff must not privately accept:</p>
                <BulletList
                  items={[
                    "substantial cash",
                    "expensive jewellery",
                    "loans",
                    "significant transfers of money",
                    "property",
                    "investments",
                    "substantial inheritance or testamentary gifts",
                  ]}
                />
              </Section>

              <Section n={14} title="Client money and shopping">
                <p>
                  Where a Companion undertakes shopping or another agreed purchase for a client:
                </p>
                <BulletList
                  items={[
                    "the amount of money received should be recorded where appropriate",
                    "receipts should be obtained wherever reasonably possible",
                    "change must be returned promptly",
                    "client money should be kept separate from personal money",
                    "transactions must remain transparent",
                  ]}
                />
                <p>Staff must not use a client&apos;s:</p>
                <BulletList
                  items={[
                    "bank card",
                    "PIN",
                    "online banking",
                    "cheque book",
                    "financial account",
                  ]}
                />
                <p>
                  unless Friendly Support Limited has expressly approved a specific arrangement with
                  appropriate safeguards.
                </p>
                <p>
                  Client money must never be used for a worker&apos;s personal benefit.
                </p>
              </Section>

              <Section n={15} title="Confidentiality">
                <p>
                  Information obtained through work with a client must be treated confidentially.
                </p>
                <p>Staff must not discuss client information with:</p>
                <BulletList
                  items={[
                    "friends",
                    "relatives",
                    "neighbours",
                    "other clients",
                    "unauthorised family members",
                    "personal social-media contacts",
                    "any other unauthorised person",
                  ]}
                />
                <p>
                  Information may be shared internally where reasonably necessary to provide a safe
                  and effective service.
                </p>
                <p>
                  Information may also be disclosed where lawful and necessary, including in
                  safeguarding or emergency situations.
                </p>
              </Section>

              <Section n={16} title="Data protection">
                <p>
                  Friendly Support Limited will process personal information in accordance with
                  applicable UK data-protection law.
                </p>
                <p>
                  Only information reasonably required for legitimate service and business purposes
                  should be collected. This may include:
                </p>
                <BulletList
                  items={[
                    "name",
                    "address",
                    "contact details",
                    "emergency-contact information",
                    "service details",
                    "access arrangements",
                    "billing information",
                    "visit records",
                    "preferences",
                    "safety information",
                    "relevant health-related information where necessary for safe support",
                  ]}
                />
                <p>
                  Paper and electronic records must be protected against unauthorised access.
                </p>
                <p>
                  Sensitive information should not be stored unnecessarily on personal devices.
                </p>
                <p>
                  Any suspected data breach or loss of information must be reported to management
                  promptly.
                </p>
              </Section>

              <Section n={17} title="Client consent and family information">
                <p>
                  Where a client is able to make their own decisions, they determine who may receive
                  confidential information about them.
                </p>
                <p>
                  A person does not automatically acquire access to confidential information simply
                  because they are a relative.
                </p>
                <p>Where appropriate, Friendly Support Limited will record:</p>
                <BulletList
                  items={[
                    "nominated family contacts",
                    "emergency contacts",
                    "persons authorised to receive updates",
                    "any relevant legal authority",
                  ]}
                />
                <p>
                  Where somebody claims authority under a Lasting Power of Attorney, deputyship or
                  similar legal arrangement, Friendly Support Limited may request suitable evidence.
                </p>
              </Section>

              <Section n={18} title="Capacity and decision-making">
                <p>
                  Staff must not assume that a person lacks capacity simply because they:
                </p>
                <BulletList
                  items={[
                    "are elderly",
                    "have a disability",
                    "have a medical diagnosis",
                    "communicate differently",
                    "make an unusual choice",
                    "make a decision with which another person disagrees",
                  ]}
                />
                <p>
                  Concerns regarding decision-making capacity must be referred to management.
                </p>
                <p>
                  Appropriate professional advice should be obtained where necessary.
                </p>
              </Section>

              <Section n={19} title="Recruitment and vetting">
                <p>
                  Friendly Support Limited aims to recruit trustworthy, compassionate and suitable
                  personnel.
                </p>
                <p>Recruitment and vetting may include, as appropriate:</p>
                <BulletList
                  items={[
                    "identity verification",
                    "right-to-work checks",
                    "application forms",
                    "interviews",
                    "review of employment history",
                    "references",
                    "DBS checks at the legally appropriate level",
                    "qualification checks where relevant",
                    "safeguarding screening",
                    "confidentiality requirements",
                    "induction",
                    "ongoing supervision",
                  ]}
                />
                <p>
                  The appropriate DBS level will be determined according to the actual duties and
                  legal eligibility of the role.
                </p>
              </Section>

              <Section n={20} title="Staff training">
                <p>
                  Training will be appropriate to the duties undertaken and may include:
                </p>
                <BulletList
                  items={[
                    "safeguarding",
                    "confidentiality",
                    "data protection",
                    "professional boundaries",
                    "equality and diversity",
                    "health and safety",
                    "lone working",
                    "infection prevention",
                    "emergency procedures",
                    "basic food hygiene where appropriate",
                    "incident reporting",
                    "moving-and-handling awareness",
                    "medication boundaries",
                    "dementia awareness",
                    "recognising emergencies or deterioration without attempting to diagnose",
                  ]}
                />
                <p>
                  Training does not authorise staff to perform activities outside Friendly Support
                  Limited&apos;s agreed service scope.
                </p>
              </Section>

              <Section n={21} title="Lone working">
                <p>
                  Many Companions may work alone in clients&apos; homes or in the community.
                </p>
                <p>
                  Friendly Support Limited will take reasonable steps to identify and manage
                  foreseeable lone-working risks.
                </p>
                <p>Arrangements may include:</p>
                <BulletList
                  items={[
                    "recording visit times and locations",
                    "check-in and check-out systems",
                    "emergency-contact procedures",
                    "risk assessments",
                    "recording known hazards",
                    "procedures for missed check-outs",
                    "violence and aggression procedures",
                    "access to management support",
                  ]}
                />
                <p>Staff must not place themselves at unreasonable personal risk.</p>
              </Section>

              <Section n={22} title="Violence, aggression and harassment">
                <p>
                  Friendly Support Limited will not tolerate violence, threats, intimidation, serious
                  harassment, discriminatory abuse or sexual misconduct towards staff.
                </p>
                <p>
                  Where a situation becomes unsafe, a worker may leave the premises.
                </p>
                <p>Management may:</p>
                <BulletList
                  items={[
                    "reassess the service",
                    "introduce additional safeguards",
                    "require two staff members",
                    "suspend services",
                    "terminate services",
                    "contact the police or another appropriate authority",
                  ]}
                />
              </Section>

              <Section n={23} title="Health and safety">
                <p>
                  Friendly Support Limited will take reasonable steps to protect clients, staff and
                  others who may be affected by its activities.
                </p>
                <p>Staff must:</p>
                <BulletList
                  items={[
                    "follow relevant risk assessments",
                    "report hazards",
                    "use equipment safely",
                    "avoid unsafe lifting",
                    "follow reasonable infection-control precautions",
                    "report accidents and incidents promptly",
                    "refuse tasks that present an unreasonable risk",
                  ]}
                />
              </Section>

              <Section n={24} title="Light household support">
                <p>Where agreed, light household support may include:</p>
                <BulletList
                  items={[
                    "dusting",
                    "light vacuuming",
                    "wiping accessible surfaces",
                    "washing dishes",
                    "laundry",
                    "ironing",
                    "changing bed linen where safe",
                    "light tidying",
                    "simple meal preparation",
                  ]}
                />
                <p>It does not normally include:</p>
                <BulletList
                  items={[
                    "deep cleaning",
                    "industrial cleaning",
                    "working at height",
                    "moving heavy furniture",
                    "post-construction cleaning",
                    "hazardous-waste removal",
                    "specialist chemical cleaning",
                    "high-level exterior window cleaning",
                    "tasks requiring specialist equipment or professional certification",
                  ]}
                />
              </Section>

              <Section n={25} title="Food and meal preparation">
                <p>Companions may prepare ordinary simple meals where agreed.</p>
                <p>Known:</p>
                <BulletList
                  items={[
                    "allergies",
                    "food intolerances",
                    "religious dietary requirements",
                    "medically relevant dietary restrictions",
                    "swallowing concerns",
                  ]}
                />
                <p>should be recorded where necessary for safety.</p>
                <p>Staff must not provide clinical dietetic advice.</p>
                <p>
                  Where significant swallowing, feeding or nutritional concerns arise, the matter
                  should be referred to management.
                </p>
              </Section>

              <Section n={26} title="Transport">
                <p>Companions may accompany clients by:</p>
                <BulletList
                  items={[
                    "walking",
                    "bus",
                    "train",
                    "taxi",
                    "licensed private-hire vehicle",
                    "another agreed form of transport",
                  ]}
                />
                <p>
                  A worker must not transport a client in their own vehicle unless Friendly Support
                  Limited has expressly authorised this and appropriate driving, insurance and
                  vehicle requirements have been confirmed.
                </p>
              </Section>

              <Section n={27} title="Keys and access codes">
                <p>
                  Client keys, alarm details and access information must be kept secure.
                </p>
                <p>Staff must not:</p>
                <BulletList
                  items={[
                    "duplicate keys without authority",
                    "label unattended keys with a client's full address",
                    "give keys to unauthorised persons",
                    "disclose alarm or access codes unnecessarily",
                  ]}
                />
                <p>
                  Any loss of a key, access device or security information must be reported
                  immediately.
                </p>
              </Section>

              <Section n={28} title="Record keeping">
                <p>Records should be:</p>
                <BulletList
                  items={[
                    "factual",
                    "accurate",
                    "relevant",
                    "respectful",
                    "timely",
                    "legible",
                    "securely stored",
                  ]}
                />
                <p>Workers should distinguish between:</p>
                <BulletList
                  items={[
                    "what they personally observed",
                    "information provided by somebody else",
                  ]}
                />
                <p>
                  Records must not contain insulting, judgemental or unnecessarily subjective
                  language.
                </p>
              </Section>

              <Section n={29} title="Accidents and incidents">
                <p>
                  Accidents, near misses, injuries, safeguarding events, property damage and
                  significant incidents must be reported promptly.
                </p>
                <p>Records should include, where relevant:</p>
                <BulletList
                  items={[
                    "date",
                    "time",
                    "location",
                    "persons involved",
                    "factual description of what happened",
                    "immediate action taken",
                    "witnesses",
                    "persons notified",
                    "any follow-up action required",
                  ]}
                />
                <p>
                  Management will determine whether an external notification is necessary.
                </p>
              </Section>

              <Section n={30} title="Emergencies">
                <p>Friendly Support Limited is not an emergency service.</p>
                <p>
                  Where there is an immediate threat to life or serious safety, staff should contact
                  999.
                </p>
                <p>
                  Once the immediate situation has been addressed, management should be informed as
                  soon as reasonably practicable.
                </p>
                <p>
                  The client&apos;s nominated emergency contact may also be informed where
                  appropriate.
                </p>
              </Section>

              <Section n={31} title="Infection prevention">
                <p>
                  Staff should follow reasonable infection-prevention precautions, including:
                </p>
                <BulletList
                  items={[
                    "appropriate hand hygiene",
                    "safe disposal of waste",
                    "avoidance of unnecessary exposure to bodily fluids",
                    "use of appropriate PPE where required by risk assessment",
                    "reporting significant infectious risks",
                  ]}
                />
                <p>
                  Staff must not undertake clinical infection-control procedures outside their role.
                </p>
              </Section>

              <Section n={32} title="Complaints">
                <p>
                  Friendly Support Limited welcomes feedback and takes complaints seriously.
                </p>
                <p>
                  Clients and families should be able to raise concerns without fear of unfair
                  treatment.
                </p>
                <p>Complaints should be:</p>
                <BulletList
                  items={[
                    "acknowledged appropriately",
                    "recorded",
                    "investigated fairly",
                    "responded to professionally",
                    "used to improve services where appropriate",
                  ]}
                />
                <p>
                  Complaints may be made to Friendly Support Limited by email at{" "}
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="font-semibold text-[#1F7A7A] hover:underline"
                  >
                    {SITE_EMAIL}
                  </a>{" "}
                  or by telephone / WhatsApp on{" "}
                  <a
                    href={`tel:${SITE_PHONE_TEL}`}
                    className="font-semibold text-[#1F7A7A] hover:underline"
                  >
                    {SITE_PHONE_DISPLAY}
                  </a>
                  . See also our{" "}
                  <Link href="/complaints" className="font-semibold text-[#1F7A7A] hover:underline">
                    complaints page
                  </Link>
                  .
                </p>
              </Section>

              <Section n={33} title="Whistleblowing">
                <p>Staff are encouraged to report genuine concerns relating to:</p>
                <BulletList
                  items={[
                    "abuse",
                    "neglect",
                    "unsafe practice",
                    "fraud",
                    "serious misconduct",
                    "criminal activity",
                    "deliberate concealment of wrongdoing",
                    "serious breaches of company policy",
                  ]}
                />
                <p>
                  No worker should suffer retaliation for raising a genuine concern in good faith.
                </p>
              </Section>

              <Section n={34} title="Social media">
                <p>
                  Staff must not post identifiable information, photographs, recordings or stories
                  relating to clients on personal social media without lawful company authorisation
                  and appropriate consent.
                </p>
                <p>
                  Clients must never be mocked, criticised or discussed inappropriately online.
                </p>
              </Section>

              <Section n={35} title="Photographs and recordings">
                <p>
                  Photographs or recordings of clients may only be made where there is:
                </p>
                <BulletList
                  items={[
                    "a legitimate and appropriate purpose",
                    "lawful authority",
                    "suitable consent or another lawful basis",
                  ]}
                />
                <p>
                  Marketing photographs, testimonials or personal stories require appropriate
                  separate permission.
                </p>
                <p>Clients must never be pressured to consent.</p>
              </Section>

              <Section n={36} title="Quality assurance">
                <p>
                  Friendly Support Limited will seek to maintain and improve service quality through
                  measures that may include:
                </p>
                <BulletList
                  items={[
                    "client feedback",
                    "authorised family feedback",
                    "staff supervision",
                    "review of accidents and incidents",
                    "complaint analysis",
                    "Service Plan reviews",
                    "staff training",
                    "spot checks where appropriate",
                    "management review",
                  ]}
                />
              </Section>

              <Section n={37} title="Changes in a client's needs">
                <p>
                  Staff must notify management where it appears that a client&apos;s needs have
                  materially changed.
                </p>
                <p>
                  Particular attention should be given where a client appears increasingly to
                  require:
                </p>
                <BulletList
                  items={[
                    "personal care",
                    "substantial physical assistance",
                    "medication management",
                    "nursing",
                    "medical treatment",
                    "continuous supervision",
                    "another service outside Friendly Support Limited's scope",
                  ]}
                />
                <p>
                  Management will discuss appropriate next steps with the client or their authorised
                  representative.
                </p>
              </Section>

              <Section n={38} title="Service suspension or termination">
                <p>
                  Friendly Support Limited may suspend or terminate services where reasonably
                  necessary because of:
                </p>
                <BulletList
                  items={[
                    "serious safety concerns",
                    "violence or threats",
                    "serious harassment",
                    "safeguarding concerns",
                    "persistent non-payment",
                    "repeated requests for prohibited personal-care activities",
                    "a material change in client needs",
                    "illegal activity",
                    "a serious breakdown in the professional relationship",
                    "another substantial reason making continued service unsafe, unlawful or unreasonable",
                  ]}
                />
                <p>
                  Decisions should be proportionate, appropriately documented and communicated
                  sensitively wherever circumstances allow.
                </p>
              </Section>

              <Section n={39} title="Regulatory boundary">
                <p>
                  Friendly Support Limited intends to operate as a provider of companionship, social
                  support and practical household assistance rather than regulated personal care.
                </p>
                <p>Management must ensure that:</p>
                <BulletList
                  items={[
                    "advertising accurately reflects the services offered",
                    "staff understand the limits of their role",
                    "Service Plans remain within the agreed scope",
                    "prohibited activities are not undertaken informally",
                    "changes to the nature of services are considered carefully before implementation",
                  ]}
                />
                <p>
                  If Friendly Support Limited proposes to expand into activities that may constitute
                  regulated personal care or another regulated activity, appropriate legal and
                  regulatory advice must be obtained and any required registration completed before
                  those services are introduced.
                </p>
              </Section>
            </div>

            <p className="mt-12 text-[14px] text-[#64748b]">
              Related documents:{" "}
              <Link href="/terms" className="font-semibold text-[#1F7A7A] hover:underline">
                Client Terms and Conditions
              </Link>
              {" · "}
              <Link href="/complaints" className="font-semibold text-[#1F7A7A] hover:underline">
                Complaints
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
