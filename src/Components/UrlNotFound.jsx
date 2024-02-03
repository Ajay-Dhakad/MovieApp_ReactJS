import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function UrlNotFound() {
  return (
    <div className="movie-results">
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        animate={{ opacity: 1 }}
        className="page404"
      >
        <h1>404</h1>
        <p>Page Not Found</p>
        <br />
        <Link to={"/"}>Go Home</Link>
      </motion.div>
    </div>
  );
}

export default UrlNotFound;
