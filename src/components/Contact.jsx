import { CONTACT } from "../data/index";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-mainLight text-black border border-neutral-900 flex flex-col items-center justify-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-10 mt-8 text-center text-4xl"
      >
        {" "}
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          {CONTACT.phoneNr}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="mt-4 mb-8 border-b border-black w-fit"
          onClick={() => window.open(`mailto:${CONTACT.email}`)}
          style={{ cursor: "pointer" }}
        >
          {CONTACT.email}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
