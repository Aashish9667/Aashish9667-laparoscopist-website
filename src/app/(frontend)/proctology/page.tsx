import * as React from 'react';

export default function Proctology() {
  return (
    <div className="mb-20">
      <div className="space-y-10 mt-20">
        {/* section1 */}
        <div className="bg-[rgb(234,237,243)]">
          <div className="mx-auto max-w-[1200px] md:px-6 md:pt-20 md:pb-15 p-6 pt-18 pb-12 ">
            <h1 className="text-[41px] font-semibold mb-6 ">Proctology</h1>
            <p className="text-[#00000099] text-[16px] mb-4 ">
              Proctology focuses on diagnosing and treating disorders of the rectum, anus, and
              surrounding tissues. Advanced techniques and patient-focused care are used to manage
              conditions effectively, ensuring optimal outcomes and relief.
            </p>
          </div>
        </div>
        {/* section2 */}
        <div className="bg-white md:px-6 md:py-10 p-6 mx-auto max-w-[1200px]">
          <h1 className="text-[32px] font-semibold mb-6 leading-tight md:leading-normal">
            Hemorrhoid Management
          </h1>
          <p className="text-[#00000099] text-[16px] mb-6 ">
            Hemorrhoids, or swollen veins in the rectal area, can cause discomfort and disrupt daily
            life. Treatment focuses on symptom relief and preventing complications.
          </p>
          <h1 className="text-[25px] font-semibold mb-6 ">Conservative Treatments</h1>
          <ul className="list-disc pl-12 text-[16px] space-y-2 text-[#00000099]">
            <li className="font-semibold">Dietary Changes:</li>
            <p>
              A high-fiber diet (fruits, vegetables, whole grains) and increased water intake help
              soften stools and prevent constipation, reducing strain during bowel movements.
            </p>
            <li className="font-semibold">Topical Treatments:</li>
            <p>
              Over-the-counter creams, ointments, or suppositories effectively relieve itching,
              pain, and swelling.
            </p>
            <li className="font-semibold">Warm Sitz Baths:</li>
            <p>
              Soaking the affected area in warm water multiple times a day alleviates discomfort and
              promotes healing.
            </p>
            <li className="font-semibold">Stool Softeners:</li>
            <p>These medications make bowel movements easier, reducing strain on hemorrhoids.</p>
          </ul>
          <h1 className="text-[25px] font-semibold mb-6 mt-6   ">Minimally Invasive Treatments:</h1>
          <ul className="list-disc  text-[16px] space-y-2 text-[#00000099]  pl-12 ">
            <li className="font-semibold">Rubber Band Ligation:</li>
            <p>
              This procedure involves placing a rubber band around the base of the hemorrhoid to cut
              off blood supply, causing it to shrink and fall off.
            </p>
            <li className="font-semibold">Sclerotherapy:</li>
            <p>
              A chemical solution is injected into the hemorrhoid to shrink it, providing relief for
              less severe cases.
            </p>
            <li className="font-semibold">Infrared Coagulation (IRC):</li>
            <p>
              A minimally invasive procedure that uses infrared light to create scar tissue, cutting
              off blood supply to the hemorrhoid and causing it to shrink.
            </p>
            <li className="font-semibold">
              Stapled Hemorrhoidopexy (MIPH – Minimally Invasive Procedure for Hemorrhoids):
            </li>
            <p>
              A surgical technique where a circular stapling device is used to reposition prolapsed
              hemorrhoidal tissue and cut off its blood supply. It is less painful than conventional
              surgery and promotes quicker recovery.
            </p>
          </ul>
          <h1 className="text-[25px] font-semibold mb-6 mt-6">Surgical Options:</h1>
          <ul className="list-disc pl-12 text-[16px] space-y-2 text-[#00000099]  ">
            <li className="font-semibold">Hemorrhoidectomy:</li>
            <p>
              In severe cases, surgical removal of hemorrhoids is performed, providing long-term
              relief.
            </p>
          </ul>
        </div>
        {/* section3 */}
        <div className="bg-[rgb(234,237,243)]">
          <div className=" md:p-6 p-6 py-15 mx-auto max-w-[1200px]">
            <h1 className="text-[32px] font-semibold mb-6 leading-tight md:leading-normal md:pt-12">
              STARR Procedure for ODS (Obstructive Defecation Syndrome)
            </h1>
            <p className="text-[#00000099] text-[16px] mb-4 ">
              Obstructive Defecation Syndrome (ODS) is a condition characterized by difficulty in
              stool passage due to rectal dysfunction. Commonly affecting older women, ODS is
              diagnosed through a defecogram, which provides imaging of the rectum during
              defecation.
            </p>
            <p className="text-[#00000099] text-[16px] mb-4 md:pb-10">
              The <strong>Stapled Trans-Anal Resection of Rectum (STARR)</strong> procedure is an
              effective surgical treatment for ODS. It involves resection of the rectum using a
              stapling device, resulting in significant symptom improvement and enhanced quality of
              life for patients
            </p>
          </div>
        </div>
        {/* section4 */}
        <div className="bg-white md:px-6 md:pt-10 md:pb-6 pt-8 px-6 mx-auto max-w-[1200px]">
          <h1 className="text-[32px] font-semibold mb-6 leading-tight md:leading-normal">
            Anal Fistula Management
          </h1>
          <p className="text-[#00000099] text-[16px] mb-6 ">
            An anal fistula is an abnormal connection between the anal canal and the skin near the
            anus. Effective management options include:
          </p>
          <h1 className="text-[25px] font-semibold mb-6 ">Minimally Invasive Treatment:</h1>
          <ul className="list-disc pl-12 text-[16px] space-y-2 text-[#00000099]">
            <li className="font-semibold">VAAFT (Video-Assisted Anal Fistula Treatment):</li>
            <p>
              This advanced technique is a less invasive alternative to traditional surgery. Using a
              specialized endoscope, the fistula is treated internally without leaving a wound,
              minimizing recovery time and eliminating the need for post-operative dressings. This
              method is ideal for select patients.
            </p>
          </ul>
          <h1 className="text-[25px] font-semibold mb-6 mt-6">Surgical Treatment:</h1>
          <ul className="list-disc pl-12 text-[16px] space-y-2 text-[#00000099]">
            <li className="font-semibold">Fistulectomy:</li>
            <p>Surgical removal of the fistula tract to promote healing and prevent recurrence.</p>
          </ul>
        </div>
      </div>
    </div>
  );
}
