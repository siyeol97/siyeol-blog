import Link from 'next/link';

export default function MainLogo() {
  return (
    <h4>
      <Link
        href={'/'}
        style={{ userSelect: 'none' }}
      >
        Siyeol&apos;s Dev-log
      </Link>
    </h4>
  );
}
