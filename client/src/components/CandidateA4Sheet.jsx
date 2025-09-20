import React, { useMemo } from "react";

export default function CandidateA4Sheet({
  candidate,
  issuedBy = "College Election Committee",
  collegeName = "XYZ College of Engineering",
}) {
  const c = candidate;
  console.log(c);
  
  const name = c?.name
    ? `${c.name.firstName ?? ""} ${c.name.lastName ?? ""}`.trim()
    : "";
  const today = useMemo(() => new Date(), []);

  const docNo = useMemo(() => {
    const base = (c?.id || c?._id || "CAND")
      .toString()
      .slice(-6)
      .padStart(6, "0");
    return `COL-${base}-${today.getFullYear()}`;
  }, [c?.id, c?._id, today]);

  console.log("hii:",candidate);
  

  const formatDate = (d) =>
    new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(d);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <style>{`
        @page { size: A4; margin: 16mm; }
        @media print {
          html, body { background: white !important; }
          .sheet { box-shadow: none !important; margin: 0 !important; }
          .no-print { display: none !important; }
          .watermark { opacity: 0.06 !important; }
        }
        .stamp {
          position: absolute;
          right: 24mm; bottom: 28mm;
          width: 45mm; height: 45mm;
          border: 3px solid #1d4ed8; /* blue */
          border-radius: 9999px;
          display: grid; place-items: center;
          transform: rotate(-8deg);
        }
        .stamp::before {
          content: "COLLEGE VERIFIED";
          font-weight: 700; font-size: 11px; letter-spacing: 2px;
          color: #1d4ed8;
        }
        .stamp-ring { position: absolute; inset: 6px; border: 1.5px dashed #1d4ed8; border-radius: 9999px; }
        .watermark {
          position: absolute; inset: 0; display: grid; place-items: center;
          font-size: 64px; font-weight: 800; letter-spacing: 8px;
          color: #1f2937;
          transform: rotate(-20deg);
          opacity: 0.08;
        }
      `}</style>

      {/* Print Button */}
      <div className="no-print w-[210mm] flex justify-end gap-3 mb-4 px-2">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-2xl shadow bg-blue-600 text-white text-sm hover:bg-blue-700"
        >
          Print / Save as PDF
        </button>
      </div>

      {/* A4 Sheet */}
      <div className="sheet relative bg-white w-[210mm] min-h-[297mm] shadow-xl rounded-xl p-[14mm]">
        <div className="watermark">COLLEGE ELECTION 2025</div>

        {/* Header */}
        <header className="relative flex items-center gap-4 pb-4 border-b">
          <div className="w-14 h-14 rounded-full border grid place-items-center text-xs font-bold overflow-hidden">
            <img src="/college-logo.png" alt="College Logo" />
          </div>

          <div className="flex-1">
            <h1 className="text-xl font-extrabold leading-tight">
              {collegeName}
            </h1>
            <p className="text-sm text-gray-600">{issuedBy}</p>
          </div>

          <div className="text-right text-sm">
            <p>
              <span className="text-gray-500">Document No:</span>{" "}
              <span className="font-semibold">{docNo}</span>
            </p>
            <p>
              <span className="text-gray-500">Issue Date:</span>{" "}
              <span className="font-semibold">{formatDate(today)}</span>
            </p>
          </div>
        </header>

        {/* Title */}
        <div className="mt-4 mb-2">
          <h2 className="text-lg font-bold tracking-wide">
            STUDENT COUNCIL ELECTION – CANDIDATE DOSSIER
          </h2>
          <p className="text-xs text-gray-600">
            Prepared by the {issuedBy} for verification & record.
          </p>
        </div>

        {/* Candidate Details */}
        <section className="mt-4 grid grid-cols-12 gap-4 text-[13px]">
          <div className="col-span-8 space-y-2">
            <Field label="Candidate Name" value={name || "—"} />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Department" value={c?.department ?? "—"} />
              <Field label="Year" value={c?.year ?? "—"} />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Field label="Age" value={c?.age ?? "—"} />
              <Field label="Gender" value={c?.gender ?? "—"} />
              <Field label="Role for Election" value={c?.role_for_Election ?? "—"} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Contact Email" value={c?.contact?.email ?? "—"} />
              <Field label="Contact Phone" value={c?.contact?.phone ?? "—"} />
            </div>
          </div>

          <div className="col-span-4 grid grid-rows-2 gap-4">
            <Box label="Candidate Photograph">
              <img
                src={c.image_of_Candidate || "/default-avatar.png"}
                alt="Candidate"
                className="w-full h-full object-cover"
              />
            </Box>
            <Box label="College ID / QR">
              <div className="w-full h-full border border-dashed grid place-items-center text-xs text-gray-500">
                QR Code / ID
              </div>
            </Box>
          </div>
        </section>

        {/* Manifesto */}
        <section className="mt-4 text-[13px]">
          <h3 className="text-sm font-semibold mb-2">Manifesto (Plans & Promises)</h3>
          {Array.isArray(c?.manifesto) && c.manifesto.length > 0 ? (
            <ul className="list-disc pl-5 leading-relaxed text-gray-700">
              {c.manifesto.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-500">No manifesto submitted</div>
          )}
        </section>

        {/* Declaration */}
        <section className="mt-6 text-[12px] leading-relaxed text-gray-700">
          <h3 className="text-sm font-semibold mb-2">Declarations</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              The details in this document are submitted by the candidate for the purpose of college elections.
            </li>
            <li>
              This document is intended for academic election administration only.
            </li>
            <li>
              Any tampering or misuse will lead to disciplinary action as per college rules.
            </li>
          </ol>
        </section>

        {/* Signatures */}
        <section className="mt-8 grid grid-cols-2 gap-6 relative">
          <div>
            <SignatureBlock label="Candidate Signature" note="Name & Date" />
          </div>
          <div className="relative">
            <SignatureBlock label="Election Officer" note="Seal & Date" />
            <div className="stamp">
              <span className="stamp-ring" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 pt-3 border-t text-[11px] text-gray-600 flex items-center justify-between">
          <div>
            <p>Prepared by: {issuedBy}</p>
            <p>Generated on: {formatDate(today)}</p>
          </div>
          <div className="text-right">
            <p>This is a system-generated document for college election use only.</p>
            <p>Contact the election committee for verification.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

/*** Utility Components ***/
function Field({ label, value }) {
  return (
    <div className="w-full">
      <div className="text-[11px] text-gray-500 uppercase tracking-wide">
        {label}
      </div>
      <div className="mt-1 p-2 border rounded-md bg-white">{String(value ?? "—")}</div>
    </div>
  );
}

function Box({ label, children }) {
  return (
    <div className="w-full h-full border rounded-md">
      <div className="px-2 py-1 text-[11px] bg-gray-50 border-b text-gray-600">
        {label}
      </div>
      <div className="p-2 h-[calc(100%-28px)]">{children}</div>
    </div>
  );
}

function SignatureBlock({ label, note }) {
  return (
    <div className="h-28 flex flex-col justify-end">
      <div className="border-b-2" />
      <div className="flex items-center justify-between text-[12px] mt-1">
        <span className="font-medium">{label}</span>
        <span className="text-gray-500">{note}</span>
      </div>
    </div>
  );
}
