import React from "react";
import { motion } from "framer-motion";

interface ImageSectionProps {
  imageDescription: string;
  imageUrl?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  imageDescription,
  imageUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center shadow-md aspect-video relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageDescription}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <svg
              className="w-24 h-24 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-sm text-gray-500 absolute bottom-4">
              Image: {imageDescription}
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ImageSection;
