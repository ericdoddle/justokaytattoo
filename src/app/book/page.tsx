import { Button } from '@/components/Button';
import { SimpleLayout } from '@/components/SimpleLayout';
import { MAILING_LIST } from '@/lib/constants';

export const metadata = {
  title: 'Book',
  description: 'Ari books via their mailing list.',
};

export default function Booking() {
  return (
    <SimpleLayout
      title='Book'
      intro={
        <>
          <p className='mb-6'>Ari books via their mailing list. </p>
          <Button href={MAILING_LIST}>Click to join</Button>
          <p className='mt-6'>
            If the above link is not working for you, email them at
            <br />
            <b> {'justokaytattoo@gmail.com'} </b>
            <br />
            and they will add you manually.
          </p>
          <p className='mt-6'>
            Last-minute availability will be announced via Instagram stories but
            in general, you will find the booking form via their mailing list,
            approx once a month.
          </p>
          <p className='mt-6'>
            If you are passing through town and cannot wait, email us your
            inquiry.
          </p>
        </>
      }></SimpleLayout>
  );
}
