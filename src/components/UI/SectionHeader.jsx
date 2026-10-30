import React from 'react';

function SectionHeader({ title, subtitle, align = 'center' }) {
  return (
    <div style={{ textAlign: align, margin: '36px 0 20px' }}>
      <h2 style={{ fontSize: '26px', color: '#0f172a', margin: '0 0 6px 0' }}>{title}</h2>
      {subtitle && <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;