import React, { useEffect } from 'react';
import { X, Award, Calendar, Building2 } from 'lucide-react';

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  certification: {
    title: string;
    logo: string;
    description: string;
    detailedDescription?: string;
    level: string;
    issuer: string;
    expired?: boolean;
  } | null;
}

const CertificationModal: React.FC<CertificationModalProps> = ({ isOpen, onClose, certification }) => {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certification) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-background border border-secondary/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-text" />
        </button>

        {/* Modal content */}
        <div className="p-8">
          {/* Header with badge */}
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0">
              <img
                src={certification.logo}
                alt={`${certification.title} badge`}
                className="w-24 h-24 object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-accent" />
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  certification.expired ? 'text-gray-400' : 'text-accent'
                }`}>
                  {certification.level}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-text mb-2">
                {certification.title}
              </h2>
              <div className="flex items-center gap-2 text-text/60">
                <Building2 className="w-4 h-4" />
                <span className="text-sm">Issued by {certification.issuer}</span>
              </div>
            </div>
          </div>

          {/* Expired warning */}
          {certification.expired && (
            <div className="mb-6 flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-lg">
              <Calendar className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-500">
                This certification has expired
              </span>
            </div>
          )}

          {/* Detailed description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">About this Certification</h3>
            <p className="text-text/80 leading-relaxed">
              {certification.detailedDescription || certification.description}
            </p>
          </div>

          {/* Close button at bottom */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;
