import { useRouter } from "next/router";

export default function ResultsPage() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div>
      <h1>Results</h1>
      <h1>{q}</h1>
    </div>
  );
}
