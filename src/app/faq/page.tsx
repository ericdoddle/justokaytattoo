import { type Metadata } from 'next';

import { SimpleLayout } from '@/components/SimpleLayout';
import { Accordion, AccordionItem } from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about the tattoo process.',
};

const accordionItems: AccordionItem[] = [
  {
    title: 'Cost',
    description: (
      <div>
        <p>
          Ari works on a bid system, pricing a tattoo based on various
          considerations like size, placement, level of detail and complexity.
          <br />
          <br />
          <strong>Most palm sized tattoos</strong> <br />
          range between $200-500.
          <br />
          <br />
          <strong>The minimum</strong> is $200.{' '}
        </p>
        <p>
          <strong>Booking fee</strong> - $150-250 <br />
          Booking fees are used to confirm an appointment, reserve a flash or
          get work started on a custom.{' '}
        </p>
        <p>
          Booking fees go towards the cost of the tattoo and are non-refundable.
          <br />
          <br />
          Ari is currently offering discounts for <strong>
            large scale
          </strong>{' '}
          work and willing to work within most budgets
        </p>
      </div>
    ),
  },
  {
    title: 'Non-monetary tips',
    description: (
      <div>
        <p>
          Cash is always appreciated.
          <br />
          <br />
          Ari also accepts non-monetary tips such as:
          <br />
        </p>
        <p>
          <strong>
            <em>things you’d find at an estate sale:</em>
          </strong>{' '}
          <br />
          knick-knacks, things that you’d put on a shrine, singing bowls, rocks,
          crystals, odd esoteric quirky items, rare/special coins, occult
          things, old magazines / vintage pornography (pre-2000) for collage,
          cross stitch, religious icongraphy/icons.{' '}
        </p>
        <p>
          <strong>
            <em>Books:</em>
          </strong>
          <br />
          art/furniture /object design books, <br />
          anything Akira 92/98 <br />
          <br />
          gashapon / blind bag items
        </p>
        <p>handmade items, art</p>
        <p>
          <br />
          Radiohead
          <br />
          fallout universe
        </p>
        <br />
        <p>
          stickers!
          <br />
          <br />
          <strong>
            <em>curious?</em>
          </strong>{' '}
          ask!
          <br />
        </p>
      </div>
    ),
  },
  {
    title: 'Prepping for my appointment',
    description: (
      <p>
        <strong>Q:</strong> How can I best prepare for my tattoo appointment?
        <br />
        <br />
        <strong>A:</strong> Rest.
        <br />
        Avoid alcohol for 24 hours prior. <br />
        Avoid sunburn.
        <br />
        Please DO NOT shave area ahead of time.
        <br />
        Moisturize posible tattoo sites.
        <br />
        Get a full nights sleep. Eat a full meal before the appointment. Avoid
        caffeine before the appointment. <br />
        <br />
        Alcohol, caffeine and blood thinning medications (ie Asprin) thin the
        blood and make it more difficult for your skin to accept ink. <br />
        ———————————-
        <br />
        <em>
          Consult with your doctor before making changes to your daily routine.
        </em>
      </p>
    ),
  },
  {
    title: 'After care',
    description: (
      <p>
        <strong>NO</strong> pools, oceans, saunas, hot tubs, rivers, lakes etc
        for 3 weeks minimum. Longer if your tattoo is not fully healed. <br />
        <br />
        The sun is not your friend in general for tattoo longevity and
        especially when its freshly healing.
        <br />
        <br />
        <em>If you were given a second skin bandage:</em> <br />
        While it is on you do not have to actively clean the tattoo. You can
        shower with the bandage on. <br />
        <br />
        Leave the second skin on for 3-4 days. Remove in the shower, under warm
        running water. Remove early if you see redness forming around the edges
        of the bandage. This is usually signs of an allergic reaction to the
        adhesive found in second skins. If the bandage rolls up and exposes part
        of the tattoo, remove bandage.
        <br />
        Proceed to <em>standard aftercare</em>
        <br />
        <br />
        <em>Standard aftercare:</em>
        <br />
        Wash tattoo with unscented antibacterial soap 2-3x a day for the next
        two weeks. Moisturize the tattoo with a non-scented paraben free white
        lotion with a thin layer that is gently rubbed in. Do not over apply
        lotion. Do not use A&amp;D, vasaline or aquaphor. <br />
        <br />
        If you believe you have an infection, seek medical attention. <br />
        —————————————
        <br />
        <em>
          this is for informational or educational purposes only, and does not
          substitute professional medical advice or consultations with
          healthcare professionals.
        </em>
        <br />
        <br />
      </p>
    ),
  },
  {
    title: 'Bring a guest?',
    description: (
      <p>
        <strong>Q:</strong> Can I bring a guest?
        <br />
        <strong>A:</strong> It depends
        <br />
        You can bring a guest to Ari’s private studio, IF you let us know in
        advance. <br />
        If it makes you feel more comfortable, for moral support, you are
        welcome to have someone with you. Just check with us in advance. <br />
        <br />
        Guest spots are location specific.
        <br />
      </p>
    ),
  },
  {
    title: 'Can you copy this?',
    description: (
      <div>
        <p>
          <strong>Q:</strong> Can you copy this design? <br />
          <strong>A:</strong> It depends. <br />
          <br />
          <strong>Q: </strong>I want this piece of flash but it’s already been
          claimed.
          <br />
          <strong>A:</strong> Ari can make / find / design something similar but
          will not tattoo claimed flash pieces unless stated in the design
        </p>
        <p>
          <strong>Q:</strong> What if the design is mine or my families original
          design, creation etc? <br />
          <strong>A: </strong>Yes! <br />
          <br />
          <strong>Q:</strong> What if the design from another tattoo artist?
          <br />
          <strong>A:</strong> You’ll need a tattoo pass. Ari doesn’t steal flash
          or designs from other tattoo artists. They’re happy to make something
          inspired by reference imagery but without a tattoo pass, no.
          <br />
          <br />
          <strong>Q:</strong> What about a design from a non-tattoo artist?
          <br />
          <strong>A:</strong> Similar answer to above, get a tattoo pass. If the
          artist is dead, extremely famous, extenuating circumstances will be
          considered.
          <br />
          i.e A Salvador Dali? Yes!
          <br />
        </p>
      </div>
    ),
  },
  {
    title: 'Seeing designs early',
    description: (
      <p>
        <strong>Q:</strong> Can I see my custom design before the appointment?
        <br />
        <br />
        <strong>A:</strong> Ari tries to send designs early so clients can offer
        necessary revisions before the appointment. <br />
        Custom pricing factors in 1 round of minor revisions. Scope creep and
        excessive revisions will use the booking fee to account for additional
        drawing time.
      </p>
    ),
  },
  {
    title: 'Studio location',
    description: (
      <p>
        Location will be provided only after the booking fee is sent. Usually a
        day or two before your appointment.
        <br />
        Ari’s studio is based in Oakland, California.
      </p>
    ),
  },
  {
    title: 'Touchups',
    description: (
      <p>
        Touchups are free for 1 year after your appointment. Please reach out
        with any concerns and Ari will be happy to get you in. Preferably we can
        do a new tattoo, since we will be getting materials out and dirty but
        its not required.
      </p>
    ),
  },
  {
    title: 'Guest spots',
    description: (
      <p>
        <a href='https://form.jotform.com/230657277104152'>
          Click here to request your city
        </a>
      </p>
    ),
  },
];

export default async function FAQ() {
  return (
    <SimpleLayout
      title='Frequently Asked Questions'
      intro='What you should know before your appointment.'>
      <Accordion items={accordionItems} />
    </SimpleLayout>
  );
}
