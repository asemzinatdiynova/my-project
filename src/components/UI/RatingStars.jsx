import React from 'react';

function RatingStars({ score, reviewsCount }) {
  const stars = '★'.repeat(score) + '☆'.repeat(Math.max(0, 5 - score));
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '6px 0' }}>
      <span style={{ color: '#f59e0b', fontSize: '15px' }}>{stars}</span>
      <span style={{ fontSize: '13px', color: '#64748b' }}>({reviewsCount} оценок)</span>
    </div>
  );
}

export default RatingStars;