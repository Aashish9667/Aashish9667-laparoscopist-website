'use client';
import * as React from 'react';

import { motion } from 'framer-motion';

export default function Laparoscopic() {
  return (
    <div className=" space-y-10 mt-20">
      {/* Section 1 */}
      <div className="bg-[rgb(234,237,243)]">
        <div className=" md:py-20 md:p-6 p-6 py-18 mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-semibold text-[32px] mb-6 md:leading-normal leading-tight">
              Laparoscopic Gynae Colposcopy
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-[16px] mb-6  text-[#00000099]">
              Colposcopy is a specialized diagnostic procedure that allows detailed examination of
              the uterine cervix using a colposcope. This instrument is critical in diagnosing
              abnormalities in the lower genital tract by analyzing the surface epithelium,
              connective tissue (stroma), and vascular patterns.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-semibold text-[25px] mb-6 md:leading-normal leading-tight">
              Evaluation Of Lower Genital Tract
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ul className="list-disc pl-10 text-[16px] space-y-0 text-[#00000099]">
              <li className="font-semibold md:ml-4">Lugol Iodine</li>
              <p className="md:ml-4 md:leading-normal">
                Lugol’s iodine is commonly used in medical examinations to help differentiate
                between normal and abnormal epithelial cells. When applied, healthy epithelial cells
                containing glycogen absorb the iodine and turn a dark brown color. In contrast,
                areas that do not take up the dark brown stain indicate abnormal or potentially
                unhealthy tissue. These suspicious regions can be identified instantly during the
                procedure and are typically investigated further through cytology or biopsy for
                accurate diagnosis.
              </p>

              <li className="font-semibold md:ml-4">Acetic Acid</li>
              <p className="md:ml-4  md:leading-tight">
                Applying 3–5% acetic acid highlights metaplastic and dysplastic areas, turning them
                into distinct aceto-white regions.
              </p>

              <li className="font-semibold md:ml-4">Green filter</li>
              <p className="md:ml-4 md:leading-tight">
                Improves visualization by absorbing red tones, making blood vessels appear as black
                streaks for better assessment.
              </p>

              <li className="font-semibold md:ml-4">Directed Biopsy</li>
              <p className="md:ml-4 md:leading-tight">
                Tissue samples are collected from the most abnormal areas under colposcopic guidance
                for accurate diagnosis. This is the gold standard for identifying cervical
                pre-cancerous conditions.
              </p>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-semibold text-[25px] mt-6 mb-6 ">Treatment Modalities</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ul className="list-disc pl-10 text-[16px] space-y-0 md:ml-4 md:leading-normal text-[#00000099]">
              <li className="font-semibold">Cryocautery</li>
              <p>
                This procedure involves freezing abnormal tissue to -20°C or lower using a
                cryoprobe, resulting in tissue destruction (cryo-necrosis). The dead tissue is
                naturally replaced with healthy tissue.
              </p>

              <li className="font-semibold">LEEP (Loop Electrosurgical Excision Procedure)</li>
              <p>
                A minimally invasive procedure to remove deeper cervical lesions. The excised tissue
                can be sent for histopathological examination, serving as both a diagnostic and
                therapeutic method.
              </p>
            </ul>
          </motion.div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="bg-white md:px-6 md:py-15 p-6 mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-semibold text-[32px] mb-6  md:leading-normal leading-tight">
            Laparoscopic Gynae Hysteroscopy
          </h1>{' '}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-[16px] mb-6  text-[#00000099]">
            Hysteroscopy is a procedure used to directly visualize the uterus using an endoscope,
            enabling both diagnostic and therapeutic interventions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-semibold text-[25px] mb-6  ">Diagnostic Applications</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ul className="list-disc pl-10 text-[16px] space-y-0 text-[#00000099] md:ml-4 md:leading-normal">
            <li className="font-semibold">Abnormal Uterine Bleeding (AUB/DUB)</li>
            <p>
              Hysteroscopy helps detect conditions like normal endometrium, submucous myoma,
              endometrial polyps, hyperplasia, or cancer, which may cause abnormal bleeding.
            </p>

            <li className="font-semibold">Lost or Misplaced IUCD</li>
            <p>Enables precise location and safe removal of misplaced intrauterine devices.</p>

            <li className="font-semibold">Infertility Evaluation</li>
            <p>
              Provides a detailed view of the cervical canal, uterine cavity, tubal ostia, and
              intramural segments of the fallopian tubes. Common issues like adhesions, fibroids,
              polyps, or septae can be identified.
            </p>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-semibold text-[25px] mt-6 mb-6 md:leading-normal leading-tight ">
            Therapeutic Applications
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ul className="list-disc pl-10 text-[16px] space-y-0 md:ml-4 md:leading-tight text-[#00000099]">
            <li className="font-semibold">Endometrial Ablation</li>
            <p>A proven treatment for abnormal uterine bleeding.</p>

            <li className="font-semibold">Polyp and Fibroid Removal</li>
            <p>Submucous fibroids and polyps are safely removed during hysteroscopy.</p>

            <li className="font-semibold">Adhesion Treatment (Asherman’s Syndrome)</li>
            <p>Effectively treats intrauterine adhesions and restores normal uterine structure.</p>

            <li className="font-semibold">Foreign Body Removal</li>
            <p>Ensures the safe removal of any foreign objects within the uterus.</p>

            <li className="font-semibold">Fallopian Tube Catheterization and Biopsy</li>
            <p>Allows for opening blockages and obtaining tissue samples for analysis.</p>
          </ul>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="bg-[rgb(234,237,243)]">
        <div className="md:py-20 md:p-6 p-6 py-15 mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-semibold text-[32px] mb-6  md:leading-normal leading-tight">
              Diagnostic Laparoscopy
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-[16px] mb-6  text-[#00000099]">
              Diagnostic laparoscopy is a minimally invasive procedure used to visualize and
              evaluate abdominal and pelvic organs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-semibold text-[25px]  mb-6 ">Applications in Infertility</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ul className="list-disc pl-10 text-[16px] space-y-0  text-[#00000099] md:ml-4 md:leading-normal">
              <li className="font-semibold">Tubal Patency Evaluation</li>
              <p>Assesses whether fallopian tubes are open and functional.</p>

              <li className="font-semibold">Ovarian Drilling (for PCOS)</li>
              <p>
                Treats polycystic ovarian syndrome by reducing ovarian cysts and improving
                fertility.
              </p>

              <li className="font-semibold">Adhesion Assessment and Treatment</li>
              <p>Identifies and removes pelvic adhesions caused by infections or endometriosis.</p>

              <li className="font-semibold">Endometriosis Detection</li>
              <p>Confirms and treats endometrial tissue growth outside the uterus.</p>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-semibold text-[25px] mt-6 mb-6">Other Diagnostic Uses</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ul className="list-disc pl-10 text-[16px] space-y-0  text-[#00000099] md:ml-4 leading-normal">
              <li>
                Investigating unexplained pelvic pain, suspected ectopic pregnancy, or ovarian
                cancer.
              </li>
              <li>Follow-up evaluations for cancer treatment.</li>
            </ul>
          </motion.div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="bg-white md:px-6 md:py-15 p-6 mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-semibold text-[32px] mb-6  md:leading-normal leading-tight">
            Operative Laparoscopy
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-[16px] mb-6 md:mb-6 text-[#00000099]">
            Laparoscopy offers solutions for various gynecological conditions with precision and
            minimal recovery time.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-semibold text-[25px] mb-6  ">A) Tubal Surgeries</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ul className="list-disc pl-10 text-[16px] space-y-0  text-[#00000099] md:ml-4 md:leading-normal">
            <li className="font-semibold">Family Planning (Sterilization)</li>
            <p>Permanent birth control through tubal ligation to prevent ovum passage.</p>

            <li className="font-semibold">Tubal Reconstruction/Recanalization</li>
            <p>Repairs damaged fallopian tubes, addressing blockages or injuries.</p>

            <li className="font-semibold">Ectopic Pregnancy Management</li>
            <p>Removes ectopic pregnancies via tubal conservation or excision.</p>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-semibold text-[25px] mt-6 mb-6  ">B) Uterine Surgeries</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ul className="list-disc pl-10 text-[16px] space-y-0  text-[#00000099] md:ml-4 md:leading-normal">
            <li className="font-semibold">Myomectomy for Fibroids</li>
            <p>Removes fibroids laparoscopically while preserving fertility.</p>

            <li className="font-semibold">Hysterectomy</li>
            <p>
              Total laparoscopic hysterectomy (TLH) and laparoscopic-assisted vaginal hysterectomy
              (LAVH) are safe and effective methods for uterus removal.
            </p>

            <li className="font-semibold">Cancer Surgery</li>
            <p>Advanced laparoscopic procedures like Wertheim’s hysterectomy.</p>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-semibold text-[25px] mt-6 mb-6  ">C) Ovarian Surgeries</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ul className="list-disc pl-10 text-[16px] space-y-0  text-[#00000099] md:ml-4 md:leading-normal ">
            <li className="font-semibold">Ovarian Cystectomy</li>
            <p>Safely removes ovarian cysts while conserving the ovary.</p>

            <li className="font-semibold">Tubo-Ovarian Mass Removal</li>
            <p>Treats masses resulting from pelvic infections or other conditions.</p>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-semibold text-[25px] mt-6 mb-6">D) Endometriosis Treatment</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ul className="list-disc pl-10 text-[16px] space-y-0  text-[#00000099] md:ml-4 md:leading-normal">
            <li className="font-semibold">Early Stages</li>
            <p>Small lesions are identified and destroyed under magnification.</p>

            <li className="font-semibold">Advanced Cases</li>
            <p>
              Adhesiolysis, cyst removal, and other interventions address extensive damage caused by
              endometriosis.
            </p>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-semibold text-[25px] mt-6 mb-6">E) Other Procedures</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ul className="list-disc pl-10 text-[16px] space-y-0  text-[#00000099] md:ml-4 md:leading-normal">
            <li>Removal of misplaced IUCDs</li>
            <li>Sacro-colpopexy for vaginal vault prolapse</li>
          </ul>
        </motion.div>
      </div>

      {/* Section 5 */}
      <div className="bg-[rgb(234,237,243)]">
        <div className=" md:py-20 md:px-6 py-15 px-6 mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-semibold text-[32px] mb-6  md:leading-normal leading-tight">
              Vaginal Surgery
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <hr className="my-4 border-t border-gray-260" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-[25px] text-[#000000de] mb-6 font-semibold">Common Procedures:</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ul className="list-disc pl-10 text-[16px] space-y-0 text-[#00000099] leading-relaxed">
              <li>Repair of uterine prolapse and perineal tears</li>
              <li>Vaginal hysterectomy (NDVH/VH) with cystocele or rectocele repair</li>
              <li>Removal of cervical polyps and vaginal wall cysts</li>
              <li>Treatment of stress urinary incontinence using TVT/TOT tapes</li>
              <li>Vaginoplasty for vaginal agenesis</li>
              <li>Vulvectomy and urinary fistula repair</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
