import React, { useMemo } from "react";

export default function CandidateA4Sheet({
  candidate,
  issuedBy = "Election Commission",
}) {
  // Defensive fallbacks so the sheet never explodes if a field is missing
  const c = candidate || {};
  const name = c?.name
    ? `${c.name.firstName ?? ""} ${c.name.lastName ?? ""}`.trim()
    : "";
  const today = useMemo(() => new Date(), []);

  // Auto-generate a document number (you can replace with your backend id)
  const docNo = useMemo(() => {
    const base = (c?.id || c?._id || "CAND")
      .toString()
      .slice(-6)
      .padStart(6, "0");
    return `VEC-${base}-${today.getFullYear()}`;
  }, [c?.id, c?._id, today]);

  const formatDate = (d) =>
    new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(d);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-6">
      {/* PRINT STYLES scoped here so you can drop-in anywhere */}
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
          border: 3px solid #be123c; /* dark rose */
          border-radius: 9999px;
          display: grid; place-items: center;
          transform: rotate(-10deg);
        }
        .stamp::before {
          content: "OFFICIAL";
          font-weight: 700; font-size: 11px; letter-spacing: 2px;
          color: #be123c;
        }
        .stamp-ring { position: absolute; inset: 6px; border: 1.5px dashed #be123c; border-radius: 9999px; }
        .watermark {
          position: absolute; inset: 0; display: grid; place-items: center;
          font-size: 72px; font-weight: 800; letter-spacing: 8px;
          color: #1f2937; /* gray-800, will be faded */
          transform: rotate(-24deg);
          opacity: 0.08;
          pointer-events: none;
          user-select: none;
        }
        .watermark2 {
          position: absolute; inset: 0; display: grid; place-items: center;
          font-size: 72px; font-weight: 800; letter-spacing: 8px;
          color: #1f2937; /* gray-800, will be faded */
          transform: rotate(0deg);
          opacity:1;
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      {/* Action Bar */}
      <div className="no-print w-[210mm] max-w-full flex justify-end gap-3 mb-4 px-2">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-2xl shadow bg-black text-white text-sm hover:opacity-90"
        >
          Print / Save as PDF
        </button>
      </div>

      {/* A4 SHEET */}
      <div className="sheet relative bg-white w-[210mm] min-h-[297mm] shadow-xl rounded-xl p-[14mm]">
        <div className="watermark">ELECTION 2025</div>

        {/* Image Watermark */}
        <img
          src="/pngegg.png"
          alt="Ashoka Stambh"
          className="watermark2 w-[300px] h-[300px] object-contain"
          style={{ top: "20%", left: "20%" }} // shift position
        />

        {/* Header */}
        <header className="relative flex items-center gap-4 pb-4 border-b">
          {/* Emblem */}
          <div className="w-14 h-14 rounded-full border grid place-items-center text-xs font-bold overflow-hidden">
            <img src="/Election-Commission_Preview.png" alt="" srcset="" />
          </div>

          <div className="flex-1">
            <h1 className="text-xl font-extrabold leading-tight">
              Government of India
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
        <div>
          {/* Title */}
          <div className="mt-4 mb-2">
            <h2 className="text-lg font-bold tracking-wide">
              CANDIDATE DOSSIER – VILLAGE ELECTION 2025
            </h2>
            <p className="text-xs text-gray-600">
              Prepared as per applicable electoral guidelines for record and
              verification.
            </p>
          </div>

          {/* Candidate & Constituency Grid */}
          <section className="mt-4 grid grid-cols-12 gap-4 text-[13px]">
            {/* Left: Core Details */}
            <div className="col-span-8 space-y-2">
              <Field label="Candidate Name" value={name || "—"} />
              <div className="grid grid-cols-3 gap-3">
                <Field label="Age" value={c?.age ?? "—"} />
                <Field label="Gender" value={c?.gender ?? "—"} />
                <Field label="Education" value={c?.education ?? "—"} />
              </div>
              <Field
                label="Experience"
                value={c?.experience ?? "—"}
                multiline
              />
              <Field label="Status" value={c?.status ?? "—"} />
              <Field
                label="Party / Affiliation"
                value={c?.party.partyName ?? "Independent / —"}
              />
              <div className="grid grid-cols-2 gap-3">
                <Field label="Contact Email" value={c?.contact?.email ?? "—"} />
                <Field label="Contact Phone" value={c?.contact?.phone ?? "—"} />
              </div>
            </div>

            {/* Right: Photo + QR */}
            <div className="col-span-4 grid grid-rows-2 gap-4">
              <Box label="Candidate Photograph">
                {/* Drop an <img src=... /> here */}
                <div className="w-full h-full border border-dashed grid place-items-center text-xs text-gray-500">
                  <img src={c.image_of_Candidate} alt="" srcset="" />
                </div>
              </Box>
              <Box label="Verification QR">
                {/* Replace with a QR component/library if you like */}
                <div className="w-full h-full border border-dashed grid place-items-center text-xs text-gray-500">
                  QR Code / ID
                </div>
              </Box>
            </div>
          </section>

          {/* Constituency */}
          <section className="mt-4 text-[13px]">
            <h3 className="text-sm font-semibold mb-2">Constituency Details</h3>
            <div className="grid grid-cols-4 gap-3">
              <Field label="Village" value={c?.constituency?.village ?? "—"} />
              <Field
                label="District"
                value={c?.constituency?.district ?? "—"}
              />
              <Field label="State/UT" value={c?.constituency?.state ?? "—"} />
              <Field
                label="Constituency Code"
                value={c?.constituency?.code ?? "—"}
              />
            </div>
          </section>

          {/* Manifesto */}
          <section className="mt-4 text-[13px]">
            <h3 className="text-sm font-semibold mb-2">Key Manifesto Points</h3>
            {Array.isArray(c?.manifesto) && c.manifesto.length > 0 ? (
              <ul className="list-disc pl-5 leading-relaxed text-gray-700">
                {c.manifesto.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            ) : (
              <div className="text-gray-500">—</div>
            )}
          </section>

          {/* Totals & Meta */}
          <section className="mt-4 grid grid-cols-3 gap-3 text-[13px]">
            <Field
              label="Candidate ID"
              value={c?.candidateId ?? c?.id ?? c?._id ?? "—"}
            />
            <Field label="Voter ID (if applicable)" value={c?.voterId ?? "—"} />
          </section>

          {/* Declarations */}
          <section className="mt-6 text-[12px] leading-relaxed text-gray-700">
            <h3 className="text-sm font-semibold mb-2">Declarations</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                The information provided herein is based on submissions by the
                candidate and records available with the Commission.
              </li>
              <li>
                This document is intended for election administration purposes
                only.
              </li>
              <li>
                Any tampering or unauthorised reproduction is punishable under
                applicable laws.
              </li>
            </ol>
          </section>

          {/* Signatures & Stamp */}
          <section className="mt-8 grid grid-cols-2 gap-6 relative">
            <div>
              <SignatureBlock label="Candidate Signature" note="Name & Date" />
            </div>
            <div className="relative">
              <SignatureBlock label="Authorised Officer" note="Seal & Date" />
              <div className="stamp">
                <span className="stamp-ring" />
              </div>
            </div>
          </section>
        </div>
        {/* Footer */}
        <footer className="mt-10 pt-3 border-t text-[11px] text-gray-600 flex items-center justify-between">
          <div>
            <p>Prepared by: {issuedBy}</p>
            <p>Generated on: {formatDate(today)}</p>
          </div>
          <div className="text-right">
            <p>
              This is a system-generated document. Signature not required for
              validity.
            </p>
            <p>For verification, scan QR or contact the issuing authority.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

/*** Small utility components ***/
function Field({ label, value, multiline = false }) {
  return (
    <div className="w-full">
      <div className="text-[11px] text-gray-500 uppercase tracking-wide">
        {label}
      </div>
      {multiline ? (
        <div className="mt-1 min-h-[32px] p-2 border rounded-md bg-white">
          {value || "—"}
        </div>
      ) : (
        <div className="mt-1 p-2 border rounded-md bg-white">
          {String(value ?? "—")}
        </div>
      )}
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
