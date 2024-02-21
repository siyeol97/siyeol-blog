import Edit from './Edit';

export default function EditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <Edit id={id} />;
}
