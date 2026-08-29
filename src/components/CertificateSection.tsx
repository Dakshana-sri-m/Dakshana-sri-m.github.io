import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CertificateItem } from '../types/portfolio';

export const CertificateSection: React.FC = () => {
  const { data, isEditMode, addCertificate, updateCertificate, deleteCertificate } = usePortfolio();
  const { certificates } = data;

  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [isEditingModal, setIsEditingModal] = useState(false);
  const [editingCert, setEditingCert] = useState<CertificateItem | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleOpenAdd = () => {
    const newCert: CertificateItem = {
      id: `cert-${Date.now()}`,
      name: '',
      issuer: '',
      date: '',
      credentialCode: '',
      verificationUrl: '',
      description: '',
      focus: []
    };
    setEditingCert(newCert);
    setIsEditingModal(true);
  };

  const handleOpenEdit = (cert: CertificateItem) => {
    setEditingCert({ ...cert });
    setIsEditingModal(true);
  };

  const handleSaveModal = () => {
    if (!editingCert) return;
    const exists = certificates.some(c => c.id === editingCert.id);
    if (exists) {
      updateCertificate(editingCert.id, editingCert);
    } else {
      addCertificate(editingCert);
    }
    setIsEditingModal(false);
    setEditingCert(null);
  };

  return (
    <section id="certificate" className="py-20 lg:py-28 border-b border-[#141414]/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#141414]/10">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#1D4D43] uppercase mb-1 font-semibold">
              // SECTION 02
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#151515] tracking-tight">
              CERTIFICATE
            </h2>
          </div>
          <div className="flex items-center space-x-3 mt-3 md:mt-0">
            <span className="font-mono text-xs text-[#6B6964]">
              VERIFIED CREDENTIAL ARCHIVE ({certificates.length})
            </span>
            {isEditMode && (
              <button
                onClick={handleOpenAdd}
                className="px-3.5 py-1.5 bg-[#1D4D43] text-white text-xs font-mono rounded hover:bg-[#153831] shadow-xs flex items-center space-x-1"
              >
                <span>+ ADD CERTIFICATE</span>
              </button>
            )}
          </div>
        </div>

        {/* Certificate Editorial Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group bg-[#FAF8F5]/90 border border-[#141414]/15 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-[#1D4D43]/40 hover:shadow-[0_8px_24px_rgba(20,20,20,0.04)] transition-all duration-300 relative"
            >
              {/* Header Metadata */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#6B6964] pb-3 mb-4 border-b border-[#141414]/10">
                  <span className="text-[#1D4D43] font-semibold">REF // 0{index + 1}</span>
                  <span>{cert.date}</span>
                </div>

                <div className="text-[11px] font-mono text-[#7A7771] uppercase tracking-wider mb-1">
                  {cert.issuer}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#151515] mb-3 leading-snug">
                  {cert.name}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#4A4742] leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Focus Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.focus.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 bg-white border border-[#141414]/10 rounded text-[#33312C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Signatories or Authority if present */}
                {cert.signatories && cert.signatories.length > 0 && (
                  <div className="text-[11px] font-sans text-[#6B6964] mb-4 bg-white/50 p-2.5 rounded border border-[#141414]/10">
                    <span className="font-mono text-[10px] uppercase text-[#7A7771] block mb-0.5">
                      Signatories / Mentors:
                    </span>
                    {cert.signatories.join(' · ')}
                  </div>
                )}

                {/* Credential Code Box */}
                <div className="bg-white/80 p-3 rounded border border-[#141414]/10 flex items-center justify-between text-xs font-mono mb-6">
                  <div>
                    <span className="text-[10px] text-[#7A7771] uppercase block">Credential ID</span>
                    <span className="font-bold text-[#151515] select-all">{cert.credentialCode}</span>
                    {cert.userId && (
                      <span className="block text-[9px] text-[#88857E]">User ID: {cert.userId}</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleCopyCode(cert.credentialCode)}
                    className="px-2.5 py-1 text-[10px] uppercase bg-black/5 hover:bg-black/10 rounded transition-colors text-[#151515]"
                  >
                    {copiedCode === cert.credentialCode ? 'COPIED ✓' : 'COPY'}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#141414]/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="px-3.5 py-1.5 bg-[#151515] text-white text-xs font-mono uppercase tracking-wider rounded-sm hover:bg-[#1D4D43] transition-colors"
                  >
                    VIEW CERTIFICATE
                  </button>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="px-3.5 py-1.5 bg-white border border-[#141414]/20 text-[#151515] text-xs font-mono uppercase tracking-wider rounded-sm hover:border-[#1D4D43] hover:text-[#1D4D43] transition-colors"
                  >
                    VIEW PDF
                  </button>
                </div>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#1D4D43] font-semibold hover:underline flex items-center space-x-1"
                  >
                    <span>VERIFY</span>
                    <span>↗</span>
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-[#8C8880] italic">
                    VERIFICATION LINK NOT ADDED
                  </span>
                )}

                {/* Edit Controls in Edit Mode */}
                {isEditMode && (
                  <div className="w-full mt-3 pt-2 border-t border-dashed border-[#141414]/20 flex items-center justify-end space-x-2">
                    <button
                      onClick={() => handleOpenEdit(cert)}
                      className="text-xs font-mono text-emerald-800 hover:underline"
                    >
                      ✎ Edit
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete certificate "${cert.name}"?`)) {
                          deleteCertificate(cert.id);
                        }
                      }}
                      className="text-xs font-mono text-red-700 hover:underline"
                    >
                      ✕ Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#FAF8F5] border border-[#141414]/30 max-w-3xl w-full p-6 sm:p-8 rounded-sm shadow-2xl max-h-[92vh] overflow-y-auto">
            <div className="flex justify-between items-start pb-4 border-b border-[#141414]/15 mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D4D43] font-semibold block mb-1">
                  OFFICIAL RECORD PREVIEW
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#151515]">
                  {selectedCert.name}
                </h3>
                <span className="text-xs font-mono text-[#6B6964] block mt-1">
                  {selectedCert.issuer} · {selectedCert.date}
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-3 py-1 font-mono text-xs bg-black/5 hover:bg-black/10 rounded transition-colors text-[#151515]"
              >
                ✕ CLOSE
              </button>
            </div>

            {/* Certificate Presentation Document Box */}
            <div className="p-8 sm:p-12 bg-white border-2 border-[#141414]/20 rounded-sm shadow-inner text-center relative mb-6">
              <div className="absolute top-4 left-4 font-mono text-[9px] text-[#99968F] uppercase">
                ACADEMIC & PROFESSIONAL CREDENTIAL
              </div>
              <div className="absolute top-4 right-4 font-mono text-[9px] text-[#1D4D43] font-bold uppercase">
                VERIFIED ARCHIVE
              </div>

              <div className="my-6">
                <div className="font-serif text-xs uppercase tracking-widest text-[#7A7771] mb-2">
                  THIS CERTIFIES THAT
                </div>
                <div className="font-serif text-3xl sm:text-4xl text-[#151515] font-semibold border-b border-[#141414]/20 inline-block pb-2 px-8">
                  DAKSHANA SRI M
                </div>
                <div className="font-serif text-sm italic text-[#55524C] mt-3 max-w-lg mx-auto">
                  has successfully demonstrated capability and fulfilled requirements for
                </div>
                <div className="font-serif text-xl sm:text-2xl text-[#1D4D43] font-bold mt-2">
                  {selectedCert.name}
                </div>
              </div>

              <p className="font-sans text-xs text-[#55524C] max-w-md mx-auto leading-relaxed mb-6">
                {selectedCert.description}
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-[#141414]/10 pt-6 text-left text-xs font-mono">
                <div>
                  <span className="text-[#8C8880] uppercase text-[10px] block">ISSUED BY</span>
                  <span className="font-medium text-[#151515]">{selectedCert.issuer}</span>
                </div>
                <div className="text-right">
                  <span className="text-[#8C8880] uppercase text-[10px] block">CREDENTIAL ID</span>
                  <span className="font-bold text-[#1D4D43] select-all">{selectedCert.credentialCode}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopyCode(selectedCert.credentialCode)}
                  className="px-3 py-1.5 bg-black/5 hover:bg-black/10 rounded transition-colors text-[#151515]"
                >
                  {copiedCode === selectedCert.credentialCode ? 'COPIED CODE ✓' : 'COPY CREDENTIAL ID'}
                </button>
              </div>

              {selectedCert.verificationUrl ? (
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-[#1D4D43] text-white rounded hover:bg-[#153831] transition-colors font-semibold flex items-center space-x-1"
                >
                  <span>OFFICIAL VERIFICATION PORTAL ↗</span>
                </a>
              ) : (
                <span className="text-[#8C8880] italic">VERIFICATION LINK NOT ADDED</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Add/Edit Modal */}
      {isEditingModal && editingCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#FAF8F5] border border-[#141414]/30 max-w-2xl w-full p-6 rounded-sm shadow-2xl max-h-[90vh] overflow-y-auto font-sans">
            <div className="flex justify-between items-center pb-4 border-b border-[#141414]/15 mb-4">
              <h3 className="font-serif text-xl font-bold text-[#151515]">
                {certificates.some(c => c.id === editingCert.id) ? 'Edit Certificate' : 'Add New Certificate'}
              </h3>
              <button
                onClick={() => setIsEditingModal(false)}
                className="text-[#6B6964] hover:text-[#151515] font-mono text-sm"
              >
                ✕ CLOSE
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Certificate Title</label>
                <input
                  type="text"
                  value={editingCert.name}
                  onChange={(e) => setEditingCert({ ...editingCert, name: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-sm"
                  placeholder="e.g. Data Analytics Job Simulation"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Issuer / Organization</label>
                  <input
                    type="text"
                    value={editingCert.issuer}
                    onChange={(e) => setEditingCert({ ...editingCert, issuer: e.target.value })}
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                    placeholder="e.g. Deloitte (via Forage)"
                  />
                </div>
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Issue Date</label>
                  <input
                    type="text"
                    value={editingCert.date}
                    onChange={(e) => setEditingCert({ ...editingCert, date: e.target.value })}
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                    placeholder="e.g. March 28, 2026"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Credential Code / ID</label>
                  <input
                    type="text"
                    value={editingCert.credentialCode}
                    onChange={(e) => setEditingCert({ ...editingCert, credentialCode: e.target.value })}
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded font-mono text-xs"
                    placeholder="e.g. DoK5HySvEFfwT4QnW"
                  />
                </div>
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Verification URL (Optional)</label>
                  <input
                    type="text"
                    value={editingCert.verificationUrl || ''}
                    onChange={(e) => setEditingCert({ ...editingCert, verificationUrl: e.target.value })}
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                    placeholder="Leave blank if not available"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Description & Modules Covered</label>
                <textarea
                  rows={3}
                  value={editingCert.description}
                  onChange={(e) => setEditingCert({ ...editingCert, description: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                  placeholder="Summary of skills and modules completed..."
                />
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Focus Tags (Comma-separated)</label>
                <input
                  type="text"
                  value={editingCert.focus.join(', ')}
                  onChange={(e) => setEditingCert({
                    ...editingCert,
                    focus: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                  })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-mono text-xs"
                  placeholder="Data Analysis, Forensic Technology, Python"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#141414]/10 flex justify-end space-x-2">
              <button
                onClick={() => setIsEditingModal(false)}
                className="px-4 py-1.5 border border-[#141414]/20 rounded font-mono text-xs hover:bg-black/5"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveModal}
                className="px-4 py-1.5 bg-[#1D4D43] text-white rounded font-mono text-xs hover:bg-[#153831]"
              >
                Save Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
