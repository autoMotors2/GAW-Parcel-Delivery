import React from 'react';

// An email address with a line-break opportunity after the "@", so a long address that doesn't
// fit wraps as "info@" / "domain.com" instead of mid-word.
export const BreakableEmail: React.FC<{ email: string }> = ({ email }) => {
  const at = email.indexOf('@');
  if (at < 0) return <>{email}</>;
  return <>{email.slice(0, at + 1)}<wbr />{email.slice(at + 1)}</>;
};
