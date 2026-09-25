import { ArrowLink } from "@/components/arrow-link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container width="medium">
      <div className="py-hero">
        <h1 className="font-serif text-statement">Nothing here.</h1>
        <p className="mt-6 text-lede text-ink-soft">
          This page doesn&rsquo;t exist, or has moved.
        </p>
        <ArrowLink href="/" className="mt-10">
          Back to the start
        </ArrowLink>
      </div>
    </Container>
  );
}
