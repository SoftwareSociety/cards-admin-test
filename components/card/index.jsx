import { Card as BSCard } from 'react-bootstrap';

export default function Card({ title, children }) {
  return (
    <BSCard className='mb-4'>
      <BSCard.Header>{title}</BSCard.Header>
      <BSCard.Body className='text-muted'>{children}</BSCard.Body>
    </BSCard>
  );
}
