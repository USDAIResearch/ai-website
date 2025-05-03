'use client'
import { useEffect } from 'react';
import { redirect } from 'next/navigation'

const AISymphosiumPage = () => {
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    redirect(`/events/ai-symposium/${currentYear}`);
  }, []);

  return <div>Redirecting to the AI Symposium {new Date().getFullYear()}...</div>;
};

export default AISymphosiumPage;
