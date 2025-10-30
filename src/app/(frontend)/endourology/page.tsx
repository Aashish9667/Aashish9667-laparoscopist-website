import * as React from 'react';

export default function Endourology() {
  return (
    <div className="break-words overflow-hidden ">
      {/* Section 1 */}
      <div className="bg-[rgb(234,237,243)] w-full">
        <div className="mt-20 p-8 pb-10  pt-18 md:pt-23  mx-auto max-w-[1200px]">
          <h1 className="text-[41px] font-semibold mb-6">Endourology</h1>
          <p className="text-[16px] text-[#00000099] md:leading-relaxed pb-5 md:pb-15">
            Endourology is a specialized branch of urology that focuses on diagnosing and treating
            urinary tract disorders using minimally invasive techniques. These advanced procedures
            provide effective solutions for various conditions while minimizing patient recovery
            time.
          </p>
        </div>
      </div>

      {/* PCNL Section */}
      <div className="bg-white p-8  py-15  mx-auto max-w-[1200px]">
        <h1 className="text-[32px] font-semibold mb-6 leading-tight md:leading-normal">
          PCNL <br className="md:hidden" />
          (Percutaneous <br className="md:hidden" /> Nephrolithotomy)
        </h1>
        <p className="text-[16px] md:leading-relaxed mb-6  text-[#00000099]">
          PCNL is a surgical procedure used to remove large kidney stones (greater than 2 cm)
          located near the pelvic region.
        </p>
        <ul className="list-disc pl-10 md:space-y-2  text-[#00000099]">
          <li className="text-[16px] md:leading-relaxed font-semibold">Procedure Details:</li>
          <li className="text-[16px] md:leading-relaxed ml-6 ">
            A small puncture (approximately 1 cm) is made through the skin to access the kidney.
          </li>
          <li className="text-[16px] md:leading-relaxed ml-6 ">
            The procedure is guided by imaging techniques such as X-rays.
          </li>
          <li className="text-[16px] md:leading-relaxed ml-6 ">
            A nephroscope is used to directly visualize and remove the stone.
          </li>
          <li className="text-[16px] md:leading-relaxed font-semibold ml-2">Anesthesia:</li>
          <p className="text-[16px] md:leading-relaxed pl-4">
            PCNL is typically performed under general or spinal anesthesia.
          </p>
          <li className="text-[16px] md:leading-relaxed font-semibold ml-2">Ideal Candidates:</li>
          <p className="text-[16px] md:leading-relaxed pl-4">
            Patients with large kidney stones that cannot be treated effectively with other methods.
          </p>
        </ul>
      </div>

      {/* URS Section */}
      <div className="bg-[rgb(234,237,243)] ">
        <div className="mx-auto max-w-[1200px] p-8  py-15">
          <h1 className="text-[32px] font-semibold mb-6 leading-tight md:leading-normal">
            URS (Ureteroscopy)
          </h1>
          <p className="text-[16px] leading-tight md:md:leading-relaxed mb-2 md:mb-6 text-[#00000099]">
            Ureteroscopy is a minimally invasive procedure used to diagnose and treat stones in the
            ureter and kidney.
          </p>
          <ul className="list-disc pl-10 md:space-y-2  text-[#00000099]">
            <li className="text-[16px] font-semibold">Procedure Details:</li>
            <li className="text-[16px] ml-6 md:leading-tight">
              A thin telescope (ureteroscope) is inserted through the bladder and into the ureter.
            </li>
            <li className="text-[16px] ml-6 md:leading-tight">
              Stones are located and either fragmented using lasers or removed entirely.
            </li>
            <li className="text-[16px] font-semibold">Advantages:</li>
            <li className="text-[16px] ml-6 md:leading-tight">
              No external incisions are required.
            </li>
            <li className="text-[16px] ml-6 md:leading-tight">
              Effective for treating ureteral and smaller kidney stones.
            </li>
            <li className="text-[16px] font-semibold">Suitability:</li>
            <p className="text-[16px] md:leading-relaxed pl-2">
              Best for patients with small to medium-sized stones in the ureter or kidney.
            </p>
          </ul>
        </div>
      </div>

      {/* TURBT Section */}
      <div className="bg-white p-8  py-15 mx-auto max-w-[1200px]">
        <h1 className="text-[32px] font-semibold mb-6 leading-tight md:leading-normal">
          TURBT (Transurethral Resection of Bladder Tumor)
        </h1>
        <p className="text-[16px] md:leading-relaxed mb-2 md:mb-6 text-[#00000099]">
          TURBT is a procedure to treat bladder tumors by removing them through a minimally invasive
          technique.
        </p>
        <ul className="list-disc pl-10 md:space-y-2  text-[#00000099]">
          <li className="text-[16px] font-semibold">Procedure Details:</li>
          <li className="text-[16px] ml-6 md:leading-tight">
            A special telescope called a resectoscope is used to scrape out the tumor.
          </li>
          <li className="text-[16px] ml-6 md:leading-tight">
            Often, no further treatment is required if the tumor is completely removed.
          </li>
          <li className="text-[16px] font-semibold">Purpose:</li>
          <li className="text-[16px] ml-6 md:leading-tight">
            Primarily used for diagnosing and treating bladder cancer.
          </li>
        </ul>
      </div>

      {/* RIRS Section */}
      <div className="bg-[rgb(234,237,243)]">
        <div className="mx-auto max-w-[1200px]  p-8  py-15">
          <h1 className="text-[32px] font-semibold mb-6 leading-tight md:leading-normal whitespace-nowrap md:whitespace-normal">
            RIRS (Retrograde <br className="md:hidden" />
            Intrarenal Surgery)
          </h1>
          <p className="text-[16px] md:leading-relaxed mb-6 text-[#00000099]">
            RIRS is a highly advanced, minimally invasive procedure for treating kidney conditions.
          </p>
          <ul className="list-disc pl-10 md:space-y-2  text-[#00000099]">
            <li className="text-[16px] font-semibold">Procedure Details:</li>
            <li className="text-[16px] ml-6 md:leading-tight">
              The instrument enters through natural body openings, traveling through the bladder and
              ureter to access the kidney.
            </li>
            <li className="text-[16px] ml-6 md:leading-tight">
              Stones, strictures (narrowing), or tumors within the kidney are treated without
              external incisions.
            </li>
            <li className="text-[16px] font-semibold">Applications:</li>
            <li className="text-[16px] ml-6 md:leading-tight">Removal of kidney stones.</li>
            <li className="text-[16px] ml-6 md:leading-tight">
              Treatment of kidney outlet narrowing or strictures.
            </li>
            <li className="text-[16px] ml-6 md:leading-tight">Removal of kidney tumors.</li>
            <li className="text-[16px] font-semibold">Anesthesia:</li>
            <p className="text-[16px] md:leading-relaxed ml-2">
              This outpatient procedure is performed under local, intravenous, or general
              anesthesia.
            </p>
            <li className="text-[16px] font-semibold">Benefits:</li>
            <li className="text-[16px] ml-6 md:leading-tight">No external scars.</li>
            <li className="text-[16px] ml-6 md:leading-tight">Short recovery time.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
